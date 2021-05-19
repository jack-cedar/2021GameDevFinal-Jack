import { mapIndex } from "./index.js"

export class player{
    constructor(xPos, yPos, speed, mapData, screenW, screenH){
        this.cPos = [xPos*8, yPos*8]
        this.pPos = [xPos*8, yPos*8]
        this.nPos = [xPos*8, yPos*8]
        this.map = mapData
        this.screenW = screenW
        this.screenH = screenH
        this.speed = speed
        this.spriteFrame = 0
        this.IS_MOVING = false;
        this.CAN_MOVE = false;
    }
    
    checkNpos(){
            switch (this.map[mapIndex(this.nPos[0]+8, this.nPos[1]+16)]) {
                case 0x01:this.CAN_MOVE = true;break;
                default: this.CAN_MOVE = false 
                this.nPos[0] = this.cPos[0]
                this.nPos[1] = this.cPos[1]
                break;
            }
            switch (this.map[mapIndex(this.nPos[0], this.nPos[1]+16)]) {
                case 0x01:this.CAN_MOVE = true;break;
                default: this.CAN_MOVE = false 
                this.nPos[0] = this.cPos[0]
                this.nPos[1] = this.cPos[1]
                break;
            }
            console.log(this.screenW)
            if((this.nPos[0]+8)>=this.screenW || (this.nPos[0])<0){
                this.CAN_MOVE = false 
                this.nPos[0] = this.cPos[0]
                this.nPos[1] = this.cPos[1]
            }
    }
    moveU(){this.nPos[1]-=8;this.checkNpos();}
    moveD(){this.nPos[1]+=8;this.checkNpos();}
    moveL(){this.nPos[0]-=8;this.checkNpos();}
    moveR(){this.nPos[0]+=8;this.checkNpos();}
    draw(ctx){ctx.drawImage(playerSprite, 16*this.spriteFrame,0,16,24, this.cPos[0], this.cPos[1],16,24);}
    update(){
        this.IS_MOVING=false
        if (this.CAN_MOVE == true){
        if((this.cPos[1])>(this.nPos[1])){this.IS_MOVING=true;this.cPos[1]-=this.speed}
        if((this.cPos[1])<(this.nPos[1])){this.IS_MOVING=true;this.cPos[1]+=this.speed}
        if((this.cPos[0])>(this.nPos[0])){this.IS_MOVING=true;this.cPos[0]-=this.speed}
        if((this.cPos[0])<(this.nPos[0])){this.IS_MOVING=true;this.cPos[0]+=this.speed}}
    }
}