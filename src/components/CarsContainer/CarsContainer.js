import React, {useEffect, useState} from 'react';

import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {carService} from "../../services/carService";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(true);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};