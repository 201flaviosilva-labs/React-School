import React, { useEffect, useState } from "react";
import Procurar from "./Procurar";
import ListarFilmes from "./Listar";

import "./Style.min.css";

export default function Filmes() {
	const [listMovies, setListMovies] = useState([]);
	const [search, setSearch] = useState("Road");

	useEffect(() => {
		fetch(`https://itunes.apple.com/search?term=${search}&entity=movie`)
			.then((response) => response.json())
			.then((data) => setListMovies(data.results));
	}, [search]);

	return (
		<div className="filmesContainer">
			<h2>Filmes</h2>
			<Procurar search={search} setSearch={setSearch} />
			<ListarFilmes listMovies={listMovies} />
		</div>
	)
}
