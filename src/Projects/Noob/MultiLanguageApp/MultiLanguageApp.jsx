import React, { useState } from "react";
import NoobProject from "../../../Pages/Noob/components/Project";

import languages from "./languages";

import "./style.min.css";

export default function MultiLanguageApp() {
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	return (
		<NoobProject title="Multi-Language App" className="NoobMultiLanguageApp">

			<label htmlFor="SelectedLanguage">
				<span>Languages:</span>
				<select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} id="SelectedLanguage">
					{
						Object.keys(languages).map((l, index) => <option key={index} value={l}>{l}</option>)
					}
				</select>
			</label>

			<div className="Sentences">
				{
					Object.keys(languages[selectedLanguage]).map((key, index) => {
						return (
							<p key={index}>
								<span>{key} ➜ </span>
								<span>{languages[selectedLanguage][key]}</span>
							</p>
						)
					}
					)
				}
			</div>

		</NoobProject>
	)
}
