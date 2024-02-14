import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/todos'}>Todos</NavLink>
        </div>
    );
};

export {Header};