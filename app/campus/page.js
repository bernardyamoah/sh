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
								
								<Link className='card_link group' href={`campus/${campus.id}`}>
								
								<div class="card_image_wrapper">
								<Image className='card_image group-hover:scale-105' />
						
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
