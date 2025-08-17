import Link from "next/link";
import clsx from "clsx";

interface NavButtonProps {
  text: string;
  href: string;
  variant?: "solid" | "outline";
}

export function NavButton({ text, href, variant = "outline" }: NavButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition",
        variant === "solid"
          ? "bg-black text-white hover:bg-gray-800"
          : "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
      )}
    >
      {text}
    </Link>
  );
}
