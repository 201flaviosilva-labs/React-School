import React from 'react';
import { Link } from "react-router-dom";

import Counter2 from "../../Components/Basicos/Counter2";
import Weather from "../../Components/Api/Weather";

import "./Style.min.css";

export default function Home() {

	return (
		<div className="HomeContainer">
			<h1>React School</h1>

			<div className="Main">
				<div className="ExemploProjeto">
					<div className="Header">
						<h2>Básicos</h2>
						<Link to="/basicos">Ir</Link>
					</div>

					<div className="Projeto">
						<Counter2 />
					</div>
				</div>

				<div className="ExemploProjeto">
					<div className="Header">
						<h2>Jogos</h2>
						<Link to="/jogos">Ir</Link>
					</div>

					<div className="Projeto">

					</div>

				</div>

				<div className="ExemploProjeto">
					<div className="Header">
						<h2>Apis</h2>
						<Link to="/apis">Ir</Link>
					</div>

					<div className="Projeto">
						<Weather />
					</div>

				</div>
			</div>
		</div>
	);
}
