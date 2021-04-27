//Imports//
import {mapIndex, gameMap01, gameMap02} from './map_data.js'
import {drawMap_data} from './drawMap.js';
import {player} from './player.js';
import {enemy} from './enemy.js';
import {button} from './button.js'
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
//Declaring Variables & Objects//
let tileX = 32;
let tileY = 32;
let mapX = 30;
let mapY = 20;
let pTime = 1;
let map_data = gameMap01;
let player01 = new player(map_data)
let atkButton = new button(180,540, 15, 'blue')
let target = enemy;
let IS_FIGHTING = false;
let rat = new enemy(10, 2)
target = rat;
//Input Handlers//

canvas.addEventListener('click', clicked)
document.addEventListener("keydown", keyPressed)

function keyPressed(){
    if (IS_FIGHTING != false){
    IS_FIGHTING = false 
    return}else{
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.update();break;
    case 68:player01.nPos[0]+=1;player01.update();break;
    case 83:player01.nPos[1]+=1;player01.update();break;
    case 65:player01.nPos[0]-=1;player01.update();break;}}
}
    function clicked(event){
    const rect = canvas.getBoundingClientRect()
    let x = event.clientX-rect.left;
    let y = event.clientY-rect.top;
    if(atkButton.buttonClicked(x,y,IS_FIGHTING)=="clicked"){
        player01.attack(target)
    }
}
//Game Loop//
function gameLoop(cTime){
    if (ctx == null) {return;}
    let dTime = cTime - pTime;
    pTime = cTime;
    
    ctx.clearRect(0, 0, 960, 640);
    drawMap_data(tileX, tileY, mapY, mapX, ctx, map_data) 
    
    rat.draw(ctx, tileX, tileY);
    player01.draw(ctx, tileX, tileY);
    battleMenu()
    player01.update(map_data, IS_FIGHTING)
    requestAnimationFrame(gameLoop);
}
gameLoop();
//Change Map//
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
//Draw the Battle menu//
function battleMenu(){
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
        atkButton.draw(ctx)
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.75;
        ctx.fillText("ATTACK", 30, 550);
        ctx.globalAlpha = 1;        
    }
}
    
        


