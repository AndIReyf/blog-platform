import {CardList} from '~/components/shared';
import {clientAction, clientLoader, loader} from '~/config/routes/blogs';
import type {Route} from './+types/_.blogs';

export { loader, clientLoader, clientAction };

export function meta() {
	return [
		{ title: 'Blogs' },
		{ name: 'description', content: 'Welcome to Blogs page!' },
	];
}

export default function Blogs({ loaderData }: Route.ComponentProps) {
	return (
		<section>
			<h1 className="font-black text-2xl">Blogs</h1>
			<div className="divider mt-1.5 mb-5 p-0 h-0" />
			<div className="flex flex-col gap-4 mb-[150px]">
				{loaderData.map(({ id, name, description, websiteUrl }) => (
					<CardList
						key={id}
						title={name}
						description={description}
						webURL={websiteUrl}
					/>
				))}
			</div>
		</section>
	);
}
