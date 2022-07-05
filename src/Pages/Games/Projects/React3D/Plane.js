import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Plane() {
	// eslint-disable-next-line no-unused-vars
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<planeBufferGeometry attach="geometry" args={[10, 10]} />
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	);
}
