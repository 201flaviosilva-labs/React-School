import React, { useState, useEffect } from "react";

export function useDateCalc() {
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
	}, [dataChoice, dateNow]);

	useEffect(() => setSeconds(Math.floor(milliseconds / 1000)), [milliseconds]);
	useEffect(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
	useEffect(() => setHours(Math.floor(minutes / 60)), [minutes]);
	useEffect(() => setDays(Math.floor(hours / 24)), [hours]);
	useEffect(() => setWeeks(Math.floor(days / 7)), [days]);
	useEffect(() => setMonths(years * 12 + dateNow.getMonth() - dataChoice.getMonth()), [dataChoice, dateNow, years]);

	return {
		dateNow,
		date, setDate,
		milliseconds, setMilliseconds,
		seconds, setSeconds,
		minutes, setMinutes,
		hours, setHours,
		days, setDays,
		weeksDay, setWeeksDay,
		weeks, setWeeks,
		months, setMonths,
		years, setYears,
		dataChoice, setDataChoice
	};
}
