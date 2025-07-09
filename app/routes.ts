import {route, type RouteConfig} from '@react-router/dev/routes';
import {ROUTES} from './types/routes';

export default [
	route(ROUTES.default, 'routes/_.tsx', [
		route(ROUTES.default, 'routes/_.home.tsx'),
		route(ROUTES.blogs, 'routes/_.blogs.tsx'),
		route(ROUTES.posts, 'routes/_.posts.tsx'),
	]),
] satisfies RouteConfig;
