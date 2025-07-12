import {Ban} from "lucide-react";
import {href, useNavigate} from "react-router";

interface INotFoundProps {
	message: string;
	details: string;
	stack?: string;
}

export const NotFound = ({ message, stack, details }: INotFoundProps) => {
	const navigate = useNavigate();

	const goBack: VoidFunction = () => {
		navigate(-1);
	};

	const goToHomePage: VoidFunction = () => {
		navigate(href('/'));
	};

	return (
		<div className="flex flex-col justify-center items-center gap-4 w-full">
			<h1 className="flex items-center gap-2">
				<Ban className="text-error" />
				<span className="text-4xl font-bold">{message}</span>
			</h1>
			<h3 className="text-xl">{details}</h3>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
			<button
				type="button"
				className="btn btn-soft btn-info"
				onClick={goToHomePage}
			>
				Go to Home Page
			</button>
			<button type="button" className="btn btn-soft" onClick={goBack}>
				Go Back
			</button>
		</div>
	);
};
