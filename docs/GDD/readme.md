# Game Design Document (GDD)

- [Game Design Document (GDD)](#game-design-document-gdd)
  - [1. Overview](#1-overview)
  - [2. Gameplay](#2-gameplay)
    - [2.1 Core Mechanics](#21-core-mechanics)
    - [2.2 Controls](#22-controls)
    - [2.3 Level Design](#23-level-design)
  - [3. Visual \& Audio](#3-visual--audio)
    - [3.1 Art Style](#31-art-style)
    - [3.2 Sound Design](#32-sound-design)
    - [3.3 Assets Character](#33-assets-character)

## 1. Overview
| | |
|---|---|
| **Judul Game** | Tulia's Adventures  |
| **Genre** | Platformer  |
| **Platform** | Web (p5.js) |  
| **Tools** | Visual Studio Code |  
| **Assets** | [craftpix.net](https://craftpix.net/freebies/free-2d-fantasy-elf-warrior-character-sprites/) , [free-game-assets.itch.io](https://free-game-assets.itch.io/free-horizontal-game-backgrounds) ,  |  
| **Elevator Pitch** | Petualangan Tulia untuk menelusuri hutan dengan melewati ringtangan monster yang ada. |

## 2. Gameplay
### 2.1 Core Mechanics

|  |  |
|------|----------------|
| **Mekanisme utama**   | Pemain berjalan menelusuri hutan ( otomatis ketika game dimulai ) dan lompat untuk menghindari monster |
| **Tujuan permainan**  | Seberapa jauh pemain dapat berjalan menelusuri hutan dan melwewati rintangan monster |
| **Score**             | Setiap kali pemain dapat menghindar dari monster maka score akan bertambah |
| **Game Over**         | Pemain secara default memiliki 3 nyawa, jika pemain menabrak monster 3 kali maka game over. |  


### 2.2 Controls
|  |  |
|------|---------------|
| **Keyboard**   | Arrow atas untuk melompat, klik 2 kali untuk melompat lagi lebih tinggi |
| **Mouse**  | Untuk interaksi klik button |  

### 2.3 Level Design
- Serangan monster kadang cepat kadang lambat

## 3. Visual & Audio
### 3.1 Art Style
Animasi berjelajah di hutan 

### 3.2 Sound Design
| | |
|------|---------------|
| Musik Latar Belakang | <audio controls><source src="../../assets/sounds/soundtrack.mp3" type="audio/mpeg"></audio>|
| Sound Jump | <audio controls><source src="../../assets/sounds/jump.mp3" type="audio/mpeg"></audio>|

### 3.3 Assets Character
Character Tulia, source : [craftpix.net](https://craftpix.net/freebies/free-2d-fantasy-elf-warrior-character-sprites/)
  <img title="a title" alt="Character Tulia" src="../../assets/character/walking.png">
  
Character Monster, source : [craftpix.net](https://craftpix.net/freebies/free-golem-tiny-style-2d-character-sprites/)
  1. Earth Golem
  <img title="a title" alt="Earth Golem" src="../../assets/enemies/earth_golem.png">

  2. Ice Golem
  <img title="a title" alt="Ice Golem" src="../../assets/enemies/ice_golem.png">

  3. Lava Golem
  <img title="a title" alt="Lava Golem" src="../../assets/enemies/lava_golem.png">

