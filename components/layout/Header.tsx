import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
         MyStay
      </div>

      {/* Accommodation Types */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansion</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
        <a href="#" className="hover:text-blue-600">Apartments</a>
      </nav>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
          Sign In
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
