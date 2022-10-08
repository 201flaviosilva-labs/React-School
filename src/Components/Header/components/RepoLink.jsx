import React from "react";
import { FaGitlab } from "react-icons/fa";

export default function RepoLink() {
	return (
		<a
			href="https://github.com/201flaviosilva/React-School"
			rel="noreferrer"
			target="_blank"
			title="GitLab"
			id="header-gitlab-link"
		>
			<FaGitlab size={25} />
		</a>
	);
}
