import {mapIndex} from './map_data.js'
import {gameMap01, gameMap02} from './map_data.js';  
export class player{
    constructor(){
        this.position = [4,3];
        this.pPos = [4,3];
        this.nPos =  [4,3];
        this.dimentions = [16, 16];
        this.currentMap=gameMap01;
        this.CAN_MOVE = false;
        this.HAS_KEY = false;
        this.checkNpos = function checkNpos(){return this.currentMap[mapIndex(this.nPos[0], this.nPos[1])]}
    }
    move(){
        console.log(this.HAS_KEY)
        switch (this.checkNpos()) {
            case 0x00:this.CAN_MOVE = true;break;
            case 0x0e:this.CAN_MOVE = true; this.HAS_KEY = true,this.currentMap[mapIndex(this.nPos[0], this.nPos[1])]=0x00; break;
            case 0x0f: if(this.HAS_KEY==true){this.CAN_MOVE = true;this.currentMap[mapIndex(this.nPos[0], this.nPos[1])]=0x00};break;
            default :this.CAN_MOVE = false;break;
        }
        if (this.CAN_MOVE == true) {
            this.pPos = [this.position[0], this.position[1]];
            this.position = [this.nPos[0], this.nPos[1]];
        } 
        this.nPos = [this.position[0],this.position[1]]
    }
    draw(ctx, tileX, tileY){
        ctx.fillRect(tileX*this.position[0], tileY*this.position[1], tileX ,tileY)
    }
    update(){
    }
}