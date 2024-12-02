import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterAbout = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">
        <Link href="/" className="font-bold">
          <span className="text-white">Gym</span>
          <span className="text-[#FD7E15]">Point</span>
        </Link>
      </h3>
      <p>
        Gympoint is your trusted partner in achieving fitness goals. With
        tailored plans, expert tips, and progress tracking, we empower you to
        embrace a healthier lifestyle and reach your full potential.
      </p>

      <h4 className="my-3 text-md font-semibold text-primary">Social link</h4>
      <ul className="flex items-center space-x-2">
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="#" target="_blank" aria-label="facebook">
            <FaFacebookF className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="#" target="_blank" aria-label="instagram">
            <FaInstagram className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)]  hover:ease-in">
          <a href="#" target="_blank" aria-label="linkedin">
            <FaLinkedinIn className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-100 ease-in hover:bg-[rgba(0,0,0,0.10)] hover:ease-in">
          <a href="#" target="_blank" aria-label="twitter">
            <FaXTwitter className="group-hover:text-white-900 text-[#0254B1] duration-200 ease-in hover:ease-in" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default FooterAbout;
