import React from "react";
import JOGOS from "../../Projects/Jogos/Jogos";

import GameComponent from "./GameComponent";

import "./Style.min.css";

export default function Games() {
	return (
		<div className="jogosContainer">
			<h2>Jogos</h2>

			<div className="SelectGameBtns">
				{Object.keys(JOGOS).map((k, index) => {
					const Game = JOGOS[k];
					return (<GameComponent key={index} label={k} game={<Game />} />)
				}
				)}
			</div>
		</div>
	)
}
