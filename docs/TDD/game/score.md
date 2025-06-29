## **Score - Sistem Skor Permainan**  

Score adalah class yang menangani sistem skor dalam game. Skor bertambah secara otomatis berdasarkan durasi permainan dan ditampilkan di pojok kanan atas layar.

---

## **📌 Properti Score**  

1. **score** → Nilai skor saat ini (dimulai dari 0)

---

## **🔀 Alur pada Score**  

1. **Inisialisasi Skor**  
   - Skor diatur ke 0 saat game dimulai
   - Skor ditampilkan di posisi tetap (pojok kanan atas)

2. **Penambahan Skor**  
   - Skor bertambah secara otomatis setiap frame
   - Increment skor: 0.05 per frame
   - Skor bertambah selama game berlangsung (tidak game over)

3. **Tampilan Skor**  
   - Skor ditampilkan dengan format angka bulat (parseInt)
   - Posisi: width - 30, 50 (pojok kanan atas)
   - Ukuran teks: 50px
   - Warna: putih (#fff)
   - Alignment: RIGHT

4. **Reset Skor**  
   - Skor direset ke 0 saat game over
   - Skor direset ke 0 saat restart game

---

## **⚙️ Parameter Constructor**  

- Tidak ada parameter (constructor kosong)

---

## **🔄️ Method Utama**  

- **show()** → Menampilkan skor di layar
- **addScore()** → Menambah skor sebesar 0.05
- **resetScore()** → Reset skor ke 0

---

## **📊 Perhitungan Skor**  

- **Increment**: 0.05 per frame
- **Frame rate**: 30 FPS
- **Skor per detik**: 0.05 × 30 = 1.5 poin
- **Tampilan**: parseInt(score) untuk menampilkan angka bulat

---

## **🎯 Tujuan Skor**  

- Memberikan feedback visual kepada pemain
- Mengukur durasi bertahan dalam game
- Menciptakan motivasi untuk bertahan lebih lama
- Sebagai indikator performa pemain

---
