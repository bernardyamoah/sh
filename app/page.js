import Image from 'next/image'

import {slogo} from './../assets/img/2d'

export default function Home() {
  return (
    <>
    
	<head>
		<meta name="description" content="" />
		{/* <!--Your description--> */}
		<meta name="author" content="Bernard Yamoah" />

		{/* <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn --> */}
		<meta property="og:site_name" content="SlidesHub" />
		{/* <!-- website name --> */}
		<meta property="og:site" content="https://slideshub.netlify.app/" />
		{/* <!-- website link --> */}
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
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="./assets/favicon_io/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="./assets/favicon_io/favicon-32x32.png"
		/>

		<link rel="manifest" href="./assets/favicon_io/site.webmanifest" />
		<link rel="stylesheet" defer href="./css/styles.css" />
		<script src="https://unpkg.com/scrollreveal"></script>
		<script
			defer
			src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"
		></script>
		<script async src="https://cdn.splitbee.io/sb.js"></script>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
		/>

		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="./assets/favicon_io/favicon.ico" />

		
		<title>SlidesHub</title>
	</head>

	<body>
	
		<nav
			class="nav-bar fixed top-0 left-0 z-50 flex bg-white dark:bg-slate-900/90 dark:backdrop-blur-xl lg:space-x-6"
		>
			<div class="flex w-full items-center justify-between">
				{/* <!-- Hamburger Menu --> */}
				<div class="md:hidden">
					<button
						type="button"
						class="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2.5 align-middle text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
						data-hs-overlay="#hs-overlay-basic"
						aria-controls="hs-overlay-basic"
						aria-label="Toggle navigation"
					>
						<svg
							class="hs-collapse-open:hidden h-4 w-4"
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
							class="hs-collapse-open:block hidden h-4 w-4"
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
				<a class="flex items-center space-x-2" href="./index.html">
					<img
						src="./assets/img/logo-icon-dark.png"
						class="logo_icon_dark"
						alt="logo"
					/>
					<img
						src="./assets/img/logo-icon-light.png"
						class="logo_icon_light"
						alt="logo"
					/>
					<span class="logo_text">SlidesHub</span
					><span class="h-1 w-1 rounded-full bg-emerald-500"></span>
				</a>

				{/* <!-- Nav List --> */}
				<ul
					class="nav-links hidden justify-between text-slate-900 dark:text-white md:flex"
				>
					<li><a href="./index.html">Home</a></li>
					<li><a href="./programs.html">Programmes</a></li>
					<li><a href="./about.html">About Us</a></li>
					<li><a href="./contact.html">Contact Us</a></li>
				</ul>

				{/* <!-- Dark/Light Mode Button --> */}
				<button id="theme-toggle" title="theme-toggle" type="button" class="dark_mode_button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="dark_icon hidden"
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
				{/* <!-- End of Dark/Light mode Button --> */}
			</div>
		</nav>

		{/* <!--Mobile sidebar --> */}
		<div
			id="hs-overlay-basic"
			class="hs-overlay scrollbar-y dark:scrollbar-y hs-overlay-open:translate-x-0 fixed top-0 left-0 bottom-0 z-[60] hidden w-full -translate-x-full transform overflow-y-auto border-r border-slate-200 bg-white pt-7 pb-10 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/[.8] lg:right-auto lg:bottom-0 lg:hidden lg:translate-x-0"
		>
			<div class="flex items-center justify-between px-6">
				<a class="sidebar_logo" href="./index.html" aria-label="Brand"
					>SlidesHub <span class="text-emerald-500">.</span>
				</a>

				<button
					type="button"
					class="inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md border border-slate-200 text-slate-600 transition hover:text-slate-400 dark:border-slate-500"
					data-hs-overlay="#hs-overlay-basic"
					aria-controls="hs-overlay-basic"
					aria-label="Toggle navigation"
				>
					<span class="sr-only">Close Sidebar</span>
					<svg
						class="h-4 w-4 dark:text-slate-100"
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

			<nav class="sidebar_nav">
				<ul class="sidebar_ul">
					<li>
						<a class="sidebar_nav_item" href="./index.html"> Home </a>
					</li>
					<li>
						<a class="sidebar_nav_item" href="./programs.html"> Programs </a>
					</li>
					<li>
						<a class="sidebar_nav_item" href="./about.html"> About Us </a>
					</li>
					<li>
						<a class="sidebar_nav_item" href="./contact.html"> Contact Us </a>
					</li>
				</ul>
			</nav>
		</div>
		{/* <!-- End of  Sidebar --> */}

		<main class="dark:backdrop-blur-sm">
			{/* <!-- Hero section --> */}
			<section class="pattern mt-20 flex items-center justify-center py-10">
				<div class="mx-auto max-w-5xl text-center">
					<h1 class="ani-card font-bold dark:text-white md:text-5xl">
						What is Slideshub ?
					</h1>
					<p
						class="ani-card mx-auto mt-5 mb-10 max-w-3xl text-lg font-medium text-slate-600 dark:text-slate-400 lg:text-xl"
					>
						Slideshub is an online solution to downloading and printing lecture
						slides and books. You get easy-to-use and free access to a variety
						of high-quality content in just a few seconds
					</p>
					<picture>
						<source srcset="./assets/img/hero-image-2.png" type="image" />
						<img
							class="ani-card rounded-3xl"
							src="./assets/img/hero-image-2.png"
							alt="Slideshub image"
							loading="lazy"
						/>
					</picture>
					<div class="text-center">
						<a
							data-splitbee-event="Get Started"
							href="./programs.html"
							class="hero_btn"
						>
							Get Started
						</a>
					</div>
				</div>
			</section>

			<div class="pattern relative mt-20 px-5 pb-20 md:px-8 lg:px-16">
				<div class="relative w-full">
					<div class="w-full text-black dark:text-white">
						<div
							class="mx-auto flex flex-col pt-10 md:grid md:grid-cols-2 md:gap-x-10 md:pt-20 lg:gap-x-20"
						>
							{/* <!-- Hero Text --> */}
							<div
								class="ani-card order-1 mx-auto mt-10 w-full text-center md:text-left"
							>
								<div class="text-center md:text-left">
									<h1
										class="font-title text-2xl font-extrabold text-black dark:text-white sm:text-3xl md:text-5xl xl:text-6xl"
									>
										Your Ultimate Resource for Educational Materials
									</h1>
									<p class="mt-4 text-slate-600 dark:text-slate-400 lg:text-xl">
										SlidesHub is an education website that provides students
										with a wide range of high-quality study materials, including
										slides, presentations, e-books, and more.
									</p>
								</div>

								<div>
									<a
										data-splitbee-event="Get Started"
										href="./programs.html"
										class="hero_btn"
									>
										Get Started
									</a>
								</div>
							</div>

							{/* <!-- Hero Image --> */}
							<div class="ani-card order-0 w-full md:order-1">
								<img
									class="w-full object-contain object-center sm:scale-105"
									src="./assets/img/details-1.png"
									alt="Online Learning"
								/>
							</div>
						</div>
					</div>
					{/* <!-- End of Carousel Images --> */}
				</div>
			</div>

			{/* <!-- Features Section --> */}
			<section class="pattern flex items-center justify-center py-10">
				<div class="max-w-screen py-10">
					<div class="mt-32 space-y-10">
						<div class="ani-card writeup mx-auto mb-20">
							<h2>Here's what what you'll love about Slideshub</h2>
						</div>
						{/* <!-- Feature cards --> */}
						<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{/* <!-- free Download--> */}
							<aside class="ani-card aside_card group transition-all">
								<div class="aside_icon bg-emerald-500 group-hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 512 512"
									>
										<path
											d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"
										/>
									</svg>
								</div>

								<h2 class="feature_heading">Free and Unlimited download</h2>

								<p class="feature_description">
									You can search through our database of slides and books,
									download them for free to read offline.
								</p>
							</aside>
{/* 
							<!-- Save time --> */}
							<aside class="ani-card aside_card group transition-all">
								<div class="aside_icon bg-emerald-500 group-hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 512 512"
									>
										<path
											d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
										/>
									</svg>
								</div>
								<h2 class="feature_heading">Quality content you trust</h2>

								<p class="feature_description">
									All files are checked for viruses before they are uploaded to
									the website, so you can be sure that you are downloading safe
									content.
								</p>
							</aside>
							{/* <!-- Weekly Update --> */}
							<aside class="ani-card aside_card group transition-all">
								<div class="aside_icon bg-emerald-500 group-hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 512 512"
									>
										<path
											d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
										/>
									</svg>
								</div>
								<h2 class="feature_heading">Weekly Update</h2>

								<p class="feature_description">
									Books and lecture slides by lecturers will be uploaded here
									weekly.
								</p>
							</aside>

							{/* <!-- organized files --> */}
							<aside class="ani-card aside_card group transition-all">
								<div class="aside_icon bg-emerald-500 group-hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 576 512"
									>
										
										<path
											d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
										/>
									</svg>
								</div>
								<h2 class="feature_heading">Organized Files</h2>

								<p class="feature_description">
									All the needed books and lecture slides have been collated
									together, into programs and years of study.
								</p>
							</aside>
						
							<aside class="ani-card aside_card group transition-all">
								<div class="aside_icon bg-emerald-500 group-hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 640 512"
									>
										<path
											d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
										/>
									</svg>
								</div>

								<h2 class="feature_heading">User friendly Interface</h2>

								<p class="feature_description">
									With just a few clicks you can find what you need on Slideshub
									- download it without hassle.
								</p>
							</aside>
						</div>
					</div>
				</div>
			</section>

		
			<section class="pattern bg-white py-10 dark:bg-slate-900/5">
				<div class="mx-auto max-w-6xl py-10">
					<p class="text-xl font-medium text-emerald-500">Testimonials</p>

					<h1
						class="mt-2 text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"
					>
						What users are saying
					</h1>

					<main
						class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12"
					>
						<div
							class="absolute -z-10 w-full rounded-2xl bg-emerald-600 md:h-96"
						></div>

						<div
							class="swiper mySwiper w-full rounded-2xl bg-gradient-to-bl from-red-500 via-red-600 to-red-700 p-6 shadow-lg md:flex md:items-center md:justify-evenly md:bg-none md:p-0 md:shadow-none lg:px-12"
						>
							<div class="swiper-wrapper flex">
								
								<div class="swiper-slide">
									<div class="p-6 md:flex md:items-center md:space-x-10">
										<div class="md:w-1/2">
											<picture class="inline-block">
												<source
													srcset="
														https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
													"
												/>
												<img
													class="aspect-square h-2/6 w-2/6 rounded-full object-cover shadow-md md:!h-[32rem] md:!w-full md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
													src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
													alt="client photo"
													loading="lazy"
												/>
											</picture>
										</div>

										<div class="mt-2 md:w-1/2">
											<p
												class="font-title text-xl font-bold tracking-wide text-white lg:text-3xl"
											>
												Ema Watson
											</p>
											<span
												class="mt-2 inline-block rounded-md bg-red-800 px-2 py-1 text-xs text-white shadow-xl backdrop-blur-lg md:bg-emerald-800"
											>
												BSc Materials Engineering, KNUST
											</span>

											<p
												class="font-body mt-4 text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl"
											>
												“Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Tempore quibusdam ducimus libero ad tempora
												doloribus expedita laborum saepe voluptas perferendis
												delectus assumenda”.
											</p>
										</div>
									</div>
								</div>
								
								<div class="swiper-slide">
									<div class="p-6 md:flex md:items-center md:space-x-10">
										<div class="md:w-1/2">
											<picture class="inline-block">
												<source
													srcset="
														https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
													"
												/>
												<img
													class="aspect-square h-2/6 w-2/6 rounded-full object-cover shadow-md md:!h-[32rem] md:!w-full md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
													src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
													alt="client photo"
													loading="lazy"
												/>
											</picture>
										</div>

										<div class="mt-2 md:w-1/2">
											<p
												class="font-title text-xl font-bold tracking-wide text-white lg:text-3xl"
											>
												Ema Watson
											</p>
											<span
												class="mt-2 inline-block rounded-md bg-red-800 px-2 py-1 text-xs text-white shadow-xl backdrop-blur-lg md:bg-emerald-800"
											>
												BSc Materials Engineering, KNUST
											</span>

											<p
												class="font-body mt-4 text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl"
											>
												“Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Tempore quibusdam ducimus libero ad tempora
												doloribus expedita laborum saepe voluptas perferendis
												delectus assumenda”.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</section>

			
		</main>

	
		<footer class="footer">
			<div class="footer_content_wrapper">
				<div class="footer_link_wrapper">
					<a
						href="https://web.facebook.com/bernard.amoah.334"
						target="_blank"
						class="footer_links"
					>
						<span class="sr-only">Facebook</span>
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/be_r_n_ard"
						target="_blank"
						class="footer_links"
					>
						<span class="sr-only">Instagram</span>
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
					<a
						href="https://twitter.com/byayamoah"
						target="_blank"
						class="footer_links"
					>
						<span class="sr-only">Twitter</span>
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							></path>
						</svg>
					</a>
					<a
						href="https://github.com/bernardyamoah/"
						target="_blank"
						class="footer_links"
					>
						<span class="sr-only">GitHub</span>
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</div>
				<p class="footer_copyright">
					© <span id="year"></span> BartLabs, Inc. All rights reserved.
				</p>
			</div>
		</footer>

		
			
		
	</body>

    </>
  )
}
