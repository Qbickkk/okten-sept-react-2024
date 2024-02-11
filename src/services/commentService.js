import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>apiService.get(urls.comments.base),
    create:(comment)=>apiService.post(urls.comments.base, comment)
};

export {
     commentService
}