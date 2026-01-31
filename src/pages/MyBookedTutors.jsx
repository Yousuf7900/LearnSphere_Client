import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyBookedTutors = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        axios
            .get(`http://localhost:5000/bookings?email=${user.email}`)
            .then((res) => {
                setBookings(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [user?.email]);

    const handleRating = (tutorId) => {
        console.log(tutorId);
        axios.patch(`http://localhost:5000/tutors/review/${tutorId}`)
            .then(() => {
                return axios.get(`http://localhost:5000/bookings?email=${user.email}`);
            })
            .then(res => {
                setBookings(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">My Booked Tutors</h2>
                    <p className="mt-1 text-base-content/70">
                        All tutors you booked from the Tutor Details page.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {bookings.map((b) => (
                        <div
                            key={b._id}
                            className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"
                        >
                            <div className="flex gap-5">
                                <img
                                    src={b.image}
                                    alt="Tutor"
                                    className="h-24 w-24 rounded-2xl object-cover"
                                />

                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                {b.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-base-content/70">
                                                Language:{" "}
                                                <span className="font-medium">{b.language}</span>
                                            </p>
                                        </div>

                                        <span className="badge badge-outline rounded-xl">
                                            Booked
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-sm text-base-content/70">
                                            Price:{" "}
                                            <span className="font-semibold">৳{b.price}</span>
                                        </p>

                                        <p className="text-sm text-base-content/70">
                                            Rating: <span className="font-medium">{b.review} ⭐</span>
                                        </p>

                                        <p className="text-xs text-base-content/50">
                                            Tutor: {b.tutorEmail}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex justify-end">
                                        <button onClick={() => handleRating(b.tutorId)} className="btn btn-primary btn-sm rounded-xl px-5">
                                            Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {bookings.length === 0 && (
                        <div className="col-span-1 md:col-span-2 rounded-2xl border border-base-300 bg-base-100 p-10 text-center">
                            <p className="text-base-content/70">
                                No booked tutors found.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default MyBookedTutors;
