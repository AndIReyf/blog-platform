import {CirclePlus} from 'lucide-react';
import {Fragment} from "react";
import {href, useFetcher} from 'react-router';
import {CreateUpdatePostModal} from '~/components/entities';
import {Banner, Card, DeleteEntitiesModal, Divider} from '~/components/shared';
import {action, clientAction, clientLoader, loader,} from '~/config/routes/posts';
import {configApp, MODAL_ID} from '~/lib';
import type {Route} from './+types/_.posts';

export { loader, clientLoader, clientAction, action };

export function meta() {
	return [
		{ title: 'Posts' },
		{ name: 'description', content: 'Welcome to Posts page!' },
	];
}

export default function Posts({ loaderData }: Route.ComponentProps) {
	const { isAuth } = configApp();
	const fetcher = useFetcher();

	const handleDelete = (id: string): void => {
		fetcher.submit(
			{ id },
			{
				method: 'delete',
				action: href('/posts/:id', { id }),
			},
		);
	};

	return (
		<section>
			<h3 className="font-black text-2xl">Posts</h3>
			<Divider />
			{isAuth && (
				<label
					htmlFor={MODAL_ID.createPost}
					className="link inline-flex gap-2 mb-4 text-primary"
				>
					<span>Create Post</span>
					<CirclePlus />
				</label>
			)}
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-6 mb-[150px]">
				{loaderData.length ? (
					loaderData.map(
						({
							id,
							title,
							shortDescription,
							createdAt,
							content,
							blogName,
							blogId,
						}) => (
							<Fragment key={id}>
								<Card
									id={id}
									to={href('/posts/:id', { id })}
									title={title}
									subtitle={shortDescription}
									createdAt={createdAt}
									withDropdown={isAuth}
								/>
								<CreateUpdatePostModal
									id={id}
									defaultValues={{
										title,
										shortDescription,
										content,
										blogName,
										blogId,
									}}
								/>
								<DeleteEntitiesModal
									id={MODAL_ID.deletePost + id}
									title="Delete Post"
									text="Are you sure you want to delete this post?"
									onClickHandler={() => handleDelete(id)}
								/>
							</Fragment>
						),
					)
				) : (
					<Banner title="There are no posts yet!" />
				)}
			</div>
			<CreateUpdatePostModal id={MODAL_ID.createPost} />
		</section>
	);
}
