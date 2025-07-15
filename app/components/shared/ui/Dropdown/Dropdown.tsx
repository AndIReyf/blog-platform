import {EllipsisVertical, SquarePen, Trash2} from 'lucide-react';

interface IDropdownProps {
	id?: string;
}

export const Dropdown = (props: IDropdownProps) => {
	return (
		<details className="dropdown dropdown-end">
			<summary className="btn btn-xs btn-circle btn-ghost">
				<EllipsisVertical />
			</summary>
			<ul className="menu dropdown-content bg-base-300 rounded-box z-1 p-3 shadow-sm gap-2">
				<li>
					<button type="button" className="btn btn-sm">
						<SquarePen size={14} />
						Modify
					</button>
				</li>
				<li>
					<button type="button" className="btn btn-sm">
						<Trash2 size={14} />
						Delete
					</button>
				</li>
			</ul>
		</details>
	);
};
