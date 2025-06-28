import p5 from "p5"

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
