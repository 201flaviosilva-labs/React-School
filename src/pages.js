import Home from "./Pages/Home";
import Noob from "./Pages/Noob";
import Ninja from "./Pages/Ninja";
import Games from "./Pages/Games";

const pages = [
	{
		name: "Home",
		path: "/",
		Component: Home,
		exact: true,
	},
	{
		name: "Noob",
		path: "/noob",
		Component: Noob,
	},
	{
		name: "Ninja",
		path: "/ninja",
		Component: Ninja,
	},
	{
		name: "Games",
		path: "/games",
		Component: Games,
	},
];

export default pages;
