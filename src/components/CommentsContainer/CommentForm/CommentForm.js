import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../../services/commentService";

const CommentForm = ({setComments}) => {

    const {register,reset,handleSubmit} = useForm();

    const save = (comment) => {
      commentService.create(comment).then(({data})=>setComments(prev=>([...prev, data])));
      reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='email' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};