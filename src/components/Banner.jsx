import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* Left Content */}
                <div className="max-w-xl">

                    <h1 className="text-5xl font-bold leading-tight">
                        Build Your Ideal
                        <br />
                        <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-500 leading-6 max-w-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="flex gap-3 mt-8">
                        <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white px-4 py-2.5 rounded-md text-sm font-medium">
                            Explore Technologies
                        </button>

                        <button className="border border-gray-200 px-7 py-2.5 rounded-md text-sm text-gray-600">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div>
                    <img
                        src={BannerImage}
                        alt="Development Stack"
                        className="w-96"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;