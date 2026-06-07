import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section bg-canvas">
      <div className="container-page">
        <p className="section-kicker">Страница не найдена</p>
        <h1 className="section-heading">404</h1>
        <p className="mt-4 max-w-xl text-sm font-light text-ink-muted sm:text-base">
          Похоже, вы перешли по неверной ссылке. Вернитесь на главную.
        </p>
        <Link href="/" className="button-primary mt-8">
          На главную
        </Link>
      </div>
    </div>
  );
}
