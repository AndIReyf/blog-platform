import {useState} from "react";
import {CardList} from "~/components/shared";
import type {IBlogSchema} from "~/types/blogs";

export const BlogCard = (props: IBlogSchema) => {
	const { id, createdAt, description, websiteUrl, name, isMembership } = props;

	const [isTextExpanded, setIsTextExpanded] = useState(false);

	const toggleExpanded: VoidFunction = () => setIsTextExpanded((prev) => !prev);

	return (
		<div className="card bg-base-100 shadow-sm">
			<figure className="h-[100px]">
				<img
					className="w-full h-full object-cover"
					src="https://images.ctfassets.net/nnkxuzam4k38/t1Ol71kopybNTIYhiTI5u/60995b05cbbe2ccaf1d1c5525bc86314/black-triangle.jpg"
					alt="Blog"
				/>
			</figure>
			<div>
				<CardList
					title={name}
					description={description}
					createdAt={createdAt}
					webURL={websiteUrl}
					isTextExpanded={isTextExpanded}
					onClick={toggleExpanded}
					btnLabel={`Show ${isTextExpanded ? 'Less' : 'More'}`}
				/>
			</div>
		</div>
	);
};
