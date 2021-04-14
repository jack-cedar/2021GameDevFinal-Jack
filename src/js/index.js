//import {player} from './player.js'
//import {enemy} from './enemy.js'
// {entity} from './entityHandler.js'
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');


function onAttack(){
    playerMain.attack(target);
}

let target = rat;
let rat = new enemy(10, 2)
let playerEntity = new entity (playerEntity)
let playerMain = new player()
ctx.fillRect(0, 0, 20, 20);


