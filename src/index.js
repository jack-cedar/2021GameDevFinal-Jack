//Imports//
import {mapIndex, gameMap01, gameMap02} from './map_data.js'
import {drawMap_data} from './drawMap.js';
import {player} from './player.js';
import {enemy} from './enemy.js';
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
//Declaring Variables & Objects//

let tileX = 32;
let tileY = 32;
let mapX = 30;
let mapY = 20;
let pTime = 1;
let attackY = 540
let attackX = 87.5
let map_data = gameMap01;
let player01 = new player(map_data)
let target = enemy;

let IS_FIGHTING = false;
let rat = new enemy(10, 2)
target = rat;
//Input Handler//

canvas.addEventListener('click', clicked)
document.addEventListener("keydown", keyPressed)

function keyPressed(){
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.update();break;
    case 68:player01.nPos[0]+=1;player01.update();break;
    case 83:player01.nPos[1]+=1;player01.update();break;
    case 65:player01.nPos[0]-=1;player01.update();break;}}
function clicked(event){
    const rect = canvas.getBoundingClientRect()
    let x = event.clientX-rect.left;
    let y = event.clientY-rect.top;
    let distance = Math.sqrt(((x-attackX)*(x-attackX))+((y-attackY)*(y-attackY)))
    console.log(distance)
    if (x < (x+attackX)){
        console.log('true')

    }

    
}
//Game Loop//


function gameLoop(cTime){
    if (ctx == null) {return;}
    let dTime = cTime - pTime;
    pTime = cTime;
    
    ctx.clearRect(0, 0, 960, 640);
    drawMap_data(tileX, tileY, mapY, mapX, ctx, map_data) 
    if (mapIndex(player01.nPos[0], player01.nPos[1]) == mapIndex(target.cPos[0], target.cPos[1]) || mapIndex(player01.cPos[0], player01.cPos[1]) == mapIndex(target.cPos[0], target.cPos[1] ))  {
        IS_FIGHTING = true;
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.75;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = 'white';
        ctx.font = "30px Arial";
        ctx.fillText("Battle Screen", 10, 50); 
        ctx.fillText("Player Health: "+player01.stats.hp, 30, 500);
        ctx.fillText("Enemy Health: "+target.hp, 650, 500);
        ctx.fillStyle = 'blue';
        ctx.globalAlpha = 0.2;
        ctx.fillRect(30, 525, 115, 30);
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.75;
        ctx.fillText("ATTACK", 30, 550);
        ctx.globalAlpha = 1;
        
    }
    if (IS_FIGHTING == true){player01.cPos[0] = rat.cPos[0], player01.cPos[1] = rat.cPos[1]}
    rat.draw(ctx, tileX, tileY);
    player01.draw(ctx, tileX, tileY);
    player01.update(map_data, IS_FIGHTING);
    requestAnimationFrame(gameLoop);
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
    
        


