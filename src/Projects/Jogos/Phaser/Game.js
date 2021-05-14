import Phaser from "phaser";

import ASSETS from "../../../Assets/ASSETS";

export default class Game extends Phaser.Scene {
	constructor() {
		super({ key: "Game" });
	}

	init() {
		console.log("init");
	}

	preload() {
		console.log("preload");
		this.load.image("Logo", ASSETS.Sprite);
	}

	create() {
		console.log("create");
		this.add.text(100, 100, "hello phaser", { fill: "#0f0" });

		// const logo = this.add.image(400, 150, "Logo");
		// this.tweens.add({
		// 	targets: logo,
		// 	y: 450,
		// 	duration: 2000,

		// 	ease: "Power2",
		// 	yoyo: true,
		// 	loop: -1
		// });
	}

	// update() {
	// 	console.log("update");
	// }
}
