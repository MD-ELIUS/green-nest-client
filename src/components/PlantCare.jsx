import React from 'react';
import wateringImg from '.././assets/watering.jpg'
import sunlightImg from '.././assets/sunlight.webp'
import fertilizerImg from '.././assets/fertilizer.jpg'
import { FaCheck } from 'react-icons/fa';


const PlantCare = () => {
    return (
        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 justify-center items-center w-11/12 mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-20'>
            <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center'>Plant Care Tips</h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 rounded-2xl shadow-sm p-5 border-2 border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                <img className="w-full lg:w-[250px] h-[180px] object-cover rounded-xl" src={wateringImg}
                    alt="Watering" />

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="text-primary text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-semibold">Watering Tips</h3>
                    <ul className="ml-3 space-y-3 text-sm md:text-base xl:text-[15px] 2xl:text-[16px]">
                        <li className="flex gap-2 items-start ">
                            <FaCheck className="text-green-600 mt-1" />
                            Water your plants when the top 1 inch of soil feels dry.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Use room temperature water for better absorption.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Avoid watering the leaves to prevent fungal diseases.
                        </li>
                    </ul>
                </div>
            </div>



            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 rounded-2xl shadow-sm p-5 border-2 border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                <img className="w-full lg:w-[250px] h-[180px] object-cover rounded-xl" src={sunlightImg}
                    alt="Watering" />

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="text-primary text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-semibold">Sunlight Tips</h3>
                    <ul className="ml-3 space-y-3 text-sm md:text-base xl:text-[15px] 2xl:text-[16px]">
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Place your plants where they get bright, indirect sunlight.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Rotate your plants weekly for even light exposure.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Avoid direct afternoon sun to prevent leaf burn.
                        </li>
                    </ul>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 rounded-2xl shadow-sm p-5 border-2 border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                <img className="w-full lg:w-[250px] h-[180px] object-cover rounded-xl" src={fertilizerImg}
                    alt="Watering" />

                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="text-primary text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-semibold">Fertilizing Tips</h3>
                    <ul className="ml-3 space-y-3 text-sm md:text-base xl:text-[15px] 2xl:text-[16px]">
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Fertilize once every 2–4 weeks during the growing season.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Use a balanced liquid fertilizer diluted to half strength.
                        </li>
                        <li className="flex gap-2 items-start">
                            <FaCheck className="text-green-600 mt-1" />
                            Stop fertilizing in winter when plant growth slows down.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PlantCare;