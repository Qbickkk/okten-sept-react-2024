import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Comments} from "../../components/CommentsContainer";

const CommentsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <Comments data={data}/>
        </div>
    );
};

export {CommentsPage};