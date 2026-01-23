import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Layout from "../layout/Layout";
import Contact from "../pages/Contact";
import About from "../pages/About";

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
            // contact page
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            // about page
            {
                path: '/about',
                element: <About></About>
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