import Card from "./Card";
import Subheader from "./Subheader";
import CardList from "./CardList";

function Survivor(props) {
    return (
        <div className="survivor text-2xl">
            <div className="flex flex-row p-2 ml-2">
                <Card text={props.name} imageSrc={`src/assets/images/survivors/${props.name.replaceAll(' ', '_')}.webp`} details={`Unlock: ${props.unlock}`} size="min-w-72 min-h-48 max-w-72"/>
                <div className="flex flex-col justify-center text-left text-lg m-4">
                {
                    props.desc.split("\n").map((i,key) => {
                        return <p className="py-1" key={key}>{i}</p>;
                    })
                }
                </div>
            </div>
            {
                props.passives ? (
                    <>
                        <h3 className="text-4xl font-medium">{props.passives.length > 1 ? "Passives" : "Passive"}</h3>
                        <CardList cards={props.passives}/>
                    </>
                ) : ( <></> )
            }
            <h3 className="text-4xl font-medium">Skills</h3>
            <CardList cards={props.skills}/>
            <Subheader/>
        </div>
    );
}
 
export default Survivor;