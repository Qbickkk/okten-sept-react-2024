import React from 'react';

const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div>
            <h3>id:{id} {name}</h3>
            <ul>
                <li>{species}</li>
                <li>{status}</li>
                <li>{gender}</li>
            </ul>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};