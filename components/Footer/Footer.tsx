import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterMobile from "./FooterMobile/FooterMobile";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-6 lg:py-20">
      <FooterMobile />
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
