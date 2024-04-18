import Subheader from "../components/Subheader";
import CardList from "../components/CardList";

const envs = [
    { name: "Distant Roost", details: "Stage 1" },
    { name: "Titanic Plains", details: "Stage 1" },
    { name: "Siphoned Forest", details: "Stage 1 (DLC)" },
    { name: "Abandoned Aqueduct", details: "Stage 2" },
    { name: "Wetland Aspect", details: "Stage 2" },
    { name: "Aphelian Sanctuary", details: "Stage 2 (DLC)" },
    { name: "Rallypoint Delta", details: "Stage 3" },
    { name: "Scorched Acres", details: "Stage 3" },
    { name: "Sulfur Pools", details: "Stage 3 (DLC)" },
    { name: "Abyssal Depths", details: "Stage 4" },
    { name: "Siren's Call", details: "Stage 4" },
    { name: "Sundered Grove", details: "Stage 4" },
    { name: "Sky Meadow", details: "Stage 5" },
    { name: "Commencement", details: "Final Stage" },
]

const hidden_envs = [
    { name: "Bazaar Between Time", details: "Hidden Realm" },
    { name: "Bulwark's Ambry", details: "Hidden Realm" },
    { name: "Gilded Coast", details: "Hidden Realm" },
    { name: "Void Fields", details: "Hidden Realm" },
    { name: "A Moment, Fractured", details: "Hidden Realm / Final Stage" },
    { name: "A Moment, Whole", details: "Hidden Realm / Final Stage" },
    { name: "Void Locus", details: "Hidden Realm (DLC)" },
    { name: "The Planetarium", details: "Hidden Realm / Final Stage (DLC)" },
]

const envCards = (envs) => envs.map((env) => {
    return {
        size:"w-96 h-80",
        imgSize: "max-w-80 h-48",
        text:`${env.name}`,
        imageSrc:`environments/${env.name.replaceAll(' ', '_')}.webp`,
        details:`${env.details}`
    }
})

const EnvironmentsPage = () => {
    return ( 
        <>
            <Subheader title="Environments"/>
            <Subheader subtitle="Regular Environments"/>
            <CardList cards={envCards(envs)}/>
            <Subheader subtitle="Hidden Realms"/>
            <CardList cards={envCards(hidden_envs)}/>
        </>
     );
}
 
export default EnvironmentsPage;