import React from "react";

export default function Button({ onClick, label }) {
	return (
		<button data-testid="counter-button" onClick={onClick}>
			<span>{label}</span>
		</button>
	);
}
