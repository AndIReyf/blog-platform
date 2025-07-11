import {ThemeSwitcher} from '~/components/features';

export const Header = () => {
	return (
		<header className="fill-base-200 drop-shadow-xl">
			<section className="p-3 flex items-center justify-between">
				<div className="text-2xl text-accent">Blogger Platform</div>
				<ThemeSwitcher />
			</section>
		</header>
	);
};
