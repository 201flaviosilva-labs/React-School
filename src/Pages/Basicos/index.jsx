import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import Counter from "./Counter";
import DateCalc from "./DateCalc";
import Form from "./Form";
import Height from "./Height";
import MagicWords from "./MagicWords";
import Todo from "./Todo";

export default function Basicos() {
	return (
		<div className="basicosContainer">
			<Carousel className="carouselContainer">
				<Counter />
				<DateCalc />
				<Form />
				<Height />
				<MagicWords />
				<Todo />
			</Carousel>
		</div>
	)
}
