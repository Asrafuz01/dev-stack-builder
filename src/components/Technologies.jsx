import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadTechnologies = () => {
            fetch("/data.json")
                .then((response) => {
                    if (!response.ok) throw new Error("Failed to load data");
                    return response.json();
                })
                .then((data) => {
                    setTechnologies(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                    setLoading(false);
                });
        };
        loadTechnologies();
    }, []);

    // Add technology to stack
    const handleAdd = (technology) => {
        const alreadyAdded = stack.some((item) => item.id === technology.id);

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack([...stack, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    // Remove single technology
    const handleRemove = (id) => {
        const remainingStack = stack.filter((item) => item.id !== id);
        setStack(remainingStack);
        toast.info("Item removed from your stack.");
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setStack([]);
        toast.error("All items removed from stack.");
    };

    if (loading) {
        return (
            <section className="py-20 text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent"></div>
                <h2 className="text-xl font-bold mt-4 text-gray-700">Loading technologies...</h2>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 text-center">
                <h2 className="text-xl font-bold text-red-500">Failed to load technology data.</h2>
            </section>
        );
    }

    return (
        <section className="py-18">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Explore the <span className="text-brand-gradient">Technologies</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-base">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {technologies.map((technology) => {
                            const isAdded = stack.some((item) => item.id === technology.id);
                            return (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    onAdd={handleAdd}
                                    isAdded={isAdded}
                                />
                            );
                        })}
                    </div>

                    <YourStack
                        stack={stack}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
};

export default Technologies;