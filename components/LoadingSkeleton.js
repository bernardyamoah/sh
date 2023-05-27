'use client'
export default function LoadingSkeleton() {
	return (
		<>
			<div class="flex animate-pulse">
				<div class="flex-shrink-0">
					<span class="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
				</div>

				<div class="ml-4 mt-2 w-full">
					<h3
						class="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
						style="width: 40%;"
					></h3>

					<ul class="mt-5 space-y-3">
						<li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
						<li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
						<li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
						<li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
					</ul>
				</div>
			</div>
		</>
	);
}
