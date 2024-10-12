import React, { useState } from 'react';

const Navbar = ({ handleScrollToSection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent backdrop-blur-lg text-white">
      <div className="text-lg font-bold px-6">Flia</div>

      <div className="md:hidden relative">
        <button 
          className="text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 bg-white/10 rounded-lg shadow-lg mt-2">
            <div 
              className="py-2 px-6 text-white hover:bg-white/20 transition duration-300 cursor-pointer"
              onClick={handleScrollToSection}
            >
              Take a look about me
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex space-x-4">
        <div className="rounded-lg py-2 px-6 bg-white/10 text-white hover:bg-white/20 transition duration-300">
          <span>Home</span>
        </div>
        <div 
          className="rounded-lg py-2 px-6 bg-transparent text-white hover:bg-white/10 transition duration-300 cursor-pointer"
          onClick={handleScrollToSection}
        >
          <span>Take a look about me</span>
        </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
