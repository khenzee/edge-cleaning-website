<<<<<<< HEAD
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef, useEffect } from 'react';

export default function SmoothScrolling({ children }) {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Prevent running on server
		if (typeof window === 'undefined') return;

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		// Kill existing smoother (important during hot reload)
		if (ScrollSmoother.get()) {
			ScrollSmoother.get().kill();
		}

		// Create smoother with refs
		ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smooth: 2, // adjust smoothness
			effects: true,
		});
	}, []);

	return (
		<div
			ref={wrapperRef}
			id="smooth-wrapper"
			className="h-full overflow-hidden"
		>
			<div
				ref={contentRef}
				id="smooth-content"
				className="will-change-transform"
			>
				{children}
			</div>
		</div>
	);
}
=======
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef, useEffect } from 'react';

export default function SmoothScrolling({ children }) {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Prevent running on server
		if (typeof window === 'undefined') return;

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		// Kill existing smoother (important during hot reload)
		if (ScrollSmoother.get()) {
			ScrollSmoother.get().kill();
		}

		// Create smoother with refs
		ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smooth: 2, // adjust smoothness
			effects: true,
		});
	}, []);

	return (
		<div
			ref={wrapperRef}
			id="smooth-wrapper"
			className="h-full overflow-hidden"
		>
			<div
				ref={contentRef}
				id="smooth-content"
				className="will-change-transform"
			>
				{children}
			</div>
		</div>
	);
}
>>>>>>> 524797f53242b38030211426b5e4ded0e07b0566
