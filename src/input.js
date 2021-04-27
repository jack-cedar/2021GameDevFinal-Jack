let canvas = document.getElementById("myCanvas");
canvas.addEventListener('click', clicked)
document.addEventListener("keydown", keyPressed)
export function keyPressed(event, IS_FIGHTING){
    if (IS_FIGHTING != false){
    IS_FIGHTING = false 
    return}else{
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.update();break;
    case 68:player01.nPos[0]+=1;player01.update();break;
    case 83:player01.nPos[1]+=1;player01.update();break;
    case 65:player01.nPos[0]-=1;player01.update();break;}}
}
export function clicked(event, button){
        const rect = canvas.getBoundingClientRect()
        let x = event.clientX-rect.left;
        let y = event.clientY-rect.top;
        if(atkButton.buttonClicked(x,y,IS_FIGHTING)=="clicked"){
            player01.attack(target)
        }
}