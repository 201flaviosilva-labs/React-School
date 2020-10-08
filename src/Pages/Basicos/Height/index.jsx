import React, { useState } from 'react';

export default function Height() {
	const [heightInput, setHeightInput] = useState("");
	const getHeightInputStyle = {
		color: "red",
		padding: "4px 10px",
		margin: "0 10px",
		border: "1px solid black",
		borderRadius: "10px",
		outline: "none",
	};
	return (
		<>
			<label htmlFor={"getHeightInput"}>Escreve a tua altura
				<input
					id="getHeightInput"
					type="text"
					name="heightInput"
					value={heightInput}
					onChange={(e) => setHeightInput(e.target.value)}
					style={getHeightInputStyle} />
				cm.
			</label>
			<button onClick={() => alert("You height is: " + heightInput + " cm.")}> Calcular </button>
		</>
	);
}
