import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function useDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { mounted, theme, toggleDarkMode };
}
