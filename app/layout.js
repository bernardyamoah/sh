'use client'

import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import 'flowbite'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Script from 'next/script'





const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Slideshub',
  description: 'Generated by create next app',
  charset:"utf-8",
  type: 'website',
  url: 'https://slideshub.netlify.app',
  site_name: 'Slideshub',
  author: 'Slideshub',
  // twitter_username: '@slideshub',
  image: '/images/icon.png',
  favicon: '/images/favicon.png',
  og:{
    title: 'Slideshub',
    type: 'website',
    url: 'https://slideshub.netlify.app/',
    description: 'Generated by create next app',
    image: '/public/thumbnail.png',

  }

}

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add code to persist the dark mode state, e.g., using local storage
    // Retrieve the saved dark mode state and set it to setIsDarkMode
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add code to persist the updated dark mode state
  };


  return (
<>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
         />
         
    </Head>
  


      <body className={inter.className}>
      <Navbar/>
      {children}
    <Script src='/public/js/dm.js'/>
      <Footer/>
      </body>
      </>
  )
}
