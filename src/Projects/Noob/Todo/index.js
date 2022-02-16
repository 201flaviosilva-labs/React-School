import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.min.css";

export default function Todo() {
	const [list, setList] = useState(["React"]);
	const [name, setName] = useState("");

	function organize() {
		const sortList = list.map(item => item).sort();
		setList(sortList);
	}

	function removeRepeat() {
		const virtualList = list.filter(
			(item, i) =>
				list.indexOf(item) === i
		);
		setList(virtualList);
	}

	return (
		<NoobProject title="To Do List" className="NoobTodoApp">
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
				{list?.map((l, index) => {
					return (
						<li key={index}>
							<span>{index + 1} - {l}</span>
							<button onClick={() => setList(list.filter(i => i !== l))}>Remover</button>
						</li>
					)
				}
				)}
			</ul>

			<div className="ActionBtns" style={list.length ? { display: "flex" } : { display: "none" }}>
				<button onClick={removeRepeat}>Rem. Repetidos</button>
				{/* <button onClick={() => setList(list.filter(i => i !== l))}>Rem. Primeiro</button> */}
				{/* <button onClick={() => setList(list.filter(i => i !== l))}>Rem. Ultimo</button> */}
				<button onClick={organize}>Org. Alfabeticamente</button>
			</div>
		</NoobProject>
	)
}
