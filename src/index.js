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
mapData = [
    4, 5, 1, 1, 24, 25, 1, 1, 24, 25,
        14, 15, 1, 1, 34, 35, 1, 1, 34, 35,
        1, 1, 1, 1, 44, 45, 1, 1, 44, 45,
        4, 5, 1, 1, 54, 55, 1, 1, 54, 55,
        14, 15, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        4, 5, 1, 1, 1, 1, 1, 1, 1, 1,
        14, 15, 1, 1, 2, 3, 2, 3, 2, 3,
        1, 1, 1, 1, 12, 13, 12, 13, 12, 13,
        1, 1, 1, 1, 22, 23, 22, 23, 22, 23


]

ctx.drawImage(Tileset, 1, 1);
//Game Loop//
function gameLoop(){
    ctx.clearRect(0, 0, screenW, screenH);
    drawMap()
    requestAnimationFrame(gameLoop);
}
gameLoop();

function drawMap(){
for(var y = 0; y < mapH; y++){
    for(var x = 0; x < mapW; x++){
        switch(mapData[((y*mapW)+x)]){
            case 0x01: ctx.drawImage(Tileset, 0*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x02: ctx.drawImage(Tileset, 1*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x03: ctx.drawImage(Tileset, 2*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x04: ctx.drawImage(Tileset, 3*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x05: ctx.drawImage(Tileset, 4*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x06: ctx.drawImage(Tileset, 5*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x07: ctx.drawImage(Tileset, 6*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x08: ctx.drawImage(Tileset, 7*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x09: ctx.drawImage(Tileset, 8*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0a: ctx.drawImage(Tileset, 9*tileW, 0*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0b: ctx.drawImage(Tileset, 0*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0c: ctx.drawImage(Tileset, 1*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0d: ctx.drawImage(Tileset, 2*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0e: ctx.drawImage(Tileset, 3*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x0f: ctx.drawImage(Tileset, 4*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x10: ctx.drawImage(Tileset, 5*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x11: ctx.drawImage(Tileset, 6*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x12: ctx.drawImage(Tileset, 7*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x13: ctx.drawImage(Tileset, 8*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x14: ctx.drawImage(Tileset, 9*tileW, 1*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x15: ctx.drawImage(Tileset, 0*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x16: ctx.drawImage(Tileset, 1*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x17: ctx.drawImage(Tileset, 2*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x18: ctx.drawImage(Tileset, 3*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x19: ctx.drawImage(Tileset, 4*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1a: ctx.drawImage(Tileset, 5*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1b: ctx.drawImage(Tileset, 6*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1c: ctx.drawImage(Tileset, 7*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1d: ctx.drawImage(Tileset, 8*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1e: ctx.drawImage(Tileset, 9*tileW, 2*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x1f: ctx.drawImage(Tileset, 0*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x20: ctx.drawImage(Tileset, 1*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x21: ctx.drawImage(Tileset, 2*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x22: ctx.drawImage(Tileset, 3*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x23: ctx.drawImage(Tileset, 4*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x24: ctx.drawImage(Tileset, 5*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x25: ctx.drawImage(Tileset, 6*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x26: ctx.drawImage(Tileset, 7*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x27: ctx.drawImage(Tileset, 8*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x28: ctx.drawImage(Tileset, 9*tileW, 3*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x29: ctx.drawImage(Tileset, 0*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2a: ctx.drawImage(Tileset, 1*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2b: ctx.drawImage(Tileset, 2*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2c: ctx.drawImage(Tileset, 3*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2d: ctx.drawImage(Tileset, 4*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2e: ctx.drawImage(Tileset, 5*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x2f: ctx.drawImage(Tileset, 6*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x30: ctx.drawImage(Tileset, 7*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x31: ctx.drawImage(Tileset, 8*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x32: ctx.drawImage(Tileset, 9*tileW, 4*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x33: ctx.drawImage(Tileset, 0*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x34: ctx.drawImage(Tileset, 1*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x35: ctx.drawImage(Tileset, 2*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x36: ctx.drawImage(Tileset, 3*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x37: ctx.drawImage(Tileset, 4*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x38: ctx.drawImage(Tileset, 5*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x39: ctx.drawImage(Tileset, 6*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x3a: ctx.drawImage(Tileset, 7*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x3b: ctx.drawImage(Tileset, 8*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x3c: ctx.drawImage(Tileset, 9*tileW, 5*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;

            case 0x3d: ctx.drawImage(Tileset, 0*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x3e: ctx.drawImage(Tileset, 1*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x3f: ctx.drawImage(Tileset, 2*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x40: ctx.drawImage(Tileset, 3*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x41: ctx.drawImage(Tileset, 4*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x42: ctx.drawImage(Tileset, 5*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x43: ctx.drawImage(Tileset, 6*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x44: ctx.drawImage(Tileset, 7*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x45: ctx.drawImage(Tileset, 8*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x46: ctx.drawImage(Tileset, 9*tileW, 6*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x47: ctx.drawImage(Tileset, 0*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x48: ctx.drawImage(Tileset, 1*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x49: ctx.drawImage(Tileset, 2*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4a: ctx.drawImage(Tileset, 3*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4b: ctx.drawImage(Tileset, 4*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4c: ctx.drawImage(Tileset, 5*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4d: ctx.drawImage(Tileset, 6*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4e: ctx.drawImage(Tileset, 7*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x4f: ctx.drawImage(Tileset, 8*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x50: ctx.drawImage(Tileset, 9*tileW, 7*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x51: ctx.drawImage(Tileset, 0*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x52: ctx.drawImage(Tileset, 1*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x53: ctx.drawImage(Tileset, 2*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x54: ctx.drawImage(Tileset, 3*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x55: ctx.drawImage(Tileset, 4*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x56: ctx.drawImage(Tileset, 5*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x57: ctx.drawImage(Tileset, 6*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x58: ctx.drawImage(Tileset, 7*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x59: ctx.drawImage(Tileset, 8*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5a: ctx.drawImage(Tileset, 9*tileW, 8*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5b: ctx.drawImage(Tileset, 0*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5c: ctx.drawImage(Tileset, 1*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5d: ctx.drawImage(Tileset, 2*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5e: ctx.drawImage(Tileset, 3*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x5f: ctx.drawImage(Tileset, 4*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x60: ctx.drawImage(Tileset, 5*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x61: ctx.drawImage(Tileset, 6*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x62: ctx.drawImage(Tileset, 7*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x63: ctx.drawImage(Tileset, 8*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
            case 0x64: ctx.drawImage(Tileset, 9*tileW, 9*tileH, tileW, tileH, x*tileW, y*tileH, tileW*tileScale, tileH*tileScale);break;
        
        }   
    }}
}






