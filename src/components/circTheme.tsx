'use client'

import React, { useState } from 'react';
import useDarkMode from './utils/theme';

import {
    BsSun
} from 'react-icons/bs'
import { 
    LuMoon 
} from "react-icons/lu";


const CircadianTheme = () => {
    const [theme, toggleTheme] = useDarkMode();
    const [activeHour, setActiveHour] = useState(getCurrentHour());
  
    function getCurrentHour() {
      return new Date().getHours();
    }
  
    function handleHourClick(hour: any) {

      // Toggle the theme IF it's different from the current theme
      if ((hour < 7 || hour >= 17) && theme !== 'dark') {
        toggleTheme();
      }
      if ((hour >= 7 && hour < 17) && theme !== 'light') {
        toggleTheme();
      }
  
      // Update the active hour immediately after toggling the theme
      setActiveHour(hour);
    }

    function renderHourLines() {
      const lines = [];
      for (let hour = 1; hour < 25; hour++) {
        const isActive = activeHour === hour;
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
            >
              <span className={`bg-neutral-500 w-[2px] h-8 
              ${isActive ? '' : 'mt-[3.25rem] opacity-50' } 
              `}> </span> 

              {/* icon dependent on theme */}
              {isActive && theme === 'light' && 
                <div className="bounce rounded-full bg-yellow-400 text-center text-xl p-2 shadow-lg">
                  <BsSun />
                </div>
              }
              {isActive && theme === 'dark' && 
                <div className="bounce rounded-full bg-blue-400 text-center text-xl p-2 shadow-md">
                  <LuMoon />
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




