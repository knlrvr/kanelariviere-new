'use client'

import React, { useState } from 'react';
import useDarkMode from './utils/theme';

import { Reveal } from './utils/reveal';

import { 
  LuMoon, 
  LuSunDim
} from "react-icons/lu";


const CircadianTheme = () => {
    const [theme, toggleTheme] = useDarkMode();
    const [activeHour, setActiveHour] = useState(getCurrentHour());
  
    function getCurrentHour() {
      return new Date().getHours();
    }
  
    function handleHourClick(hour: any) {

      // Toggle the theme IF it's different from the current theme
      if ((hour < 8 || hour >= 18) && theme !== 'dark') {
        toggleTheme();
      }
      if ((hour >= 8 && hour < 18) && theme !== 'light') {
        toggleTheme();
      }
  
      // Update the active hour immediately after toggling the theme
      setActiveHour(hour);
    }

    function renderHourLines() {
      const lines = [];
      for (let hour = 1; hour < 24; hour++) {
        const isActive = activeHour === hour;
        lines.push(
          <div key={hour} className="relative w-full flex items-end">
              <div
                key={hour}
                className={`
                  flex flex-col-reverse items-center gap-4 group absolute
                  ${isActive ? 
                      'w-full' : 'w-full cursor-pointer bg-opacity-20' 
                  }
                  `}
                onClick={() => handleHourClick(hour)}
              >
                <span className={`w-[2px] duration-200 group-hover:h-9
                ${hour < 8 || hour > 17 ? 
                  'bg-neutral-700 h-3' : 'bg-neutral-400 h-6'
                }
                ${isActive ? 'h-9' : 'opacity-50' } 
                `}> </span> 
                {/* icon dependent on theme */}
                {isActive && theme === 'light' && 
                  <Reveal>
                    <div className="bounce rounded-full bg-yellow-400 text-center text-xl p-3 shadow-md">
                      <LuSunDim />
                    </div>
                  </Reveal>
                }
                {isActive && theme === 'dark' && 
                  <Reveal>
                    <div className="bounce rounded-full bg-blue-400 text-center text-xl p-3 shadow-md">
                      <LuMoon />
                    </div>
                  </Reveal>
                }
              </div>
          </div> 
        );
      }
      return lines;
    }
  
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mt-44">
          {renderHourLines()}
        </div>
      </div>
    );
  };

export default CircadianTheme;




