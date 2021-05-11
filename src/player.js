import {map, mapIndex} from './map_data.js'


export class player{
    constructor(map_data){
        this.cPos = [7,4];
        this.pPos = [7,4];
        this.nPos =  [7,4];
        this.dimentions = [16, 16];
        this.cMap = map_data;
        this.gameMap = map;
        this.setTile = 0;
        this.CAN_MOVE = false;
        this.KEYS = 0;
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
        if (target.hp <= 0) {target.cPos[0] = 10000, target.cPos[1] = 10000;this.gameMap[this.setTile+(30*4)+7]=0x00, this.update}else{
            this.stats.hp -= target.dmg
        }
        console.log(target.cPos)
    }
    move(){
        
        //console.log(this.setTile)
        switch (this.cMap[mapIndex(this.nPos[0], this.nPos[1])]){
            case 0x00:this.CAN_MOVE = 1;break;
            case 0x10:this.CAN_MOVE = 1;break;
            case 0x0f:this.CAN_MOVE = 0;if(this.KEYS>0){this.CAN_MOVE = 1; this.KEYS--;};break;
            case 0x0e:this.CAN_MOVE = 1;this.KEYS++;break;
            default  :this.CAN_MOVE = 0; 
        }
        switch(this.cMap[mapIndex(this.cPos[0], this.cPos[1])]){
            case 0x0e:this.gameMap[this.setTile+(30*4)+7]=0x00;break;
            case 0x0f:this.gameMap[this.setTile+(30*4)+7]=0x00;;break;
            default: break;
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
    update(map_data, setTile, IS_FIGHTING){
        this.cMap = map_data;
        this.setTile = setTile;
        switch (IS_FIGHTING) {
            case false: this.CAN_MOVE = true
            default: this.CAN_MOVE = false
                break;
        }
    }
}
//
