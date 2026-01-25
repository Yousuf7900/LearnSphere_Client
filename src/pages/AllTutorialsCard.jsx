import { Link } from "react-router";

const AllTutorialsCard = ({ tutorial }) => {
    const {
        _id,
        tutorName,
        tutorEmail,
        tutorPhoto,
        language,
        price,
        desc,
        review,
    } = tutorial || {};

    const shortDesc = desc?.length > 180 ? `${desc.slice(0, 180)}...` : desc;
    const reviewsCount = Number(review) || 0;

    return (
        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-all">
            <div className="h-1.5 w-full rounded-t-2xl bg-primary/70" />

            <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4 min-w-0">
                        <div className="h-16 w-16 rounded-full overflow-hidden border border-base-300 bg-base-200 shrink-0">
                            <img
                                src={tutorPhoto}
                                alt={tutorName}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-semibold text-base-content truncate">
                                    {tutorName}
                                </h3>
                                <span className="badge badge-outline">Verified</span>
                            </div>

                            <p className="mt-1 text-sm text-base-content/60 truncate">
                                {tutorEmail}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                                <span className="badge badge-outline">{language}</span>

                                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/70">
                                    <span className="h-2 w-2 rounded-full bg-success" />
                                    Online
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/70">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-4 w-4 opacity-70"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    1:1
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/70">
                                    <span className="text-sm">★</span>
                                    5.0
                                    <span className="text-base-content/50">
                                        ({reviewsCount})
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex-1 lg:px-6">
                        <p className="text-sm leading-relaxed text-base-content/80">
                            {shortDesc || "No description provided."}
                        </p>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 lg:min-w-55">
                        <div className="text-left lg:text-right">
                            <p className="text-xs text-base-content/60">Starting from</p>
                            <p className="text-2xl font-semibold text-base-content">
                                BDT {price}
                            </p>
                            <p className="mt-1 text-xs text-base-content/60">per lesson</p>
                        </div>

                        <Link
                            to={`/tutorial-details/${_id}`}
                            className="btn btn-primary"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTutorialsCard;
