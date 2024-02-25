import React from 'react';

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsContainer};