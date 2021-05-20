export class input{
    keyboard(player){
        document.addEventListener("keydown", keyPressed)
        
        function keyPressed(){
            
        if(player.IS_MOVING == true){return}
        switch (event.keyCode){
        case 87:player.moveU();break;
        case 83:player.moveD();break;
        case 65:player.moveL();break;
        case 68:player.moveR();break;}}

    }
}