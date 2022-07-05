import React from "react";
import { FaGitlab } from "react-icons/fa";

export default function RepoLink() {
	return (
		<a
			href="https://gitlab.com/201flaviosilva/ReactSchool"
			rel="noreferrer"
			target="_blank"
			title="GitLab"
			id="header-gitlab-link"
		>
			<FaGitlab size={25} />
		</a>
	);
}
