import React, { useEffect, useState } from "react";

import ListMovies from "./ListMovies";

export default function Movies() {
	const [moviesList, setMoviesList] = useState([]);
	const [search, setSearch] = useState("Pirates");

	useEffect(() => {
		fetch(`https://itunes.apple.com/search?term=${search}&entity=movie`)
			.then((response) => response.json())
			.then((data) => data && setMoviesList(data.results));
	}, [search]);

	return (
		<div className="BasicProjectContainer filmesContainer">
			<h1>Filmes</h1>

			<label>
				<span>Filme:</span>
				<input
					placeholder="Nome filme"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>

			<ListMovies moviesList={moviesList} />
		</div>
	)
}
