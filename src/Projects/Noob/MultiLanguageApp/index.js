import React, { useState } from "react";

import languages from "./languages";

import "./style.min.css";

export default function MultiLanguageApp() {
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	return (
		<div className="BasicProjectContainer MultiLanguageAppContainer">
			<h1>Multi-Language App</h1>

			<div>
				<label htmlFor="selectedLanguage">
					<span>Languages:</span>
					<select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} id="selectedLanguage">
						{
							Object.keys(languages).map((l, index) => <option key={index} value={l}>{l}</option>)
						}
					</select>
				</label>

				<div className="sentences">
					{
						Object.keys(languages[selectedLanguage]).map((key, index) =>
							<p key={index}>
								<span>{key} ➜ </span>
								<span>{languages[selectedLanguage][key]}</span>
							</p>
						)
					}
				</div>
			</div>

		</div>
	)
}
