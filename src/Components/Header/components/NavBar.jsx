import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import pages from "../../../pages";

export default function NavBar() {
	const [page, setPage] = useState(useLocation().pathname);
	const backgroundColor = (condition) => condition ? { backgroundColor: "green" } : { backgroundColor: "white" };

	return (
		<nav>
			<ul>
				{pages.map(({ name, path }, index) => (
					<li key={index}>
						<Link
							to={path}
							style={backgroundColor(page === path)}
							onClick={() => { setPage(path); }}
						>{name}</Link>
					</li>
				))
				}
			</ul>
		</nav>
	);
}
