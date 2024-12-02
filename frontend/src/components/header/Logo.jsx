import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold">
      <span className="text-white">Gym</span>
      <span className="text-[#FD7E15]">Point</span>
    </Link>
  );
};
export default Logo;
