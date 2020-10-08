import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "../../Pages/Home";
import Form from "../../Pages/Basicos/Form";
import Todo from "../../Pages/Basicos/Todo";
import Filmes from "../../Pages/Medio/Filmes";

import Basicos from "../../Pages/Basicos";


export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/form" component={Form} />
				<Route path="/todo" component={Todo} />
				<Route path="/filmes" component={Filmes} />
				<Route path="/basicos" component={Basicos} />
			</Switch>
		</main>
	)
}
