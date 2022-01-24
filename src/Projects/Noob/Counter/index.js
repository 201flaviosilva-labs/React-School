import React, { useState, useEffect } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";
import "./style.min.css";

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
					<button onClick={() => setNum(Num - 100)}>-100</button>
					<button onClick={() => setNum(Num - 10)}>-10</button>
					<button onClick={() => setNum(Num - 1)}>-1</button>
					<span>{Num}</span>
					<button onClick={() => setNum(Num + 10)}>+10</button>
					<button onClick={() => setNum(Num + 1)}>+1</button>
					<button onClick={() => setNum(Num + 100)}>+100</button>
				</div>
			</div>
		</NoobProject>
	);
}
