import React, { useState } from "react";
import TextInput from "../common/TextInput";

function RightSideComponent() {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	const handleNextClick = async () => {
		let emailHasError = false;

		if (!email.match(emailPattern)) {
			setEmailError(true);
			emailHasError = true;
		} else {
			setEmailError(false);
		}

		if (!emailHasError) {
			window.open("https://app.loch.one/welcome");
		}
	};

	return (
		<div className="px-4 bg-white flex flex-col items-center justify-center h-full w-[95%] container mx-auto">
			<h1 className="text-[39px] text-gray-400  leading-tight">
				Sign up for exclusive access.
			</h1>
			<div className="mt-8 w-full">
				<TextInput
					placeholder="Your email address"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
				/>
				{emailError && (
					<p className="text-[#E90000]">
						Enter a valid email address
					</p>
				)}
			</div>
			<button
				className="w-full mt-8 text-[#fff] text-xl  px-6 py-3 bg-black rounded-lg hover:scale-105"
				onClick={(e) => {
					e.preventDefault();
					handleNextClick();
				}}
			>
				Get Started
			</button>
			<p className="text-base font-bold mt-8">
				You’ll receive an email with an invite link to join.
			</p>
		</div>
	);
}

export default RightSideComponent;
