import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Plane(props) {
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
