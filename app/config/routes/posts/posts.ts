import {_axios, createCache, genericClientAction, genericClientLoader,} from '~/lib';
import type {IPostSchema} from '~/types/posts';
import {ROUTES} from '~/types/routes';
import type {Route} from '.react-router/types/app/routes/+types/_.posts';

const cache = createCache<IPostSchema[]>();
const isInitialRequest = { current: true };

export async function loader() {
	const { data } = await _axios.get<IPostSchema[]>(ROUTES.posts);

	return data.reverse();
}

// export async function action({ request }: Route.ActionArgs) {
// await saveDataToDb({ request });
// return { ok: true };
// }

export async function clientLoader({
	request,
	serverLoader,
}: Route.ClientLoaderArgs) {
	const clientData = await genericClientLoader<IPostSchema[]>({
		request,
		serverLoader,
		isInitialRequest,
		cache,
	});

	return clientData;
}

clientLoader.hydrate = true;

export async function clientAction({
	request,
	serverAction,
}: Route.ClientActionArgs) {
	await genericClientAction<IPostSchema[]>({ request, cache });

	const serverData = await serverAction();
	return serverData;
}
