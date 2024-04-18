import React from "react"

const Calculator = {
    clover(procChance, clovers){
        //critChance
        //stickyBombChance
        //atgChance
        //polyluteChance
        //y = 1 - (1 - p)^(x + 1), where p is the base proc chance and x is the number of clovers
        var chance = 1 - Math.pow((1 - procChance),(clovers + 1));
        if (chance > 1){
            return 1;
        }else{
            return chance;
        }
    },
  

    calculate(props) { // Whatever fields you want/need as input
        var damage = 100;

        //APRounds
        damage *= (1 + (0.2 * props.APRounds));
        //Crowbars
        damage *= (1 + (0.75 * props.Crowbars));
        //DelicateWatches
        damage *= (1 + (0.2 * props.DelicateWatches));
        //FocusCrystals
        damage *= (1 + (0.2 * props.FocusCrystals));

        //CritGlasses: under "criticals"
       
        //StickyBombs 5% (+5% per stack)
        if (props.StickyBombs >= 20 ) {
            damage *= (1 + (1.8));
        }else if(props.perfectLuck == true && props.StickyBombs > 0){
            damage *= (1 + (1.8));
        }else if(props.terribleLuck == true){
            damage *= 1;
        } else {
            //damage *= (1 + (1.8 * 0.05 * props.StickyBombs));
            damage *= (1+ (1.8 * this.clover(props.StickyBombs*0.05, props.Clovers)));
        }

        //ATGMissiles: under "missiles"
       
        //KjarosBands and RunaldsBands
        damage *= (1 + (3 * props.KjarosBands) + (2.5 * props.RunaldsBands));

        //Clovers

        //BrilliantBehemoths
        if (props.BrilliantBehemoths >= 1) {
            damage *= 1.6;
        }
        
        //LaserScopes: under "criticals"

        //PocketICBMs: under "missiles"

        //ShapedGlass
        damage *= Math.pow(2, props.ShapedGlass);

        //PlasmaShrimp: under "missiles"
        
        //Polylutes 25% chance LUCK-BASED
 
        if(props.perfectLuck == true){
            damage *= (1+ (0.6 * 1 * (3*props.Polylutes)));
        }else if(props.terribleLuck == true){
            damage *= 1;
        
        }else{
            damage *= (1+ (0.6 * this.clover(0.25,props.Clovers) * (3*props.Polylutes)));
        }
        
        //missiles LUCKBASED
        if(props.perfectLuck == true){
            if (props.PocketICBMs >= 1) {
                damage *= (1 + (3 * 1 * props.ATGMissiles * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
                damage *= (1 + (0.4 * props.PlasmaShrimp * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
            } else {
                damage *= (1 + (3 * 1 * props.ATGMissiles));
                damage *= (1 + (0.4 * props.PlasmaShrimp));
            }

        }else if(props.terribleLuck == true){
            if (props.PocketICBMs >= 1) {
                //damage *= (1 + (3 * this.clover(0.1,props.Clovers) * props.ATGMissiles * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
                damage *= (1 + (0.4 * props.PlasmaShrimp * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
            } else {
                //damage *= (1 + (3 * this.clover(0.1,props.Clovers) * props.ATGMissiles));
                damage *= (1 + (0.4 * props.PlasmaShrimp));
            }
        }else{
            if (props.PocketICBMs >= 1) {
                damage *= (1 + (3 * this.clover(0.1,props.Clovers) * props.ATGMissiles * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
                damage *= (1 + (0.4 * props.PlasmaShrimp * 3 * (1 + 0.5 * (props.PocketICBMs - 1))));
            } else {
                damage *= (1 + (3 * this.clover(0.1,props.Clovers) * props.ATGMissiles));
                damage *= (1 + (0.4 * props.PlasmaShrimp));
            }

        }
        

        //criticals LUCK-BASED
        if(props.CritGlasses >= 10){
            damage *= (2 + props.LaserScopes);
        }else if( props.perfectLuck == true && props.CritGlasses > 0){
            damage *= (2 + props.LaserScopes);
        
        }else if(props.terribleLuck == true){
            damage *= 1;
        }else{
            damage *= (1 + this.clover(0.1 * props.CritGlasses,props.Clovers) * (1 + props.LaserScopes));
        }

        return damage;
    }
}

export default Calculator;
