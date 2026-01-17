import { useState } from 'react';
import DarkMode from './DarkMode.jsx';
import hamburger from '../assets/hamburger.svg';

function NavBar() {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNav = () => {
      setIsOpen(!isOpen);
      console.log("Toggle pressed")
  }

  return (
    <nav className="w-full bg-white dark:bg-[#252525] shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl text-black dark:text-white">
              Sabari.
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <DarkMode />

            {/* Mobile Menu Button & Dropdown */}
            <div className="relative">
              <button onClick={toggleNav} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                <img alt="Hamburger" src={hamburger} className="h-6 w-6 dark:invert" />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1f2120] rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700 z-50">
                  <ul className="flex flex-col">
                    <li>
                      <a href="#home" onClick={toggleNav} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
                    </li>
                    <li>
                      <a href="#projects" onClick={toggleNav} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Projects</a>
                    </li>
                    <li>
                      <a href="#about" onClick={toggleNav} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
                    </li>
                    <li>
                      <a href="#contact" onClick={toggleNav} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;
