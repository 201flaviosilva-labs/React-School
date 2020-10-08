import React, { useState, useEffect } from 'react';
import Number from "./Numbers";

export default function Counter() {
	const [n, setN] = useState(0);
	useEffect(() => console.log(n), [n]);

	return (
		<>
			<Number>{n}</Number >
			<br />
			<button onClick={() => { if (n < 5) setN(n + 1) }}>Aumenta</button>
			<button onClick={() => { if (n) setN(n - 1) }}>Diminui</button>
		</>
	);
}
