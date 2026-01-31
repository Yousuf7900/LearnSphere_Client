import axios from "axios";

const MyTutorialsCard = ({ tutorial, myTutorials, setMyTutorials }) => {
    const { _id, tutorName, tutorPhoto, language, price, desc, review } = tutorial;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/tutorials/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    alert("Tutorial Deleted");
                    const remaining = myTutorials.filter(
                        (tutorial) => tutorial._id !== id
                    );
                    setMyTutorials(remaining);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

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
                        <p className="text-lg font-semibold text-base-content">
                            ৳ {price}
                        </p>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <span className="font-semibold text-base-content">
                            {review}
                        </span>
                        <span className="text-base-content/50">/ 5</span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        <span className="text-xs font-medium text-base-content/70">
                            Active
                        </span>
                    </div>
                </div>

                <p className="mt-2 text-sm text-base-content/60 line-clamp-2">
                    {desc}
                </p>

                <div className="mt-3 h-px w-full bg-base-300/60" />

                <div className="mt-3 flex items-center justify-end gap-6">
                    <button className="text-sm font-semibold text-base-content hover:text-primary">
                        Update
                    </button>

                    <button
                        onClick={() => handleDelete(_id)}
                        className="text-sm font-semibold text-base-content/50 hover:text-error"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyTutorialsCard;
