import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useAppContext} from "../../hooks/useAppContext";

const CarForm = () => {

    const {register,handleSubmit,reset} = useForm();
    const {changeTrigger} = useAppContext();

    const save = async(car)=>{
        await carService.create(car);
        reset();
        changeTrigger();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>Brand: <input type='text' placeholder={'brand'} {...register('brand')}/></div>
            <div>Price: <input type='number' placeholder={'price'} {...register('price')}/></div>
            <div>Year: <input type='number' placeholder={'year'} {...register('year')}/></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};