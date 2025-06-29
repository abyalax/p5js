# Troubleshooting Guide - Game "Tulia's Adventures"

## 🚨 Common Issues & Solutions

### 1. Game Tidak Muncul di Browser

#### Problem
- Game tidak loading atau layar kosong
- Console error terkait p5.js

#### Solutions
```bash
# 1. Cek apakah server berjalan
npm start

# 2. Cek port yang digunakan
# Default: http://localhost:3000

# 3. Cek console browser untuk error
F12 → Console tab
```

#### Common Causes
- Server tidak berjalan
- Port sudah digunakan
- File path salah
- CDN p5.js tidak loading

---

### 2. Assets Tidak Loading

#### Problem
- Gambar tidak muncul
- Audio tidak berfungsi
- Font tidak loading

#### Solutions
```javascript
// 1. Cek path file assets
// Pastikan path relatif benar
'./assets/character/walking.png'

// 2. Cek struktur folder
public/
├── assets/
│   ├── character/
│   ├── enemies/
│   └── sounds/

// 3. Cek preload function
function preload() {
    // Pastikan semua asset dimuat
    gameSound = loadSound('./assets/sounds/soundtrack.mp3');
}
```

#### Common Causes
- Path file salah
- File tidak ada
- Permission file
- CORS issues

---

### 3. Collision Detection Tidak Bekerja

#### Problem
- Karakter tidak mendeteksi musuh
- Collision box tidak akurat

#### Solutions
```javascript
// 1. Cek library p5.collide2D
// Pastikan sudah di-include di HTML
<script src="https://cdn.jsdelivr.net/gh/bmoren/p5.collide2D@0.7/p5.collide2d.min.js"></script>

// 2. Cek parameter precision
isColliding(enemy, [0.8, 1], [0.5, 0.7])
// [0.8, 1] = 80% width, 100% height untuk karakter
// [0.5, 0.7] = 50% width, 70% height untuk musuh

// 3. Debug collision box
// Uncomment kode debug di character.js
rect(this.xPos + (100 - charPrecision[0] * 100),
     (this.yPos - this.dy) - ((charPrecision[1]) * 100 - 100),
     this.spriteW / this.proportion * charPrecision[0],
     this.spriteH / this.proportion * charPrecision[1])
```

#### Common Causes
- Library tidak ter-load
- Parameter precision salah
- Posisi objek tidak akurat

---

### 4. Audio Tidak Berfungsi

#### Problem
- Background music tidak diputar
- Sound effect tidak ada

#### Solutions
```javascript
// 1. Cek library p5.sound
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>

// 2. Cek autoplay policy browser
// User harus berinteraksi dulu sebelum audio bisa diputar

// 3. Cek file audio
// Pastikan format MP3 dan file tidak corrupt

// 4. Debug audio loading
console.log('Audio loaded:', gameSound);
gameSound.play();
```

#### Common Causes
- Browser autoplay policy
- File audio corrupt
- Library tidak ter-load
- User belum berinteraksi

---

### 5. Performance Issues

#### Problem
- Game lag atau frame drop
- Memory leak

#### Solutions
```javascript
// 1. Cek frame rate
frameRate(30); // Set ke 30 FPS

// 2. Optimize rendering
// Gunakan sprite sheet untuk animasi
// Kurangi jumlah objek yang di-render

// 3. Memory management
// Reset objek saat restart
this.score.resetScore();
this.life.resetLives();

// 4. Cek browser performance
F12 → Performance tab → Record
```

#### Common Causes
- Frame rate terlalu tinggi
- Terlalu banyak objek
- Memory leak
- Browser performance

---

### 6. Screen Transition Issues

#### Problem
- Screen tidak berubah
- Tombol tidak berfungsi

#### Solutions
```javascript
// 1. Cek global variables
console.log('Current screen:', g_currentScreen);
console.log('Screens object:', screens);

// 2. Cek button click handler
// Pastikan mousePressed() ter-implementasi

// 3. Cek screen objects
console.log('Initial screen:', initialScreen);
console.log('Game screen:', gameScreen);
```

#### Common Causes
- Global variable tidak ter-set
- Button click handler tidak ada
- Screen object tidak ter-initialize

---

### 7. Animation Issues

#### Problem
- Sprite tidak beranimasi
- Frame tidak berubah

#### Solutions
```javascript
// 1. Cek sprite sheet
console.log('Image dimensions:', this.imgWidth, this.imgHeight);
console.log('Sprite dimensions:', this.spriteW, this.spriteH);

// 2. Cek matrix generation
console.log('Animation matrix:', this.matrix);

// 3. Cek current frame
console.log('Current frame:', this.currentFrame);

// 4. Cek show() method dipanggil
// Pastikan show() dipanggil setiap frame
```

#### Common Causes
- Sprite sheet dimensions salah
- Matrix tidak ter-generate
- show() method tidak dipanggil
- Frame rate terlalu cepat/lambat

---

### 8. Parallax Background Issues

#### Problem
- Background tidak bergerak
- Efek parallax tidak smooth

#### Solutions
```javascript
// 1. Cek velocity values
console.log('Background velocities:', velocities);

// 2. Cek Scenery objects
this.background.forEach((scenery, index) => {
    console.log(`Layer ${index}:`, scenery.velocity);
});

// 3. Cek move() method
// Pastikan move() dipanggil setiap frame

// 4. Cek image dimensions
// Pastikan gambar sesuai dengan canvas size
```

#### Common Causes
- Velocity = 0 (tidak bergerak)
- move() method tidak dipanggil
- Image dimensions tidak sesuai
- Canvas size berubah

---

## 🔧 Debug Tools

### Browser Developer Tools
```javascript
// 1. Console logging
console.log('Debug info:', variable);

// 2. Performance monitoring
F12 → Performance → Record

// 3. Network monitoring
F12 → Network → Check asset loading

// 4. Memory profiling
F12 → Memory → Take heap snapshot
```

### p5.js Debug Functions
```javascript
// 1. Frame rate display
frameRate(30);
console.log('FPS:', frameRate());

// 2. Mouse position
console.log('Mouse:', mouseX, mouseY);

// 3. Canvas size
console.log('Canvas:', width, height);
```

---

## 📋 Pre-deployment Checklist

### Technical Checks
- [ ] Server berjalan di port yang benar
- [ ] Semua assets ter-load dengan benar
- [ ] Audio berfungsi setelah user interaction
- [ ] Collision detection akurat
- [ ] Performance optimal (30 FPS)
- [ ] Memory tidak leak

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Compatibility
- [ ] Touch controls berfungsi
- [ ] Responsive design
- [ ] Performance di mobile

---

## 🆘 Getting Help

### Debug Steps
1. **Check Console** → F12 → Console tab
2. **Check Network** → F12 → Network tab
3. **Check Performance** → F12 → Performance tab
4. **Check Sources** → F12 → Sources tab

### Common Error Messages
```javascript
// "p5 is not defined"
// → p5.js library tidak ter-load

// "loadImage is not a function"
// → p5.js tidak ter-initialize

// "collideRectRect is not defined"
// → p5.collide2D library tidak ter-load

// "loadSound is not a function"
// → p5.sound library tidak ter-load
```

### Support Resources
- [p5.js Documentation](https://p5js.org/reference/)
- [p5.sound Documentation](https://p5js.org/reference/#/libraries/p5.sound)
- [p5.collide2D Documentation](https://github.com/bmoren/p5.collide2D)

---

*Troubleshooting guide ini membantu developer mengatasi masalah umum dalam pengembangan dan maintenance game "Tulia's Adventures".* 