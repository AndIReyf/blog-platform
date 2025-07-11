import {Search as SearchIcon} from 'lucide-react';

interface ISearchProps {
	disabled?: boolean;
}

export const Search = ({ disabled }: ISearchProps) => {
	return (
		<label className="flex items-center gap-2 input w-auto !outline-none focus-within:border-secondary">
			<SearchIcon className="w-4 h-4 opacity-60" />
			<input
				type="text"
				className="grow"
				placeholder="Search"
				disabled={disabled}
			/>
		</label>
	);
};
