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
var tileScale = 1
map_data = [
    1, 1, 1, 1, 1, 1, 1, 1, 7, 8,
    1, 1, 1, 1, 1, 1, 1, 1, 17, 18,
    1, 1, 1, 1, 1, 1, 1, 1, 27, 28,
    1, 1, 1, 1, 1, 1, 1, 1, 37, 38,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    5, 6, 1, 1, 1, 1, 1, 1, 1, 1,
    15, 16, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

ctx.drawImage(Tileset, 1, 1);
//Game Loop//
function gameLoop(){
    ctx.clearRect(0, 0, screenW, screenH);
    drawSomthing()
    
    requestAnimationFrame(gameLoop);
  
}
gameLoop();
function drawSomthing(){
for(var y = 0; y <screenH; y+=tileH*tileScale){
    for(var x = 0; x < screenW; x+=tileW*tileScale){
        switch(map_data[((y*tileW)+x)]){
            case 0x01: ctx.drawImage(Tileset, 0*tileW, 0*tileH, tileW, tileH, x, y, tileW*tileScale, tileH*tileScale);break;
            default: ctx.drawImage(Tileset, 0*tileW, 0*tileH, tileW, tileH, x, y, tileW*tileScale, tileH*tileScale);break;

        }
        
    }}
}



