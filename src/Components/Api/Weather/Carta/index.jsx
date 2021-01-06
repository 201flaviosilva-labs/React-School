import React, { useState, useEffect } from 'react';
import Sol from "./img/Sol.png";
import Nublado from "./img/Nublado.png";

export default function Carta({ resultado }) {
	const [imagem, setimagem] = useState("");
	useEffect(() => {
		const url = "./img/";
		switch (resultado) {
			case "Clear":
				setimagem(Sol);
				break;
			case "Clouds":
				setimagem(Nublado);
				break;
			default:
				break;
		}
	}, [resultado])
	return (
		<div>
			<h1>Carta</h1>
			<p>{resultado}</p>
			<img src={imagem} />
		</div>
	)
}
