import React from "react";

export default function NoobProject({ title, children, className }) {
	return (
		<div title={title} className="NoobProject">
			<div className="NoobProjectHeader">
				<h2>{title}</h2>
			</div>
			<div className={`NoobProjectMain ${className}`}>{children}</div>
		</div>
	);
}
