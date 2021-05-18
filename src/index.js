import { drawMap } from './drawMap.js';
import { input } from './inputHandler.js';
import {player} from './player.js';
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
//Declaring Variables//
var Tileset = document.getElementById("Tileset")
var playerSprite = document.getElementById("playerSprite")
var screenW = document.getElementById("myCanvas").width
var screenH = document.getElementById("myCanvas").height
var tileW = 8
var tileH = 8
var mapW = screenW/tileW
var mapH = screenH/tileH
var tileScale = 1

var mapData = [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 25, 4, 5, 24, 25, 12, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34, 35, 14, 15, 34, 35, 22, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 44, 45, 1, 1, 44, 45, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 54, 55, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

let player01 = new player(16,16,mapData)
//Inputs//
let wasd = new input()
wasd.keyboard(player01)

//Game Loop//
function gameLoop(){
    ctx.clearRect(0, 0, screenW, screenH);
    drawMap(ctx, mapData, Tileset, tileW, tileH, mapW, mapH, tileScale)
    player01.draw(ctx)
    player01.update()
    requestAnimationFrame(gameLoop);
}
gameLoop();

export function mapIndex(x, y){return((y/tileH * (screenW/tileW))+ x/tileW)}













