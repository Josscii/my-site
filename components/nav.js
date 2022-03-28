import Link from "next/link";

export default function Nav({ children, ...props }) {
  return (
    <Link {...props}>
      <a className="text-blue-600 underline">{children}</a>
    </Link>
  );
}
