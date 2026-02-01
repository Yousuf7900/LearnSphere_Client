import { useLoaderData, useParams } from "react-router";
import AllTutorialsCard from "./AllTutorialsCard";
import { useState } from "react";

const FindTutors = () => {
    const allTutorials = useLoaderData() || [];
    const [search, setSearch] = useState("");
    const { language } = useParams();

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-base-content">Find Tutors</h2>
                        <p className="mt-1 text-sm text-base-content/70">
                            Browse tutors and explore available tutorials.
                        </p>
                    </div>

                    <div className="badge badge-primary badge-lg">
                        Total Tutors: {allTutorials.length}
                    </div>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-4 sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <label className="input input-bordered flex items-center gap-2 w-full sm:max-w-md">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search tutor or language..." />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 opacity-60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M21 21l-4.3-4.3" />
                                <circle cx="11" cy="11" r="7" />
                            </svg>
                        </label>

                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                            <select className="select select-bordered w-full sm:w-44" defaultValue="All">
                                <option disabled>Filter by Language</option>
                                <option>All</option>
                                <option>English</option>
                                <option>JavaScript</option>
                                <option>Python</option>
                            </select>

                            <select className="select select-bordered w-full sm:w-44" defaultValue="Latest">
                                <option disabled>Sort</option>
                                <option>Latest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Top Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                {allTutorials.length > 0 ? (
                    <div className="mt-6 space-y-4">
                        {allTutorials
                            .filter(tutorial => {
                                if (!language) return true;
                                return tutorial.language.toLowerCase() === language.toLowerCase();
                            })
                            .filter(tutorial => tutorial.tutorName.toLowerCase().includes(search.toLocaleLowerCase()) || tutorial.language.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .map((tutorial) => (
                                <AllTutorialsCard key={tutorial._id} tutorial={tutorial} />
                            ))}
                    </div>
                ) : (
                    <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-base-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 text-base-content/60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 8v4l3 3" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>

                        <h3 className="text-lg font-semibold text-base-content">
                            No tutorials found
                        </h3>
                        <p className="mt-1 text-sm text-base-content/70 max-w-sm">
                            We couldn’t find any tutorials matching your criteria. Try adjusting your
                            search or filters.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default FindTutors;
