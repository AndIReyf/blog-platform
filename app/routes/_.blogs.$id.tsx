import {href} from 'react-router';
import {BlogCard} from '~/components/entities';
import {Breadcrumbs, Divider, GoBack} from '~/components/shared';
import {_axios} from '~/lib';
import type {IBlogSchema} from '~/types/blogs';
import type {Route} from './+types/_.blogs.$id';

export function meta() {
	return [{ title: 'Blog' }, { name: 'description', content: 'Blog page!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
	const { data } = await _axios.get<IBlogSchema>(
		href('/blogs/:id', { id: params.id }),
	);

	return data;
}

export default function Blog({ loaderData }: Route.ComponentProps) {
	const { name } = loaderData;

	return (
		<section>
			<Breadcrumbs items={['Blogs', name]} />
			<Divider />
			<GoBack label="Back to Blogs" />
			<div className="mt-2">
				<BlogCard {...loaderData} />
			</div>
		</section>
	);
}
