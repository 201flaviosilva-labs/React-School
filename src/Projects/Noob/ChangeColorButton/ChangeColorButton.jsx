import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";
import { InputLabel, Checkbox } from "@mui/material";

export function camelCaseToSpaces(str) { return str.replace(/\B([A-Z])\B/g, " $1"); }

export default function ChangeColorButton() {
	const [color, setColor] = useState("#ff0000");
	const text = color === "#ff0000" ? "Red" : "Blue";

	const handleClick = () => {
		setColor(color === "#ff0000" ? "#0000ff" : "#ff0000");
	};

	return (
		<NoobProject title="Change Color Button" className="NoobChangeColorButton">
			<button
				onClick={handleClick}
				style={{ backgroundColor: color, }}>
				{text}
			</button>

			<InputLabel
				htmlFor="ChangeColorButton-checkbox"
			>
				<Checkbox
					id="ChangeColorButton-checkbox"
					checked={color !== "#ff0000"}
					onChange={handleClick}
				/> {text}
			</InputLabel>


		</NoobProject>
	);
}
