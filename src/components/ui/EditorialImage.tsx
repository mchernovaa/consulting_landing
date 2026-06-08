import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "4/3" | "3/4" | "16/10" | "1/1" | "4/5" | "auto";
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
  priority?: boolean;
};

const aspectClasses: Record<
  Exclude<NonNullable<EditorialImageProps["aspect"]>, "auto">,
  string
> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "16/10": "aspect-[16/10]",
  "1/1": "aspect-square"
};

export function EditorialImage({
  src,
  alt,
  className = "",
  aspect = "4/3",
  fit = "cover",
  width = 1024,
  height = 768,
  priority = false
}: EditorialImageProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (aspect === "auto") {
    return (
      <figure
        className={[
          "max-w-full overflow-hidden rounded-2xl border border-divider bg-canvas-soft shadow-editorial",
          className
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 92vw, (max-width: 1200px) 50vw, 40vw"
          className={["h-auto w-full max-w-full", fitClass].join(" ")}
        />
      </figure>
    );
  }

  return (
    <figure
      className={[
        "relative max-w-full overflow-hidden rounded-2xl border border-divider bg-canvas-soft shadow-editorial",
        aspectClasses[aspect],
        className
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 92vw, (max-width: 1200px) 50vw, 33vw"
        className={fitClass}
      />
      {fit === "cover" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      ) : null}
    </figure>
  );
}
