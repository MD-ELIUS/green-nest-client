import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png"; // তুমি নিজস্ব image path দিতে পারো

const AboutUs = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-12 sm:py-16 md:py-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-12"
      >
        About Us
      </motion.h1>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image */}
        <div className="md:w-1/2  overflow-hidden ">
          <img
            src="https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png"
            alt="About Us"
            className="w-full h-64 sm:h-80 md:h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At GreenNest, we believe in bringing the beauty and benefits of indoor plants
            into every home. Our mission is to make plant care easy, enjoyable, and
            sustainable for everyone.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mt-6">
            Our Vision
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We envision a world where greenery enhances mental well-being and indoor
            spaces, creating healthier, happier, and more vibrant living environments.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Alice", "Bob", "Charlie"].map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img
                  src={`https://i.pravatar.cc/150?img=${idx + 55}`}
                  alt={member}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary">{member}</h3>
              <p className="text-gray-600 mt-2">Plant Enthusiast</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
