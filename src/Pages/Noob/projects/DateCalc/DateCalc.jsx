import React from "react";

import { useDateCalc } from "./useDateCalc";

import NoobProject from "../../components/NoobProject";
import Output from "./components/Output";

import "./style.min.css";

export default function DateCalc() {
	const {
		date, setDate,
		milliseconds, seconds,
		minutes, hours,
		days, weeksDay,
		weeks, months, years
	} = useDateCalc();

	return (
		<NoobProject title="Calculador Data" className="NoobDateCalc">
			<input
				type="datetime-local"
				placeholder="Date"
				title="Date"
				value={date}
				onChange={e => setDate(e.target.value)}
			/>

			<div className="NoobDateCalcOutput">
				<Output label="Milissegundos" out={milliseconds} />
				<Output label="Segundos" out={seconds} />
				<Output label="Minutos" out={minutes} />
				<Output label="Horas" out={hours} />
				<Output label="Dias" out={days} />
				<Output label="Semanas" out={weeks} />
				<Output label="Semanas do dia" out={weeksDay} />
				<Output label="Meses" out={months} />
				<Output label="Anos" out={years} />
			</div>
		</NoobProject>
	);
}
