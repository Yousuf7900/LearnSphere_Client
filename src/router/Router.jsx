import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Layout from "../layout/Layout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // Home page
            {
                path: '/',
                element: <Home></Home>
            },
            // SignIn page
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            // SignUp page
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            // This is the error page
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

export default Router;