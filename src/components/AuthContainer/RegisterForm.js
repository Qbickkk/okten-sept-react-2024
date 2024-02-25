import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {registerValidator} from "../../validators";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors,isValid}} = useForm({
        mode:'all',
        resolver:joiResolver(registerValidator)
    });

    const save = async(user)=> {
        try{
            await authService.register(user);
            navigate('/login');
        }catch (e) {
            setError(true)
        }
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            {error&&<div>Username already exist</div>}
            <div>Username: <input type='text' {...register('username')}/></div>
            {errors.username&&<div>{errors.username.message}</div>}
            <div>Password: <input type='password' {...register('password')}/></div>
            {errors.password&&<div>{errors.password.message}</div>}
            <div>Confirm Password: <input type='password' {...register('re_password')}/></div>
            {errors.re_password&&<div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};