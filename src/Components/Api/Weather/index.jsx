import React, { useState, useEffect } from "react";
import axios from "axios";

import Procurar from "./Procurar";
import Carta from "./Carta";

export default function Weather() {
	const [search, setSearch] = useState("Porto");
	const [resultado, setResultado] = useState("");

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d8fb5b93d4af21d66a2948710284366`)
			.then(resp => resp.json())
			.then(resp => {
				if (resp.weather) setResultado(resp.weather[0].main);
			});
	}, [search]);

	return (
		<div>
			<Procurar search={search} setSearch={setSearch} />
			<Carta resultado={resultado} />
		</div>
	)
}
