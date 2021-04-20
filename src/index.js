import {drawGame_map} from './drawMap.js';
import {player} from './player.js';
import {gameMap01, gameMap02} from './map_data.js';  
let map_data = gameMap01;
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
                    if (map_data[mapIndex(player01.position[0],player01.position[1])-mapX]==0){
                        player01.position[1]--
                    }
                break;
                case 68:
                    if (map_data[mapIndex(player01.position[0],player01.position[1])+1]==0){
                        player01.position[0]++
                    }
                    else if((mapIndex(player01.position[0], player01.position[1])+1)==275){
                        map_data = gameMap02;
                        player01.position[0]=((player01.position[0])-(mapX-1))
                    }
                break;
                case 83:
                    if (map_data[mapIndex(player01.position[0],player01.position[1])+mapX]==0){
                        player01.position[1]++
                    }
                break;
                case 65:
                    if (map_data[mapIndex(player01.position[0],player01.position[1])-1]==0){
                        player01.position[0]--
                        
                    } 
                    else if((mapIndex(player01.position[0], player01.position[1])+1)==251){
                        map_data = gameMap01;
                        player01.position[0]=((player01.position[0])+(mapX-1))
                    }

                break;}}
    let pTime = 1;
    function gameLoop(cTime){
        if (ctx == null) {return;}
        let dTime = cTime - pTime;
        pTime = cTime;
        ctx.clearRect(0, 0, 800, 640);
        drawGame_map(stone_set,tileX, tileY, mapY, mapX, ctx, map_data)
        player01.draw(ctx, tileX, tileY)
        requestAnimationFrame(gameLoop)
    }
    gameLoop();
    
        


