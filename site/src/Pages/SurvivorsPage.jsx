import Survivor from '../components/Survivor';
import Subheader from "../components/Subheader";

const commandoSkills = [
    { name:"Double Tap", desc:"Primary\n1.0 Proc Coefficient", details:"Rapidly shoot an enemy for 100% damage." },
    { name:"Phase Round", desc:"Secondary\n1.0 Proc Coefficient\n3s Cooldown", details:"Fire a piercing bullet for 300% damage. Deals 40% more damage every time it passes through an enemy." },
    { name:"Tactical Dive", desc:"Utility\n4s Cooldown", details:"Roll a short distance." },
    { name:"Suppressive Fire", desc:"Special\n1.0 x6+ Proc Coefficient\n9s Cooldown", details:"Stunning.\nFire repeatedly for 100% damage per bullet. The number of shots increases with attack speed." },
    { name:"N/A", desc:"", details:"" },
    { name:"Phase Blast", desc:"Secondary\n0.5 x8 Proc Coefficient\n3s Cooldown", details:"Fire two close-range blasts that deal 8x200% damage total." },
    { name:"Tactical Slide", desc:"Utility\n4s Cooldown", details:"Slide on the ground for a short distance. You can fire while sliding." },
    { name:"Frag Grenade", desc:"Special\n1.0 Proc Coefficient\n5s Cooldown", details:"Throw a grenade that explodes for 700% damage. Can hold up to 2." },
];

const commandoDesc = "The Commando is a jack-of-all-trades character that is reliable in all situations of the game.\n"
+ "Double Tap is powerful at both short and long range, firing quickly and activating many item effects.\n"
+ "Effective use of his Tactical Dive is key to dodging heavily telegraphed attacks.\n"
+ "Suppressive Fire can be used to repeatedly stun a single enemy, or stun a group.\n"
+ "Phase Rounds can pass through walls - use that to your advantage!";

const huntressSkills = [
    { name:"Strafe", desc:"Primary\n1.0 Proc Coefficient", details:"Quickly fire a seeking arrow for 150% damage." },
    { name:"Laser Glaive", desc:"Secondary\n0.8 Proc Coefficient\n7s Cooldown", details:"Throw a seeking glaive that bounces up to 6 times for 250% damage. Damage increases by 10% per bounce." },
    { name:"Blink", desc:"Utility\n7s Cooldown", details:"Disappear and teleport forward." },
    { name:"Arrow Rain", desc:"Special\n0.2 x19 Proc Coefficient\n12s Cooldown", details:"Teleport into the sky. Target an area to rain arrows, slowing all enemies and dealing 330% damage per second." },
    { name:"Flurry", desc:"Primary\n0.7 x3 Proc Coefficient", details:"Draw back a volley of 3 seeking arrows for 3x100% damage. Critical Strikes fire 6 arrows." },
    { name:"N/A", desc:"", details:"" },
    { name:"Phase Blink", desc:"Utility\n2s Cooldown per charge", details:"Disappear and teleport a short distance. Can store up to 3 charges." },
    { name:"Ballista", desc:"Special\n1.0 x3 Proc Coefficient\n12s Cooldown", details:"Teleport backwards into the sky. Fire up to 3 energy bolts, dealing 3x900% damage." },
];

const huntressDesc = "The Huntress is an extremely mobile but fragile survivor with a high damage output.\n"
+ "Remember that Strafe can be uniquely used while sprinting, allowing you to move at high speeds while still taking out potential threats.\n"
+ "Blink and Arrow Rain can be used to reposition closer or used as a dodge in a tight spot.\n"
+ "Laser Glaive will take out pairs of tough targets quickly as it bounces between the two.\n"
+ "Arrow Rain has extremely high damage output and also slows enemies inside, making it great for tough, fast enemies.";

const banditSkills = [
    { name:"Burst", desc:"Primary\n0.5 x5 Proc Coefficient\n0.3s Cooldown per shot", details:"Fire a shotgun burst for 5x100% damage. Can hold up to 4 shells." },
    { name:"Serrated Dagger", desc:"Secondary\n1.0 Proc Coefficient\n4s Cooldown", details:"Lunge and slash for 360% damage. Critical Strikes also cause hemorrhaging." },
    { name:"Smoke Bomb", desc:"Utility\n1.0 Proc Coefficient\n6s Cooldown", details:"Stunning. Deal 200% damage, become invisible, then deal 200% damage again." },
    { name:"Lights Out", desc:"Special\n1.0 Proc Coefficient\n4s Cooldown", details:"Slayer. Fire a revolver shot for 600% damage. Kills reset all your cooldowns." },
    { name:"Blast", desc:"Primary\n1.0 Proc Coefficient\n0.3s Cooldown per shot", details:"Fire a rifle blast for 330% damage. Can hold up to 4 bullets." },
    { name:"Serrated Shiv", desc:"Secondary\n1.0 Proc Coefficient\n4s Cooldown", details:"Throw a hidden blade for 240% damage. Critical Strikes also cause hemorrhaging." },
    { name:"N/A", desc:"", details:"" },
    { name:"Desperado", desc:"Special\n1.0 Proc Coefficient\n4s Cooldown", details:"Slayer. Fire a revolver shot for 600% damage. Kills grant stacking tokens for 10% more Desperado damage." },
];

const banditPassives = [
    { name:"Backstab", desc:"All attacks from behind are Critical Strikes." },
];

const banditDesc = "The Bandit is a high-skill combo character that can dish out devastating backstabs while weaving in and out of stealth.\n"
+ "Your gun can be reloaded while in stealth if you can't afford the downtime, do it while hidden!\n"
+ "A successful reset on Lights Out can easily be the difference between life and death.\n"
+ "Backstab is an important part of the Bandit's kit to utilize, but can be risky against strong melee foes.\n"
+ "The bleed from Serrated Blade can stack, and getting resets on Lights Out against weak enemies can allow you to stack the bleed even higher on a boss.";

const mulTSkills = [
    { name:"Auto-Nailgun", desc:"Primary\n0.6 Proc Coefficient", details:"Rapidly fire nails for 70% damage. Finishes with a blast of 12 nails." },
    { name:"Rebar Puncher", desc:"Primary\n1.0 Proc Coefficient", details:"Fire a piercing rebar that deals 600% damage." },
    { name:"Scrap Launcher", desc:"Primary\n0.6 Proc Coefficient\n1.5s Cooldown", details:"Fire a rocket that explodes for 360% damage. Hold up to 4." },
    { name:"Power-Saw", desc:"Primary\n1.0 Proc Coefficient", details:"Saw nearby enemies for 1000% damage per second." },
    { name:"Blast Canister", desc:"Secondary\n1.0 Proc Coefficient\n6s Cooldown", details:"Stunning. Launch a canister for 220% damage. Drops stun bomblets for 5x44% damage." },
    { name:"Transport Mode", desc:"Utility\n1.0 Proc Coefficient", details:"Heavy. Zoom forward, gaining 200 armor and 220% movement speed. Deals 250% damage to enemies." },
    { name:"Retool", desc:"Special\n0.5s Cooldown", details:"Passively hold TWO equipment at once. Activating 'Retool' switches the active Equipment and MUL-T's primary attack." },
    { name:"Power Mode", desc:"Special\n5s Cooldown", details:"Enter a heavy stance, equipping both your primary attacks at once. Gain 100 armor, but lose -60% movement speed." },
];

const mulTDesc= "MUL-T is an aggressive survivor who has the tools necessary for any job!\n"
+ "Auto-Nailgun has an extremely high damage output, but has a short range, making it risky but strong.\n"
+ "Transport Mode can be both a great tool to run down small groups of monsters, or pack a big punch against larger ones.\n"
+ "Blast Canister can lock down a large cluster of enemies for a long time, helping line up that perfect shot for both you and your allies.\n"
+ "Constantly Retooling can help eliminate fragile and weak enemies with Rebar Puncher while still keeping damage output high with Auto-Nailgun."

const engineerSkills = [
    { name:"Bouncing Grenades", desc:"Primary\n1.0 Proc Coefficient", details:"Charge up to 8 grenades that deal 100% damage each." },
    { name:"Pressure Mines", desc:"Secondary\n1.0 Proc Coefficient\n8s Cooldown", details:"Place a two-stage mine that deals 300% damage, or 900% damage if fully armed. Can place up to 4." },
    { name:"Bubble Shield", desc:"Utility\n25s Cooldown", details:"Place an impenetrable shield that blocks all incoming damage." },
    { name:"TR12 Gauss Auto-Turret", desc:"Special\n1.0 Proc Coefficient\n30s Cooldown", details:"Place a turret that inherits all your items. Fires a cannon for 100% damage. Can place up to 2." },
    { name:"N/A", desc:"", details:"" },
    { name:"Spider Mines", desc:"Secondary\n1.0 Proc Coefficient\n8s Cooldown", details:"Place a robot mine that deals 600% damage when an enemy walks nearby. Can place up to 4." },
    { name:"Thermal Harpoons", desc:"Utility\n1.0 Proc Coefficient\n2.5s Cooldown", details:"Enter target painting mode to launch heat-seeking harpoons that deal 500% damage each. Can store up to 4." },
    { name:"TR58 Carbonizer Turret", desc:"Special\n0.6 Proc Coefficient\n30s Cooldown", details:"Place a mobile turret that inherits all your items. Fires a laser for 200% damage per second that slows enemies. Can place up to 2." },
];

const engineerDesc = "The Engineer is a unique class that requires planning and positioning to be successful.\n"
+ "Placing mines ahead of time can help cover flanks and tight corridors.\n"
+ "The Engineer relies heavily on his Gauss Turrets - remember to place them in a location that is both safe and advantageous.\n"
+ "His Bubble Shield can be a powerful tool against heavily telegraphed boss attacks - and it can protect your allies as well!\n"
+ "Bouncing Grenades, while powerful, has a hard time hitting mobile targets. Try to keep your Turrets alive to deal with fast or flying monsters.";

const artificerSkills = [
    { name:"Flame Bolt", desc:"Primary\n1.0 Proc Coefficient\n1.3s Cooldown", details:"Ignite. Fire a bolt for 280% damage. Hold up to 4." },
    { name:"Charged Nano-Bomb", desc:"Secondary\n1.0 Proc Coefficient\n5s Cooldown", details:"Stunning. Charge up a exploding nano-bomb that deals 400%-2000% damage." },
    { name:"Snapfreeze", desc:"Utility\n1.0 x12 Proc Coefficient\n12s Cooldown", details:"Freezing. Create a barrier that hurts enemies for 100% damage." },
    { name:"Flamethrower", desc:"Special\n1.0 x22+ Proc Coefficient\n5s Cooldown", details:"Ignite. Burn all enemies in front of you for 2000% damage." },
    { name:"Plasma Bolt", desc:"Primary\n1.0 Proc Coefficient\n1.3s Cooldown", details:"Fire a bolt for 280% damage that explodes in a small area. Hold up to 4." },
    { name:"Cast Nano-Spear", desc:"Secondary\n1.0 Proc Coefficient\n5s Cooldown", details:"Freezing. Charge up a piercing nano-spear that deals 400%-1200% damage." },
    { name:"N/A", desc:"", details:"" },
    { name:"Ion Surge", desc:"Special\n1.0 Proc Coefficient\n8s Cooldown", details:"Stunning. Burst into the sky, dealing 800% damage." },
];

const artificerPassives = [
    { name:"ENV Suit", desc:"Holding the Jump key causes the Artificer to hover in the air." },
];

const artificerDesc = "The Artificer is a high burst damage survivor who excels in fighting large groups and bosses alike.\n"
+ "Flame Bolt expends stocks quickly but recharges slowly - try to weave in basic attacks between skill casts.\n"
+ "Direct hits of Charged Nano-Bomb can turn the tide of an otherwise losing battle.\n"
+ "Frozen enemies are executed at low health, making it great to eliminate tanky enemies.\n"
+ "Remember that the Artificer has NO defensive skills - positioning and defensive items are key!\n";

const mercenarySkills = [
    { name:"Laser Sword", desc:"Primary\n1.0 Proc Coefficient", details:"Agile. Slice in front for 130% damage. Every 3rd hit strikes in a greater area and Exposes enemies." },
    { name:"Whirlwind", desc:"Secondary\n1.0 x2 Proc Coefficient\n2.5s Cooldown", details:"Quickly slice horizontally twice, dealing 2x200% damage. If airborne, slice vertically instead." },
    { name:"Blinding Assault", desc:"Utility\n1.0 Proc Coefficient\n8s Cooldown", details:"Stunning. Dash forward, dealing 300% damage. If you hit an enemy, you can dash again, up to 3 total." },
    { name:"Eviscerate", desc:"Special\n1.0 x7+ Proc Coefficient\n6s Cooldown", details:"Target the nearest enemy, attacking them for 110% damage repeatedly. You cannot be hit for the duration." },
    { name:"N/A", desc:"", details:"" },
    { name:"Rising Thunder", desc:"Secondary\n1.0 Proc Coefficient\n2.5s Cooldown", details:"Unleash a slicing uppercut, dealing 550% damage and sending you airborne." },
    { name:"Focused Assault", desc:"Utility\n1.0 Proc Coefficient\n8s Cooldown", details:"Stunning. Dash forward, dealing 700% damage and Exposing enemies after 1 second." },
    { name:"Slicing Winds", desc:"Special\n1.0 x8 Proc Coefficient\n6s Cooldown", details:"Fire a wind of blades that attack up to 3 enemies for 8x100% damage. The last hit Exposes enemies." },
];

const mercenaryPassives = [
    { name:"Cybernetic Enhancements", desc:"The Mercenary can jump twice." },
];

const mercenaryDesc = "The Mercenary is a high skill melee survivor that uses his many dodges to weave in and out of combat.\n"
+ "Whirlwind's air variation can be used like an extra jump in a pinch.\n"
+ "Getting repeated resets on Blinding Assault is key to increasing both survivability and damage output. However, you do not always need to try for resets, it may result in your death.\n"
+ "Remember that Eviscerate is an extremely powerful defensive tool to dodge telegraphed attacks.\n"
+ "Laser Sword deals a ton of damage in a wide area, which is unique for a basic attack.";

const rexSkills = [
    { name:"DIRECTIVE: Inject", desc:"Primary\n0.5 x3 Proc Coefficient", details:"Fire 3 syringes for 3x80% damage. The last syringe Weakens and heals for 60% of damage dealt." },
    { name:"Seed Barrage", desc:"Secondary\n1.0 Proc Coefficient\n0.5s Cooldown", details:"Lose 15% HP. Launch a mortar into the sky for 450% damage." },
    { name:"DIRECTIVE: Disperse", desc:"Utility\n0.0 Proc Coefficient\n5.5s Cooldown", details:"Fire a Sonic Boom that Weakens all enemies hit." },
    { name:"Tangling Growth", desc:"Special\n1.0 Proc Coefficient\n12s Cooldown", details:"25% HP. Fire a flower that roots for 200% damage. Heals for every target hit." },
    { name:"N/A", desc:"", details:"" },
    { name:"DIRECTIVE: Drill", desc:"Secondary\n0.5 x16 Proc Coefficient\n6s Cooldown", details:"Launch a series of seed bullets into the sky, raining down for 450% damage per second." },
    { name:"Bramble Volley", desc:"Utility\n0.5 Proc Coefficient\n5.5s Cooldown", details:"20% HP. Fire a Sonic Boom that damages enemies for 550% damage. Heals for every target hit." },
    { name:"DIRECTIVE: Harvest", desc:"Special\n1.0 Proc Coefficient\n6s Cooldown", details:"Fire a bolt that deals 330% damage and injects an enemy. On death, drop multiple healing fruits that heal for 25% HP." },
];

const rexPassives = [
    { name:"Natural Toxins", desc:"Certain attacks Weaken enemies hit, reducing their movement speed, armor, and damage." },
];

const rexDesc = "REX is a half robot / half plant that uses HP to cast devastating skills from a distance. The plant nor the robot could survive this planet alone, but thankfully they have each other.\n"
+ "Natural Toxins is important to reducing the strength of strong enemies for both you and your allies.\n"
+ "Seed Barrage can be used from any range and has a very low cooldown. Just make sure to watch your HP!\n"
+ "DIRECTIVE: Disperse can be used to knock enemies away. It can also push flying monsters into walls to kill them.\n"
+ "A well-aimed Tangling Growth can keep REX in the fight forever. Rooting multiple monsters will guarantee you recover the initial HP costs.";

const loaderSkills = [
    { name:"Knuckleboom", desc:"Primary\n1.0 Proc Coefficient", details:"Swing at nearby enemies for 320% damage." },
    { name:"Grapple Fist", desc:"Secondary\n1.0 Proc Coefficient\n5s Cooldown", details:"Fire your gauntlet forward, pulling you to the target." },
    { name:"Charged Gauntlet", desc:"Utility\n1.0 Proc Coefficient\n5s Cooldown", details:"Heavy. Charge up a piercing punch for 600%-2700% damage." },
    { name:"M551 Pylon", desc:"Special\n0.5 Proc Coefficient\n20s Cooldown", details:"Throw a floating pylon that zaps up to 6 nearby enemies for 100% damage. Can be grappled." },
    { name:"N/A", desc:"", details:"" },
    { name:"Spiked Fist", desc:"Secondary\n1.0 Proc Coefficient\n5s Cooldown", details:"Stunning. Fire your gauntlet forward, dealing 320% damage. Pulls you to heavy targets. Light targets are pulled to YOU instead." },
    { name:"Thunder Gauntlet", desc:"Utility\n0.5 Proc Coefficient\n5.5s Cooldown", details:"Heavy. Charge up a single-target punch for 2100% damage that shocks enemies in a cone for 1000% damage." },
    { name:"Thunderslam", desc:"Special\n1.0 Proc Coefficient\n8s Cooldown", details:"Stunning. Slam your fists down, dealing 2000% damage on impact." },
];

const loaderPassives = [
    { name:"Scrap Barrier", desc:"The Loader is immune to fall damage. Striking enemies with the Loader's gauntlets grants a temporary barrier." },
];

const loaderDesc = "The Loader is a slow but powerful bruiser that can use her grappling hook to uniquely navigate the environment.\n"
+ "Scrap Barrier allows Loader to remain in the fight, as long as you're still punching.\n"
+ "Grapple Fist can be used to traverse quickly, dodge enemy attacks, or increase your speed for a massive Charged Gauntlet damage boost!\n"
+ "Charged Gauntlet can be used for both gap closing and as a powerful finishing move to nearby enemies.\n"
+ "Remember that M551 Pylon can be used as a grapple point for both you and any allied Loaders.";

const acridSkills = [
    { name:"Vicious Wounds", desc:"Primary\n1.0 Proc Coefficient", details:"Maul an enemy for 200% damage. Every 3rd hit is Regenerative and deals 400% damage." },
    { name:"Neurotoxin", desc:"Secondary\n1.0 Proc Coefficient\n2s Cooldown", details:"Poisonous. Spit toxic bile for 240% damage." },
    { name:"Caustic Leap", desc:"Utility\n1.0 Proc Coefficient\n6s Cooldown", details:"Poisonous. Stunning. Leap in the air, dealing 320% damage. Leave acid that deals 25% damage. Has 2 charges." },
    { name:"Epidemic", desc:"Special\n1.0 Proc Coefficient\n10s Cooldown", details:"Poisonous. Release a deadly disease that deals 100% damage. The disease spreads to up to 20 targets." },
    { name:"N/A", desc:"", details:"" },
    { name:"Ravenous Bite", desc:"Secondary\n1.0 Proc Coefficient\n2s Cooldown", details:"Poisonous. Slayer. Regenerative. Bite an enemy for 320% damage." },
    { name:"Frenzied Leap", desc:"Utility\n1.0 Proc Coefficient\n10s Cooldown", details:"Stunning. Leap in the air, dealing 550% damage. Reduce the cooldown by 2s for every enemy hit." },
    { name:"N/A", desc:"", details:"" },
];

const acridPassives = [
    { name:"Poison", desc:"Poisonous attacks apply a powerful damage over time effect." },
    { name:"Blight", desc:"Poisonous attacks apply stacking Blight instead." },
];

const acridDesc = "Acrid is a melee-range hybrid who uses powerful poisons to melt tanky enemies.\n"
+ "Poison is an extremely powerful DoT - make sure to apply it as often as possible!\n"
+ "Poison leaves enemies at 1 HP, so prioritize items and drones that help you finish them off.\n"
+ "Because Acrid has no natural defenses, hit-and-run tactics can help you stay alive.\n"
+ "Neurotoxin's low cooldown can help Acrid function as a ranged character in a pinch.";

const captainSkills = [
    { name:"Vulcan Shotgun", desc:"Primary\n0.75 x8 Proc Coefficient", details:"Fire a blast of pellets that deal 8x120% damage. Charging the attack narrows the spread." },
    { name:"Power Tazer", desc:"Secondary\n1.0 Proc Coefficient\n6s Cooldown", details:"Shocking. Fire a fast tazer that deals 100% damage. Travels farther if bounced." },
    { name:"Orbital Probe", desc:"Utility\n1.0 Proc Coefficient\n11s Cooldown", details:"Stunning. Request up to 3 Orbital Probes from the UES Safe Travels. Each probe deals 1000% damage. " },
    { name:"Orbital Supply Beacon", desc:"Special\n0.0 Proc Coefficient", details:"Request a permanent Supply Beacon. Can only be requested twice per stage." },
    { name:"Beacon: Healing", desc:"Special\nSupply Beacon", details:"Heal all nearby allies for 10% of their maximum health every second." },
    { name:"Beacon: Shocking", desc:"Special\nSupply Beacon", details:"Periodically Shock all nearby enemies, immobilizing them." },
    { name:"Beacon: Resupply", desc:"Special\nSupply Beacon", details:"Recharge Equipment on use." },
    { name:"Beacon: Hacking", desc:"Special\nSupply Beacon", details:"Hack all nearby purchasables to a cost of $0 over time." },
    { name:"N/A", desc:"", details:"" },
    { name:"N/A", desc:"", details:"" },
    { name:"OGM-72 'DIABLO' Strike", desc:"Utility\n1.0 Proc Coefficient\n40s Cooldown", details:"Stunning. Request a kinetic strike from the UES Safe Travels. After 20 seconds, it deals 40,000% damage to ALL characters." },
    { name:"N/A", desc:"", details:"" },
];

const captainPassives = [
    { name:"Defensive Microbots", desc:"Passively gain Microbots that shoot down nearby enemy projectiles. Drones are also given Microbots." },
];

const captainDesc = "The Captain is a unique survivor that can control the battlefield with utility and damage - with help from the UES Safe Travels.\n"
+ "Vulcan Shotgun can be used as both a long-range rifle and as a short-range shotgun. Make sure to charge it for the appropriate distance!\n"
+ "Defensive Microbots can be a unique, powerful way to scale the defensive capabilities of both you and your team.\n"
+ "Power Tazer can be used to lock down a strong Elite foe while you deal with fodder.\n"
+ "Orbital Supply Beacon can only be used twice per stage, but make sure you don't hold onto it too long!";

const railgunnerSkills = [
    { name:"XQR Smart Round System", desc:"Primary\n1.0 Proc Coefficient", details:"Fire aggressive tracking rounds for 100% damage." },
    { name:"M99 Sniper", desc:"Secondary\n1.0 Proc Coefficient", details:"Activate your long-range scope, highlighting Weak Points and transforming your weapon into a piercing 1000% damage railgun." },
    { name:"Concussion Device", desc:"Utility\n0.0 Proc Coefficient\n6s Cooldown", details:"Throw out a device that pushes you and all nearby enemies away. Can hold up to 2." },
    { name:"Supercharge", desc:"Special\n3.0 Proc Coefficient\n15s Cooldown", details:"Fire a piercing round for 4000% damage and 150% Weak Point damage. Afterwards, all your weapons are disabled for 5 seconds." },
    { name:"N/A", desc:"", details:"" },
    { name:"HH44 Marksman", desc:"Secondary\n1.0 Proc Coefficient\n", details:"Activate your short-range scope, highlighting Weak Points and transforming your weapon into a quick 400% damage railgun." },
    { name:"Polar Field Device", desc:"Utility\n0.0 Proc Coefficient\n12s Cooldown", details:"Throw out a device that slows down all nearby enemies and projectiles." },
    { name:"Cryocharge", desc:"Special\n1.5 Proc Coefficient\n15s Cooldown", details:"Freezing. Fire a piercing round for 2000% damage" },
];

const railgunnerPassives = [
    { name:"Magnetic Accelerator", desc:"All Critical Strike Chance is converted into Critical Strike Damage." },
];

const railgunnerDesc = "The Railgunner is a long-range, single target survivor that can instantly kill any high priority target - and from any range.\n"
+ "While she can deal easily with bosses, she can become easily swarmed by small enemies. Try to prioritize area-of-effect items!\n"
+ "Landing your active reload both speeds up your reload timer while buffing your next railgun shot.\n"
+ "XQR Smart Rounds is a great way to clean up small fodder, or to shoot around corners.\n"
+ "Remember that if you use Supercharge, you are incredibly vulnerable while rebooting your systems. Make that shot count!";

const voidfiendSkills = [
    { name:"Drown", desc:"Primary\n1.0 Proc Coefficient", details:"Fire a slowing long-range beam for 300% damage." },
    { name:"Flood", desc:"Secondary\n1.0 Proc Coefficient\n4s Cooldown", details:"Fire a plasma missile for 600% damage. Fully charge it for an explosive plasma ball instead, dealing 1100% damage." },
    { name:"Trespass", desc:"Utility\n5s Cooldown", details:"Disappear into the Void, cleansing all debuffs while moving in an upward arc." },
    { name:"Suppress", desc:"Special", details:"Crush 25% Corruption to heal yourself for 25% maximum health." },
    { name:"Corrupted Drown", desc:"Primary\n0.625 Proc Coefficient", details:"Fire a short-range beam for 2000% damage." },
    { name:"Corrupted Flood", desc:"Secondary\n1.0 Proc Coefficient\n4s Cooldown", details:"Fire a an arcing plasma bomb for 1100% damage." },
    { name:"Corrupted Trespass", desc:"Utility\n5s Cooldown", details:"Disappear into the Void, cleansing all debuffs while moving at a fast forward angle." },
    { name:"Corrupted Suppress", desc:"Special", details:"Crush 25% maximum health to gain 25% Corruption." },
];

const voidfiendPassives = [
    { name:"Void Corruption", desc:"At full Corruption, transform your abilities into more aggressive forms." },
];

const voidfiendDesc = "The Void Fiend is a corrupted survivor that fluctuates between a controlled and corrupted form, each with different strengths and weaknesses.  Managing this curse has become its fate.\n"
+ "Void Corruption consumes you over time. Be sure to manage your health and corruption to be in the right place at the right time! Healing alters the flow of corruption within your body.\n"
+ "Drown's range varies greatly between your forms, be prepared to close the gap if you get corrupted, and to retreat if your corruption is wearing thin.\n"
+ "Flood can be charged in your base form to greater effect.  Take advantage of its instantaneous blast in your corrupt form!\n"
+ "Suppress can be used to maintain time in your current form.  Be mindful of items that alter this move's potential."

const skillCards = (skills) => {
    return skills.map((skill) => {
        return {
            size:"w-72 min-h-48 max-h-96",
            text:`${skill.name}`,
            imageSrc:`skills/${skill.name.replaceAll(' ', '_').replaceAll(':', '')}.webp`,
            desc:`${skill.desc}`,
            details:`${skill.details}`
        }
    })
}

const passiveCards = (passives) => {
    return passives.map((passive) => {
        return {
            size:"w-72 min-h-48 max-h-64",
            text: `${passive.name}`,
            imageSrc:`skills/${passive.name.replaceAll(' ', '_')}.webp`,
            desc:`${passive.desc}`,
        }
    })
}

const SurvivorsPage = () => {
    return ( 
        <>
            <Subheader title="Survivors"/>
            <div className="SurvivorList flex justify-around flex-wrap">
                <Survivor name="Commando" unlock="Unlocked by default." skills={skillCards(commandoSkills)} desc={commandoDesc}/>
                <Survivor name="Huntress" unlock="Unlocked by default." skills={skillCards(huntressSkills)} desc={huntressDesc}/>
                <Survivor name="Bandit" unlock="Reach and complete the 3rd Teleporter event without dying." skills={skillCards(banditSkills)} desc={banditDesc} passives={passiveCards(banditPassives)}/>
                <Survivor name="MUL-T" unlock="Complete the first Teleporter event 5 times." skills={skillCards(mulTSkills)} desc={mulTDesc}/>
                <Survivor name="Engineer" unlock="Complete 30 stages." skills={skillCards(engineerSkills)} desc={engineerDesc}/>
                <Survivor name="Artificer" unlock="Pay 10 Lunar Coins in the Bazaar Between Time." skills={skillCards(artificerSkills)} desc={artificerDesc} passives={passiveCards(artificerPassives)} />
                <Survivor name="Mercenary" unlock="Obliterate yourself at the Obelisk in A Moment, Fractured." skills={skillCards(mercenarySkills)} desc={mercenaryDesc} passives={passiveCards(mercenaryPassives)}/>
                <Survivor name="Rex" unlock="Repair the broken robot on Abyssal Depths with an Escape Pod's Fuel Array." skills={skillCards(rexSkills)} desc={rexDesc} passives={passiveCards(rexPassives)}/>
                <Survivor name="Loader" unlock="Defeat the Alloy Worship Unit on Siren's Call." skills={skillCards(loaderSkills)} desc={loaderDesc} passives={passiveCards(loaderPassives)}/>
                <Survivor name="Acrid" unlock="Stabilize the cells in the Void Fields." skills={skillCards(acridSkills)} desc={acridDesc} passives={passiveCards(acridPassives)}/>
                <Survivor name="Captain" unlock="Defeat the final boss." skills={skillCards(captainSkills)} desc={captainDesc} passives={passiveCards(captainPassives)}/>
                <Survivor name="Railgunner" unlock="Unlocked by default in Survivors of the Void DLC." skills={skillCards(railgunnerSkills)} desc={railgunnerDesc} passives={passiveCards(railgunnerPassives)}/>
                <Survivor name="Void Fiend" unlock="Escape the Planetarium in Survivors of the Void DLC." skills={skillCards(voidfiendSkills)} desc={voidfiendDesc} passives={passiveCards(voidfiendPassives)}/>
            </div>
        </>
    );
}
 
export default SurvivorsPage;