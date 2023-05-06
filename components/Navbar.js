import React from 'react'
import Image from 'next/image'
import darklogo from '/assets/img/logo-icon-dark.png';
import lightlogo from '/assets/img/logo-icon-light.png';
import Link from 'next/link';
export default function Navbar() {
    return (

        <>
            <nav
                className="nav-bar fixed top-0 left-0 z-50 flex bg-white dark:bg-slate-900/90 dark:backdrop-blur-xl lg:space-x-6">
                <div className="flex w-full items-center justify-between">
                    {/* <!-- Hamburger Menu --> */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2.5 align-middle text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            data-hs-overlay="#hs-overlay-basic"
                            aria-controls="hs-overlay-basic"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden h-4 w-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                ></path>
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden h-4 w-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- Logo --> */}
                    <Link  className="flex items-center space-x-2" href="/">
                        <Image
                            width={144}
                            height={144}
                            src={darklogo}
                            className="logo_icon_dark"
                            alt="logo" />

                        <Image
                            width={140}
                            height={140}
                            src={lightlogo}
                            className="logo_icon_light"
                            alt="logo"
                        />
                        <span className="logo_text">SlidesHub</span><span className="h-1 w-1 rounded-full bg-emerald-500"></span>
                </Link>

                    {/* <!-- Nav List --> */}
                    <ul
                        className="nav-links hidden justify-between text-slate-900 dark:text-white md:flex"
                    >
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="">Programmes</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>

                    {/* <!-- Dark/Light Mode Button --> */}
                    <button id="theme-toggle" title="theme-toggle" type="button" className="dark_mode_button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark_icon hidden"
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
                            className="light_icon hidden"
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
                    {/* <!-- End of Dark/Light mode Button --> */}
                </div>
            </nav>

            {/* <!--Mobile sidebar --> */}
            <div
                id="hs-overlay-basic"
                className="hs-overlay scrollbar-y dark:scrollbar-y hs-overlay-open:translate-x-0 fixed top-0 left-0 bottom-0 z-[60] hidden w-full -translate-x-full transform overflow-y-auto border-r border-slate-200 bg-white pt-7 pb-10 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/[.8] lg:right-auto lg:bottom-0 lg:hidden lg:translate-x-0"
            >
                <div className="flex items-center justify-between px-6">
                    <Link  className="sidebar_logo" href="/" aria-label="Brand"
                    >SlidesHub <span className="text-emerald-500">.</span>
                </Link>

                    <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md border border-slate-200 text-slate-600 transition hover:text-slate-400 dark:border-slate-500"
                        data-hs-overlay="#hs-overlay-basic"
                        aria-controls="hs-overlay-basic"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Close Sidebar</span>
                        <svg
                            className="h-4 w-4 dark:text-slate-100"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="sidebar_nav">
                    <ul className="sidebar_ul">
                        <li>
                            <Link  className="sidebar_nav_item" href="/"> Home </Link>
                        </li>
                        <li>
                            <Link  className="sidebar_nav_item" href="./programs.html"> Programs </Link>
                        </li>
                        <li>
                            <Link  className="sidebar_nav_item" href="./about.html"> About Us </Link>
                        </li>
                        <li>
                            <Link  className="sidebar_nav_item" href="./contact.html"> Contact Us </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <!-- End of  Sidebar --> */}


        </>
    )
}
