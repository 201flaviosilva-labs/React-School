import React from 'react';
import { BiCloudLightRain } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa";
import { FiCloudDrizzle } from "react-icons/fi";
import { IoThunderstorm, IoSnow } from "react-icons/io5";
import { GiSmokeBomb, GiTornado } from "react-icons/gi";
import { RiMistFill } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";

export default function Card({ result }) {
	const size = 250;

	return (
		<div className="WeatherCardContainer">
			<h1>{result}</h1>
			{ result === "Clear" && <FaRegSun size={size} />}
			{ result === "Clouds" && <WiDayCloudy size={size} />}
			{ result === "Rain" && <BiCloudLightRain size={size} />}
			{ result === "Thunderstorm" && <IoThunderstorm size={size} />}
			{ result === "Drizzle" && <FiCloudDrizzle size={size} />}
			{ result === "Snow" && <IoSnow size={size} />}
			{ result === "Smoke" && <GiSmokeBomb size={size} />}
			{ result === "Tornado" && <GiTornado size={size} />}

			{ (result === "Mist" || result === "Haze" || result === "Dust" || result === "Fog" || result === "Sand" || result === "Ash" || result === "Squall") && <RiMistFill size={size} />}
		</div>
	)
}
