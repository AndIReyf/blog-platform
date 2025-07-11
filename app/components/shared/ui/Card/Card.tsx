import {Link} from 'react-router';
import {AVATARS, formatDateLocale, IMAGES, useRandomImg} from '~/lib';

interface ICardProps {
	title: string;
	to: string;
	subtitle?: string;
	imgUrl?: string;
	createdAt?: string;
	avatar?: string;
}

export const Card = (props: ICardProps) => {
	const randomAvatar = useRandomImg(AVATARS);
	const randomImg = useRandomImg(IMAGES);
	const {
		to,
		title,
		subtitle,
		createdAt,
		imgUrl = randomImg,
		avatar = randomAvatar,
	} = props;

	return (
		<div className="card bg-base-100 w-95 h-80 shadow-lg">
			<figure className="h-50">
				<Link to={to} className="w-full h-full">
					<img
						className="w-full h-full object-cover"
						src={imgUrl}
						alt="Card img here"
					/>
				</Link>
			</figure>
			<div className="card-body flex-row">
				<div className="avatar block">
					<div className="w-12 rounded-full">
						<img src={avatar} alt="Avatar" />
					</div>
				</div>
				<div>
					<h3 className="card-title inline-block w-[300px] truncate">
						{title}
					</h3>
					{subtitle && (
						<h4 className="inline-block w-[300px] truncate">{subtitle}</h4>
					)}
					{createdAt && <span>{formatDateLocale(createdAt)}</span>}
				</div>
			</div>
		</div>
	);
};
