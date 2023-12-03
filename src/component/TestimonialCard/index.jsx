import React from "react";

function Index({ name, job, desc }) {
	return (
		<div className=" w-[353px] h-[160px] bg-white rounded-lg p-4">
			<div className="flex items-center ">
				<h1 className="text-black font-bold text-xl mr-3">{name}</h1>{" "}
				<p className="text-gray-400 text-sm">{job}</p>
			</div>
			<p className="text-black leading-tight mt-3">{desc}</p>
		</div>
	);
}

export default Index;
