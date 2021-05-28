document.getElementById("input").value = "";
var input = document.getElementById("input").value;
var output = ":> ";
var log = "";


function run() {
    
    switch(input){
        case "help": document.getElementById("input").value = "";break;
        case "clear": log = "", document.getElementById("input").value = "";break;
        default:break;
    }
    
}
function upateLog() {
    log = log + output;
    run();
    document.getElementById("input").value = "";
    
}
function updateOut() {
    input = document.getElementById("input").value
    output = log + ":> " + input + " ";
}

document.addEventListener("keydown", keyPressed => {
    switch(event.keyCode){
        case 13: output = ":> " +input; upateLog(); break;  
    }
})
        


function gameLoop(){
    updateOut()
    document.getElementById("output").innerHTML = " "
    document.getElementById("output").innerHTML = output
    requestAnimationFrame(gameLoop);
}
gameLoop();