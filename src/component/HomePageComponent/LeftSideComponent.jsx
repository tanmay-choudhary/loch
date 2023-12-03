import React from "react";

import Banner1 from "../NotificationCard/Banner1";
import Banner2 from "../NotificationCard/Banner2";
import Banner3 from "../NotificationCard/Banner3";
function LeftSideComponent() {
	return (
		<div className=" gradient-background ">
            <Banner1 />
            <Banner2 />
            <Banner3/>
		</div>
	);
}

export default LeftSideComponent;
