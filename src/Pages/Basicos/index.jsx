import React from 'react';

import "./style.min.css";

import B from "../../Projects/Basicos/Basicos";

export default function Basicos() {
	return (
		<div className="basicosContainer">
			<B.CoinFlipper />
			<B.Counter />
			<B.Counter2 />
			{/* <B.DateCalc /> */}
			<B.Form />
			<B.Height />
			<B.MagicWords />
			<B.Todo />

			<B.MoviesAPI />
			<B.PokemonAPI />
			<B.WeatherAPI />
		</div>
	)
}
