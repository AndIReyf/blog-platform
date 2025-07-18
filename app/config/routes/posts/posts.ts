import {href, redirect} from 'react-router';
import {_axios, createCache, genericClientAction, genericClientLoader,} from '~/lib';
import type {IPostSchema} from '~/types/posts';
import type {Route} from '.react-router/types/app/routes/+types/_.posts';

export const postCache = createCache<IPostSchema[]>();
const isInitialRequest = { current: true };

export async function loader() {
	const { data } = await _axios.get<IPostSchema[]>(href('/posts'));

	return data.reverse();
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const title = formData.get('title');
	const shortDescription = formData.get('shortDescription');
	const content = formData.get('content');
	const blogId = formData.get('blogId');
	const blogName = formData.get('blogName');

	await _axios.post<IPostSchema>(href('/posts'), {
		title,
		shortDescription,
		content,
		blogId,
		blogName,
	});

	isInitialRequest.current = true;
	postCache.clear();

	return redirect(href('/posts'));
}

export async function clientLoader({
	request,
	serverLoader,
}: Route.ClientLoaderArgs) {
	const clientData = await genericClientLoader<IPostSchema[]>({
		request,
		serverLoader,
		isInitialRequest,
		cache: postCache,
	});

	return clientData;
}

clientLoader.hydrate = true;

export async function clientAction({
	request,
	serverAction,
}: Route.ClientActionArgs) {
	await genericClientAction<IPostSchema[]>({ request, cache: postCache });

	const serverData = await serverAction();
	return serverData;
}
