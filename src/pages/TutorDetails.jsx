import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const TutorDetails = () => {
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/tutor-details/${id}`)
            .then(res => {
                setTutor(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);
    if (!tutor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="max-w-5xl w-full bg-base-100 rounded-2xl shadow-md p-6 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-1/3 flex justify-center">
                        <img
                            src={tutor.tutorPhoto}
                            alt={tutor.tutorName}
                            className="w-56 h-56 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="lg:w-2/3 space-y-4">
                        <h2 className="text-3xl font-semibold">
                            {tutor.tutorName}
                        </h2>
                        <p className="text-sm text-base-content/70">
                            Language: <span className="font-medium">{tutor.language}</span>
                        </p>
                        <p className="text-sm text-base-content/70">
                            Tutor Email: <span className="font-medium">{tutor.tutorEmail}</span>
                        </p>
                        <p className="text-sm text-base-content/70">
                            Rating: <span className="font-medium">{tutor.review} ⭐</span>
                        </p>
                        <p className="text-base text-base-content/80 leading-relaxed">
                            {tutor.desc}
                        </p>
                        <p className="text-xl font-semibold pt-2">
                            Price: ৳{tutor.price}
                        </p>
                        <div className="flex gap-4 pt-6">
                            <button className="btn btn-primary px-6">
                                Book Now
                            </button>
                            <button onClick={() => navigate(-1)} className="btn btn-outline px-6">
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
