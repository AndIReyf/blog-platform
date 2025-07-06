import {route, type RouteConfig} from '@react-router/dev/routes';

const Routes: Record<string, string> = {
	default: '/',
	blogs: '/blogs',
	posts: '/posts',
} as const;

export default [
	route(Routes.default, 'routes/_.tsx', [
		route(Routes.default, 'routes/_.home.tsx'),
		route(Routes.blogs, 'routes/_.blogs.tsx'),
		route(Routes.posts, 'routes/_.posts.tsx'),
	]),
] satisfies RouteConfig;
