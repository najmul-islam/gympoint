import NavBar from "./NavBar";
import Logo from "./Logo";
import Auth from "./Auth";

const Header = () => {
  return (
    <header className="bg-black z-10">
      <nav className="container h-[80px] flex justify-between items-center">
        <Logo />
        <NavBar />
        <Auth />
      </nav>
    </header>
  );
};
export default Header;
