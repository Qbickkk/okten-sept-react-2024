import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getByPostId:(postId)=>apiService.get(urls.posts.byId(postId)),
    getByUserId:(userId)=>apiService.get(urls.posts.base, {params:{userId}}),
    getCommentByPostId:(postId)=>apiService.get(urls.comments.byPostId(postId))
};

export {
    postService
}