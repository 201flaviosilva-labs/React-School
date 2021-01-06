import React from 'react';
import Carousel from 'react-elastic-carousel';

import "./Style.min.css";

import CoinFliper from "../../Components/Jogos/CoinFliper";
import TicTacToe from "../../Components/Jogos/TicTacToe";

export default function Jogos() {
	return (
		<div className="jogosContainer">
			<h2>Jogos</h2>
			<Carousel className="carouselContainer">
				<CoinFliper />
				<TicTacToe />
			</Carousel>
		</div>
	)
}
