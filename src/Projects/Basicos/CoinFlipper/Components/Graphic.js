import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const dataDefault = {
	labels: ["Face", "Crown"],
	datasets: [
		{
			label: "Faces VS Crowns",
			data: [0, 0],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
			],
			borderWidth: 1,
		},
	],
};

const options = {
	responsive: true,
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

export default function Grafico({ numFace, numCrown }) {
	const [data, setData] = useState(dataDefault);

	useEffect(() => {
		setData({
			labels: ["Face", "Crown"],
			datasets: [
				{
					label: "Faces VS Crowns",
					data: [numFace, numCrown],
					backgroundColor: [
						"rgba(255, 0, 0, 0.2)",
						"rgba(0, 255, 0, 0.2)",
					],
					borderColor: [
						"rgba(255, 0, 0, 1)",
						"rgba(0, 255, 0, 1)",
					],
					borderWidth: 1,
				},
			],
		});
	}, [numCrown, numFace]);

	return (
		<>
			<Bar data={data} options={options} height={200} width={300} />
		</>
	)
}
