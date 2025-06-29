# API Reference - Game "Tulia's Adventures"

## 📚 Overview

Dokumen ini berisi referensi lengkap untuk semua class, method, dan properti yang digunakan dalam game "Tulia's Adventures".

## 🎮 Core Classes

### Animation Class

**Base class untuk semua objek animasi dalam game.**

#### Constructor
```javascript
new Animation(image, xPos, yPos, dy, spriteW, spriteH, proportion)
```

#### Properties
- `image` (p5.Image) - Spritesheet gambar
- `imgWidth` (number) - Lebar total spritesheet
- `imgHeight` (number) - Tinggi total spritesheet
- `xPos` (number) - Posisi X di layar
- `yPos` (number) - Posisi Y di layar
- `dy` (number) - Offset vertikal
- `spriteW` (number) - Lebar setiap frame
- `spriteH` (number) - Tinggi setiap frame
- `proportion` (number) - Faktor skala
- `matrix` (Array) - Koordinat frame dalam spritesheet
- `currentFrame` (number) - Frame saat ini

#### Methods
- `show()` - Menampilkan frame animasi saat ini
- `animate()` - Memajukan ke frame berikutnya
- `makeMatrix()` - Membuat array koordinat frame

---

### Character Class

**Karakter utama pemain yang dapat bergerak dan melompat.**

#### Constructor
```javascript
new Character(image, heart, xPos, yPos, dy, spriteW, spriteH, proportion)
```

#### Properties
- `yInit` (number) - Posisi Y awal (ground level)
- `yPos` (number) - Posisi Y saat ini
- `gravity` (number) - Nilai gravitasi (default: 4)
- `jumpVelocity` (number) - Kecepatan lompatan
- `jumps` (number) - Jumlah lompatan (max: 2)
- `isInvulnerable` (boolean) - Status invulnerable
- `heart` (p5.Image) - Gambar hati untuk efek visual

#### Methods
- `jump()` - Melakukan lompatan (returns boolean)
- `applyGravity()` - Menerapkan gravitasi
- `setInvulnerable()` - Set status invulnerable
- `isColliding(enemy, charPrecision, enemyPrecision)` - Deteksi tabrakan

---

### Enemy Class

**Musuh yang bergerak dari kanan ke kiri layar.**

#### Constructor
```javascript
new Enemy(image, xPos, yPos, dy, spriteW, spriteH, proportion, velocity)
```

#### Properties
- `velocity` (number) - Kecepatan pergerakan

#### Methods
- `move()` - Menggerakkan musuh ke kiri
- `getxPos()` - Mengambil posisi X
- `getSpriteW()` - Mengambil lebar sprite
- `getProportion()` - Mengambil faktor skala
- `resetxPos()` - Reset posisi X ke kanan
- `setVelocity(velocity)` - Mengatur kecepatan

---

### Scenery Class

**Sistem latar belakang bergerak dengan efek parallax.**

#### Constructor
```javascript
new Scenery(image, velocity)
```

#### Properties
- `image` (p5.Image) - Gambar latar belakang
- `velocity` (number) - Kecepatan pergerakan
- `x1` (number) - Posisi X gambar pertama
- `x2` (number) - Posisi X gambar kedua

#### Methods
- `show()` - Menampilkan dua gambar latar belakang
- `move()` - Menggerakkan latar belakang

---

### Score Class

**Sistem skor yang bertambah secara otomatis.**

#### Constructor
```javascript
new Score()
```

#### Properties
- `score` (number) - Nilai skor saat ini

#### Methods
- `show()` - Menampilkan skor di layar
- `addScore()` - Menambah skor (0.05 per frame)
- `resetScore()` - Reset skor ke 0

---

### Life Class

**Sistem nyawa pemain dengan tampilan ikon hati.**

#### Constructor
```javascript
new Life(max, initial, heart)
```

#### Properties
- `max` (number) - Jumlah maksimal nyawa
- `initial` (number) - Jumlah nyawa awal
- `current` (number) - Jumlah nyawa saat ini
- `width` (number) - Lebar ikon (50px)
- `height` (number) - Tinggi ikon (50px)
- `heart` (p5.Image) - Gambar ikon hati

#### Methods
- `show()` - Menampilkan ikon hati
- `gainLife()` - Menambah nyawa
- `loseLife()` - Mengurangi nyawa
- `getCurrent()` - Mengambil jumlah nyawa
- `resetLives()` - Reset nyawa ke maksimal

---

## 🖥️ Screen Classes

### InitialScreen Class

**Layar awal game dengan menu dan judul.**

#### Constructor
```javascript
new InitialScreen()
```

#### Properties
- `bgImages` (Array) - Array gambar latar belakang
- `background` (Array) - Array objek Scenery
- `startButton` (StartButton) - Tombol mulai
- `customFont` (p5.Font) - Font khusus

#### Methods
- `preload(pathsToImages)` - Memuat gambar dan font
- `setup(velocities)` - Mengatur objek dan tombol
- `_text()` - Menampilkan teks judul
- `draw()` - Render seluruh layar

---

### GameScreen Class

**Layar permainan utama dengan semua elemen game.**

#### Constructor
```javascript
new GameScreen()
```

#### Properties
- `images` (Object) - Kumpulan gambar game
- `background` (Array) - Array objek Scenery
- `score` (Score) - Objek skor
- `enemies` (Array) - Array musuh
- `life` (Life) - Objek nyawa
- `enemyIndex` (number) - Indeks musuh aktif
- `restartButton` (RestartButton) - Tombol restart

#### Methods
- `preload(pathsToImages)` - Memuat gambar
- `setup(velocities)` - Mengatur objek game
- `handleCollision()` - Menangani tabrakan
- `handleGameOver()` - Menangani game over
- `handleEnemies()` - Mengelola musuh
- `draw()` - Render layar game

---

## 🎛️ UI Components

### StartButton Class

**Tombol untuk memulai game.**

#### Constructor
```javascript
new StartButton(text, x, y)
```

#### Properties
- `text` (string) - Teks tombol
- `x` (number) - Posisi X
- `y` (number) - Posisi Y

#### Methods
- `draw()` - Menampilkan tombol
- `isClicked()` - Cek apakah tombol diklik

---

### RestartButton Class

**Tombol untuk restart game.**

#### Constructor
```javascript
new RestartButton(text, x, y)
```

#### Properties
- `text` (string) - Teks tombol
- `x` (number) - Posisi X
- `y` (number) - Posisi Y

#### Methods
- `draw()` - Menampilkan tombol
- `isClicked()` - Cek apakah tombol diklik

---

## 🌐 Global Variables

### Game State
- `g_character` (Character) - Karakter utama
- `g_currentScreen` (string) - Screen aktif
- `g_isGameOver` (boolean) - Status game over

### Audio
- `gameSound` (p5.SoundFile) - Background music
- `jumpSound` (p5.SoundFile) - Sound effect lompat

### Screen Objects
- `initialScreen` (InitialScreen) - Objek layar awal
- `gameScreen` (GameScreen) - Objek layar game
- `screens` (Object) - Mapping screen names ke objects

---

## 🎮 Event Handlers

### p5.js Functions
- `preload()` - Memuat semua assets
- `setup()` - Inisialisasi game
- `draw()` - Game loop utama
- `keyPressed()` - Handle keyboard input

### Keyboard Controls
- `ArrowUp` - Melompat (karakter)

### Mouse Controls
- `Mouse Click` - Interaksi dengan tombol

---

## 🔧 Utility Functions

### Collision Detection
```javascript
collideRectRect(x1, y1, w1, h1, x2, y2, w2, h2)
```
- Menggunakan library p5.collide2D
- Returns boolean untuk collision

### Audio Functions
```javascript
loadSound(path) // Memuat audio file
play() // Memutar audio
loop() // Loop audio
```

### Image Functions
```javascript
loadImage(path) // Memuat gambar
image(img, x, y, w, h) // Menampilkan gambar
```

---

## 📊 Data Types

### Common Types
- `number` - Angka (integer/float)
- `string` - Teks
- `boolean` - True/false
- `Array` - Array/list
- `Object` - Object JavaScript
- `p5.Image` - Gambar p5.js
- `p5.SoundFile` - Audio file p5.js
- `p5.Font` - Font p5.js

### Custom Types
- `Character` - Karakter pemain
- `Enemy` - Musuh
- `Scenery` - Latar belakang
- `Score` - Sistem skor
- `Life` - Sistem nyawa
- `InitialScreen` - Layar awal
- `GameScreen` - Layar game
- `StartButton` - Tombol mulai
- `RestartButton` - Tombol restart

---

*API Reference ini mencakup semua komponen yang diperlukan untuk memahami dan mengembangkan game "Tulia's Adventures".* 