"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ children, url }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <li>
      <Link
        href={url}
        className={`hover:text-[#FD7E15] font-semibold transition-all duration-300 ease-in-out ${
          isActive ? "text-[#FD7E15]" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};
export default NavLink;
