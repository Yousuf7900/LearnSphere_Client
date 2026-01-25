const MyTutorialsCard = ({ tutorial }) => {
    const { tutorName, tutorPhoto, language, price, desc, review } = tutorial;

    return (
        <div className="w-full max-w-sm">
            <div className="flex flex-col rounded-2xl border border-base-300/60 bg-base-100 p-4 hover:shadow-md transition">
                <div className="relative w-full overflow-hidden rounded-2xl bg-base-200">
                    <div className="w-full aspect-4/3">
                        <img
                            src={tutorPhoto}
                            alt={tutorName}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100 px-3 py-1 text-xs font-medium text-base-content">
                            {language}
                        </span>
                    </div>
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-base-content truncate leading-snug">
                            {tutorName}
                        </h3>
                        <p className="mt-0.5 text-sm text-base-content/60">
                            Tutor course listing
                        </p>
                    </div>

                    <div className="shrink-0 text-right">
                        <p className="text-xs text-base-content/50">Price</p>
                        <p className="text-lg font-semibold text-base-content tabular-nums">
                            ৳ {price}
                        </p>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-warning"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-semibold text-base-content">{review}</span>
                            <span className="text-base-content/50">/ 5</span>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        <span className="text-xs font-medium text-base-content/70">
                            Active
                        </span>
                    </div>
                </div>

                <p className="mt-2 text-sm text-base-content/60 leading-relaxed line-clamp-2">
                    {desc}
                </p>

                <div className="mt-3 h-px w-full bg-base-300/60" />

                <div className="mt-3 flex items-center justify-end gap-6">
                    <button className="text-sm font-semibold text-base-content hover:text-primary transition-colors">
                        Update
                    </button>
                    <button className="text-sm font-semibold text-base-content/50 hover:text-error transition-colors">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyTutorialsCard;
