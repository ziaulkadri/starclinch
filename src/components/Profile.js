import React, { useState } from 'react';
import Card from './Card';
import profileImg from '../assests/svgs/ranbir1.jpg';
// import Modal from './Modal';
import Avatar from './Avatar';
import EventForm from './EventForm';
import ImageGrid from './ImageGrid';

export default function Profile() {
	const [showMap, setShowMap] = useState(false);
	const [occasion, setOccasion] = useState('');
	const [date, setDate] = useState('');
	const [address, setAddress] = useState('');
	const [budget, setBudget] = useState('');
	const [attendees, setAttendees] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [moreOptions, setMoreOptions] = useState(false);
	const [details, setDetails] = useState('');
	const [sendOnWhatsapp, setSendOnWhatsapp] = useState(false);

	const handleSwitchToggle = () => {
		setSendOnWhatsapp(!sendOnWhatsapp);
	};

	const handleBudgetChange = (event) => {
		const value = event.target.value;
		setBudget(value);
		if (value === 'Yes') {
			setMoreOptions(true);
		} else {
			setMoreOptions(false);
		}
	};

	const closeHandler = (e) => {
		e.preventDefault();
		setShowMap(false);
	};
	const openHandler = () => {
		setShowMap(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const eventData = {
			occasion: occasion,
			date: date,
			address: address,
			budget: budget,
			attendees: attendees,
			name: name,
			email: email,
			mobile: mobile,
			moreOptions: moreOptions,
			details: details,
			sendOnWhatsapp: sendOnWhatsapp,
		};
		console.log(eventData);
		closeHandler(e);
	};

	return (
		<main>
			<div className="header-links flex justify-start items-center space-x-4 mt-4 ms-1 ">
				<a href="/">Home</a>
				<a href="/celebrity">Celebrity Appearance</a>
				<a href="/ranbir-kapoor">Ranbir Kapoor</a>
			</div>
			{!showMap && (
				<Card
					imageSrc={profileImg}
					title="Ranbir Kapoor"
					type="(CELEBRITY APPEARANCE)"
					location="Mumbai, Maharashtra"
					description="The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer"
					buttonText="See price and Book"
					modelHandler={openHandler}
				/>
			)}
			{showMap && (
				<div className="border rounded-md py-2 px-3 p-3 mt-3 max-w-md mx-auto  rounded-xl shadow-lg overflow-hidden md:max-w-2xl mt-4   bg-gray-100">
					<Avatar
						image={profileImg}
						alt="ranbir"
						width={100}
						title="Ranbir Kapoor"
					/>

					<div className="map-container">
						<EventForm
							closeHandler={closeHandler}
							handleSubmit={handleSubmit}
							handleBudgetChange={handleBudgetChange}
							handleSwitchToggle={handleSwitchToggle}
							showMap={showMap}
							setShowMap={setShowMap}
							occasion={occasion}
							setOccasion={setOccasion}
							date={date}
							setDate={setDate}
							address={address}
							setAddress={setAddress}
							budget={budget}
							setBudget={setBudget}
							attendees={attendees}
							setAttendees={setAttendees}
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
							mobile={mobile}
							setMobile={setMobile}
							moreOptions={moreOptions}
							setMoreOptions={setMoreOptions}
							details={details}
							setDetails={setDetails}
							sendOnWhatsapp={sendOnWhatsapp}
							setSendOnWhatsapp={setSendOnWhatsapp}
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-grey-500 text-black py-2 px-4 rounded-md flex justify-start me-3"
							onClick={(e) => closeHandler(e)}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded-md flex justify-end"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			)}
			<ImageGrid />
		</main>
	);
}
