import Phaser from "phaser";
import ASSETS from "../../../Assets/ASSETS";

export default class MainScene extends Phaser.Scene {
	init() {
		this.load.image("Logo", ASSETS.Sprite);
	}

	create() {
		const { centerX, centerY } = this.cameras.main;
		this.helloWorld = this.add.text(centerX, centerY,
			"Hello World", {
			font: "40px Arial",
			color: "#ffffff"
		}
		);
		this.helloWorld.setOrigin(0.5);

		this.add.image(centerX, centerY, "Logo");
	}

	update() {
		this.helloWorld.angle += 1;
	}
}
