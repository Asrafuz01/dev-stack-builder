import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16">
          {/* Brand Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            {/* Resource Image Logo */}
            <img 
              src={logoText} 
              alt="DevStack Logo" 
              className="h-8 object-contain" 
            />
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2 text-sm font-semibold text-gray-700">
              <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-100 pt-8 flex items-center justify-between text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;