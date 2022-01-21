import React, { useState, useEffect, useRef } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import MainScene from "./MainScene";
import ImageURILoaderPlugin from 'phaser3-rex-plugins/plugins/imageuriloader-plugin.js';

import "./style.min.css";

const gameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	backgroundColor: "#169ac5",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 300 },
			// debug: true,
		}
	},
	plugins: {
		global: [{
			key: 'rexImageURILoader',
			plugin: ImageURILoaderPlugin,
			start: true,
		},
		],
	},
	scene: [MainScene],
};

export default function Game() {
	const gameRef = useRef(null);
	const [game, setGame] = useState();
	const [initialize, setInitialize] = useState(false);

	useEffect(() => {
		setGame(gameConfig);
		setInitialize(true);
	}, []);

	return (
		<div className="PhaserContainer">
			<h1>Phaser Game</h1>
			<IonPhaser ref={gameRef} game={game} initialize={initialize} />
		</div>
	);
}
