
import Image from 'next/image';

const steps = [
	{
		number: '01',
		title: 'Share details',
		description:
			'Fill out a quick form with details about your space, schedule, and preferences.',
		image: 'pics1.webp',
	},
	{
		number: '02',
		title: 'Get quote',
		description:
			'We’ll send you a personalized estimate, no hidden fees, no upselling.',
		image: 'pics1.webp',
	},
	{
		number: '03',
		title: 'We clean',
		description:
			'Our professional team arrives on time, fully equipped to transform your space.',
		image: 'pics1.webp',
	},
	{
		number: '04',
		title: 'You relax',
		description:
			'Enjoy a spotless home or workspace that looks, feels, and smells truly clean.',
		image: 'pics1.webp',
	},
];

const Howitworks = () => {
	return (
		<div>
			<div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="space-y-8 md:col-span-2">
					<div className=" inline-block border-b-4 pb-2 border-primary  ">
						<h4>how it works</h4>
					</div>
					<div className="space-y-2 max-w-xl pb-8">
						<h2>Get cleaner space in four steps</h2>
						<p className="text-muted-foreground mt-2">
							And sometimes, in as little as 24 hours.
						</p>
					</div>
				</div>

				{steps.map((step, index) => (
					<div
						key={index}
						className="bg-background p-2 rounded-2xl flex flex-col "
					>
						<div className="py-4 px-4 space-y-2 rounded-lg">
							<p className="text-4xl mb-6 text-muted-foreground font-light">
								{step.number}
							</p>
							<h3>{step.title}</h3>
							<p>{step.description}</p>
						</div>
						<div>
							<Image
								src={`/images/${step.image}`}
								alt={step.title}
								width={500}
								height={300}
								className="w-full h-48 rounded-lg object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Howitworks;
