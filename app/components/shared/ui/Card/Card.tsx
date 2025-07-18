import {SquarePen, Trash2} from 'lucide-react';
import {Link} from 'react-router';
import {Dropdown, type IDropdownItems} from '~/components/shared';
import {AVATARS, formatDateLocale, IMAGES, MODAL_ID, useRandomImg,} from '~/lib';

interface ICardProps {
	id: string;
	title: string;
	to: string;
	subtitle?: string;
	imgUrl?: string;
	createdAt?: string;
	avatar?: string;
	withDropdown?: boolean;
}

export const Card = (props: ICardProps) => {
	const randomAvatar = useRandomImg(AVATARS);
	const randomImg = useRandomImg(IMAGES);
	const {
		id,
		to,
		title,
		subtitle,
		createdAt,
		withDropdown,
		imgUrl = randomImg,
		avatar = randomAvatar,
	} = props;

	const dropdownItems: IDropdownItems[] = [
		{
			icon: <SquarePen size={14} />,
			label: 'Modify',
			htmlFor: id,
		},
		{
			icon: <Trash2 size={14} />,
			label: 'Delete',
			htmlFor: MODAL_ID.deletePost + id,
		},
	];

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
			<div className="card-body flex-row relative">
				{withDropdown && (
					<div className="absolute top-[20px] right-[15px]">
						<Dropdown dropdownItems={dropdownItems} />
					</div>
				)}
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
