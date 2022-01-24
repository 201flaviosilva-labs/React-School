import React from "react";
import Project from "./components/Project";

import "./style.min.css";

import NOOB from "../../Projects/Noob/Noob";

export default function Noob() {
	return (
		<div className="NoobContainer">
			{
				NOOB.map((Component, index) => {
					return <Component key={index} />;
				})
			}
		</div>
	)
}
