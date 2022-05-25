import React, { Suspense } from "react";
import Loading from "./components/Loading";

import "./style.css";

const ReactRout = React.lazy(() => import("./components/ReactRout"));

export default function Main() {
	return (
		<main className="MainContainer">
			<Suspense fallback={<Loading />}>
				<ReactRout />
			</Suspense>
		</main>
	)
}
