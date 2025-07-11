interface ISortingProps {
	id?: string;
}

export const Sorting = ({ id }: ISortingProps) => {
	return (
		<select className="select !outline-none">
			<option disabled={true}>Add Sorting</option>
			<option>New Blogs First</option>
			<option>Old Blogs First</option>
			<option>From A to Z</option>
			<option>From Z to A</option>
		</select>
	);
};
