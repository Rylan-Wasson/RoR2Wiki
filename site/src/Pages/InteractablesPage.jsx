import Subheader from "../components/Subheader";
import CardList from "../components/CardList";

const interactables = [
    { name: "Small Chest", desc: "Item Chance:\n79% Common\n20% Uncommon\n1% Legendary", details: "Base Cost: $25" },
    { name: "Large Chest", desc: "Item Chance:\n0% Common\n80% Uncommon\n20% Legendary", details: "Base Cost: $50" },
    { name: "Legendary Chest", desc: "Item Chance:\n100% Legendary\nGuaranteed to spawn on Abyssal Depths and Sundered Grove", details: "Base Cost: $400" },

    { name: "Equipment Barrel", desc: "Item Chance:\n100% Equipment", details: "Base Cost: $25" },
    { name: "Multishop Terminal", desc: "Contains either 3 Common items or 3 Uncommon items\nOnly 1 can be purchased", details: "Base Cost: $25 (Common)\nOr $50 (Uncommon)" },
    { name: "Equipment Multishop", desc: "Contains 3 Equipment\nOnly 1 can be purchased", details: "Base Cost: $50" },

    { name: "Category Chests", desc: "Same item rarity as small chests\nOnly contains Damage / Healing / Utility items", details: "Base Cost: $30" },
    { name: "Large Category Chests", desc: "Same item rarity as large chests\nOnly contains Damage / Healing / Utility items", details: "Base Cost: $60" },
    { name: "Adaptive Chest", desc: "Rapidly cycles through items, interacting a second time will drop the selected item", details: "Base Cost: $50" },

    { name: "Scrapper", desc: "Turns items into scrap of the same rarity", details: "Base Cost: N/A" },
    { name: "3D Printer", desc: "Turns a random item of the same rarity into the displayed item, prioritizes scrap as input", details: "Base Cost: Item of same rarity" },
    { name: "Teleporter", desc: "Starts a teleporter event boss fight, then allows access to the next stage", details: "Base Cost: N/A" },
    
    { name: "Lunar Pod", desc: "Item Chance:\n100% Lunar Item", details: "Base Cost: 1 Lunar Coin" },
    { name: "Newt Altar", desc: "Makes a blue portal spawn after the teleporter event, leading to the Bazaar Between Time", details: "Base Cost: 1 Lunar Coin" },
    { name: "Cleansing Pool", desc: "Item Chance:\n80% Pearl\n20% Irradiant Pearl", details: "Base Cost: Random Lunar Item" },

    { name: "Shrine of Chance", desc: "Item Chance:\n45% Nothing\n36% Common Item\n9% Uncommon Item\n1% Legendary item\n9% Equipment", details: "Base Cost: $17\nIncreases by 40% per use" },
    { name: "Shrine of Blood", desc: "Costs health, rewards gold equal to half of health spent", details: "Base Cost: 50% / 75% / 99% HP" },
    { name: "Shrine of the Mountain", desc: "Causes the teleporter event to becomemore difficult, but also yield more items", details: "Base Cost: N/A" },

    { name: "Shrine of Combat", desc: "Summons monsters to fight to gain gold", details: "Base Cost: N/A" },
    { name: "Shrine of the Woods", desc: "Creates a circular healing zone that becomes larger the more gold is spent", details: "Base Cost: $25\nIncreases by 50% per use" },
    { name: "Shrine of Order", desc: "For each rarity of item, converts all items of that rarity into one item random item of that rarity", details: "Base Cost: 1 Lunar Coin" },

    { name: "Altar of Gold", desc: "Makes a gold portal spawn after the teleporter event, leading to Gilded Coast", details: "Base Cost: $200" },
    { name: "Rusty Lockbox", desc: "Item Chance:\n80% Uncommon\n20%Legendary", details: "Base Cost: 1 Rusted Key" },
    { name: "Crashed Multishop Delivery", desc: "Contains 2 Items\nOnly 1 can be purchased\nItem quality increases based on number of Shipping Request Forms", details: "Base Cost: N/A\nRequires Shipping Request Forms" },

    { name: "Void Cradle", desc: "Item Chance:\n60% Void Common\n30% Void Uncommon\n10% Void Legendary", details: "Base Cost: 50% HP" },
    { name: "Encrusted Cache", desc: "Choice of 3 Items:\nItem Chance:\n60% Void Common\n30% Void Uncommon\n10% Void Legendary", details: "Base Cost: 1 Encrusted Key" },
    { name: "Void Potential", desc: "Choice of 3 Items:\nItem Chance:\n79% Common\n20% Uncommon\n1% Legendary", details: "Base Cost: 50% HP" },
]

const interactableCards = interactables.map((inter) => {
    return {
        size:"w-96 min-h-64 max-h-72",
        text:`${inter.name}`,
        imageSrc:`interactables/${inter.name.replaceAll(' ', '_')}.webp`,
        desc:`${inter.desc}`,
        details:`${inter.details}`
    }
})

const InteractablesPage = () => {
    return ( 
        <>
            <Subheader title="Interactables"/>
            <CardList cards={interactableCards}/>
        </>
     );
}
 
export default InteractablesPage;