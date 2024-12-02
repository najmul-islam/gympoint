const Newsletter = () => {
  return (
    <section
      className="py-10 h-64 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/newslatter/newslatter.jpg')" }}
    >
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-4xl">Subscribe Newsletter</h2>
        <p>Subscribe our newsletter and get latest update</p>

        <form action="">
          <input type="text" />
          <button>Subscribe now</button>
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
