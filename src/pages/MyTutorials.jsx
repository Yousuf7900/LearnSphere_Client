import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import MyTutorialsCard from "./MyTutorialsCard";

const MyTutorials = () => {
    const { user } = useAuth();
    const [myTutorials, setMyTutorials] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`http://localhost:5000/all-tutorials/${user.email}`)
            .then((res) => {
                setMyTutorials(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [user?.email]);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-base-content">
                        My Tutorials
                    </h1>
                    <p className="mt-1 text-sm text-base-content/70">
                        Manage your tutorials and keep them updated.
                    </p>
                </div>

                <div className="w-full sm:w-auto rounded-2xl border border-base-300 bg-base-100 px-5 py-3">
                    <p className="text-sm text-base-content/60">
                        Total tutorials:{" "}
                        <span className="font-bold">{myTutorials.length}</span>
                    </p>
                </div>
            </div>

            {myTutorials.length === 0 ? (
                <div className="rounded-2xl border border-base-300 bg-base-100 p-12 text-center">
                    <h3 className="text-lg font-semibold text-base-content">
                        No tutorials found
                    </h3>
                    <p className="mt-2 text-sm text-base-content/70">
                        Add tutorials to see them here.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {myTutorials.map((tutorial) => (
                        <MyTutorialsCard
                            key={tutorial._id}
                            tutorial={tutorial}
                            myTutorials={myTutorials}
                            setMyTutorials={setMyTutorials}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTutorials;
