import React from "react";

export default function Button(props) {
	return (
		<button onClick={() => props.children == "-" ? props.setN(n - 1) : props.setN(n + 1)}>{props.n}{props.children == "-" ? "-" : "+"}1</button>
	)
}
