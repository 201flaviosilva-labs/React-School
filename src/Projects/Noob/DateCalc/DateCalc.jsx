import React, { useState, useEffect } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";
import Output from "./components/Output";

import "./style.min.css";

export default function DateCalc() {
	const dateNow = new Date();

	const [date, setDate] = useState(dateNow);

	const [milliseconds, setMilliseconds] = useState();
	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();
	const [days, setDays] = useState();
	const [weeksDay, setWeeksDay] = useState();
	const [weeks, setWeeks] = useState();
	const [months, setMonths] = useState();
	const [years, setYears] = useState();

	const [dataChoice, setDataChoice] = useState(new Date(date));
	useEffect(() => setDataChoice(new Date(date)), [date]);

	useEffect(() => {
		const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

		setMilliseconds(Math.floor(dateNow - dataChoice));
		setYears(dateNow.getFullYear() - dataChoice.getFullYear());
		setWeeksDay(weekDays[dataChoice.getDay()]);
	}, [dataChoice]);

	useEffect(() => setSeconds(Math.floor(milliseconds / 1000)), [milliseconds]);
	useEffect(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
	useEffect(() => setHours(Math.floor(minutes / 60)), [minutes]);
	useEffect(() => setDays(Math.floor(hours / 24)), [hours]);
	useEffect(() => setWeeks(Math.floor(days / 7)), [days]);
	useEffect(() => setMonths(years * 12 + dateNow.getMonth() - dataChoice.getMonth()), [dataChoice, dateNow, years]);

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
