import React, { useState } from 'react';

import Modal from "../../Components/Modal/Modal";

import "./Style.min.css";

import JOGOS from "../../Projects/Jogos/Jogos";

export default function Jogos() {
	const [isVisibleReact3D, setIsVisibleReact3D] = useState(false);
	const [isVisibleTicTacToe, setIsVisibleTicTacToe] = useState(false);

	return (
		<div className="jogosContainer">
			<h2>Jogos</h2>

			<div className="SelectGameBtns">
				<button onClick={() => setIsVisibleReact3D(true)}>React 3D</button>
				<button onClick={() => setIsVisibleTicTacToe(true)}>Tic Tac Toe</button>
			</div>

			{isVisibleReact3D && <Modal setIsVisible={setIsVisibleReact3D}> <JOGOS.React3D /> </Modal>}
			{isVisibleTicTacToe && <Modal setIsVisible={setIsVisibleTicTacToe}> <JOGOS.TicTacToe /> </Modal>}
		</div>
	)
}
