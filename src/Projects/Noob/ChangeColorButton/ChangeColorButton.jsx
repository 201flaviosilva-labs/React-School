import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

export default function ChangeColorButton() {
	const [color, setColor] = useState("#ff0000");

	const handleClick = () => {
		setColor(color === "#ff0000" ? "#00ff00" : "#ff0000");
	};

	return (
		<NoobProject title="Change Color Button" className="NoobChangeColorButton">
			<button
				onClick={handleClick}
				style={{ backgroundColor: color, }}>
				{color === "#ff0000" ? "Red" : "Green"}
			</button>
		</NoobProject>
	)
}
