## **Enemy - Musuh dalam Game**  

Enemy adalah class yang mengatur musuh-musuh dalam game. Musuh bergerak dari kanan ke kiri layar dan dapat bertabrakan dengan karakter utama. Class ini mewarisi dari class Animation untuk menangani animasi sprite.

---

## **📌 Properti Enemy**  

1. **velocity** → Kecepatan pergerakan musuh ke kiri
2. **image** → Spritesheet musuh
3. **xPos** → Posisi X musuh
4. **yPos** → Posisi Y musuh
5. **dy** → Offset vertikal untuk animasi
6. **spriteW** → Lebar sprite (450)
7. **spriteH** → Tinggi sprite (450)
8. **proportion** → Faktor skala (2)

---

## **🔀 Alur pada Enemy**  

1. **Inisialisasi Musuh**  
   - Musuh dibuat dengan posisi awal di sisi kanan layar
   - Kecepatan pergerakan diatur
   - Animasi sprite diatur melalui class Animation

2. **Pergerakan Musuh**  
   - Musuh bergerak ke kiri dengan kecepatan yang ditentukan
   - Ketika musuh keluar dari layar (xPos < -width/4), posisi direset ke kanan
   - Pergerakan berlangsung terus menerus

3. **Sistem Spawn Musuh**  
   - Musuh muncul secara acak dari 3 jenis: Ice Golem, Lava Golem, Earth Golem
   - Kecepatan musuh bervariasi antara 10-40 pixel per frame
   - Musuh baru muncul setelah musuh sebelumnya keluar dari layar

4. **Collision dengan Karakter**  
   - Musuh dapat bertabrakan dengan karakter utama
   - Collision detection menggunakan library p5.collide2D
   - Saat bertabrakan, karakter kehilangan nyawa

---

## **🎮 Jenis Musuh**  

1. **Ice Golem** → Musuh dengan sprite es
2. **Lava Golem** → Musuh dengan sprite lava
3. **Earth Golem** → Musuh dengan sprite tanah

---

## **⚙️ Parameter Constructor**  

- **image** → Spritesheet musuh
- **xPos** → Posisi X awal (width - 225)
- **yPos** → Posisi Y (height - 225)
- **dy** → Offset vertikal (-10)
- **spriteW** → Lebar sprite (450)
- **spriteH** → Tinggi sprite (450)
- **proportion** → Faktor skala (2)
- **velocity** → Kecepatan pergerakan (10)

---

## **🔄️ Method Utama**  

- **move()** → Menggerakkan musuh ke kiri
- **getxPos()** → Mengambil posisi X musuh
- **getSpriteW()** → Mengambil lebar sprite
- **getProportion()** → Mengambil faktor skala
- **resetxPos()** → Reset posisi X ke kanan layar
- **setVelocity(velocity)** → Mengatur kecepatan musuh

---
