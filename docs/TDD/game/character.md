## **Character - Karakter Utama Pemain**  

Character adalah class yang mengatur karakter utama dalam game. Karakter ini dapat bergerak, melompat, dan berinteraksi dengan musuh. Class ini mewarisi dari class Animation untuk menangani animasi sprite.

---

## **📌 Properti Character**  

1. **yInit** → Posisi Y awal karakter (ground level)
2. **yPos** → Posisi Y saat ini karakter
3. **gravity** → Nilai gravitasi yang mempengaruhi karakter (default: 4)
4. **jumpVelocity** → Kecepatan lompatan karakter
5. **jumps** → Jumlah lompatan yang telah dilakukan (maksimal 2)
6. **isInvulnerable** → Status invulnerable setelah terkena musuh
7. **heart** → Gambar hati untuk efek visual saat invulnerable

---

## **🔀 Alur pada Character**  

1. **Inisialisasi Karakter**  
   - Karakter dibuat dengan posisi awal di ground level
   - Gravitasi dan sistem lompatan diatur
   - Status invulnerable diset false

2. **Sistem Lompatan**  
   - Karakter dapat melompat maksimal 2 kali (double jump)
   - Setiap lompatan menggunakan jumpVelocity = -40
   - Gravitasi diterapkan untuk mengembalikan karakter ke ground

3. **Sistem Invulnerable**  
   - Setelah terkena musuh, karakter menjadi invulnerable selama 1 detik
   - Efek visual hati muncul di atas karakter saat invulnerable
   - Karakter tidak dapat terkena damage selama periode ini

4. **Sistem Collision Detection**  
   - Menggunakan library p5.collide2D untuk deteksi tabrakan
   - Collision box dapat disesuaikan dengan parameter precision
   - Jika invulnerable, collision diabaikan

---

## **🎮 Kontrol Karakter**  

- **ArrowUp** → Melakukan lompatan
- Karakter dapat melakukan double jump (2 lompatan berturut-turut)
- Setelah menyentuh ground, jumlah lompatan direset

---

## **⚙️ Parameter Constructor**  

- **image** → Spritesheet karakter
- **heart** → Gambar hati untuk efek invulnerable
- **xPos** → Posisi X karakter
- **yPos** → Posisi Y karakter
- **dy** → Offset vertikal untuk animasi
- **spriteW** → Lebar sprite (277)
- **spriteH** → Tinggi sprite (347)
- **proportion** → Faktor skala (2)

---
