import {gameMap01} from './map_data.js'
import {gameMap02} from './map_data.js'
export function drawGame_map(stone_set, tileX, tileY, mapY, mapX, ctx, map_data){
    for(var y = 0; y < mapY; y++){
        for(var x = 0; x < mapX; x++){
             switch(map_data[((y*mapX)+x)]){
                case 0x00:
                    ctx.drawImage(stone_set, 80, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x01:
                    ctx.drawImage(stone_set, 16, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x02:
                    ctx.drawImage(stone_set, 32, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x03:
                    ctx.drawImage(stone_set, 64, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x04:
                    ctx.drawImage(stone_set, 16, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x05:
                    ctx.drawImage(stone_set, 96, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x06:
                    ctx.drawImage(stone_set, 0, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x07:
                    ctx.drawImage(stone_set, 96, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x08:
                    ctx.drawImage(stone_set, 16, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x09:
                    ctx.drawImage(stone_set, 64, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x0a:
                    ctx.drawImage(stone_set, 0, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break; 
                case 0x0b:
                    ctx.drawImage(stone_set, 0, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x0c:
                    ctx.drawImage(stone_set, 32, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;   
                case 0x0d:
                    ctx.drawImage(stone_set, 32, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                    
                    
                default: 
                ctx.drawImage(stone_set, 16, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                break;
            }
        }
    }
}