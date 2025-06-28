import p5 from "p5";
import { Enemy, Life, Scenery, Score } from "./game";
import { RestartButton, StartButton } from "./components";

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