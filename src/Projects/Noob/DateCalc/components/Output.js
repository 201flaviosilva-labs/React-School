import React from "react";

export default function Output({ label, out }) {
	return <p><span>{label}</span>: <span>{out}</span></p>;
}
