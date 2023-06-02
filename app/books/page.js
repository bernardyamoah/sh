import getAllUsers from '@/lib/getAllUsers'
import { Suspense } from 'react';
import Loading from '../contact/loading';
import Link from 'next/link';


async function Page() {
	const users=await getAllUsers()
	const content = (
		<>
		<section class="bg-white dark:bg-gray-900">
    
    <div class="container px-6 py-8 mx-auto">
        <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
			<Suspense fallback={<Loading />}>
			{users.map((user) => (
				<div key={user.id} class="w-full max-w-xs text-center">
				<Link href={`books/${user.id}`}>
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />
				
                <div class="mt-2">
				<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{user.name}</h3>
				<span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                </div>
				</Link>
				
            </div>
			))}
			</Suspense>
            

            

            
        </div>
    </div>
</section>
		</>
	  );
	
	  return content;
}

export  default Page