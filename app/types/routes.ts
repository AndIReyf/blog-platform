enum Route {
	default = 'default',
	blogs = 'blogs',
	posts = 'posts',
	byId = 'byId',
}

export const ROUTES: Record<Route, string> = {
	[Route.default]: '/',
	[Route.blogs]: '/blogs',
	[Route.posts]: '/posts',
	[Route.byId]: ':id',
} as const;
