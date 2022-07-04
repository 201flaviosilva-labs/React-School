import React from "react";
import { FadeLoader } from "react-spinners";

export default function Loading() {
	return (
		<div className="InitialLoader">
			<FadeLoader color={"#ffffff"} loading={true} />
		</div>
	);
}
