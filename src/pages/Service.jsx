import React from "react";
import { motion } from "framer-motion";

const approach = [
  { title: "Listen", description: "We understand your challenges, goals, and vision.", icon: "👂" },
  { title: "Analyze", description: "Break down your current situation to find opportunities.", icon: "📊" },
  { title: "Research", description: "Discover the best strategies tailored for your business.", icon: "🔍" },
  { title: "Solve", description: "Deliver innovative and practical solutions to meet your needs.", icon: "💡" },
];

const offerings = [
  { title: "SEO Optimization", description: "Improve your website’s search engine rankings and visibility with our cutting-edge optimization techniques.", icon: "⚙️" },
  { title: "Social Media Marketing", description: "Expand your brand's reach with tailored strategies for platforms like Facebook, Instagram, and LinkedIn.", icon: "📱" },
  { title: "Web Design & Development", description: "We create visually appealing, responsive websites tailored to your needs with exceptional user experience.", icon: "💻" },
  { title: "Content Creation", description: "Our team crafts compelling content from blog posts to social media updates to resonate with your audience.", icon: "✍️" },
  { title: "PPC Campaigns", description: "Maximize ROI with targeted advertising on Google Ads, Facebook Ads, and other platforms.", icon: "💰" },
  { title: "Email Marketing", description: "Leverage personalized email campaigns to nurture leads and maximize conversions.", icon: "📧" },
  { title: "Consultation", description: "Get expert advice on digital marketing and web development strategies to achieve your business goals.", icon: "🧠" },
  { title: "Analytics & Reporting", description: "Understand your data with detailed analytics and reporting to drive better decisions and performance.", icon: "📊" },
  { title: "Brand Strategy", description: "Define and elevate your brand identity with tailored branding strategies for better audience connection.", icon: "🎯" },
  { title: "E-commerce Optimization", description: "Enhance your online store’s performance with user-friendly design, faster checkout, and product optimizations.", icon: "🛒" },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "$199/month",
    features: ["Basic SEO", "Social Media Posting", "Email Support", "Monthly Analytics Report"],
  },
  {
    title: "Standard",
    price: "$499/month",
    features: ["Advanced SEO", "Social Media Management", "Phone & Email Support", "Bi-Weekly Analytics Report", "Content Creation (5 posts)"],
  },
  {
    title: "Premium",
    price: "$999/month",
    features: ["Full SEO Suite", "Social Media Strategy", "Priority Support", "Weekly Analytics Report", "Content Creation (10 posts)", "PPC Campaigns"],
  },
];

const Offerings = () => {
  return (
    <div className="bg-gray-50 py-16 mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h3
          className="text-lg text-blue-600 font-semibold uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Approach
        </motion.h3>
        <motion.h2
          className="text-3xl font-extrabold text-gray-800 mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How We Work
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          From listening to solving, we ensure a seamless process that puts your business first.
        </motion.p>
      </div>

      {/* Approach Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 md:space-y-0 space-y-6 relative mb-16">
        {approach.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="bg-white shadow-md rounded-lg p-8 text-center max-w-xs z-10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="text-blue-600 text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>

            {/* Dotted Lines */}
            {index < approach.length - 1 && (
              <div className="hidden md:flex items-center w-12 md:w-20">
                <div className="w-full h-0 border-dotted border-b-2 border-gray-400"></div>
              </div>
            )}

            {/* Vertical Dotted Line for Small Screens */}
            {index < approach.length - 1 && (
              <div className="md:hidden flex flex-col items-center">
                <div className="h-12 border-dotted border-l-2 border-gray-400"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* What We Offer Section */}
      <div className="bg-white py-12">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {offerings.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="text-blue-600 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Standard Pricing Section */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Market Standard Pricing</h2>
          <p className="text-gray-600 mb-12">
            Choose the package that best suits your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <ul className="text-gray-600 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">✔️ {feature}</li>
                  ))}
                </ul>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-6">
            Let’s work together to bring your vision to life. Contact us today to
            get started on your digital transformation journey.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
