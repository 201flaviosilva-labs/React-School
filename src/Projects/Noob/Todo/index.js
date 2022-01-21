import React, { useState } from 'react';

import "./style.min.css";

export default function Todo() {
	const [list, setList] = useState(["0 - React"]);
	const [name, setName] = useState("");

	function organize() {
		const virtualList = list.map(item => item).sort();
		setList(virtualList);
	}

	function removeRepeat() {
		const virtualList = list.filter(
			(item, i) =>
				list.indexOf(item) === i
		);
		setList(virtualList);
	}

	return (
		<div className="BasicProjectContainer TodoContainerBasic ContainerBasicCenter">
			<h2>To Do List</h2>

			<div className="Input">
				<input
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button
					onClick={() => setList(list.concat(name))}>
					Adicionar
				</button>
			</div>

			<ul>
				{list.map((l, index) =>
					<li key={index}>
						<p>{l}</p>
						<button onClick={() => setList(list.filter(i => i !== l))}>Remover</button>
					</li>
				)}
			</ul>

			<div className="ActionBtns" style={list.length ? { display: "flex" } : { display: "none" }}>
				<button onClick={removeRepeat}>Rem. Repetidos</button>
				{/* <button onClick={() => setList(list.filter(i => i !== l))}>Rem. Primeiro</button> */}
				{/* <button onClick={() => setList(list.filter(i => i !== l))}>Rem. Ultimo</button> */}
				<button onClick={organize}>Org. Alfabeticamente</button>
			</div>
		</div>
	)
}
