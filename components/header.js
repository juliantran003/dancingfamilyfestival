import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <menu>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/lineup">lineup</Link>
        </li>
        <li>
          <Link href="/information">information</Link>
        </li>
        <li>
          <Link href="/involved">get involved</Link>
        </li>
        <li>
          <Link href="/about">about us</Link>
        </li>
      </menu>
    </header>
  );
}
