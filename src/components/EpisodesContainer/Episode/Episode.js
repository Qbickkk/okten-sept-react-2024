import React from 'react';

import css from './Episode.module.css'

const Episode = ({episode}) => {

    const {id,name,episode:chapter} = episode;

    return (
        <div className={css.Episode}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{chapter}</div>
        </div>
    );
};

export {Episode};