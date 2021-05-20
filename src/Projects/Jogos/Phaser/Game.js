import React, { useState, useEffect, useRef } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import MainScene from "./MainScene";

import "./style.min.css";

const gameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	backgroundColor: "#000",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 400 },
			debug: true,
		}
	},
	scene: [MainScene],
};

export default function Game() {
	const gameRef = useRef(null);
	const [game, setGame] = useState();
	const [initialize, setInitialize] = useState(true);

	const destroy = () => {
		if (!initialize) {
			gameRef.current?.destroy();
			setGame(null);
		}
		setInitialize(!initialize);
	}

	useEffect(() => {
		if (initialize) {
			setGame(gameConfig);
		}
	}, [initialize]);

	return (
		<div className="PhaserContainer">
			<h1>Phaser Game</h1>
			<IonPhaser ref={gameRef} game={game} initialize={initialize} />
			<button onClick={destroy}>{initialize ? "Em Jogo" : "Desligado"}</button>
		</div>
	);
}
