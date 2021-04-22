import {drawGame_map} from './drawMap.js';
import {player} from './player.js';
import {gameMap01, gameMap02} from './map_data.js';  
let map_data = gameMap01;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let player01 = new player()
document.addEventListener("keydown", keyPressed)

var stone_set = document.getElementById("stone_tileset");
let tileX = 32;
let tileY = 32;
let mapX = 30;
let mapY = 20;
let HAS_KEY = false;
function keyPressed(){
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.move();break;
    case 68:player01.nPos[0]+=1;player01.move();break;
    case 83:player01.nPos[1]+=1;player01.move();break;
    case 65:player01.nPos[0]-=1;player01.move();break;}}
    let pTime = 1;
    
    function gameLoop(cTime){
        if (ctx == null) {return;}
        let dTime = cTime - pTime;
        pTime = cTime;
        ctx.clearRect(0, 0, 960, 640);
        drawGame_map(stone_set,tileX, tileY, mapY, mapX, ctx, map_data)
        
       
        player01.draw(ctx, tileX, tileY)
        player01.update()
        requestAnimationFrame(gameLoop)
    }
    gameLoop();
    
        


