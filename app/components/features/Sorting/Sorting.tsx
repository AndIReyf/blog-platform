export enum SortOptions {
	'new-first' = 'new-first',
	'old-first' = 'old-first',
	'a-z' = 'a-z',
	'z-a' = 'z-a',
}
export const options: Record<SortOptions, string> = {
	[SortOptions['new-first']]: 'new-first',
	[SortOptions['old-first']]: 'old-first',
	[SortOptions['a-z']]: 'a-z',
	[SortOptions['z-a']]: 'z-a',
} as const;

interface ISortingProps {
	onSortChange?: (sortOption: SortOptions) => void;
	value?: SortOptions;
	sortingOptions: { value: string; label: string; disabled?: boolean }[];
	disabled?: boolean;
}

export const Sorting = ({
	onSortChange,
	value,
	sortingOptions,
	disabled,
}: ISortingProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value as SortOptions;
		onSortChange?.(selectedValue);
	};

	return (
		<select
			disabled={disabled}
			className="select !outline-none"
			onChange={handleChange}
			value={value}
		>
			{sortingOptions.map(({ value, label, disabled }) => (
				<option key={value} value={value} disabled={disabled}>
					{label}
				</option>
			))}
		</select>
	);
};
