import Phaser from "phaser";
import ImageURILoaderPlugin from "phaser3-rex-plugins/plugins/imageuriloader-plugin.js";
import { getUrlParameter } from "201flaviosilva-utils";

import MainScene from "./MainScene";

export const gameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	backgroundColor: "#169ac5",
	parent: "PhaserGameContainer",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 300 },
			debug: getUrlParameter("debug") === "false" || getUrlParameter("debug") === undefined ? false : true,
		}
	},
	plugins: {
		global: [{
			key: "rexImageURILoader",
			plugin: ImageURILoaderPlugin,
			start: true,
		},
		],
	},

	scene: [MainScene],
};
