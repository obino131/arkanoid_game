//Types
//Here im importing classes from sprites
//I created Type here
import { Brick } from "../sprites/Brick";
import { Paddle } from "../sprites/Paddle";
import { Ball } from "../sprites/Ball";

//Here I created CanvasView class
export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;
    //All above are types what i created , I added private functionality into our classes
    //A private property of method can only be accessed or called from the class instance itself.

    
    //Here, we are teling TS, that canvasName its gonna be HTML element
    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.scoreDisplay = document.querySelector("#score");
        this.start = document.querySelector("#start");
        this.info = document.querySelector("#info");
    }

    //Here some methods
    //First method will be clear
    // ? -> this is optional chaining. The optional chaining (?.) operator accesses an object's property or calls a function.
    //The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
        clear () : void {
        this.context?.clearRect (0 , 0, this.canvas.width, this.canvas.height);    
    }

    initStartButton (startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this))
    }

    drawScore(score:number): void {
        if(this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    drawInfo(text:string): void {
        if(this.info) this.info.innerHTML=text;
    }

    drawSprite(brick: Brick | Paddle | Ball): void {
        if(!brick) return;

        this.context?.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height
        )
    }
    
    drawBrick(brick: Brick[]): void {
        brick.forEach(brick => this.drawSprite(brick));
    }
}