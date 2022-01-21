import { useState } from "react";

import InputWord from "./InputWord";
import Output from "./Output";

export default function MagicWords() {
	const [text, setText] = useState("Alguma Coisa");

	return (
		<div className="BasicProjectContainer ContainerBasicCenter">
			<h2>Magic Words</h2>
			<InputWord text={text} setText={setText} />

			<Output label="Word" finalWord={text} />
			<Output label="Yoda" finalWord={text.split(" ").reverse().join(" ")} />
			<Output label="Inverso" finalWord={text.split("").reverse().join("")} />
			<Output label="Pequeno" finalWord={text.toLowerCase()} />
			<Output label="Grande" finalWord={text.toUpperCase()} />
			<Output label="Espaços exagerados" finalWord={text.trim()} />
			<Output label="Nada de espaços" finalWord={text.split("")} />
			<Output label="Só números" finalWord={text.replace(/[^0-9]/g, "")} />
			<Output label="Só letras" finalWord={text.replace(/[^a-zA-Z]/g, "")} />
			<Output label="Num. Letras" finalWord={text.length} />
			<Output label="Num. Palavras" finalWord={text.trim().split(/\s+/).length} />
		</div>
	)
}
