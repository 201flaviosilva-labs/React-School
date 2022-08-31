import Phaser from "phaser";
import ASSETS from "../../../../Assets/ASSETS";

export default class MainScene extends Phaser.Scene {
	init() {
		this.gameOver = false;
		this.score = 0;
	}

	preload() {
		const { Bomb, Dude, Platform, Sky, Star } = ASSETS.PhaserGame;

		this.load.rexImageURI("ground", Platform);
		this.load.rexImageURI("sky", Sky);
		this.load.rexImageURI("star", Star);
		this.load.rexImageURI("bomb", Bomb);
		this.load.rexImageURI("player", Dude, { frameWidth: 32, frameHeight: 48 });
	}

	create() {
		const { centerX, centerY } = this.cameras.main;
		this.cursors = this.input.keyboard.createCursorKeys();

		// Background
		// this.add.image(400, 300, "sky");

		// UI
		// Aciona uma Label com o score
		this.scoreText = this.add.text(16, 16, "Pontos: 0", {
			fontSize: "32px",
			fill: "#000",
		});

		// Platforms
		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
		this.platforms.create(600, 400, "ground");
		this.platforms.create(50, 250, "ground");
		this.platforms.create(750, 220, "ground");

		// Stars
		this.stars = this.physics.add.group({
			key: "star",
			repeat: 11,
			setXY: {
				x: 12,
				y: 0,
				stepX: 70,
			}
		});
		this.stars.children.iterate(function (child) {
			child.setBounceY(Phaser.Math.FloatBetween(0.9, 1));
		});

		// Bombs
		this.bombs = this.physics.add.group();

		// Player
		this.player = this.physics.add.sprite(centerX, centerY, "player").setBounce(0.5).setCollideWorldBounds(true);

		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: "turn",
			frames: [{ key: "player", frame: 4 }],
			frameRate: 20
		});
		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});

		// Collision
		this.physics.add.collider(this.player, this.platforms); // Player - Platforms
		this.physics.add.collider(this.stars, this.platforms); // Stars - Platforms
		this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this); // Player - Stars
		this.physics.add.collider(this.bombs); // Bombs - Bombs
		this.physics.add.collider(this.bombs, this.platforms); // Bombs - Platforms
		this.physics.add.overlap(this.player, this.bombs, this.hitBomb, null, this); // Bombs - Player
	}

	collectStar(player, star) {
		star.disableBody(true, true);

		this.score += 10;
		this.scoreText.setText("Pontos: " + this.score);

		if (this.stars.countActive(true) === 0) {
			this.stars.children.iterate(function (child) {
				child.enableBody(true, child.x, 0, true, true);
			});
			const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
			const bomb = this.bombs.create(x, 16, "bomb");
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		}
	}

	hitBomb(player) {
		this.physics.pause();
		player.setTint(0xff0000);
		this.gameOver = true;
		console.log("Game Over");
	}

	update() {
		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-100);
			this.player.anims.play("left", true);
		} else if (this.cursors.right.isDown) {
			this.player.setVelocityX(100);
			this.player.anims.play("right", true);
		} else {
			this.player.setVelocityX(0);
			this.player.anims.play("turn");
		}

		if (this.cursors.up.isDown && this.player.body.touching.down) this.player.setVelocityY(-350);
	}
}
