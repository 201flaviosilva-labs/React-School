import React from "react";

import { NOOB_LIST } from "./NoobList";

import "./style.scss";

export default function Noob() {
	return (
		<div className="NoobContainer">
			{
				NOOB_LIST.map((Component, index) => {
					return <Component key={index} />;
				})
			}
		</div>
	);
}
