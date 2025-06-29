# Technical Design Document (TDD)

## 📋 Overview

Technical Design Document (TDD) ini berisi dokumentasi teknis lengkap untuk game 2D "Tulia's Adventures" yang dibangun menggunakan p5.js. Dokumen ini menjelaskan arsitektur, komponen, dan implementasi teknis dari setiap bagian game.

## 🏗️ Struktur Dokumen

```
docs/TDD/
├── README.md                 # Dokumen ini
├── components/               # Komponen UI
│   └── button.md            # Dokumentasi sistem tombol
├── game/                     # Komponen game utama
│   ├── animation.md         # Sistem animasi sprite
│   ├── character.md         # Karakter utama pemain
│   ├── enemy.md             # Sistem musuh
│   ├── life.md              # Sistem nyawa
│   ├── scenery.md           # Sistem latar belakang
│   └── score.md             # Sistem skor
└── screens/                  # Layar-layar game
    ├── gameScreen.md        # Layar permainan utama
    └── initialScreen.md     # Layar awal game
```

## 🎯 Tujuan TDD

1. **Dokumentasi Arsitektur** → Menjelaskan struktur dan hubungan antar komponen
2. **Spesifikasi Teknis** → Detail implementasi setiap class dan method
3. **Panduan Pengembangan** → Referensi untuk pengembangan dan maintenance
4. **Onboarding Developer** → Membantu developer baru memahami codebase

## 🔧 Teknologi yang Digunakan

- **p5.js** → Library JavaScript untuk creative coding
- **p5.sound** → Library untuk audio
- **p5.collide2D** → Library untuk collision detection
- **Express.js** → Server untuk serving game
- **HTML5 Canvas** → Rendering game

## 🎮 Arsitektur Game

### Core Classes
- **Animation** → Base class untuk semua objek animasi
- **Character** → Karakter utama (extends Animation)
- **Enemy** → Musuh dalam game (extends Animation)
- **Scenery** → Sistem latar belakang bergerak
- **Score** → Sistem skor
- **Life** → Sistem nyawa

### Screen Management
- **InitialScreen** → Layar awal dengan menu
- **GameScreen** → Layar permainan utama
- **Screen Controller** → Mengatur perpindahan antar layar

### UI Components
- **StartButton** → Tombol untuk memulai game
- **RestartButton** → Tombol untuk restart game

## 📊 Game Mechanics

### Core Gameplay
- **Platformer Style** → Karakter dapat melompat untuk menghindari musuh
- **Endless Runner** → Game berlangsung terus sampai game over
- **Score System** → Skor bertambah berdasarkan waktu bertahan
- **Life System** → 3 nyawa, berkurang saat terkena musuh

### Controls
- **ArrowUp** → Melompat (double jump)
- **Mouse Click** → Interaksi dengan tombol

### Collision System
- Menggunakan library p5.collide2D
- Collision box dapat disesuaikan dengan parameter precision
- Sistem invulnerable setelah terkena damage

## 🎨 Visual & Audio

### Graphics
- **Sprite-based Animation** → Menggunakan spritesheet untuk animasi
- **Parallax Background** → Efek kedalaman dengan pergerakan berbeda
- **Custom Font** → Font khusus untuk judul game

### Audio
- **Background Music** → Soundtrack yang loop selama game
- **Sound Effects** → Efek suara untuk lompatan

## 🚀 Deployment

Game dapat dijalankan dengan:
```bash
npm start    # Production mode
npm run dev  # Development mode dengan nodemon
```

Game akan tersedia di `http://localhost:3000`

## 📝 Konvensi Penulisan

Setiap dokumen TDD mengikuti format:
1. **Judul dan Deskripsi** → Penjelasan singkat komponen
2. **Properti** → Daftar properti/atribut class
3. **Alur** → Penjelasan logika dan flow
4. **Parameter** → Detail parameter constructor/method
5. **Method** → Daftar method utama
6. **Implementasi** → Detail teknis implementasi

## 🔄 Maintenance

Dokumen ini harus diperbarui setiap kali ada perubahan pada:
- Arsitektur game
- Penambahan fitur baru
- Perubahan implementasi
- Bug fixes yang signifikan

---

*Dokumen ini dibuat untuk memastikan konsistensi dan maintainability dari codebase game "Tulia's Adventures".* 