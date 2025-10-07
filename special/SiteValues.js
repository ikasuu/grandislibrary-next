/*
    Static or common values in our site should be placed here
    Created by: Ikasuu, Fall 2020
*/

//Latest version of GMS
export const version = 255; 
export const versionName = "Ride or Die Update"

export const loadingImage = "/loading.gif";
export const logo = "/logo.png";

//Image paths for our page headers
export const HeaderImageUrl = {
    library: "/headers/grandis-library.png",
    grandis: "/headers/borderless.png",
    fox: "/headers/fox-valley.png",
    verdel: "/headers/verdel.png",
    ristonia: "/headers/ristonia.png"
};

// Image paths for the home buttons
export const HeaderBlockImageUrl = {
    grandis: "/headers/borderless-block.png",
    fox: "/headers/fox-valley-block.png",
    verdel: "/headers/verdel-block.png",
    ristonia: "/headers/ristonia-block.png"
};

export const classes = {
    explorers: [["hero","Hero"], ["paladin","Paladin"], ["dark-knight","Dark Knight"], ["bishop", "Bishop"], ["arch-mage-ice-lightning", "Arch Mage (Ice, Lightning)"], ["arch-mage-fire-poison", "Arch Mage (Fire, Poison)"], ["dual-blade", "Dual Blade"], ["shadower", "Shadower"], ["night-lord", "Night Lord"], ["pathfinder", "Pathfinder"], ["marksman", "Marksman"], ["bowmaster", "Bowmaster"], ["cannoneer", "Cannoneer"], ["buccaneer", "Buccanner"], ["corsair", "Corsair"]],
    cygnusKnights: [["dawn-warrior", "Dawn Warrior"], ["thunder-breaker","Thunder Breaker"], ["night-walker", "Night Walker"], ["wind-archer", "Wind Archer"], ["blaze-wizard", "Blaze Wizard"], ["mihile", "Mihile"]],
    heroes: [["mercedes", "Mercedes"], ["aran", "Aran"], ["phantom", "Phantom"], ["luminous", "Luminous"], ["evan", "Evan"], ["shade", "Shade"]],
    resistance: [["battle-mage", "Battle Mage"], ["blaster", "Blaster"], ["mechanic", "Mechanic"], ["wild-hunter", "Wild Hunter"], ["xenon", "Xenon"], ["demon-slayer", "Demon Slayer"], ["demon-avenger", "Demon Avenger"]],
    nova: [["angelic-buster", "Angelic Buster"], ["kaiser", "Kaiser"], ["cadena", "Cadena"], ["kain", "Kain"]],
    sengoku: [["kanna", "Kanna"], ["hayato", "Hayato"]],
    flora: [["adele", "Adele"], ["ark", "Ark"], ["illium", "Illium"], ["khali", "Khali"]],
    other: [["kinesis", "Kinesis"], ["zero", "Zero"]],
    anima: [["hoyoung", "Hoyoung"], ["lara", "Lara"]],
    jianghu: [["lynn", "Lynn"], ["mo-xuan", "Mo Xuan"]],
    shine: [["sia-astelle", "Sia Astelle"]]
}

//Weapons for class overviews, contains icon path and formatted name
export const weapons = {
    oneHSword: [`https://maplestory.io/api/GMS/${version}/item/1302005/icon`, "One-Handed Sword"],
    oneHAxe: [`https://maplestory.io/api/GMS/${version}/item/1312006/icon`, "One-Handed Axe"],
    oneHBlunt: [`https://maplestory.io/api/GMS/${version}/item/1322223/icon`, "One-Handed Blunt Weapon"],
    wand: [`https://maplestory.io/api/GMS/${version}/item/1372009/icon`, "Wand"],
    staff: [`https://maplestory.io/api/GMS/${version}/item/1382035/icon`, "Staff"],
    dagger: [`https://maplestory.io/api/GMS/${version}/item/1332011/icon`, "Dagger"],
    shiningRod: [`https://maplestory.io/api/GMS/${version}/item/1212008/icon`, "Shining Rod"],
    soulShooter: [`https://maplestory.io/api/GMS/${version}/item/1222005/icon`, "Soul Shooter"],
    twoHSword: [`https://maplestory.io/api/GMS/${version}/item/1402002/icon`, "Two-Handed Sword"],
    twoHAxe: [`https://maplestory.io/api/GMS/${version}/item/1412065/icon`, "Two-Handed Axe"],
    twoHBlunt: [`https://maplestory.io/api/GMS/${version}/item/1422171/icon`, "Two-Handed Blunt Weapon"],
    spear: [`https://maplestory.io/api/GMS/${version}/item/1432187/icon`, "Spear"],
    polearm: [`https://maplestory.io/api/GMS/${version}/item/1442242/icon`, "Polearm"],
    bow: [`https://maplestory.io/api/GMS/${version}/item/1452205/icon`, "Bow"],
    crossbow: [`https://maplestory.io/api/GMS/${version}/item/1462213/icon`, "Crossbow"],
    dualBowguns: [`https://maplestory.io/api/GMS/${version}/item/1522012/icon`, "Dual Bowguns"],
    claw: [`https://maplestory.io/api/GMS/${version}/item/1472001/icon`, "Claw"],
    cane: [`https://maplestory.io/api/GMS/${version}/item/1362013/icon`, "Cane"],
    knuckle: [`https://maplestory.io/api/GMS/${version}/item/1482011/icon`, "Knuckle"],
    gun: [`https://maplestory.io/api/GMS/${version}/item/1492004/icon`, "Gun"],
    handCannon: [`https://maplestory.io/api/GMS/${version}/item/1532010/icon`, "Hand Cannon"],
    whipBlade: [`https://maplestory.io/api/GMS/${version}/item/1242010/icon`, "Whip Blade"],
    desperado: [`https://maplestory.io/api/GMS/${version}/item/1232007/icon`, "Desperado"],
    katana: [`https://maplestory.io/api/GMS/${version}/item/1542040/icon`, "Katana"],
    fanKanna: [`https://maplestory.io/api/GMS/${version}/item/1552015/icon`, "Fan"],
    memorialStaff: [`https://maplestory.io/api/GMS/${version}/item/1252000/icon`, "Memorial Staff"],
    psyLimiter: [`https://maplestory.io/api/GMS/${version}/item/1262011/icon`, "Psy-limiter"],
    armCannon: [`https://maplestory.io/api/GMS/${version}/item/1582025/icon`, "Arm Cannon"],
    longSword: [`https://maplestory.io/api/GMS/${version}/item/1572007/icon`, "Alpha - Long Sword"],
    chain: [`https://maplestory.io/api/GMS/${version}/item/1272005/icon`, "Chain"],
    lucentGauntlet: [`https://maplestory.io/api/GMS/${version}/item/1282028/icon`, "Lucent Gauntlet"],
    ancientBow: [`https://maplestory.io/api/GMS/${version}/item/1592000/icon`, "Ancient Bow"],
    ritualFan: [`https://maplestory.io/api/GMS/${version}/item/1292036/icon`, "Ritual Fan"],
    bladecaster: [`https://maplestory.io/api/GMS/${version}/item/1213026/icon`, "Bladecaster"],
    whispershot: [`https://maplestory.io/api/GMS/${version}/item/1214007/icon`, "Whispershot"],
    chakram: [`https://maplestory.io/api/GMS/${version}/item/1404007/icon`, "Chakram"],
    martialBrace: [`/images/equipment/martial-brace.png`, "Martial Brace"],
    celestialLight: [`/images/equipment/celestial-light.png`, "Celestial Light"]
};

//Secondary Weapons for class overviews, contains icon path and formatted name
export const secondaryWeapons = {
    warShield: [`https://maplestory.io/api/GMS/${version}/item/1092060/icon`, "Shield"],
    mageShield: [`https://maplestory.io/api/GMS/${version}/item/1092021/icon`, "Shield"],
    thiefShield: [`https://maplestory.io/api/GMS/${version}/item/1092050/icon`, "Shield"],
    medallion: [`https://maplestory.io/api/GMS/${version}/item/1352202/icon`, "Medallion"],
    rosary: [`https://maplestory.io/api/GMS/${version}/item/1352212/icon`, "Rosary"],
    ironChain: [`https://maplestory.io/api/GMS/${version}/item/1352222/icon`, "Iron Chain"],
    magicBookB: [`https://maplestory.io/api/GMS/${version}/item/1352252/icon`, "Magic Book"],
    magicBookI: [`https://maplestory.io/api/GMS/${version}/item/1352242/icon`, "Magic Book"],
    magicBookF: [`https://maplestory.io/api/GMS/${version}/item/1352232/icon`, "Magic Book"],
    arrowFletching: [`https://maplestory.io/api/GMS/${version}/item/1352262/icon`, "Arrow Fletching"],
    bowThimble: [`https://maplestory.io/api/GMS/${version}/item/1352272/icon`, "Bow Thimble"],
    charm: [`https://maplestory.io/api/GMS/${version}/item/1352292/icon`, "Charm"],
    scabbard: [`https://maplestory.io/api/GMS/${version}/item/1352282/icon`, "Dagger Scabbard"],
    katara: [`https://maplestory.io/api/GMS/${version}/item/1342007/icon`, "Katara"],
    wristband: [`https://maplestory.io/api/GMS/${version}/item/1352902/icon`, "Wrist Band"],
    farsight: [`https://maplestory.io/api/GMS/${version}/item/1352912/icon`, "Far Sight"],
    powderKeg: [`https://maplestory.io/api/GMS/${version}/item/1352922/icon`, "Powder Keg"],
    fist: [`https://maplestory.io/api/GMS/${version}/item/1352823/icon`, "Fist"],
    martialFist: [`https://maplestory.io/api/SEA/189/item/1352824/icon`, "Martial Fist"],
    jewel: [`https://maplestory.io/api/GMS/${version}/item/1352972/icon`, "Jewel"],
    soulShield: [`https://maplestory.io/api/GMS/${version}/item/1098003/icon`, "Soul Shield"],
    mass: [`https://maplestory.io/api/GMS/${version}/item/1352932/icon`, "Mass"],
    document: [`https://maplestory.io/api/GMS/${version}/item/1352942/icon`, "Document"],
    magicArrow: [`https://maplestory.io/api/GMS/${version}/item/1352003/icon`, "Magic Arrow"],
    card: [`https://maplestory.io/api/GMS/${version}/item/1352103/icon`, "Card"],
    orb: [`https://maplestory.io/api/GMS/${version}/item/1352403/icon`, "Orb"],
    foxMarble: [`https://maplestory.io/api/GMS/${version}/item/1353103/icon`, "Fox Marble"],
    charge: [`https://maplestory.io/api/GMS/${version}/item/1353403/icon`, "Charge"],
    heavySword: [`https://maplestory.io/api/GMS/${version}/item/1562007/icon`, "Beta - Heavy Sword"],
    magicMarble: [`https://maplestory.io/api/GMS/${version}/item/1352952/icon`, "Magic Marble"],
    arrowhead: [`https://maplestory.io/api/GMS/${version}/item/1352962/icon`, "Arrowhead"],
    magnum: [`https://maplestory.io/api/GMS/${version}/item/1352703/icon`, "Magnum"],
    demonAegis: [`https://maplestory.io/api/GMS/${version}/item/1099004/icon`, "Demon Aegis"],
    coreController: [`https://maplestory.io/api/GMS/${version}/item/1353004/icon`, "Core Controller"],
    dragonEssence: [`https://maplestory.io/api/GMS/${version}/item/1352503/icon`, "Dragon Essence"],
    warpForge: [`https://maplestory.io/api/GMS/${version}/item/1353303/icon`, "Warp Forge"],
    soulRing: [`https://maplestory.io/api/GMS/${version}/item/1352604/icon`, "Soul Ring"],
    fanKanna: [`https://maplestory.io/api/GMS/${version}/item/1552009/icon`, "Haku Fan"],
    kodachi: [`https://maplestory.io/api/GMS/${version}/item/1352803/icon`, "Kodachi"],
    leaf: [`https://maplestory.io/api/GMS/${version}/item/1352812/icon`, "Leaf"],
    chessPiece: [`https://maplestory.io/api/GMS/${version}/item/1353203/icon`, "Chess Piece"],
    lucentWings: [`https://maplestory.io/api/GMS/${version}/item/1353502/icon`, "Lucent Wings"],
    abyssalPath: [`https://maplestory.io/api/GMS/${version}/item/1353603/icon`, "Abyssal Path"],
    relic: [`https://maplestory.io/api/GMS/${version}/item/1353703/icon`, "Relic"],
    fanTassel: [`https://maplestory.io/api/GMS/${version}/item/1353803/icon`, "Fan Tassel"],
    bladebinder: [`https://maplestory.io/api/GMS/${version}/item/1354003/icon`, "Bladebinder"],
    weaponBelt: [`https://maplestory.io/api/GMS/${version}/item/1354013/icon`, "Weapon Belt"],
    ornament: [`https://maplestory.io/api/GMS/${version}/item/1354023/icon`,"Ornament"],
    hexSeeker: [`https://maplestory.io/api/GMS/${version}/item/1354032/icon`, "Hex Seeker"],
    braceBand: [`/images/equipment/brace-band.png`, "Brace Band"],
    compass: [`/images/equipment/compass.png`, "Compass"]
};

//Ammo for class overviews, contains icon path and formatted name
export const weaponConsumable = {
    arrowB: [`https://maplestory.io/api/GMS/${version}/item/2060013/icon`, "Arrows"],
    arrowC: [`https://maplestory.io/api/GMS/${version}/item/2061012/icon`, "Arrows"],
    throwingStar: [`https://maplestory.io/api/GMS/${version}/item/2070018/icon`, "Throwing Stars"],
    bullet: [`https://maplestory.io/api/GMS/${version}/item/2330005/icon`, "Bullets"]
};

//Common 5th Job Skills
export const commonFifth = {
    goddessBlessing: {
        "name": "Maple World Goddess's Blessing",
        "shortDesc": "MP Cost: 500, Increases stat bonuses as Maple Warrior by 400% for 60 sec, Damage: +20%\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/maple-world-goddess-blessing.png"],
        "animations": ["https://media4.giphy.com/media/AV4drI0ly2fYImnP3H/giphy.gif"],
        "type": "Buff",
        "desc": "While active, increases %Damage and the stat bonuses of <tt src={/class-icons/common/maple-warrior.png} tip={Maple Warrior (4th Job)}> and similar skills",
        "details": [
            "Unaffected by cooldown reduction"
        ]
    },
    expWarrior:{
        "name": "Blitz Shield",
        "shortDesc": "HP Cost: 5% of Max HP, Creates a protective shield, absorbing damage up to 21% of your Max HP for 5 sec.\\nIf you activate this skill a second time, it detonates and inflicts 1100% damage to 12 enemies 5 times.\\nYour shield must be active for at least 2 sec before it can be detonated.\\nCooldown: 15 sec",
        "icons": ["/class-icons/5th-job/blitz-shield.png"],
        "animations": ["https://media2.giphy.com/media/0Rj4K4HNqYGsk63MyN/giphy.gif"],
        "type": "Buff",
        "desc": "Create a shield based on your %Max HP that blocks damage",
        "details": [
            "When the shield expires or the Skill Key is pressed, the shield explodes damaging nearby enemies<bp_Shield must be active for at least 2 secs before it can be detonated_>"
        ]
    },
    expMagician:{
        "name": "Unreliable Memory",
        "shortDesc": "MP Cost: 80. Uses a memorized skill.\\nIgnores MP cost and cooldown of selected skill, and reduces cooldown of Unreliable Memory by a fixed amount according to set probability rates.\\nCooldown: 340 sec.\\n[Passive Effect: INT +30]",
        "icons": ["/class-icons/5th-job/unreliable-memory.png"],
        "animations": ["https://media4.giphy.com/media/ncQEHsz4n9SUxkaU4l/giphy.gif"],
        "type": "Active",
        "desc": "Use the memorized skill chosen from <tt src={/class-icons/5th-job/mind-delve.png} tip={Mind Delve (5th Job)}>",
        "details": [
            "[Passive]: Grants flat INT",
            "Ignores MP cost and cooldowns",
            "Cooldown of Unreliable Memory will be reduced based on the probabilities below:<bp_20% reduction (1% chance)_25% reduction (5% chance)_30% reduction (10% chance)_35% reduction (15% chance)_35% reduction (20% chance)_40% reduction (15% chance)_45% reduction (10% chance)_50% reduction (5% chance)_55% reduction (5% chance)_60% reduction (5% chance)_70% reduction (5% chance)_75% reduction (3% chance)_80% reduction (1% chance)_>"
        ]
    },
    mindDelve:{
        "name": "Mind Delve",
        "shortDesc": "MP Cost: 130. Use the number keys to select a spell that can be activated with Unreliable Memory. This skill is canceled if you fail to select a spell within 5 sec, or if you press any other keys.\\nCooldown: 4 sec.",
        "icons": ["/class-icons/5th-job/mind-delve.png"],
        "animations": ["https://media.giphy.com/media/pBcdQ9kl2OkOXJY95t/giphy.gif"],
        "type": "Active",
        "desc": "When used, allows you to select 3rd - 4th job skills using the Number Keys to be cast when using <tt src={/class-icons/5th-job/unreliable-memory.png} tip={Unreliable Memory (5th Job)}>",
        "details": [
            "Failing to choose a skill within 5 sec or pressing other keys will cancel this skill",
            "Only skills with SP allocated can be chosen",
            "This skill is gained alongside and shares SP with <tt src={/class-icons/5th-job/unreliable-memory.png} tip={Unreliable Memory (5th Job)}>"
        ]
    },
    expBowman: {
        "name": "Fury of the Wild",
        "shortDesc": "MP Cost: 800, Duration: 40 sec, Max Enemies Hit: 10, Damage: 900%, Number of Attacks: 7\\nCooldown: 105 sec",
        "icons": ["/class-icons/5th-job/fury-of-the-wild.png"],
        "animations": ["https://media3.giphy.com/media/llsZlPVsm7sAZFcb8i/giphy.gif"],
        "type": "Summon",
        "desc": "Transform Phoenix, Frostprey, or Shadow Raven into a more powerful form",
        "details": [
            "Can only be used when <tt src={/class-icons/explorers/bowmaster/phoenix.png} tip={Phoenix (3rd Job - Bowmaster)}> <tt src={/class-icons/explorers/marksman/frostprey.png} tip={Frostprey (3rd Job - Marksman)}> <tt src={/class-icons/explorers/pathfinder/shadow-raven.png} tip={Shadow Raven (3rd Job - Pathfinder)}> is active"
        ]
    },
    expPBowman: {
        "name": "Fury of the Wild",
        "shortDesc": "MP Cost: 800, Duration: 40 sec, Max Enemies Hit: 10, Damage: 900%, Number of Attacks: 7\\nCooldown: 105 sec",
        "icons": ["/class-icons/5th-job/fury-of-the-wild.png"],
        "animations": ["https://media0.giphy.com/media/ZlMeLcuyoa4oW2el4Z/giphy.gif"],
        "desc": "Transform Phoenix, Frostprey, or Shadow Raven into a more powerful form",
        "details": [
            "Can only be used when <tt src={/class-icons/explorers/bowmaster/phoenix.png} tip={Phoenix (3rd Job - Bowmaster)}> <tt src={/class-icons/explorers/marksman/frostprey.png} tip={Frostprey (3rd Job - Marksman)}> <tt src={/class-icons/explorers/pathfinder/shadow-raven.png} tip={Shadow Raven (3rd Job - Pathfinder)}> is active"
        ]
    },
    expThief: {
        "name": "Shadow Walker",
        "shortDesc": "MP Cost: 850, Duration: 20 sec. Initiates a form of stealth that is not canceled by skills or attacks.\\nFinal Damage increased by 14% added on top of Advanced Dark Sight's Final Damage bonus.\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/shadow-walker.png"],
        "animations": ["https://media4.giphy.com/media/KZvjAfaZInF431yAcH/giphy.gif"],
        "type": "Buff",
        "desc": "Activate a special <tt src={/class-icons/common/dark-sight.png} tip={Dark Sight}> where attacking will not cancel the buff",
        "details": [
            "Additionally increases %Final Damage added on top of <tt src={/class-icons/common/advanced-dark-sight.png} tip={Advanced Dark Sight}>"
        ]
    },
    expPirate: {
        "name": "Pirate's Banner",
        "shortDesc": "MP Cost: 500, Summons a Pirate's Banner for 30 sec.\\nBoosts the stats of party members near the flag by 25% in any attribute they have assigned AP. You will receive the same effect even when outside of the field. Enemy Defense: -25%",
        "icons": ["/class-icons/5th-job/pirates-banner.png"],
        "animations": ["https://media2.giphy.com/media/4HkGIZpk9nhjknNRFb/giphy.gif"],
        "type": "Buff Zone",
        "desc": "Increases all stats assigned APs by a percentage of party members within the zone and reduces enemy %DEF inside the zone",
        "details": [
            "You will receive the buff even when outside of the zone",
            "During the jump animation, you will not be knocked back at all (Super Knockback Resistance)",
            "Reduction to %DEF can be considered as %Ignore DEF"
        ]
    },
    phalanxCharge:{
        "name": "Phalanx Charge",
        "shortDesc": "MP Cost: 500, Duration: Up to 22.5 sec.\\nPeriodically deals 990% damage up to 70 times.\\nCooldown: 30 sec",
        "icons": ["/class-icons/5th-job/phalanx-charge.png"],
        "animations": ["https://media4.giphy.com/media/7y719ZfMh0lXsQW919/giphy.gif"],
        "type": "Summon",
        "desc": "Summon Spearmen of Cygnus Knights to charge forward damaging enemies that collide with it",
        "details": [
            "The spearmen slow down upon colliding with an enemy",
            "Pressing the Skill Key again will change their direction of movement",
            "Right-clicking the skill turns a function ON/OFF that summons stationary spearmen instead<bp_While summoned, pressing the Skill Key while the spearmen are not attacking will resume movement_>",
            "Unaffected by Damage Reflect"
        ]
    },
    cygnusBlessing:{
        "name": "Empress Cygnus's Blessing",
        "shortDesc": "MP Cost: 500, Duration: 45 sec, Damage +30%\\nPeriodically restores 4% HP and increases your damage by 6%.\\nThis damage bonus is additive and maxes out at 90%\\nCooldown: 120 sec.\\n--------\\nMP Cost: 500, Duration: 45 sec, Damage +30%, Damage Taken: -5% (Includes damage proportional to Max HP).\\nPeriodically restores 8% HP and increases your damage by 8%.\\nThis damage bonus is additive, and maxes out at 120%\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/empress-cygnuss-blessing.png", "/class-icons/5th-job/transcendent-cygnuss-blessing.png"],
        "animations": ["https://media4.giphy.com/media/o4zWBHJ69l1pd4x9hf/giphy.gif", "https://media2.giphy.com/media/oHDJdfZZm1KEBCm9n7/giphy.gif"],
        "type": "Buff",
        "desc": "Grants a stacking %Damage buff (additive) and periodically restores %Max HP",
        "details": [
            "Skill is enhanced after Lv. 245 becoming <tt src={/class-icons/5th-job/transcendent-cygnuss-blessing.png} tip={Transcendent Cygnus's Blessing}> Transcendent Cygnus's Blessing and additionally reduces damage taken (including %Max HP attacks)"
        ]
    },
    freudsWisdom:{
        "name": "Freud's Wisdom",
        "shortDesc": "MP Cost: 250, Duration: 30 sec, Max Stacks: 6, Each stack provides an additional buff.\\nStack 1 - Skill Cooldown: -10% (excludes skills unaffected by cooldown reduction)\\nStack 2 - Status Resistance: +25\\nStack 3 - All Stats: +55\\nStack 4 - Attack Power & Magic ATT: +25\\nStack 5 - Boss Damage: +25%\\nStack 6 - Invincible for duration of skill\\nCooldown: 25 sec. Cooldown increased to 240 sec when buff expires or max stack count is reached.",
        "icons": ["/class-icons/5th-job/freuds-wisdom.png"],
        "animations": ["https://media0.giphy.com/media/qLHXWAJbWTXFxORQyS/giphy.gif"],
        "type": "Buff",
        "desc": "Provides a stacking buff with each stack providing an additional effect",
        "details": [
            "Using the skill again will add an additional stack to the buff",
            "Has a cooldown between each stack (25 secs)"
        ]
    },
    resistanceInfantry:{
        "name": "Resistance Infantry",
        "shortDesc": "MP Cost: 650, Duration: 10 sec, Damage: 455%, Number of Attacks: 9, Max Enemies Hit: 12\\nCooldown: 25 sec",
        "icons": ["/class-icons/5th-job/resistance-infantry.png"],
        "animations": ["https://media1.giphy.com/media/8lnnh46r15qpe51QLL/giphy.gif"],
        "type": "Summon",
        "desc": "Place down a squad of Resistance infantry that fires waves of bullets at enemies",
        "details": [
            "Unaffected by Damage Reflect"
        ]
    },
    defenderOfTheDemon:{
        "name": "Defender of the Demon",
        "shortDesc": "Consumes 4% of Max HP to summon Mastema for 48 sec.\\nCooldown: 120 sec\\nMastema uses the following skills at her own discretion:\\nMastema's Claw - Max Enemies Hit: 8, Damage: 1100%, Number of Attacks: 8, Cooldown: 4 sec\\nMastema's Mark - Damage Taken: -25% (Including attacks inflicting damage proportional to Max HP), Max Uses: 2, Duration: 6 sec. Mastema's Mark vanishes when duration ends or max uses is reached. Cooldown: 10 sec",
        "icons": ["/class-icons/5th-job/defender-of-the-demon.png"],
        "animations": ["https://media1.giphy.com/media/XGCkfDLecmgSCsBc4n/giphy.gif"],
        "type": "Summon",
        "desc": "Summon Mastema to fight by your side",
        "details": [
            "Mastema has two different skills:<bp_[Mastema's Claw]: Mastema attacks by clawing forward_[Mastema's Mark]: Mastema grants a buff that increases %Damage Reduction (including %Max HP attacks)_>",
            "The buff provided has the following properties:<bp_Blocks up to two attacks before disappearing_Buff disappears when duration ends or max uses is reached_>",
            "Unaffected by Damage Reflect"
        ]
    },
    otherworldGoddessBlessing:{
        "name": "Otherworld Goddess's Blessing",
        "shortDesc": "HP Cost: 5% of Max HP, increases Final Damage by 11% for 40 sec. Periodically casts various blessings or attacks. Previous blessings disappear when a new blessing is cast.\\nBlessing of Recovery : Restores 30% of the your character's max DF/PP/HP. Heals through status effects that prevent health recovery, aside from in Ghost Park.\\nAegis Blessing: Damage Taken: -75% (Triggers once, includes damage proportional to Max HP.)\\nBlessing of Fortitude: Ignores one debilitating status effect.\\nOtherwordly Void: Max Enemies Hit: 12, Damage: 2640%, Number of Attacks: 12\\nMinimum Activations During Blessing Duration: 3 times\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/otherworld-goddess-blessing.png"],
        "animations": ["https://media0.giphy.com/media/HBVTG6lGTAK9OLJ9qe/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Final Damage while periodically providing various buffs",
        "details": [
            "[Blessing of Recovery]: Restores some %Max HP regardless of any effects preventing HP recovery",
            "[Aegis Blessing]: Reduces damage taken once, including %Max HP damage but, triggers only once per buff",
            "[Blessing of Fortitude]: Ignores one movement-restricting Abnormal Status",
            "[Otherworldly Void]: Damages nearby enemies"
        ]
    },
    mightOfTheNova:{
        "name": "Might of the Nova",
        "shortDesc": "HP Cost: 20% of Max HP, Max Enemies Hit: 15, Damage: 4400%, Number of Attacks: 10\\nBuff: After use, you are protected from fatal blows for 960 sec.\\nCooldown: 1200 sec",
        "icons": ["/class-icons/5th-job/might-of-the-nova.png"],
        "animations": ["https://media1.giphy.com/media/eiYA7as3sG0mA6277y/giphy.gif"],
        "type": "Attack / Buff",
        "desc": "Deal damage nearby enemies while granting a buff that prevents you from one fatal blow",
        "details": [
            "Functions exactly the same as Bishop's <tt src={/class-icons/explorers/bishop/heavens-door.png} tip={Heaven's Door}> Heaven's Door"
        ]
    },
    grandisGoddessBlessingNV:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 55% chance to not have cooldown, up to 6 times\\nDamage: +35%\\nKaiser receives additional 11% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 100% of your equipment's Attack Power & Magic ATT, whichever you do not use, is converted to the one you do use. Any set effects do not apply. The converted bonus cannot exceed 150% of your weapon's base Attack Power or Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +100\\nAnima: Damage: +40%\\nHoyoung: Talisman and Scroll Energy Charge: +75%, Lara: Increases Final Damage Increase to 11% upon activating Dragon Vein Echo.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/grandis-goddess-blessing.png"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, gain increased %Damage and skills have a chance to not have a cooldown",
        "details": [
            "Ignores cooldowns up to 6 times"
        ]
    },
    grandisGoddessBlessingKAI:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 55% chance to not have cooldown, up to 6 times\\nDamage: +35%\\nKaiser receives additional 11% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 100% of your equipment's Attack Power & Magic ATT, whichever you do not use, is converted to the one you do use. Any set effects do not apply. The converted bonus cannot exceed 150% of your weapon's base Attack Power or Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +100\\nAnima: Damage: +40%\\nHoyoung: Talisman and Scroll Energy Charge: +75%, Lara: Increases Final Damage Increase to 11% upon activating Dragon Vein Echo.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/grandis-goddess-blessing.png"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, gain increased %Damage and skills have a chance to not have a cooldown",
        "details": [
            "Ignores cooldowns up to 6 times",
            "Kaiser gains additional %Damage based each Morph Gauge stage"
        ]
    },
    grandisGoddessBlessingFL:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 55% chance to not have cooldown, up to 6 times\\nDamage: +35%\\nKaiser receives additional 11% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 100% of your equipment's Attack Power & Magic ATT, whichever you do not use, is converted to the one you do use. Any set effects do not apply. The converted bonus cannot exceed 150% of your weapon's base Attack Power or Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +100\\nAnima: Damage: +40%\\nHoyoung: Talisman and Scroll Energy Charge: +75%, Lara: Increases Final Damage Increase to 11% upon activating Dragon Vein Echo.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/grandis-goddess-blessing.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTI4YWJiM21vemt5MW5yNDRnM2hncWkzYXo3cWM0YzVqcGYwOGpweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1FUDtuDNiNos8qi01U/giphy.gif"],
        "type": "Buff",
        "desc": "While active, a percent of your equipment's Attack or Magic Attack is converted to the one you use",
        "details": [
            "Excludes your Primary Weapon and Set Bonus Effects",
            "Converted bonus cannot exceed 150% of your weapon's base Attack/Magic Attack"
        ]
    },
    grandisGoddessBlessingHY:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 55% chance to not have cooldown, up to 6 times\\nDamage: +35%\\nKaiser receives additional 11% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 100% of your equipment's Attack Power & Magic ATT, whichever you do not use, is converted to the one you do use. Any set effects do not apply. The converted bonus cannot exceed 150% of your weapon's base Attack Power or Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +100\\nAnima: Damage: +40%\\nHoyoung: Talisman and Scroll Energy Charge: +75%, Lara: Increases Final Damage Increase to 11% upon activating Dragon Vein Echo.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/grandis-goddess-blessing.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFlNWU5OTU4M2EyNWViNzEzN2I0OWFjMTJmNjAxMWNkYTBiZWYyNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sBIGtjLKfdwZOLYAie/giphy.gif"],
        "type": "Buff",
        "desc": "While active, increases %Damage and Talisman and Scroll Power charge rate"
    },
    grandisGoddessBlessingLARA:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 55% chance to not have cooldown, up to 6 times\\nDamage: +35%\\nKaiser receives additional 11% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 100% of your equipment's Attack Power & Magic ATT, whichever you do not use, is converted to the one you do use. Any set effects do not apply. The converted bonus cannot exceed 150% of your weapon's base Attack Power or Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +100\\nAnima: Damage: +40%\\nHoyoung: Talisman and Scroll Energy Charge: +75%, Lara: Increases Final Damage Increase to 11% upon activating Dragon Vein Echo.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/grandis-goddess-blessing.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFlNWU5OTU4M2EyNWViNzEzN2I0OWFjMTJmNjAxMWNkYTBiZWYyNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sBIGtjLKfdwZOLYAie/giphy.gif"],
        "type": "Buff",
        "desc": "While active, increases %Damage and %Final Damage bonus from <tt src={/class-icons/anima/lara/dragon-vein-echo.png} tip={Dragon Vein Echo (3rd Job)}>"
    },
    afterimageOfTheOtherworld:{
        "name": "Afterimage of the Otherworld",
        "shortDesc": "HP Cost: 5%, Afterimage of the Otherworld Duration: 50 sec\\nIncreases all stats that you invested AP into by 50% and increases Critical Damage by 5% when there is an Afterimage of the Otherworld within the same map\\n10% chance to restore 3% of Max HP and 3% of Max MP when attacking enemies created by Afterimage of the Otherworld\\nCooldown: 60 sec",
        "icons": ["/class-icons/5th-job/afterimage-of-the-otherworld.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXA2N294M3ozdm5ncHlkdDkxa2hyeTNvM3dpcjJxZTAzZXdqaGpnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0WvCReMHp6vK0YgdOm/giphy.gif"],
        "type": "Summon",
        "desc": "Place a portal that applies a debuff to an enemy",
        "details": [
            "[Debuff]: Attacking this enemy has a chance to restore %Max HP/MP<bp_Debuff application prioritizes bosses with the highest HP first_>",
            "While the portal is active, increases %Crit Damage and all stats directly invested with AP"
        ]
    },
    transcendent:{
        "name": "Transcendent",
        "shortDesc": "HP Cost: 5%, Applies Light, Life, and Time Blessing\\nLight Blessing\\nDuration: 20 sec\\nCreates a spear of light when using the attack skill that flies toward enemies in front. Max Enemies Hit: 10, Damage: 550%, Number of Attacks: 4. Remains in place where it sticks, Enemies Hit: 10, Damage: 440%, Number of Attacks: 4, Max Continuous Attacks: 5\\nMax Spears of Light: 7, Spear of Light Cooldown: 2 sec\\nLife Blessing\\nDuration: 30 sec\\nFinal Damage: +5%, Number of Debilitating Status Conditions Blocked: 3\\nTime Blessing\\nDuration: 60 sec, 100% chance for afterimage of a previous time to remain when using 4th job or lower skills (excluding Beginner Skills), Max Enemies Hit: 10, Damage: 385%, Number of Attacks: 3\\nAfterimage of skills that triggered Assist for Zero deals 440% damage\\nAfterimage attack occurs only once per skill\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/transcendent.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVyem9wYXUzYWRkaG90andkeW03ZDlicG5nYjAxYThnNXZkcngxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a29UzvDhUSFQgmdnc0/giphy.gif"],
        "type": "Buff",
        "desc": "When used, applies 3 different buff effects",
        "details": [
            "[Light Blessing]: Using attack skills creates a spear that strikes enemies and lingers briefly dealing continuous damage",
            "[Life Blessing]: Increases %Final Damage and blocks up to 3 Critical Abnormal Statuses",
            "[Time Blessing]: Using 4th Job or lower skills (excluding Beginner Skills) create afterimages that deals an additional attack<bp_[Note]: In the case that more Transcendent classes are added, \"skills that triggered Assist for Zero\" implies that only Zero's skills that trigger the Assist effect create stronger afterimages_Afterimages can only be created once per skill_>"
        ]
    },
    lotusFlower:{
        "name": "Lotus Flower",
        "shortDesc": "MP Cost: 15% of Max MP, Lotus Summon Duration: 1800 sec.\\nInvincible for 3.5 sec. upon revival.\\nCooldown: 400 sec. Skill Cooldown upon successful revival: +1400 sec.",
        "icons": ["/class-icons/5th-job/lotus-flower.png"],
        "animations": ["https://media.giphy.com/media/SGdhCXQpAHwCb1Fe8U/giphy.gif"],
        "type": "Buff Revive",
        "desc": "When hit by a fatal attack, you will not die but instead heal back a percentage of your HP back",
        "details": [
            "You are briefly invincible after reviving"
        ]
    },
    sengokuForce:{
        "name": "Sengoku Force, Assemble!",
        "shortDesc": "MP Cost: 1000, Consumes HP for jobs that do not utilize MP. Summons two Sengoku warriors. Summon Duration: 45 sec, Cooldown: 120 sec.\\n[Uesugi Kenshin] Damage: 550%, Max Enemies Hit: 8, Number of Attacks: 4\\n[Tsuchimikado Haruaki] Damage: 455%, Max Enemies Hit: 8, Number of Attacks: 5\\n[Ayame] Damage: 610%, Max Enemies Hit: 8, Number of Attacks: 4, Critical Damage +10%\\n[Takeda Shingen] Damage: 305%, Max Enemies Hit: 8, Number of Hits: 8, Attack Power +20, Magic ATT +20",
        "icons": ["/class-icons/5th-job/sengoku-force-assemble.png"],
        "animations": ["https://media2.giphy.com/media/hdOUEr0bUns5nRa0pR/giphy.gif"],
        "type": "Summon / Buff",
        "desc": "Grants a buff and summons two random heroes that attack nearby enemies",
        "details": [
            "[Buff]: Increases %Crit Damage and grants flat Attack and Magic Attack",
            "[Uesugi Kenshin]: Slashes her blade at nearby enemies",
            "[Tsuchimikado Haruaki]: Swings his fan creating a wave of magic",
            "[Ayame]: Shoots her rifle forward",
            "[Takeda Shingen]: Flags strike down on nearby enemies"
        ]
    },
    princessSakunoBlessing:{
        "name": "Princess Sakuno's Blessing",
        "shortDesc": "HP Cost: 1000, Duration: 45 sec, Final Damage Increase: 30%\\nPeriodical Bonus Final Damage Increase: 4%\\nPrincess Sakuno's Blessing will increase final damage by up to 50%\\nWhile the skill is active, 1 debilitating abnormal status attack will be ignored.\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/princess-sakunos-blessing.png"],
        "animations": ["https://media1.giphy.com/media/5trU6eJgfy60uoDzH2/giphy.gif"],
        "type": "Buff",
        "desc": "Grants a stacking %Final Damage buff (additive) and blocks 1 Critical Abnormal Status"
    },
    conversionOverdrive:{
        "name": "Conversion Overdrive",
        "shortDesc": "MP Cost: 12% of Max MP, Duration: 60 sec, Damage increases up to 45% depending on current MP proportions, Damage increase reset when Spell Storm occurs.\\nWhen using attack skill, activates a Spell Storm. Spell Storm MP Cost: additional 150 per 4 sec, Spell Storm Max Enemies Hit: 6, Spell Storm Damage: 1100%, Spell Storm Number of Attacks: 3\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/conversion-overdrive.png"],
        "animations": ["https://media4.giphy.com/media/DTXNaMlNmJjsxBdspG/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Damage in proportion to your current MP",
        "details": [
            "When attacking, you will periodically trigger a Spell Storm damaging nearby enemies<bp_The %Damage buff will be recalculated every time Spell Storm is activated_>"
        ]
    },
    transcendentRhinnePrayer:{
        "name": "Transcendent Rhinne's Prayer",
        "shortDesc": "Time Force Cost: 30. Resets cooldowns for all skills except the skills that are not affected by cooldown reset.\\nDuration: 45 sec, Attack Power: +100, Final Damage: +8%. When Doubletime stacks, gives a buff that creates additional attack with 365% damage and 5 additional attacks to enemies you attack with your skills.\\nAdditional hit buff disappears when additional attacks occurs, or if Transcendent Rhinne's Prayer ends.\\nDoubletime and Immune Barrier last for their maximum duration.\\nCooldown: 120 sec.",
        "icons": ["/class-icons/5th-job/transcendent-rhinnes-prayer.png"],
        "animations": ["https://media1.giphy.com/media/1l2KreXVnPRTEZaj1k/giphy.gif"],
        "type": "Buff",
        "desc": "While active, when <tt src={/class-icons/other/zero/doubletime.png} tip={Doubletime (Transcendent Skill)}> stacks, your next attack creates an additional attack",
        "details": [
            "When used, applicable skill cooldowns are reset",
            "Additionally while active, <tt src={/class-icons/other/zero/doubletime.png} tip={Doubletime (Transcendent Skill)}> and <tt src={/class-icons/other/zero/immune-barrier.png} tip={Immune Barrier (Beta, Lv. 165)}}> last for their maximum duration"
        ]
    },
    powerOfDestiny:{
        "name": "Power of Destiny",
        "shortDesc": "MP Cost: 80   . Uses the selected Power of Destiny\\n[Power of Destiny: Might] - Duration: 45 sec, Damage: +20%, Cooldown: 90 sec\\n[Power of Destiny: Perceive] - Duration: 60 sec, Ignore Defense: +30%, Cooldown: 180 sec\\n[Power of Destiny: Boon] - Duration: 60 sec, Attack Power & Magic ATT & All Stats: +30, Cooldown: 90 sec\\n[Power of Destiny: Journey] - Duration: 300 sec, Normal Enemy Damage: +30%, Cooldown: 600 sec",
        "icons": ["/class-icons/5th-job/power-of-destiny.png"],
        "type": "Buff",
        "desc": "Use the memorized skill chosen from <tt src={/class-icons/5th-job/ring-of-samsara.png} tip={Ring of Samsara (5th Job)}>",
        "details": [
            "<tt src={/class-icons/5th-job/power-of-destiny-might.png} tip={Power of Destiny - Might}> [1 - Might]: Increases %Damage",
            "<tt src={/class-icons/5th-job/power-of-destiny-perceive.png} tip={Power of Destiny - Perceive}> [2 - Perceive]: Increases %Ignore DEF",
            "<tt src={/class-icons/5th-job/power-of-destiny-boon.png} tip={Power of Destiny - Boon}> [3 - Boon]: Grants flat Attack, Magic Attack, and All Stats",
            "<tt src={/class-icons/5th-job/power-of-destiny-journey.png} tip={Power of Destiny - Journey}> [4 - Journey]: Increases %Damage to regular monsters"
        ]
    },
    ringOfSamsara:{
        "name": "Ring of Samsara",
        "shortDesc": "MP Cost: 130. Use the number keys to select an effect that can be activated with Power of Destiny. This skill is canceled if you fail to select spell within 5s sec, or if you press any other keys",
        "icons": ["/class-icons/5th-job/ring-of-samsara.png"],
        "animations": ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3RtZGE3bTN2cXVlaWQ5aDBqNm5iZXhtbXV4YTlmM3dxZnE3b2MxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/znevSsvwnIjsxw8ZW0/giphy.gif"],
        "type": "Active",
        "desc": "When used, allows you to select between 4 possible buffs using the Number Keys to be cast when using <tt src={/class-icons/5th-job/power-of-destiny.png} tip={Power of Destiny (5th Job)}>",
        "details": [
            "Failing to choose a skill within 5 sec or pressing other keys will cancel this skill",
            "The selected skill is reset at 12:00 AM UTC<bp_During that time, the buff cannot be changed until after reset_>",
            "This skill is gained alongside and shares SP with <tt src={/class-icons/5th-job/power-of-destiny.png} tip={Power of Destiny (5th Job)}>"
        ]
    },
    weaponAura:{
        "name": "Weapon Aura",
        "shortDesc": "HP Cost: 10% of Max HP, Ignores 16% Enemy DEF for 94 sec, Final Damage: +6%.\\nAura Wave (Usable Every 5 sec) - Using certain offensive skills will generate waves, inflicting 1100% damage on up to 10 enemies 6 times.\\nWeapon Aura Prepared: every 120 sec, Max Number Prepared: 2",
        "icons": ["/class-icons/5th-job/weapon-aura.png"],
        "animations": ["https://media4.giphy.com/media/flLOmhDE95Z0NDH1ug/giphy.gif"],
        "type": "Buff Attack",
        "desc": "Increases %Ignore DEF, %Final Damage and attacks periodically release a damaging wave",
        "details": [
            "Skill is prepared every 180 sec (up to 2 charges)"
        ]
    },
    impenetrableSkin:{
        "name": "Impenetrable Skin",
        "shortDesc": "HP Cost: 3% of Max HP, Duration: 18 sec, Knockdown Immunity and Status Resistance: +80\\nDamage increases +6% when hit, Max Stack: 6 times\\nCooldown: 120 sec\\n[Passive Effects - STR: +30, Max HP: +1500]",
        "icons": ["/class-icons/5th-job/impenetrable-skin.png"],
        "animations": ["https://media3.giphy.com/media/jjMaS7mAgN1OvvY9JT/giphy.gif"],
        "type": "Buff",
        "desc": "While active, gain increased Abnormal Status Resistance and cannot be knocked back at all (Super Knockback Resistance). As well, when you are hit, gain a stacking %Damage buff"
    },
    manaOverload:{
        "name": "Mana Overload",
        "shortDesc": "Consumes 2% Max MP to increase the Final Damage of all your skills (excluding summons) by 8%\\nConsumes 0.3% Max HP for jobs without MP\\nCan be toggled On/Off\\nCooldown: 30 sec",
        "icons": ["/class-icons/5th-job/mana-overload.png"],
        "animations": ["https://media1.giphy.com/media/uH12ABjyZFLcfbvjFH/giphy.gif"],
        "type": "Buff",
        "desc": "When toggled, increases the %Final Damage of all your skills (excluding summons)",
        "details": [
            "While toggled, consumes %Max MP every second or %Max HP for classes without MP"
        ]
    },
    etherealForm:{
        "name": "Ethereal Form",
        "shortDesc": "HP Cost: 1000, Invincibility Duration: 3 sec.\\nCooldown: 60 sec.",
        "icons": ["/class-icons/5th-job/ethereal-form.png"],
        "animations": ["https://media1.giphy.com/media/PoQHT9CkudFCPj6RBi/giphy.gif"],
        "type": "Buff",
        "desc": "When used, briefly become invincible",
        "details": [
            "While invincible, you cannot use other skills",
            "Pressing the Skill Key again ends the buff early"
        ]
    },
    guidedArrow: {
        "name": "Guided Arrow",
        "shortDesc": "MP Cost: 350, Arrow Damage: 880% damage to 1 nearby enemy. Damage Against Normal Enemies +20%",
        "icons": ["/class-icons/5th-job/guided-arrow.png"],
        "animations": ["https://media0.giphy.com/media/8fKfxe9zlHnmrXuXVJ/giphy.gif"],
        "type": "Toggle Summon",
        "desc": "While toggled, an arrow is summoned that seeks and attacks nearby enemies",
        "details": [
            "Deals increased %Damage to regular monsters",
            "Unaffected by Damage Reflect"
        ]
    },
    viciousShot: {
        "name": "Vicious Shot",
        "shortDesc": "MP Cost: 500, Duration: 30 sec, Allows Critical Rate to exceed 100% and Critical Damage to increase by 50% of Critical Rate.\\nThe attack's additional Critical Rate is not applied.\\nCooldown: 120 sec",
        "icons": ["/class-icons/5th-job/vicious-shot.png"],
        "animations": ["https://media0.giphy.com/media/gLaAUn0lGqbwsnsPyl/giphy.gif"],
        "type": "Buff",
        "desc": "While active, allows your %Crit Rate to exceed 100% and increases your %Crit Damage depending on how much %Crit Rate you have"
    },
    venomBurst: {
        "name": "Venom Burst",
        "shortDesc": "MP Cost: 300, Consumes all active Damage-over-Time stacks on up to 12 poisoned enemies in range and instantly inflicts 100% of their remaining damage plus an additional 1100% damage 6 times\\nAdditional damage is +15% per remaining second of consumed DoT stacks up to 5\\nAfterwards, spreads the original DoT damage to up to 10 nearby enemies\\nCooldown: 8 sec\\n[Passive Effects - Bonus DoT Chance: 50% to deal 340% damage every 1 sec for 8 sec]",
        "icons": ["/class-icons/5th-job/venom-burst.png"],
        "animations": ["https://media3.giphy.com/media/hk99simjA0L918EjM0/giphy.gif"],
        "type": "Attack",
        "desc": "Consumes all active Damage-over-Time stacks on nearby enemies to instantly deal the remaining damage plus an additional attack",
        "details": [
            "[Passive]: Permanently adds a bonus chance to apply a DoT effect to enemies when attacking",
            "When activated, the original DoT will spread to nearby enemies"
        ]
    },
    lastResort: {
        "name": "Last Resort",
        "shortDesc": "HP Cost: 10% of Max HP, reduces Avoidability (including Bonus Evasion) and increases Final Damage for 30 sec, Hit Damage increased if attacked within a certain percentage of your max HP. Enters 2nd Stage with remaining duration being reduced to 50% when skill is used again during 1st Stage, skill ends when used again during 2nd Stage.\\n1st Stage - Avoidability: -20%, Hit Damage: +10%, Final Damage: +10%\\n2nd Stage - Avoidability: -90%, Hit Damage: +20%, Final Damage: +24%\\nCooldown: 60 sec\\n[Passive Effect - ATT Power: +30]",
        "icons": ["/class-icons/5th-job/last-resort.png"],
        "animations": ["https://media1.giphy.com/media/H9sLPP1J2vVhs6Cmcl/giphy.gif"],
        "type": "Buff",
        "desc": "While active, reduces your %Avoidability while increases %Final Damage and damage taken from enemy attacks (including %Max HP attacks)",
        "details": [
            "[Passive]: Permanently grants flat Attack",
            "There are two stages of the buff, pressing the Skill Key again will enter second stage which increases the effects of both the debuff and buff portions of the skill",
            "Activating the buff by pressing the Down Arrow Key and Skill Key together will immediately trigger Stage 2<bp_Right-clicking the skill will toggle ON/OFF this function_>"
        ]
    },
    loadedDice: {
        "name": "Loaded Dice",
        "shortDesc": "MP Cost: 1000, select your desired die roll.\\nIf a job that has Double Down gets the same number on 2 dice, the chance for the last die to have the same number is decreased by 50%.\\nCooldown: 10 Sec.\\n[Passive Effect: Attack Power: +40]",
        "icons": ["/class-icons/5th-job/loaded-dice.png"],
        "animations": ["https://media0.giphy.com/media/3o34vbKGyVYywzT5tB/giphy.gif"],
        "type": "Buff",
        "desc": "After using this skill, the next time you use <tt src={/class-icons/common/roll-of-the-dice.png} tip={Roll of the Dice}> Roll of the Dice, you'll throw an additional dice of your choosing",
        "details": [
            "[Passive]: Permanently grants flat Attack",
            "Classes without <tt src={/class-icons/common/roll-of-the-dice.png} tip={Roll of the Dice}> will be given a special skill to choose their desired number"
        ]
    },
    overdrive: {
        "name": "Overdrive",
        "shortDesc": "HP Cost: 1700, Duration: 28 sec, Attack Power: +80% of base weapon attack power, Attack Power during cooldown: -15% of base weapon attack power\\nCooldown: 60 sec",
        "icons": ["/class-icons/5th-job/overdrive.png"],
        "animations": ["https://media2.giphy.com/media/rgc0CfIUzypN6jyNrL/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Attack but after the effect ends and the skill is on cooldown, you have reduced %Attack"
    },
    ropeLift: {
        "name": "Rope Lift",
        "shortDesc": "Press the skill key while you're climbing to cancel.\\nCooldown: 3 sec\\n[Passive Effect - All Stats: +30]",
        "icons": ["/class-icons/5th-job/rope-lift.png"],
        "type": "Active",
        "desc": "Grapple onto a platform above and launch towards it",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
            "Pressing the Jump Key while launching up will cancel the grapple early"
        ]
    },
    dMysticDoor: {
        "name": "Decent Mystic Door",
        "shortDesc": "HP Cost: 5% of Max HP, Portal Duration: 80 sec\\nCooldown: 130 sec\\n[Passive Effect - All Stats: +6]",
        "icons": ["/class-icons/explorers/bishop/mystic-door.png"],
        "animations": ["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZlbDllNWFhNDFwdXRraDh1YWxrbGQwZjBpNW4ybG1tMzVoNGVpdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZ5F67PgXtzcOKYbhv/giphy.gif"],
        "type": "Summon",
        "desc": "Create a portal that leads to the nearest town",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
            "To use, press the Up Arrow Key"
        ],
    },
    dSharpEyes: {
        "name": "Decent Sharp Eyes",
        "shortDesc": "HP Cost: 5% of Max HP, Duration: 270 sec, Critical Rate: +10%, Critical Damage: +8%\\nCooldown: 180 sec\\n[Passive Effect - All Stats: +6]",
        "icons": ["/class-icons/common/sharp-eyes.png"],
        "animations": ["https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM2M3cxY3B1ZXRjdmU4cmN6MzhlOGJxMHo4c3gydmpjbm5lOGNwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFncgZx8n974qsSZ2X/giphy.gif"],
        "type": "Buff",
        "desc": "",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
        ]
    },
    dHyperBody: {
        "name": "Decent Hyper Body",
        "shortDesc": "HP Cost: 5% of Max HP, Duration: 270 sec, Max HP: +40%, Max MP: +40%\\nCooldown: 180 sec\\n[Passive Effect - All Stats: +6]",
        "icons": ["/class-icons/explorers/dark-knight/hyper-body.png"],
        "animations": ["https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZzOWgwdWszdXNuZWdzNzRyczdqZWFneHF0aHAwMzhiZ213d212ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oKSKRlNwol8ikT3akU/giphy.gif"],
        "type": "Buff",
        "desc": "",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
        ]
    },
    dCombatOrders: {
        "name": "Decent Combat Orders",
        "shortDesc": "HP Cost: 5% of Max HP, Duration: 270 sec, All Skills: +1\\nCooldown: 180 sec\\n[Passive Effect - Abnormal Status Resistance: +6]",
        "icons": ["/class-icons/explorers/paladin/combat-orders.png"],
        "animations": ["https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZybWNoejU5Zmp3c2piNXBuYmxndjZ4ZWl6bDh2NXBiMTgzZWsxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xIYJZE21cbMifrMxD5/giphy.gif"],
        "type": "Buff",
        "desc": "Temporarily grants bonus skill levels to skills",
        "details": [
            "[Passive]: Permanently grants flat Abnormal Status Resistance",
            "4th Job Skills can be raised past their Master Level",
            "[Exception]: Beginner skills, Combat Orders, Hyper Skills, 5th Job, and 6th Job Skills"
        ]
    },
    dAdvancedBlessing: {
        "name": "Decent Advanced Blessing",
        "shortDesc": "Attack Power: +20, Magic ATT: +20, Defense: +425, Max HP: +475, Max MP: +475\\n[Passive Effect - All Stats: +6]",
        "icons": ["/class-icons/5th-job/decent-advanced-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
            "Does not stack with <tt src={/class-icons/explorers/bishop/bless.png} tip={Bless (Bishop, 2nd Job)}> or <tt src={/class-icons/explorers/bishop/advanced-blessing.png} tip={Advanced Blessing (Bishop, 4th Job)}>"
        ]
    },
    dSpeedInfusion: {
        "name": "Decent Advanced Blessing",
        "shortDesc": "Attack Speed +1 Level\\n[Passive Effect - All Stats: +6]",
        "icons": ["/class-icons/5th-job/decent-speed-infusion.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
            "Does not stack with <tt src={/class-icons/common/speed-infusion.png} tip={Speed Infusion (Pirate, 4th Job)}>"
        ]
    },
    blink: {
        "name": "Blink",
        "shortDesc": "HP Cost: 3% of Max HP. Teleport to a random location on the map.\\nFloat for up to 5.0 sec. if you hold the key in the air\\nCooldown: 20 sec.\\n[Passive Effect - Attack Power & Magic ATT: +30]",
        "icons": ["/class-icons/5th-job/blink.png"],
        "type": "Active",
        "desc": "When used, teleport to a random location on the map",
        "details": [
            "[Passive]: Permanently grants flat Attack",
            "Holding the Skill Key while in the air allows you to float briefly"
        ]
    },
    erdaNova: {
        "name": "Erda Nova",
        "shortDesc": "HP Cost: 15% of Max HP, Damage: 330%, Max Enemies Hit: 10, Number of Attacks: 5, Bind Duration: 10 sec.\\nBind Duration increases by up to 100% based on damage inflicted with Erda Nova.\\nCooldown: 100 sec.",
        "icons": ["/class-icons/5th-job/erda-nova.png"],
        "animations": ["https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTY1aTJqcnR4dzg3OTJ4N2VhNGFxZGYzd3NkbDdjZWx2a3ZoMmtlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4wiWlBZ41UO6kkFNjJ/giphy.gif"],
        "type": "Bind Attack",
        "desc": "Bind enemies in a surrounding area",
        "details": [
            "Ignores Damage Ignore and Damage Reflect"
        ]
    },
    willOfErda: {
        "name": "Will of Erda",
        "shortDesc": "HP Cost: 5% of Max HP, Cooldown: 330 sec",
        "icons": ["/class-icons/5th-job/will-of-erda.png"],
        "animations": ["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmZ5enpsMzJjczZhb3dqYmswNXhmaTUycDNmN3lqdWRpYzBnN2xwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UuePNNimDkYhaqOHWV/giphy.gif"],
        "type": "Buff",
        "desc": "Removes certain abnormal status effects and become immune to Abnormal Status for 3 secs"
    },
    dHolySymbol: {
        "name": "Decent Holy Symbol",
        "shortDesc": "HP Cost: 3400, Duration: 270 sec, EXP: +35%, Drop Rate: +24%\\nCooldown: 180 sec",
        "icons": ["/class-icons/explorers/bishop/holy-symbol.png"],
        "animations": ["https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExemNqMXpneGU4NHl5dzJua3k2YWcxdGpya2h5bHFjZjh0bGxwZWF4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sn4y8zRnXsPNz2Xwhy/giphy.gif"],
        "type": "Buff",
        "desc": "Increases the amount of EXP gained from enemies",
        "details": [
            "Does not stack with <tt src={/class-icons/explorers/bishop/holy-symbol.png} tip={Holy Symbol (Bishop, 4th Job)}>"
        ]
    },
    dHolyFountain: {
        "name": "Decent Holy Fountain",
        "shortDesc": "HP Cost: 5% of max HP, Duration: 60 sec, restores 35% HP when used, able to use 20 times total.\\nIf it disappears before duration is up, Vestige of Divinity is created in the remaining time.\\nCooldown: 60 sec\\n[Passive Effect - All Stats +6]",
        "icons": ["/class-icons/explorers/bishop/holy-fountain.png"],
        "animations": ["https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHg1aWJmcm9uYnV3Mnp3MDRhbzM2YW1jaHlqbTBibXJqNTFpOGVhciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DaRTnIhgQdNDpTLUbu/giphy.gif"],
        "type": "Summon Heal",
        "desc": "Create a fountain which pressing the Up Arrow Key restores some %Max HP",
        "details": [
            "[Passive]: Permanently grants flat All Stats",
            "Has a fixed number of uses before the fountain disappears",
            "If the fountain disappears early, a Vestige of Divinity is created for the remaining duration that prevents another fountain from being summoned",
            "Does not stack with <tt src={/class-icons/explorers/bishop/holy-fountain.png} tip={Holy Fountain (Bishop, 4th Job)}>"
        ]
    },
    erdaShower: {
        "name": "Erda Shower",
        "shortDesc": "HP Cost: 3000\\nErdas Shower\\nMax Enemies Hit: 15, Damage: 900%, Number of Attacks: 6, Cooldown reduced by 2 sec per attacked enemy\\nCooldown: 40 sec\\nErda Founutain\\nObject Summon Duration: 60 sec. Every time enemies in a map with the summoned object are defeated, the Erda released from the enemies condenses around the object.\\nDefeating 12 or more will release the gathered Erda, Max Enemies Hit: 10, Damage: 900%, Number of Attacks: 4\\nCooldown: 60 sec\\nCooldown shared with Erdas Shower and Erda Fountain.",
        "icons": ["/class-icons/5th-job/erda-shower-2.png", "/class-icons/5th-job/erda-shower.png", "/class-icons/5th-job/erda-fountain.png"],
        "animations": ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjh5YW0zcDhrMTYxYzc0aXR2ZnU2NW43cm9tejg1cDl2eXV1Z2w4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sY67cuY4cGePfilbh/giphy.gif", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBwNXllYXZubGJ0MG01d25vM3Iwejg3OHcxazQyYXJucWhoMWlkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JvBRr5cck6443TRM7i/giphy.gif"],
        "type": "Attack/Summon",
        "desc": "The attack has two modes depending on the keys pressed",
        "details": [
            "<tt src={/class-icons/5th-job/erda-fountain.png} tip={Erda Fountain (5th Job)}> [Erda Shower] - Releases a surrounding area attack<bp_Can be activated by pressing the Skill Key_The cooldown is slightly reduced upon defeating an enemy_>",
            "<tt src={/class-icons/5th-job/erda-shower.png} tip={Erda Shower (5th Job)}> [Erda Fountain] - Places down a stationary summon that attacks whenever a fixed amount of enemies are defeated<bp_Can be activated by pressing the Down Arrow Key and Skill Key together_>",
            "Both skills share the same cooldown",
            "Right-clicking the skill will toggle a function ON/OFF that swaps the activation command for <tt src={/class-icons/5th-job/erda-fountain.png} tip={Erda Fountain (5th Job)}> and <tt src={/class-icons/5th-job/erda-shower.png} tip={Erda Shower (5th Job)}>"
        ]
    },
    trueArachnidReflection: {
        "name": "True Arachnid Reflection",
        "shortDesc": "HP Cost: 15% of Max HP\\nSpatial Collapse - Max Enemies Hit: 15, Damage: 1008%, Number of Attacks: 15, Once complete, summons True Arachnid Reflection.\\nTrue Arachnid Reflection - Duration: 50 sec, Goes into attack mode at set intervals. During attack mode, uses spider legs 10 times to deal 392% damage 8 times. If the spider legs attack one target 5 consecutive times, attack mode will end immediately. 3 sec cooldown after attack mode ends.\\nCooldown: 250 sec",
        "icons": ["/class-icons/5th-job/true-arachnid-reflection.png"],
        "animations": ["https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDIzMDk3ZTkxbG14ZHZ2aXQxNHFob250ZGZuYTF5c2w3NjZzOTNuYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6UbqkAQUAgMLFTbePZ/giphy.gif", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeml6bW40aHNlbTc4dHJzeGQ3aHVjMnZtN2Zrc3ZhYnFsYjBmZmZodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MjY13NechoKxZeWUNc/giphy.gif"],
        "type": "Summon",
        "desc": "Release a large attack and place down a stationary summon that periodically attacks enemies",
        "details": [
            "Summon stops attacking early when striking a single enemy consecutively",
            "Skill is obtained from <tt src={/images/items/mirror-world-nodestone.png} tip={Mirror World Nodestone}> that is rewarded from completing the Esfera storyline and as a drop from Hard Will",
            "Unaffected by Damage Reflect"
        ]
    },
    solarCrest: {
        "name": "Solar Crest",
        "shortDesc": "HP Cost: 15% of Max HP\\nMitra's Fire: summons a Flame Emblem after dealing 1650% damage up to 15 enemeis 12 times.\\nFlame Emblem: deals 440% damage to up to 2 enemies 6 times every 2.1 sec for 51 sec. Deals 605% damage if striking a single enemy.\\nCooldown: 250 sec",
        "icons": ["/class-icons/5th-job/solar-crest.png"],
        "animations": ["https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmN2bjY5NWZ0bzdjdTd4NGw4aWlvdWdsNzduZ3U3emx2enNybzUyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DHBFk87CC7jR22CbFY/giphy.gif", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2ZtdjR2eWRqdHYxN2IzOGtiZmZjcG82OGV1MmJ3eGUzODZucW56OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FKEHbH83ZXQOVjTGgT/giphy.gif"],
        "type": "Summon",
        "desc": "Release a large attack and summons an emblem that periodically attacks enemies",
        "details": [
            "Summon deals increased damage when striking a single enemy",
            "Skill is obtained from <tt src={/images/items/mitras-nodestone.png} tip={Mitra's Nodestone}> that is dropped from Hard/Extreme Seren",
            "Unaffected by Damage Reflect"
        ]
    }
};

export const commonSixth = {
    solJanus: {
        "name": "Sol Janus",
        "shortDesc": "HP Cost: 500, Select a form of Sol Janus\\nCooldown: 3 sec\\n[Passive Effect: :EXP Obtained: +100%]",
        "icons": ["/class-icons/6th-job/sol-janus.png"],
        "type": "Active",
        "desc": "When used, using the Arrow Keys, switch between <tt src={/class-icons/6th-job/sol-janus-dusk.png} tip={Sol Janus: Dusk (6th Job)}> and <tt src={/class-icons/6th-job/sol-janus-dawn.png} tip={Sol Janus: Dawn (6th Job)}>",
        "details": [
            "[Passive]: Permanently increases %EXP Obtained from monsters",
            "At Skill Level 30, both forms gain increased %Damage to regular monsters"
        ]
    },
    solJanusDusk: {
        "name": "Sol Janus: Dusk",
        "shortDesc": "HP Cost: 1% of Max HP\\nAttacking enemies releases Sol Erda that creates 11 Primal Crystals.\\nPrimal Crystal - Damage: 1035%, Number of Attacks: 6\\nCooldown: 3 sec",
        "icons": ["/class-icons/6th-job/sol-janus-dusk.png"],
        "type": "Passive",
        "desc": "Periodically, successful attacks trigger an additional attack that targets enemies in a large area",
        "details": [
            "Unaffected by Damage Reflect and Cooldown Reduction",
            "Shares the same Skill Points (SP) with <tt src={/class-icons/6th-job/sol-janus.png} tip={Sol Janus: Dusk (6th Job)}> and Key Slot with <tt src={/class-icons/6th-job/sol-janus-dawn.png} tip={Sol Janus: Dawn (6th Job)}>"
        ]
    },
    solJanusDawn: {
        "name": "Sol Janus: Dawn",
        "shortDesc": "HP Cost: 10% of Max HP\\nRing Duration: 120 sec, Max Number of Rings: 3\\nCyclic Ring - Max Enemies Hit: 10, Damage: 690%, Number of Attacks: 6\\nCooldown: 60 sec",
        "icons": ["/class-icons/6th-job/sol-janus-dawn.png"],
        "type": "Summon",
        "desc": "Place down a stationary summon that damages nearby enemies",
        "details": [
            "Based on the Skill Level, up to 3 summons can be placed",
            "Unaffected by Damage Reflect",
            "Shares the same Skill Points (SP) with <tt src={/class-icons/6th-job/sol-janus.png} tip={Sol Janus: Dusk (6th Job)}> and Key Slot with <tt src={/class-icons/6th-job/sol-janus-dusk.png} tip={Sol Janus: Dusk (6th Job)}>"
        ]
    }
};

export const linkSkills = {
    expWarrior: {
        "id": 80002758,
        "icons": ["/class-icons/link-skills/invincible-belief.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Warrior to reach Master Level",
            "Useful for BOSSING because of increased SURVIVABILITY"
        ]
    },
    expMage: {
        "id": 80002762,
        "icons": ["/class-icons/link-skills/empirical-knowledge.png"],
        "type": "Passive",
        "desc": "When attacking, your attacks have a chance to debuff against the enemy with the highest Max HP",
        "details": [
            "[Debuff]: Increases %Damage and %Ignore DEF against this enemy (stacking up to 3 times)",
            "Can be stacked up to 3 times, once for each unique Explorer Magician to reach Master Level",
            "Useful for BOSSING because of INCREASED DAMAGE and IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE"
        ]
    },
    expArcher: {
        "id":80002766,
        "icons": ["/class-icons/link-skills/adventurers-curiosity.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Archer to reach Master Level",
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE",
            "Additionally useful for adding monsters to Monster Collection"
        ]
    },
    expThief: {
        "id": 80002770,
        "icons": ["/class-icons/link-skills/thiefs-cunning.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Thief to reach Master Level",
            "Useful for INCREASING DAMAGE for CLASSES WITH DEBUFFS"
        ]
    },
    expPirate: {
        "id":80002774,
        "icons": ["/class-icons/link-skills/pirate-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Pirate to reach Master Level",
            "The stats are affected by %Stat bonuses",
            "[Note]: Link Skill has a togglable effect where stats provided from your equipment can be swapped between STR + %STR and DEX + %DEX<bp_Double-click the Link Skill to turn this effect ON/OFF_The effect only applies to the original Link Skill, not the transferred version_Excludes Primary and Secondary Weapon, Totems, and Symbols_>",
            "Useful for INCREASING DAMAGE and TRAINING characters pre-200 because of increased SURVIVABILITY"
        ]
    },
    cygnusKnights: {
        "id": 80000055,
        "icons": ["/class-icons/link-skills/cygnus-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 5 times, once for each unique Cygnus Knight to reach Master Level",
            "Useful for INCREASING DAMAGE and REDUCING DURATION OF DEBUFFS<bp_Important in bosses like Chaos Pink Bean_>"
        ]
    },
    mihile: {
        "id": 80001140,
        "icons": ["/class-icons/link-skills/knights-watch.png"],
        "type": "Buff",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    mercedes: {
        "id":80001040,
        "icons": ["/class-icons/link-skills/elven-blessing.png"],
        "type": "Active / Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP"
        ]
    },
    aran: {
        "id":80000370,
        "icons": ["/class-icons/link-skills/combo-kill-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP"
        ]
    },
    phantom: {
        "id":80000002,
        "icons": ["/class-icons/link-skills/phantom-instinct.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE"
        ]
    },
    luminous: {
        "id":80000005,
        "icons": ["/class-icons/link-skills/light-wash.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE"
        ]
    },
    evan: {
        "id":80000369,
        "icons": ["/class-icons/link-skills/rune-persistence.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP<bp_Runes provide a 2x EXP buff when active_>"
        ]
    },
    shade: {
        "id":80000169,
        "icons": ["/class-icons/link-skills/close-call.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING because of increased SURVIVABILITY"
        ]
    },
    resistance: {
        "id": 80000329,
        "icons": ["/class-icons/link-skills/spirit-of-freedom.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 4 times, once for each unique Resistance character (Except Demons and Xenon) to reach Master Level",
            "Useful for BOSSING because of increased UTILITY"
        ]
    },
    demonAvenger: {
        "id": 80000050,
        "icons": ["/class-icons/link-skills/wild-rage.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    demonSlayer: {
        "id": 80000001,
        "icons": ["/class-icons/link-skills/fury-unleashed.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    xenon: {
        "id": 80000047,
        "icons": ["/class-icons/link-skills/hybrid-logic.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    angelicBuster: {
        "id": 80001155,
        "offline": true,
        "name": "Terms and Conditions",
        "shortDesc": "Duration: 10 sec, Damage: +60%\\nCooldown: 60 sec",
        "maxLevel": 3,
        "icons": ["/class-icons/link-skills/terms-and-conditions.png"],
        "type": "Buff",
        "desc": "",
        "details": [
            "Useful for BOSSING for classes with BURST ATTACKS"
        ]
    },
    cadena: {
        "id": 80000261,
        "icons": ["/class-icons/link-skills/unfair-advantage.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Weaker opponents refer to enemies lower level than you",
            "Useful for TRAINING because of INCREASED DAMAGE"
        ]
    },
    kaiser: {
        "id": 80000006,
        "icons": ["/class-icons/link-skills/iron-will.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING characters pre-200 because of increased SURVIVABILITY"
        ]
    },
    kain: {
        "id": 60030241,
        "icons": ["/class-icons/link-skills/time-to-prepare.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    hayato: {
        "id": 80000003,
        "icons": ["/class-icons/link-skills/keen-edge.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    kanna: {
        "id": 80000004,
        "icons": ["/class-icons/link-skills/elementalism.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    ark: {
        "id": 80000514,
        "icons": ["/class-icons/link-skills/solus.png"],
        "type": "Passive",
        "desc": "While you are in combat state, you gain a stacking %Damage buff",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    illium: {
        "id": 80000268,
        "icons": ["/class-icons/link-skills/tide-of-battle.png"],
        "type": "Passive",
        "desc": "As you move around, you gain a stacking %Damage buff",
        "details": [
            "Useful for INCREASING DAMAGE for classes that MOVE A LOT"
        ]
    },
    adele: {
        "id": 80002857,
        "icons": ["/class-icons/link-skills/noble-fire.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    khali: {
        "id": 80003224,
        "icons": ["/class-icons/link-skills/innate-gift.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Unaffected by cooldown resets, cooldown reduction, and buff duration increase",
            "Useful for SURVIVABILITY"
        ]
    },
    lynn: {
        "id": 80010006,
        "icons": ["/class-icons/link-skills/spirit-guide-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE and for BOSSING"
        ]
    },
    moxuan: {
        "id": 80010006,
        "offline": true,
        "name": "Qi Cultivation",
        "shortDesc": "Boss Damage: +4%. If the target is a boss, up to 2% increase for every successful attack. Max Stacks: 6, stack activates once every 2 sec.\\nDuration: 5 sec",
        "icons": ["/class-icons/link-skills/qi-cultivation.png"],
        "maxLevel": 2,
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    hoyoung: {
        "id": 80000609,
        "icons": ["/class-icons/link-skills/bravado.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED DAMAGE"
        ]
    },
    lara: {
        "id": 160010001,
        "icons": ["/class-icons/link-skills/natures-friend.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED DAMAGE"
        ]
    },
    kinesis: {
        "id": 80000188,
        "icons": ["/class-icons/link-skills/judgment.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASED DAMAGE"
        ]
    },
    zero: {
        "id": 80000110,
        "icons": ["/class-icons/link-skills/rhinnes-blessing.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "This skill is leveled up by completing the Zero storyline",
            "Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE<bp_Also useful for TRAINING pre-200 because of increased SURVIVABILITY_>"
        ]
    },
    siaAstelle: {
        "id": 80010006,
        "offline": true,
        "name": "Tree of Stars",
        "shortDesc": "Buff Duration: +10%, Critical Damage: +3%",
        "icons": ["/class-icons/link-skills/tree-of-stars.png"],
        "maxLevel": 3,
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING because BUFF DURATION is USEFUL FOR EXTENDING ANGELIC BUSTER'S LINK SKILL and CRIT DAMAGE for INCREASED DAMAGE"
        ]
    },
}

export default HeaderImageUrl;