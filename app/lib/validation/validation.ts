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
