import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';

const HomeLayOut = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-[1600px] mx-auto  bg-gradient-to-br from-green-50 via-green-100 to-green-200'>
            <ScrollToTop></ScrollToTop>
            <section className='shadow-sm sticky top-0 z-50 bg-white' >
                <Navbar></Navbar>
            </section>

            <main className="flex-grow">
                <Outlet></Outlet>
            </main>

            <section className='bg-gray-800'>
                <Footer></Footer>
            </section>

            <ToastContainer />
        </div>
    );
};

export default HomeLayOut;