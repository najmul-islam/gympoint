const Spinner = () => {
  return (
    <div class="flex h-screen items-center justify-center space-x-2 bg-[#ffffff] ">
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#FD7E15] [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#FD7E15] [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#FD7E15]"></div>
    </div>
  );
};

export default Spinner;
