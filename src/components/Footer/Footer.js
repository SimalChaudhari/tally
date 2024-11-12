import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterLogo from "../../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-custome-blue-light text-white pt-20  ">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col lg:flex-row  lg:gap-56 gap-10">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <img src={FooterLogo} alt="Footer Logo" className="lg:w-40" />
          </div>

          {/* Sections Group (Products, Services, Resources, Quick Links) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {/* Products Section */}
            <div className="flex flex-col mb-5 lg:mb-0">
              <h3 className="text-lg font-normal">Our Products</h3>
              <div className="border-t-2 border-white w-5 my-2 mb-5"></div>
              <h4 className="font-roboto text-base my-2 text-slate-200">TallyPrime</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">TallyPrime Server</h4>
            </div>

            {/* Services Section */}
            <div className="flex flex-col mb-5 lg:mb-0">
              <h3 className="text-lg font-normal">Our Services</h3>
              <div className="border-t-2 border-white w-5 my-2 mb-5"></div>
              <h4 className="font-roboto text-base my-2 text-slate-200">Tally Software Services</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">Extensions and <br /> Integration</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">Tally Customization</h4>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col mb-5 lg:mb-0">
              <h3 className="text-lg font-normal">Resources</h3>
              <div className="border-t-2 border-white w-5 my-2 mb-5"></div>
              <h4 className="font-roboto text-base my-2 text-slate-200">Disclaimer</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">Privacy Policy</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">Terms and Conditions</h4>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-normal">Quick Links</h3>
              <div className="border-t-2 border-white w-5 my-2 mb-5"></div>
              <h4 className="font-roboto text-base my-2 text-slate-200">About Us</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">FAQ’s</h4>
              <h4 className="font-roboto text-base my-2 text-slate-200">Support</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white py-4 text-center">
        <div className="lg:flex justify-between container mx-auto max-w-screen-xl font-roboto gap-10">
          <div>
            <p>&copy; Copyright 2023. All Rights Reserved.</p>
          </div>
          <div className=" flex gap-4 text-slate-300 lg:mt-0 lg:ml-0 mt-3 ml-3">
            <FaFacebookF className="text-xl" /> <FaInstagram className="text-xl" /> <FaLinkedinIn className="text-xl" /> <FaTwitter className="text-xl" /> <FaYoutube className="text-xl" /></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
