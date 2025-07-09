interface ILoaderProps {
	classNameStyles?: string;
}

export const Loader = ({ classNameStyles }: ILoaderProps) => {
	return <span className={`${classNameStyles} loading bg-primary z-50`} />;
};
