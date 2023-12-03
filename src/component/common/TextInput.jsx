import React from "react";

const TextInput = ({ placeholder, value, onChange }) => {
	return (
		<div>
			<input
				type="text"
				className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextInput;
