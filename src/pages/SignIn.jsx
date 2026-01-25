import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { signInWithCredentials, googleAuth } = useAuth();

    // email and password sign in
    const handleFormData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData.entries());
        signInWithCredentials(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: user.metadata.createdAt,
                    creationTime: user.metadata.creationTime,
                    lastLoginAt: user.metadata.lastLoginAt,
                    lastSignInTime: user.metadata.lastSignInTime
                }
                axios.put(`http://localhost:5000/user/${user.uid}`, userData)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // Google sign in
    const handleGoogleSignIn = () => {
        googleAuth()
            .then(result => {
                const user = (result.user);
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: user.metadata.createdAt,
                    creationTime: user.metadata.creationTime,
                    lastLoginAt: user.metadata.lastLoginAt,
                    lastSignInTime: user.metadata.lastSignInTime
                }
                axios.put(`http://localhost:5000/user/${user.uid}`, userData)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // password hide n seek control
    const handlePassButton = () => {
        setShowPass(p => !p);
    }

    return (
        <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-base-200 via-base-100 to-base-200">
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute top-40 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="rounded-3xl border border-base-content/10 bg-base-100/60 backdrop-blur-xl shadow-2xl">
                        <div className="p-8 sm:p-10">

                            <div className="text-center">
                                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15">
                                    <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                        <path
                                            d="M20 22a8 8 0 1 0-16 0"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                <h2 className="text-3xl font-bold">Sign In</h2>
                                <p className="mt-2 text-sm text-base-content/60">
                                    Welcome back! Please enter your details.
                                </p>
                            </div>

                            <form onSubmit={handleFormData} className="mt-8 space-y-4">

                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <div className="input input-bordered rounded-2xl h-12 flex items-center gap-2 w-full">
                                        <input
                                            type="email"
                                            name="email"
                                            className="grow bg-transparent outline-none"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Password</span>
                                    </label>

                                    <div className="relative">
                                        <input
                                            type={showPass ? "text" : "password"}
                                            name="password"
                                            className="input input-bordered rounded-2xl h-12 w-full pr-14"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={handlePassButton}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-primary"
                                        >
                                            {showPass ? "Hide" : "Show"}
                                        </button>
                                    </div>

                                    <div className="mt-2 flex items-center justify-between">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="text-sm text-base-content/70">Remember me</span>
                                        </label>
                                        <a href="#" className="link link-hover text-sm font-medium">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <button className="btn btn-primary w-full rounded-2xl h-12 text-base">
                                    Sign In
                                </button>

                                <div className="divider text-base-content/50">or continue with</div>

                                <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline w-full rounded-2xl h-12">
                                    Continue with Google
                                </button>

                                <p className="pt-2 text-center text-sm text-base-content/60">
                                    Don’t have an account?{" "}
                                    <Link to={'/signup'} className="link link-primary font-medium">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>

                    <p className="mt-4 text-center text-xs text-base-content/50">
                        By signing in, you agree to our Terms & Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
