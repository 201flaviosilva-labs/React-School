import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./style.scss";

export default function Modal({ children, setIsVisible }) {
	return createPortal(
		<div className="ModalContainer">
			<button className="CloseIcon" onClick={() => setIsVisible(false)}><AiOutlineCloseCircle /></button>
			{children}
		</div>,
		document.querySelector("#modal-portal") ?? document.body
	);
}
