import React, {useEffect, useState} from 'react';

import {launchService} from "../../../services/launchService";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'
const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filtered = data.filter(item=>item.launch_year !== '2020');
            setLaunches(filtered);
        });
    }, []);
    return (
        <div className={css.Launches}>
            {launches.map(launch=><Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};