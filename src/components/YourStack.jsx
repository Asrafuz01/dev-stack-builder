const YourStack = ({ stack, onRemove, onRemoveAll }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-fit min-h-[350px]">
            <div>
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Stack
                    </h2>
                    <span className="text-xs text-gray-500 font-medium">
                        {stack.length === 0 ? "No Technology Selected" : `${stack.length} Technology Selected`}
                    </span>
                </div>

                {/* Empty State with Dashed Box */}
                {stack.length === 0 ? (
                    <div className="border border-dashed border-gray-200 rounded-xl py-12 px-4 text-center bg-gray-50/50 mt-4">
                        <p className="text-gray-400 text-xs font-medium">
                            Your stack is empty.
                        </p>
                    </div>
                ) : (
                    /* Selected Items List */
                    <div className="space-y-3">
                        {stack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border border-gray-100 rounded-xl p-3 bg-white hover:border-gray-200 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-7 h-7 object-contain"
                                    />
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-800 leading-tight">
                                            {item.name}
                                        </h4>
                                        <span className="text-[10px] text-gray-400 font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-gray-300 hover:text-gray-600 text-lg font-bold p-1 transition-colors"
                                    title="Remove"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Remove All Button */}
            {stack.length > 0 && (
                <div className="pt-6 mt-4 border-t border-gray-100">
                    <button
                        onClick={onRemoveAll}
                        className="w-full py-2.5 border border-red-200 text-red-500 rounded-xl text-xs font-semibold hover:bg-red-50 transition-colors"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default YourStack;