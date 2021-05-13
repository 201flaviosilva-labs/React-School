import React from 'react';
import { Switch, Route, } from "react-router-dom";


import Home from "../../Pages/Home";
import Basicos from "../../Pages/Basicos";
import Medios from "../../Pages/Medio";
import Avancado from "../../Pages/Avancado";
import Jogos from "../../Pages/Jogos";


export default function ReactRout() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/basicos" component={Basicos} />
				<Route path="/medios" component={Medios} />
				<Route path="/avancado" component={Avancado} />

				<Route path="/jogos" component={Jogos} />
			</Switch>
		</>
	)
}
