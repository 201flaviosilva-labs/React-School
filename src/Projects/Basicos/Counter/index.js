import React, { useState, useEffect } from "react";
import "./style.css";

export default function Counter() {
	const [Num, setNum] = useState(0);
	const [StyleBackGroun, setStyleBackGroun] = useState({
		backgroundColor: "yellow",
	});

	useEffect(() => {
		if (Num > 0) {
			setStyleBackGroun({ backgroundColor: "green" });
		} else if (Num < 0) {
			setStyleBackGroun({ backgroundColor: "red" });
		} else {
			setStyleBackGroun({ backgroundColor: "yellow" });
		}
	}, [Num]);

	return (
		<div className="CounterContainer">
			<div className="container">
				<div className="CounterHeader">
					<h2>React Counter</h2>
				</div>
				<div style={StyleBackGroun} className="CounterMain">
					<button onClick={() => setNum(Num - 100)}>-100</button>
					<button onClick={() => setNum(Num - 10)}>-10</button>
					<button onClick={() => setNum(Num - 1)}>-1</button>
					<span>{Num}</span>
					<button onClick={() => setNum(Num + 10)}>+10</button>
					<button onClick={() => setNum(Num + 1)}>+1</button>
					<button onClick={() => setNum(Num + 100)}>+100</button>
				</div>
			</div>
		</div>
	);
}
