
import Head from 'next/head';


import Script from 'next/script';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Hero from '@/components/Hero';
import Link from 'next/link';
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
			<Hero/>

			{/* <!-- Features Section --> */}
			<Features/>

		
			{/*Testimonial Section */}
			<Testimonials/>

			
		</main>

	
	

		
			
		


    </>
  )
}
