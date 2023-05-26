"use client";

import React from "react";


import Logo from "./Logo";
import NavItems from "./NavItems";
import BottomNav from "./BottomNav";

const Navbar = () => {
	return (
		<>
			<nav className="nav-bar fixed top-0 left-0 z-50 flex bg-white dark:bg-slate-900/90 dark:backdrop-blur-xl lg:space-x-6">
				<div className="flex w-full items-center justify-center md:justify-between">
				
					{/* <!-- Logo --> */}
					<Logo />

					{/* <!-- Nav List --> */}
					<ul className="nav-links hidden justify-between text-slate-900 dark:text-white md:flex">
						<NavItems />
					</ul>

					

					<BottomNav/>
				</div>
			</nav>

		
		</>
	);
};

export default Navbar;
