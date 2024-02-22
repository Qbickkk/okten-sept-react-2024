import React from 'react';

import {Comment} from "./Comment";

const Comments = ({data}) => {
    return (
        <div>
            {data.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};