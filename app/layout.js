import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import 'flowbite'


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Slideshub',
  description: 'Generated by create next app',
  charset:"utf-8" ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <MyDocument/>
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
