import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            <div>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>Register</NavLink>
            </div>
        </div>
    );
};

export {Header};