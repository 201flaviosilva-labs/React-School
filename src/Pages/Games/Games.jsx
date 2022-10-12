import React from "react";

import { GAMES_LIST } from "./GamesList";

import GameModal from "./components/GameModal";

import "./Style.scss";

export default function Games() {
	return (
		<div className="jogosContainer">
			<h2>Jogos</h2>

			<div className="SelectGameBtns">
				{Object.keys(GAMES_LIST).map((k, index) => {
					const Game = GAMES_LIST[k];
					return (<GameModal key={index} label={k} game={<Game />} />);
				}
				)}
			</div>
		</div>
	);
}
