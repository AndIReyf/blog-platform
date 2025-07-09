enum Route {
	default = 'default',
	blogs = 'blogs',
	posts = 'posts',
}

export const ROUTES: Record<Route, string> = {
	[Route.default]: '/',
	[Route.blogs]: '/blogs',
	[Route.posts]: '/posts',
} as const;
