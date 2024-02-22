import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {userService} from "./services/userService";
import {postService} from "./services/postService";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'users'}/>},
            {path:'users',element:<UsersPage/>,loader:()=>userService.getAll()},
            {path:'user/:userId',element:<UserDetailsPage/>,children:[
                    {path:'posts',element:<PostsPage/>}
            ]},
            {path:'post/:postId',element:<PostDetailsPage/>,loader:({params:{postId}})=>postService.getByPostId(postId),children:[
                    {path: 'comments',element:<CommentsPage/>, loader:({params:{postId}})=>postService.getCommentByPostId(postId)}
            ]}
            ]}
]);

export {
    router
}