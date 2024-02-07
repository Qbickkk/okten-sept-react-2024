import React from 'react';

const Post = ({post,getPostDetails}) => {
    const {id,title} = post;

    return (
        <div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <button onClick={()=>getPostDetails(post)}>Details</button>
            <hr/>
        </div>
    );
};

export {Post};