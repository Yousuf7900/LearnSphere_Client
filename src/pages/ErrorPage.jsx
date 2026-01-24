import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import ErrorLottie from "../assets/Lottie/girl_404.json";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 px-4">
            <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
                <div className="w-full">
                    <div className="grid items-center gap-10 rounded-3xl border border-base-content/10 bg-base-100/60 p-6 backdrop-blur-xl shadow-2xl md:grid-cols-2 md:p-10">
                        <div className="order-2 md:order-1">
                            <p className="inline-flex items-center rounded-full border border-base-content/10 bg-base-100 px-3 py-1 text-xs font-medium text-base-content/70">
                                Error 404
                            </p>

                            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                                Page not found
                            </h1>

                            <p className="mt-3 text-base text-base-content/70">
                                The page you are looking for might have been moved, deleted, or the URL may be incorrect.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="btn btn-outline rounded-2xl h-12 px-6"
                                >
                                    Go back
                                </button>

                                <Link to="/" className="btn btn-primary rounded-2xl h-12 px-6">
                                    Home
                                </Link>
                            </div>

                            <div className="mt-6 text-sm text-base-content/60">
                                If the problem continues, please check the URL or return to the homepage.
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="rounded-3xl border border-base-content/10 bg-base-100/60 p-4">
                                <Lottie
                                    animationData={ErrorLottie}
                                    loop
                                    className="h-72 w-full md:h-96"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-base-content/50">
                        © {new Date().getFullYear()} LearnSphere. All rights reserved.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
