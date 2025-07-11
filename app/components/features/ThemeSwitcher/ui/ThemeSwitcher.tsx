import {SunMoon} from 'lucide-react';
import {Tooltip} from '~/components/shared';
import {useTheme} from '~/lib';

interface IThemeSwitcherProps {
	tooltipText?: string;
}

export const ThemeSwitcher = ({ tooltipText }: IThemeSwitcherProps) => {
	const { nextTheme } = useTheme();

	return (
		<Tooltip text={tooltipText || 'Switch your Theme!'}>
			<button
				type="button"
				className="btn btn-lg btn-accent btn-circle"
				aria-label="Toggle theme"
				onClick={nextTheme}
			>
				<SunMoon size="25" strokeWidth={'1.5'} />
			</button>
		</Tooltip>
	);
};
