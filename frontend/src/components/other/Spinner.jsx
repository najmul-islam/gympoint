const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-[#ffffff] ">
      <div className="h-4 w-4 animate-bounce rounded-full bg-[#FD7E15] [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-[#FD7E15] [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-[#FD7E15]"></div>
    </div>
  );
};

export default Spinner;
