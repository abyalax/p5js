import p5 from "p5";

export class GameScreen {
  images: {
    background: p5.Image[],
    character: p5.Image[],
    enemies: p5.Image[],
    gameover: p5.Image[],
    heart: p5.Image[],
    dead: p5.Image[],
  };
  background: Scenery[];
  score: Score;
  enemies: Enemy[];
  life: Life;
  enemyIndex: number;
  restartButton: RestartButton;

  preload(pathsToImages: { name: string; paths: string[] }[]): void
  setup(velocities: number[]): void
  handleCollision(): void
  handleGameOver(): void
  handleEnemies(): void
  draw(): void
}

export class InitialScreen {
  bgImages: p5.Image[];
  background: Scenery[];
  startButton: StartButton;
  customFont: p5.Font;

  preload(pathsToImages: { name: string; paths: string[] }[]): void
  setup(velocities: number[]): void
  _text(): void
  draw(): void
}

export class Animation {
    image: p5.Image
    imgWidth: number
    imgHeight: number
    xPos: number
    yPos: number
    dy: number
    spriteW: number
    spriteH: number
    proportion: number
    matrix: Array<[number, number]>
    currentFrame: number

    show(): void
    animate(): void
    makeMatrix(): Array<[number, number]>
}

export class Character extends Animation {
    yInit: number
    yPos: number
    gravity: number
    jumpVelocity: number
    jumps: number
    isInvulnerable: boolean
    heart: p5.Image

    show(): void
    move(): void
}

export class Enemy extends Animation {
    velocity: number
}

export class Life {
    max: number
    initial: number
    current: number
    width: number
    height: number
    heart: p5.Image

    show(): void
    gainLife(): void
    loseLife(): void
    getCurrent(): void
    resetLives(): void
}

export class Scenery {
    image: p5.Image
    velocity: number
    x1: number
    x2: number

    show(): void
    move(): void
}

export class Score {
    score: number

    show(): void
    addScore(): void
    resetScore(): void
}

export class RestartButton {
    text: string;
    x: number;
    y: number;
    button: p5.Element;

    draw(): void
    restartGame(): void
}

export class StartButton {
    text: string;
    x: number;
    y: number;
    button: p5.Element;

    draw(): void
    changeScreen(): void
}