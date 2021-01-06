import React, { useState, useEffect } from 'react';

export default function MagicWords() {
	const [word, setWord] = useState("Alguma Coisa");
	const styles = {
		border: "1px solid black"
	}
	return (
		<div style={styles} className="ContainerBasicCenter">
			<input
				style={{ width: "90%" }}
				type="text"
				placeholder="Alguma Coisa"
				title="Alguma Coisa"
				value={word}
				onChange={e => setWord(e.target.value)} />

			<p><span>Original</span>: <span>{word}</span></p>
			<p><span>Yoda</span>: <span>{word.split(" ").reverse().join(" ")}</span></p>
			<p><span>Inverso</span>: <span>{word.split("").reverse().join("")}</span></p>
			<p><span>Pequeno</span>: <span>{word.toLowerCase()}</span></p>
			<p><span>Grande</span>: <span>{word.toUpperCase()}</span></p>
			<p><span>Espaços exagerados</span>: <span>{word.trim()}</span></p>
			<p><span>Nada de espaços</span>: <span>{word.split("")}</span></p>
			<p><span>Só números</span>: <span>{word.replace(/[^0-9]/g, '')}</span></p>
			<p><span>Só letras</span>: <span>{word.replace(/[^a-zA-Z]/g, '')}</span></p>
		</div>
	)
}
