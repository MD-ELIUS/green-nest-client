import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {

    const { loading, user } = use(AuthContext);
    const location = useLocation();
    // console.log(location) ; 

    if (loading) {
        return <Loading></Loading>
    }


    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' ></Navigate>;
};

export default PrivateRoute;