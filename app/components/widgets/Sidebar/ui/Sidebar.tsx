import {House, LayoutGrid, Logs} from 'lucide-react';
import type {ReactNode} from "react";
import {href, NavLink, type NavLinkRenderProps} from 'react-router';
import {Loader} from "~/components/shared";

const navLinkClassNameRender = ({
	isActive,
	isPending,
}: NavLinkRenderProps): string => {
	const styleIsActive = 'border-r-2 border-r-secondary text-secondary';
	const styleIsPending = 'border-r-2 border-r-primary text-primary';

	return [
		isActive && styleIsActive,
		isPending && styleIsPending,
		'flex gap-3',
	].join(' ');
};

const navLinkChildrenRender =
	(children: ReactNode) =>
	({ isPending }: NavLinkRenderProps): ReactNode => {
		return (
			<>
				{children}
				{isPending && <Loader classNameStyles="loading-infinity" />}
			</>
		);
	};

interface ILink {
	to: string;
	className: typeof navLinkClassNameRender;
	children: ReturnType<typeof navLinkChildrenRender>;
}

const navLinks: ILink[] = [
	{
		to: href('/'),
		className: navLinkClassNameRender,
		children: navLinkChildrenRender(
			<>
				<House />
				<span>Home</span>
			</>,
		),
	},
	{
		to: href('/blogs'),
		className: navLinkClassNameRender,
		children: navLinkChildrenRender(
			<>
				<Logs />
				<span>Blogs</span>
			</>,
		),
	},
	{
		to: href('/posts'),
		className: navLinkClassNameRender,
		children: navLinkChildrenRender(
			<>
				<LayoutGrid />
				<span>Posts</span>
			</>,
		),
	},
];

export const Sidebar = () => {
	return (
		<aside className="pl-3 py-7.5 overflow-y-auto bg-base-200 fill-base-200 drop-shadow-xl">
			<nav className="flex flex-col gap-5">
				{navLinks.map(({ to, className, children }) => (
					<NavLink key={to} to={to} className={className}>
						{children}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};
