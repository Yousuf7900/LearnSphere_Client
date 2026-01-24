
const LanguageCategories = () => {
    return (
        <section className="w-full pt-12">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-primary/90">Browse by language</p>
                    <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                        Find tutors by category
                    </h3>
                </div>

                <button className="btn btn-outline btn-sm rounded-full">Show more</button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇬🇧</span>
                        <div>
                            <h4 className="text-lg font-semibold">English tutors</h4>
                            <p className="text-sm text-base-content/70">33,602 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇪🇸</span>
                        <div>
                            <h4 className="text-lg font-semibold">Spanish tutors</h4>
                            <p className="text-sm text-base-content/70">10,053 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇫🇷</span>
                        <div>
                            <h4 className="text-lg font-semibold">French tutors</h4>
                            <p className="text-sm text-base-content/70">3,712 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇩🇪</span>
                        <div>
                            <h4 className="text-lg font-semibold">German tutors</h4>
                            <p className="text-sm text-base-content/70">1,507 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇮🇹</span>
                        <div>
                            <h4 className="text-lg font-semibold">Italian tutors</h4>
                            <p className="text-sm text-base-content/70">2,536 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇨🇳</span>
                        <div>
                            <h4 className="text-lg font-semibold">Chinese tutors</h4>
                            <p className="text-sm text-base-content/70">5,254 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇸🇦</span>
                        <div>
                            <h4 className="text-lg font-semibold">Arabic tutors</h4>
                            <p className="text-sm text-base-content/70">3,655 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇯🇵</span>
                        <div>
                            <h4 className="text-lg font-semibold">Japanese tutors</h4>
                            <p className="text-sm text-base-content/70">2,902 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>

                <a
                    href="/find-tutors"
                    className="group flex items-center justify-between rounded-xl border border-base-300 p-5 hover:border-primary transition"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">🇵🇹</span>
                        <div>
                            <h4 className="text-lg font-semibold">Portuguese tutors</h4>
                            <p className="text-sm text-base-content/70">1,635 teachers</p>
                        </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </a>
            </div>
        </section>
    );
};

export default LanguageCategories;
