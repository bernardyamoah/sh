'use client'
import Link from 'next/link';
export default function NavItems() {
    let Links = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Programs",
			link: "/programmes",
		},
		{
			name: "Books",
			link: "/books",
		},
		{
			name: "About Us",
			link: "/about",
		},
		{
			name: "Contact Us",
			link: "/contact",
		},
	];
    return (
        <>
        {Links.map((link, index) => (
            <li>
            <Link href={link.link} key={index} >
            <span>{link.name}</span>
            </Link>
            </li>
    ))}
        </>
    )
}
