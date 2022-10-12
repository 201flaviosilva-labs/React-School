import React, { useEffect } from "react";
import Phaser from "phaser";

import { gameConfig } from "./config";

import "./style.scss";

export default function PhaserGame() {
	useEffect(() => {
		const game = new Phaser.Game(gameConfig);
		return () => { game.destroy(true); };
	}, []);

	return (
		<div className="PhaserGameContainer">
			<h1>Phaser Game</h1>
			<div id="PhaserGameContainer"></div>
		</div>
	);
}
