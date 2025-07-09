import {Card} from '~/components/shared';
import {_axios} from "~/lib";
import type {Route} from './+types/_.posts';

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
	const { data } = await _axios.get<IPostSchema[]>('/posts');

	return data;
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
