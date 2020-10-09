import React, { useState } from 'react';

import "./style.min.css";

export default function Height() {
	const [n, setN] = useState("");
	return (
		<div className="ContainerBasicCenter">
			<h2>Height</h2>
			<div className="HeightContainer">
				<label htmlFor={"getHeightInput"}>Escreve a tua altura
					<input
						id="getHeightInput"
						type="number"
						name="heightInput"
						value={n}
						onChange={(e) => setN(e.target.value)} /> cm.
				</label>
				<button onClick={() => (n && !isNaN(Number(n))) ? alert(`Tua altura é: ${Number(n) / 100} metros.`) : alert("Eror 404!!")}> Calcular </button>
			</div>
		</div>
	);
}
