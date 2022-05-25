import React, { useState, useEffect } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import Card from "./components/Card";

import "./Style.min.css";

export default function PokemonAPI() {
	const [findPoke, setFindPoke] = useState("charmander");
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/" + findPoke)
			.then(r => r.json())
			.then(response => (response && response.id) && setPokemon(response));
	}, [findPoke]);

	return (
		<NoobProject title="" className="NoobPokemonAPI">
			<input
				placeholder="Poke nome"
				value={findPoke}
				onChange={(e) => setFindPoke(String(e.target.value).toLowerCase() || "")} />

			{pokemon && <Card pokemon={pokemon} />}

		</NoobProject>
	)
}
