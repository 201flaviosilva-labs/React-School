import React from "react";
import Phaser from "phaser";

import Game from "./Game";

import "./style.min.css";

export default function PhaserGame() {

	const config = {
		type: Phaser.AUTO,
		parent: "PhaserContainer",
		width: 800,
		height: 600,
		scene: [Game],
	};
	new Phaser.Game(config);

	return (
		<div className="PhaserContainer" id="PhaserContainer"></div>
	)
}
