import React from 'react';

const imageData = [
	{
		id: 1,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 1',
	},
	{
		id: 2,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 2',
	},
	{
		id: 3,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 3',
	},
	{
		id: 1,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 1',
	},
	{
		id: 2,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 2',
	},
	{
		id: 3,
		src: 'https://images.inuth.com/2017/05/1ranbirkapoortamashamoviestill.jpg',
		alt: 'Random image 3',
	},

	// add more image data here
];

const ImageGrid = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 p-5">
			{imageData.map((image, index) => (
				<img
					key={index}
					src={image.src}
					alt={image.alt}
					className="w-full h-full object-cover rounded-lg shadow-md"
				/>
			))}
		</div>
	);
};

export default ImageGrid;
