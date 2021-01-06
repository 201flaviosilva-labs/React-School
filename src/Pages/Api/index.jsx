import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./style.min.css";

import Filmes from "../../Components/Api/Filmes";
import Weather from "../../Components/Api/Weather";


export default function Apis() {
	return (
		<div className="apisContainer">
			<Carousel className="carouselContainer">
				<Weather />
				<Filmes />
			</Carousel>
		</div>
	)
}
