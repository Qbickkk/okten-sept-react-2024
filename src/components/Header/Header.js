import React from 'react';

import css from './Header.module.css'
import {useChapter} from "../../hooks/useChapter";
const Header = () => {

    const {chapter} = useChapter();

    return (
        <div className={css.Header}>
            {
                chapter ?
                    <h4>{chapter}</h4>    :
                    <h4>Rick & Morty</h4>
            }
        </div>
    );
};

export {Header};