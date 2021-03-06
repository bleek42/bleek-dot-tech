import Image from 'next/image';
import { ReactSVGElement } from 'react';

type SectionProps = {
	title: string;
	icon?: ReactSVGElement;
	description?: string;
	url?: string;
};

const Section = ({ title, icon, description, url }: SectionProps): JSX.Element => {
	return (
		<div className="section">
			<section>
				<h4>
					icon: {icon} title: {title}
				</h4>
				<p>description: {description}</p>
				<a href={url}>Link</a>
			</section>
		</div>
	);
};

export default Section;
