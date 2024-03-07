import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";

const CarForm = () => {
    const {register,reset,handleSubmit,formState:{isValid}, setValue } = useForm();

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);


    const save = async (car) => {
        await carService.create(car);
        dispatch(carActions.trigger());
        reset();
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.trigger());
        dispatch(carActions.setCarForUpdate(null))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'number'} placeholder={'price'} {...register('price')}/>
            <input type={'number'} placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};