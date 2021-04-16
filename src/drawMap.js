import {gameMap} from './map_data.js'
var stone_set = document.getElementById("stone_tileset");
export function drawGame_map(tileX, tileY, mapY, mapX, ctx){
    for(var y = 0; y < mapY; y++){
        for(var x = 0; x < mapX; x++){
            switch(gameMap[((y*mapX)+x)]){
                case 0x00:
                    ctx.drawImage(stone_set, 112, 112, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x01:
                    ctx.drawImage(stone_set, 16, 16, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x02:
                    ctx.drawImage(stone_set, 32, 16, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x03:
                    ctx.drawImage(stone_set, 64, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x04:
                    ctx.drawImage(stone_set, 16, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x05:
                    ctx.drawImage(stone_set, 96, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x06:
                    ctx.drawImage(stone_set, 0, 16, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x07:
                    ctx.drawImage(stone_set, 96, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x08:
                    ctx.drawImage(stone_set, 16, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x09:
                    ctx.drawImage(stone_set, 64, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x10:
                    ctx.drawImage(stone_set, 0, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break; 
                case 0x11:
                    //ctx.drawImage(stone_set, 0, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x12:
                    ctx.drawImage(stone_set, 32, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;   
                case 0x13:
                    ctx.drawImage(stone_set, 32, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                    break;
            }
        }
    }
}