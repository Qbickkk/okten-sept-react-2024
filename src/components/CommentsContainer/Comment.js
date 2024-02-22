import React from 'react';

const Comment = ({comment}) => {

    const {postId, id:userId, name, email,body} = comment;

    return (
        <div>
            <div>postId:{postId}</div>
            <div>userId:{userId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <br/>
        </div>
    );
};

export {Comment};