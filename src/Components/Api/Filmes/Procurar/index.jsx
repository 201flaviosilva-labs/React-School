import React from 'react';

export default function Procurar({ search, setSearch }) {
	return (
		<label>
			Filme:
			<input
				placeholder="Filme"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</label>
	)
}
