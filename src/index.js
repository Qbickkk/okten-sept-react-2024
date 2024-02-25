import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {ContextProvider} from "./hoc/ContextProvider";
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>
);

