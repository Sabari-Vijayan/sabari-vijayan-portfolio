import { useState, useEffect } from 'react';

function DarkMode() {
  // Initialize state from localStorage if it exists, otherwise default to false
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      <img 
        // Swap icons based on the isDark state
        src={isDark ? '/light.svg' : '/dark.svg'} 
        alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="h-6 w-6 dark:invert" 
      />
    </button>
  );
}

export default DarkMode;

