export class player{
    constructor(){
        this.position = [4,3];
        this.dimentions = [16, 16]
    }
    draw(ctx, tileX, tileY){
        ctx.fillRect(tileX*this.position[0], tileY*this.position[1], tileX ,tileY)
    }
}