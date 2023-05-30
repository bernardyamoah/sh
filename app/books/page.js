'use client'
import Image from 'next/image'

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
   
	// Recommendation: handle errors
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data');
	}
   
	return res.json();
  }
   
  export default async function Page() {
	const data = await getData();
   
	return (
		<>
		<div>
		{data.map(thumbnail=>(
			<div key={thumbnail.id} className="inline-block m-2">
			<Image width={100} height={100} className='w-44 h-auto object-center object-cover' src={thumbnail.thumbnailUrl}/>
			</div>

		))

			
		}
		</div>
		</>
	)
  }