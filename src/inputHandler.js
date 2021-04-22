export class inputHandler{
    constructor(){
        document.addEventListener("keydown", keyPressed)
            function keyPressed(player){
                console.log(event.keyCode)
                switch (event.keyCode){
                case 87:
                    player.nPos[1]--;
                    player.move;
                break;
                case 68:
                    player.nPos[0]++;
                    player.move;
                break;
                case 83:
                    player.nPos[1]++;
                    player.move;
                break;
                case 65:
                    player.nPos[0]--;
                    player.move;
                break;}}

    }
}