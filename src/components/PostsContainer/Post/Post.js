import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {userId,id:postId,title} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>userId:{userId}</div>
            <div>postId:{postId}</div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(`/post/${postId}`)}>details of post</button>
            <br/>
            <br/>
        </div>
    );
};

export {Post};