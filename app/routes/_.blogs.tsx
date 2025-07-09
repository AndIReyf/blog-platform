import {CardList} from '~/components/shared';
import {_axios} from "~/lib";
import type {Route} from './+types/_.blogs';

interface IBlogSchema {
	id: string;
	createdAt: string;
	isMembership: boolean;
	name: string;
	description: string;
	websiteUrl: string;
}

export function meta() {
	return [
		{ title: 'Blogs' },
		{ name: 'description', content: 'Welcome to Blogs page!' },
	];
}

export async function loader() {
	const { data } = await _axios.get<IBlogSchema[]>('/blogs');

	return data;
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
