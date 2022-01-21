import React from 'react';

export default function ListMovies({ moviesList }) {
	const styles = {
		display: "flex",
		alignItems: "center",
		marginBottom: "10px",
	};
	const styleSpanMovies = { fontHeight: "bold" };

	return (
		<ul>
			{moviesList.map(m =>
				<li style={styles} key={Math.floor(Math.random() * 1000000)}>
					<img src={m.artworkUrl100} alt="Movie Img" />
					<div>
						<p style={styles}><span style={{ color: "Green", marginLeft: "10px" }}>Nome: </span> <span style={styleSpanMovies}>{m.trackName}</span></p>
						<p style={styles}><span style={{ color: "Yellow", marginLeft: "10px" }}>Artista: </span> <span style={styleSpanMovies}>{m.artistName}</span></p>
						<p style={styles}><span style={{ color: "Red", marginLeft: "10px" }}>Genero: </span> <span style={styleSpanMovies}>{m.primaryGenreName}</span></p>
					</div>
				</li>
			)}
		</ul>
	)
}
