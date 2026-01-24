const HowItWorks = () => {
    return (
        <section className="w-full pt-12">
            <div className="mb-8 text-center">
                <p className="text-sm font-medium text-primary/90">Simple process</p>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                    How learning works
                </h3>
                <p className="mt-2 text-base-content/70 max-w-2xl mx-auto">
                    Start learning in minutes with a simple and guided process.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-base-300 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                        1
                    </div>
                    <h4 className="text-lg font-semibold">Find a tutor</h4>
                    <p className="mt-2 text-sm text-base-content/70">
                        Browse tutors by language, rating, and availability.
                    </p>
                </div>

                <div className="rounded-2xl border border-base-300 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                        2
                    </div>
                    <h4 className="text-lg font-semibold">Book a session</h4>
                    <p className="mt-2 text-sm text-base-content/70">
                        Choose a time that fits your schedule and learning goals.
                    </p>
                </div>

                <div className="rounded-2xl border border-base-300 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                        3
                    </div>
                    <h4 className="text-lg font-semibold">Start learning</h4>
                    <p className="mt-2 text-sm text-base-content/70">
                        Join live lessons and track your progress over time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
