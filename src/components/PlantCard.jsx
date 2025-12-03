import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
  return (
    <div className='p-3 rounded-[16px] shadow-md space-y-1 sm:space-y-2 md:space-y-2.5 lg:space-y-3 xl:space-y-3 2xl:space-y-3'>
      <img className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[320px] 2xl:h-[350px] rounded-xl' src={plant.image} alt="" />
      <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold text-black text-center'>{plant.plantName}</h3>

      <div className='flex flex-col gap-1 md:flex-row md:justify-between justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-[20px] text-accent'>
        <p>Price: <span className=' font-medium text-green-600'>${plant.price}</span></p>
        <p>Rating: <span className='text-yellow-500 font-medium'>{plant.rating} ⭐</span></p>
      </div>

      <div className='flex justify-center items-center'>
        <Link to={`/plants/${plant.plantId}`} className="
  bg-primary text-white rounded-[8px]
  px-2 py-1 text-sm      /* default small screens */
  sm:px-3 sm:py-2 sm:text-base
  md:px-3 md:py-2 md:text-lg
  lg:px-4 lg:py-3 lg:text-lg
  xl:px-4 xl:py-3 xl:text-lg
">
          View Details
        </Link>

      </div>

    </div>
  );
};

export default PlantCard;