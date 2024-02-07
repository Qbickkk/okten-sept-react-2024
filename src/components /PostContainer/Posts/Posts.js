import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import {postService} from "../../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css'
const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);

    const getPostDetails = (data) => {
        setDetails(data)
    }

    return (
        <div className={css.Posts}>
            <div>
                {posts.map(value => <Post key={value.id} post={value} getPostDetails={getPostDetails}/>)}
            </div>
            <hr/>
            {details && <PostDetails post={details}/>}
        </div>
    );
};

export {Posts};