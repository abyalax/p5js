# Actulio Express

A web-based game project built with HTML5, CSS3, and JavaScript, featuring an interactive gaming experience with character animation, enemy interactions, and dynamic scenery.

## 🎮 Live Demo

**[Play the game online](https://actulia.vercel.app/)**

## 🚀 Getting Started

There are multiple ways to run this project. Choose the method that works best for you:

### Method 1: Simple Setup (Recommended for Quick Start)

1. Navigate to the `public` folder
2. Open `index.html` in your browser
3. **Important**: Use a Live Server extension (VS Code) or similar tool
   - The project will not work properly without a live server due to asset loading requirements

### Method 2: Node.js Setup (Recommended for Development)

#### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)

#### Installation Steps

1. **Clone or download the project**
2. **Navigate to the root folder**
   ```bash
   cd actulio-express
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser and go to**
   ```
   http://localhost:3000
   ```

### Method 3: Production Build

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **Access the application at**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
actulio-express/
├── public/                 # Static files (HTML, CSS, JS, assets)
│   ├── assets/            # Game assets (images, sounds)
│   ├── scripts/           # P5JS and JavaScript game logic
│   └── index.html         # Main HTML file
├── docs/                  # Documentation
├── server.js              # Express server
└── package.json           # Project dependencies
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Development**: Nodemon (auto-restart on file changes)

## 📚 Documentation

- **Game Design Document (GDD)**: `docs/GDD/`
- **Technical Design Document (TDD)**: `docs/TDD/`
- **Type Definitions**: `docs/Types/`
- **Diagrams**: `docs/Diagram/`

## 🎯 Features

- Interactive character movement and animation
- Dynamic enemy spawning and AI
- Parallax scrolling background
- Score tracking system
- Health/life system
- Sound effects and background music
- Responsive design

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Project developed for Computer Graphics course (4th Semester)

---

**Note**: For the best experience, use Method 2 (Node.js setup) as it provides the most stable development environment with automatic server restart capabilities.