'use client'

import React from 'react'
import useDarkMode from './utils/theme'

const ToggleTheme = () => {
    const [theme, toggleTheme] = useDarkMode();  

    const handleThemeChange = () => {
        toggleTheme();
      };
    
    return (
    <label className="relative inline-flex items-center cursor-pointer">
        <input
          id="theme"
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleThemeChange}
          checked={theme === "dark"}
        />
        <div className="w-8 h-[1rem] bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:absolute after:top-[-2px] after:left-[-2px] after:bg-neutral-500 peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-400"></div>

        <span className="ml-3 text-xs opacity-80 font-light tracking-wide">
          {theme === "dark" ? "dark" : "light"} theme
        </span>
    </label>
  )
}

export default ToggleTheme