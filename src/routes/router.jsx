import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayOut from '../layout/HomeLayOut';
import Home from '../pages/Home';
import Plants from '../pages/Plants';
import Profile from '../pages/Profile';
import PlantDetails from '../pages/PlantDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Loading from '../components/Loading';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import ForgotPassword from '../pages/ForgotPassword';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("/plants.json"),
                element: <Home></Home>,
                hydrateFallbackElement: <Loading></Loading>
            },

            {
                path: '/plants',
                loader: () => fetch("/plants.json"),
                element: <Plants></Plants>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/about',
                Component: AboutUs
            },
            {
                path: '/contact',
                Component: Contact
            },
            


            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/plants/:id',
                loader: () => fetch("/plants.json"),
                element: <PlantDetails></PlantDetails>,
                hydrateFallbackElement: <Loading></Loading>
            }

        ]
    }
])

export default router;