import Subheader from "../components/Subheader";
import CardList from "../components/CardList";

const artifacts = [
    { name: "Chaos", desc: "Friendly fire is enabled for both survivors and monsters alike.", details: "Code Location:\n?Abandoned Aqueduct?" },
    { name: "Command", desc: "Choose your items.", details: "Code Location:\n?Bazaar Between Time?" },
    { name: "Death", desc: "When one player dies, everyone dies.", details: "Code Location:\n?Wetland Aspect?" },
    { name: "Dissonance", desc: "Monsters can appear outside their usual environments.", details: "Code Location:\n?Abyssal Depths?" },
    { name: "Enigma", desc: "Spawn with an equipment that changes every time it's activated.", details: "Code Location:\n?Bulwark's Ambry?" },
    { name: "Evolution", desc: "Monsters gain items between stages.", details: "Code Location:\n?A Moment, Whole?" },
    { name: "Frailty", desc: "Fall damage is doubled and lethal.", details: "Code Location:\n?Siren's Call?" },
    { name: "Glass", desc: "Allies deal 500% damage, but have 10% HP.", details: "Code Location:\n?A Moment, Fractured?" },
    { name: "Honor", desc: "Enemies can only spawn as elites.", details: "Code Location:\n?Sky Meadow?" },
    { name: "Kin", desc: "Monsters will be of only one type per stage.", details: "Code Location:\n?Distant Roost?" },
    { name: "Metamorphosis", desc: "Players always spawn as a random survivor.", details: "Code Location:\n?Titanic Plains?" },
    { name: "Sacrifice", desc: "Monsters drop items on death, but Chests no longer spawn.", details: "Code Location:\n?Gilded Coast?" },
    { name: "Soul", desc: "Wisps emerge from defeated monsters.", details: "Code Location:\n?Scorched Acres?" },
    { name: "Spite", desc: "Enemies drop multiple exploding bombs on death.", details: "Code Location:\n?Settings Menu?" },
    { name: "Swarms", desc: "Monster spawns are doubled, but their max HP is halved.", details: "Code Location:\n?Rallypoint Delta?" },
    { name: "Vengeance", desc: "A relentless doppelganger will invade every 10 minutes.", details: "Code Location:\n?Logbook?" },
]

const artifactCards = artifacts.map((artifact) => {
    return {
        size:"w-72 h-64",
        text:`${artifact.name}`,
        imageSrc:`artifacts/Artifact_of_${artifact.name.replaceAll(' ', '_')}.webp`,
        desc:`${artifact.desc}`,
        details:`${artifact.details}`
    }
})

const ArtifactsPage = () => {
    return ( 
        <>
            <Subheader title="Artifacts"/>
            <CardList cards={artifactCards}/>
        </>
     );
}
 
export default ArtifactsPage;