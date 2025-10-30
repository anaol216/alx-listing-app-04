import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold"> MyStay</div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="#" className="hover:text-blue-400">Terms</a>
          <a href="#" className="hover:text-blue-400">Privacy</a>
        </div>

        {/* Copy */}
        <p className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} MyStay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
