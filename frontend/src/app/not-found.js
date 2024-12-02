import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flex h-[80vh] w-full flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-black">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#FD7E15] px-2 text-sm text-black">
        Page Not Found
      </div>
      <Link
        href="/"
        className="mt-4 inline-block rounded border border-[#FD7E15] px-2 py-1 text-sm font-medium text-[#FD7E15] transition-transform hover:bg-[#FD7E15] hover:text-[#212529] focus:outline-none"
      >
        Go Home
      </Link>
    </section>
  );
};
export default NotFound;
