import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGem, FaGoogle, FaMailchimp, FaFigma, FaReact, FaDatabase, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiNextdotjs, SiCanva } from 'react-icons/si';

function TestimonialCard() {
  return (
    <section className="bg-gray-50 py-16 font-inter">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Stacks & Digital Marketing Tools</h2>
        
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          
          {/* Frontend Development Category */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <SiNextdotjs className="text-gray-900 text-4xl mr-4" />
                <p className="text-lg">Next.js</p>
              </div>
              <div className="flex items-center">
                <FaReact className="text-blue-500 text-4xl mr-4" />
                <p className="text-lg">React</p>
              </div>
              <div className="flex items-center">
                <FaHtml5 className="text-orange-500 text-4xl mr-4" />
                <p className="text-lg">HTML5</p>
              </div>
              <div className="flex items-center">
                <FaCss3Alt className="text-blue-500 text-4xl mr-4" />
                <p className="text-lg">CSS3</p>
              </div>
              <div className="flex items-center">
                <FaJs className="text-yellow-500 text-4xl mr-4" />
                <p className="text-lg">JavaScript</p>
              </div>
            </div>
          </div>
          
          {/* Backend Technologies Category */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Backend Technologies</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaNodeJs className="text-green-500 text-4xl mr-4" />
                <p className="text-lg">Node.js</p>
              </div>
              <div className="flex items-center">
                <FaPython className="text-blue-500 text-4xl mr-4" />
                <p className="text-lg">Python</p>
              </div>
              <div className="flex items-center">
                <FaGem className="text-red-500 text-4xl mr-4" />
                <p className="text-lg">Ruby on Rails</p>
              </div>
              <div className="flex items-center">
                <FaDatabase className="text-indigo-600 text-4xl mr-4" />
                <p className="text-lg">PostgreSQL</p>
              </div>
            </div>
          </div>

          {/* Digital Marketing Tools Category */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Digital Marketing Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaGoogle className="text-blue-600 text-4xl mr-4" />
                <p className="text-lg">Google Ads</p>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-blue-700 text-4xl mr-4" />
                <p className="text-lg">Facebook Ads</p>
              </div>
              <div className="flex items-center">
                <FaInstagram className="text-pink-500 text-4xl mr-4" />
                <p className="text-lg">Instagram Ads</p>
              </div>
              <div className="flex items-center">
                <FaMailchimp className="text-yellow-600 text-4xl mr-4" />
                <p className="text-lg">Email Marketing & Automation</p>
              </div>
              <div className="flex items-center">
                <p className="text-lg">Strategy & Analytics</p>
              </div>
            </div>
          </div>

          {/* Design Tools Category */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Design Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaFigma className="text-purple-600 text-4xl mr-4" />
                <p className="text-lg">Figma</p>
              </div>
              <div className="flex items-center">
                <SiCanva className="text-blue-600 text-4xl mr-4" />
                <p className="text-lg">Canva</p>
              </div>
            </div>
          </div>

        </div>

        {/* Marketing Quote Card */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto space-y-4 sm:space-y-0">
          <p className="text-xl italic sm:mr-4">"Great marketing doesn't feel like marketing. It inspires, engages, and connects."</p>
          <button
            onClick={() => window.location.href = 'mailto:kelvinmutuandoma@gmail.com'}
            className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Let's Talk Specifics
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;
