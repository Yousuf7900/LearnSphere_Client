import axios from "axios";
import { useState } from "react";

const MyTutorialsCard = ({ tutorial, myTutorials, setMyTutorials }) => {
    const { _id, tutorName, tutorPhoto, language, price, desc, review } = tutorial;
    const [open, setOpen] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updateData = {
            tutorPhoto: form.tutorPhoto.value,
            language: form.language.value,
            price: form.price.value,
            desc: form.desc.value
        };
        axios.patch(`http://localhost:5000/tutorials/${_id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    const updatedList = myTutorials.map(tutorial => tutorial._id === _id ? { ...tutorial, ...updateData } : tutorial);
                    setMyTutorials(updatedList);
                    alert('Tutorial Updated');
                    setOpen(false);
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }

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

            {/* modal */}
            {open && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-4xl rounded-2xl p-0">
                        <div className="border-b border-base-300 px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-base-content">
                                    Update Tutorial
                                </h2>
                                <p className="text-sm text-base-content/70">
                                    Update tutorial details and save your changes.
                                </p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="btn btn-sm btn-ghost"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleUpdate} className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 gap-6">

                                <div className="rounded-xl border border-base-300 bg-base-100 p-5">
                                    <h3 className="text-sm font-semibold text-base-content/80">
                                        Tutor Information
                                    </h3>

                                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={tutorName}
                                                readOnly
                                                className="input input-bordered w-full bg-base-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                defaultValue={tutorial.tutorEmail}
                                                readOnly
                                                className="input input-bordered w-full bg-base-200"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-base-300 bg-base-100 p-5">
                                    <h3 className="text-sm font-semibold text-base-content/80">
                                        Tutorial Details
                                    </h3>

                                    <div className="mt-4 grid grid-cols-1 gap-5">
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    Tutorial Image URL
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="tutorPhoto"
                                                defaultValue={tutorPhoto}
                                                className="input input-bordered w-full"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text font-medium">
                                                        Language
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="language"
                                                    defaultValue={language}
                                                    className="input input-bordered w-full"
                                                />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text font-medium">
                                                        Price
                                                    </span>
                                                </label>
                                                <input
                                                    type="number"
                                                    name="price"
                                                    defaultValue={price}
                                                    className="input input-bordered w-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    Description
                                                </span>
                                            </label>
                                            <textarea
                                                rows="5"
                                                name="desc"
                                                defaultValue={desc}
                                                className="textarea textarea-bordered w-full resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text font-medium">
                                                        Review
                                                    </span>
                                                </label>
                                                <input
                                                    type="number"
                                                    defaultValue={review}
                                                    readOnly
                                                    className="input input-bordered w-full bg-base-200"
                                                />
                                            </div>

                                            <div className="flex items-end">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-full"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-xs text-base-content/60">
                                            Name, email, and review cannot be edited.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div
                        className="modal-backdrop"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}



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

                    <button onClick={() => setOpen(true)} className="text-sm font-semibold text-base-content hover:text-primary">
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
