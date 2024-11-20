import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white text-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          InspireWithKelvin
        </Link>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          )}
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center justify-center flex-grow px-8 py-2 space-x-16">
  <Link
    to="/"
    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    Home
  </Link>
  <Link
    to="/about"
    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    About
  </Link>
  <Link
    to="/services"
    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    Services
  </Link>
  <Link
    to="/portfolio"
    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    Portfolio
  </Link>
  <Link
    to="/contact"
    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    Contact
  </Link>
</div>


        {/* Blogs button for large screens */}
        <div className="hidden md:block">
          <Link
            to="/blogs"
            className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-100"
          >
            Blogs
          </Link>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-gray-800 text-2xl focus:outline-none"
            onClick={closeMenu}
          >
            &times;
          </button>

          {/* Menu links */}
          <Link to="/" className="text-xl hover:text-gray-500 py-2" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="text-xl hover:text-gray-500 py-2" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" className="text-xl hover:text-gray-500 py-2" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/portfolio" className="text-xl hover:text-gray-500 py-2" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/contact" className="text-xl hover:text-gray-500 py-2" onClick={closeMenu}>
            Contact
          </Link>
          <Link
            to="/blogs"
            className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-100"
          >
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
