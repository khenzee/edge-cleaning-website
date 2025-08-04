'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
	{
		Name: 'Jane Doe',
		role: 'CEO, Company X',
		quote:
			'This service exceeded our expectations. The team was professional, efficient, and highly skilled.',
	},
	{
		Name: 'John Smith',
		role: 'CTO, Company Y',
		quote:
			'The results were outstanding. Their expertise really helped our business grow significantly.',
	},
	{
		Name: 'Sarah Johnson',
		role: 'Head of Marketing, Company Z',
		quote:
			'Working with them was seamless. We saw measurable results within weeks.',
	},
	{
		Name: 'Sarah Johnson',
		role: 'Head of Marketing, Company Z',
		quote:
			'Working with them was seamless. We saw measurable results within weeks.',
	},
	{
		Name: 'Sarah Johnson',
		role: 'Head of Marketing, Company Z',
		quote:
			'Working with them was seamless. We saw measurable results within weeks.',
	},
	{
		Name: 'Sarah Johnson',
		role: 'Head of Marketing, Company Z',
		quote:
			'Working with them was seamless. We saw measurable results within weeks.',
	},
];

export default function TestimonialCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true },
		[Autoplay({ delay: 4000, stopOnInteraction: false })]
	);

	const scrollPrev = useCallback(
		() => emblaApi?.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi?.scrollNext(),
		[emblaApi]
	);

	return (
		<div className="mx-auto">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{testimonials.map((t, index) => (
						<div
							key={index}
							className="flex-[0_0_90%] text-secondary-foreground px-2 md:flex-[0_0_33.33%] flex flex-col items-center justify-center"
						>
							<div className="p-2 h-full bg-muted rounded-xl shadow-sm flex flex-col">
								<div className="bg-background rounded-lg h-full shadow-sm flex flex-col justify-between">
									<div className="p-6">
										<p className="text-lg italic md:text-left">
											"{t.quote}"
										</p>
									</div>
									<div className="p-4 rounded-b-lg w-full px-6 flex items-center justify-between self-start mt-auto">
										<p className="font-semibold text-sm">
											{t.Name}
										</p>
										<div className="overflow-hidden rounded-full w-10 h-10">
											<Image
												src="/images/pics1.webp"
												width={50}
												height={50}
												alt="picture"
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Controls */}
			<div className="flex justify-center text-secondary gap-4 mt-6">
				<button
					onClick={scrollPrev}
					className="p-2 rounded-sm"
				>
					<ArrowLeft />
				</button>
				<button
					onClick={scrollNext}
					className="p-2 rounded-sm "
				>
					<ArrowRight />
				</button>
			</div>
		</div>
	);
}
