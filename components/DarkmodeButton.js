import useDarkMode from "./useDarkMode";
export default function DarkmodeButton() {
	const { mounted, theme, toggleDarkMode } = useDarkMode();
  
	if (!mounted) return null;
  
	return (
	  <button onClick={toggleDarkMode}>
		{theme === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
	  </button>
	);
  }