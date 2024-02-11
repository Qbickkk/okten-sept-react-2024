import React, {useEffect, useState} from 'react';

import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";
import {userService} from "../../services/userService";

const UsersContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data));
    }, []);


    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};