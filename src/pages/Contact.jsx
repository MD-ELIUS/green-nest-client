import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-12 sm:py-16 md:py-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-12"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">Get in Touch</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Have questions or need assistance? Reach out to us via phone, email, or
            visit our office. We are happy to help you with all your plant needs.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <FaPhone className="text-green-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-green-500" />
              <span>info@greennest.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-green-500" />
              <span>123 Green St, Plant City, USA</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border-2 border-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-base sm:text-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border-2 border-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-base sm:text-lg"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              className="border-2 border-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-base sm:text-lg resize-none"
            />
            <button
              type="submit"
              className="btn btn-primary btn-outline py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
