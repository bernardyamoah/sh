'use client'
import Image from 'next/image'

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
		{/* <div>
		{data.map(thumbnail=>(
			<div key={thumbnail.id} className="inline-block m-2">
			<Image width={100} height={100} className='w-44 h-auto object-center object-cover' src={thumbnail.thumbnailUrl}/>
			</div>

		))

			
		}
		</div> */}

    <section>
      {data.map(Title => (
        <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="p-6">
          <h5 key="{Title.id}" class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {Title.title}
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {Title.body}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
      ))}
    
</section>
		</>
	)
  }