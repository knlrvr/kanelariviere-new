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
        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>

        <span className="ml-3 text-xs font-light">
          {theme === "dark" ? "Dark" : "Light"} Theme
        </span>
    </label>
  )
}

export default ToggleTheme