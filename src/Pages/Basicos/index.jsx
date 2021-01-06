import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import Counter from "../../Components/Basicos/Counter";
import Counter2 from "../../Components/Basicos/Counter2";
import DateCalc from "../../Components/Basicos/DateCalc";
import Form from "../../Components/Basicos/Form";
import Height from "../../Components/Basicos/Height";
import MagicWords from "../../Components/Basicos/MagicWords";
import Todo from "../../Components/Basicos/Todo";

export default function Basicos() {
	return (
		<div className="basicosContainer">
			<Carousel className="carouselContainer">
				<Counter />
				<Counter2 />
				<DateCalc />
				<Form />
				<Height />
				<MagicWords />
				<Todo />
			</Carousel>
		</div>
	)
}
