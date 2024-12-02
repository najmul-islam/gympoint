"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GoLink } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
const FooterLink = ({ children, url }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <li>
      <Link
        href={url}
        className={`flex items-center gap-2 hover:text-primary hover:underline transition-all duration-300 ease-in-out ${
          isActive ? "text-primary" : ""
        }`}
      >
        <IoIosArrowRoundForward className="text-2xl" /> {children}
      </Link>
    </li>
  );
};
export default FooterLink;
