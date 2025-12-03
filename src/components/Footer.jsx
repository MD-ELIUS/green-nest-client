import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-5  justify-between items-center w-11/12 mx-auto py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 2xl:py-10'>


                <div>
                    <h3 className='font-bold text-primary text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[28px]mb-1 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-3'>Quick Links</h3>
                    <nav className="grid grid-flow-col gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-4 2xl:gap-4 text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-[16px] 2xl:text-[16px] text-white">
                        <Link to='/' className="link link-hover hover:text-primary font-semibold">About us</Link>
                        <Link to='/' className="link link-hover hover:text-primary font-semibold">Contact</Link>
                        <Link to='/' className="link link-hover hover:text-primary font-semibold">Privacy Policy</Link>
                    </nav>
                </div>

                <div>
                    <h3 className='font-bold text-primary text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[28px] mb-1 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-3'>Social Media</h3>
                    <nav className="grid grid-flow-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-6">
                        <a href="https://www.instagram.com/" target="_blank" >
                            <FaInstagram className="w-6 h-6  md:w-8 md:h-8 lg:w-8" color="#E1306C" />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" >
                            <FaFacebook className="w-6 h-6  md:w-8 md:h-8 lg:w-8" color="blue" />
                        </a>

                        <a href="https://www.pinterest.com/" target="_blank" >
                            <FaPinterest className="w-6 h-6  md:w-8 md:h-8 lg:w-8" color="red" />
                        </a>

                    </nav>
                </div>

                <aside>
                    <p className='font-medium text-center text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-[16px] 2xl:text-[16px] text-white'>Copyright © {new Date().getFullYear()} - GreenNest. All rights reserved.</p>
                </aside>


            </footer>
        </div>
    );
};

export default Footer;