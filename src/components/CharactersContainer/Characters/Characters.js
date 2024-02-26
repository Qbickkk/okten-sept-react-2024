import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {characterService} from "../../../services/characterService";
import {Character} from "../Character/Character";

const Characters = () => {

    const {ids} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getByIds(ids).then(({data})=>setCharacters(data))
    }, [ids]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};