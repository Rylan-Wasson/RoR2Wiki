import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Subheader from "../components/Subheader";
import Calculator from "../util/Calculator";

const CalculatorPage = () => {
    const [APRounds, setAPRounds] = useState(0);
    const [Crowbars, setCrowbars] = useState(0);
    const [DelicateWatches, setDelicateWatches] = useState(0);
    const [FocusCrystals, setFocusCrystals] = useState(0);
    const [CritGlasses, setCritGlasses] = useState(0);
    const [StickyBombs, setStickyBombs] = useState(0);
    const [ATGMissiles, setAtgMissiles] = useState(0);
    const [KjarosBands, setKjarosBands] = useState(0);
    const [RunaldsBands, setRunaldsBands] = useState(0);
    const [Clovers, setClovers] = useState(0);
    const [BrilliantBehemoths, setBrilliantBehemoths] = useState(0);
    const [LaserScopes, setLaserScopes] = useState(0);
    const [PocketICBMs, setPocketICBMs] = useState(0);
    const [ShapedGlass, setShapedGlass] = useState(0);
    const [PlasmaShrimp, setPlasmaShrimp] = useState(0);
    const [Polylutes, setPolylutes] = useState(0);

    const [vsBoss, setVsBoss] = useState(false);
    const [vsHealthy, setVsHealthy] = useState(false);
    const [watchesBroken, setWatchesBroken] = useState(false);
    const [meleeRange, setMeleeRange] = useState(false);
    const [bandsActive, setBandsActive] = useState(false);
    const [shieldsUp, setShieldsUp] = useState(true);
    const [perfectLuck, setPerfectLuck] = useState(false);
    const [terribleLuck, setTerribleLuck] = useState(false);

    const [Damage, setDamage] = useState(100);
    
    useEffect(() => {
        var items = {
            APRounds: vsBoss ? APRounds : 0,
            Crowbars: vsHealthy ? Crowbars : 0,
            DelicateWatches: watchesBroken ? 0 : DelicateWatches,
            FocusCrystals: meleeRange ? FocusCrystals : 0,
            CritGlasses,
            StickyBombs,
            ATGMissiles,
            KjarosBands: bandsActive ? KjarosBands : 0,
            RunaldsBands: bandsActive ? RunaldsBands : 0,
            Clovers,
            BrilliantBehemoths,
            LaserScopes,
            PocketICBMs,
            ShapedGlass,
            PlasmaShrimp: shieldsUp ? PlasmaShrimp : 0,
            Polylutes,
            perfectLuck,
            terribleLuck,
        };
        setDamage(Calculator.calculate(items));
    }, [APRounds, Crowbars, DelicateWatches, FocusCrystals, CritGlasses, StickyBombs, KjarosBands, RunaldsBands,
        ATGMissiles, Clovers, BrilliantBehemoths, LaserScopes, PocketICBMs, ShapedGlass, PlasmaShrimp, Polylutes,
        vsBoss, vsHealthy, watchesBroken, meleeRange, bandsActive, shieldsUp, perfectLuck, terribleLuck])

    const minimumZero = (x) => {
        if (x < 0) return 0;
        else return x;
    }

    return (
        <>
            <Subheader title="Damage Calculator"/>
            <div className="flex justify-evenly flex-wrap p-2">
                <Counter fn={(x) => setAPRounds(minimumZero(APRounds + x))} count={APRounds} imageSrc="src/assets/images/items/Armor-Piercing_Rounds.webp"></Counter>
                <Counter fn={(x) => setCrowbars(minimumZero(Crowbars + x))} count={Crowbars} imageSrc="src/assets/images/items/Crowbar.webp"></Counter>
                <Counter fn={(x) => setDelicateWatches(minimumZero(DelicateWatches + x))} count={DelicateWatches} imageSrc="src/assets/images/items/Delicate_Watch.webp"></Counter>
                <Counter fn={(x) => setFocusCrystals(minimumZero(FocusCrystals + x))} count={FocusCrystals} imageSrc="src/assets/images/items/Focus_Crystal.webp"></Counter>
                <Counter fn={(x) => setCritGlasses(minimumZero(CritGlasses + x))} count={CritGlasses} imageSrc="src/assets/images/items/Lens-Maker's_Glasses.webp"></Counter>
                <Counter fn={(x) => setStickyBombs(minimumZero(StickyBombs + x))} count={StickyBombs} imageSrc="src/assets/images/items/Sticky_Bomb.webp"></Counter>
                <Counter fn={(x) => setKjarosBands(minimumZero(KjarosBands + x))} count={KjarosBands} imageSrc="src/assets/images/items/Kjaro's_Band.webp"></Counter>
                <Counter fn={(x) => setRunaldsBands(minimumZero(RunaldsBands + x))} count={RunaldsBands} imageSrc="src/assets/images/items/Runald's_Band.webp"></Counter>
                <Counter fn={(x) => {
                    setAtgMissiles(minimumZero(ATGMissiles + PlasmaShrimp + x))
                    setPlasmaShrimp(0)
                }} count={ATGMissiles} imageSrc="src/assets/images/items/ATG_Missile_Mk._1.webp"></Counter>
                <Counter fn={(x) => setClovers(minimumZero(Clovers + x))} count={Clovers} imageSrc="src/assets/images/items/57_Leaf_Clover.webp"></Counter>
                <Counter fn={(x) => setBrilliantBehemoths(minimumZero(BrilliantBehemoths + x))} count={BrilliantBehemoths} imageSrc="src/assets/images/items/Brilliant_Behemoth.webp"></Counter>
                <Counter fn={(x) => setLaserScopes(minimumZero(LaserScopes + x))} count={LaserScopes} imageSrc="src/assets/images/items/Laser_Scope.webp"></Counter>
                <Counter fn={(x) => setPocketICBMs(minimumZero(PocketICBMs + x))} count={PocketICBMs} imageSrc="src/assets/images/items/Pocket_I.C.B.M..webp"></Counter>
                <Counter fn={(x) => {
                    setPlasmaShrimp(minimumZero(PlasmaShrimp + ATGMissiles + x))
                    setAtgMissiles(0)
                }} count={PlasmaShrimp} imageSrc="src/assets/images/items/Plasma_Shrimp.webp"></Counter>
                <Counter fn={(x) => setPolylutes(minimumZero(Polylutes + x))} count={Polylutes} imageSrc="src/assets/images/items/Polylute.webp"></Counter>
                <Counter fn={(x) => setShapedGlass(minimumZero(ShapedGlass + x))} count={ShapedGlass} imageSrc="src/assets/images/items/Shaped_Glass.webp"></Counter>
            </div>
            <div className="flex justify-evenly flex-wrap flex-row">
                <label className="flex flex-row items-center w-64">
                    <input id="vsBoss" name="vsBoss" className="w-8 h-8 m-2" type="checkbox" checked={vsBoss} onChange={() => setVsBoss(!vsBoss)}/>
                    <p className="text-xl">Vs Boss</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="vsHealthy" name="vsHealthy" className="w-8 h-8 m-2" type="checkbox" checked={vsHealthy} onChange={() => setVsHealthy(!vsHealthy)}/>
                    <p className="text-xl">Vs Healthy Target</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="watchesBroken" name="watchesBroken" className="w-8 h-8 m-2" type="checkbox" checked={watchesBroken} onChange={() => setWatchesBroken(!watchesBroken)}/>
                    <p className="text-xl">Watches Broken</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="meleeRange" name="meleeRange" className="w-8 h-8 m-2" type="checkbox" checked={meleeRange} onChange={() => setMeleeRange(!meleeRange)}/>
                    <p className="text-xl">In Melee Range</p>
                </label>
            </div>
            <div className="flex justify-evenly flex-wrap flex-row mb-4">
                <label className="flex flex-row items-center w-64">
                    <input id="bandsActive" name="bandsActive" className="w-8 h-8 m-2" type="checkbox" checked={bandsActive} onChange={() => setBandsActive(!bandsActive)}/>
                    <p className="text-xl">Bands Active</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="shieldsUp" name="shieldsUp" className="w-8 h-8 m-2" type="checkbox" checked={shieldsUp} onChange={() => setShieldsUp(!shieldsUp)}/>
                    <p className="text-xl">Shields Up</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="perfectLuck" name="perfectLuck" className="w-8 h-8 m-2" type="checkbox" checked={perfectLuck} onChange={() => {
                        if (!perfectLuck) setTerribleLuck(false);
                        setPerfectLuck(!perfectLuck)
                    }}/>
                    <p className="text-xl">Perfect Luck</p>
                </label>
                <label className="flex flex-row items-center w-64">
                    <input id="terribleLuck" name="terribleLuck" className="w-8 h-8 m-2" type="checkbox" checked={terribleLuck} onChange={() => {
                        if (!terribleLuck) setPerfectLuck(false);
                        setTerribleLuck(!terribleLuck);
                    }}/>
                    <p className="text-xl">Terrible Luck</p>
                </label>
            </div>
            
            {/* <Subheader title="Calculation:"/> */}
            <Subheader title={`${Math.round(Damage).toLocaleString()}% Usual Damage`}></Subheader>
        </>
    );
}
 
export default CalculatorPage;