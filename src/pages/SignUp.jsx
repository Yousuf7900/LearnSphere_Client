import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
    const { createNewUser } = useAuth();
    const [showPass, setShowPass] = useState(false);

    // sign up handler with form data
    const handleSignUpForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData.entries());

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // control the password hide & seek
    const handlePasswordButton = () => {
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

                                <h2 className="text-3xl font-bold">Create Account</h2>
                                <p className="mt-2 text-sm text-base-content/60">
                                    Join us and start your journey
                                </p>
                            </div>

                            <form onSubmit={handleSignUpForm} className="mt-8 space-y-4">
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Full Name</span>
                                    </label>
                                    <div className="input input-bordered rounded-2xl h-12 flex items-center w-full">
                                        <input
                                            type="text"
                                            name="name"
                                            className="grow bg-transparent outline-none"
                                            placeholder="John Wick"
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <div className="input input-bordered rounded-2xl h-12 flex items-center w-full">
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
                                    <div className="input input-bordered rounded-2xl h-12 flex items-center gap-2 w-full">
                                        <input
                                            type={showPass ? "text" : "password"}
                                            name="password"
                                            className="grow bg-transparent outline-none"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={handlePasswordButton}
                                            className="btn btn-ghost btn-xs rounded-xl"
                                        >
                                            {showPass ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Photo URL</span>
                                    </label>
                                    <div className="input input-bordered rounded-2xl h-12 flex items-center w-full">
                                        <input
                                            type="text"
                                            name="photoURL"
                                            className="grow bg-transparent outline-none"
                                            placeholder="https://example.com/photo.jpg"
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary w-full rounded-2xl h-12 text-base">
                                    Create Account
                                </button>
                                <p className="pt-2 text-center text-sm text-base-content/60">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="link link-primary font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <p className="mt-4 text-center text-xs text-base-content/50">
                        By signing up, you agree to our Terms & Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
