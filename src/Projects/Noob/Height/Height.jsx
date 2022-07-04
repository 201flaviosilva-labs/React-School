import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.min.css";

export default function Height() {
	const [n, setN] = useState("");
	const swal = withReactContent(Swal);

	function showHeight() {
		swal.fire({
			title: <p>{n && !isNaN(Number(n)) ? `Tua altura é: ${Number(n) / 100} metros.` : "Eror 404!!"}</p>,
			icon: "success",
			confirmButtonText: "Incrível",
		});
	}

	return (
		<NoobProject title="Altura" className="NoobHeight">
			<label htmlFor={"getHeightInput"}>Escreve a tua altura
				<input
					id="getHeightInput"
					type="number"
					name="heightInput"
					value={n}
					onChange={(e) => setN(e.target.value)} /> cm.
			</label>
			<button onClick={showHeight}>Calcular</button>
		</NoobProject>
	);
}