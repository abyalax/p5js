## **InitialScreen - Layar Awal Game**  

InitialScreen adalah class yang bertanggung jawab untuk menampilkan layar awal dalam game. Class ini menangani gambar latar belakang, tombol mulai, serta teks judul game dengan font khusus.

---

## **📌 Properti InitialScreen**  

1. **bgImages** → Array untuk menyimpan gambar latar belakang
2. **background** → Array untuk menyimpan objek Scenery
3. **startButton** → Objek StartButton untuk memulai game
4. **customFont** → Font khusus untuk teks judul game

---

## **🔀 Alur pada InitialScreen**  

1. **Preload Assets**  
   - Gambar latar belakang dimuat dari array paths
   - Font khusus dimuat dari file customFont.otf
   - Semua asset disimpan dalam properti class

2. **Setup Layar**  
   - Objek Scenery dibuat untuk setiap gambar latar belakang
   - Kecepatan setiap lapisan diatur sesuai array velocities
   - Tombol Start dibuat di posisi tengah layar

3. **Rendering Layar**  
   - Latar belakang ditampilkan dengan efek parallax
   - Teks judul "Tulia's Adventures" ditampilkan di tengah
   - Tombol Start ditampilkan di bawah judul

4. **Interaksi Pengguna**  
   - Pengguna dapat mengklik tombol Start
   - Saat diklik, game berpindah ke GameScreen
   - Layar ini adalah entry point game

---

## **🎨 Elemen Visual**  

1. **Latar Belakang Parallax**  
   - Init Sky (velocity: 0) - tidak bergerak
   - Clouds 1 (velocity: 0.1) - bergerak lambat
   - Rocks (velocity: 0) - tidak bergerak
   - Clouds 2 (velocity: 0.3) - bergerak sedang
   - Ground All (velocity: 0) - tidak bergerak

2. **Teks Judul**  
   - Font: Custom font (customFont.otf)
   - "Tulia's" - ukuran 150px
   - "Adventures" - ukuran 50px
   - Warna: Putih dengan stroke hitam
   - Posisi: Tengah layar

3. **Tombol Start**  
   - Teks: "Start Game"
   - Posisi: Tengah layar (width/2, height/1.6)
   - Style: Sesuai dengan class StartButton

---

## **⚙️ Parameter Method**  

### **preload(pathsToImages)**
- **pathsToImages** → Array string path gambar latar belakang

### **setup(velocities)**
- **velocities** → Array kecepatan untuk setiap lapisan background

---

## **🔄️ Method Utama**  

- **preload()** → Memuat gambar dan font
- **setup()** → Mengatur objek latar belakang dan tombol
- **_text()** → Menampilkan teks judul (private method)
- **draw()** → Render seluruh layar awal

---

## **🎮 Transisi ke Game**  

- Saat tombol Start diklik, g_currentScreen berubah ke 'gameScreen'
- GameScreen diinisialisasi dan game dimulai
- Background music mulai diputar

---