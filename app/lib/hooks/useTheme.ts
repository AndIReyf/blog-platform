import {useCallback, useEffect, useState} from 'react';

export enum Theme {
	light = 'light',
	dark = 'dark',
	abyss = 'abyss',
	dracula = 'dracula',
	caramellatte = 'caramellatte',
}

const THEMES = [
	Theme.light,
	Theme.dark,
	Theme.dracula,
	Theme.caramellatte,
	Theme.abyss,
];
const DEFAULT_THEME: Theme = Theme.light;
const THEME_KEY = 'theme';

interface IUseThemeReturn {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	nextTheme: VoidFunction;
	themes: Theme[];
}

type UseTheme = () => IUseThemeReturn;

export const useTheme: UseTheme = () => {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem(THEME_KEY) as Theme | null;
			return stored && THEMES.includes(stored) ? stored : DEFAULT_THEME;
		}
		return DEFAULT_THEME;
	});

	useEffect(() => {
		localStorage.setItem(THEME_KEY, theme);
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const setTheme = useCallback((newTheme: Theme) => {
		if (THEMES.includes(newTheme)) {
			setThemeState(newTheme);
		}
	}, []);

	const nextTheme = useCallback(() => {
		setThemeState((prev) => {
			const idx = THEMES.indexOf(prev);
			return THEMES[(idx + 1) % THEMES.length];
		});
	}, []);

	return { theme, setTheme, nextTheme, themes: THEMES };
};
