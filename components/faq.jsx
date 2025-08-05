
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
	{
		question: 'What areas do you service?',
		answer:
			'We provide deep cleaning services for both residential and commercial spaces across Washington.',
	},
	{
		question: 'What is included in a deep cleaning?',
		answer:
			'Our deep cleaning includes kitchens, bathrooms, living areas, bedrooms, and hard-to-reach spots — ensuring a thorough top-to-bottom clean.',
	},
	{
		question: 'Do I need to provide cleaning supplies?',
		answer:
			'No. We bring all professional-grade cleaning supplies and equipment to ensure the highest quality results.',
	},
	{
		question: 'How long does a deep cleaning take?',
		answer:
			'The duration depends on the size and condition of the space. On average, a full home deep clean takes 4–8 hours.',
	},
	{
		question:
			'Are your products safe for pets and children?',
		answer:
			'Yes, we use eco-friendly, non-toxic products that are safe for both pets and children.',
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