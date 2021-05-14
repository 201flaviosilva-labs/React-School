import React, { useState } from 'react';
import { calculateWinner } from '../helps';
import Board from "./Board";
import "./style.css";

export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	function handleClick(i) {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	}

	function resetBoard() {
		setBoard(Array(9).fill(null));
		setXisNext(true);
	}

	return (
		<div>
			<h3 className="H3TTT">{winner ? `Winner is: ${!xIsNext ? 'X' : 'O'}` : `Should play: ${xIsNext ? 'X' : 'O'}`}</h3>
			<Board squares={board} onClick={handleClick} />
			<button onClick={resetBoard} className="resetTTT">ReStart</button>
		</div>
	)
}
