## **Life - Sistem Nyawa Pemain**  

Life adalah class yang menangani sistem nyawa pemain dalam game. Class ini menampilkan jumlah nyawa yang tersisa dalam bentuk ikon hati dan mengatur logika pengurangan/penambahan nyawa.

---

## **📌 Properti Life**  

1. **max** → Jumlah maksimal nyawa yang dapat dimiliki
2. **initial** → Jumlah nyawa awal saat game dimulai
3. **current** → Jumlah nyawa saat ini
4. **width** → Lebar ikon hati (50px)
5. **height** → Tinggi ikon hati (50px)
6. **heart** → Objek gambar hati dari p5.Image

---

## **🔀 Alur pada Life**  

1. **Inisialisasi Nyawa**  
   - Nyawa awal diset sesuai parameter initial (biasanya 3)
   - Nyawa maksimal diset sesuai parameter max (biasanya 3)
   - Gambar hati dimuat untuk tampilan visual

2. **Tampilan Nyawa**  
   - Nyawa ditampilkan sebagai ikon hati di pojok kiri atas
   - Setiap hati memiliki ukuran 50x50 pixel
   - Margin antar hati: 10 pixel
   - Posisi: width * (i + 1) + margin, 10

3. **Pengurangan Nyawa**  
   - Nyawa berkurang saat karakter bertabrakan dengan musuh
   - Method loseLife() mengurangi current sebanyak 1
   - Nyawa tidak bisa kurang dari 0

4. **Penambahan Nyawa**  
   - Method gainLife() menambah current sebanyak 1
   - Nyawa tidak bisa melebihi nilai max
   - Biasanya digunakan untuk power-up (belum diimplementasi)

5. **Reset Nyawa**  
   - Method resetLives() mengembalikan nyawa ke nilai maksimal
   - Dipanggil saat restart game

---

## **⚙️ Parameter Constructor**  

- **max** → Jumlah maksimal nyawa (3)
- **initial** → Jumlah nyawa awal (3)
- **heart** → Objek p5.Image untuk ikon hati

---

## **🔄️ Method Utama**  

- **show()** → Menampilkan ikon hati sesuai jumlah nyawa
- **gainLife()** → Menambah nyawa (maksimal sampai max)
- **loseLife()** → Mengurangi nyawa (minimal 0)
- **getCurrent()** → Mengambil jumlah nyawa saat ini
- **resetLives()** → Reset nyawa ke nilai maksimal

---

## **💔 Kondisi Game Over**  

- Game over terjadi ketika current = 0
- Karakter tidak dapat terkena damage lagi
- Tombol restart muncul untuk memulai ulang game

---

## **🎨 Tampilan Visual**  

- **Ikon**: Gambar hati merah
- **Ukuran**: 50x50 pixel
- **Posisi**: Pojok kiri atas layar
- **Spacing**: 10 pixel antar ikon
- **Jumlah**: Sesuai dengan current life

---
