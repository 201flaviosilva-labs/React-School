import React, { useState, useEffect } from 'react';
import ReactRout from "./ReactRout";
import { FadeLoader } from "react-spinners";

import "./style.css";

export default function Main() {
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => { setIsLoad(true); }, []);

	return (
		<main className="main">
			{isLoad
				? <ReactRout />
				: <div className="InitialLoader">
					<FadeLoader color={"#ffffff"} loading={isLoad} />
				</div>}
		</main>
	)
}
