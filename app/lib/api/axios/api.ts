import axios from 'axios';

export const _axios = axios.create({
	baseURL: 'https://andriiprudius.vercel.app',
	headers: {
		authorization: '',
	},
});
