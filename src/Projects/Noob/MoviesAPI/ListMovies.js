export default function ListMovies({ moviesList }) {
	return (
		<ul>
			{moviesList.map((m, index) => {
				return (
					<li key={index}>
						<img src={m.artworkUrl100} alt="Imagem Filme" />
						<div>
							<p><span style={{ color: "Green", marginLeft: "10px" }}>Nome: </span> <span>{m.trackName}</span></p>
							<p><span style={{ color: "Yellow", marginLeft: "10px" }}>Realizador: </span> <span>{m.artistName}</span></p>
							<p><span style={{ color: "Red", marginLeft: "10px" }}>Genero: </span> <span>{m.primaryGenreName}</span></p>
						</div>
					</li>
				)
			}
			)}
		</ul>
	)
}
