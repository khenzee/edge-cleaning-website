<<<<<<< HEAD
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
	{
		question: 'Is it accessible?',
		answer:
			'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		question: 'How do I use it?',
		answer:
			'You can use it by importing the Accordion component and its subcomponents from the ui/accordion module.',
	},
	{
		question: 'Can I customize the styles?',
		answer:
			'Yes, you can customize the styles using Tailwind CSS classes or your own CSS.',
	},
	{
		question: 'Does it support animations?',
		answer:
			'Yes, it supports animations using the GSAP library.',
	},
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="mx-auto ">
			<div className="space-y-4">
				{faqData.map((faq, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-sm border border-gray-100"
					>
						<button
							className="flex justify-between items-center w-full px-4 py-3 text-left"
							onClick={() => toggleFAQ(index)}
						>
							<span className="font-medium text-gray-800">
								{faq.question}
							</span>
							<ChevronDown
								className={`w-5 h-5 text-secondary-foreground transition-transform ${
									openIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</button>
						{openIndex === index && (
							<div className="px-4 pb-3 text-gray-500 text-sm">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
=======
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
	{
		question: 'Is it accessible?',
		answer:
			'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		question: 'How do I use it?',
		answer:
			'You can use it by importing the Accordion component and its subcomponents from the ui/accordion module.',
	},
	{
		question: 'Can I customize the styles?',
		answer:
			'Yes, you can customize the styles using Tailwind CSS classes or your own CSS.',
	},
	{
		question: 'Does it support animations?',
		answer:
			'Yes, it supports animations using the GSAP library.',
	},
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="mx-auto ">
			<div className="space-y-4">
				{faqData.map((faq, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-sm border border-gray-100"
					>
						<button
							className="flex justify-between items-center w-full px-4 py-3 text-left"
							onClick={() => toggleFAQ(index)}
						>
							<span className="font-medium text-gray-800">
								{faq.question}
							</span>
							<ChevronDown
								className={`w-5 h-5 text-secondary-foreground transition-transform ${
									openIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</button>
						{openIndex === index && (
							<div className="px-4 pb-3 text-gray-500 text-sm">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
>>>>>>> 524797f53242b38030211426b5e4ded0e07b0566
