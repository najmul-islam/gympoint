import Link from "next/link";

const FooterAddress = () => {
  return (
    <div className="">
      <h3 className="text-xl font-bold mb-4">Address</h3>
      <div className="flex flex-col gap-3">
        <p>291 South 21th Street, Suite 721 New York NY 10016</p>
        <p>+1 234 567 890</p>
        <p>info@yoursite.com</p>
        <p>
          <Link href="/">yourwebsite.com</Link>
        </p>
      </div>
    </div>
  );
};
export default FooterAddress;
