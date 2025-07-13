export const configApp = () => {
	const isAuth = import.meta.env.VITE_USER_TOKEN === 'YWRtaW46cXdlcnR5';

	return {
		isAuth,
	};
};
