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

    }
    ] 
    }
])


export default router;