const IntroItem = ({ intro }) => {
  const { title, description, thumbnail, price } = intro;
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover h-72 flex flex-col justify-center items-center p-8 text-center gap-4"
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="text-3xl font-bold text-white z-10">{title}</h1>
      <p className="text-sm text-white z-10">{description}</p>
      <div className="text-white flex flex-col p-2 rounded-t-3xl z-10 w-30 absolute bottom-0 left-3 bg-[linear-gradient(45deg,_#DC2F2F_0%,_#9870FC_100%)]">
        <span className="font-bold text-sm">{price}</span>
        <span className="font-thin text-sm">/month</span>
      </div>
    </div>
  );
};
export default IntroItem;
