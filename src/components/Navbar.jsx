import Logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

                <img src={Logo} alt="Logo" className="h-9 object-contain" />

                <ul className="flex items-center gap-8 text-sm font-medium">
                    <li className="text-pink-500 font-semibold cursor-pointer">Home</li>
                    <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Technologies</li>
                    <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Projects</li>
                    <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">About</li>
                    <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Contact</li>
                </ul>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-sm">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;