"use client"

import React from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import DarkmodeButton from "./DarkmodeButton";
const Navbar = () => {
    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
      setMounted(true);
    },[])

    const renderThemeChanger= () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }

        else {
          return (
            <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
          )
        }
     };
  
	return (
		<>
			<nav className="nav-bar fixed top-0 left-0 z-50 flex bg-white dark:bg-slate-900/90 dark:backdrop-blur-xl lg:space-x-6">
				<div className="flex w-full items-center justify-between">
					{/* <!-- Hamburger Menu --> */}
					<Hamburger/>

					{/* <!-- Logo --> */}
					<Logo/>

					{/* <!-- Nav List --> */}
					<ul className="nav-links hidden justify-between text-slate-900 dark:text-white md:flex">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/programmes">Programmes</Link>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="">Contact Us</Link>
						</li>
					</ul>

					{/* <!-- Dark/Light Mode Button --> */}
					<DarkmodeButton/>
					
                    {renderThemeChanger()}

					
					{/* <!-- End of Dark/Light mode Button --> */}
				</div>
			</nav>

			{/* <!--Mobile sidebar --> */}
			<Sidebar/>
			{/* <!-- End of  Sidebar --> */}

		</>
	);
    }


export default Navbar;
