import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const { user, signOutUser } = useAuth();

    const publicLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/find-tutors">Find Tutors</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </>
    );

    const privateLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/find-tutors">Find Tutors</NavLink></li>
            <li><NavLink to="/add-tutorials">Add Tutorials</NavLink></li>
            <li><NavLink to="/my-tutorials">My Tutorials</NavLink></li>
            <li><NavLink to="/my-booked-tutors">My Booked Tutors</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            {/* START */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        {user?.email ? privateLinks : publicLinks}
                    </ul>
                </div>

                <Link
                    to="/"
                    className="group inline-flex items-center px-2 py-1 hover:bg-transparent">
                    <span className="relative text-2xl font-extrabold tracking-tight">
                        <span className="text-primary">L</span>earnSphere
                        <span
                            className="absolute left-0 -bottom-1 h-1 w-10 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary" />
                    </span>
                </Link>


            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {user?.email ? privateLinks : publicLinks}
                </ul>
            </div>

            {/* END */}
            <div className="navbar-end gap-2">
                {user?.email ? (
                    <button
                        onClick={() => signOutUser()}
                        className="btn btn-outline btn-sm rounded-xl border-error text-error hover:bg-error hover:text-white gap-2 transition"> <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        > <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                            /> </svg>
                        Log Out
                    </button>
                ) : (
                    <>
                        <NavLink
                            to="/signup"
                            className="btn btn-ghost btn-sm rounded-xl"
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to="/signin"
                            className="btn btn-primary btn-sm rounded-xl font-medium"
                        >
                            Sign In
                        </NavLink>
                    </>
                )}
            </div>

        </div>
    );
};

export default NavBar;
