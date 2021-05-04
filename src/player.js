import {map, mapIndex} from './map_data.js'
import {setTile} from './index.js'

export class player{
    constructor(map_data){
        this.cPos = [7,4];
        this.pPos = [7,4];
        this.nPos =  [7,4];
        this.dimentions = [16, 16];
        this.cMap = map_data;
        this.gameMap = map;
        this.CAN_MOVE = false;
        this.HAS_KEY = false;
        this.stats = {
            hpMax:20,
            hp: 20,
            dmg: 5,
        }  
    }
    distanceToTarget(target){
        let distance = Math.sqrt(
        ((target.cPos[0]-this.cPos[0])*(target.cPos[0]-this.cPos[0]))+
        ((target.cPos[1]-this.cPos[1])*(target.cPos[1]-this.cPos[1])))
        return distance;
    }
    attack(target){
        target.hp -= this.stats.dmg
        if (target.hp <= 0) {target.cPos[0] = 10000, target.cPos[1] = 10000;}else{
            this.stats.hp -= target.dmg
        }
    }
    move(){
        
        console.log(this.HAS_KEY)
        switch (this.cMap[mapIndex(this.nPos[0], this.nPos[1])]){
            case 0x00:this.CAN_MOVE = 1;break;
            case 0x10:this.CAN_MOVE = 1;break;
            case 0x0e:this.CAN_MOVE = 1;this.HAS_KEY = true; this.gameMap[mapIndex(this.nPos[0], this.nPos[1])]=0x00;;break;
            case 0x0f:this.CAN_MOVE = 0;if(this.HAS_KEY==true){this.CAN_MOVE = true;this.gameMap[((this.cMap[mapIndex(this.cPos[0], this.cPos[1])]))]=0x00};break;
            default  :this.CAN_MOVE = 0; 
        }
        this.nPos[0] = this.cPos[0]
        this.nPos[1] = this.cPos[1]
        switch (this.CAN_MOVE) {
            case 1:return(true);
            default:this.nPos = [this.cPos[0],this.cPos[1]]
            break;
        }  
    }
    draw(ctx, tileX, tileY){
        ctx.fillStyle = 'black';
        ctx.fillRect(tileX*this.cPos[0], tileY*this.cPos[1], tileX ,tileY)
    }
    update(map_data){
        this.cMap = map_data;
    }
}
//
