import {SunMoon} from 'lucide-react';
import {Tooltip} from '~/components/shared';

interface IThemeSwitcherProps {
	tooltipText?: string;
	onClick: VoidFunction;
}

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
	const { tooltipText, onClick } = props;

	return (
		<Tooltip text={tooltipText || 'Switch your Theme!'}>
			<button
				type="button"
				className="btn btn-lg btn-accent btn-circle"
				aria-label="Toggle theme"
				onClick={onClick}
			>
				<SunMoon size="25" strokeWidth={'1.5'} />
			</button>
		</Tooltip>
	);
};
