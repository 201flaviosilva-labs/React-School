import React, { useState, useEffect } from 'react';

import "./style.min.css";

export default function DateCalc() {
	const dateNow = new Date();
	const getMonth = dateNow.getUTCMonth() + 1;
	const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

	const [date, setDate] = useState(
		`${dateNow.getFullYear()}-${getMonth >= 10 ? getMonth : "0" + getMonth}-${dateNow.getDate() >= 10 ? dateNow.getDate() : "0" + dateNow.getDate()}`
	);

	const [milliseconds, setMilliseconds] = useState();
	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();
	const [days, setDays] = useState();
	const [weeksDay, setWeeksDay] = useState();
	const [weeks, setWeeks] = useState();
	const [years, setYears] = useState();
	const [months, setMonths] = useState();

	useEffect(() => calc(), [date]);

	function calc() {
		const dataChoise = new Date(date);

		const millisecondsCalc = dateNow - dataChoise;
		const secondsCalc = Math.floor(millisecondsCalc / 1000);
		const minutesCalc = Math.floor(secondsCalc / 60);
		const hoursCalc = Math.floor(minutesCalc / 60);
		const daysCalc = Math.floor(hoursCalc / 24);
		const weeksCalc = Math.floor(daysCalc / 7);
		const yearsCalc = dateNow.getUTCFullYear() - dataChoise.getUTCFullYear();
		const monthsCalc = yearsCalc * 12 + dateNow.getUTCMonth() - dataChoise.getUTCMonth();

		setMilliseconds(millisecondsCalc);
		setSeconds(secondsCalc);
		setMinutes(minutesCalc);
		setHours(hoursCalc);
		setDays(daysCalc);
		setWeeks(weeksCalc);
		setMonths(monthsCalc);
		setYears(yearsCalc);
		setWeeksDay(weekDays[dataChoise.getDay()]);
	}

	return (
		<div className="DateCalcContainer">
			<input
				type="date"
				placeholder="Date"
				title="Date"
				value={date}
				onChange={e => setDate(e.target.value)}
			/>

			<p>Data: {date.split("-").reverse().join("/")}</p>
			<p>Milisegundos: {milliseconds}</p>
			<p>Segundos: {seconds}</p>
			<p>Minutos: {minutes}</p>
			<p>Horas: {hours}</p>
			<p>Dias: {days}</p>
			<p>Dia da Semana: {weeksDay}</p>
			<p>Semanas: {weeks}</p>
			<p>Mêses: {months}</p>
			<p>Anos: {years}</p>
		</div>
	)
}
