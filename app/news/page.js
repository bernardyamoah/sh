import Link from "next/link";
import Loading from "../books/loading";
import { Suspense } from "react";
import GameCard from "./components/GameCard";
export default async function Page() {
	return (
		<>
			<section class="bg-white dark:bg-gray-900">
				<div class="container px-6 py-10 mx-auto">
					<div class="text-center">
						<h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
							From the blog
						</h1>

						<p class="max-w-lg mx-auto mt-4 text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
							veritatis sint autem nesciunt, laudantium quia tempore delect
						</p>
					</div>
					<Suspense fallback={<Loading />}>
						<div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4">
							<GameCard />
						</div>
					</Suspense>
				</div>
			</section>
		</>
	);
}
