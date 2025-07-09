import {Card} from '~/components/shared';
import {clientAction, clientLoader, loader} from '~/config/routes/posts';
import type {Route} from './+types/_.posts';

export { loader, clientLoader, clientAction };

export function meta() {
	return [
		{ title: 'Posts' },
		{ name: 'description', content: 'Welcome to Posts page!' },
	];
}

export default function Posts({ loaderData }: Route.ComponentProps) {
	return (
		<section>
			<h3 className="font-black text-2xl">Posts</h3>
			<div className="divider mt-1.5 mb-5 p-0 h-0" />
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6 mb-[150px]">
				{loaderData.map(({ id, title, shortDescription, createdAt }) => (
					<Card
						key={id}
						title={title}
						subtitle={shortDescription}
						createdAt={createdAt}
					/>
				))}
			</div>
		</section>
	);
}
