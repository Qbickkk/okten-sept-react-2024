import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/postService";
import {Post} from "../../components/PostsContainer/Post";

const PostsPage = () => {

    const {id} = useParams();

    console.log()

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(id).then(({data})=>setPost(data));
    }, [id]);


    return (
        <div>
            <Post post={post}/>
        </div>
    );
};

export {PostsPage};