import { getTranslations } from "next-intl/server";

export async function SocialProofStrip() {
  const t = await getTranslations("SocialProof");
  const items = t.raw("items") as string[];

  return (
    <div className="bg-canvas-soft/40">
      <div className="container-page py-3 sm:py-4">
        <ul className="flex flex-col items-center gap-2 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-1.5">
          {items.map((item, index) => (
            <li
              key={item}
              className="inline-flex max-w-full items-center gap-2 font-sans text-[12px] font-light leading-snug tracking-[0.01em] text-ink-muted sm:max-w-none sm:text-[15px] sm:tracking-[0.02em]"
            >
              {index > 0 ? (
                <span
                  className="hidden text-amberRetro/50 sm:inline"
                  aria-hidden="true"
                >
                  ·
                </span>
              ) : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
