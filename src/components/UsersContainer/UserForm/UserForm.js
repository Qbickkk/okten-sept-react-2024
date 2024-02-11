import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../../services/userService";

const UserForm = ({setUsers}) => {

    const {register,reset,handleSubmit} = useForm();

    const save = (user) => {
        userService.create(user).then(({data})=>setUsers(prev=>([...prev, data])))
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};