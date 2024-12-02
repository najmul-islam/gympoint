import FooterAbout from "./FooterAbout";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterContact from "./FooterContact";
import FooterAddress from "./FooterAddress";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:grid-cols-4">
          <FooterAbout />
          <FooterQuickLinks />
          <FooterContact />
          <FooterAddress />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
