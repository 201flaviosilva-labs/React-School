import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import { randomInt } from "@201flaviosilva/utils";

export default function PasswordGenerator() {
	const [word, setWord] = useState("Alguma Coisa");

	const [charsNumber, setCharsNumber] = useState(12);

	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?#$%&@-_<>";

	function generatePass() {
		let pass = "";
		for (let i = 0; i < charsNumber; i++) {
			pass += chars[randomInt(0, chars.length - 1)];
		}
		setWord(pass);
	}

	return (
		<NoobProject title="Password Generator" className="NoobPasswordGenerator">
			<div className="Form">
				<label htmlFor="charsNumber">
					<span>Num. ({charsNumber}):</span>
					<input
						type="range"
						value={charsNumber}
						onChange={(e) => setCharsNumber(e.target.value)}
						min={4}
						max={30}
					/>
				</label>

				<button onClick={generatePass}>Generate</button>
			</div>

			<p>{word}</p>
		</NoobProject>
	)
}
