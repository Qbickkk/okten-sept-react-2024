import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "./Episode";
import {episodesActions} from "../../store";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query] = useSearchParams({page:'1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [dispatch, page]);


    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};