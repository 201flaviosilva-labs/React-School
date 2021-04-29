import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import CameraControls from "./CameraControls";
import Box from "./Box";

import "./style.min.css";

export default function React3D() {
	const style = {
		position: "fixed",
		top: "10px",
		width: "100%",
		textAlign: "center",
		textShadow: "0 0 4px red",
	};

	extend({ OrbitControls });

	return (
		<div className="React3DContainer">
			<h2 style={style}>React Three Fiber</h2>

			<Canvas>
				<CameraControls />

				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />

				<Box position={[-1, 0, 0]} />
				<Box position={[1, 0, 0]} />
			</Canvas>
		</div>
	)
}
