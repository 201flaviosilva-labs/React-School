import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function NavBar() {
	const [page, setPage] = useState("Home");
	return (
		<nav>
			<ul>
				<li>
					<Link
						to="/"
						style={page === "Home" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Home") }}
					>Home</Link>
				</li>

				<li>
					<Link
						to="/basicos"
						style={page === "Basicos" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Basicos") }}
					>Básicos</Link>
				</li>

				{/* <li>
					<Link
						to="/medios"
						style={page === "Medios" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Medios") }}
					>Médios</Link>
				</li>

				<li>
					<Link
						to="/avancado"
						style={page === "Avancado" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Avancado") }}
					>Avancado</Link>
				</li> */}

				<li>
					<Link
						to="/jogos"
						style={page === "Jogos" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Jogos") }}
					>Jogos</Link>
				</li>

				<li>
					<Link
						to="/apis"
						style={page === "Apis" ? { backgroundColor: "red" } : { backgroundColor: "white" }}
						onClick={() => { setPage("Apis") }}
					>Apis</Link>
				</li>
			</ul>
		</nav>
	)
}
