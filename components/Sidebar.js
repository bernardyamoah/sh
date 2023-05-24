
import Link from "next/link";
export default function Sidebar(){
    return (
        <div
        id="hs-overlay-basic"
        className="hs-overlay scrollbar-y dark:scrollbar-y hs-overlay-open:translate-x-0 fixed top-0 left-0 bottom-0 z-[60] hidden w-full -translate-x-full transform overflow-y-auto border-r border-slate-200 bg-white pt-7 pb-10 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/[.8] lg:right-auto lg:bottom-0 lg:hidden lg:translate-x-0"
    >
        <div className="flex items-center justify-between px-6">
            <Link className="sidebar_logo" href="/" aria-label="Brand">
                SlidesHub <span className="text-emerald-500">.</span>
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
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>
        </div>

        <nav className="sidebar_nav">
            <ul className="sidebar_ul">
                <li>
                    <Link className="sidebar_nav_item" href="/">
                        {" "}
                        Home{" "}
                    </Link>
                </li>
                <li>
                    <Link className="sidebar_nav_item" href="/programmes">
                        {" "}
                        Programs{" "}
                    </Link>
                </li>
                <li>
                    <Link className="sidebar_nav_item" href="/about">
                        {" "}
                        About Us{" "}
                    </Link>
                </li>
                <li>
                    <Link className="sidebar_nav_item" href="/contact">
                        {" "}
                        Contact Us{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    );
  }

