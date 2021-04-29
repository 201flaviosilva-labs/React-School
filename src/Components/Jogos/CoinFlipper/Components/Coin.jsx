import React from 'react';
import { FaUser, FaBitcoin, FaMoneyBill } from 'react-icons/fa';

export default function Coin({ CoinSelected }) {
	return (
		<>
			<CoinImg CoinSelected={CoinSelected} />
			<h3>{CoinSelected ? CoinSelected : "Make Your Bet"}</h3>
		</>
	)
}

function CoinImg({ CoinSelected }) {
	return CoinSelected ? (CoinSelected === "Face") ? <FaUser /> : <FaBitcoin /> : <FaMoneyBill />;
}
