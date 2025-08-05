
import { Workcard } from './workcard';

const servicesData = [
	{
		title: 'resitential cleaning',
		image: 'pics2.webp',
		descripton:
			'Professional cleaning services for offices, homes, and commercial spaces - done right, every time.',
	},
	{
		title: 'commercial cleaning',
		image: 'pics3.webp',
		descripton:
			'Expert cleaning solutions for businesses, ensuring a spotless and healthy work environment.',
	},
	{
		title: 'deep cleaning',
		image: 'pics4.webp',
		descripton:
			'Thorough and detailed cleaning services for a pristine and hygienic space.',
	},
];
const Services = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{servicesData.map((service, index) => (
				<div className="reveal" key={index}>
					<Workcard service={service} />
				</div>
			))}
		</div>
	);
};

export default Services;
