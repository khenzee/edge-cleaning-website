import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Services from '../services';
import TestimonialCarousel from '../testimonialcaousel';
import Faq from '../faq';
import Footer from '../footer';
import Howitworks from '../howitworks';
import Link from 'next/link';

const Landingpage = () => {
	return (
		<div>
			{/* hero section */}
			<section className="relative w-full text-secondary h-fit ">
				<div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden ">
					<Image
						src="/images/pics1.webp"
						width={1080}
						height={500}
						alt="pics1"
						className="h-full w-full object-cover brightness-30"
					/>
				</div>
				<div className="h-full space-y-10 md:space-y-16 text-center pt-24 md:pt-32 pb-8 md:pb-4 ">
					<div className="md:w-2xl lg:w-4xl mx-auto">
						<div>
							<p className="text-sm font-semibold ">
								Trusted by 200+ customers
							</p>
						</div>
						<h1 className="">
							Experience Prestine Detailing Like Never
							Before.
						</h1>
						<button className="hidden mt-8 md:inline-flex gap-4 hover:gap-6 transition-all duration-100 capitalize justify-center rounded-full items-center bg-secondary text-secondary-foreground pl-8 py-2 font-bold shadow-lg shadow-primary/30">
							get a free quote
							<span className="bg-secondary-foreground text-secondary p-2 rounded-full mr-2">
								<ArrowRight />
							</span>
						</button>
					</div>

					<div className="md:flex w-full md:mt-24 justify-between items-end">
						<div className="space-y-4 md:w-65 mx-auto md:mx-0 md:text-left">
							<p className="lg:text-xl">
								Professional cleaning services for offices,
								homes, and commercial spaces - done right,
								every time.
							</p>
							<button className="md:hidden inline-flex gap-4 capitalize justify-center rounded-full items-center bg-secondary text-secondary-foreground pl-8 py-2 font-bold shadow-lg shadow-primary/30">
								get a free quote
								<span className="bg-secondary-foreground text-secondary p-2 rounded-full mr-2">
									<ArrowRight />
								</span>
							</button>
						</div>
						<div className="w-full mt-24 md:mt-0 md:w-60 mx-auto md:mx-0">
							<iframe
								className="w-full aspect-video h-full border-primary border-2 shadow-lg shadow-primary/20 rounded-lg"
								src="https://www.youtube.com/embed/E4j2K_-50XU"
								title="All About EDGE Cleaning Service"
								allow="accelerometer; autoplay; encrypted-media; gyroscope;  "
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* our services */}
			<section className="space-y-8 lg:space-y-16 bg-muted">
				<div className=" inline-block border-b-4 pb-2 border-primary ">
					<h4>our service</h4>
				</div>
				<div className="space-y-4 md:space-y-8 lg:w-2xl">
					<h2>
						Discover our services and how we do it better.
					</h2>
					<p>
						We help people live and work in cleaner,
						healthier spaces with dependable, professional
						cleaning always tailored to what you need.
					</p>
				</div>
				<Services />
			</section>
			{/* how it works */}
			<section className="bg-muted">
				<Howitworks />
			</section>
			{/* testimonial */}
			<section className="bg-foreground text-secondary space-y-8 lg:space-y-16 text-center ">
				<div className=" inline-block border-b-4 pb-2 border-primary ">
					<h4>testimonial</h4>
				</div>
				<div className="w-70 md:w-lg mx-auto">
					<h2>see what our customers say.</h2>
				</div>
				<div className="mx-auto md:mt-16">
					<TestimonialCarousel />
				</div>
			</section>
			{/* faq section */}
			<section className="relative bg-muted w-full grid lg:grid-cols-2  gap-10">
				<div className="text-center lg:text-left">
					<h2 className=" ">
						Frequently asked
						<span className="text-primary">questions</span>
					</h2>
					<p className="mt-4 text-gray-500">
						Whether it’s your home, office, or commercial
						space, our deep cleaning service is designed to
						eliminate dirt, grime, and hidden germs for a
						fresher, healthier environment. Our experienced
						team uses eco-friendly products and advanced
						cleaning techniques to ensure every corner
						sparkles.
					</p>
					<div>
						<button className="mt-6 font-semibold bg-primary text-secondary-foreground px-6 py-2 rounded-full hover:bg-muted hover:text-primary transition">
							<Link href="#">Book Cleaning</Link>
						</button>
					</div>
				</div>
				<div className="text-secondary-foreground mx-auto w-full p-4  rounded-2xl ">
					<Faq />
				</div>
			</section>
			
		</div>
	);
};

export default Landingpage;
