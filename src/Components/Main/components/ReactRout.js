import React from "react";
import { Routes, Route } from "react-router-dom";

import pages from "../../../pages";

export default function ReactRout() {
	return (
		<Routes>
			{
				pages.map(({ path, Component, exact }, index) => {
					return (
						<Route
							key={index}
							path={path}
							element={<Component />}
							exact={exact} />
					);
				})
			}
		</Routes>
	);
}
