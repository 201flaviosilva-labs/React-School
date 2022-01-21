import React, { useState, useEffect } from "react";
import Slot from "./Slot";

export default function SlotMachine() {
	const [inPlay, setInPlay] = useState(false);
	const [actualIcon, setActualIcon] = useState(3);
	// const icons = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"];
	const icons = ["A", "B", "C", "D", "E", "F"];

	function startSpin() {
		setInPlay(true);
		play();
	}

	play();
	function play() {
		setInterval(() => {
			const i = actualIcon + 1;
			// const i = actualIcon > icons.length ? 0 : actualIcon + 1;
			setActualIcon(i);
		}, 1000);
	}

	useEffect(() => {
		console.log(actualIcon);
	}, [actualIcon])

	return (
		<div>
			<div>{icons[actualIcon]}, {actualIcon}</div>

			{/* <Slot>
				{
					icons.map((icon, index) => <div key={index}>{icon}</div>)
				}
			</Slot> */}

			<button id="play-button" onClick={() => { if (!inPlay) startSpin() }}>Play</button>
		</div>
	)
}
