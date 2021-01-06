import React from 'react';

export default function Procurar({ search, setSearch }) {
	return (
		<label>
			Cidade:
			<input
				placeholder="Filme"
				value={search ? search : "Portugal"}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</label>
	)
}
