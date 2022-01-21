import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
	const [page, setPage] = useState(useLocation().pathname);
	const backgroundColor = (condition) => condition ? { backgroundColor: "green" } : { backgroundColor: "white" };

	return (
		<nav>
			<ul>
				<li>
					<Link
						to="/"
						style={backgroundColor(page === "/")}
						onClick={() => { setPage("/") }}
					>Home</Link>
				</li>

				<li>
					<Link
						to="/noob"
						style={backgroundColor(page === "/noob")}
						onClick={() => { setPage("/noob") }}
					>Noob</Link>
				</li>

				<li>
					<Link
						to="/ninja"
						style={backgroundColor(page === "/ninja")}
						onClick={() => { setPage("/ninja") }}
					>Ninja</Link>
				</li>

				{/* <li>
					<Link
						to="/mestre"
						style={backgroundColor(page === "/master")}
						onClick={() => { setPage("/master") }}
					>Mestre</Link>
				</li> */}

				<li>
					<Link
						to="/jogos"
						style={backgroundColor(page === "/jogos")}
						onClick={() => { setPage("/jogos") }}
					>Jogos</Link>
				</li>

			</ul>
		</nav>
	)
}
