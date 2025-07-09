import {Outlet, useNavigation} from 'react-router';
import {Loader} from '~/components/shared';
import {Header, Sidebar} from '~/components/widgets';

export function meta() {
	return [
		{ title: 'React Router Framework V7 App' },
		{ name: 'description', content: 'Welcome to React Router Framework V7!' },
	];
}

export default function Main() {
	const { location } = useNavigation();
	const isNavigating = Boolean(location);

	return (
		<div className="h-[100dvh] grid grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="h-[100dvh] grid grid-cols-[200px_1fr] overflow-hidden">
				<Sidebar />
				<main className="px-6 py-7.5 overflow-y-auto bg-base-300 relative">
					{isNavigating ? (
						<Loader classNameStyles="loading-ring w-50 absolute top-[50%] left-[50%] transform-[translate(-50%,_-50%)]" />
					) : (
						<Outlet />
					)}
				</main>
			</div>
		</div>
	);
}
