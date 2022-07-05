import React from "react";

export default function Output({ label, out }) {
	return <p><span>{label}</span>: <span>{String(out)}</span></p>;
}
