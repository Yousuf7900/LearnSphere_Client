const Loader = ({ text = "Loading..." }) => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">

            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-primary tracking-wide text-center leading-tight select-none">
                        Learn<br />Sphere
                    </span>
                </div>
            </div>
            <p className="text-sm text-base-content/70">
                {text}
            </p>
        </div>
    );
};

export default Loader;
