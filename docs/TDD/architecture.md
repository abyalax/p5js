# Arsitektur Game "Tulia's Adventures"

## 🏗️ Diagram Arsitektur

```
┌─────────────────────────────────────────────────────────────┐
│                    GAME ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐    ┌─────────────────┐                │
│  │   InitialScreen │    │   GameScreen    │                │
│  │                 │    │                 │                │
│  │ ┌─────────────┐ │    │ ┌─────────────┐ │                │
│  │ │ StartButton │ │    │ │RestartButton│ │                │
│  │ └─────────────┘ │    │ └─────────────┘ │                │
│  │ ┌─────────────┐ │    │ ┌─────────────┐ │                │
│  │ │   Scenery   │ │    │ │   Scenery   │ │                │
│  │ │ (Background)│ │    │ │ (Background)│ │                │
│  │ └─────────────┘ │    │ └─────────────┘ │                │
│  └─────────────────┘    │ ┌─────────────┐ │                │
│                         │ │  Character  │ │                │
│                         │ │             │ │                │
│                         │ │ ┌─────────┐ │ │                │
│                         │ │ │Animation│ │ │                │
│                         │ │ └─────────┘ │ │                │
│                         │ └─────────────┘ │                │
│                         │ ┌─────────────┐ │                │
│                         │ │    Enemy    │ │                │
│                         │ │             │ │                │
│                         │ │ ┌─────────┐ │ │                │
│                         │ │ │Animation│ │ │                │
│                         │ │ └─────────┘ │ │                │
│                         │ └─────────────┘ │                │
│                         │ ┌─────────────┐ │                │
│                         │ │    Score    │ │                │
│                         │ └─────────────┘ │                │
│                         │ ┌─────────────┐ │                │
│                         │ │    Life     │ │                │
│                         │ └─────────────┘ │                │
│                         └─────────────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Flow Game

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ InitialScreen│───▶│ GameScreen  │───▶│ Game Over   │
│             │    │             │    │             │
│ - Show Title│    │ - Game Loop │    │ - Show      │
│ - Start Btn │    │ - Character │    │   Game Over │
│ - Background│    │ - Enemies   │    │ - Restart   │
└─────────────┘    │ - Score     │    │   Button    │
                   │ - Life      │    └─────────────┘
                   └─────────────┘           │
                          │                  │
                          ▼                  │
                   ┌─────────────┐           │
                   │ Life = 0?   │           │
                   └─────────────┘           │
                          │                  │
                          ▼                  │
                   ┌─────────────┐           │
                   │   Restart   │◀──────────┘
                   └─────────────┘
```

## 📦 Class Hierarchy

### Base Classes
```
Animation (Base Class)
├── Character
└── Enemy
```

### Independent Classes
```
Scenery
Score
Life
StartButton
RestartButton
```

### Screen Classes
```
InitialScreen
GameScreen
```

## 🔗 Dependencies

### InitialScreen Dependencies
- `Scenery` → Background layers
- `StartButton` → UI component
- `p5.Font` → Custom font

### GameScreen Dependencies
- `Scenery` → Background layers
- `Character` → Player character
- `Enemy` → Enemy objects
- `Score` → Score system
- `Life` → Life system
- `RestartButton` → UI component

### Character Dependencies
- `Animation` → Base animation class
- `p5.collide2D` → Collision detection
- `Life` → For invulnerable effect

### Enemy Dependencies
- `Animation` → Base animation class

## 🎮 Game Loop

```
1. Setup
   ├── Load assets (preload)
   ├── Initialize screens
   └── Start background music

2. Main Loop (draw)
   ├── Render current screen
   ├── Handle user input
   ├── Update game state
   └── Check collisions

3. Screen Management
   ├── InitialScreen → GameScreen
   ├── GameScreen → Game Over
   └── Game Over → GameScreen (restart)
```

## 🔧 Technical Stack

### Frontend
- **p5.js** → Game engine and rendering
- **p5.sound** → Audio management
- **p5.collide2D** → Collision detection
- **HTML5 Canvas** → Game display

### Backend
- **Express.js** → Static file server
- **Node.js** → Runtime environment

### Assets
- **PNG Images** → Sprites and backgrounds
- **MP3 Audio** → Sound effects and music
- **OTF Font** → Custom typography

## 🎯 Design Patterns

### 1. Inheritance Pattern
- `Character` dan `Enemy` mewarisi dari `Animation`
- Memungkinkan reuse code untuk animasi sprite

### 2. Composition Pattern
- `GameScreen` menggunakan multiple objects
- `InitialScreen` menggunakan `Scenery` dan `StartButton`

### 3. State Management
- Global state untuk screen management
- Local state untuk game objects

### 4. Observer Pattern
- Collision detection sebagai event system
- Score updates berdasarkan game events

## 🔒 Data Flow

```
User Input → Screen Controller → Game Objects → State Update → Render
     │              │                │              │           │
     ▼              ▼                ▼              ▼           ▼
Key Press    Screen Change    Character Move   Score Add   Canvas Draw
Mouse Click  Button Click    Enemy Spawn      Life Lose   Background
```

## 🚀 Performance Considerations

### Optimization Techniques
1. **Sprite Sheet** → Mengurangi HTTP requests
2. **Object Pooling** → Reuse enemy objects
3. **Efficient Collision** → Using p5.collide2D library
4. **Frame Rate Control** → 30 FPS for consistent gameplay

### Memory Management
1. **Asset Preloading** → Load all assets at startup
2. **Object Cleanup** → Reset objects on restart
3. **Event Listener Management** → Proper cleanup

---

*Arsitektur ini dirancang untuk maintainability, scalability, dan performance yang optimal.* 