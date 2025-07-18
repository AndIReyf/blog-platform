import {href, redirect} from 'react-router';
import {_axios, createCache, genericClientAction, genericClientLoader,} from '~/lib';
import type {IBlogSchema} from '~/types/blogs';
import type {Route} from '.react-router/types/app/routes/+types/_.blogs';

export const blogsCache = createCache<IBlogSchema[]>();
const isInitialRequest = { current: true };

export async function loader() {
	const { data } = await _axios.get<IBlogSchema[]>(href('/blogs'));

	return data.reverse();
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = formData.get('name');
	const websiteUrl = formData.get('websiteUrl');
	const description = formData.get('description');

	await _axios.post<IBlogSchema>(href('/blogs'), {
		name,
		websiteUrl,
		description,
	});

	isInitialRequest.current = true;
	blogsCache.clear();

	return redirect(href('/blogs'));
}

export async function clientLoader({
	request,
	serverLoader,
}: Route.ClientLoaderArgs) {
	const clientData = await genericClientLoader<IBlogSchema[]>({
		request,
		serverLoader,
		isInitialRequest,
		cache: blogsCache,
	});

	return clientData;
}

clientLoader.hydrate = true;

export async function clientAction({
	request,
	serverAction,
}: Route.ClientActionArgs) {
	await genericClientAction<IBlogSchema[]>({ request, cache: blogsCache });

	const serverData = await serverAction();
	return serverData;
}
