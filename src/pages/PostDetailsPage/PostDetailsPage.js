import React from 'react';

import {PostDetails} from "../../components/PostsContainer";
import {Outlet, useLoaderData} from "react-router-dom";

const PostDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <PostDetails data={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};