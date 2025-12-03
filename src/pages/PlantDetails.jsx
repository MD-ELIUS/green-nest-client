import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const PlantDetails = () => {
  const paramId = useParams();
  const plantId = parseInt(paramId.id);
  const plantData = useLoaderData();
  const plant = plantData.find(p => p.plantId === plantId);

  const handleBtn = (event) => {
    event.preventDefault();
    toast.success("Consultation booked successfully!");
    event.target.reset();
  }

  return (
    <div className="w-11/12 max-w-5xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 xl:py-18 2xl:py-20 bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 my-4 sm:my-6 md:my-10 lg:my-14 xl:my-16 2xl:my-20">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[64px] font-bold text-primary text-center mb-8 sm:mb-10">
        Plant Details
      </h1>

      {/* Plant Image */}
      <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-10">
        <img
          className="w-full max-w-3xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] rounded-2xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          src={plant.image}
          alt={plant.plantName}
        />
      </div>

      {/* Plant Info */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] 2xl:text-[48px] font-semibold text-primary">
          {plant.plantName}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] text-accent leading-relaxed">
          {plant.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 md:gap-16 mt-4 sm:mt-6">
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
            Price: <span className="text-green-600 font-semibold">${plant.price}</span>
          </h4>
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
            Rating: <span className="text-yellow-500 font-semibold">{plant.rating} ⭐</span>
          </h4>
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
            Stock: <span className="text-red-500 font-semibold">{plant.availableStock}</span>
          </h4>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-10 sm:mt-12 md:mt-16 bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-inner flex justify-center">
        <form onSubmit={handleBtn} className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-md">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-[44px] text-center font-semibold">
            Book Consultation
          </h1>

          <label className="text-base sm:text-lg md:text-xl font-medium text-gray-700 ">Name</label>
          <input
            type="text"
            className="w-full border-2 border-green-500 focus:outline-none focus:ring-2 rounded-lg p-3 text-base sm:text-lg md:text-xl"
            placeholder="Your Name"
            required
          />

          <label className="text-base sm:text-lg md:text-xl font-medium text-gray-700 ">Email</label>
          <input
            type="email"
            className="w-full border-2 border-green-500 focus:outline-none focus:ring-2 rounded-lg p-3 text-base sm:text-lg md:text-xl"
            placeholder="Email Address"
            required
          />

          <button
            type="submit"
            className="w-full mt-4 sm:mt-6 md:mt-8 bg-primary text-white text-base sm:text-lg md:text-xl font-semibold rounded-lg py-3 hover:bg-primary/90 transition-colors duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>

  );
};

export default PlantDetails;