import {href, redirect, useNavigate} from 'react-router';
import {BlogCard} from '~/components/entities';
import {Breadcrumbs, Divider, GoBack} from '~/components/shared';
import {blogsCache} from "~/config/routes/blogs";
import {_axios, genericClientAction} from '~/lib';
import type {IBlogSchema} from '~/types/blogs';
import type {Route} from './+types/_.blogs.$id';

export function meta() {
	return [{ title: 'Blog' }, { name: 'description', content: 'Blog page!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
	try {
		const { data } = await _axios.get<IBlogSchema>(
			href('/blogs/:id', { id: params.id }),
		);

		return data;
	} catch (error) {
		throw new Error(`Blog with ID ${params.id} not found`);
	}
}

export async function action({ request, params }: Route.ActionArgs) {
	if (request.method === 'DELETE') {
		await _axios.delete(href('/blogs/:id', { id: params.id }));

		blogsCache.clear();
	}

	if (request.method === 'PUT') {
		const formData = await request.formData();
		const name = formData.get('name');
		const websiteUrl = formData.get('websiteUrl');
		const description = formData.get('description');

		await _axios.put<IBlogSchema>(href('/blogs/:id', { id: params.id }), {
			name,
			websiteUrl,
			description,
		});

		blogsCache.clear();
	}

	return redirect(href('/blogs'));
}

export async function clientAction({
	request,
	serverAction,
}: Route.ClientActionArgs) {
	await genericClientAction<IBlogSchema[]>({ request, cache: blogsCache });

	const serverData = await serverAction();
	return serverData;
}

export default function Blog({ loaderData }: Route.ComponentProps) {
	const { name } = loaderData;

	const navigate = useNavigate();

	const goBackToBlogs: VoidFunction = () => {
		navigate(href('/blogs'));
	};

	return (
		<section className="mb-[150px]">
			<Breadcrumbs items={['Blogs', name]} />
			<Divider />
			<GoBack label="Back to Blogs" onClick={goBackToBlogs} />
			<div className="mt-2">
				<BlogCard {...loaderData} />
			</div>
		</section>
	);
}
