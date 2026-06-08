import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <body className="bg-canvas text-ink">
        <div className="mx-auto max-w-xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4 text-ink-muted">Page not found</p>
          <Link href="/" className="mt-8 inline-block underline">
            Home
          </Link>
        </div>
      </body>
    </html>
  );
}
