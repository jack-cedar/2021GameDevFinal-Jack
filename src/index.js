import {drawGame_map} from './drawMap.js';
import {player} from './player.js';
import {gameMap} from './map_data.js';
    
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let player01 = new player()

let tileX = 16;
let tileY = 16;
let mapX = 50;
let mapY = 25;
function mapIndex(x, y){return((y * mapX)+ x)}
document.addEventListener("keydown", keyPressed)
            function keyPressed(){
                switch (event.keyCode){
                case 87:
                    if (gameMap[mapIndex(player01.position[0],player01.position[1])-mapX]==0){
                        player01.position[1]--
                    }  
                break;
                case 68:
                    if (gameMap[mapIndex(player01.position[0],player01.position[1])+1]==0){
                        player01.position[0]++
                    }  
                break;
                case 83:
                    if (gameMap[mapIndex(player01.position[0],player01.position[1])+mapX]==0){
                        player01.position[1]++
                    }
                break;
                case 65:
                    if (gameMap[mapIndex(player01.position[0],player01.position[1])-1]==0){
                        player01.position[0]--
                    }  
                break;}}


    let pTime = 1;
    function gameLoop(cTime){
        if (ctx == null) {return;}
        
        let dTime = cTime - pTime;
        pTime = cTime;
        ctx.clearRect(0, 0, 800, 400);
        requestAnimationFrame(gameLoop)
        drawGame_map(tileX, tileY, mapY, mapX, ctx)
        player01.draw(ctx, tileX, tileY)
        console.log(gameMap[mapIndex(player01.position[0],player01.position[1])])
        
    }
    gameLoop();
    
        

