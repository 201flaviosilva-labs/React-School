import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.min.css";

export default function MemeGenerator() {
	const defaultImage = "https://i.imgflip.com/26am.jpg"; // https://imgflip.com/api
	const [imageURL, setImageURL] = useState(defaultImage);

	const [text1, setText1] = useState("JavaScript");
	const [text2, setText2] = useState(" ");


	return (
		<NoobProject title="Meme Generator" className="NoobMemeGenerator">
			<div className="From">
				<label htmlFor="texto1">
					<span>Texto 1:</span>
					<input
						type="text"
						placeholder="Texto 1"
						value={text1}
						onChange={e => setText1(e.target.value)}
						id="texto1" />
				</label>

				<label htmlFor="texto2">
					<span>Texto 2:</span>
					<input
						type="text"
						placeholder="Texto 2"
						value={text2}
						onChange={e => setText2(e.target.value)}
						id="texto2" />
				</label>

				<label htmlFor="img-url" title="Image URL (Link)">
					<span>Img URL:</span>
					<input
						type="url"
						placeholder="Link da Imagem"
						value={imageURL}
						onChange={e => setImageURL(e.target.value)}
						id="img-url" />
				</label>
			</div>

			<div className="Meme">
				<img src={imageURL} alt="Imagem do Meme" />
				<p>{text1}</p>
				<p>{text2}</p>
			</div>

		</NoobProject>
	)
}
