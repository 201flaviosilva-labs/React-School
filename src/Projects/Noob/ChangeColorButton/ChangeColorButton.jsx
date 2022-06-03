import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";
import { InputLabel, Checkbox } from "@mui/material";

export default function ChangeColorButton() {
	const [color, setColor] = useState("#ff0000");
	const text = color === "#ff0000" ? "Red" : "Green";

	const handleClick = () => {
		setColor(color === "#ff0000" ? "#00ff00" : "#ff0000");
	};

	return (
		<NoobProject title="Change Color Button" className="NoobChangeColorButton">
			<button
				onClick={handleClick}
				style={{ backgroundColor: color, }}>
				{text}
			</button>

			<InputLabel>
				<Checkbox
					checked={color !== "#ff0000"}
					onChange={handleClick}
				/> {text}
			</InputLabel>


		</NoobProject>
	)
}
