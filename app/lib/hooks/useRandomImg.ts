import {useEffect, useState} from 'react';

export const useRandomImg = (images: string[]): string => {
	const [randomIndex, setRandomIndex] = useState(0);

	useEffect(() => {
		const index = Math.floor(Math.random() * images.length);
		setRandomIndex(index);
	}, [images]);

	return images[randomIndex];
};
