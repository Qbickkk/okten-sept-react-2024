import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "./Car";
import {useAppContext} from "../../hooks/useAppContext";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const {trigger} = useAppContext();
    const [query,setQuery] = useSearchParams({page:'1'});
    const [prevNextPage, setPrevNextPage] = useState({prev:null, next:null})



    useEffect(() => {
        carService.getAll(query.get('page')).then(({data})=> {
            setCars(data.items)
            setPrevNextPage({prev:data.prev, next:data.next})
        })
    }, [trigger, query.get('page')]);

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
            {cars.map(car=><Car key={car.id} car={car}/>)}
            <div>
                <button disabled={!prevNextPage.prev} onClick={prev}>PrevPage</button>
                <button disabled={!prevNextPage.next} onClick={next}>NextPage</button>
            </div>
        </div>
    );
};

export {Cars};