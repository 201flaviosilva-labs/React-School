import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "../../Pages/Home";
import Basicos from "../../Pages/Basicos";
import Medios from "../../Pages/Medio";


export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/basicos" component={Basicos} />
				<Route path="/medios" component={Medios} />
			</Switch>
		</main>
	)
}
