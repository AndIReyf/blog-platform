import {Card} from '~/components/shared';
import type {Route} from '../../.react-router/types/app/routes/+types/_.posts';

interface IPostSchema {
	id: string;
	title: string;
	shortDescription: string;
	content: string;
	blogId: string;
	blogName: string;
	createdAt: string;
}

export function meta() {
	return [
		{ title: 'Posts' },
		{ name: 'description', content: 'Welcome to Posts page!' },
	];
}

export async function loader() {
	const posts = await fetch('https://andriiprudius.vercel.app/posts/').then(
		(response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json() as Promise<IPostSchema[]>;
		},
	);
	return { posts };
}

export default function Posts({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;

	return (
		<section>
			<h3>Posts</h3>
			<div className="divider mt-1.5 mb-5 p-0 h-0" />
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6 mb-[150px]">
				{posts.map(({ id, title, shortDescription, createdAt }) => (
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
