## **Animation - Sistem Animasi Sprite**  

Animation adalah class dasar yang menangani animasi sprite frame-by-frame dalam game. Class ini digunakan sebagai parent class untuk Character dan Enemy yang memerlukan animasi sprite.

---

## **📌 Properti Animation**  

1. **image** → Objek gambar (spritesheet) yang berisi beberapa frame animasi
2. **imgWidth** → Lebar total spritesheet
3. **imgHeight** → Tinggi total spritesheet
4. **xPos** → Posisi X tempat animasi ditampilkan di layar
5. **yPos** → Posisi Y tempat animasi ditampilkan di layar
6. **dy** → Offset vertikal yang memungkinkan animasi bergerak ke atas dan ke bawah
7. **spriteW** → Lebar setiap frame dalam spritesheet
8. **spriteH** → Tinggi setiap frame dalam spritesheet
9. **proportion** → Faktor skala untuk memperbesar atau memperkecil animasi
10. **matrix** → Array koordinat dari setiap frame dalam spritesheet
11. **currentFrame** → Indeks frame saat ini yang sedang ditampilkan

---

## **🔀 Alur pada Animation**  

1. **Inisialisasi Animasi**  
   - Spritesheet dimuat dan dimensi gambar diambil
   - Matrix koordinat frame dibuat secara otomatis
   - Frame awal diset ke 0

2. **Pembuatan Matrix Frame**  
   - Matrix dibuat berdasarkan dimensi spritesheet dan ukuran frame
   - Setiap elemen matrix berisi koordinat [x, y] dari frame dalam spritesheet
   - Frame diurutkan dari kiri ke kanan, atas ke bawah

3. **Rendering Animasi**  
   - Method show() menampilkan frame saat ini menggunakan image()
   - Frame yang ditampilkan sesuai dengan currentFrame
   - Setelah menampilkan frame, animasi berlanjut ke frame berikutnya

4. **Siklus Animasi**  
   - currentFrame bertambah setiap kali show() dipanggil
   - Ketika currentFrame mencapai akhir matrix, kembali ke frame 0
   - Animasi berjalan secara berulang (loop)

---

## **⚙️ Parameter Constructor**  

- **image** → Objek p5.Image (spritesheet)
- **xPos** → Posisi X di layar
- **yPos** → Posisi Y di layar
- **dy** → Offset vertikal untuk animasi
- **spriteW** → Lebar setiap frame
- **spriteH** → Tinggi setiap frame
- **proportion** → Faktor skala

---

## **🔄️ Method Utama**  

- **show()** → Menampilkan frame animasi saat ini
- **animate()** → Memajukan ke frame berikutnya
- **makeMatrix()** → Membuat array koordinat frame dari spritesheet

---

## **📐 Perhitungan Matrix**  

Matrix dibuat dengan rumus:
- **columns** = imgWidth / spriteW
- **lines** = imgHeight / spriteH
- **koordinat frame** = [j * spriteW, i * spriteH]

Dimana i adalah indeks baris dan j adalah indeks kolom dalam spritesheet.

---

### **Metode dalam Class `Animation`**
#### **1. `show()` → Menampilkan Animasi**
Metode ini menampilkan gambar sesuai dengan frame saat ini menggunakan fungsi `image()`.  
Frame yang ditampilkan akan berubah sesuai urutan dalam `matrix`.  

```js
show(){
	image(
		this.image, 
		this.xPos, 
		this.yPos - this.dy,
		this.spriteW / this.proportion,
		this.spriteH / this.proportion, 
		this.matrix[this.currentFrame][0],
		this.matrix[this.currentFrame][1],
		this.spriteW,
		this.spriteH
	);

	this.animate();
}
```
- `this.matrix[this.currentFrame][0]` → Mengambil koordinat **x** dari frame saat ini.  
- `this.matrix[this.currentFrame][1]` → Mengambil koordinat **y** dari frame saat ini.  
- `this.spriteW / this.proportion` & `this.spriteH / this.proportion` → Mengubah ukuran sprite sesuai dengan proporsi yang diatur.  
- `this.animate();` → Memanggil metode `animate()` untuk mengganti frame berikutnya.  

---

#### **2. `animate()` → Mengatur Pergantian Frame**
Metode ini mengganti frame animasi secara berurutan. Jika frame terakhir sudah ditampilkan, animasi akan kembali ke frame pertama.  
```js
animate(){
	this.currentFrame++;
	if(this.currentFrame >= this.matrix.length - 1) {
		this.currentFrame = 0;
	}
}
```
- Menambah `currentFrame` agar berpindah ke frame selanjutnya.  
- Jika sudah mencapai frame terakhir (`matrix.length - 1`), kembali ke frame awal (`0`).  

---

#### **3. `makeMatrix()` → Membuat Koordinat Frame dari Spritesheet**
Metode ini membagi *spritesheet* menjadi beberapa bagian (frame) berdasarkan ukuran `spriteW` dan `spriteH`.  
```js
makeMatrix(){
	let columns = this.imgWidth / this.spriteW;
	let lines = this.imgHeight / this.spriteH;
	let matrix = []; 

	for(let i = 0; i < lines; i++){
		for(let j = 0; j < columns; j++){
			matrix.push([ j * this.spriteW, i * this.spriteH ]);
		}
	}

	return matrix;
}
```
- **`columns`** → Jumlah kolom frame dalam *spritesheet*.  
- **`lines`** → Jumlah baris frame dalam *spritesheet*.  
- **Loop `i`** → Mengiterasi setiap baris.  
- **Loop `j`** → Mengiterasi setiap kolom dan menyimpan koordinat *x* serta *y* setiap frame.  

> **Contoh:**  
> Jika *spritesheet* memiliki ukuran `600x300` dan setiap frame berukuran `100x100`, maka akan ada **6 kolom** dan **3 baris**.  
> `matrix` akan berisi array seperti:  
> ```js
> [
>   [0, 0], [100, 0], [200, 0], [300, 0], [400, 0], [500, 0],
>   [0, 100], [100, 100], [200, 100], [300, 100], [400, 100], [500, 100],
>   [0, 200], [100, 200], [200, 200], [300, 200], [400, 200], [500, 200]
> ]
> ```

---
### **Penjelasan Mendetail `makeMatrix()`**

Metode `makeMatrix()` digunakan untuk membuat **array koordinat** dari setiap frame dalam *spritesheet*. Ini memungkinkan kita mengambil bagian tertentu dari gambar untuk menampilkan animasi secara berurutan.

---

### **Langkah-langkah dalam `makeMatrix()`**
1. **Menentukan jumlah kolom dan baris dalam spritesheet**
   ```js
   let columns = this.imgWidth / this.spriteW;
   let lines = this.imgHeight / this.spriteH;
   ```
   - `columns` → Jumlah **frame dalam satu baris** (*jumlah kolom*).  
   - `lines` → Jumlah **baris frame** dalam spritesheet.  
   - Perhitungan ini dilakukan dengan membagi **lebar dan tinggi spritesheet** dengan ukuran **lebar dan tinggi tiap frame**.

   **Contoh**  
   Jika spritesheet berukuran **600×300 px** dan tiap frame memiliki ukuran **100×100 px**, maka:
   - `columns = 600 / 100 = 6` (ada **6 frame per baris**).
   - `lines = 300 / 100 = 3` (ada **3 baris frame**).
  
---

2. **Membuat array koordinat untuk setiap frame**
   ```js
   let matrix = [];
   ```
   - `matrix` adalah array kosong yang nantinya akan menyimpan **koordinat masing-masing frame**.

---

3. **Looping untuk menyusun koordinat setiap frame**
   ```js
   for(let i = 0; i < lines; i++){ 
       for(let j = 0; j < columns; j++){ 
           matrix.push([ j * this.spriteW, i * this.spriteH ]);
       }
   }
   ```
   - **Loop `i` (baris)** → Mengiterasi dari baris **pertama** hingga **terakhir** (`i < lines`).
   - **Loop `j` (kolom)** → Mengiterasi dari **frame pertama** di setiap baris hingga **frame terakhir** (`j < columns`).
   - **`j * this.spriteW`** → Menghitung posisi **x** dari frame.  
     - Misal: Jika `spriteW = 100`, maka koordinat **x** dari frame di baris pertama adalah `[0, 100, 200, 300, 400, 500]`.
   - **`i * this.spriteH`** → Menghitung posisi **y** dari frame.  
     - Misal: Jika `spriteH = 100`, maka koordinat **y** akan tetap **0** untuk baris pertama, **100** untuk baris kedua, dan **200** untuk baris ketiga.

---

4. **Hasil akhir dari `makeMatrix()`**
   ```js
   return matrix;
   ```
   - Mengembalikan array yang berisi **koordinat frame** dalam spritesheet.

---

### **Contoh Implementasi**
Misalkan kita punya **spritesheet** dengan ukuran **600×300 px**, dan tiap frame berukuran **100×100 px**.

#### **Iterasi per Baris**
| Frame | (x, y) |
|--------|--------|
| Frame 1 | (0, 0) |
| Frame 2 | (100, 0) |
| Frame 3 | (200, 0) |
| Frame 4 | (300, 0) |
| Frame 5 | (400, 0) |
| Frame 6 | (500, 0) |

Untuk **baris kedua**, nilai `y` bertambah **100**:  
| Frame | (x, y) |
|--------|--------|
| Frame 7 | (0, 100) |
| Frame 8 | (100, 100) |
| Frame 9 | (200, 100) |
| Frame 10 | (300, 100) |
| Frame 11 | (400, 100) |
| Frame 12 | (500, 100) |

Baris ketiga (`y = 200`):
| Frame | (x, y) |
|--------|--------|
| Frame 13 | (0, 200) |
| Frame 14 | (100, 200) |
| Frame 15 | (200, 200) |
| Frame 16 | (300, 200) |
| Frame 17 | (400, 200) |
| Frame 18 | (500, 200) |

Sehingga, **matrix** yang dihasilkan adalah:
```js
[
  [0, 0], [100, 0], [200, 0], [300, 0], [400, 0], [500, 0],
  [0, 100], [100, 100], [200, 100], [300, 100], [400, 100], [500, 100],
  [0, 200], [100, 200], [200, 200], [300, 200], [400, 200], [500, 200]
]
```

---