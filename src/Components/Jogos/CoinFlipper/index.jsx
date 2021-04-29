import React, { useState, useEffect } from 'react';
import Banner from 'react-js-banner';

import Coin from "./Components/Coin";
import Graphic from "./Components/Graphic";
import MoneyHelp from './Components/MoneyHelp';

import "./style.css";

export default function CoinFlipper() {
	const [Money, setMoney] = useState(10);
	const [numPlays, setNumPlays] = useState(0);
	const [numFace, setNumFace] = useState(0);
	const [numCrown, setNumCrown] = useState(0);

	const probabilitys = ["Face", "Crown"];
	let choise = probabilitys[Math.round(Math.random())];
	const [CoinSelected, setCoinSelected] = useState(null);

	const [isShowBanner, setIsShowBanner] = useState(false);
	useEffect(() => { setTimeout(() => setIsShowBanner(false), 4000) }, [isShowBanner]);

	function playClick(Bet) {
		setNumPlays(numPlays + 1);
		setMoney(Money - Bet);
		choise = probabilitys[Math.round(Math.random())];
		setCoinSelected(choise);
		if (choise === "Face") {
			setNumFace(numFace + 1);
			if (document.getElementById("RadioFace").checked) setMoney(Money + 2 * Bet);
		} else {
			setNumCrown(numCrown + 1);
			if (document.getElementById("RadioCrown").checked) setMoney(Money + 2);
		}
	}

	return (
		<>
			<Banner
				showBanner={isShowBanner}
				title={"You Don't Have Money!"} />
			<div className="CoinFlipperContainer">
				<div className="Coin">
					<Coin CoinSelected={CoinSelected} />
				</div>

				<div className="Graphic">
					<Graphic
						Money={Money}
						numFace={numFace}
						numCrown={numCrown}
						numPlays={numPlays} />
				</div>

				<div className="BtnsPlays">
					<button onClick={() => (Money - 1 > -1) ? playClick(1) : setIsShowBanner(true)}>Bet 1</button>
					<button onClick={() => (Money - 10 > -1) ? playClick(10) : setIsShowBanner(true)}>Bet 10</button>
					<button onClick={() => (Money - 100 > -1) ? playClick(100) : setIsShowBanner(true)}>Bet 100</button>
					<button onClick={() => (Money - 1000 > -1) ? playClick(1000) : setIsShowBanner(true)}>Bet 1000</button>
					<MoneyHelp setMoney={setMoney} />
				</div>

				<div className="Choise">
					<label htmlFor="RadioFace"><input type="radio" name="CoinChoise" id="RadioFace" defaultChecked />Face</label>
					<label htmlFor="RadioCrown"><input type="radio" name="CoinChoise" id="RadioCrown" />Crown</label>
				</div>
			</div>
		</>
	)
}
