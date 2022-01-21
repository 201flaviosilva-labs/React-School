import React, { Suspense } from "react";
import Loading from "./Loading";

import "./style.css";

const ReactRout = React.lazy(() => import("./ReactRout"));

export default function Main() {
	return (
		<main className="MainContainer">
			<Suspense fallback={<Loading />}>
				<ReactRout />
			</Suspense>
		</main>
	)
}
