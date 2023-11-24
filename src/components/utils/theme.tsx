'use client';

import { useState, useEffect, useMemo } from 'react';

const useDarkMode = () => {
  const getCurrentTheme = useMemo(() => {
    const currentHour = new Date().getHours();
    return currentHour < 6 || currentHour >= 17 ? 'dark' : 'light';
  }, []);

  const [theme, setTheme] = useState(getCurrentTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return [theme, toggleTheme] as const;
};

export default useDarkMode;