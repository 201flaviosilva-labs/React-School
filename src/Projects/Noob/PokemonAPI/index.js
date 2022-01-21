import React, { useState, useEffect } from 'react';

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
		<div className="BasicProjectContainer PokemonAPIContainer">
			<input
				placeholder="Poke nome"
				value={findPoke}
				onChange={(e) => setFindPoke(String(e.target.value).toLowerCase() || "")} />

			<div className="Card">
				{pokemon && <img src={pokemon.sprites.front_default} alt={pokemon.name + " Image"} />}
				<p>
					<span>{pokemon?.id || "0"} - </span>
					<span>{pokemon?.name || "Pokemon"}</span>
				</p>

				<p className="Type">{pokemon?.types[0].type.name || "null"}</p>

				{pokemon && <ul className="Abilities">
					{pokemon.abilities.map((a, index) =>
						<li key={index}>
							<p>{a.ability.name}</p>
						</li>
					)}
				</ul>}
			</div>
		</div>
	)
}
