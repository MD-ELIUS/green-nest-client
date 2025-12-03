import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCard';

const Plants = () => {
    const plants = useLoaderData();
    return (
        <div className="w-11/12 mx-auto my-4 sm:my-6 md:my-10 lg:my-14 xl:my-16 2xl:my-20 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 justify-center items-center">
            <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center'>Explore All Plants</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-stretch items-center '>
                {
                    plants.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default Plants;