import {CirclePlus} from 'lucide-react';
import {useState} from 'react';
import {href, useNavigate} from 'react-router';
import {BlogCreation} from '~/components/entities';
import {options, Search, Sorting} from '~/components/features';
import type {SortOptions} from '~/components/features/Sorting/Sorting';
import {Banner, CardList, Divider} from '~/components/shared';
import {action, clientAction, clientLoader, loader,} from '~/config/routes/blogs';
import {configApp, MODAL_ID, sortItems} from '~/lib';
import type {Route} from './+types/_.blogs';

export { loader, clientLoader, clientAction, action };

export function meta() {
	return [
		{ title: 'Blogs' },
		{ name: 'description', content: 'Welcome to Blogs page!' },
	];
}

const blogSortingOptionsConfig = [
	{
		value: '',
		label: 'Add Sorting',
		disabled: true,
	},
	{
		value: options['new-first'],
		label: 'New Blogs First',
	},
	{
		value: options['old-first'],
		label: 'Old Blogs First',
	},
	{
		value: options['a-z'],
		label: 'From A to Z',
	},
	{
		value: options['z-a'],
		label: 'From Z to A',
	},
];

export default function Blogs({ loaderData }: Route.ComponentProps) {
	const navigate = useNavigate();
	const [sortOption, setSortOption] = useState<SortOptions | undefined>(
		undefined,
	);

	const { isAuth } = configApp();

	const onClickRedirectToBlog = (id: string): void => {
		navigate(href('/blogs/:id', { id }));
	};

	const handleSortChange = (option: SortOptions) => {
		setSortOption(option);
	};

	const sortedBlogs = sortOption
		? sortItems(loaderData, sortOption)
		: loaderData;

	return (
		<section>
			<h1 className="font-black text-2xl">Blogs</h1>
			<Divider />
			<div className="grid grid-cols-[auto_250px] gap-2 mb-4">
				<Search disabled={loaderData.length <= 1} />
				<Sorting
					disabled={loaderData.length <= 1}
					onSortChange={handleSortChange}
					value={sortOption}
					sortingOptions={blogSortingOptionsConfig}
				/>
			</div>
			{isAuth && (
				<label
					htmlFor={MODAL_ID.createEntities}
					className="link inline-flex gap-2 mb-4 text-primary"
				>
					<span>Create Blog</span>
					<CirclePlus />
				</label>
			)}
			<div className="flex flex-col gap-4 mb-[150px]">
				{loaderData.length ? (
					sortedBlogs.map(({ id, name, description, websiteUrl }) => (
						<CardList
							key={id}
							title={name}
							description={description}
							webURL={websiteUrl}
							onClick={() => onClickRedirectToBlog(id)}
							withDropdown={isAuth}
							withShadow
						/>
					))
				) : (
					<Banner title="There are no blogs!" />
				)}
			</div>
			<BlogCreation id={MODAL_ID.createEntities} />
		</section>
	);
}
