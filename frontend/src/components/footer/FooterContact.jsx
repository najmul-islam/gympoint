import Link from "next/link";
import { IoMailOutline, IoVideocamOutline } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Contact</h3>
      <ul className="flex flex-col gap-2">
        <li className="transition duration-200 ">
          <Link
            href="https://gympoint.vercel.app/"
            className="flex items-center gap-2 text-white hover:text-primary hover:underline transition-all duration-300 ease-in-out"
            aria-label="website"
            target="_blank"
          >
            <BiLinkExternal className="text-[16px] " />
            GymPoin
          </Link>
        </li>
        <li className="transition duration-200 ">
          <Link
            href="mailto:najmulislam519@gmail.com"
            className="flex items-center gap-2 text-white hover:text-primary hover:underline transition-all duration-300 ease-in-out"
            aria-label="gmail"
          >
            <IoMailOutline className="text-[16px]" />
            najmulislam519@gmail.com
          </Link>
        </li>
        <li className="transition-all duration-200">
          <Link
            href="#"
            className="flex items-center gap-2 text-white hover:text-primary hover:underline transition-all duration-300 ease-in-out"
            aria-label="google meet"
          >
            <IoVideocamOutline className="text-[16px] " />
            Meet
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterContact;
