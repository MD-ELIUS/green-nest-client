import React from 'react';
import PlantCard from './PlantCard';


const TopPlants = ({ plants }) => {

    const topPlants = plants.sort((a, b) => b.rating - a.rating).slice(0, 6);
    // console.log(topPlants) 

    return (
        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 justify-center items-center w-11/12 mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-20'>
            <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center'>Top Rated Indoor Plants</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-stretch items-center '>
                {
                    topPlants.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default TopPlants;