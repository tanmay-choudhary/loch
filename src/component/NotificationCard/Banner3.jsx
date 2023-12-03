import React from "react";
import TestimonialCard from "../TestimonialCard/index";
import Marquee from "react-fast-marquee";
function NotificationCard3() {
	const data = [
		{
			name: "Jack F",
			job: "Ex Blackrock PM",
			desc:
				"“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
		},
		{
			name: "Yash P",
			job: "Research, 3poch Crypto Hedge Fund",
			desc:
				"“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
		},
		{
			name: "Shiv S",
			job: "Co-Founder Magik Labs",
			desc:
				"“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
		},
	];
	return (
		<div className="pb-6 mt-8 text-white ">
			<div className="ml-5  ml-12 border-b border-white mr-4">
				<h1 className="text-right text-[25px] mb-3 ">Testimonials</h1>
			</div>

			<div className="lg:flex  lg:flex-row flex flex-col lg:px-12 lg:mt-8">
				<div className="lg:mt-24 mt-4 lg:mb-0 mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="60"
						height="60"
						viewBox="0 0 60 60"
						fill="none"
					>
						<path
							d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z"
							fill="white"
						/>
					</svg>
				</div>
				<Marquee autoFill className="lg:ml-5">
					<div className="mx-4 flex gap-6">
						{" "}
						{data.map((item, index) => (
							<TestimonialCard
								key={index}
								name={item.name}
								job={item.job}
								desc={item.desc}
							/>
						))}
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default NotificationCard3;
