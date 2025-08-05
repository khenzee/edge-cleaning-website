import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<div>
			
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
