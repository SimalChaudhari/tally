import { Link } from 'react-router-dom';
import { useState } from 'react';
import tallyLogo from "../../assets/images/tallyLogo.png";
import { CgClose, CgMenuLeft } from 'react-icons/cg';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links
  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Products', to: '/products' },
    { name: 'Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg border-b-2 border-black">
      <nav className="container mx-auto flex justify-between items-center max-w-webContainer">
        <img src={tallyLogo} alt="logo" className='lg:ml-0 ml-3' />

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center cursor-pointer lg:mr-0 mr-3" onClick={toggleMenu}>
          {/* Conditionally show CgMenuLeft or CgClose based on isMenuOpen */}
          {isMenuOpen ? (
            <CgClose className='text-3xl' />
          ) : (
            <CgMenuLeft className='text-3xl' />
          )}
        </div>

        {/* Desktop and Mobile Navigation Links */}
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} hidden space-x-8 md:space-x-6`}>
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-lg hover:text-gray-400 transition-all">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Dropdown (visible only on mobile) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}  p-4 mt-4 rounded-lg transition-all text-black`}>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block py-2 px-4 text-lg hover:text-gray-400 transition-all border-b border-[1] "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
