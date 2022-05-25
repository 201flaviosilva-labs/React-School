import React from "react";
import { Provider, atom, useAtom } from "jotai";
import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.css";

const textAtom = atom("hello");
const textLenAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

function Input() {
	const [text, setText] = useAtom(textAtom);
	return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

function CharCount() {
	const [len] = useAtom(textLenAtom);
	return <div>Comprimento: {len}</div>;
};

function Uppercase() {
	const [uppercase] = useAtom(uppercaseAtom);
	return <div>Maiúsculas: {uppercase}</div>;
};

export default function AtomMagicWord() {
	return (
		<NoobProject title="Atom Magic Word" className="NoobAtomMagicWord">
			<Provider>
				<Input />
				<CharCount />
				<Uppercase />
			</Provider>
		</NoobProject>
	);
}
