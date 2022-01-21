import React from "react";

import "./style.min.css";

import B from "../../Projects/Basicos/Basicos";

export default function Noob() {
	return (
		<div className="basicosContainer">
			{
				B.map((Component, index) => {
					return <Component key={index} />;
				})
			}
		</div>
	)
}
