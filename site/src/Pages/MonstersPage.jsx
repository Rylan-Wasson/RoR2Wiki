import Subheader from "../components/Subheader";
import CardList from "../components/CardList";

const monsters = [
    { name: "Alloy Vulture", desc: "Spawns:\n Sirens Call", details: "Threat Level: Medium" },
    { name: "Alpha Construct", desc: "Spawns:\nSky Meadow\n Sulfur Pools", details: "Threat Level: Low" },
    { name: "Beetle", desc: "Spawns:\n Most stages", details: "Threat Level: Low" },
    { name: "Beetle Guard", desc: "Spawns:\n Abandoned Aqueduct\n Scorched Acres\n Sulfur Pools", details: "Threat Level: Medium" },
    { name: "Bighorn Bison", desc: "Spawns:\n Rallypoint Delta", details: "Threat Level: Medium" },
    { name: "Blind Pest", desc: "Spawns:\n Aphelian Sanctuary\n Rallypoint Delta\n Siphoned Forest\n Sulfur Pools", details: "Threat Level: Medium" },
    { name: "Blind Vermin", desc: "Spawns:\n Aphelian Sanctuary\n Rallypoint Delta", details: "Threat Level: Medium" },
    { name: "Brass Contraption", desc: "Spawns:\n Abyssal Depths\n Siren's Call\n Sky Meadow\n Wetland Aspect", details: "Threat Level: High" },
    { name: "Clay Apothecary", desc: "Spawns:\n Aphelian Sanctuary", details: "Threat Level: Medium" },
    { name: "Clay Templar", desc: "Spawns:\n Aphelian Sanctuary\n Scorched Acres\n Sulfur Pools", details: "Threat Level: High" },
    { name: "Elder Lemurian", desc: "Spawns:\n Abyssal Depths\n Siren's Call\n Sky Meadow\n Sundered Grove", details: "Threat Level: High" },
    { name: "Greater Wisp", desc: "Spawns:\n Most Stages", details: "Threat Level: Medium" },
    { name: "Gup", desc: "Spawns:\n Abyssal Depths\n Sky Meadow\n Sundered Grove\n Wetland Aspect", details: "Threat Level: Low" },
    { name: "Hermit Crab", desc: "Spawns:\n Abyssal Depths", details: "Threat Level: Medium" },
    { name: "Imp", desc: "Spawns:\n Abyssal Depths\n Rallypoint Delta\n Scorched Acres", details: "Threat Level: Medium" },
    { name: "Jellyfish", desc: "Spawns:\n Siren's Call\n Sundered Grove\n Wetland Aspect", details: "Threat Level: High" },
    { name: "Larva", desc: "Spawns:\n Siren's Call\n Sundered Grove", details: "Threat Level: High" },
    { name: "Lemurian", desc: "Spawns:\n Most Stages", details: "Threat Level: Low" },
    { name: "Lesser Wisp", desc: "Spawns:\n Most Stages", details: "Threat Level: Low" },
    { name: "Mini Mushrum", desc: "Spawns:\n Sky Meadow\n Sundered Grove", details: "Threat Level: Medium" },
    { name: "Parent", desc: "Spawns:\n Sky Meadow", details: "Threat Level: Medium" },
    { name: "Stone Golem", desc: "Spawns:\n Most Stages", details: "Threat Level: Medium" },
]

const lunar_monsters = [
    { name: "Lunar Chimera (Exploder)", desc: "Spawns:\n Commencement", details: "Threat Level: Very High" },
    { name: "Lunar Chimera (Golem)", desc: "Spawns:\n Commencement", details: "Threat Level: Very High" },
    { name: "Lunar Chimera (Wisp)", desc: "Spawns:\n Commencement", details: "Threat Level: Very High" },
]

const void_monsters = [
    { name: "Void Barnacle", desc: "Spawns:\n Void Locus\n Void Seeds", details: "Threat Level: Medium" },
    { name: "Void Jailer", desc: "Spawns:\n Void Locus\n Void Seeds", details: "Threat Level: Very High" },
    { name: "Void Reaver", desc: "Spawns:\n Commencement\n Void Locus\n Void Seeds", details: "Threat Level: Very High" },
]

const bosses = [
    { name: "Beetle Queen", desc: "Spawns:\n Most Stages", details: "Threat Level: Medium" },
    { name: "Clay Dunestrider", desc: "Spawns:\n Most Stages", details: "Threat Level: High" },
    { name: "Grandparent", desc: "Spawns:\n Sky Meadow", details: "Threat Level: High" },
    { name: "Grovetender", desc: "Spawns:\n Scorched Acres", details: "Threat Level: High" },
    { name: "Imp Overlord", desc: "Spawns:\n Abyssal Depths\n Rallypoint Delta\n Scorched Acres", details: "Threat Level: High" },
    { name: "Magma Worm", desc: "Spawns:\n Abyssal Depths\n Rallypoint Delta\n Siren's Call\n Sky Meadow", details: "Threat Level: High" },
    { name: "Overloading Worm", desc: "Spawns:\n Abyssal Depths\n Rallypoint Delta\n Sky Meadow", details: "Threat Level: High" },
    { name: "Scavenger", desc: "Spawns:\n Sundered Grove", details: "Threat Level: High" },
    { name: "Solus Control Unit", desc: "Spawns:\n Siren's Call\n Sky Meadow", details: "Threat Level: High" },
    { name: "Stone Titan", desc: "Spawns:\n Most Stages", details: "Threat Level: High" },
    { name: "Wandering Vagrant", desc: "Spawns:\n Most Stages", details: "Threat Level: High" },
    { name: "Xi Construct", desc: "Spawns:\n Sky Meadow\n Sulfur Pools", details: "Threat Level: High" },
]

const void_bosses = [
    { name: "Void Devastator", desc: "Spawns:\n Void Locus\n Void Seeds", details: "Threat Level: Very High" },
]

const final_bosses = [
    { name: "Twisted Scavenger", desc: "Spawns:\n A Moment, Whole", details: "Threat Level: Very High" },
    { name: "Mithrix", desc: "Spawns:\n Commencement", details: "Threat Level: Extremely High" },
    { name: "Voidling", desc: "Spawns:\n Planetarium", details: "Threat Level: Extremely High" },
]

const monsterCards = (monsters) => monsters.map((monster) => {
    return {
        size:"w-72 h-64",
        text:`${monster.name}`,
        imageSrc:`monsters/${monster.name.replaceAll(' ', '_')}.webp`,
        desc:`${monster.desc}`,
        details:`${monster.details}`
    }
})

const MonstersPage = () => {
    return ( 
        <>
            <Subheader title="Monsters"/>
            <Subheader subtitle="Regular Monsters"/>
            <CardList cards={monsterCards(monsters)}/>
            <Subheader subtitle="Lunar Monsters"/>
            <CardList cards={monsterCards(lunar_monsters)}/>
            <Subheader subtitle="Void Monsters"/>
            <CardList cards={monsterCards(void_monsters)}/>
            <Subheader subtitle="Bosses"/>
            <CardList cards={monsterCards(bosses)}/>
            <Subheader subtitle="Void Bosses"/>
            <CardList cards={monsterCards(void_bosses)}/>
            <Subheader subtitle="Final Bosses"/>
            <CardList cards={monsterCards(final_bosses)}/>
        </>
     );
}
 
export default MonstersPage;