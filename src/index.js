//Imports//
import {mapIndex,gameMap01, gameMap02} from './map_data.js'
import {drawMap_data} from './drawMap.js';
import {player} from './player.js';
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
//Declaring Variables & Objects//
var tileX = 32;
let tileY = 32;
let mapX = 30;
let mapY = 20;
let pTime = 1;
let map_data = gameMap01;
let player01 = new player(map_data)
//Input Handler//
document.addEventListener("keydown", keyPressed)
function keyPressed(){
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.move();break;
    case 68:player01.nPos[0]+=1;player01.move();break;
    case 83:player01.nPos[1]+=1;player01.move();break;
    case 65:player01.nPos[0]-=1;player01.move();break;}}
//Game Loop//
function gameLoop(cTime){
    if (ctx == null) {return;}
    let dTime = cTime - pTime;
    pTime = cTime;
    ctx.clearRect(0, 0, 960, 640);
    drawMap_data(tileX, tileY, mapY, mapX, ctx, map_data)  
    player01.draw(ctx, tileX, tileY)
    player01.update(map_data);
    requestAnimationFrame(gameLoop)
}
gameLoop();
//Other Functions//
export function changeMap_data(){
    if (map_data == gameMap01 && player01.cPos[0]==9 && player01.cPos[1]==0){
        map_data=gameMap02;
        player01.nPos[0]=9,player01.nPos[1]=19;
        }
    else if (map_data==gameMap02 && player01.cPos[0]==9 && player01.cPos[1]==19){
        map_data=gameMap01;
        player01.nPos[0]=9,player01.nPos[1]=0;
    }
    }
    
        


