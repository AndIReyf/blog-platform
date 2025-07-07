export function formatDateLocale(isoString: string): string {
	const date = new Date(isoString);

	if (Number.isNaN(date.getTime())) {
		throw new Error('Invalid date string');
	}

	return date.toLocaleDateString('en-EN', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}
