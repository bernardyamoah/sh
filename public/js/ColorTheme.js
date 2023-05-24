'use client'
import { useEffect } from 'react';

export default function ColorTheme() {
  useEffect(() => {
    function handleColorTheme() {
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    handleColorTheme(); // Call the function once on component mount

    // Listen for storage and media query changes
    window.addEventListener('storage', handleColorTheme);
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleColorTheme);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('storage', handleColorTheme);
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleColorTheme);
    };
  }, []);

  return null; // This component doesn't render anything
}
