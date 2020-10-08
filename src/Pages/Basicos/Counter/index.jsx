import React, { useState } from 'react';

export default function Counter() {
	const [n, setN] = useState(0);
	return (
		<>
			<h2>Counter</h2>
			<button onClick={() => setN(n + 1)}>Aumenta</button>
			<h2>{n}</h2>
			<button onClick={() => setN(n - 1)}>Diminui</button>
		</>
	);
}
