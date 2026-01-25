
import useAuth from "../hooks/useAuth";

const AddTutorials = () => {
    const { user } = useAuth();

    // tutorial form handle
    const handleTutorialFormData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { name, email, photoURL, language, price, desc, review } = Object.fromEntries(formData.entries());
        
    }

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <div className="mx-auto w-full max-w-4xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-base-content">Add Tutorial</h2>
                    <p className="mt-1 text-sm text-base-content/70">
                        Create a tutorial listing with clear and accurate information.
                    </p>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                    <form onSubmit={handleTutorialFormData} className="p-6 sm:p-8">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="rounded-xl border border-base-300 bg-base-100 p-5">
                                <h3 className="text-sm font-semibold text-base-content/80">Tutor Information</h3>
                                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full bg-base-200"
                                            defaultValue={user?.displayName || ""}
                                            name="name"
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="input input-bordered w-full bg-base-200"
                                            name="email"
                                            defaultValue={user?.email || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-base-300 bg-base-100 p-5">
                                <h3 className="text-sm font-semibold text-base-content/80">Tutorial Details</h3>

                                <div className="mt-4 grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">Tutorial Image URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="photoURL"
                                            placeholder="https://example.com/tutorial-image.jpg"
                                            className="input input-bordered w-full"
                                        />
                                        <div className="mt-2 text-xs text-base-content/60">
                                            Tip: Use a clear thumbnail and a concise description to improve engagement.
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">Language</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="language"
                                                placeholder="English, German, Japanese..."
                                                className="input input-bordered w-full"
                                            />
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">Price</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                name="price"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">Description</span>
                                        </label>
                                        <textarea
                                            rows="5"
                                            name="desc"
                                            placeholder="Write a short, learner-focused description..."
                                            className="textarea textarea-bordered w-full resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">Review</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="review"
                                                className="input input-bordered w-full bg-base-200"
                                                defaultValue={0}
                                                readOnly
                                            />
                                        </div>

                                        <div className="flex items-end">
                                            <button className="btn btn-primary w-full">
                                                Publish Tutorial
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-xs text-base-content/60">
                                        Review starts at 0 by default and will update based on learner feedback.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTutorials;
