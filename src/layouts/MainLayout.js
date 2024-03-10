import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const MainLayout = () => {

    const {loading,error} = useSelector(state => state.cars);

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};