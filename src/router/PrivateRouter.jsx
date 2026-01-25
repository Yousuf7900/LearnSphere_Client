import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../common/Loader";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // loading spinner while checking auth
    if (loading) {
        return <Loader text="Checking authentication..."></Loader>
    }
    // if user is logged in , render children
    if (user) {
        return children;
    }

    // not logged in, navigate to sign-in page
    return <Navigate to={'/signin'} state={location.pathname}></Navigate>
};

export default PrivateRouter;