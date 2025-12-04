import React, { Suspense } from 'react';
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router';
import TopPlants from '../components/TopPlants';
import PlantCare from '../components/PlantCare';
import Expert from '../components/Expert';
import HomeDecor from '../components/HomeDecor';
import Loading from '../components/Loading';
import PlantOfTheWeek from '../components/PlantOfTheWeek';

const expertPromise = fetch("experts.json").then((res) => res.json());
const decorPromise = fetch("decor.json").then((res) => res.json());

const Home = () => {

    const plants = useLoaderData();

    return (
        <div className=''>
            <Banner></Banner>
            <TopPlants plants={plants}></TopPlants>
            <PlantCare></PlantCare>
            <Suspense fallback={<Loading />}>
                <Expert expertPromise={expertPromise}></Expert>
            </Suspense>
            <Suspense fallback={<Loading />} >
                <HomeDecor decorPromise={decorPromise} ></HomeDecor>
            </Suspense>
            {/* <PlantOfTheWeek plants={plants}></PlantOfTheWeek> */}

        </div>
    );
};

export default Home;