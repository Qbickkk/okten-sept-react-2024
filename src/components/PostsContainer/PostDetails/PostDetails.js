import React from 'react';
import {useNavigate} from "react-router-dom";

const PostDetails = ({data}) => {

    const {userId, id:postId, title, body} = data;
    const navigate = useNavigate();

    return (
        <div>
            <div>userId:{userId}</div>
            <div>postId:{postId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>navigate(`comments`)}>comments of post</button>
            <br/>
            <button onClick={()=>navigate(-1)}>back</button>
        </div>
    );
};

export {PostDetails};