import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./style.min.css";

export default function Modal({ children, setIsVisible }) {

	return (
		<div className="ModalContainer">
			<button className="CloseIcon" onClick={() => setIsVisible(false)}><AiOutlineCloseCircle /></button>
			{children}
		</div>
	)
}
