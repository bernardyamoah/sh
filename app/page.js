
import Head from 'next/head';
import Link from 'next/link';


import Script from 'next/script';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Hero from '@/components/Hero';
import Link from 'next/link';
export default function Home() {
	let Links = [
		{
			name : "Home", link: "/"
		},
		{
			name : "Programs", link : "./programs.html"
		},
		{
			name : "About Us", link : "./about.html"
		},
		{
			name : "Contact Us", link : "./contact.html"
		}
	]





  return (
    <>
	<Head>
	<meta name="description" content="" />
	{/* <!--Your description--> */}
	<meta name="author" content="Bernard Yamoah" />

	{/* <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn --> */}
	<meta property="og:site_name" content="SlidesHub" />
	{/* <!-- website name --> */}
	<meta property="og:site" content="https://slideshub.netlify.app/" />
	{/* <!-- website Link --> */}
	<meta property="og:title" content=" Welcome to SlidesHub" />
	{/* <!-- title shown in the actual shared post --> */}
	<meta
		property="og:description"
		content="Do you find yourself constantly struggling to keep up with your schoolwork?
Do you have trouble accessing your lecture slides or finding the right books for your courses? SlidesHub is here to help! With our easy-to-use platform, you can quickly and easily access all the resources you need to succeed in your courses."
	/>
	{/* <!-- description shown in the actual shared post -->
	<!-- Open Graph / Facebook --> */}
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://slideshub.netlify.app/" />

	<meta
		property="og:image"
		content="https://slideshub.netlify.app/assets/favicon_io/thumbnail.jpg"
	/>
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="300" />
	<meta property="og:image:alt" content="SlidesHub Image" />
	{/* <!-- Twitter --> */}
	<meta property="twitter:ani-card" content="summary_large_image" />
	<meta property="twitter:url" content="https://slideshub.netlify.app/" />
	<meta property="twitter:title" content="Welcome To SlidesHub" />
	<meta
		property="twitter:description"
		content="Do you find yourself constantly struggling to keep up with your schoolwork?
Do you have trouble accessing your lecture slides or finding the right books for your courses? SlidesHub is here to help! With our easy-to-use platform, you can quickly and easily access all the resources you need to succeed in your courses."
	/>
	<meta
		property="twitter:image"
		content="https://slideshub.netlify.app/assets/favicon_io/thumbnail.jpg"
	/>
	{/* <!--Place these in the <head> section of your HTML--> */}
	<Link
		rel="apple-touch-icon"
		sizes="180x180"
		href="./assets/favicon_io/apple-touch-icon.png"
	/>
	<Link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="./assets/favicon_io/favicon-32x32.png"
	/>

	<Link rel="manifest" href="./assets/favicon_io/site.webmanifest" />
	
	<Script src="https://unpkg.com/scrollreveal"/>
	<Script
		defer
		src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"
	/>
	<Script async src="https://cdn.splitbee.io/sb.js"/>
	<Link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
	/>

	<meta />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<Link rel="icon" href="./assets/favicon_io/favicon.ico" />

	
	<title>SlidesHub</title>
   </Head>
	
	
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
				<a className="flex items-center space-x-2" href="/">
					<Image				
						src="/assets/img/logo-icon-light.png"
						className="logo_icon_dark"
						alt="logo"	
						width={5}
					    height={5}
						/>
						
					<Image
					width={140}
					height={140}
						src="/assets/img/logo-icon-light.png"
						className="logo_icon_light"
						alt="logo"
					/>
					<span className="logo_text">SlidesHub</span><span className="h-1 w-1 rounded-full bg-emerald-500"></span>
				</a>

				{/* <!-- Nav List --> */}
				<ul
					className="nav-links hidden justify-between text-slate-900 dark:text-white md:flex"
				>
					<li><a href="/">Home</a></li>
					<li><a href="./programs.html">Programmes</a></li>
					<li><a href="./about.html">About Us</a></li>
					<li><a href="./contact.html">Contact Us</a></li>
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
				<a className="sidebar_logo" href="/" aria-label="Brand"
					>SlidesHub <span className="text-emerald-500">.</span>
				</a>

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


				<div className="sidebar_ul">
				{Links.map((link, index) => (
					<Link href={link.link} key={index} className="sidebar_nav_item">
					
						
						<span className="sidebar_nav_item">{link.name}</span>
						<span class="sidebar_nav_item">{link.name}</span>
					
					</Link>
				  ))
				  }
				</div>
			</nav>
		</div>
		{/* <!-- End of  Sidebar --> */}

		<main className="dark:backdrop-blur-sm">
			{/* <!-- Hero section --> */}
			<Hero/>

			{/* <!-- Features Section --> */}
			<Features/>

		
			{/*Testimonial Section */}
			<Testimonials/>

			
		</main>

	
	

		
			
		


    </>
  )
}
