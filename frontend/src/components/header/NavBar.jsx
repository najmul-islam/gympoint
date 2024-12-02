import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <ul className="flex space-x-4 text-white ">
      <NavLink url="/">Home</NavLink>
      <NavLink url="/classes">Classes</NavLink>
      <NavLink url="/schedule">Schedule</NavLink>
      <NavLink url="/trainers">Trainers</NavLink>
      {/* <NavLink url="/events">Events</NavLink> */}
      <NavLink url="/contact">Contact</NavLink>
    </ul>
  );
};
export default NavBar;
