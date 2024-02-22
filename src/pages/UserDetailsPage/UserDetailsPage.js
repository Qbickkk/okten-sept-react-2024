import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import {UserDetails} from "../../components/UsersContainer";

const UserDetailsPage = () => {

    const [userById, setUserById] = useState(null);
    const {userId} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if(state?.user){
            setUserById(state.user)
        }else {
            userService.getById(userId).then(({data})=>setUserById(data))
        }
    }, [userId, state]);

    return (
        <div>
            {userById && <UserDetails userById={userById}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};