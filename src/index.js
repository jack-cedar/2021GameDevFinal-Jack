import { drawMap } from './drawMap.js';
import { input } from './inputHandler.js';
import {player} from './player.js';
import { changeMapTo } from "./mapData.js"

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
var currentMap = 2
var mapData = changeMapTo(currentMap)
var tileScale = 1
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













