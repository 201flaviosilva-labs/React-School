import React, { useState } from "react";
import Slot from "./Slot";

export default function SlotMachine() {
	const [play, setPlay] = useState(false);

	const list = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"];

	return (
		<div>
			<Slot target={1}>
				{
					list.map((icon, index) => <div key={index}>{icon}</div>)
				}
			</Slot>

			<button id="play-button" onClick={() => setPlay(!play)}>Play</button>
		</div>
	)
}
