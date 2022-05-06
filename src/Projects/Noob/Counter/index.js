import React, { useState, useEffect } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";
import "./style.min.css";

import Button from "./components/Button";

export default function Counter() {
	const [Num, setNum] = useState(0);
	const [bgStyle, setBGStyle] = useState({
		backgroundColor: "yellow",
	});

	useEffect(() => {
		if (Num > 0) {
			setBGStyle({ backgroundColor: "green" });
		} else if (Num < 0) {
			setBGStyle({ backgroundColor: "red" });
		} else {
			setBGStyle({ backgroundColor: "yellow" });
		}
	}, [Num]);

	return (
		<NoobProject className="NoobCounter">
			<div className="Container">
				<div className="CounterHeader"><h2>React Counter</h2></div>

				<div style={bgStyle} className="CounterMain">
					<Button
						onClick={() => setNum(Num - 100)}
						label={"-100"}
					/>
					<Button
						onClick={() => setNum(Num - 10)}
						label={"-10"}
					/>
					<Button
						onClick={() => setNum(Num - 1)}
						label={"-1"}
					/>
					<span>{Num}</span>
					<Button
						onClick={() => setNum(Num + 10)}
						label={"+10"}
					/>
					<Button
						onClick={() => setNum(Num + 1)}
						label={"+1"}
					/>
					<Button
						onClick={() => setNum(Num + 100)}
						label={"+100"}
					/>
				</div>
			</div>
		</NoobProject>
	);
}
