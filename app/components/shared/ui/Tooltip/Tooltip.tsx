interface ITooltipProps {
	text: string;
	children?: React.ReactNode;
}

export const Tooltip = ({ children, text }: ITooltipProps) => {
	return (
		<div className="tooltip tooltip-left tooltip-accent">
			<div className="tooltip-content">
				<div className="animate-bounce -rotate-6 text-2xl font-black">
					{text}
				</div>
			</div>
			{children}
		</div>
	);
};
