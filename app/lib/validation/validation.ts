import {z} from 'zod';
import {URL_PATTERN} from '~/lib';

export const blogSchema = z.object({
	name: z.string().max(15, 'Title is too long').nonempty('Title is required'),
	websiteUrl: z
		.string()
		.max(100, 'Website URL is too long')
		.nonempty('Website URL is required')
		.regex(new RegExp(URL_PATTERN), 'Invalid URL format'),
	description: z
		.string()
		.max(500, 'Description is too long')
		.nonempty('Description is required'),
});

export const postSchema = z.object({
	title: z.string().max(30, 'Title is too long').nonempty('Title is required'),
	shortDescription: z
		.string()
		.max(100, 'Description is too long')
		.nonempty('Description is required'),
	content: z
		.string()
		.max(1000, 'Content is too long')
		.nonempty('Content is required'),
	blogId: z
		.string()
		.max(100, 'Blog ID is too long')
		.nonempty('Blog ID is required'),
	blogName: z
		.string()
		.max(30, 'Blog name is too long')
		.nonempty('Blog name is required'),
});
