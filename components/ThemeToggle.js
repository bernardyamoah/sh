"use client";
import { useEffect } from "react";

const ThemeToggle = () => {
	useEffect(() => {
		const toggleTheme = () => {
			const themeToggleDarkIcon = document.getElementById(
				"theme-toggle-dark-icon"
			);
			const themeToggleLightIcon = document.getElementById(
				"theme-toggle-light-icon"
			);

			// toggle icons inside button
			themeToggleDarkIcon.classList.toggle("hidden");
			themeToggleLightIcon.classList.toggle("hidden");

			// if set via local storage previously
			if (localStorage.getItem("color-theme")) {
				if (localStorage.getItem("color-theme") === "light") {
					document.documentElement.classList.add("dark");
					localStorage.setItem("color-theme", "dark");
				} else {
					document.documentElement.classList.remove("dark");
					localStorage.setItem("color-theme", "light");
				}
			} else {
				// if NOT set via local storage previously
				if (document.documentElement.classList.contains("dark")) {
					document.documentElement.classList.remove("dark");
					localStorage.setItem("color-theme", "light");
				} else {
					document.documentElement.classList.add("dark");
					localStorage.setItem("color-theme", "dark");
				}
			}
		};

		const themeToggleBtn = document.getElementById("theme-toggle");
		themeToggleBtn.addEventListener("click", toggleTheme);

		return () => {
			themeToggleBtn.removeEventListener("click", toggleTheme);
		};
	}, []);

	return (
		<>
			<button id="theme-toggle" type="button" class="dark_mode_button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="hidden w-5"
					id="theme-toggle-dark-icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="theme-toggle-light-icon"
					class="light_icon hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			</button>
		</>
	);
};
export default ThemeToggle;
