import {drawGame_map} from './drawMap.js'
import {player} from './player.js'


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let tileX = 16;
let tileY = 16;
let mapX = 10;
let mapY = 10;
var sY;
var sX;
//let rat = new enemy(10, 2)



//let playerMain = new player()
//let target = rat;


    
    
    
    let pTime = 1;
    function gameLoop(cTime){
        if (ctx == null) {return;}
        let dTime = cTime - pTime;
        pTime = cTime;
        requestAnimationFrame(gameLoop)
        drawGame_map(tileX, tileY, mapY, mapX, ctx)
       
 
    }
    gameLoop();


