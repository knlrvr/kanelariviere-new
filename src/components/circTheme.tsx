import React, { useState } from 'react';
import useDarkMode from './utils/theme';

import {
    BsSun, BsMoon
} from 'react-icons/bs'
import { 
    LuMoon 
} from "react-icons/lu";


const CircadianTheme = () => {
    const [theme, toggleTheme] = useDarkMode();
    const [activeHour, setActiveHour] = useState(getCurrentHour());
    const [hoveredHour, setHoveredHour] = useState(null);
  
    function getCurrentHour() {
      return new Date().getHours();
    }
  
    function handleHourClick(hour: any) {
      // Toggle the theme if it's different from the current theme
      if ((hour < 7 || hour >= 17) && theme !== 'dark') {
        toggleTheme();
      }
      if ((hour >= 7 && hour < 17) && theme !== 'light') {
        toggleTheme();
      }
  
      // Update the active hour immediately after toggling the theme
      setActiveHour(hour);
  
      console.log(`Theme for ${hour}:00 - ${hour + 1}:00 toggled`);
    }

    function handleHourHover(hour: any) {
        setHoveredHour(hour);
    }

    function handleHourLeave() {
        setHoveredHour(null);
    }
  
    function renderHourLines() {
      const lines = [];
      for (let hour = 1; hour < 25; hour++) {
        const isActive = activeHour === hour;
        const isHovered = hoveredHour === hour;
        lines.push(
          <div className="relative mt-20 w-full">
            <div
                key={hour}
                className={`
                flex flex-col-reverse items-center gap-4
                ${isActive ? 
                    'w-full' 
                : 
                    'w-full cursor-pointer bg-opacity-20' 
                }`}
                onClick={() => handleHourClick(hour)}
                onMouseEnter={() => handleHourHover(hour)}
                onMouseLeave={() => handleHourLeave}
            >
                <span className={`bg-neutral-500 w-[2px] h-8 
                ${isActive ? '' : 'mt-[3.25rem] opacity-50' } 
                `}> </span> 

                {/* icon dependent on theme */}
                {isActive && theme === 'light' && 
                    <div className="bounce rounded-full bg-yellow-400 text-center text-xl p-2">
                        <BsSun />
                    </div>
                }
                {isActive && theme === 'dark' && 
                    <div className="bounce rounded-full bg-blue-400 text-center text-xl p-2">
                        <BsMoon />
                    </div>
                }

            </div>
          </div> 
        );
      }
      return lines;
    }
  
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          {renderHourLines()}
        </div>
      </div>
    );
  };

export default CircadianTheme;


