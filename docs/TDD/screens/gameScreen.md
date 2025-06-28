## **GameScreen - Layar Permainan Utama**  

GameScreen adalah bagian utama dalam permainan, di mana seluruh mekanisme permainan berlangsung. Pada tahap ini, karakter utama dikendalikan oleh pemain, musuh muncul sebagai tantangan, skor bertambah sesuai dengan progres permainan, dan nyawa berkurang saat terjadi tabrakan.  

---

## **📌 Elemen dalam GameScreen**  

1. **Latar Belakang** → Menampilkan dunia permainan dengan efek pergerakan dinamis.  
2. **Karakter Utama** → Objek yang dikendalikan oleh pemain, dapat bergerak dan melompat untuk menghindari rintangan.  
3. **Musuh** → Objek yang muncul dari sisi kanan layar dan bergerak ke arah karakter utama.  
4. **Nyawa** → Jumlah kesempatan yang dimiliki pemain sebelum permainan berakhir.  
5. **Skor** → Nilai yang bertambah berdasarkan durasi permainan berlangsung.  
6. **Tombol Restart** → Opsi untuk memulai kembali permainan setelah game over.  

---

## **🔀 Alur Permainan**  

1. **Inisialisasi**  
   - Latar belakang diatur dan mulai bergerak.  
   - Karakter utama ditampilkan di posisi awal.  
   - Skor diatur ke nol, dan jumlah nyawa disiapkan.  

2. **Interaksi Permainan**  
   - Pemain dapat mengontrol karakter untuk melompat.  
   - Musuh mulai muncul dan bergerak mendekati karakter utama.  
   - Skor bertambah secara otomatis selama permainan berlangsung.  

3. **Tabrakan dan Pengurangan Nyawa**  
   - Jika karakter bertabrakan dengan musuh, satu nyawa akan berkurang.  
   - Jika jumlah nyawa mencapai nol, permainan berakhir.  

---

## **🎮 Mekanisme Game Over**  

Ketika nyawa habis, permainan akan masuk ke kondisi **Game Over**, yang ditandai dengan:  
- Tampilan layar game over di tengah layar.  
- Karakter utama berubah menjadi ikon yang menandakan kekalahan.  
- Muncul tombol "Restart Game" untuk memungkinkan pemain mengulang permainan.  
- Pergerakan dalam permainan dihentikan hingga pemain memilih untuk memulai kembali.  

---

## **🔄️ Restart Permainan**  

Jika pemain menekan tombol **"Restart Game"**, maka:  
- Semua elemen permainan diatur ulang.  
- Nyawa dikembalikan ke jumlah awal.  
- Skor dikembalikan ke nol.  
- Permainan dimulai kembali dari awal.  

---