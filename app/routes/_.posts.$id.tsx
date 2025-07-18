import {Image} from 'lucide-react';
import {href, Link, redirect, useNavigate} from 'react-router';
import {PostCard} from '~/components/entities';
import {Breadcrumbs, Divider, GoBack} from '~/components/shared';
import {postCache} from "~/config/routes/posts";
import {_axios, genericClientAction} from '~/lib';
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

export async function action({ request, params }: Route.ActionArgs) {
	if (request.method === 'DELETE') {
		await _axios.delete(href('/posts/:id', { id: params.id }));

		postCache.clear();
	}

	if (request.method === 'PUT') {
		const formData = await request.formData();
		const title = formData.get('title');
		const shortDescription = formData.get('shortDescription');
		const content = formData.get('content');
		const blogId = formData.get('blogId');
		const blogName = formData.get('blogName');

		await _axios.put<IPostSchema>(href('/posts/:id', { id: params.id }), {
			title,
			shortDescription,
			content,
			blogId,
			blogName,
		});

		postCache.clear();
	}

	return redirect(href('/posts'));
}

export async function clientAction({
	request,
	serverAction,
}: Route.ClientActionArgs) {
	await genericClientAction<IPostSchema[]>({ request, cache: postCache });

	const serverData = await serverAction();
	return serverData;
}

export default function Post({ loaderData }: Route.ComponentProps) {
	const { title, content, createdAt, blogId, blogName } = loaderData;

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
