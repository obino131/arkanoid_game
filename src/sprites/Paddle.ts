//import vectors for class Paddle
import {  Vector} from "../types";

export class Paddle {
    private paddleImage: HTMLImageElement = new Image ();
    private moveLeft: boolean;
    private moveRight: boolean;

    constructor (
        private speed: number,
        private paddleWeight: number,
        private paddleHeight: number,
        private possition: Vector,
        image: string
    ) {
        this.speed = speed;
        this.paddleWeight = paddleWeight;
        this.paddleHeight = paddleHeight;
        this.possition = possition;
        this.moveLeft = false;
        this.moveRight = false;
        this.paddleImage.src = image;

        //Event Listeners
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    //Getters
    get width(): number {
        return this.paddleWeight
    }

    get height(): number {
        return this.paddleHeight
    }

    get pos(): Vector {
        return this.possition;
    }

    get image(): HTMLImageElement {
        return this.paddleImage;
    }

    get isMovingLeft(): boolean {
        return this.moveLeft
    }

    get isMovingRight(): boolean {
        return this.isMovingRight
    }

    movePaddle(): void {
        if(this.moveLeft) this.pos.x -= this.speed;
        if(this.moveRight) this.pos.x += this.speed;
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft" ) this.moveLeft = false;
        if(e.code === "ArrowRight" || e.key == "ArrowRoght") 
        this.moveRight = false;
    };
    
    handleKeyDown = (e:KeyboardEvent): void => {
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = true;
        if(e.code === "ArrowRight" || e.key === "ArrowRight")
        this.moveRight = true;
    };

    // ---- Two functions above in one function
                /*
                    handleKeyEvent = (e: KeyboardEvent): void => {
                        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
                            this.moveLeft = e.type === "keydown";
                }
                        if (e.code === "ArrowRight" || e.key === "ArrowRight") {
                            this.moveRight = e.type === "keydown";
                } 
            }
            */

}