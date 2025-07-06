import {SunMoon} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router';

export async function clientLoader() {
	const themeFromStorage = localStorage.getItem('theme');
	return { themeFromStorage };
}

export const Header = () => {
	const { themeFromStorage } = useLoaderData<typeof clientLoader>() || {};
	const [theme, setTheme] = useState(themeFromStorage ?? 'light');

	useEffect(() => {
		if (theme === 'light') {
			localStorage.setItem('theme', 'light');
		} else {
			localStorage.setItem('theme', 'dark');
		}
	}, [theme]);

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<header className="fill-base-200 drop-shadow-xl">
			<section className="p-3 flex items-center justify-between">
				<div className="text-2xl text-accent">Blogger Platform</div>
				<button
					type="button"
					className="btn btn-lg btn-accent btn-circle"
					aria-label="Toggle theme"
					onClick={toggleTheme}
				>
					<SunMoon size="25" strokeWidth={'1.5'} />
				</button>
			</section>
		</header>
	);
};
