import React from "react";

import { NINJA_LIST } from "./NinjaList";

import Carousel from "../../Components/Carousel";

import "./style.scss";

export default function Ninja() {
	return (
		<div className="NinjaContainer">
			<h2>Ninja</h2>

			<Carousel>
				{NINJA_LIST.map((Project, index) => (<Project key={index} />))}
			</Carousel>
		</div>
	);
}
