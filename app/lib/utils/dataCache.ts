export function generateKey(request: Request): string {
	return `${request.method}:${request.url}`;
}

export function createCache<T>() {
	const cache = new Map<string, T>();

	return {
		get: (key: string) => cache.get(key),
		set: (key: string, value: T) => cache.set(key, value),
		delete: (key: string) => cache.delete(key),
		clear: () => cache.clear(),
	};
}

interface IGenericClientLoaderProps<T> {
	request: Request;
	serverLoader: () => Promise<T>;
	cache: ReturnType<typeof createCache<T>>;
	isInitialRequest: { current: boolean };
}

export async function genericClientLoader<T>({
	request,
	isInitialRequest,
	serverLoader,
	cache,
}: IGenericClientLoaderProps<T>) {
	const cacheKey = generateKey(request);

	if (isInitialRequest.current) {
		isInitialRequest.current = false;
		const serverData = await serverLoader();
		cache.set(cacheKey, serverData);
		return serverData;
	}

	const cachedData = cache.get(cacheKey);
	if (cachedData) {
		return cachedData;
	}

	const serverData = await serverLoader();
	cache.set(cacheKey, serverData);
	return serverData;
}

interface IGenericClientActionProps<T> {
	request: Request;
	cache: ReturnType<typeof createCache<T>>;
}

export async function genericClientAction<T>({
	request,
	cache,
}: IGenericClientActionProps<T>) {
	const cacheKey = generateKey(request);
	cache.delete(cacheKey);
}
