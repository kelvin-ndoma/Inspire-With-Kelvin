import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logofinal.svg"; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md z-20">
      <div className="flex items-center justify-between py-4 px-4 w-full">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo} // Replace with your logo image path
            alt="InspireWithKelvin Logo"
            className="w-10 h-10" // Adjust size of the logo as needed
          />
          <span className="text-2xl font-bold ml-2 hidden sm:block">
            Inspire With Kelvin
          </span>
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
        <div className="hidden md:flex items-center space-x-16">
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
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md" // Styled button
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
          <Link
            to="/"
            className="text-xl hover:text-gray-500 py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-gray-500 py-2"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-xl hover:text-gray-500 py-2"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-xl hover:text-gray-500 py-2"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-gray-500 py-2"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/blogs"
            className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md" // Styled button
            onClick={closeMenu}
          >
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
