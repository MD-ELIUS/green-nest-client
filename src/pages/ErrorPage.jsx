import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import errorImg from '.././assets/error1 - Edited - Edited.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">

      <div className="shadow-sm">
        <Navbar />
      </div>


      <main className="flex flex-col items-center justify-center text-center relative overflow-hidden px-4 my-4 sm:my-6 md:my-10 lg:my-14 xl:my-16 2xl:my-20 flex-grow">
        <div className="relative bg-white px-6 sm:px-8 py-8 sm:py-10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.05)] z-10 border border-gray-100 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 mb-2">
            Oops!
          </h1>
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-extrabold text-gray-800 leading-none">
            404
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-2 mb-3">
            Page Not Found
          </h3>
          <p className="text-gray-500 text-base sm:text-[1.05rem] leading-relaxed mb-6 max-w-md mx-auto">
            Don’t worry — let’s get you back home safely.
          </p>

          <a
            href="/"
            className="inline-block bg-primary text-white px-5 sm:px-6 py-2 rounded-full font-medium shadow-md hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
          >
            Return to Home
          </a>


          <div className=" flex justify-center">
            <img
              src={errorImg}
              alt="Plant Illustration"
              className="w-38 h-38 sm:w-48 sm:h-48 md:w-58 md:h-58 object-contain hover:scale-105 transition-transform duration-500 opacity-90"
            />
          </div>
        </div>
      </main>


      <div className="bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
