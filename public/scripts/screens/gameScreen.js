/**
 * @class GameScreen adalah class yang bertanggung jawab untuk menampilkan layar permainan dalam game.
 */
class GameScreen {
	/**
   * @constructor
   * @param {Object} images - Kumpulan gambar untuk game.
   * @param {p5.Image[]} images.background - Gambar latar belakang game.
   * @param {p5.Image[]} images.character - Gambar karakter utama.
   * @param {p5.Image[]} images.enemies - Gambar musuh.
   * @param {p5.Image[]} images.gameover - Gambar layar game over.
   * @param {p5.Image[]} images.heart - Gambar nyawa ( bentuk hati ).
   * @param {p5.Image[]} images.dead - Gambar karakter mati ( RIP ).
   * @param {Scenery[]} background - Objek latar belakang permainan.
   * @param {number} score - Skor permainan.
   * @param {Enemy[]} enemies - Array musuh dalam permainan.
   * @param {number} life - Jumlah nyawa pemain.
   * @param {number} [enemyIndex=0] - Indeks musuh aktif.
   * @param {RestartButton} restartButton - Tombol restart permainan.
   */
	constructor() {
		this.images = {
			background: [],
			character: [],
			enemies: [],
			gameover: [],
			heart: [],
			dead: [],
		};
		this.background = [];
		this.score;
		this.enemies = [];
		this.life;
		this.enemyIndex = 0;
		this.restartButton;
	}

	/**
	 * @param {{ name: string; paths: string[] }[]} pathsToImages - Loads images and stores them in the images object from p5.Image
	 * @see loadImage() - Menggunakan fungsi bawaan p5.js untuk memuat gambar
	 */
	preload(pathsToImages) {
		pathsToImages.forEach(obj => {
			obj.paths.forEach(s =>
				this.images[obj.name].push(loadImage(s))
			);
		})
	}

	/**
	 * @param {number[]} velocities - 
	 * @description Fungsi ini digunakan untuk memuat gambar latar belakang dan font
	 * @see this.enemies.push() - Menambahkan objek musuh ke dalam array enemies dalam game
	 */
	setup(velocities = [0]) {
		velocities.forEach((value, index) => this.background.push(
			new Scenery(this.images.background[index], value)
		)
		);

		g_isGameOver = false;
		g_character = new Character(
			this.images.character[0],
			this.images.heart[0],
			0,
			height - 135,
			10, 277, 347, 2
		);

		this.enemies.push(new Enemy(this.images.enemies[0], width - 225, height - 225, -10, 450, 450, 2, 10));
		this.enemies.push(new Enemy(this.images.enemies[1], width - 225, height - 225, -10, 450, 450, 2, 10));
		this.enemies.push(new Enemy(this.images.enemies[2], width - 225, height - 225, -10, 450, 450, 2, 10));

		this.score = new Score(0);
		this.life = new Life(3, 3, this.images.heart[0]);
		this.restartButton = new RestartButton('Restart Game', windowWidth / 2, windowHeight / 1.6);
	}

	/**
	 * @description Fungsi untuk menghandle jika karakter bertabrakan dengan musuh ( enemies )
	 * @see this.life.loseLife() - Mengurangi nyawa pemain
	 */
	handleCollision() {
		this.life.loseLife();
		g_character.setInvulnerable();
		if (this.life.getCurrent() === 0) {
			g_isGameOver = true;
		}
	}

	/**
	 * @description Fungsi untuk menghandle jika game over
	 * @see image() - Menggunakan fungsi bawaan p5js untuk menampilkan gambar gameover
	 * @see this.restartButton.draw() - Menampilkan tombol restart
	 * @see noLoop() - Fungsi bawaan p5js untuk menghentikan perulangan
	 */
	handleGameOver() {
		image(
			this.images.gameover[0],
			windowWidth / 2 - this.images.gameover[0].width / 2,
			windowHeight / 2 - this.images.gameover[0].height / 2
		);
		this.restartButton.draw();

		image(
			this.images.dead[0],
			20,
			windowHeight - 130 - 20,
			130,
			130
		);

		noLoop();

		this.score.resetScore();
		this.life.resetLives();
		this.handleEnemies();
	}

	/**
	 * @description Fungsi untuk mengelola musuh
	 */
	handleEnemies() {
		const enemy = this.enemies[this.enemyIndex];
		const xPos = enemy.getxPos();
		let xLimit;

		xLimit = g_isGameOver ? xPos + 1 : -enemy.getSpriteW() / enemy.getProportion();

		if (xPos < xLimit) {
			const randomIdx = Math.floor(Math.random() * this.images.enemies.length);
			const randomVelocity = 10 + Math.floor(Math.random() * 30);
			enemy.resetxPos();
			this.enemyIndex = randomIdx;
			this.enemies[randomIdx].setVelocity(randomVelocity);
		}

		if (!g_isGameOver) {
			this.enemies[this.enemyIndex].show();
			this.enemies[this.enemyIndex].move();
		}

	}

	/**
	 * @description Fungsi untuk membuat canvas di p5js
	 */
	draw() {
		this.background.forEach(element => {
			element.show();
			if (!g_isGameOver) {
				element.move();
			}
		});
		this.score.show();
		this.life.show();

		if (!g_isGameOver) {
			this.score.addScore();

			g_character.show();
			g_character.applyGravity();

			this.handleEnemies();

			if (g_character.isColliding(this.enemies[this.enemyIndex], [0.8, 1], [0.5, 0.7])) {
				this.handleCollision();
			}

		} else {
			this.handleGameOver();
		}

	}
}

function keyPressed() {
	console.log(key);
	if (key === 'ArrowUp') {
		if (g_character.jump()) {
			jumpSound.play();
		}
	}
}