import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        postService.getByUserId(userId).then(({data})=>setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};