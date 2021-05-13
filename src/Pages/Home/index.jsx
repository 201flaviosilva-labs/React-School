import React from 'react';
import { Link } from "react-router-dom";

import Counter2 from "../../Projects/Basicos/Counter2";
import TicTacToe from "../../Projects/Jogos/TicTacToe";

import "./Style.min.css";

export default function Home() {

	return (
		<div className="HomeContainer">
			<h2>Home</h2>

			<div className="Main">
				<div className="ExemploProjeto">
					<div className="Header">
						<h3>Básicos</h3>
						<Link to="/basicos">Ir</Link>
					</div>

					<div className="Projeto">
						<Counter2 />
					</div>
				</div>

				<div className="ExemploProjeto">
					<div className="Header">
						<h3>Jogos</h3>
						<Link to="/jogos">Ir</Link>
					</div>

					<div className="Projeto">
						<TicTacToe />
					</div>

				</div>
			</div>
		</div>
	);
}
