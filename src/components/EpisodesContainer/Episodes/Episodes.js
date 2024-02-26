import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppContext} from "../../../hooks/useAppContext";
import {episodeServices} from "../../../services/episodeServices";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
const Episodes = () => {

    const {setEpisodes,episodes} = useAppContext();
    const [query, setQuery] = useSearchParams({page:'1'});
    const [prevNextPage, setPrevNextPage] = useState({prev:null, next:null});

    useEffect(() => {
        episodeServices.getAll(query.get('page')).then(({data})=>{
            setEpisodes(data.results)
            setPrevNextPage({prev:data.info.prev, next:data.info.next})
        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')-1).toString())
            return prev
        })
    };
    const next = () => {
        setQuery(prev=>{
            prev.set('page', (+prev.get('page')+1).toString())
            return prev
        })
    };


    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.Buttons}>
                <button disabled={!prevNextPage.prev} onClick={prev}>PrevPage</button>
                <button disabled={!prevNextPage.next} onClick={next}>NextPage</button>
            </div>
        </div>
    );
};

export {Episodes};