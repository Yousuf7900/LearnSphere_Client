import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Layout from "../layout/Layout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";
import FindTutors from "../pages/FindTutors";
import PrivateRouter from "./PrivateRouter";
import TutorDetails from "../pages/TutorDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/find-tutors',
                element: <FindTutors></FindTutors>,
                loader: () => fetch('http://localhost:5000/all-tutorials')
            },
            {
                path: '/find-tutors/:language',
                element: <FindTutors></FindTutors>,
                loader: () => fetch('http://localhost:5000/all-tutorials')
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            // private routes
            {
                path: '/add-tutorials',
                element: <PrivateRouter><AddTutorials></AddTutorials></PrivateRouter>
            },
            {
                path: '/my-tutorials',
                element: <PrivateRouter><MyTutorials></MyTutorials></PrivateRouter>
            },
            {
                path: '/my-booked-tutors',
                element: <PrivateRouter><MyBookedTutors></MyBookedTutors></PrivateRouter>
            },
            {
                path: '/tutor-details/:id',
                element: <PrivateRouter><TutorDetails></TutorDetails></PrivateRouter>
            }
        ]
    },
])

export default Router;