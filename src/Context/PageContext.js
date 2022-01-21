import React, { createContext, useContext, useEffect, useState } from "react";

const PageContext = createContext();

export default function PageProvider({ children }) {
	const [page, setPage] = useState("Home");

	useEffect(() => {
		console.log(page);
	}, [page]);

	return (
		<PageContext.Provider value={{ page, setPage }}>
			{children}
		</PageContext.Provider>
	)
}

export function usePage() {
	const context = useContext(PageContext);
	const { page, setPage } = context;
	return { page, setPage };
}
