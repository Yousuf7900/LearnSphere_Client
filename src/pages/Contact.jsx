
const Contact = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="mx-auto max-w-6xl px-4 py-10">

                <div className="rounded-3xl bg-base-100 border border-base-content/10 shadow-sm p-8 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Contact Us
                    </h1>
                    <p className="mt-2 text-base-content/70 max-w-2xl">
                        Have a question about tutors, bookings, or your account? Send us a message—our team will get back to you as soon as possible.
                    </p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-3">

                        <div className="lg:col-span-1 space-y-4">
                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                                        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M4 6h16v12H4V6Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="m4 7 8 6 8-6"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-sm text-base-content/70">support@learnsphere.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                                        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6.5 3.5h11A3 3 0 0 1 20.5 6.5v11a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                            <path
                                                d="M7.5 9h9"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M7.5 13h6"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Support hours</p>
                                        <p className="text-sm text-base-content/70">Sat–Thu, 10:00 AM – 8:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-base-content/10 bg-base-200/50 p-5">
                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                                        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-sm text-base-content/70">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 rounded-2xl border border-base-content/10 bg-base-100 p-6 sm:p-8">
                            <h2 className="text-xl font-bold">Send a message</h2>
                            <p className="mt-1 text-sm text-base-content/70">
                                Fill out the form and we’ll respond via email.
                            </p>

                            <form className="mt-6 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="form-control">
                                        <label className="label pb-1">
                                            <span className="label-text font-medium">Full name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            className="input input-bordered h-12 rounded-2xl w-full"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label pb-1">
                                            <span className="label-text font-medium">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            className="input input-bordered h-12 rounded-2xl w-full"
                                        />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="How can we help?"
                                        className="input input-bordered h-12 rounded-2xl w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium">Message</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Write your message..."
                                        className="textarea textarea-bordered rounded-2xl w-full min-h-35"
                                    />
                                </div>

                                <button type="button" className="btn btn-primary h-12 rounded-2xl w-full sm:w-auto px-8">
                                    Send Message
                                </button>

                                <p className="text-xs text-base-content/60">
                                    By sending, you agree to our Terms & Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-2xl bg-base-100 border border-base-content/10 p-5">
                        <p className="font-semibold">Tutors & profiles</p>
                        <p className="text-sm text-base-content/70 mt-1">
                            Having trouble finding the right tutor? We can help you filter by language, rating, and availability.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-base-100 border border-base-content/10 p-5">
                        <p className="font-semibold">Bookings</p>
                        <p className="text-sm text-base-content/70 mt-1">
                            Issues with booking confirmation or rescheduling? Contact support with your booking details.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-base-100 border border-base-content/10 p-5">
                        <p className="font-semibold">Account</p>
                        <p className="text-sm text-base-content/70 mt-1">
                            Password reset, email update, or profile changes—reach us anytime during support hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
