import React from 'react';
import Square from "./Square";

export default function Board({ squares, onClick }) {
	return (
		<div className="TTTBoardContainer">
			{squares.map((square, i) => <Square key={i} value={square} onClick={() => onClick(i)} />)}
		</div>
	)
}
