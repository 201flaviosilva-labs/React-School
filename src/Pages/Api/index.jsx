import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import APIS from "../../Components/Api/Apis";

export default function Apis() {
	return (
		<div className="apisContainer">
			<Carousel className="carouselContainer">
				<APIS.Weather />
				<APIS.Movies />
				<APIS.PokemonAPI />
			</Carousel>
		</div>
	)
}
