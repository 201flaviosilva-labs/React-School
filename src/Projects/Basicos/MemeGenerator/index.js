import React, { useState } from "react";
import "./style.min.css";

export default function MemeGenerator() {
	const defaultImage = "https://i.imgflip.com/26am.jpg"; // https://imgflip.com/api
	const [imageURL, setImageURL] = useState(defaultImage);

	const [text1, setText1] = useState("JavaScript");
	const [text2, setText2] = useState(" ");


	return (
		<div className="memeGeneratorContainer">
			<h1>Meme Generator</h1>

			<div className="From">
				<label htmlFor="texto1">
					<span>Texto:</span>
					<input
						type="text"
						placeholder="Texto 1"
						value={text1}
						onChange={e => setText1(e.target.value)}
						id="texto1" />
				</label>

				<label htmlFor="texto2">
					<span>Texto:</span>
					<input
						type="text"
						placeholder="Texto 2"
						value={text2}
						onChange={e => setText2(e.target.value)}
						id="texto2" />
				</label>

				<label htmlFor="img-url">
					<span>Imagem URL (Link):</span>
					<input
						type="url"
						placeholder="Link da Imagem"
						value={imageURL}
						onChange={e => setImageURL(e.target.value)}
						id="img-url" />
				</label>

				{/* <button>Download</button> */}
			</div>

			<div className="Meme">
				<img src={imageURL} alt="Imagem do Meme" />
				<p>{text1}</p>
				<p>{text2}</p>
			</div>

		</div>
	)
}
