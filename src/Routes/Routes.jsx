import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Error from "../Components/Error";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
            element: <About></About>
        },
  
    {  path: "/services",
        element: <Services></Services>
     },
    {   path: "/portfolio",
        element: <Portfolio></Portfolio>
     },
    { path: "/contact" ,
        element: <Contact></Contact>
    },
    {   path: "/blog",
        element: <Blog></Blog>
     },
     {
        path: 'login',
        element: <Login></Login>
     },
     {
        path: 'register',
        element: <Register></Register>
     }
    ] 
    }
])


export default router;