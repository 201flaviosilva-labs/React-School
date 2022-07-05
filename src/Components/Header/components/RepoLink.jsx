import React from "react";
import { FaGitlab } from "react-icons/fa";

const style = {
	position: "fixed",
	top: 10,
	right: 10,
};

export default function RepoLink() {
	return (
		<a
			href="https://gitlab.com/201flaviosilva/ReactSchool"
			rel="noreferrer"
			target="_blank"
			style={style}
			title="GitLab"
		>
			<FaGitlab size={25} />
		</a>
	);
}
