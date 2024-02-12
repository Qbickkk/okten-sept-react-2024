import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/carService";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset,handleSubmit,register, formState:{errors,isValid}, setValue} = useForm({
        mode:'all'
    });

    const save = async (car) => {
       await carService.create(car);
        setTrigger(prev=>!prev);
        reset();
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setTrigger(prev=>!prev);
        setCarForUpdate(null);
        reset();
    };

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);


    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'min 1 max 20 characters'
                }
            })}/>
            <input type='number' placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {
                    value: 0,
                    message: 'min 0'
                },
                max: {
                    value: 1_000_000,
                    message: 'max 1_000_000'
                }
            })}/>
            <input type='number' placeholder={'year'} {...register('year',{
                valueAsNumber: true,
                min: {
                  value: 1990,
                  message: 'min 1990'
                },
                max: {
                    value: new Date().getFullYear(),
                    message: 'max current year'
                }
            })}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};