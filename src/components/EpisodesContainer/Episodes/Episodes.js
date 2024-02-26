import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {episodeServices} from "../../../services/episodeServices";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
const Episodes = () => {

    const [episodesResponse, setEpisodesResponse] = useState({prev:null, next:null, results:[]})
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(() => {
        episodeServices.getAll(query.get('page')).then(({data:{info:{prev,next}, results}})=>{
            setEpisodesResponse({prev,next,results})
        })
    }, [page]);

    const prev = () => {
        setQuery(prev=>{
            prev.set('page', `${+page - 1}`);
            return prev
        })
    };
    const next = () => {
        setQuery(prev=>{
            prev.set('page', `${+page + 1}`);
            return prev
        })
    };
    
    return (
        <div>
            <div className={css.Episodes}>
                {episodesResponse.results.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.Buttons}>
                <button disabled={!episodesResponse.prev} onClick={prev}>PrevPage</button>
                <button disabled={!episodesResponse.next} onClick={next}>NextPage</button>
            </div>
        </div>
    );
};

export {Episodes};