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

				
				<section
					class="container relative mx-auto flex flex-col items-center pb-10"
					id=""
				>
					<div id="myUL">
						<ul class="program_wrapper pcontain">
							<li class="program_card mix engineering">
							<Link href={`campus/${user.id}`} className='card_link group'>
							
							
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
							</Link>
							
							</li>

							
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
