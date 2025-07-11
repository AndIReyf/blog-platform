import {options, type SortOptions} from '~/components/features';
import type {IBlogSchema} from '~/types/blogs';

export function sortItems(
	items: IBlogSchema[],
	sortOption: SortOptions,
): IBlogSchema[] {
	const sortedItems = [...items];

	switch (sortOption) {
		case options['a-z']:
			return sortedItems.sort((a, b) => a.name.localeCompare(b.name));

		case options['z-a']:
			return sortedItems.sort((a, b) => b.name.localeCompare(a.name));

		case options['new-first']:
			return sortedItems.sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			);

		case options['old-first']:
			return sortedItems.sort(
				(a, b) =>
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
			);

		default:
			return sortedItems;
	}
}
