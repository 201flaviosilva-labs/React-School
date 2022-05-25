import React, { useState } from "react";
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';

import NoobProject from "../../../Pages/Noob/components/Project";

import "./style.min.css";

export default function UniversallyUniqueIdentifier() {
	const versions = ["V1", "V3", "V4", "V5"];
	const [uuid, setUUID] = useState(uuidv4());
	const [uuidVersion, setUUIDVersion] = useState("v4");

	function changeUUIDVersion(e) {
		setUUIDVersion(e.target.value);
		generateUUID();
	}

	function generateUUID() {
		switch (uuidVersion) {
			case "v1":
				setUUID(uuidv1());
				break;
			case "v3":
				setUUID(uuidv3());
				break;
			case "v4":
				setUUID(uuidv4());
				break;
			case "v5":
				setUUID(uuidv5());
				break;
			default:
				setUUID(uuidv4());
				break;
		}
	}

	return (
		<NoobProject title="UUID" className="NoobUniversallyUniqueIdentifier">
			<div className="header">
				<label htmlFor="uuid-version">UUID Version:
					<select
						id="uuid-version"
						onChange={changeUUIDVersion}
					>
						{versions.map((version, index) => (
							<option
								key={index}
								value={version}
							>
								{version}
							</option>
						))}
					</select>
				</label>
			</div>

			<div className="main">
				<p>{uuid}</p>
			</div>

			<div className="footer">
				<button onClick={generateUUID}>Generate</button>
			</div>
		</NoobProject>
	)
}
