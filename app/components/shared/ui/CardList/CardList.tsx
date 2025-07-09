import {AVATARS, useRandomImg} from "~/lib";

interface ICardListProps {
	title: string;
	description: string;
	btnLabel?: string;
	webURL?: string;
	avatarUrl?: string;
}

export const CardList = (props: ICardListProps) => {
	const randomAvatar = useRandomImg(AVATARS);
	const {
		title,
		description,
		avatarUrl = randomAvatar,
		webURL,
		btnLabel = 'Read Blog',
	} = props;

	return (
		<div className="card bg-base-100 shadow-sm">
			<div className="card-body flex-row gap-6">
				<div className="avatar">
					<figure className="w-35 rounded">
						<img
							className="w-full h-full object-cover"
							src={avatarUrl}
							alt="Card img here"
						/>
					</figure>
				</div>
				<div className="w-[100%] flex flex-col">
					<h2 className="w-[200px] truncate font-semibold text-2xl">{title}</h2>
					{webURL && (
						<div>
							<span>Website:</span>
							<span className="w-[100px] truncate ml-2">{webURL}</span>
						</div>
					)}
					<p className="mt-4 line-clamp-2 mb-auto flex-grow-0">{description}</p>
					<div className="card-actions justify-end">
						<button type="button" className="btn btn-primary">
							{btnLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
