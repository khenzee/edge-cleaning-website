'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const navbarRef = useRef(null);
	const scrollTriggerRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		let lastScroll = 0;
		const threshold = 10;

		scrollTriggerRef.current = ScrollTrigger.create({
			start: 0,
			end: 'max',
			onUpdate: (self) => {
				// Skip hide/show if paused
				if (scrollTriggerRef.current?.disabled) return;

				const scrollY = self.scroll();
				if (Math.abs(scrollY - lastScroll) > threshold) {
					if (scrollY > lastScroll) {
						gsap.to(navbarRef.current, {
							y: '-100%',
							duration: 0.4,
							ease: 'power2.out',
						});
					} else {
						gsap.to(navbarRef.current, {
							y: '0%',
							duration: 0.4,
							ease: 'power2.out',
						});
					}
					lastScroll = scrollY;
				}
			},
		});
	}, []);

	// Pause/resume ScrollTrigger based on menu state
	useEffect(() => {
		if (scrollTriggerRef.current) {
			if (menuOpen) {
				scrollTriggerRef.current.disable(); // pause hiding on scroll
				gsap.to(navbarRef.current, {
					y: '0%',
					duration: 0.3,
				}); // make sure navbar is visible
				document.body.style.overflow = 'hidden'; // lock background scroll
			} else {
				scrollTriggerRef.current.enable(); // resume hiding on scroll
				document.body.style.overflow = ''; // unlock background scroll
			}
		}
	}, [menuOpen]);

	return (
		<nav
			ref={navbarRef}
			className="navbar fixed top-0 left-0 w-full bg-background shadow-md z-50"
		>
			<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
				{/* Logo */}
				<div>
					<Image
						src={`/images/edge-logo.webp`}
						width={100}
						height={100}
						alt="logo"
					/>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-6 font-semibold">
					<li className="hover:text-primary">
						<Link href="#">Home</Link>
					</li>
					<li className="hover:text-primary">
						<Link href="#">About</Link>
					</li>
					<li className="hover:text-primary">
						<Link href="#">Services</Link>
					</li>
					<li className="hover:text-primary">
						<Link href="#">Blog</Link>
					</li>
					<li className="hover:text-primary">
						<Link href="#">Job</Link>
					</li>
				</ul>

				{/* Contact Button (Desktop) */}
				<div className="hidden md:block">
					<button className="bg-primary font-semibold text-secondary-foreground px-6 py-2 rounded-full hover:bg-muted hover:text-primary transition">
						<Link href="#">Contact us</Link>
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 text-primary"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-background border-t border-gray-200 shadow-md">
					<ul className="flex flex-col gap-4 items-center p-4 font-semibold">
						<li className="hover:text-primary">
							<Link href="#">Home</Link>
						</li>
						<li className="hover:text-primary">
							<Link href="#">About</Link>
						</li>
						<li className="hover:text-primary">
							<Link href="#">Services</Link>
						</li>
						<li className="hover:text-primary">
							<Link href="#">Blog</Link>
						</li>
						<li className="hover:text-primary">
							<Link href="#">Job</Link>
						</li>
						<li>
							<button className="w-full font-semibold bg-primary text-secondary-foreground px-6 py-2 rounded-full hover:bg-muted hover:text-primary transition">
								<Link href="#">Contact us</Link>
							</button>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
