## **Konsep Fungsi `show` dalam `Scenery`**  

Dalam kelas `Scenery`, fungsi `show` bertanggung jawab untuk menampilkan gambar latar belakang menggunakan metode `image()` dari pustaka p5.js.  

### **Sintaks:**
```js
show() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
}
```
Fungsi ini menggambar dua gambar latar belakang pada koordinat `x1` dan `x2` sebagai bagian dari teknik **infinite scrolling**.  

### **Parameter dalam `image()`**
```js
image(this.image, this.x1, 0, width, height);
image(this.image, this.x2, 0, width, height);
```
| Parameter   | Deskripsi |
|------------|-----------|
| `this.image` | Objek `p5.Image` yang ditampilkan sebagai latar belakang. |
| `this.x1` / `this.x2` | Koordinat X untuk dua gambar latar belakang. |
| `0` | Koordinat Y (selalu di atas layar). |
| `width` | Lebar gambar disesuaikan dengan lebar canvas. |
| `height` | Tinggi gambar disesuaikan dengan tinggi canvas. |

### **Cara Kerja `show()`**  

1. Gambar pertama ditampilkan pada `(x1, 0)`.  
2. Gambar kedua ditampilkan pada `(x2, 0)`, yang awalnya berada di samping gambar pertama.  
3. Saat fungsi `move()` menggeser posisi gambar ke kiri, gambar pertama akan keluar dari layar.  
4. Setelah keluar, gambar pertama akan dipindahkan kembali ke kanan untuk menciptakan efek **scrolling tanpa batas**.

---

## **Konsep Fungsi `move` dan Pengelolaan `velocity`**  

### **Dasar `velocity` dalam `Scenery`**  
`velocity` menentukan kecepatan pergerakan latar belakang setiap frame:  

- **Nilai positif (`velocity > 0`)** → Latar belakang bergerak ke kiri.  
- **Nilai negatif (`velocity < 0`)** → Latar belakang bergerak ke kanan.  
- **Nilai nol (`velocity = 0`)** → Latar belakang diam.  

Fungsi `move()` mengimplementasikan pergerakan ini:  
```js
move() {
    this.x1 -= this.velocity;
    this.x2 -= this.velocity;
}
```
Setiap frame:  
- `x1` dan `x2` berkurang sebesar `velocity`, menggeser gambar ke kiri.  
- Jika `x1` atau `x2` melewati batas kiri layar (`x < -width`), posisinya di-reset ke kanan (`x = width`).  

---

## **Implementasi `velocity` dalam `gameScreen.setup()`**  

```js
gameScreen.setup([0, 0.1, 0, 0.3, 0.5]);
```
Fungsi ini menerima **array `velocities`** untuk menentukan kecepatan masing-masing latar belakang:  
```js
setup(velocities = [0]) {
    velocities.forEach((value, index) => 
        this.background.push(new Scenery(this.images.background[index], value))
    );
}
```
### **Efek dari `velocity`**  
| Indeks | Velocity | Efek pada Latar Belakang |
|--------|----------|-------------------------|
| 1 | `0` | Tidak bergerak. |
| 2 | `0.1` | Bergerak perlahan ke kiri. |
| 3 | `0` | Tidak bergerak. |
| 4 | `0.3` | Bergerak lebih cepat ke kiri. |
| 5 | `0.5` | Bergerak paling cepat ke kiri. |

### **Efek Visual:**  
- **Layer lebih jauh** (misalnya langit) bergerak lebih lambat.  
- **Layer lebih dekat** (misalnya tanah) bergerak lebih cepat.  
- Membentuk efek **parallax scrolling**.

---

## **Pengaruh Nilai `velocity`**  

| Kondisi | Contoh | Efek |
|---------|--------|------|
| **Velocity besar (`≥10`)** | `[10, 20, 30, 40, 50]` | Background bergerak sangat cepat, efek scrolling terasa dramatis. |
| **Velocity kecil (`0.01 - 0.1`)** | `[0.01, 0.05, 0.1, 0.2, 0.3]` | Pergerakan lebih halus, cocok untuk efek kabut atau awan. |
| **Velocity negatif (`< 0`)** | `[-0.1, -0.2, -0.3, -0.4, -0.5]` | Background bergerak ke kanan, menciptakan efek angin berlawanan arah. |

---

## **Proses Rendering**  

1. `show()` menggambar gambar latar belakang pada dua posisi: `x1` dan `x2`.  
2. `move()` menggeser posisi gambar dengan `velocity`.  
3. Jika `x1 < -width`, maka `x1` akan di-reset ke kanan (`x = width`).  
4. Proses ini berulang sehingga menciptakan efek **scrolling tanpa batas**.  

**Contoh dengan `velocity = 2`:**  

| Frame | `x1` | `x2` | Efek |
|-------|------|------|------|
| 1 | `0` | `width` | Gambar pertama di layar, gambar kedua di sampingnya. |
| 2 | `-2` | `width - 2` | Gambar bergeser ke kiri. |
| 200 | `-width` | `0` | Gambar pertama keluar dari layar. |
| 201 | `width` | `2` | Gambar pertama dipindahkan kembali ke kanan. |

Dengan mekanisme ini, scrolling terjadi tanpa henti.

---

## **Kesimpulan**  
- **`velocity` menentukan kecepatan pergerakan latar belakang.**  
- **Scrolling terjadi karena gambar yang keluar dari layar akan di-reset ke kanan.**  
- **Parallax scrolling** dihasilkan dari perbedaan kecepatan pada berbagai lapisan latar belakang.  
- Nilai `velocity` yang lebih besar akan membuat latar belakang bergerak lebih cepat, sementara nilai negatif akan menggesernya ke arah sebaliknya.  

Dengan pendekatan ini, efek scrolling dapat dikontrol dengan fleksibel untuk menciptakan tampilan yang dinamis dan realistis.