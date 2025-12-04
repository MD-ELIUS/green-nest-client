import React from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const PlantDetails = () => {
  const { id } = useParams();
  const plantId = parseInt(id);
  const plantData = useLoaderData();
  const plant = plantData.find((p) => p.plantId === plantId);

  const handleBtn = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    e.target.reset();
  };

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-10 sm:py-12 md:py-16">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-8 sm:px-10 sm:py-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            {plant.plantName}
          </h1>
          <p className="text-gray-600 sm:text-lg md:text-xl">
            Discover the beauty and benefits of this plant.
          </p>
        </div>

        {/* Image & Info Grid */}
        <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-10 pb-8">
          {/* Swiper Images */}
          <div className="lg:w-1/2 w-full  overflow-hidden ">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {[plant.image, plant.image, plant.image].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={plant.plantName}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-115 object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full flex flex-col gap-6"
          >
       

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              {plant.description}
            </p>

           
          </motion.div>

          
        </div>

             {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mb-8">
              <div className="bg-green-50 p-4 rounded-xl shadow hover:shadow-lg text-center">
                <h3 className="font-semibold mb-1">Price</h3>
                <p className="text-green-600 font-bold">${plant.price}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl shadow hover:shadow-lg text-center">
                <h3 className="font-semibold mb-1">Rating</h3>
                <p className="text-yellow-500 font-bold">{plant.rating} ⭐</p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl shadow hover:shadow-lg text-center">
                <h3 className="font-semibold mb-1">Stock</h3>
                <p className="text-red-500 font-bold">{plant.availableStock}</p>
              </div>
            </div>

         {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-inner w-11/12  md:w-1/2 mx-auto mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
                Book a Consultation
              </h2>
              <form onSubmit={handleBtn} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border-2 border-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border-2 border-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                  Book Now
                </button>
              </form>
            </motion.div>


      </motion.div>
    </div>
  );
};

export default PlantDetails;
