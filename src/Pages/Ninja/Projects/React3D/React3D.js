import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Stats } from "@react-three/drei"; // https://github.com/pmndrs/drei // https://drei.pmnd.rs
import { Physics } from "@react-three/cannon";

import Box from "./Box";
import BoxPhysics from "./BoxPhysics";
import Plane from "./Plane";

import "./style.css";

export default function React3D() {
	const style = {
		position: "relative",
		top: "10px",
		width: "100%",
		textAlign: "center",
		textShadow: "0 0 4px red",
	};

	const y = 2;

	return (
		<div className="React3DContainer">
			<h2 style={style}>React Three Fiber</h2>

			<Canvas>
				{/* Camera */}
				<OrbitControls />

				{/* Light */}
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />

				{/* Boxs */}
				<Box position={[-1, y, 0]} />
				<Box position={[1, y, 0]} />

				{/* Physics */}
				<Physics>
					<BoxPhysics />
					<Plane />
				</Physics>

				{/* Background */}
				<Stars />

				{/* Helps */}
				<axesHelper />
				<gridHelper />
				<Stats />
			</Canvas>
		</div>
	);
}
