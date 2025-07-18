import {EllipsisVertical} from 'lucide-react';

export interface IDropdownItems {
	icon?: React.ReactNode;
	label: string;
	htmlFor?: string;
}

interface IDropdownProps {
	dropdownItems: IDropdownItems[];
}

export const Dropdown = ({ dropdownItems }: IDropdownProps) => {
	return (
		<details className="dropdown dropdown-end">
			<summary className="btn btn-xs btn-circle btn-ghost">
				<EllipsisVertical />
			</summary>
			<ul className="menu dropdown-content bg-base-300 rounded-box z-1 p-3 shadow-sm gap-2">
				{dropdownItems.map(({ label, icon, htmlFor }: IDropdownItems) => (
					<li key={label + htmlFor}>
						<label htmlFor={htmlFor} className="btn btn-sm">
							{icon}
							{label}
						</label>
					</li>
				))}
			</ul>
		</details>
	);
};
