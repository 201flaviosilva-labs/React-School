import React from "react";
import { Switch, Route, } from "react-router-dom";

import Home from "../../Pages/Home";
import Noob from "../../Pages/Noob";
import Ninja from "../../Pages/Ninja";
import Master from "../../Pages/Master";
import Games from "../../Pages/Games";

export default function ReactRout() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/noob" component={Noob} />
				<Route path="/ninja" component={Ninja} />
				<Route path="/mestre" component={Master} />

				<Route path="/jogos" component={Games} />
			</Switch>
		</>
	)
}
