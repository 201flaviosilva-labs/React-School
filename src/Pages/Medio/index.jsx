import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import Filmes from "./Filmes";
import Weather from "./Weather";

export default function Medios() {
	return (
		<div className="basicosContainer">
			<Carousel className="carouselContainer">
				{/* <Filmes /> */}
				<Weather />
			</Carousel>
		</div>
	)
}
