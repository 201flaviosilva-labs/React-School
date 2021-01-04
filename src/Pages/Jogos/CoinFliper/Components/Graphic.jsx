import React from 'react';

export default function Grafico({ Money, numFace, numCrown, numPlays }) {
	return (
		<>
			<h3>Statistics</h3>
			<p>Money: {Money}</p>
			<p style={(numFace < numCrown) ? { backgroundColor: "red" } : { backgroundColor: "green" }}> Face: {numFace}</p>
			<p style={(numCrown < numFace) ? { backgroundColor: "red" } : { backgroundColor: "green" }}>Crown: {numCrown}</p>
			<p>Plays: {numPlays}</p>
		</>
	)
}
