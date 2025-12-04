import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCard';

const Plants = () => {
    const plants = useLoaderData();

    const [filteredPlants, setFilteredPlants] = useState(plants);
    const [sortField, setSortField] = useState('name'); // 'name' or 'price'
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        let updatedPlants = [...plants];

        // filtering by name
        if (filterText) {
            updatedPlants = updatedPlants.filter(p =>
                p.plantName.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        // sorting
        updatedPlants.sort((a, b) => {
            if (sortField === 'name') {
                return sortOrder === 'asc'
                    ? a.plantName.localeCompare(b.plantName)
                    : b.plantName.localeCompare(a.plantName);
            } else if (sortField === 'price') {
                return sortOrder === 'asc'
                    ? a.price - b.price
                    : b.price - a.price;
            }
            return 0;
        });

        setFilteredPlants(updatedPlants);
    }, [plants, sortField, sortOrder, filterText]);

    return (
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7  w-11/12 mx-auto py-4 sm:py-8 md:py-10 lg:py-12 ">
            <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center mb-6'>Explore All Plants</h1>

            {/* Filter & Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mb-6">
                {/* Filter */}
                <input
                    type="text"
                    placeholder="Search plants..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Sort */}
                <select
                    value={`${sortField}-${sortOrder}`}
                    onChange={(e) => {
                        const [field, order] = e.target.value.split('-');
                        setSortField(field);
                        setSortOrder(order);
                    }}
                    className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="name-asc">Name: A → Z</option>
                    <option value="name-desc">Name: Z → A</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                </select>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-stretch items-center '>
                {filteredPlants.map(plant => (
                    <PlantCard key={plant.plantId} plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default Plants;
