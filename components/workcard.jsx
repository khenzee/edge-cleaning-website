import { ArrowRight, InfoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Workcard = ({ service }) => {
	return (
		<div
			className="bg-background p-2 hover:shadow-sm group hover:shadow-primary rounded-2xl flex flex-col h-full"
		>
			<div>
				<Image
					src={`/images/${service.image}`}
					alt={service.title}
					width={500}
					height={300}
					className="w-full h-48 rounded-lg object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
				/>
			</div>

			<div className="py-4 px-4 space-y-2 rounded-lg flex-1">
				<h3>{service.title}</h3>
				<p>{service.descripton}</p>
			</div>

			<div className="bg-primary ml-4 mb-4 text-secondary-foreground px-3 py-1 rounded-full mt-2 inline-flex justify-center items-center gap-2 text-sm font-medium group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 self-start">
				<Link href={'#'}>Get More Info </Link>
				<ArrowRight
					className="lg:-rotate-45 group-hover:rotate-0 transition-all duration-300"
					width={16}
				/>
			</div>
		</div>
	);
};
