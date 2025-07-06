import {House, LayoutGrid, Logs} from 'lucide-react';
import {href, NavLink} from 'react-router';

export const Sidebar = () => {
	const styleIsActive = 'border-r-2 border-r-secondary text-secondary';

	return (
		<aside className="pl-3 py-7.5 overflow-y-auto bg-base-200 fill-base-200 drop-shadow-xl">
			<nav className="flex flex-col gap-5">
				<NavLink
					className={({ isActive }) =>
						[isActive && styleIsActive, 'flex gap-3'].join(' ')
					}
					to={href('/')}
				>
					<House />
					<span>Home</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						[isActive && styleIsActive, 'flex gap-3'].join(' ')
					}
					to={href('/blogs')}
				>
					<Logs />
					<span>Blogs</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						[isActive && styleIsActive, 'flex gap-3'].join(' ')
					}
					to={href('/posts')}
				>
					<LayoutGrid />
					<span>Posts</span>
				</NavLink>
			</nav>
		</aside>
	);
};
