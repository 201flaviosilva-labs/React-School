import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function CameraControls() {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	const controls = useRef();
	useFrame(state => controls.current.update());
	return <orbitControls ref={controls} args={[camera, domElement]} />;
};
