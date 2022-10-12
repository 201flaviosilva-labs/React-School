import React from "react";
import { FaGithub } from "react-icons/fa";

export default function RepoLink() {
	return (
		<a
			href="https://github.com/201flaviosilva-labs/React-School"
			rel="noreferrer"
			target="_blank"
			title="GitHub"
			id="header-github-link"
		>
			<FaGithub size={25} />
		</a>
	);
}
