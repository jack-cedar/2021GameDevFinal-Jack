import {drawGame_map} from './drawMap.js';
import {player} from './player.js';
import {gameMap01} from './map_data.js';  
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let player01 = new player()
var stone_set = document.getElementById("stone_tileset");
let tileX = 32;
let tileY = 32;
let mapX = 25;
let mapY = 20;
function mapIndex(x, y){return((y * mapX)+ x)}
document.addEventListener("keydown", keyPressed)
            function keyPressed(){
                switch (event.keyCode){
                case 87:
                    if (gameMap01[mapIndex(player01.position[0],player01.position[1])-mapX]==0){
                        player01.position[1]--
                    }  
                break;
                case 68:
                    if (gameMap01[mapIndex(player01.position[0],player01.position[1])+1]==0){
                        player01.position[0]++
                    }  
                break;
                case 83:
                    if (gameMap01[mapIndex(player01.position[0],player01.position[1])+mapX]==0){
                        player01.position[1]++
                    }
                break;
                case 65:
                    if (gameMap01[mapIndex(player01.position[0],player01.position[1])-1]==0){
                        player01.position[0]--
                    }  
                break;}}
    let pTime = 1;
    function gameLoop(cTime){
        if (ctx == null) {return;}
        let dTime = cTime - pTime;
        pTime = cTime;
        ctx.clearRect(0, 0, 800, 640);
        drawGame_map(stone_set,tileX, tileY, mapY, mapX, ctx)
        player01.draw(ctx, tileX, tileY)
        requestAnimationFrame(gameLoop)
    }
    gameLoop();
    
        


