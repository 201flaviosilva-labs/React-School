import React from "react";
import { Link } from "react-router-dom";

import Counter from "../Noob/projects/Counter";
import TicTacToe from "../Games/Projects/TicTacToe";

import "./Style.min.css";

export default function Home() {

	return (
		<div className="HomeContainer">
			<h2>Home</h2>

			<div className="Main">
				<div className="ExemploProjeto">
					<div className="Header">
						<h3>Noob</h3>
						<Link to="/noob">Ir</Link>
					</div>

					<div className="Projeto">
						<Counter />
					</div>
				</div>

				<div className="ExemploProjeto">
					<div className="Header">
						<h3>Jogos</h3>
						<Link to="/games">Ir</Link>
					</div>

					<div className="Projeto">
						<TicTacToe />
					</div>

				</div>
			</div>
		</div>
	);
}
