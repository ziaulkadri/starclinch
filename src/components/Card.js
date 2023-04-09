import React from 'react';

function Card({
	imageSrc,
	title,
	type,
	location,
	description,
	buttonText,
	modelHandler,
}) {
	return (
		<div className="max-w-md mx-auto  rounded-xl shadow-lg overflow-hidden md:max-w-2xl mt-4   bg-gray-100  ">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-68 w-full object-cover md:h-full md:w-48  p-3"
						src={imageSrc}
						alt="Card"
					/>
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-3xl font-bold mb-2 text-indigo-500 font-semibold">
						{title}
					</div>
					<div className="uppercase tracking-wide text-xl font-bold mb-2 text-black-500 font-semibold">
						{type}
					</div>
					<div className="uppercase tracking-wide text-sm font-bold mb-2 text-black-500 bold">
						{location}
					</div>

					<div className="mt-4">
						<button
							onClick={modelHandler}
							href="/"
							className="inline-block px-4 py-2 rounded-xl bg-red-500  text-white uppercase tracking-wider hover: border-box; font-bold text-md w-full h-10 text-center  hover:bg-white hover:text-red-500 "
						>
							{buttonText}
						</button>
					</div>
					<p className="block mt-4 text-md leading-tight  font-montserrat-400  leading-6 ">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
