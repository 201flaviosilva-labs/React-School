import React, { useState } from "react";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

import "./style.min.css";

export default function Carousel({ children }) {
	const [indexComp, setIndexComp] = useState(0);

	return (
		<div className="CarouselContainer">
			<button
				onClick={() => setIndexComp(indexComp > 0 ? indexComp - 1 : 0)}
				className="btnIndexComp"
				style={{ opacity: indexComp === 0 ? 0.5 : 1 }}>
				<TiArrowLeftOutline />
			</button>

			<div>
				{children[indexComp]}
			</div>

			<button
				onClick={() => setIndexComp(indexComp > children.length - 1 ? indexComp + 1 : children.length - 1)}
				className="btnIndexComp"
				style={{ opacity: indexComp === children.length - 1 ? 0.5 : 1 }}>
				<TiArrowRightOutline />
			</button>
		</div>
	)
}
