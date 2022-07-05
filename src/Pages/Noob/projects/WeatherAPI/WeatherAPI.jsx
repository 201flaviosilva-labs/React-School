import React, { useState, useEffect } from "react";
import NoobProject from "../../components/NoobProject";

import Card from "./Card";

import "./Style.min.css";

export default function Weather() {
	const [search, setSearch] = useState("Porto");
	const [result, setResult] = useState("");

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d8fb5b93d4af21d66a2948710284366`)
			.then(resp => resp.json())
			.then(resp => resp.weather && setResult(resp.weather[0].main));
	}, [search]);

	return (
		<NoobProject className="NoobWeather">

			<label>
				<span>Cidade:</span>
				<input
					placeholder="Cidade"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>

			<Card result={result} />
		</NoobProject>
	);
}
