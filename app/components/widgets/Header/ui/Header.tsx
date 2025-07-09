import {ThemeSwitcher} from "~/components/features";
import {useTheme} from '~/lib';

export const Header = () => {
	const { nextTheme } = useTheme();

	return (
		<header className="fill-base-200 drop-shadow-xl">
			<section className="p-3 flex items-center justify-between">
				<div className="text-2xl text-accent">Blogger Platform</div>
				<ThemeSwitcher onClick={nextTheme} />
			</section>
		</header>
	);
};
