import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import B from "../../Components/Basicos/Basicos";

export default function Basicos() {
	return (
		<div className="basicosContainer">
			<Carousel className="carouselContainer">
				<B.Counter />
				<B.Counter2 />
				<B.DateCalc />
				<B.Form />
				<B.Height />
				<B.MagicWords />
				<B.Todo />

				<B.Weather />
				<B.Movies />
				<B.PokemonAPI />
			</Carousel>
		</div>
	)
}
