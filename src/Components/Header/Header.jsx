import React from "react";
import NavBar from "./components/NavBar";
import RepoLink from "./components/RepoLink";

import "./Style.min.css";

export default function Header() {
	return (
		<header>
			<RepoLink />
			<h1>React School</h1>
			<NavBar />
		</header>
	);
}
