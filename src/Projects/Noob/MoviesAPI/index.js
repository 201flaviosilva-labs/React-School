import React, { useEffect, useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.min.css";

import ListMovies from "./ListMovies";

export default function Movies() {
	const [moviesList, setMoviesList] = useState([]);
	const [search, setSearch] = useState("Mad Max");

	useEffect(() => {
		if (search) {
			fetch(`https://itunes.apple.com/search?term=${search}&entity=movie`)
				.then((response) => response.json())
				.then((data) => data && setMoviesList(data.results));
		}
	}, [search]);

	return (
		<NoobProject title="Filmes" className="NoobMovies">
			<label>
				<span>Nome:</span>
				<input
					placeholder="Nome do Filme"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>

			<ListMovies moviesList={moviesList} />
		</NoobProject>
	)
}
