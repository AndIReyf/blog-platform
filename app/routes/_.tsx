import {Outlet} from 'react-router';
import {Header, Sidebar} from '~/components/widgets';

export function meta() {
	return [
		{ title: 'React Router Framework V7 App' },
		{ name: 'description', content: 'Welcome to React Router Framework V7!' },
	];
}

export default function Main() {
	return (
		<div className="h-[100dvh] grid grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="h-[100dvh] grid grid-cols-[200px_1fr] overflow-hidden">
				<Sidebar />
				<main className="px-6 py-7.5 overflow-y-auto bg-base-300 ">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
