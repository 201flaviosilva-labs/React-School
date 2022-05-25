import React, { useState } from "react";
import Modal from "../../Components/Modal";

export default function GameComponent({ label, game }) {
	const [isGameVisible, setIsGameVisible] = useState(false);
	return (
		<>
			<button onClick={() => setIsGameVisible(true)}>{label}</button>
			{isGameVisible && <Modal setIsVisible={setIsGameVisible}> {game} </Modal>}
		</>
	)
}
