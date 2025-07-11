import {href} from 'react-router';
import {Banner, Card, Divider} from '~/components/shared';
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
			<Divider />
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-6 mb-[150px]">
				{loaderData.length ? (
					loaderData.map(({ id, title, shortDescription, createdAt }) => (
						<Card
							key={id}
							to={href('/posts/:id', { id })}
							title={title}
							subtitle={shortDescription}
							createdAt={createdAt}
						/>
					))
				) : (
					<Banner title="There are no posts yet!" />
				)}
			</div>
		</section>
	);
}
