import {href, useNavigate} from "react-router";
import {CardList, Divider} from '~/components/shared';
import {clientAction, clientLoader, loader} from '~/config/routes/blogs';
import type {Route} from './+types/_.blogs';

export { loader, clientLoader, clientAction };

export function meta() {
	return [
		{ title: 'Blogs' },
		{ name: 'description', content: 'Welcome to Blogs page!' },
	];
}

export default function Blogs({ loaderData }: Route.ComponentProps) {
	const navigate = useNavigate();

	const onClickRedirectToBlog = (id: string): void => {
		navigate(href('/blogs/:id', { id }));
	};

	return (
		<section>
			<h1 className="font-black text-2xl">Blogs</h1>
			<Divider />
			<div className="flex flex-col gap-4 mb-[150px]">
				{loaderData.map(({ id, name, description, websiteUrl }) => (
					<CardList
						key={id}
						title={name}
						description={description}
						webURL={websiteUrl}
						onClick={() => onClickRedirectToBlog(id)}
						withShadow
					/>
				))}
			</div>
		</section>
	);
}
