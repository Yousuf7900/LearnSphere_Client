
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";

const slides = [
    {
        img: "https://i.ibb.co.com/5WJTWC1j/tutor5.jpg",
        tag: "Learn Smarter",
        title: "Find the right tutor for your goals",
        desc: "Expert-led lessons, flexible schedules, and personalized study plans that actually work.",
    },
    {
        img: "https://i.ibb.co.com/wFJRPf7K/tutor4.jpg",
        tag: "Live Support",
        title: "1:1 sessions that boost confidence fast",
        desc: "Clear explanations, practice-focused learning, and continuous feedback every step of the way.",
    },
    {
        img: "https://i.ibb.co.com/xS66Fbvg/tutor3.jpg",
        tag: "Better Outcomes",
        title: "Turn effort into results with guidance",
        desc: "Structured learning paths designed to help you improve faster and stay consistent.",
    },
    {
        img: "https://i.ibb.co.com/QFXxZ8dW/tutor2.jpg",
        tag: "Skill Growth",
        title: "Upgrade your skills for study & career",
        desc: "From fundamentals to advanced topics—learn with mentors who know how to teach.",
    },
    {
        img: "https://i.ibb.co.com/zHFYM07T/tutor.jpg",
        tag: "Trusted Tutors",
        title: "Personalized learning, matched to you",
        desc: "Choose tutors by subject, level, and availability—start learning in minutes.",
    },
    {
        img: "https://i.ibb.co.com/5W4gtt4d/tutor1.jpg",
        tag: "Flexible Learning",
        title: "Study anytime, anywhere",
        desc: "Online sessions that fit your routine, with resources to keep you ahead.",
    },
];

const Carousel = () => {
    return (
        <div>
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-primary/90">Tutoring made simple</p>

                    <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                        <Typewriter
                            options={{
                                strings: [
                                    "Learn with clarity. Grow with confidence.",
                                    "Find the right tutor. Learn faster.",
                                    "Personalized lessons. Real progress.",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 45,
                                deleteSpeed: 25,
                                pauseFor: 1200,
                            }}
                        />
                    </h2>

                    <p className="mt-2 text-base-content/70 max-w-2xl">
                        High-quality tutoring for students and professionals—designed to help you learn faster and
                        stay consistent.
                    </p>
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={18}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full"
            >
                {slides.map((s, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="group relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <div className="relative h-80 sm:h-90">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        {s.tag}
                                    </div>
                                    <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-white leading-snug">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/85 leading-relaxed">{s.desc}</p>
                                    <div className="mt-4 flex flex-wrap items-center gap-3">
                                        <button className="btn btn-primary btn-sm rounded-full">Get Started</button>
                                        <button className="btn btn-ghost btn-sm rounded-full text-white hover:bg-white/15">
                                            Browse Tutors
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
