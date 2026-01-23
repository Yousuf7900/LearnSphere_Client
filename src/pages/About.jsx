
import { Link } from "react-router";

const About = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="mx-auto max-w-6xl px-4 py-10">

                <div className="rounded-3xl bg-base-100 border border-base-content/10 shadow-sm p-8 sm:p-12">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            About LearnSphere
                        </h1>
                        <p className="mt-4 text-base-content/70 leading-relaxed">
                            LearnSphere is a tutor discovery and booking platform designed to help students connect with trusted tutors quickly.
                            Whether you’re learning English, preparing for exams, or improving skills—our goal is to make learning more accessible and effective.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link to="/find-tutors" className="btn btn-primary rounded-2xl h-12 px-7">
                                Find Tutors
                            </Link>
                            <Link to="/contact" className="btn btn-outline rounded-2xl h-12 px-7">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-base-200/50 border border-base-content/10 p-6">
                            <p className="text-sm text-base-content/60">Focus</p>
                            <p className="mt-1 text-xl font-bold">Quality tutors</p>
                            <p className="mt-2 text-sm text-base-content/70">
                                Verified tutor profiles with clear expertise and structured lessons.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-base-200/50 border border-base-content/10 p-6">
                            <p className="text-sm text-base-content/60">Experience</p>
                            <p className="mt-1 text-xl font-bold">Smooth booking</p>
                            <p className="mt-2 text-sm text-base-content/70">
                                Simple flow to book sessions and manage your learning schedule.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-base-200/50 border border-base-content/10 p-6">
                            <p className="text-sm text-base-content/60">Goal</p>
                            <p className="mt-1 text-xl font-bold">Better outcomes</p>
                            <p className="mt-2 text-sm text-base-content/70">
                                Support learners with tools that help them stay consistent and confident.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl bg-base-100 border border-base-content/10 p-8">
                        <h2 className="text-2xl font-bold">How LearnSphere works</h2>
                        <div className="mt-5 space-y-4">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary font-bold">
                                    1
                                </div>
                                <div>
                                    <p className="font-semibold">Discover tutors</p>
                                    <p className="text-sm text-base-content/70">
                                        Search by language, category, and preferences to find the right match.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary font-bold">
                                    2
                                </div>
                                <div>
                                    <p className="font-semibold">Book sessions</p>
                                    <p className="text-sm text-base-content/70">
                                        Book a tutor quickly and manage your bookings from your dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary font-bold">
                                    3
                                </div>
                                <div>
                                    <p className="font-semibold">Learn confidently</p>
                                    <p className="text-sm text-base-content/70">
                                        Keep everything organized—tutorials, bookings, and progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-base-100 border border-base-content/10 p-8">
                        <h2 className="text-2xl font-bold">What we care about</h2>
                        <div className="mt-5 space-y-4">
                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <p className="font-semibold">Trust</p>
                                <p className="text-sm text-base-content/70 mt-1">
                                    A safe learning environment with honest profiles and clear communication.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <p className="font-semibold">Simplicity</p>
                                <p className="text-sm text-base-content/70 mt-1">
                                    Clean UX that makes it easy to find tutors and manage bookings.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <p className="font-semibold">Growth</p>
                                <p className="text-sm text-base-content/70 mt-1">
                                    Helping learners improve step-by-step with the right guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-3xl bg-base-100 border border-base-content/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold">Ready to start learning?</h3>
                        <p className="text-sm text-base-content/70 mt-1">
                            Find a tutor and begin your next chapter today.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/find-tutors" className="btn btn-primary rounded-2xl h-12 px-7">
                            Browse Tutors
                        </Link>
                        <Link to="/signup" className="btn btn-outline rounded-2xl h-12 px-7">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
