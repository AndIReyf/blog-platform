import {ArrowLeft} from 'lucide-react';

interface IGoBackProps {
	label?: string;
	onClick: VoidFunction;
}

export const GoBack = ({ label, onClick }: IGoBackProps) => {
	return (
		<button onClick={onClick} type="button" className="btn btn-ghost">
			<ArrowLeft size={16} />
			{label && <span>{label}</span>}
		</button>
	);
};
