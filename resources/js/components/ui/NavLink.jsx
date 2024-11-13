import { Link } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        "inline-flex leading-5 transition duration-150 ease-in-out focus:outline-none " +
        (active
          ? "border-indigo-400 text-gray-900 focus:border-indigo-700 "
          : " hover:text-blue-500 focus:text-gray-500") +
        className
      }
    >
      {children}
    </Link>
  );
}
