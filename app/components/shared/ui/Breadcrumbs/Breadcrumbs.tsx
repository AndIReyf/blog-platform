import {ArrowRight} from "lucide-react";
import {Fragment} from "react";

interface IBreadcrumbsProps {
	items: string[];
}

export const Breadcrumbs = ({ items }: IBreadcrumbsProps) => {
	return (
		<div className="flex gap-2 items-center">
			{items.map((item, index) => {
				if (index === 0) {
					return (
						<h3 key={item} className="font-black text-2xl">
							{item}
						</h3>
					);
				}
				return (
					<Fragment key={item}>
						<ArrowRight size={16} />
						<span>{item}</span>
					</Fragment>
				);
			})}
		</div>
	);
};
