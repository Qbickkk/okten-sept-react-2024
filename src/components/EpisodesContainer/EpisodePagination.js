import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodePagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams({page: '1'});

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev
        })
    };

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev
        })
    };

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>Prev</button>
            <button disabled={!nextPage} onClick={next}>Next</button>
        </div>
    );
};

export {EpisodePagination};