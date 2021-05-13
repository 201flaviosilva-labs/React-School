import React from "react";
import { BiBitcoin, BiCoin } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";

export default function Coin({ CoinSelected }) {
	return (
		<>
			<CoinImg CoinSelected={CoinSelected} />
			<p>{CoinSelected ? CoinSelected : "Make Your Bet"}</p>
		</>
	)
}

function CoinImg({ CoinSelected }) {
	return CoinSelected ?
		(CoinSelected === "Face")
			? <BiBitcoin />
			: <FaCrown />
		: <BiCoin />;
}
