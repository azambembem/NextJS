import Link from "next/link";

export default function GlobalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Link href="/">ONE BOOK</Link>
      </header>
      <main>{children}</main>
      <footer>아잠</footer>
    </div>
  );
}
