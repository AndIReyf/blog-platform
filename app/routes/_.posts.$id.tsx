import {Image} from 'lucide-react';
import {href, Link, useNavigate} from 'react-router';
import {PostCard} from '~/components/entities';
import {Breadcrumbs, Divider, GoBack} from '~/components/shared';
import {_axios} from '~/lib';
import type {IPostSchema} from '~/types/posts';
import type {Route} from './+types/_.posts.$id';

export function meta() {
	return [{ title: 'Post' }, { name: 'description', content: 'Post page!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
	try {
		const { data } = await _axios.get<IPostSchema>(
			href('/posts/:id', { id: params.id }),
		);

		return data;
	} catch (error) {
		throw new Error(`Post with ID ${params.id} not found`);
	}
}

export default function Post({ loaderData }: Route.ComponentProps) {
	const { title, content, id, createdAt, shortDescription, blogId, blogName } =
		loaderData;

	const navigate = useNavigate();

	const goBackToPosts: VoidFunction = () => {
		navigate(href('/posts'));
	};

	return (
		<section className="mb-[150px]">
			<Breadcrumbs items={['Posts', blogName]} />
			<Divider />
			<GoBack label="Back to Posts" onClick={goBackToPosts} />
			<div className="flex items-center mt-4 mb-4">
				<div className="avatar avatar-placeholder mr-2">
					<div className="bg-neutral text-neutral-content w-10 rounded-full">
						<Image />
					</div>
				</div>
				<Link
					className="text-secondary"
					to={href('/blogs/:id', { id: blogId })}
				>
					{blogName}
				</Link>
			</div>
			<PostCard title={title} content={content} createdAt={createdAt} />
		</section>
	);
}
