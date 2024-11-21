import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import heroimage from "../assets/heroimage.png"; // Path to image

const About = () => {
  return (
    <motion.div 
      className="min-h-screen text-white px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Apply fade-in to the entire page
    >
      <div className="max-w-7xl mx-auto py-20 space-y-20">

        {/* Header Section with Animation */}
        <header className="text-center space-y-4">
          <motion.h1 
            className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 animate-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Empowering businesses through innovative marketing and technology solutions
          </motion.p>
        </header>

        {/* Introduction Section */}
        <motion.section 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Image Column */}
          <motion.div 
            className="relative w-full md:w-1/2 h-[600px] rounded-xl overflow-hidden shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={heroimage} // Use a normal <img> tag with src attribute
              alt="Kelvin Ndoma"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="flex flex-col space-y-6 md:w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Welcome!
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Hi, I’m <span className="font-semibold text-yellow-400">Kelvin Ndoma</span>, a passionate 
              <span className="font-semibold text-yellow-400"> Digital Marketer</span> and 
              <span className="font-semibold text-yellow-400"> Web Developer</span>. With a strong background in 
              <span className="font-semibold text-yellow-400"> Applied Mathematics and Physics</span>, I blend creativity with analytics 
              to craft tailored digital strategies that drive growth, enhance user engagement, and deliver measurable results. 
              Over the years, I’ve developed a knack for understanding market dynamics and leveraging technology to help businesses achieve their goals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether it’s crafting innovative marketing campaigns or building scalable web applications, I focus on providing holistic solutions 
              that cater to your business needs. Ready to take your brand to the next level? Let’s connect and create something exceptional together.
            </p>
            <a
              href="/images/Cv.pdf"
              download="Kelvin_Ndoma_Mutua_Resume.pdf"
              className="inline-block w-max px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg transform transition hover:scale-105"
            >
              Download My Resume
            </a>
          </motion.div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {[
            {
              title: "Digital Marketing & Strategy",
              skills: ["Digital Marketing Strategy", "Campaign Management", "SEO & SEM", "PPC Advertising", "Social Media Marketing", "Email Marketing & Automations", "Content Marketing", "Lead Generation"],
            },
            {
              title: "Analytics & Optimization",
              skills: ["Google Analytics 4", "Landing Page Optimization", "Web Traffic Analysis", "Performance Measurement (ROI, KPIs)", "Market Trend Analysis"],
            },
            {
              title: "Technical & Development Skills",
              skills: ["Digital Advertising", "Google Ads, FacebookAds, SEO Tools", "HTML, JavaScript, React.js, Ruby on Rails", "CSS, PostgreSQL", "Cross-functional Teamwork"],
            },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 1 }}
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>✔️</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission, Vision, Values */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {[
            {
              title: "Mission",
              content: "Empowering businesses with cutting-edge marketing strategies and state-of-the-art tech solutions.",
            },
            {
              title: "Vision",
              content: "To become a global leader in digital marketing and technology solutions, driving success for businesses worldwide.",
            },
            {
              title: "Values",
              content: "Integrity, Innovation, Collaboration, Excellence, Global Reach",
            },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 1 }}
            >
              <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Why Choose Me Section */}
        <motion.section 
          className="text-center space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 animate-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Why Choose Me?
          </motion.h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            I bring a unique blend of marketing and technical expertise, committed to helping businesses grow and build enduring brands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
            {[ 
              { title: "Cost Saving", description: "Maximize your budget with effective strategies." },
              { title: "Tech-Savvy", description: "Leveraging the latest tech for innovative solutions." },
              { title: "Long-Term Focus", description: "Dedicated to your sustained success." },
              { title: "Full-Service Approach", description: "Comprehensive solutions for all your needs." },
              { title: "Transparent Communication", description: "Clear and open collaboration." },
              { title: "Integrity", description: "Upholding the highest standards in all I do." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg space-y-4 hover:scale-105 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
              >
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
