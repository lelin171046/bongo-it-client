import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Home } from "lucide-react";
import Error from "../Components/Error";

const router = createBrowserRouter([

    {
        path: "/",
    errorElement: <Error></Error>,
    element: <Layout></Layout>,
    children:[
    {
        path: '/',
        element: <Home></Home>

    },

        {  path: "/about" ,
            element: 
        },
    {   path: "/about",
        element: 
     },
    {  path: "/services",
        element: 
     },
    {   path: "/portfolio",
        element: 
     },
    { path: "/contact" ,
        element: 
    },
    {   path: "/blog",
        element: 
     },
    ] 
    }
])


export default router;