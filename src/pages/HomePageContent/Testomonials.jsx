import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
    const items = [
        {
            name: "Ayesha Rahman",
            role: "IELTS Student",
            rating: 5,
            img: "https://i.pravatar.cc/120?img=47",
            text:
                "My English confidence improved in just a few weeks. The tutor matched perfectly with my goals and the lessons were super structured.",
        },
        {
            name: "Daniel Lopez",
            role: "Spanish Learner",
            rating: 5,
            img: "https://i.pravatar.cc/120?img=12",
            text:
                "Flexible scheduling helped me learn alongside my full-time job. Sessions were practical, fun, and I could see progress every week.",
        },
        {
            name: "Emma Chen",
            role: "Beginner Japanese",
            rating: 5,
            img: "https://i.pravatar.cc/120?img=32",
            text:
                "Clear explanations, great tutors, and real progress. The platform made learning enjoyable and the feedback was always helpful.",
        },
        {
            name: "Rafi Hasan",
            role: "Spoken English",
            rating: 5,
            img: "https://i.pravatar.cc/120?img=18",
            text:
                "The tutor was patient and corrected my mistakes gently. I improved my speaking fluency and confidence in meetings.",
        },
        {
            name: "Sophia Laurent",
            role: "French Learner",
            rating: 5,
            img: "https://i.pravatar.cc/120?img=5",
            text:
                "Lessons were well-planned and tailored to my level. The exercises and homework kept me consistent without feeling overwhelmed.",
        },
    ];

    return (
        <section className="w-full pt-12">
            <div className="mb-8 text-center">
                <p className="text-sm font-medium text-primary/90">Student success stories</p>
                <h3 className="text-2xl sm:text-3xl font-semibold">What learners say</h3>
                <p className="mt-2 text-base-content/70 max-w-2xl mx-auto">
                    Real feedback from learners who improved with expert tutors.
                </p>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
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
                {items.map((t, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                        <div className="h-full rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div className="min-w-0">
                                    <h4 className="font-semibold leading-tight">{t.name}</h4>
                                    <p className="text-xs text-base-content/60">{t.role}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-sm">
                                <span className="text-warning">★ ★ ★ ★ ★</span>
                                <span className="ml-2 text-xs text-base-content/60">Verified</span>
                            </div>

                            <p className="mt-4 text-sm text-base-content/80 leading-relaxed">
                                “{t.text}”
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
