import {createBrowserRouter, Navigate} from "react-router-dom";

import {AlbumsPage, CommentsPage, PostsPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
        {index:true, element:<Navigate to={'/albums'}/>},
        {path:'albums',element:<AlbumsPage/>},
        {path:'todos',element:<TodosPage/>},
        {path:'comments',element:<CommentsPage/>},
        {path:'post/:id',element:<PostsPage/>}
    ]}
]);

export {
    router
}