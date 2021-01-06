import React from 'react';

export default function Listar({ listMovies }) {
	const styles = {
		display: "flex",
		alignItems: "center"
	};
	const styleSpanMovies = { fontHeight: "bold" };
	return (
		<ul>
			{listMovies.map(m => <li style={styles} key={Math.floor(Math.random() * 1000000)}>
				<img src={m.artworkUrl100} alt="Movie Img" />
				<div>
					<p style={styles}><span style={{ color: "Red" }}>Nome: </span> <span style={styleSpanMovies}>{m.trackName}</span></p>
					<p style={styles}><span style={{ color: "Green" }}>Artista: </span> <span style={styleSpanMovies}>{m.artistName}</span></p>
					<p style={styles}><span style={{ color: "Blue" }}>Genero: </span> <span style={styleSpanMovies}>{m.primaryGenreName}</span></p>
				</div>
			</li>
			)}
		</ul>
	)
}
