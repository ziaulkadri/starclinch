import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
	return (
		<>
			<div className={`avatar ${props.className}`} style={props.style}>
				<img
					src={props.image}
					alt={props.alt}
					style={{ width: props.width, height: props.width }}
				/>
				<div className=" tracking-wide text-3xl font-bold mb-2 text-indigo-500 font-semibold ms-4">
					{props.title}
				</div>
			</div>
		</>
	);
};

export default Avatar;
