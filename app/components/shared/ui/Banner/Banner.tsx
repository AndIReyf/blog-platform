interface IBannerProps {
	title: string;
	content?: string;
}

export const Banner = ({ content, title }: IBannerProps) => {
	return (
		<div className="card bg-base-100 card-md shadow-sm">
			<div className="card-body items-center">
				<h2 className="card-title">{title}</h2>
				{content && <p>{content}</p>}
			</div>
		</div>
	);
};
