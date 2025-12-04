import React from 'react';
import { Link } from 'react-router';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const PlantCard = ({ plant }) => {
  return (
    <div className=' bg-white shadow-md hover:shadow-xl rounded-2xl  '>
      
      <img 
        className=' h-[120px] sm:h-[140px] md:h-[180px] lg:h-[200px] w-full rounded-t-md mb-1' 
        src={plant.image} 
        alt="" 
      />
      

      <h3 className='text-base px-3  sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold text-secondary mb-1'>
        {plant.plantName}
      </h3>

      <div className='flex px-3 flex-col gap-1  text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-[20px] text-secondary mb-3'>
        
        <p>
          <span className=' font-medium '>${plant.price}</span>
        </p>

       <div className="flex items-center gap-1">
  
  <div className="w-[50px] sm:w-[70px] md:w-[90px] lg:w-[110px]">
  <Rating value={plant.rating} readOnly />
</div>

</div>


      </div>

      <div className='flex justify-center items-center pb-3 px-3'>
        <Link
          to={`/plants/${plant.plantId}`}
          className="
          btn btn-primary btn-outline w-full
          "
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default PlantCard;
