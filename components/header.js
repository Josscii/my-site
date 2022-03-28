import Link from "next/link";

export default function Header({ title, href }) {
  return (
    <div className="text-xl py-4">
      <Link href="/">
        <a className="hover:text-blue-600 hover:underline">Josscii</a>
      </Link>
      {"'s "}
      <Link href={href}>
        <a className="hover:text-blue-600 hover:underline">{title}</a>
      </Link>
    </div>
  );
}
