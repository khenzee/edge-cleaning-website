'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollRevealSetup() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Convert NodeList to array explicitly for safety
		const sections = gsap.utils.toArray('.reveal');

		if (!sections.length) return; // Exit if no reveal elements found

		sections.forEach((section) => {
			const el = section;
			const directChildren = el.children; // Only direct children

			gsap.from(el, {
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
					toggleActions: 'play none none reverse',
				},
			});

			if (directChildren.length) {
				gsap.from(directChildren, {
					opacity: 0,
					y: 20,
					duration: 0.6,
					stagger: 0.15,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: el,
						start: 'top 80%',
						toggleActions: 'play none none reverse',
					},
				});
			}
		});
	}, []);

	return null;
}
