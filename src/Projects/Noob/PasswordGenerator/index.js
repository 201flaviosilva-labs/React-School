import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

import { randomNumber } from "../../../Utils";

export default function PasswordGenerator() {
	const [word, setWord] = useState("Alguma Coisa");

	const [charsNumber, setCharsNumber] = useState(12);

	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?#$%&@-_<>";

	function generatePass() {
		let pass = "";
		for (let i = 0; i < charsNumber; i++) {
			pass += chars[randomNumber(0, chars.length - 1)];
		}
		setWord(pass);
	}

	return (
		<div className="BasicProjectContainer PasswordGeneratorContainer">
			<h2>Password Generator</h2>
			<div className="Form">
				<label htmlFor="charsNumber">
					<span>Num. Caracteres ({charsNumber}): </span>
					<input
						type="range"
						value={charsNumber}
						onChange={(e) => setCharsNumber(e.target.value)}
						min={4}
						max={100}
					/>

					<input
						type="number"
						value={charsNumber}
						onChange={(e) => setCharsNumber((e.target.value >= 1 && e.target.value <= 100) ? e.target.value : charsNumber)}
						min={4}
						max={100}
						id="charsNumber"
					/>
				</label>

				<button onClick={generatePass}>Generate</button>
			</div>

			<p>{word}</p>
		</div>
	)
}
