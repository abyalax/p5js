/**
 * Class Animation
 * Class Animation digunakan untuk menangani animasi sprite dalam game berbasis frame-by-frame. 
 * Class ini memungkinkan rendering gambar animasi berdasarkan urutan sprite yang diambil dari sebuah spritesheet.
 */
class Animation {

	/**
	 * @constructor
	 * @param {p5.Image} image → Objek gambar (spritesheet) yang berisi beberapa frame animasi.
	 * @param {number} xPos → Posisi x tempat animasi ditampilkan di layar.
	 * @param {number} yPos → Posisi y tempat animasi ditampilkan di layar.
	 * @param {number} dy → Offset vertikal yang memungkinkan animasi bergerak ke atas dan ke bawah.
	 * @param {number} spriteW → Lebar setiap frame dalam spritesheet.
	 * @param {number} spriteH →  Tinggi setiap frame dalam spritesheet.
	 * @param {number} proportion → Faktor skala untuk memperbesar atau memperkecil animasi di layar.
	 */
	constructor(image, xPos, yPos, dy, spriteW, spriteH, proportion){
		this.image = image;
		this.imgWidth = image.width;
		this.imgHeight = image.height;
		this.xPos = xPos;
		this.yPos = yPos;
		this.dy = dy;
		this.spriteW = spriteW;
		this.spriteH = spriteH;
		this.proportion = proportion;
		this.matrix = this.makeMatrix();
		this.currentFrame = 0;
	}

	/**
	 * @see show() → Menampilkan animasi
	 * @description Metode ini menampilkan gambar sesuai dengan frame saat ini menggunakan fungsi image().
	 * @description Frame yang ditampilkan akan berubah sesuai urutan dalam matrix.
	 */
	show(){
		image(
			this.image, 
			this.xPos, 
			this.yPos - this.dy,
			this.spriteW/this.proportion,
			this.spriteH/this.proportion, 
			this.matrix[this.currentFrame][0],
			this.matrix[this.currentFrame][1],
			this.spriteW,
			this.spriteH
		);
		this.animate();
	}


	animate(){
		this.currentFrame++;
		if(this.currentFrame >= this.matrix.length - 1) {
			this.currentFrame = 0;
		}
	}

	/**
	 * @description Fungsi ini digunakan untuk membuat array koordinat dari setiap frame dalam spritesheet.
	 * @description Mengambil bagian tertentu dari gambar untuk menampilkan animasi secara berurutan.
	 * 
	 * @returns {Array<[number, number]>}
	 */
	makeMatrix(){
		let columns = this.imgWidth/this.spriteW;
		let lines = this.imgHeight/this.spriteH;
		let matrix = []; 

		for(let i = 0; i < lines; i++){
			for(let j = 0; j < columns; j++){
				matrix.push([ j*this.spriteW, i*this.spriteH]);
			}
		}

		return matrix;
	}
}