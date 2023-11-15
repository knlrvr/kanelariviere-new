'use client';

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const getCurrentTheme = () => {
    const currentHour = new Date().getHours();
    return currentHour < 6 || currentHour >= 17 ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getCurrentTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    // Update theme based on the current time every minute
    const updateThemeInterval = setInterval(() => {
      setTheme(getCurrentTheme());
    }, 60000);

    return () => clearInterval(updateThemeInterval);
  }, []);

  return [theme, toggleTheme] as const;
};

export default useDarkMode;
