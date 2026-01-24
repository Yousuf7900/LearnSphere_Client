const TopTutors = () => {
    return (
        <section className="w-full pt-12">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-primary/90">Meet our experts</p>
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                        Top-rated tutors
                    </h3>
                </div>

                <button className="btn btn-outline btn-sm rounded-full">
                    View all
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-base-300 p-5 text-center hover:shadow-md transition">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="Tutor"
                        className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-base-content/70">English Tutor</p>
                    <p className="mt-2 text-sm text-base-content/60">⭐ 4.9 (1,200 reviews)</p>
                    <button className="btn btn-primary btn-sm mt-4 rounded-full">
                        View profile
                    </button>
                </div>

                <div className="rounded-2xl border border-base-300 p-5 text-center hover:shadow-md transition">
                    <img
                        src="https://i.pravatar.cc/150?img=32"
                        alt="Tutor"
                        className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold">Carlos Mendes</h4>
                    <p className="text-sm text-base-content/70">Spanish Tutor</p>
                    <p className="mt-2 text-sm text-base-content/60">⭐ 4.8 (980 reviews)</p>
                    <button className="btn btn-primary btn-sm mt-4 rounded-full">
                        View profile
                    </button>
                </div>

                <div className="rounded-2xl border border-base-300 p-5 text-center hover:shadow-md transition">
                    <img
                        src="https://i.pravatar.cc/150?img=45"
                        alt="Tutor"
                        className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold">Emma Laurent</h4>
                    <p className="text-sm text-base-content/70">French Tutor</p>
                    <p className="mt-2 text-sm text-base-content/60">⭐ 5.0 (760 reviews)</p>
                    <button className="btn btn-primary btn-sm mt-4 rounded-full">
                        View profile
                    </button>
                </div>

                <div className="rounded-2xl border border-base-300 p-5 text-center hover:shadow-md transition">
                    <img
                        src="https://i.pravatar.cc/150?img=18"
                        alt="Tutor"
                        className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold">Kenji Tanaka</h4>
                    <p className="text-sm text-base-content/70">Japanese Tutor</p>
                    <p className="mt-2 text-sm text-base-content/60">⭐ 4.9 (1,050 reviews)</p>
                    <button className="btn btn-primary btn-sm mt-4 rounded-full">
                        View profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopTutors;
