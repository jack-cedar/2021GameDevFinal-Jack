import {gameMap} from './map_data.js'

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let tileX = 16;
let tileY = 16;
let mapX = 50;
let mapY = 25;
var sY;
var sX;
//let rat = new enemy(10, 2)
var stone_set = document.getElementById("stone_tileset");


//let playerMain = new player()
//let target = rat;


    
    
    
    let pTime = 1;
    function gameLoop(cTime){
        if (ctx == null) {return;}
        let dTime = cTime - pTime;
        pTime = cTime;
        requestAnimationFrame(gameLoop)
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
                    case 0x10:
                        ctx.drawImage(stone_set, 0, 32, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
                        break; 
                    case 0x11:
                        ctx.drawImage(stone_set, 0, 0, tileX, tileY,x*tileX, y*tileY, tileX, tileY);
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
    gameLoop();


