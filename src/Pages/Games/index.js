import React from "react";
import GAMES from "../../Projects/Games/Games";

import GameComponent from "./GameComponent";

import "./Style.min.css";

export default function Games() {
	return (
		<div className="jogosContainer">
			<h2>Jogos</h2>

			<div className="SelectGameBtns">
				{Object.keys(GAMES).map((k, index) => {
					const Game = GAMES[k];
					return (<GameComponent key={index} label={k} game={<Game />} />);
				}
				)}
			</div>
		</div>
	);
}
