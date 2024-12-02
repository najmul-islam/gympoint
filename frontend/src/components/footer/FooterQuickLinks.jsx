import FooterLink from "./FooterLink";
const FooterQuickLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="flex flex-col gap-2">
        <FooterLink url="/">Home</FooterLink>
        <FooterLink url="/classes">Classes</FooterLink>
        <FooterLink url="/schedule">Schedule</FooterLink>
        <FooterLink url="/trainers">Trainers</FooterLink>
        <FooterLink url="/contact">Contact</FooterLink>
      </ul>
    </div>
  );
};
export default FooterQuickLinks;
