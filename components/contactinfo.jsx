import Link from "next/link";

const Contactinfo = () => {
	return (
		<section className=" bg-muted  px-6 flex justify-center">
			<div className="reveal py-16 max-w-3xl w-full text-center bg-background shadow-sm border border-muted rounded-2xl p-8">
				{/* Heading */}
				<h2 className="text-3xl font-bold text-gray-800">
					Contact <span className="text-primary">Us</span>
				</h2>
				<p className="mt-3 text-gray-500 max-w-md mx-auto">
					Have questions or ready to book your deep cleaning
					service? Our friendly team is here to help during
					our business hours.
				</p>

				{/* Business Hours */}
				<div className="mt-6 text-gray-700">
					<p className="font-medium">Business Hours</p>
					<p className="text-sm text-gray-500">
						Monday – Friday, 8 AM – 5 PM
					</p>
				</div>

				{/* Contact Details */}
				<div className="mt-4 space-y-2">
					<p className="text-sm">
						📞{' '}
						<Link
							href="tel:4258738592"
							className="text-primary hover:underline"
						>
							(425) 000-1232
						</Link>
					</p>
					<p className="text-sm">
						📧{' '}
						<Link
							href="mailto:info@edgecleaningwa.com"
							className="text-primary hover:underline"
						>
							info@edgecleaningservice.com
						</Link>
					</p>
				</div>

				{/* CTA */}
				<button className="mt-6 font-semibold bg-primary text-secondary-foreground px-6 py-2 rounded-full hover:bg-muted hover:text-primary transition">
					Book Now
				</button>
			</div>
		</section>
	);
};

export default Contactinfo;
