import React, { useState, useEffect } from 'react';

import "./style.min.css";

export default function DateCalc() {
	const dateNow = new Date();
	const getMonth = dateNow.getMonth() + 1 >= 10 ? dateNow.getMonth() + 1 : "0" + dateNow.getMonth() + 1;
	const getDay = dateNow.getDate() >= 10 ? dateNow.getDate() : "0" + dateNow.getDate();
	const getHora = dateNow.getHours() >= 10 ? dateNow.getHours() : "0" + dateNow.getHours();
	const getMin = dateNow.getMinutes() >= 10 ? dateNow.getMinutes() : "0" + dateNow.getMinutes();

	const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

	const [date, setDate] = useState(
		`${dateNow.getFullYear()}-${getMonth}-${getDay}T${getHora}:${getMin}`
	);

	const [milliseconds, setMilliseconds] = useState();
	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();
	const [days, setDays] = useState();
	const [weeksDay, setWeeksDay] = useState();
	const [weeks, setWeeks] = useState();
	const [months, setMonths] = useState();
	const [years, setYears] = useState();

	let dataChoice = new Date(date);
	useEffect(() => {
		dataChoice = new Date(date);
		setMilliseconds(Math.floor(dateNow - dataChoice));
		setYears(dateNow.getFullYear() - dataChoice.getFullYear());
		setWeeksDay(weekDays[dataChoice.getDay()]);
	}, [date]);

	useEffect(() => setSeconds(Math.floor(milliseconds / 1000)), [milliseconds]);
	useEffect(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
	useEffect(() => setHours(Math.floor(minutes / 60)), [minutes]);
	useEffect(() => setDays(Math.floor(hours / 24)), [hours]);
	useEffect(() => setWeeks(Math.floor(days / 7)), [days]);
	useEffect(() => setMonths(years * 12 + dateNow.getMonth() - dataChoice.getMonth()), [years]);

	return (
		<div className="ContainerBasicCenter">
			<h2>Data</h2>
			<div className="DateCalcContainer">
				<input
					type="datetime-local"
					placeholder="Date"
					title="Date"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>

				<div>
					<p><span>Data</span>: <span>{date.replace("T", " ")}</span></p>
					<p><span>Milissegundos</span>: <span>{milliseconds}</span></p>
					<p><span>Segundos</span>: <span>{seconds}</span></p>
					<p><span>Minutos</span>: <span>{minutes}</span></p>
					<p><span>Horas</span>: <span>{hours}</span></p>
					<p><span>Dias</span>: <span>{days}</span></p>
					<p><span>Dia da Semana</span>: <span>{weeksDay}</span></p>
					<p><span>Semanas</span>: <span>{weeks}</span></p>
					<p><span>Meses</span>: <span>{months}</span></p>
					<p><span>Anos</span>: <span>{years}</span></p>
				</div>
			</div>
		</div>
	)
}
