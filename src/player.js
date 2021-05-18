import { mapIndex } from "./index.js"

export class player{
    constructor(xPos, yPos, mapData){
        this.cPos = [xPos, yPos]
        this.pPos = [xPos, yPos]
        this.nPos = [xPos, yPos]
        this.map = mapData
        this.speed = 1
        this.IS_MOVING = false;
        this.CAN_MOVE = true;
    }
    
    checkNpos(){
        //console.log(this.map[mapIndex(this.nPos[0], this.nPos[1])])
        switch (this.map[mapIndex(this.nPos[0], this.nPos[1])]) {
            case 0x01:this.CAN_MOVE = true
                
                break;
        
            default: this.CAN_MOVE = false 
                break;
        }
        this.nPos[0] = this.cPos[0]
        this.nPos[1] = this.cPos[1]
        
    }
    moveU(){this.nPos[1]-=8;}
    moveD(){this.nPos[1]+=8;}
    moveL(){this.nPos[0]-=8;}
    moveR(){this.nPos[0]+=8;}
    draw(ctx){ctx.drawImage(playerSprite, this.cPos[0], this.cPos[1]);}
    update(){
        this.IS_MOVING=false
        
        if (this.CAN_MOVE == true){
        if((this.cPos[1])>(this.nPos[1])){this.IS_MOVING=true;this.cPos[1]-=this.speed}
        if((this.cPos[1])<(this.nPos[1])){this.IS_MOVING=true;this.cPos[1]+=this.speed}
        if((this.cPos[0])>(this.nPos[0])){this.IS_MOVING=true;this.cPos[0]-=this.speed}
        if((this.cPos[0])<(this.nPos[0])){this.IS_MOVING=true;this.cPos[0]+=this.speed}}
    }
}