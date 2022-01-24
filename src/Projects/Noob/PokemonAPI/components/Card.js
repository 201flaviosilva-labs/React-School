import React from "react";

export default function Card({ pokemon }) {
	return (
		<div className="Card">
			<img src={pokemon.sprites.front_default} alt={pokemon.name + " Image"} />
			<p>
				<span>{pokemon?.id || "0"} - </span> <span>{pokemon?.name || "Pokemon"}</span>
			</p>

			<p className="Type">Tipo: {pokemon?.types[0].type.name || "null"}</p>

			<ul className="Abilities">
				{pokemon.abilities.map((a, index) =>
					<li key={index}>
						<p>{index + 1} - {a.ability.name}</p>
					</li>
				)}
			</ul>
		</div>
	);
}
