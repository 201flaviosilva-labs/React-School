import React, { useState } from 'react';
import "./style.css";

export default function Todo() {
	const [list, setList] = useState(["React"]);
	const [name, setName] = useState("");

	return (
		<div className="TodoContainder">
			<input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setList(list.concat(name))}>Add</button>
			<ul>
				{list.map(l =>
					<li>
						<p>{l}</p>
						<button onClick={() => setList(list.filter(i => i !== l))}>Remove</button>
					</li>
				)}
			</ul>
		</div>
	)
}
