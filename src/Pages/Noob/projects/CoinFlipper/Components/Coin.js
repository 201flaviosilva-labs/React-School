import React from "react";
import { BiBitcoin, BiCoin } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";

export default function Coin({ coinSelected }) {
	return (
		<>
			<CoinImg coinSelected={coinSelected} />
			<p>{coinSelected ? coinSelected : "Make Your Bet"}</p>
		</>
	);
}

function CoinImg({ coinSelected }) {
	const Icon = coinSelected ? coinSelected === "Face" ? BiBitcoin : FaCrown : BiCoin;
	return <Icon />;
}
