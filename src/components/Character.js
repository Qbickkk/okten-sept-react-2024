import React from 'react';

const Character = ({character}) => {
    const {id,name,species,image} = character;
    return (
        <div>
            <h5>{id}</h5>
            <h3>{name}</h3>
            <h4>{species}</h4>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};