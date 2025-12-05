import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoImg from "../assets/logo.png"; // আপনার logo path
import { IoMdNotificationsOutline } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to='/' className='flex gap-2 items-center'>
            <img className='h-10 w-10' src={logoImg} alt="Logo" />
            <h4 className='font-bold text-primary text-[24px]'>GreenNest</h4>
          </Link>
          <p className="text-gray-600 text-center md:text-left">
            Bringing nature closer to your home. Explore our collection of indoor plants and eco-friendly decor ideas.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <div className="flex flex-col gap-2 footActive">
            <NavLink to="/" className="hover:text-green-600 transition">Home</NavLink>
            <NavLink to="/plants" className="hover:text-green-600 transition">Plants</NavLink>
            <NavLink to="/about" className="hover:text-green-600 transition">About Us</NavLink>
            
            <NavLink to="/contact" className="hover:text-green-600 transition">Contact</NavLink>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg">Subscribe to our Newsletter</h4>
          <p className="text-gray-600 text-center md:text-left text-sm">
            Get the latest updates on plants, care tips, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row  md:flex-col lg:flex-row w-full max-w-sm gap-2 mt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button type="submit" className="px-4 py-2  btn btn-primary btn-soft font-semibold transition">
             <IoMdNotificationsOutline size={20} /> Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
