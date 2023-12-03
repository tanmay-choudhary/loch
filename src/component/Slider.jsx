import React from "react";
import Marquee from "react-fast-marquee";
function Slider() {
	const images = ["/Card 1.png", "/Card2.png", "/Card3.png"];
	return (
		<div className="">
			<Marquee autoFill className="p-8">
				{images.map((img, i) => (
					<div key={i}>
						<img
							className="object-fit   "
							src={img}
							alt=""
							height={180}
							width={220}
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
}

export default Slider;
