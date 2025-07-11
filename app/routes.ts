import {index, prefix, route, type RouteConfig,} from '@react-router/dev/routes';
import {ROUTES} from './types/routes';

export default [
	route(ROUTES.default, 'routes/_.tsx', [
		route(ROUTES.default, 'routes/_.home.tsx'),
		...prefix(ROUTES.blogs, [
			index('routes/_.blogs.tsx'),
			route(ROUTES.byId, 'routes/_.blogs.$id.tsx'),
		]),
		...prefix(ROUTES.posts, [
			index('routes/_.posts.tsx'),
			route(ROUTES.byId, 'routes/_.posts.$id.tsx'),
		]),
	]),
] satisfies RouteConfig;
