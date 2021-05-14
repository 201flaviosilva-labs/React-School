/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from 'react';

import "./style.min.css";

export default function Form() {
	const [name, setName] = useState("");
	const [height, setHeight] = useState(0);
	const [birthDay, setBirthDay] = useState(new Date());
	const [country, setCountry] = useState("");
	const [sex, setSex] = useState("Male");

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Nome: ", name);
		console.log("Height: ", height);
		console.log("BirthDay: ", birthDay);
		console.log("Country: ", country);
		console.log("Sex: ", sex);
	}

	return (
		<div className="FormContainer">
			<marquee direction="left" behavior="alternate"><h1>Eu sou um formulário 🥲</h1></marquee>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome:</span>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>


				<label>
					<span>Altura:</span>
					<input
						type="number"
						placeholder="Height"
						value={height}
						onChange={(e) => setHeight(e.target.value)} />
				</label>


				<label>
					<span>Nascimento:</span>
					<input
						type="date"
						placeholder="Birthday"
						value={birthDay}
						onChange={(e) => setBirthDay(e.target.value)} />
				</label>


				<label>
					<span>Cidade:</span>
					<select value={country} onChange={(e) => setCountry(e.target.value)}>
						<optgroup label="Portugal">
							<option value="Açores" checked>Açores</option>
							<option value="Alentejo">Alentejo</option>
							<option value="Coimbra">Coimbra</option>
							<option value="Lisboa">Lisboa</option>
							<option value="Porto">Porto</option>
						</optgroup>
						<optgroup label="USA">
							<option value="California">California</option>
							<option value="Washington D.C.">Washington D.C.</option>
						</optgroup>
					</select>
				</label>

				<div>
					<h3>Género:</h3>
					<label>
						<input
							type="radio"
							name="sex"
							value="Male"
							checked={sex === "Male"}
							onChange={() => setSex("Male")} />Masculino</label>

					<label>
						<input
							type="radio"
							name="sex"
							value="Fem"
							checked={sex === "Fem"}
							onChange={() => setSex("Fem")} />Feminino</label>

					<label>
						<input
							type="radio"
							name="sex"
							value="Other"
							checked={sex === "Other"}
							onChange={() => setSex("Other")} />Outros</label>
				</div>

				<div>
					<button type="reset">Recomeçar</button>
					<button type="submit">Submeter</button>
				</div>
			</form>
		</div>
	)
}
