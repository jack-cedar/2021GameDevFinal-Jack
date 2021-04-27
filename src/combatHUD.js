import {mapIndex} from './map_data.js'
import {button} from './button.js'
export function combatScreen(ctx, player01, target, IS_FIGHTING){
    if (mapIndex(player01.nPos[0], player01.nPos[1]) == mapIndex(target.cPos[0], target.cPos[1]) || mapIndex(player01.cPos[0], player01.cPos[1]) == mapIndex(target.cPos[0], target.cPos[1] ))  {
        IS_FIGHTING = true;
        const atkButton = new button(180,540, 15, 'blue')
        let targethpBar = 250-((250/(target.hpMax)*(target.hpMax-target.hp)))
        let playerhpBar = 250-((250/(player01.stats.hpMax)*(player01.stats.hpMax-player01.stats.hp)))
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.75;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = 'white';
        ctx.fillText("Combat HUD", 10, 50); 
        ctx.fillRect(32, 450, playerhpBar, 16);
        ctx.fillText("Player Health: "+player01.stats.hp, 32, 500);
        ctx.fillRect(650, 450, targethpBar, 16);
        ctx.fillText("Enemy Health: "+target.hp, 650, 500);
        atkButton.draw(ctx)
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.75;
        ctx.fillText("ATTACK", 32, 550);
        ctx.globalAlpha = 1;        
    }
}