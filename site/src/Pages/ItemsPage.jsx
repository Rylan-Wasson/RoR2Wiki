import CardList from "../components/CardList";
import Subheader from "../components/Subheader";

const common_items = [
    { name: "Armor-Piercing Rounds", desc: "Deal an additional 20% damage (+20% per stack) to bosses.", details: "Common / Damage / Linear" },
    { name: "Backup Magazine", desc: "Add +1 (+1 per stack) charge of your Secondary skill.", details: "Common / Utility / Linear" },
    { name: "Bison Steak", desc: "Increases maximum health by 25 (+25 per stack).", details: "Common / Healing / Linear", },
    { name: "Bundle of Fireworks", desc: "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.", details: "Common / Damage / Linear", },
    { name: "Bustling Fungus", desc: "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).", details: "Common / Healing / Linear", },
    { name: "Cautious Slug", desc: "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat.", details: "Common / Healing / Linear", },
    { name: "Crowbar", desc: "Deal +75% (+75% per stack) damage to enemies above 90% health.", details: "Crowbar / Damage / Linear", },
    { name: "Delicate Watch", desc: "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item. ", details: "Common / Damage / Linear", },
    { name: "Energy Drink", desc: "Sprint speed is improved by 25% (+25% per stack).", details: "Common / Utility / Linear", },
    { name: "Focus Crystal", desc: "Increase damage to enemies within 13m by 20% (+20% per stack).", details: "Common / Damage / Linear", },
    { name: "Gasoline", desc: "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage.", details: "Common / Damage / Linear", },
    { name: "Item Scrap, White", desc: "Does nothing. Prioritized when used with 3D Printers.", details: "Common / Scrap / N/A", },
    { name: "Lens-Maker's Glasses", desc: "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.", details: "Common / Damage / Linear" },
    { name: "Medkit", desc: "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.", details: "Common / Healing / Linear", },
    { name: "Mocha", desc: "Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack). ", details: "Common / Damage & Utility / Linear", },
    { name: "Monster Tooth", desc: "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health. ", details: "Common / Healing / Linear", },
    { name: "Oddly-Shaped Opal", desc: "Increase armor by 100 (+100 per stack) while out of danger.", details: "Common / Utility / Linear", },
    { name: "Paul's Goat Hoof", desc: "Increases movement speed by 14% (+14% per stack).", details: "Common / Utility / Linear", },
    { name: "Personal Shield Generator", desc: "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.", details: "Common / Utility / Linear", },
    { name: "Power Elixir", desc: "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.", details: "Common / Healing / N/A", },
    { name: "Repulsion Armor Plate", desc: "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.", details: "Common / Utility / Linear", },
    { name: "Roll of Pennies", desc: "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.", details: "Common / Utility / Linear", },
    { name: "Rusted Key", desc: "A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item.", details: "Common / Utility / N/A", },
    { name: "Soldier's Syringe", desc: "Increases attack speed by 15% (+15% per stack).", details: "Common / Damage / Linear", },
    { name: "Sticky Bomb", desc: "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.", details: "Common / Damage / Linear", },
    { name: "Stun Grenade", desc: "5% (+5% on stack) chance on hit to stun enemies for 2 seconds.", details: "Common / Utility / Hyperbolic", },
    { name: "Topaz Brooch", desc: "Gain a temporary barrier on kill for 15 health (+15 per stack).", details: "Common / Healing / Linear", },
    { name: "Tougher Times", desc: "15% (+15% per stack) chance to block incoming damage. Unaffected by luck.", details: "Common / Utility / Hyperbolic", },
    { name: "Tri-Tip Dagger", desc: "10% (+10% per stack) chance to bleed an enemy for 240% base damage.", details: "Common / Damage / Linear", },
    { name: "Warbanner", desc: "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.", details: "Common / Utility / Linear", },
]

const uncommon_items = [
    { name: "AtG Missile Mk. 1", desc: "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.", details: "Uncommon / Damage / Linear" },
    { name: "Bandolier", desc: "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.", details: "Uncommon / Utility / Hyperbolic" },
    { name: "Berzerker's Pauldron", desc: "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.", details: "Uncommon / Damage & Utility / Linear" },
    { name: "Chronobauble", desc: "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).", details: "Uncommon / Utility / Linear" },
    { name: "Death Mark", desc: "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.", details: "Uncommon / Damage / Linear" },
    { name: "Fuel Cell", desc: "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).", details: "Uncommon / Utility / Linear" },
    { name: "Ghor's Tome", desc: "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.", details: "Uncommon / Utility / Linear" },
    { name: "Harvester's Scythe", desc: "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health.", details: "Uncommon / Healing / Linear" },
    { name: "Hopoo Feather", desc: "Gain +1 (+1 per stack) maximum jump count.", details: "Uncommon / Utility / Linear" },
    { name: "Hunter's Harpoon", desc: "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.", details: "Uncommon / Utility / Linear" },
    { name: "Ignition Tank", desc: "Ignite effects deal +300% (+300% per stack) more damage over time.", details: "Uncommon / Damage / Linear" },
    { name: "Infusion", desc: "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.", details: "Uncommon / Healing / Linear" },
    { name: "Item Scrap, Green", desc: "Does nothing. Prioritized when used with 3D Printers.", details: "Uncommon / Scrap / N/A" },
    { name: "Kjaro's Band", desc: "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. 10 second cooldown.", details: "Uncommon / Damage / Linear" },
    { name: "Leeching Seed", desc: "Dealing damage heals you for 1 (+1 per stack) health.", details: "Uncommon / Healing / Linear" },
    { name: "Lepton Daisy", desc: "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.", details: "Uncommon / Healing / Linear" },
    { name: "Old Guillotine", desc: "Instantly kill Elite monsters below 13% (+13% per stack) health.", details: "Uncommon / Damage / Hyperbolic" },
    { name: "Old War Stealthkit", desc: "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack).", details: "Uncommon / Utility / Exponential" },
    { name: "Predatory Instincts", desc: "Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.", details: "Uncommon / Damage / Linear" },
    { name: "Razorwire", desc: "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius", details: "Uncommon / Damage / Linear" },
    { name: "Red Whip", desc: "Leaving combat boosts your movement speed by 30% (+30% per stack).", details: "Uncommon / Utility / Linear" },
    { name: "Regenerating Scrap", desc: "Does nothing. Prioritized when used with Uncommon 3D Printers. At the start of each stage, it regenerates.", details: "Uncommon / Scrap / N/A" },
    { name: "Rose Buckler", desc: "Increase armor by 30 (+30 per stack) while sprinting.", details: "Uncommon / Utility / Linear" },
    { name: "Runald's Band", desc: "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. 10 second cooldown.", details: "Uncommon / Damage / Linear" },
    { name: "Shipping Request Form", desc: "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack).", details: "Uncommon / Utility / Special" },
    { name: "Shuriken", desc: "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+1 per stack) shurikens. Reload over 10 seconds.", details: "Uncommon / Damage / Linear" },
    { name: "Squid Polyp", desc: "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.", details: "Uncommon / Damage / Linear" },
    { name: "Ukulele", desc: "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).", details: "Uncommon / Damage / Linear" },
    { name: "War Horn", desc: "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).", details: "Uncommon / Damage / Linear" },
    { name: "Wax Quail", desc: "Jumping while sprinting boosts you forward by 10m (+10m per stack).", details: "Uncommon / Utility / Linear" },
    { name: "Will-o'-the-wisp", desc: "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.", details: "Uncommon / Damage / Linear" },
]

const legendary_items = [
    { name: "57 Leaf Clover", desc: "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.", details: "Legendary / Utility / Linear" },
    { name: "Aegis", desc: "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.", details: "Legendary / Healing / Linear" },
    { name: "Alien Head", desc: "Reduce skill cooldowns by 25% (+25% per stack).", details: "Legendary / Utility / Exponential" },
    { name: "Ben's Raincoat", desc: "Prevents 1 (+1 per stack) debuff and instead grants a temporary barrier for 10% of maximum health. Recharges every 5 seconds.", details: "Legendary / Healing / Linear" },
    { name: "Bottled Chaos", desc: "Trigger a random equipment effect 1 (+1 per stack) time(s).", details: "Legendary / Utility / Linear" },
    { name: "Brainstalks", desc: "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns.", details: "Legendary / Utility / Linear" },
    { name: "Brilliant Behemoth", desc: "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.", details: "Legendary / Damage / Linear" },
    { name: "Ceremonial Dagger", desc: "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.", details: "Legendary / Damage / Linear" },
    { name: "Defensive Microbots", desc: "Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds. Recharge rate scales with attack speed.", details: "Legendary / Utility / Linear" },
    { name: "Dio's Best Friend", desc: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.", details: "Legendary / Utility / Linear" },
    { name: "Frost Relic", desc: "Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows by 2m with every kill. Stacks up to 18m (+12m per stack).", details: "Legendary / Damage / Linear" },
    { name: "H3AD-5T v2", desc: "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds.", details: "Legendary / Utility / Hyperbolic" },
    { name: "Happiest Mask", desc: "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).", details: "Legendary / Utility / Linear" },
    { name: "Hardlight Afterburner", desc: "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.", details: "Legendary / Utility / Linear" },
    { name: "Interstellar Desk Plant", desc: "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every 0.5 second to all allies within 10m (+5.0m per stack). Lasts 10 seconds. ", details: "Legendary / Utility / Linear" },
    { name: "Item Scrap, Red", desc: "Does nothing. Prioritized when used with 3D Printers.", details: "Legendary / Scrap / N/A" },
    { name: "Laser Scope", desc: "Critical Strikes deal an additional 100% damage (+100% per stack).", details: "Legendary / Damage / Linear" },
    { name: "N'kuhana's Opinion", desc: "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.", details: "Legendary / Damage / Linear" },
    { name: "Pocket I.C.B.M.", desc: "All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)", details: "Legendary / Damage / Linear" },
    { name: "Rejuvenation Rack", desc: "Heal +100% (+100% per stack) more.", details: "Legendary / Healing / Linear" },
    { name: "Resonance Disc", desc: "Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), and then explodes for 1000% base damage (+1000% per stack).", details: "Legendary / Damage / Linear" },
    { name: "Sentient Meat Hook", desc: "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.", details: "Legendary / Damage / Linear" },
    { name: "Shattering Justice", desc: "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.", details: "Legendary / Damage / Linear" },
    { name: "Soulbound Catalyst", desc: "Kills reduce equipment cooldown by 4s (+2s per stack).", details: "Legendary / Utility / Linear" },
    { name: "Spare Drone Parts", desc: "Gain Col. Droneman. Your drones fire faster, have less cooldowns, shoot missiles, and gain a bonus chaingun.", details: "Legendary / Damage / Linear" },
    { name: "Symbiotic Scorpion", desc: "100% chance on hit to reduce armor by 2 (+2 per stack) permanently.", details: "Legendary / Damage / Linear" },
    { name: "Unstable Tesla Coil", desc: "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.", details: "Legendary / Damage / Linear" },
    { name: "Wake of Vultures", desc: "Gain the power of any killed elite monster for 8s (+5s per stack).", details: "Legendary / Utility / Linear" },
]

const boss_items = [
    { name: "Charged Perforator", desc: "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.\nDrops From Overloading Worm.", details: "Boss / Damage / Linear" },
    { name: "Defense Nucleus", desc: "Killing elite monsters spawns an Alpha Construct with bonus 300% damage and 300% health. Limited to 4 (+4 per stack).\nDrops From Xi Construct.", details: "Boss / Damage / Linear" },
    { name: "Empathy Cores", desc: "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.\nDrops from Solus Control Unit.", details: "Boss / Damage / Linear" },
    { name: "Genesis Loop", desc: "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds .\nDrops From Wandering Vagrant.", details: "Boss / Damage / Linear" },
    { name: "Halcyon Seed", desc: "Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.\nDrops From Aurelionite.", details: "Boss / Damage / Linear" },
    { name: "Little Disciple", desc: "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed.\nDrops From Grovetender.", details: "Boss / Damage / Linear" },
    { name: "Mired Urn", desc: "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second and healing you for 100% of the damage dealt.\nDrops From Clay Dunestrider.", details: "Boss / Damage & Healing / Linear" },
    { name: "Molten Perforator", desc: "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.\nDrops From Magma Worm.", details: "Boss / Damage / Linear" },
    { name: "Planula", desc: "Heal from incoming damage for 15 (+15 per stack).\nDrops From Grandparent.", details: "Boss / Healing / Linear" },
    { name: "Queen's Gland", desc: "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.\nDrops From Beetle Queen.", details: "Boss / Damage / Linear" },
    { name: "Shatterspleen", desc: "Gain 5% critical chance. Critical Strikes bleed enemies. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus 15% (+15% per stack) of their maximum health.\nDrops From Imp Overlord.", details: "Boss / Damage / Linear" },
    { name: "Titanic Knurl", desc: "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).\nDrops From Stone Titan.", details: "Boss / Healing / Linear" },
    { name: "Pearl", desc: "Increases maximum health by 10% (+10% per stack).\nObtained from Cleansing Pools.", details: "Boss / Pearl / Linear" },
    { name: "Irradiant Pearl", desc: "Increases ALL stats by 10% (+10% per stack).\nObtained from Cleansing Pools.", details: "Boss / Pearl / Linear" },
    { name: "Artifact Key", desc: "A stone shard with immense power.\nDrops From Artifact Reliquary.", details: "Boss / Special / N/A" },
    { name: "Item Scrap, Yellow", desc: "Does nothing. Prioritized when used with 3D Printers.", details: "Boss / Scrap / N/A" },
]

const lunar_items = [
    { name: "Beads of Fealty", desc: "Seems to do nothing... but...\n(Can be used to access 'A Moment, Whole' by using the Obelisk in 'A Moment, Fractured')", details: "Lunar / Special / N/A" },
    { name: "Brittle Crown", desc: "30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.", details: "Lunar / Utility / Linear" },
    { name: "Corpsebloom", desc: "Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (-50% per stack) of your health per second.", details: "Lunar / Healing / Linear" },
    { name: "Defiant Gouge", desc: "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.", details: "Lunar / Utility / Linear" },
    { name: "Egocentrism", desc: "Every 3 (-50% per stack) seconds, gain an orbiting bomb that deals 360% damage, up to a maximum of 3 bombs (+1 per stack). Every 60 seconds, a random item is converted into this item.", details: "Lunar / Damage / Linear" },
    { name: "Eulogy Zero", desc: "Items have a 5% (+5% per stack) chance to become a Lunar item instead.", details: "Lunar / Utility / Linear" },
    { name: "Focused Convergence", desc: "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller.", details: "Lunar / Utility / Linear" },
    { name: "Gesture of the Drowned", desc: "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.", details: "Lunar / Utility / Linear" },
    { name: "Light Flux Pauldron", desc: "Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack).", details: "Lunar / Utility / Linear" },
    { name: "Mercurial Rachis", desc: "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage.", details: "Lunar / Utility / Linear" },
    { name: "Purity", desc: "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.", details: "Lunar / Utility / Linear" },
    { name: "Shaped Glass", desc: "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).", details: "Lunar / Damage / Linear" },
    { name: "Stone Flux Pauldron", desc: "Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack).", details: "Lunar / Healing / Linear" },
    { name: "Transcendence", desc: "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.", details: "Lunar / Utility / Linear" },

    { name: "Effigy of Grief", desc: "ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.\n15s Cooldown", details: "Lunar Equipment" },
    { name: "Glowing Meteorite", desc: "Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.\n140s Cooldown", details: "Lunar Equipment" },
    { name: "Helfire Tincture", desc: "Ignite ALL characters within 15m for 12s. Deal 5% of your maximum health/second as burning as damage. The burn deals 0.5x to yourself, 0.25 to allies, and 24x to enemies.\n45s Cooldown", details: "Lunar Equipment" },
    { name: "Spinel Tonic", desc: "Gain a massive boost to ALL stats for 20 seconds. Chance to gain an affliction that reduces ALL stats.\n60s Cooldown", details: "Lunar Equipment" },

    { name: "Visions of Heresy", desc: "Replace your Primary Skill with Hungering Gaze.\nFire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack). ", details: "Lunar / Heresy / Linear" },
    { name: "Hooks of Heresy", desc: "Replace your Secondary Skill with Slicing Maelstrom.\nCharge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds. ", details: "Lunar / Heresy / Linear" },
    { name: "Strides of Heresy", desc: "Replace your Utility Skill with Shadowfade.\nFade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds. ", details: "Lunar / Heresy / Linear" },
    { name: "Essence of Heresy", desc: "Replace your Special Skill with Ruin.\nDealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds. ", details: "Lunar / Heresy / Linear" },
]

const void_common_items = [
    { name: "Encrusted Key", desc: "A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item.\nCorrupts all Rusted Keys.", details: "Void / Utility / Linear" },
    { name: "Lost Seer's Lenses", desc: "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy.\nCorrupts all Lens-Maker's Glasses.", details: "Void / Damage / Linear" },
    { name: "Needletick", desc: "10% (+10% per stack) chance to collapse an enemy for 400% base damage.\nCorrupts all Tri-Tip Daggers.", details: "Void / Damage / Linear" },
    { name: "Safer Spaces", desc: "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack).\nCorrupts all Tougher Times.", details: "Void / Utility / Linear" },
    { name: "Weeping Fungus", desc: "Heals for 2% (+2% per stack) of your health every second while sprinting.\nCorrupts all Bustling Fungi.", details: "Void / Healing / Linear" },
]

const void_uncommon_items = [
    { name: "Lysate Cell", desc: "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%.\nCorrupts all Fuel Cells.", details: "Void / Utility / Linear" },
    { name: "Plasma Shrimp", desc: "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage.\nCorrupts all AtG Missile Mk. 1s.", details: "Void / Damage / Linear" },
    { name: "Polylute", desc: "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times.\nCorrupts all Ukuleles.", details: "Void / Damage / Linear" },
    { name: "Singularity Band", desc: "Hits that deal more than 400% damage also fire a black hole that draws in enemies within 15m for 5 seconds. 20 second cooldown.\nCorrupts all Runald's and Kjaro's Bands.", details: "Void / Utility / Linear" },
    { name: "Tentabauble", desc: "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack).\nCorrupts all Chronobaubles.", details: "Void / Utility / Linear" },
    { name: "Voidsent Flame", desc: "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage.\nCorrupts all Will-o'-the-wisps.", details: "Void / Damage / Linear" },
]

const void_legendary_boss_items = [
    { name: "Benthic Bloom", desc: "Upgrades 3 (+3 per stack) random items to items of the next higher rarity at the start of each stage.\nCorrupts all 57 Leaf Clovers.", details: "Void / Utility / Linear" },
    { name: "Pluripotent Larva", desc: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be.\nCorrupts all Dio's Best Friends.", details: "Void / Utility / Linear" },
    { name: "Newly Hatched Zoea", desc: "Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time.\nCorrupts all yellow items.", details: "Void / Damage / Linear" },
]

const itemCards = (items) => items.map((item) => {
    var color = "";
    if (item.details.includes("Common")) color = "text-white";
    else if (item.details.includes("Uncommon")) color = "text-lime-400";
    else if (item.details.includes("Legendary")) color = "text-red-400";
    else if (item.details.includes("Boss")) color = "text-yellow-400";
    else if (item.details.includes("Lunar")) color = "text-cyan-400";
    else if (item.details.includes("Void")) color = "text-fuchsia-400";
    var size = "w-96 h-72";
    if (item.name.includes("Heresy")) size = "w-[36rem] h-64"
    return {
        size: size,
        text: item.name,
        imageSrc: `items/${item.name.replaceAll(' ', '_')}.webp`,
        desc: item.desc,
        details: item.details,
        color: color,
    }
})

const ItemsPage = () => {
    return ( 
        <>
            <Subheader title="Items"/>
            <Subheader subtitle="Common Items"/>
            <CardList cards={itemCards(common_items)}/>
            <Subheader subtitle="Uncommon Items"/>
            <CardList cards={itemCards(uncommon_items)}/>
            <Subheader subtitle="Legendary Items"/>
            <CardList cards={itemCards(legendary_items)}/>
            <Subheader subtitle="Boss Items"/>
            <CardList cards={itemCards(boss_items)}/>
            <Subheader subtitle="Lunar Items"/>
            <CardList cards={itemCards(lunar_items)}/>
            <Subheader subtitle="Void Items"/>
            <CardList cards={itemCards(void_common_items)}/>
            <Subheader/>
            <CardList cards={itemCards(void_uncommon_items)}/>
            <Subheader/>
            <CardList cards={itemCards(void_legendary_boss_items)}/>
        </>
     );
}
 
export default ItemsPage;