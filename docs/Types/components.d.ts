import p5 from "p5";

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