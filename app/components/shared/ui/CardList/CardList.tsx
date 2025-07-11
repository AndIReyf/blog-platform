import {Link} from 'react-router';
import {AVATARS, formatDateLocale, useRandomImg} from '~/lib';

interface ICardListProps {
	title: string;
	description: string;
	btnLabel?: string;
	webURL?: string;
	avatarUrl?: string;
	withShadow?: boolean;
	isTextExpanded?: boolean;
	createdAt?: string;
	createdAtLabel?: string;
	onClick?: VoidFunction;
}

export const CardList = (props: ICardListProps) => {
	const randomAvatar = useRandomImg(AVATARS);
	const {
		onClick,
		title,
		description,
		avatarUrl = randomAvatar,
		webURL,
		btnLabel = 'Read',
		withShadow,
		createdAt,
		createdAtLabel = 'Created',
		isTextExpanded,
	} = props;

	return (
		<div className={`card bg-base-100 ${withShadow ? 'shadow-sm' : ''}`}>
			<div className="card-body flex-row gap-6">
				<div className="avatar block">
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
					{createdAt && (
						<div className="flex gap-2">
							<span>{createdAtLabel}:</span>
							<span>{formatDateLocale(createdAt)}</span>
						</div>
					)}
					{webURL && (
						<div>
							<span>Website:</span>
							<Link
								target="_blank"
								to={webURL}
								className="w-[100px] truncate ml-2 text-secondary"
							>
								{webURL}
							</Link>
						</div>
					)}
					<p
						className={`${isTextExpanded ? '' : 'line-clamp-2'} mt-4 mb-auto flex-grow-0`}
					>
						{description}
					</p>
					{onClick && (
						<div className="card-actions justify-end mt-2">
							<button
								onClick={onClick}
								type="button"
								className="btn btn-primary"
							>
								{btnLabel}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
