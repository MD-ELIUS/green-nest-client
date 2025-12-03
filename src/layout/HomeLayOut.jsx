import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayOut = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <section className='shadow-sm' >
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