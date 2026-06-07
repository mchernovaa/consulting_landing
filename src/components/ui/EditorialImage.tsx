import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "4/3" | "3/4" | "16/10" | "1/1" | "4/5";
  priority?: boolean;
};

const aspectClasses: Record<NonNullable<EditorialImageProps["aspect"]>, string> =
  {
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
  priority = false
}: EditorialImageProps) {
  return (
    <figure
      className={[
        "relative overflow-hidden rounded-2xl border border-divider bg-canvas-soft shadow-editorial",
        aspectClasses[aspect],
        className
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent"
        aria-hidden="true"
      />
    </figure>
  );
}
