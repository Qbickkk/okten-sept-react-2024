import React from 'react';

import {Characters} from "../../components";
import {useNavigate} from "react-router-dom";
import {useChapter} from "../../hooks/useChapter";

const CharactersPage = () => {

    const navigate = useNavigate();
    const {setChapter} = useChapter();

    const back = () => {
        setChapter(null)
        navigate(-1);
    }

    return (
        <div>
            <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};