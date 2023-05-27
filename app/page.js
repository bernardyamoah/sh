'use client'
import Head from "next/head";
import Script from "next/script";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Head>
				<meta
					property="twitter:image"
					content="https://slideshub.netlify.app/assets/favicon_io/thumbnail.jpg"
				/>

				<Script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js" />
				<Script async src="https://cdn.splitbee.io/sb.js" />

				<title>SlidesHub</title>
			</Head>

			<main className="dark:backdrop-blur-sm">
				{/* <!-- Hero section --> */}
				<Hero />

				{/* <!-- Features Section --> */}
				<Features />

				{/*Testimonial Section */}
				<Testimonials />
			</main>
		</>
	);
}
