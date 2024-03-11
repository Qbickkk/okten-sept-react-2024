import React from 'react';
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {

    const {id,name,episode:chapter, characters} = episode;
    const navigate = useNavigate();

    const ids = characters.map(character=>character.split('/').splice(-1)[0]);

    return (
        <div onClick={()=>navigate(`/characters/${ids}`)}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{chapter}</div>
        </div>
    );
};

export {Episode};