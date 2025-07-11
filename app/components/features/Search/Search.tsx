import {Search as SearchIcon} from 'lucide-react';

interface ISearchProps {
	id?: string;
}

export const Search = ({ id }: ISearchProps) => {
	return (
		<label className="flex items-center gap-2 input w-auto !outline-none focus-within:border-secondary">
			<SearchIcon className="w-4 h-4 opacity-60" />
			<input type="text" className="grow" placeholder="Search" />
		</label>
	);
};
