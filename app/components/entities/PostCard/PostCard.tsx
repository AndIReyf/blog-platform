import {formatDateLocale} from '~/lib';

interface IPostCardProps {
	title: string;
	content: string;
	createdAt?: string;
}

export const PostCard = ({ title, content, createdAt }: IPostCardProps) => {
	return (
		<div className="card bg-base-100 shadow-lg">
			<div className="card-body">
				<div className="flex justify-between">
					<h2 className="text-3xl font-bold">{title}</h2>
					{createdAt && (
						<span className="badge badge-xs badge-warning">
							{formatDateLocale(createdAt)}
						</span>
					)}
				</div>
				<div className="h-[400px] mt-4 mb-4">
					<img
						className="h-[100%] w-[100%] object-cover"
						src="https://images.ctfassets.net/nnkxuzam4k38/t1Ol71kopybNTIYhiTI5u/60995b05cbbe2ccaf1d1c5525bc86314/black-triangle.jpg"
						alt="Post"
					/>
				</div>
				<p>{content}</p>
			</div>
		</div>
	);
};
