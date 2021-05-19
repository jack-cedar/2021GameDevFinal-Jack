import { drawMap } from './drawMap.js';
import { input } from './inputHandler.js';
import {player} from './player.js';

//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
//Declaring Variables//
var Tileset = document.getElementById("Tileset")
var screenW = document.getElementById("myCanvas").width
var screenH = document.getElementById("myCanvas").height
var tileW = 8
var tileH = 8
var mapW = screenW/tileW
var mapH = screenH/tileH
var tileScale = 1
var mapData = [7, 8, 7, 9, 10, 9, 10, 8, 7, 8, 2, 3, 9, 10, 9, 10, 7, 8, 7, 8, 4, 5, 17, 19, 20, 19, 20, 18, 17, 18, 12, 13, 19, 20, 19, 20, 17, 18, 17, 18, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 22, 23, 1, 1, 1, 1, 1, 1, 24, 25, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34, 35, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 44, 45, 14, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 54, 55, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//Creating Player Instance//
let player01 = new player(5, 5, 1, mapData, screenW, screenH)
//Inputs//
let wasd = new input()
wasd.keyboard(player01)
//Game Loop//
function gameLoop(){
    ctx.clearRect(0, 0, screenW, screenH);
    player01.update()
    drawMap(ctx, mapData, Tileset, tileW, tileH, mapW, mapH, tileScale)
    player01.draw(ctx)
    
    requestAnimationFrame(gameLoop);
}
gameLoop();

export function mapIndex(x, y){return((y/tileH * (screenW/tileW))+ x/tileW)}













