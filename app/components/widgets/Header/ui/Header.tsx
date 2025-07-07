import {SunMoon} from 'lucide-react';
import {Tooltip} from '~/components/shared';
import {useTheme} from '~/lib';

export const Header = () => {
	const { nextTheme } = useTheme();

	return (
		<header className="fill-base-200 drop-shadow-xl">
			<section className="p-3 flex items-center justify-between">
				<div className="text-2xl text-accent">Blogger Platform</div>
				<Tooltip text="Theme Switcher!">
					<button
						type="button"
						className="btn btn-lg btn-accent btn-circle"
						aria-label="Toggle theme"
						onClick={nextTheme}
					>
						<SunMoon size="25" strokeWidth={'1.5'} />
					</button>
				</Tooltip>
			</section>
		</header>
	);
};
