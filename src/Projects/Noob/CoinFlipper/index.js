import React, { useState } from "react";

import Coin from "./Components/Coin";
import Graphic from "./Components/Graphic";

import "./style/style.min.css";

export default function CoinFlipper() {
	const [numPlays, setNumPlays] = useState(0);
	const [numFace, setNumFace] = useState(0);
	const [numCrown, setNumCrown] = useState(0);

	const probability = ["Face", "Crown"];
	const choice = probability[Math.round(Math.random())];
	const [CoinSelected, setCoinSelected] = useState(null);

	function playClick() {
		setNumPlays(numPlays + 1);
		const c = probability[Math.round(Math.random())];
		setCoinSelected(c);

		if (choice === "Face") setNumFace(numFace + 1);
		else setNumCrown(numCrown + 1);
	}

	return (
		<div className="BasicProjectContainer CoinFlipperContainer">
			<div className="Wrapper">
				<h2>Coin Flipper </h2>

				<div className="Coin">
					<Coin CoinSelected={CoinSelected} />
				</div>

				<div className="Graphic" title={"Plays: " + numPlays}>
					<Graphic
						numFace={numFace}
						numCrown={numCrown} />
				</div>

				<button onClick={playClick} className="ShootBTN">Shoot</button>
			</div>
		</div>
	)
}
