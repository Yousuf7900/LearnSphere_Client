
import CountUp from "react-countup";

const Stats = () => {
    return (
        <section className="mt-12 border-y border-base-300 py-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold">
                        <CountUp end={10000} duration={2} />+
                    </div>
                    <p className="mt-2 text-sm text-base-content/70">Verified tutors</p>
                </div>

                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold">
                        <CountUp end={250000} duration={2} />+
                    </div>
                    <p className="mt-2 text-sm text-base-content/70">5-star reviews</p>
                </div>

                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold">
                        <CountUp end={40} duration={2} />+
                    </div>
                    <p className="mt-2 text-sm text-base-content/70">Languages</p>
                </div>

                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold">
                        <CountUp end={120000} duration={2} />+
                    </div>
                    <p className="mt-2 text-sm text-base-content/70">Active users</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
