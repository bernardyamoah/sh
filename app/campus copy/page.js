import Link from "next/link";

export default function programmes() {
	return (
		<>
			<main class="card_container">
				<section class="heading-link">
					<h3>our courses</h3>
					<p>
						<Link href="/">home</Link> / courses
					</p>
				</section>

				<aside class="container mt-10 hidden w-full">
					<div class="items-center sm:flex-row lg:flex lg:justify-center lg:space-x-10">
						<h3 class="text-center text-xl font-normal dark:text-slate-300 lg:text-left">
							Filter by Department
						</h3>

						<div class="scroll-hidden program_filter">
							<span
								class="btn-outline btn-success btn-xs btn"
								data-filter="all"
							>
								All
							</span>

							<span
								class="btn-outline btn-success btn-xs btn"
								data-filter=".engineering"
							>
								Engineering
							</span>

							<span
								class="btn-outline btn-success btn-xs btn"
								data-filter=".environmental"
							>
								Environmental
							</span>

							<span
								class="btn-outline btn-success btn-xs btn"
								data-filter=".business"
							>
								Business
							</span>
						</div>
					</div>
				</aside>

				<section
					class="container relative mx-auto flex flex-col items-center pb-10"
					id="program"
				>
					<div id="myUL">
						<ul class="program_wrapper pcontain">
							<li class="program_card mix engineering">
								<a
									class="card_link group"
									href="./programs/materials/materials.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="./assets/img/p-materials.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc materials engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering">
								<a
									class="card_link group"
									href="./programs/metallurgy/metallurgy.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="./assets/img/p-metallurgy.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc metallurgical engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering">
								<a
									class="card_link group"
									href="./programs/civil engineering/civil engineering.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="./assets/img/p-civil.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc civil engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering">
								<a
									class="card_link group"
									href="./programs/mechanical/mechanical.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="./assets/img/p-mechanical.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc mechanical engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering">
								<a
									class="card_link group"
									href="./programs/geological/geological.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://img.freepik.com/premium-photo/oil-engineer-with-laptop-standing-oil-rig-making-notes-his-computer_651396-2141.jpg?size=626&ext=jpg&uid=R57815251&semt=sph"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc geological engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering hidden">
								<a class="card_link group" href="./404.html">
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											
											src="https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?b=1&s=170667a&w=0&k=20&c=3yXn9XH0757VfqOa0VM_ozhAh4GWppH1382ApkT4t7c="
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">bsc electrical engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix engineering hidden">
								<a class="card_link group" href="./404.html">
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
										
											src="https://www.sait.ca/assets/images/sait/programs/pr-geomatics-engineering-technology-600x400.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">BSc Geomatic Engineering</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix environmental">
								<a
									class="card_link group"
									href="./programs/environmental science/environmental.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://media.istockphoto.com/id/1373227608/photo/shot-young-scientist-using-a-digital-tablet-while-working-with-crops-on-a-farm.jpg?b=1&s=170667a&w=0&k=20&c=vLsunLzQ3K2JRPfT__YPnIQEh7VMD7Z3AL6AWDS32sU="
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">BSc Environmental Science</h3>
									</div>
								</a>
							</li>

							<li class="program_card mix business">
								<a
									class="card_link group"
									href="./programs/Accounting/Accounting.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506__340.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">Accounting</h3>
										<p class="mt-1 hidden text-gray-800 dark:text-gray-400"></p>
									</div>
								</a>
							</li>
							<li class="program_card mix business">
								<a
									class="card_link group"
									href="./programs/Logistics/Logistics.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://cdn.pixabay.com/photo/2018/02/02/11/01/logistics-3125131_960_720.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">Logistics</h3>
									</div>
								</a>
							</li>
							<li class="program_card mix business">
								<a
									class="card_link group"
									href="./programs/Human Resource/Human_Resource.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">Human Resource</h3>
									</div>
								</a>
							</li>
							<li class="program_card mix business">
								<a
									class="card_link group"
									href="./programs/Marketing/Marketing.html"
								>
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://cdn.pixabay.com/photo/2016/03/17/17/25/modern-technologies-1263422__340.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">Marketing</h3>
									</div>
								</a>
							</li>
							<li class="program_card mix business">
								<a class="card_link group" href="./programs/BIT/BIT.html">
									<div class="card_image_wrapper">
										<img
											class="card_image group-hover:scale-105"
											loading="lazy"
											src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg"
											alt="Image Description"
										/>
									</div>
									<div class="text_container">
										<h3 class="card_heading">
											Business In Information Technology (BIT)
										</h3>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
