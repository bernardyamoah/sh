
import Head from 'next/head';
import Image from 'next/image';
import heroimage1 from 'assets/img/hero-image-2.png'
import heroimage2 from '/assets/img/details-1.png'
import Link from 'next/link';
import Script from 'next/script';
export default function Home() {
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
	
	
		<main className="dark:backdrop-blur-sm">
			{/* <!-- Hero section --> */}
			<section className="pattern mt-20 flex items-center justify-center py-10">
				<div className="mx-auto max-w-5xl text-center">
					<h1 className="ani-card font-bold dark:text-white md:text-5xl">
						What is Slideshub ?
					</h1>
					<p
						className="ani-card mx-auto mt-5 mb-10 max-w-3xl text-lg font-medium text-slate-600 dark:text-slate-400 lg:text-xl"
					>
						Slideshub is an online solution to downloading and printing lecture
						slides and books. You get easy-to-use and free access to a variety
						of high-quality content in just a few seconds
					</p>
					<Image
							className="ani-card rounded-3xl"
							src={heroimage1}
							alt="Slideshub image"
							loading="lazy"
						/>
					<div className="text-center">
						<Link
							data-splitbee-event="Get Started"
							href="/programs"
							className="hero_btn"
						>
							Get Started
						</Link>
					</div>
				</div>
			</section>

			<div className="pattern relative mt-20 px-5 pb-20 md:px-8 lg:px-16">
				<div className="relative w-full">
					<div className="w-full text-black dark:text-white">
						<div
							className="mx-auto flex flex-col pt-10 md:grid md:grid-cols-2 md:gap-x-10 md:pt-20 lg:gap-x-20"
						>
							{/* <!-- Hero Text --> */}
							<div
								className="ani-card order-1 mx-auto mt-10 w-full text-center md:text-left"
							>
								<div className="text-center md:text-left">
									<h1
										className="font-title text-2xl font-extrabold text-black dark:text-white sm:text-3xl md:text-5xl xl:text-6xl"
									>
										Your Ultimate Resource for Educational Materials
									</h1>
									<p className="mt-4 text-slate-600 dark:text-slate-400 lg:text-xl">
										SlidesHub is an education website that provides students
										with a wide range of high-quality study materials, including
										slides, presentations, e-books, and more.
									</p>
								</div>

								<div>
									<Link
										data-splitbee-event="Get Started"
										href="/Programs"
										className="hero_btn"
									>
										Get Started
									</Link>
								</div>
							</div>

							{/* <!-- Hero Image --> */}
							<div className="ani-card order-0 w-full md:order-1">
								<Image
									className="w-full object-contain object-center sm:scale-105"
									src={heroimage2}
									alt="Online Learning"
								/>
							</div>
						</div>
					</div>
					{/* <!-- End of Carousel Images --> */}
				</div>
			</div>

			{/* <!-- Features Section --> */}
			<section className="pattern flex items-center justify-center py-10">
				<div className="max-w-screen py-10">
					<div className="mt-32 space-y-10">
						<div className="ani-card writeup mx-auto mb-20">
							<h2>Here's what what you'll love about Slideshub</h2>
						</div>
						{/* <!-- Feature cards --> */}
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{/* <!-- free Download--> */}
							<aside className="ani-card aside_card group transition-all">
								<div className="aside_icon bg-emerald-500 group-hover:scale-110">
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

								<h2 className="feature_heading">Free and Unlimited download</h2>

								<p className="feature_description">
									You can search through our database of slides and books,
									download them for free to read offline.
								</p>
							</aside>
{/* 
							<!-- Save time --> */}
							<aside className="ani-card aside_card group transition-all">
								<div className="aside_icon bg-emerald-500 group-hover:scale-110">
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
								<h2 className="feature_heading">Quality content you trust</h2>

								<p className="feature_description">
									All files are checked for viruses before they are uploaded to
									the website, so you can be sure that you are downloading safe
									content.
								</p>
							</aside>
							{/* <!-- Weekly Update --> */}
							<aside className="ani-card aside_card group transition-all">
								<div className="aside_icon bg-emerald-500 group-hover:scale-110">
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
								<h2 className="feature_heading">Weekly Update</h2>

								<p className="feature_description">
									Books and lecture slides by lecturers will be uploaded here
									weekly.
								</p>
							</aside>

							{/* <!-- organized files --> */}
							<aside className="ani-card aside_card group transition-all">
								<div className="aside_icon bg-emerald-500 group-hover:scale-110">
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
								<h2 className="feature_heading">Organized Files</h2>

								<p className="feature_description">
									All the needed books and lecture slides have been collated
									together, into programs and years of study.
								</p>
							</aside>
						
							<aside className="ani-card aside_card group transition-all">
								<div className="aside_icon bg-emerald-500 group-hover:scale-110">
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

								<h2 className="feature_heading">User friendly Interface</h2>

								<p className="feature_description">
									With just a few clicks you can find what you need on Slideshub
									- download it without hassle.
								</p>
							</aside>
						</div>
					</div>
				</div>
			</section>

		
			<section className="pattern bg-white py-10 dark:bg-slate-900/5">
				<div className="mx-auto max-w-6xl py-10">
					<p className="text-xl font-medium text-emerald-500">Testimonials</p>

					<h1
						className="mt-2 text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"
					>
						What users are saying
					</h1>

					<main
						className="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12"
					>
						<div
							className="absolute -z-10 w-full rounded-2xl bg-emerald-600 md:h-96"
						></div>

						<div
							className="swiper mySwiper w-full rounded-2xl bg-gradient-to-bl from-red-500 via-red-600 to-red-700 p-6 shadow-lg md:flex md:items-center md:justify-evenly md:bg-none md:p-0 md:shadow-none lg:px-12"
						>
							<div className="swiper-wrapper flex">
								
								<div className="swiper-slide">
									<div className="p-6 md:flex md:items-center md:space-x-10">
										<div className="md:w-1/2">
											<picture className="inline-block">
												<source
													srcset="
														https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
													"
												/>
												<img
													className="aspect-square h-2/6 w-2/6 rounded-full object-cover shadow-md md:!h-[32rem] md:!w-full md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
													src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
													alt="client photo"
													loading="lazy"
												/>
											</picture>
										</div>

										<div className="mt-2 md:w-1/2">
											<p
												className="font-title text-xl font-bold tracking-wide text-white lg:text-3xl"
											>
												Ema Watson
											</p>
											<span
												className="mt-2 inline-block rounded-md bg-red-800 px-2 py-1 text-xs text-white shadow-xl backdrop-blur-lg md:bg-emerald-800"
											>
												BSc Materials Engineering, KNUST
											</span>

											<p
												className="font-body mt-4 text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl"
											>
												“Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Tempore quibusdam ducimus libero ad tempora
												doloribus expedita laborum saepe voluptas perferendis
												delectus assumenda”.
											</p>
										</div>
									</div>
								</div>
								
								<div className="swiper-slide">
									<div className="p-6 md:flex md:items-center md:space-x-10">
										<div className="md:w-1/2">
											<picture className="inline-block">
												<source
													srcset="
														https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
													"
												/>
												<img
													className="aspect-square h-2/6 w-2/6 rounded-full object-cover shadow-md md:!h-[32rem] md:!w-full md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
													src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
													alt="client photo"
													loading="lazy"
												/>
											</picture>
										</div>

										<div className="mt-2 md:w-1/2">
											<p
												className="font-title text-xl font-bold tracking-wide text-white lg:text-3xl"
											>
												Ema Watson
											</p>
											<span
												className="mt-2 inline-block rounded-md bg-red-800 px-2 py-1 text-xs text-white shadow-xl backdrop-blur-lg md:bg-emerald-800"
											>
												BSc Materials Engineering, KNUST
											</span>

											<p
												className="font-body mt-4 text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl"
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

	
	

		
			
		


    </>
  )
}
