import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/basicos">Básicos</Link></li>
				<li><Link to="/medios">Médios</Link></li>

				<li><Link to="/">Difíceis</Link></li>
				<li><Link to="/">Jogos</Link></li>
				<li><Link to="/">Apis</Link></li>
			</ul>
		</nav>
	)
}
