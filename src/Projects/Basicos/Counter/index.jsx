import React, { useState } from 'react';

import "./style.min.css";

export default function Counter() {
	const [n, setN] = useState(0);
	const styles = { boxShadow: `0 0 20px 2px ${n >= 0 ? "green" : "red"} inset` };
	return (
		<div className="ContainerBasicCenter">
			<h2>Counter</h2>
			<div className="CounterContainer">
				<p style={styles}>{n}</p>
				<div>
					<button onClick={() => setN(n + 1)}>Aumenta + 1</button>
					<button onClick={() => setN(n - 1)}>Diminui - 1</button>
				</div>
			</div>
		</div>
	);
}
