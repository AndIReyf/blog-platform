import {ArrowLeft} from 'lucide-react';
import {useNavigate} from 'react-router';

interface IGoBackProps {
	label?: string;
}

export const GoBack = ({ label }: IGoBackProps) => {
	const navigate = useNavigate();

	const goBackToBlogs: VoidFunction = () => {
		navigate(-1);
	};

	return (
		<button onClick={goBackToBlogs} type="button" className="btn btn-ghost">
			<ArrowLeft size={16} />
			{label && <span>{label}</span>}
		</button>
	);
};
