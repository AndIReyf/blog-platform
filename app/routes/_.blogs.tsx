import {Card} from '~/components/shared';

export function meta() {
	return [
		{ title: 'Blogs' },
		{ name: 'description', content: 'Welcome to Blogs page!' },
	];
}

export default function Blogs() {
	return (
		<section>
			<h1>Blogs</h1>
			<div className="divider mt-1.5 mb-5 p-0 h-0" />
			<Card title="React Route V7 Blog" />
		</section>
	);
}
