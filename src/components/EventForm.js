import { CFormInput } from '@coreui/react';
import React from 'react';

function EventForm(props) {
	return (
		<div className="mb-5">
			<form
				className="p-4 space-y-4 border rounded-md border-transparent focus-within:border-blue-500"
				onSubmit={props.handleSubmit}
			>
				<div className="flex flex-col space-y-2">
					<label htmlFor="occasion">What's the occasion?</label>
					<select
						id="occasion"
						name="occasion"
						onChange={(event) => props.setOccasion(event.target.value)}
						value={props.occasion}
						className="border rounded-md py-2 px-3"
					>
						<option value="">Select an occasion</option>
						<option value="Wedding">Wedding</option>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
						<option value="Corporate Event">Corporate Event</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="date">Event Date</label>

					<CFormInput
						type="date"
						id="date"
						name="date"
						onChange={(event) => props.setDate(event.target.value)}
						value={props.date}
						placeholder="select date"
						className="border rounded-md py-2 px-3 w-full"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="address">Venue Address</label>
					<input
						id="address"
						name="address"
						onChange={(event) => props.setAddress(event.target.value)}
						value={props.address}
						className="border rounded-md py-2 px-3 focus:border-blue-500"
					></input>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="budget">Budget</label>
					<select
						id="budget"
						name="budget"
						onChange={props.handleBudgetChange}
						value={props.budget}
						className="border rounded-md py-2 px-3"
					>
						<option value="">Select a budget</option>
						<option value="Less than 5Lac">Less than 5Lac</option>
						<option value="5Lac - 10Lac">5Lac - 10Lac</option>
						<option value="10Lac - 15Lac">10Lac - 15Lac</option>
						<option value="15Lac+">15Lac+</option>
					</select>
				</div>
				{props.moreOptions && (
					<div className="flex flex-col space-y-2">
						<label htmlFor="more-options">Send more options in my budget</label>
						<div className="flex items-center space-x-4">
							<input type="radio" id="yes" name="more-options" value="Yes" />
							<label htmlFor="yes">Yes</label>
							<input
								type="radio"
								name="more-options"
								value="No"
								defaultChecked={!props.moreOptions}
							/>
							<label htmlFor="no">No</label>
						</div>
					</div>
				)}
				<div className="flex flex-col space-y-2">
					<label htmlFor="attendees">How many people will attend?</label>
					<input
						type="number"
						id="attendees"
						name="attendees"
						onChange={(event) => props.setAttendees(event.target.value)}
						value={props.attendees}
						className="border rounded-md py-2 px-3"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={(event) => props.setName(event.target.value)}
						value={props.name}
						className="border rounded-md py-2 px-3"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="email">Email Address (No Spam!)</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={(event) => props.setEmail(event.target.value)}
						value={props.email}
						className="border rounded-md py-2 px-3"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="mobile">Mobile Number</label>
					<div className="flex items-center space-x-2">
						<input
							type="tel"
							id="mobile"
							name="mobile"
							onChange={(event) => props.setMobile(event.target.value)}
							value={props.mobile}
							className="border rounded-md py-2 px-3 flex-1"
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="details">Tell us more (we love to listen)</label>
					<textarea
						id="details"
						name="details"
						onChange={(event) => props.setDetails(event.target.value)}
						value={props.details}
						className="border rounded-md py-2 px-3"
					></textarea>
				</div>
				<div className="flex items-center space-x-2">
					<span className="text-gray-500">{props.sendOnWhatsapp}</span>
					<button
						type="button"
						className={`${
							props.sendOnWhatsapp ? 'bg-green-500' : 'bg-gray-300'
						} relative inline-flex items-center h-6 rounded-full w-11`}
						onClick={props.handleSwitchToggle}
					>
						<span className="sr-only">Toggle</span>
						<span
							className={`${
								props.sendOnWhatsapp ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</button>
					<span className="text-gray-500">Send Quotes on WhatsApp</span>
				</div>
			</form>
		</div>
	);
}

export default EventForm;
