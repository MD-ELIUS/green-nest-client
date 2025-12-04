import React from 'react';
import PlantCard from './PlantCard';
import { Link } from 'react-router';


const TopPlants = ({ plants }) => {

    const topPlants = plants.sort((a, b) => b.rating - a.rating).slice(0, 8);
    // console.log(topPlants) 

    return (
        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7  w-11/12 mx-auto pt-4 sm:pt-8 md:pt-10 lg:pt-12 '>
            <h1 className='font-bold text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px]  mb-4 md:mb-6  text-center'>Top Rated Indoor Plants</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-stretch  '>
                {
                    topPlants.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
            <Link to="/plants" className='btn btn-primary btn-outline w-1/4 mx-auto mt-2'>See more</Link>
        </div>
    );
};

export default TopPlants;