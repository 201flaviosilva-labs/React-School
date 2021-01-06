import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/basicos">Básicos</Link></li>
				{/* <li><Link to="/medios">Médios</Link></li> */}

				{/* <li><Link to="/avancado">Avancado</Link></li> */}
				<li><Link to="/jogos">Jogos</Link></li>
				<li><Link to="/apis">Apis</Link></li>
			</ul>
		</nav>
	)
}
