import React, { useState, useEffect } from 'react';

import assets from "../../../../Manager/Assets";

export default function Carta({ resultado }) {
	const [imagem, setimagem] = useState("");
	useEffect(() => {
		const url = "./img/";
		switch (resultado) {
			case "Clear":
				setimagem(assets.Sol);
				break;
			case "Clouds":
				setimagem(assets.Nublado);
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
