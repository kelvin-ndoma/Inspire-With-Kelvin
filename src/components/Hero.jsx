import React from "react";
import heroImageUrl from "../assets/growth.png"


const HeroSection = () => {
 
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
      {/* Starry Background */}
      <div className="absolute inset-0 starry-bg -z-10"></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight">
              Welcome to <span className="text-yellow-400">Inspire with Kelvin</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-md mx-auto md:mx-0">
              Your trusted partner in <span className="font-semibold text-yellow-400">digital marketing</span> and{" "}
              <span className="font-semibold text-yellow-400">web development</span>. I craft impactful strategies and
              stunning websites that captivate, engage, and convert.
            </p>

            {/* Services CTA */}
            <div className="mt-12 space-y-6 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-start">
              <button className="px-8 py-4 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-200">
                Discover My Services
              </button>
              <button className="px-8 py-4 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-200">
                Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImageUrl}
              alt="Hero"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Highlights section with Four Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-yellow-400">Digital Marketing</h3>
            <p className="mt-3 text-gray-200">
              Elevate your brand's online presence with strategic SEO, PPC, and social media campaigns that drive results.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-yellow-400">Web Development</h3>
            <p className="mt-3 text-gray-200">
              I build modern, responsive, and secure websites tailored to your business goals.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-yellow-400">Creative Branding</h3>
            <p className="mt-3 text-gray-200">
              Transform your brand’s identity with innovative design, content, and strategy.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-yellow-400">Content Creation</h3>
            <p className="mt-3 text-gray-200">
              Craft compelling content that resonates with your audience and enhances brand engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
