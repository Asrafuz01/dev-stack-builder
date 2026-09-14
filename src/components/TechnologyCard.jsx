const TechnologyCard = ({ technology, onAdd, isAdded }) => {
    if (!technology) return null;

    const {
        name,
        category,
        description,
        icon,
        rating,
        difficulty,
        badge
    } = technology;

    const getBadgeStyle = (badgeText) => {
        switch (badgeText?.toLowerCase()) {
            case 'popular':
                return 'text-pink-500 font-semibold';
            case 'versatile':
                return 'text-red-600 font-semibold';
            case 'fast':
                return 'text-orange-500 font-semibold';
            default:
                return 'text-pink-500 font-semibold';
        }
    };

    return (
        <div className={`bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-300 ${
            isAdded 
                ? "border-2 border-pink-500 shadow-md scale-[1.01]" 
                : "border border-gray-200 hover:shadow-md hover:-translate-y-1"
        }`}>
            <div>
                {/* Top Section */}
                <div className="flex items-center justify-between">
                    <img
                        src={icon}
                        alt={name}
                        className="w-10 h-10 object-contain"
                    />

                    {badge && (
                        <span className={`text-xs ${getBadgeStyle(badge)}`}>
                            {badge}
                        </span>
                    )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {name}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mt-2 min-h-[40px]">
                    {description}
                </p>

                {/* Meta Tags */}
                <div className="flex items-center justify-between mt-6 text-xs text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                        {category}
                    </span>

                    <span className="font-medium">
                        {difficulty}
                    </span>

                    <div className="flex items-center gap-1 font-bold text-gray-700">
                        <span className="text-amber-400">★</span>
                        <span>{rating}</span>
                    </div>
                </div>
            </div>

            {/* Twisty / Animated Button Section */}
            <div className="mt-5">
                <button
                    onClick={() => onAdd(technology)}
                    disabled={isAdded}
                    className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        isAdded
                            ? "bg-linear-to-r from-pink-100 via-rose-100 to-pink-100 text-pink-600 border border-pink-300/60 shadow-inner cursor-not-allowed"
                            : "bg-[#0b101d] text-white hover:bg-slate-800 active:scale-95 shadow-md hover:shadow-lg"
                    }`}
                >
                    {isAdded ? (
                        <>
                            <span className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold shadow-sm animate-bounce">
                                ✓
                            </span>
                            <span className="tracking-wide font-bold">Added to Stack</span>
                        </>
                    ) : (
                        "Add to Stack"
                    )}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;