import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userById}) => {

    const {id:userId,name,username,email,phone,website} = userById;
    const navigate = useNavigate();
    return (
        <div>
            <div>userId:{userId}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <button onClick={()=>navigate(`posts`)}>posts of current user</button>
            <br/>
            <button onClick={()=>navigate(-1)}>back</button>
            <br/>
            <br/>
        </div>
    );
};

export {UserDetails};