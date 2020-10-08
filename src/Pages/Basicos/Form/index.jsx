import React, { useState } from 'react';

import "./style.min.css";

export default function Form() {
	const [name, setName] = useState("");
	const [height, setHeight] = useState(0);
	const [birthDay, setBirthDay] = useState();
	const [country, setCountry] = useState("");
	const [pizza, setPizza] = useState({ chocolate: false, ananas: true, strawberries: false });
	const [sex, setSex] = useState("Male");

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Nome: ", name);
		console.log("Height: ", height);
		console.log("BirthDay: ", birthDay);
		console.log("Country: ", country);
		console.log("Sex: ", sex);
	}

	function handleChange(evt) {
		console.log("beep");
		const value =
			evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		setPizza({
			...pizza,
			[evt.target.name]: value
		});
	}

	return (
		<div className="FormContainer">
			<form onSubmit={handleSubmit}>

				<header>
					<marquee direction="left" scrollamount="8" behavior="alternate"><h1>Just a Form</h1></marquee>
					<p>Tack just 1 minute</p>
				</header>

				<main style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
					<label>Name:
				<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>

					<br />

					<label>Height:
				<input
							type="number"
							placeholder="Height"
							value={height}
							onChange={(e) => setHeight(e.target.value)} />
					</label>

					<br />

					<label>Birthday:
				<input
							type="date"
							placeholder="Birthday"
							value={birthDay}
							onChange={(e) => setBirthDay(e.target.value)} />
					</label>

					<br />

					<label>Country:
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

					<br />

					<div>
						<h3>How you want Pizza</h3>
						<label>
							<input
								type="checkbox"
								name="Pizza"
								value="chocolate"
								checked={pizza.chocolate}
								// onChange={() => setPizza(...pizza, { chocolate: true })}
								onChange={handleChange}
							/>Chocolate</label>
						<br />

						<label>
							<input
								type="checkbox"
								name="Pizza"
								value="ananas"
								checked={pizza.ananas}
								// onChange={() => setPizza((prevState) => ({ ...prevState, ananas: true }))}
								onChange={handleChange}
							/>Ananas</label>
						<br />

						<label>
							<input
								type="checkbox"
								name="Pizza"
								value="strawberries"
								checked={pizza.strawberries}
								// onChange={() => setPizza(...pizza, { strawberries: true })}
								onChange={handleChange}
							/>Strawberries</label>
						<br />
					</div>

					<br />

					<div>
						<h3>This:</h3>
						<label>
							<input
								type="radio"
								name="sex"
								value="Male"
								checked={sex === "Male"}
								onChange={() => setSex("Male")} />Male</label>
						<br />

						<label>
							<input
								type="radio"
								name="sex"
								value="Fem"
								checked={sex === "Fem"}
								onChange={() => setSex("Fem")} />Fem</label>
						<br />

						<label>
							<input
								type="radio"
								name="sex"
								value="Other"
								checked={sex === "Other"}
								onChange={() => setSex("Other")} />Other</label>
						<br />
					</div>
				</main>

				<footer>
					<button type="reset">Reset</button>
					<button type="submit">Submit</button>
				</footer>
			</form>
		</div>
	)
}
