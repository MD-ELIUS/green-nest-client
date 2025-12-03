import React from 'react';
import { Link } from 'react-router';

const PlantOfTheWeek = ({ plants }) => {
    const plant = plants.find(p => p.plantOfTheWeek === true);


    return (
        <div className="w-11/12 max-w-6xl mx-auto my-8 sm:my-10 md:my-12 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-green-100 via-green-50 to-green-100 rounded-2xl shadow-lg">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-6">
                🌿 Plant of the Week
            </h2>


            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

                <div className=" w-full md:w-1/2 flex justify-center">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full max-w-sm md:max-w-md"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
                        {plant.plantName}
                    </h3>
                    <p className="text-sm sm:text-base md:text-base text-accent leading-relaxed">
                        {plant.description}
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mt-1">
                        <span className="text-base font-medium text-green-600">Price: ${plant.price}</span>
                        <span className="text-base font-medium text-yellow-500">Rating: {plant.rating} ⭐</span>
                    </div>


                    <Link
                        to={`/plants/${plant.plantId}`}
                        className="
              mt-3
              w-36 sm:w-40
              bg-primary text-white
              text-sm sm:text-base
              font-semibold
              rounded-lg
              py-2
              hover:bg-primary/90
              transition-colors duration-300
              mx-auto md:mx-0
              block md:inline-block
              text-center
            "
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantOfTheWeek;
