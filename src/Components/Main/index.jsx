import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "../../Pages/Home";
import Basicos from "../../Pages/Basicos";


export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/basicos" component={Basicos} />
			</Switch>
		</main>
	)
}
