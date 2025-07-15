import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_USER_TOKEN;

export const _axios = axios.create({
	baseURL,
	headers: {
		authorization: `Basic ${token}`,
	},
});

// _axios.interceptors.request.use((config) => {
// 	console.log('�� Request Headers:', config.headers);
// 	console.log('🔐 Authorization Header:', config.headers.authorization);
// 	return config;
// });
