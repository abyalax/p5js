class Scenery {
	/**
	 * @constructor
	 * @param {p5.Image} image Object Imagae dari p5.Image untuk menampilkan latar belakang 
	 * @param {number} velocity Kecepatan latar belakang 
	 */
	constructor(image, velocity){
		this.image = image;
		this.velocity = velocity;
		this.x1 = 0;
		this.x2 = width;
	}

	/**
	 * @description Fungsi untuk menampilkan latar belakang
	 * @see image() Fungsi bawaan p5js untuk menampilkan gambar, lihat detailnya di dokumentasi
	 */
	show(){
		image(this.image, this.x1, 0, width, height);
		image(this.image, this.x2, 0, width, height);
	}

	/**
	 * @description Fungsi untuk menggerakkan latar belakang
	 * @see this.x1 = this.x1 - this.velocity; - Menggerakkan latar belakang pertama ke kiri
	 * @see this.x2 = this.x2 - this.velocity; - Menggerakkan latar belakang kedua ke kiri
	 */
	move(){
		this.x1 = this.x1 - this.velocity;
		this.x2 = this.x2 - this.velocity;

		if(this.x1 < -width){
			this.x1 = width;
		}
		if(this.x2 < -width){
			this.x2 = width;
		}
	}
}