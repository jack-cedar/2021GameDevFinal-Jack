import { mapIndex } from "./index.js"
import { changeMapTo } from "./mapData.js"
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
        this.cMap = 1
        this.IS_MOVING = false;
        this.CAN_MOVE = false;

        this.hp = 20
    }
    
    checkNpos(){
            switch (this.map[mapIndex(this.nPos[0]+8, this.nPos[1]+16)]) {
                case 0x01:this.CAN_MOVE = true;break;
                case 37:this.CAN_MOVE = true; this.cMap = changeMapTo(2);this.nPos[0]+=(8*3);break;
                case 27:this.CAN_MOVE = true; this.cMap = changeMapTo(2);this.nPos[0]+=(8*3);break;
                
                case 40:this.CAN_MOVE = true; this.cMap = changeMapTo(1);this.nPos[0]-=(8*3);break;
                case 30:this.CAN_MOVE = true; this.cMap = changeMapTo(1);this.nPos[0]-=(8*3);break;
                default: this.CAN_MOVE = false 
                this.nPos[0] = this.cPos[0]
                this.nPos[1] = this.cPos[1]
                break;
            }
            switch (this.map[mapIndex(this.nPos[0], this.nPos[1]+16)]) {
                case 0x01:this.CAN_MOVE = true;break;
                case 37:this.CAN_MOVE = true; this.cMap = changeMapTo(2);this.nPos[0]+=(8*3);break;
                case 27:this.CAN_MOVE = true; this.cMap = changeMapTo(2);this.nPos[0]+=(8*3);break;
                
                case 40:this.CAN_MOVE = true; this.cMap = changeMapTo(1);this.nPos[0]-=(8*3);break;
                case 30:this.CAN_MOVE = true; this.cMap = changeMapTo(1);this.nPos[0]-=(8*3);break;
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
    moveD(){this.spriteFrame=0;this.nPos[1]+=8;this.checkNpos();}
    moveU(){this.spriteFrame=1;this.nPos[1]-=8;this.checkNpos();}
    moveL(){this.spriteFrame=2;this.nPos[0]-=8;this.checkNpos();}
    moveR(){this.spriteFrame=3;this.nPos[0]+=8;this.checkNpos();}
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