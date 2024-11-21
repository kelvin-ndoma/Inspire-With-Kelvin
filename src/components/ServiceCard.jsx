import React from 'react';
import { FaDesktop, FaFacebookF, FaChartLine, FaEnvelope, FaSearch, FaCode, FaBullhorn, FaMobileAlt, FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function ServicesOffered() {
  return (
    <section className="bg-gray-50 py-16 font-inter">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-500 mb-12">
          We offer a variety of services to help your business grow and thrive in the digital world.
        </p>

        {/* Services Cards */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          
          {/* Web Design */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaDesktop className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-center text-gray-500 mb-4">
              Creating modern, responsive websites that are visually appealing and user-friendly.
            </p>
            <Link to="/services/web-design" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Social Media Management */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaFacebookF className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
            <p className="text-center text-gray-500 mb-4">
              Manage your brand's presence across all social media platforms to drive engagement.
            </p>
            <Link to="/services/social-media-management" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Digital Marketing */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaChartLine className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-center text-gray-500 mb-4">
              Crafting strategies to drive traffic and grow your business online.
            </p>
            <Link to="/services/digital-marketing" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Email Marketing */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaEnvelope className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
            <p className="text-center text-gray-500 mb-4">
              Target your audience with tailored email campaigns that convert.
            </p>
            <Link to="/services/email-marketing" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* SEO */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaSearch className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">SEO</h3>
            <p className="text-center text-gray-500 mb-4">
              Improve your website's visibility on search engines and drive organic traffic.
            </p>
            <Link to="/services/seo" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Fullstack Web Development */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaCode className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fullstack Web Development</h3>
            <p className="text-center text-gray-500 mb-4">
              Build powerful, dynamic, and scalable web applications.
            </p>
            <Link to="/services/fullstack-web-development" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* Ads */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaBullhorn className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ads</h3>
            <p className="text-center text-gray-500 mb-4">
              Create and manage ad campaigns that capture attention and drive conversions.
            </p>
            <Link to="/services/ads" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* New Service 1: Mobile App Development */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaMobileAlt className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-center text-gray-500 mb-4">
              Develop mobile applications for Android and iOS to expand your reach.
            </p>
            <Link to="/services/mobile-app-development" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

          {/* New Service 2: Content Writing */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaPenNib className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Writing</h3>
            <p className="text-center text-gray-500 mb-4">
              Craft compelling content that resonates with your audience and drives engagement.
            </p>
            <Link to="/services/content-writing" className="text-blue-600 font-medium hover:underline">Learn More →</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesOffered;
