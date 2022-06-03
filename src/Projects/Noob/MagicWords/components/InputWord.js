import React from "react";

export default function InputWord({ text, setText }) {
	return (
		<input
			type="text"
			placeholder="Alguma Coisa"
			title="Alguma Coisa"
			value={text}
			onChange={(e) => setText(e.target.value)} />
	);
}
