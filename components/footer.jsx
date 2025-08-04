import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<div>
			<section className="bg-muted py-16 px-6 flex justify-center">
				<div className="max-w-3xl w-full text-center bg-background shadow-sm border border-muted rounded-2xl p-8">
					{/* Heading */}
					<h2 className="text-3xl font-bold text-gray-800">
						Contact <span className="text-primary">Us</span>
					</h2>
					<p className="mt-3 text-gray-500 max-w-md mx-auto">
						Have questions or ready to book your deep
						cleaning service? Our friendly team is here to
						help during our business hours.
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
								(425) 873-8592
							</Link>
						</p>
						<p className="text-sm">
							📧{' '}
							<Link
								href="mailto:info@edgecleaningwa.com"
								className="text-primary hover:underline"
							>
								info@edgecleaningwa.com
							</Link>
						</p>
					</div>

					{/* CTA */}
					<button className="mt-6 font-semibold bg-primary text-secondary-foreground px-6 py-2 rounded-full hover:bg-muted hover:text-primary transition">
						Book Now
					</button>
				</div>
			</section>
			<section className="bg-foreground text-secondary">
				<footer className=" ">
					
					
						<Image
							src="/images/BestOf-Renton.svg"
							width={500}
							height={500}
							alt="best of renton"
							className='w-32 mx-auto mb-8'
						/>
					
						
					<div className="container mx-auto text-center">
						<p className="text-sm">
							© {new Date().getFullYear()} Edge Cleaning
							Services. All rights reserved.
						</p>
						<p className="text-xs mt-2 ">
							Follow us on
							<Link
								href="https://www.facebook.com"
								className="text-secondary mx-1 underline"
							>
								Facebook
							</Link>
							and
							<Link
								href="https://www.instagram.com"
								className="text-secondary ml-1 underline"
							>
								Instagram
							</Link>
						</p>
					</div>
				</footer>
			</section>
		</div>
	);
};

export default Footer;
