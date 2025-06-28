
/**
 * InitialScreen adalah class yang bertanggung jawab untuk menampilkan layar awal dalam game. Class ini menangani gambar latar belakang, tombol mulai, serta teks judul game.
 */
class InitialScreen {
	/**
	 * @constructor
	 * @param {p5.Image[]} bgImages - Array untuk menyimpan gambar latar belakang.
	 * @param {Scenery[]} background -  Array untuk menyimpan objek Scenery.
	 * @param {StartButton} startButton - Objek StartButton untuk memulai game.
	 * @param {p5.Font} customFont - Font khusus untuk teks judul game.
	 */
	constructor() {
		this.bgImages = [];
		this.background = [];
		this.startButton;
		this.customFont;
	}

	/**
	 * @param {string[]} pathsToImages 
	 * @description Fungsi ini digunakan untuk memuat gambar latar belakang dan font
	 * @see pathsToImages - Array yang berisi path gambar yang akan dimuat
	 * @see loadImage() - Menggunakan fungsi bawaan p5.js untuk memuat gambar dan menyimpannya dalam bgImages.
	 * @see loadFont() - Menggunakan fungsi bawaan p5.js untuk memuat font khusus (teks judul)
	 */
	preload(pathsToImages) {
		pathsToImages.forEach(s => this.bgImages.push(loadImage(s)));
		this.customFont = loadFont('../../assets/other/customFont.otf')
	}

	/**
	 * 
	 * @param {Array<number>} velocities 
	 * @description Fungsi ini digunakan untuk memuat gambar latar belakang dan font
	 * @see velocities - Array yang berisi kecepatan background
	 * @see new Scenery() - Membuat objek Scenery baru dengan gambar(bgImages[index]) dan kecepatan (value)
	 * @see new StartButton() - Membuat objek StartButton
	 */
	setup(velocities = [0]) {
		velocities.forEach((value, index) => this.background.push(
			new Scenery(this.bgImages[index], value)
		));
		this.startButton = new StartButton('Start Game', windowWidth / 2, windowHeight / 1.6);
	}

	/**
	 * @description Fungsi ini digunakan untuk menampilkan teks judul game
	 */
	_text() {
		fill(255);
		strokeWeight(2);
		stroke(245, 1);
		textAlign(CENTER);
		textFont(this.customFont);
		textSize(150);
		text('Tulia\'s', width / 2, height / 2);
		textSize(50);
		text('Adventures', width / 2, height / 2 + 10);
		textFont('Georgia')
	}

	/**
	 * @description Fungsi bawaan p5JS untuk menampilkan gambar latar belakang dan tombol mulai
	 */
	draw() {
		this.background.forEach(element => {
			element.show();
			element.move();
		});
		this._text();
		this.startButton.draw();
	}

}