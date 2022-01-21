import React from "react";

import "./style.min.css";

import NOOB from "../../Projects/Noob/Noob";

export default function Noob() {
	return (
		<div className="basicosContainer">
			{
				NOOB.map((Component, index) => {
					return <Component key={index} />;
				})
			}
		</div>
	)
}
