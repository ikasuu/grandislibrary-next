/*
    Static or common values in our site should be placed here
    Created by: Ikasuu, Fall 2020
*/

//Latest version of GMS
export const version = 227; 
export const versionName = "Bugcat Capoo Update"

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
    explorers: [["hero","Hero"], ["paladin","Paladin"], ["dark-knight","Dark Knight"], ["bishop", "Bishop"], ["arch-mage-ice-lightning", "Arch Mage (Ice, Lightning)"], ["arch-mage-fire-poison", "Arch Mage (Fire, Poison)"], ["dual-blade", "Dual Blade"], ["shadower", "Shadower"], ["night-lord", "Night Lord"], ["pathfinder", "Pathfinder"], ["marksman", "Marksman"], ["bowmaster", "Bowmaster"], ["cannoneer", "Cannoneer"], ["buccaneer", "Buccanner"], ["corsair", "Corsair"], ["jett", "Jett"]],
    cygnusKnights: [["dawn-warrior", "Dawn Warrior"], ["thunder-breaker","Thunder Breaker"], ["night-walker", "Night Walker"], ["wind-archer", "Wind Archer"], ["blaze-wizard", "Blaze Wizard"], ["mihile", "Mihile"]],
    heroes: [["mercedes", "Mercedes"], ["aran", "Aran"], ["phantom", "Phantom"], ["luminous", "Luminous"], ["evan", "Evan"], ["shade", "Shade"]],
    resistance: [["battle-mage", "Battle Mage"], ["blaster", "Blaster"], ["mechanic", "Mechanic"], ["wild-hunter", "Wild Hunter"], ["xenon", "Xenon"], ["demon-slayer", "Demon Slayer"], ["demon-avenger", "Demon Avenger"]],
    nova: [["angelic-buster", "Angelic Buster"], ["kaiser", "Kaiser"], ["cadena", "Cadena"], ["kain", "Kain"]],
    sengoku: [["kanna", "Kanna"], ["hayato", "Hayato"]],
    flora: [["adele", "Adele"], ["ark", "Ark"], ["illium", "Illium"]],
    other: [["kinesis", "Kinesis"], ["zero", "Zero"], ["beast-tamer", "Beast Tamer"]],
    anima: [["hoyoung", "Hoyoung"]]
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
    scepter: [`https://maplestory.io/api/GMS/${version}/item/1252006/icon`, "Scepter"],
    psyLimiter: [`https://maplestory.io/api/GMS/${version}/item/1262011/icon`, "Psy-limiter"],
    armCannon: [`https://maplestory.io/api/GMS/${version}/item/1582025/icon`, "Arm Cannon"],
    longSword: [`https://maplestory.io/api/GMS/${version}/item/1572007/icon`, "Alpha - Long Sword"],
    chain: [`https://maplestory.io/api/GMS/${version}/item/1272005/icon`, "Chain"],
    lucentGauntlet: [`https://maplestory.io/api/GMS/${version}/item/1282028/icon`, "Lucent Gauntlet"],
    ancientBow: [`https://maplestory.io/api/GMS/${version}/item/1592000/icon`, "Ancient Bow"],
    ritualFan: [`https://maplestory.io/api/GMS/${version}/item/1292036/icon`, "Ritual Fan"],
    bladecaster: [`https://maplestory.io/api/GMS/${version}/item/1213026/icon`, "Bladecaster"],
    whispershot: [`https://i.imgur.com/NgIOGsT.png`, "Whispershot"]
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
    whistle: [`https://maplestory.io/api/GMS/${version}/item/1352813/icon`, "Whistle"],
    chessPiece: [`https://maplestory.io/api/GMS/${version}/item/1353203/icon`, "Chess Piece"],
    lucentWings: [`https://maplestory.io/api/GMS/${version}/item/1353502/icon`, "Lucent Wings"],
    abyssalPath: [`https://maplestory.io/api/GMS/${version}/item/1353603/icon`, "Abyssal Path"],
    relic: [`https://maplestory.io/api/GMS/${version}/item/1353703/icon`, "Relic"],
    fanTassel: [`https://maplestory.io/api/GMS/${version}/item/1353803/icon`, "Fan Tassel"],
    bladebinder: [`https://maplestory.io/api/GMS/${version}/item/1354003/icon`, "Bladebinder"],
    weaponBelt: [`https://i.imgur.com/yKfIH8l.png`, "Weapon Belt"]
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
        "name": "Maple World Goddess Blessing",
        "shortDesc": "MP Cost: 500, Increases stat bonuses for class-wide buff skills like Maple Warrior by 350% for 60 sec, Damage: +17%\\nCooldown: 180 sec",
        "id": 400001042,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Skill_Maple_World_Goddess%27s_Blessing.png/revision/latest?cb=20191122065037"],
        "animations": ["https://media4.giphy.com/media/AV4drI0ly2fYImnP3H/giphy.gif"],
        "type": "Buff",
        "desc": "Increases the effects of <img src='https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Skill_Maple_Warrior.png/revision/latest?cb=20100602085809' alt='Skill Maple Warrior' width='32' height='32'> greatly and grants increased %Damage"
    },
    expWarrior:{
        "name": "Blitz Shield",
        "shortDesc": "HP Cost: 5% of Max HP, Creates a protective shield that blocks 20% of your Max HP as damage for 5 sec.\\nWhen the shield expires or the skill is activated again, it detonates and inflicts 1000% damage to 12 enemies 5 times.\\nYour shield must be active for at least 2 sec before it can be detonated.\\nCooldown: 15 sec",
        "id": 400001010,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/80/Skill_Blitz_Shield.png/revision/latest?cb=20170629201925"],
        "animations": ["https://media2.giphy.com/media/0Rj4K4HNqYGsk63MyN/giphy.gif"],
        "type": "Buff",
        "desc": "Creates a shield based on your %Max HP that blocks damage",
        "details": [
            "When the shield expires or the Skill Key is pressed, the shield explodes damaging nearby enemies <ul> <li>Shield must be active for at least 2 secs before it can be detonated</li> </ul>"
        ]
    },
    expMagician:{
        "name": "Unreliable Memory",
        "shortDesc": "MP Cost: 150, Uses one random skill or active Hyper Skill from 1st to 4th jobs.\\nIgnores MP cost and cooldown of selected skill. Cannot trigger unlearned skills.\\nCooldown: 10 sec\\n[Passive Effect: INT +25]",
        "id": 400001021,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/05/Skill_Unreliable_Memory.png/revision/latest?cb=20170629202924"],
        "animations": ["https://media4.giphy.com/media/ncQEHsz4n9SUxkaU4l/giphy.gif"],
        "type": "Active",
        "desc": "Uses one random skill or active Hyper Skill from 1st to 4th Job",
        "details": [
            "Ignores MP Cost and cooldowns",
            "Cannot trigger unlearned skills",
            "<strong>[Passive]</strong>: Grants flat INT"
        ]
    },
    expBowman: {
        "name": "Fury of the Wild",
        "shortDesc": "MP Cost: 800, Duration: 40 sec, Max Enemies Hit: 10, Damage: 825%, Number of Attacks: 7\\nCooldown: 108 sec",
        "id": 400001012,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/35/Skill_Fury_of_the_Wild.png/revision/latest?cb=20190615205233"],
        "animations": ["https://media3.giphy.com/media/llsZlPVsm7sAZFcb8i/giphy.gif"],
        "type": "Summon",
        "desc": "Transforms Phoenix, Frosprey, or Shadow Raven into a more powerful form",
        "details": [
            "Can only be used when <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/58/Skill_Phoenix.png/revision/latest?cb=20110502142452' alt='Skill Phoenix' width='32' height='32' /> <img class='icon' src='/class-icons/marksman/frostprey.png' alt='Skill Frostprey' /> <img class='icon' src='https://vignette.wikia.nocookie.net/maplestory/images/5/57/Skill_Shadow_Raven.png/revision/latest?cb=20190616015333' alt='' /> is active"
        ]
    },
    expPBowman: {
        "name": "Fury of the Wild",
        "shortDesc": "MP Cost: 800, Duration: 40 sec, Max Enemies Hit: 10, Damage: 825%, Number of Attacks: 7\\nCooldown: 108 sec",
        "id": 400001012,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/35/Skill_Fury_of_the_Wild.png/revision/latest?cb=20190615205233"],
        "animations": ["https://media0.giphy.com/media/ZlMeLcuyoa4oW2el4Z/giphy.gif"],
        "desc": "Transforms Phoenix, Frosprey, or Shadow Raven into a more powerful form",
        "details": [
            "Can only be used when <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/58/Skill_Phoenix.png/revision/latest?cb=20110502142452' alt='Skill Phoenix' width='32' height='32' /> <img class='icon' src='/class-icons/marksman/frostprey.png' alt='Skill Frostprey' /> <img class='icon' src='https://vignette.wikia.nocookie.net/maplestory/images/5/57/Skill_Shadow_Raven.png/revision/latest?cb=20190616015333' alt='' /> is active"
        ]
    },
    expThief: {
        "name": "Shadow Walker",
        "shortDesc": "MP Cost: 850, Duration: 30 sec. Initiates a form of stealth that is not canceled by skills or attacks.\\nFinal Damage increased by 15% added on top of Advanced Dark Sight's Final Damage bonus.\\nCooldown: 195 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/fe/Skill_Shadow_Walker.png/revision/latest?cb=20170629203944"],
        "animations": ["https://media4.giphy.com/media/KZvjAfaZInF431yAcH/giphy.gif"],
        "type": "Buff",
        "desc": "Activates a special <img width='32' height='32' src='https://vignette.wikia.nocookie.net/maplestory/images/d/dd/Skill_Dark_Sight.png/revision/latest?cb=20100308114826' alt='Skill Dark Sight'> where attacking will not cancel the buff",
        "details": [
            "Additionally increases %Final Damage added on top of <img width='32' height='32' src='https://vignette.wikia.nocookie.net/maplestory/images/9/9d/Skill_Advanced_Dark_Sight.png/revision/latest?cb=20100615145647' alt='Skill Advanced Dark Sight'>"
        ]
    },
    expPirate: {
        "name": "Pirate's Banner",
        "shortDesc": "MP Cost: 500, Summons a Pirate's Banner for 30 sec.\\nBoosts the stats of party members near the flag by 22% in any attribute they have assigned AP. Enemy DEF: -22%\\nCooldown: 35 sec",
        "id": 400001017,
        "icons": ["https://orangemushroom.files.wordpress.com/2016/12/pirate-flag.png?w=600"],
        "animations": ["https://media2.giphy.com/media/4HkGIZpk9nhjknNRFb/giphy.gif"],
        "type": "Buff Zone",
        "desc": "Increases all stats assigned APs by a percentage of party members within the zone and reduces enemy %DEF inside the zone"
    },
    phalanxCharge:{
        "name": "Phalanx Charge",
        "shortDesc": "MP Cost: 500, Damage: 900%, Number of Attacks: 65\\nSpearmen disappear when the number of attacks is reached, they move a certain distance, or after a certain duration. Activate the skill again to change their direction.\\nCooldown: 30 sec",
        "id": 400001018,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/80/Skill_Phalanx_Charge.png/revision/latest?cb=20170623004415"],
        "animations": ["https://media4.giphy.com/media/7y719ZfMh0lXsQW919/giphy.gif"],
        "type": "Summon",
        "desc": "Summons Spearmen of Cygnus Knights to charge forward damaging enemies that collide with it",
        "details": [
            "The spearmen slow down upon touching an enemy",
            "Pressing the Skill Key again will change their direction of movement",
            "Unaffected by Damage Reflect"
        ]
    },
    cygnusBlessing:{
        "name": "Empress Cygnus's Blessing",
        "shortDesc": "MP Cost: 500, Duration: 45 sec, Damage +25% Periodically restores 4% HP and increases your damage by 5%.\\nThis damage bonus is additive and maxes out at 90%\\nCooldown: 240 sec.",
        "id": 400001043,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/f2/Skill_Empress_Cygnus%27s_Blessing.png/revision/latest?cb=20191122065036", "https://vignette.wikia.nocookie.net/maplestory/images/e/ea/Skill_Transcendent_Cygnus%27s_Blessing.png/revision/latest?cb=20191122065038"],
        "animations": ["https://media4.giphy.com/media/o4zWBHJ69l1pd4x9hf/giphy.gif", "https://media2.giphy.com/media/oHDJdfZZm1KEBCm9n7/giphy.gif"],
        "type": "Buff",
        "desc": "Increases %Damage",
        "details": [
            "Additionally periodically restores %Max HP and increases the %Damage buff (up to 90%)",
            "Skill is enhanced after Lv. 245 becoming <img src='https://vignette.wikia.nocookie.net/maplestory/images/e/ea/Skill_Transcendent_Cygnus%27s_Blessing.png/revision/latest?cb=20191122065038' alt='Skill Transcendent Cygnus's Blessing' width='32' height='32'/> Transcendent Cygnus's Blessing<ul><li>Damage buff will instead go up to 120% and additionally now reduces damage taken (including %Max HP attacks)</li></ul>"
        ]
    },
    freudsWisdom:{
        "name": "Freud's Wisdom",
        "shortDesc": "MP Cost: 250, Duration: 30 sec, Max Stacks: 6, Each stack provides an additional buff.\\nStack 1 - Skill Cooldown: -10% (excludes skills unaffected by cooldown reduction)\\nStack 2 - Knockback Resistance: +75%\\nStack 3 - All Stats: +50\\nStack 4 - Attack Power & Magic ATT: +22\\nStack 5 - Boss Damage: +22%\\nStack 6 - Invincible for duration of skill\\nCooldown: 25 sec. Cooldown increased to 240 sec when buff expires (including character death) or max stack count is reached.",
        "id": 400001024,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Freud%27s_Wisdom.png/revision/latest?cb=20170625064015"],
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
        "shortDesc": "MP Cost: 650, Duration: 10 sec, Damage: 415%, Number of Attacks: 9, Max Enemies Hit: 12\\nCooldown: 25 sec",
        "id": 400001019,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/ed/Skill_Resistance_Infantry.png/revision/latest?cb=20170625170734"],
        "animations": ["https://media1.giphy.com/media/8lnnh46r15qpe51QLL/giphy.gif"],
        "type": "Summon",
        "desc": "A squad of Resistance infantry fires waves of bullets at enemies",
        "details": [
            "Unaffected by Damage Reflect"
        ]
    },
    defenderOfTheDemon:{
        "name": "Defender of the Demon",
        "shortDesc": "Consumes 5% of Max HP to summon Mastema for 55 sec.\\nCooldown: 150 sec\\nMastema uses the following skills at her own discretion:\\nMastema's Claw - Max Enemies Hit: 8, Damage: 1000%, Number of Attacks: 8, Cooldown: 4 sec\\nMastema's Mark - Damage Taken: -22% (Including attacks inflicting damage proportional to Max HP), Max Uses: 2, Duration: 6 sec. Mastema's Mark vanishes when duration ends or max uses is reached. Cooldown: 10 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/a/a6/Skill_Defender_of_the_Demon.png/revision/latest?cb=20170625165445"],
        "animations": ["https://media1.giphy.com/media/XGCkfDLecmgSCsBc4n/giphy.gif"],
        "type": "Summon",
        "desc": "Summons Mastema to fight by your side",
        "details": [
            "Mastema has two different skills:<ul><li><strong>[Mastema's Claw]</strong>: Mastema attacks by clawing forward</strong></li><li><strong>[Mastema's Mark]</strong>: Mastema grants a buff that increases %Damage Reduction (including %Max HP attacks)<ul><li>Mastema will use this skill up to two times</li><li>Buff vanishes when duration ends or max uses is reached</li></li></ul>",
            "Unaffected by Damage Reflect"
        ]
    },
    otherworldGoddessBlessing:{
        "name": "Otherworld Goddess's Blessing",
        "shortDesc": "HP Cost: 5% of Max HP, increases Final Damage by 10% for 40 sec. Periodically casts various blessings or attacks. Previous blessings disappear when a new blessing is cast.\\nBlessing of Recovery : Restores 27% of the your character's max DF/PP/HP. Heals through status effects that prevent health recovery, aside from in Ghost Park.\\nAegis Blessing: Damage Taken: -70% (Triggers once, includes damage proportional to Max HP.)\\nBlessing of Fortitude: Ignores one debilitating status effect.\\nOtherwordly Void: Max Enemies Hit: 12, Damage: 2400%, Number of Attacks: 12\\nCooldown: 120 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/8a/Skill_Otherworld_Goddess%27s_Blessing.png/revision/latest?cb=20191116025124"],
        "animations": ["https://media0.giphy.com/media/HBVTG6lGTAK9OLJ9qe/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Final Damage while periodically providing various buffs",
        "details": [
            "<strong>[Blessing of Recovery]: </strong>Restores some %Max HP regardless of any effects preventing HP recovery",
            "<strong>[Aegis Blessing]</strong>: Reduces damage taken once, including %Max HP damage but, triggers only once per buff",
            "<strong>[Blessing of Fortitude]: </strong>Ignores one movement-restricting Abnormal Status",
            "<strong>[Otherworldly Void]: </strong>Damages nearby enemies"
        ]
    },
    mightOfTheNova:{
        "name": "Might of the Nova",
        "shortDesc": "HP Cost: 20% of Max HP, Max Enemies Hit: 15, Damage: 4000%, Number of Attacks: 10\\nBuff: After use, you are protected from fatal blows for 900 sec.\\nCooldown: 1200 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/ef/Skill_Might_of_the_Nova.png/revision/latest?cb=20170628003202"],
        "animations": ["https://media1.giphy.com/media/eiYA7as3sG0mA6277y/giphy.gif"],
        "type": "Attack / Buff",
        "desc": "Deals a massive attack to nearby enemies while granting a buff that prevents you from one fatal blow",
        "details": [
            "Functions exactly the same as Bishop's <img width='32' height='32' src='https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Heaven%27s_Door.png/revision/latest?cb=20120918153903' alt='Skill Heaven's Door'> Heaven's Door"
        ]
    },
    grandisGoddessBlessingNV:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 52% chance to not have cooldown, up to 5 times\\nDamage: +30%, Knockback Resistance: +100%\\nKaiser receives additional 10% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 90% of your equipment's Attack Power/Magic ATT, whichever you do not use, is converted to the one you use. This does not apply to set effects. Converted bonus cannot exceed 150% of your weapon's base Attack Power/Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +85\\nAnima: Talisman and Scroll Energy Charge: +70%\\nDamage: +35%, Knockback Resistance: +100%\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Skill_Grandis_Goddess%27s_Blessing.png/revision/latest?cb=20191122065033"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, skills have a chance to not have a cooldown",
        "details": [
            "You can only ignore a cooldown up to 5 - 6 times (depending on Skill Level)",
            "Additionally grants %Damage and 100% Knockback Resistance"
        ]
    },
    grandisGoddessBlessingKAI:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 52% chance to not have cooldown, up to 5 times\\nDamage: +30%, Knockback Resistance: +100%\\nKaiser receives additional 10% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 90% of your equipment's Attack Power/Magic ATT, whichever you do not use, is converted to the one you use. This does not apply to set effects. Converted bonus cannot exceed 150% of your weapon's base Attack Power/Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +85\\nAnima: Talisman and Scroll Energy Charge: +70%\\nDamage: +35%, Knockback Resistance: +100%\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Skill_Grandis_Goddess%27s_Blessing.png/revision/latest?cb=20191122065033"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, skills have a chance to not have a cooldown",
        "details": [
            "You can only ignore a cooldown up to 5 - 6 times (depending on Skill Level)",
            "Additionally grants %Damage and 100% Knockback Resistance"
        ]
    },
    grandisGoddessBlessingFL:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 52% chance to not have cooldown, up to 5 times\\nDamage: +30%, Knockback Resistance: +100%\\nKaiser receives additional 10% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 90% of your equipment's Attack Power/Magic ATT, whichever you do not use, is converted to the one you use. This does not apply to set effects. Converted bonus cannot exceed 150% of your weapon's base Attack Power/Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +85\\nAnima: Talisman and Scroll Energy Charge: +70%\\nDamage: +35%, Knockback Resistance: +100%\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Skill_Grandis_Goddess%27s_Blessing.png/revision/latest?cb=20191122065033"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, a percent of your equipment's Attack or Magic Attack will be converted to the one you use",
        "details": [
            "Excludes your Primary Weapon and Set Bonus Effects",
            "Converted bonus cannot exceed 150% of your weapon's base Attack/Magic Attack"
        ]
    },
    grandisGoddessBlessingHY:{
        "name": "Grandis Goddess's Blessing",
        "shortDesc": "HP Cost: 800, Duration: 40 sec\\nNova: Skills have a 52% chance to not have cooldown, up to 5 times\\nDamage: +30%, Knockback Resistance: +100%\\nKaiser receives additional 10% damage increase for each Morph Gauge Stage.\\nFlora: Excluding your weapon, 90% of your equipment's Attack Power/Magic ATT, whichever you do not use, is converted to the one you use. This does not apply to set effects. Converted bonus cannot exceed 150% of your weapon's base Attack Power/Magic ATT, whichever one you use.\\nAttack Power and Magic ATT: +85\\nAnima: Talisman and Scroll Energy Charge: +70%\\nDamage: +35%, Knockback Resistance: +100%\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Skill_Grandis_Goddess%27s_Blessing.png/revision/latest?cb=20191122065033"],
        "animations": ["https://media0.giphy.com/media/mJKwclZzBmPziE6TBJ/giphy.gif"],
        "type": "Buff",
        "desc": "While active, increases %Damage, 100% Knockback Resistance and Talisman and Scroll Power charge rate "
    },
    sengokuForce:{
        "name": "Sengoku Force, Assemble!",
        "shortDesc": "MP Cost: 1000, Consumes HP for jobs that do not utilize MP. Summons two Sengoku warriors. Summon Duration: 42 sec, Cooldown: 120 sec.\\n[Uesugi Kenshin] Damage: 500%, Max Enemies Hit: 8, Number of Attacks: 4, Ignore Defense +20%\\n[Tsuchimikado Haruaki] Damage: 405%, Max Enemies Hit: 8, Number of Attacks: 5, Damage Taken -15%\\n[Ayame] Damage: 560%, Max Enemies Hit: 8, Number of Attacks: 4, Critical Damage +15%\\n[Takeda Shingen] Damage: 275%, Max Enemies Hit: 8, Number of Hits: 8, Attack Power +30, Magic ATT +30",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c7/Skill_Sengoku_Force%2C_Assemble%21.png/revision/latest?cb=20170628223223"],
        "animations": ["https://media2.giphy.com/media/hdOUEr0bUns5nRa0pR/giphy.gif"],
        "type": "Summon",
        "desc": "Randomly summons two Sengoku heroes to fight alongside you while providing a buff",
        "details": [
            "<strong><img class='' src='https://maplestory.io/api/GMS/210.1.1/npc/9130005/icon' width='51' height='65' data-v-69bdc78a='' />[Uesugi Kenshin]: </strong>Slashes her blade at nearby enemies<ul><li>Increases %Ignore DEF</li></ul>",
            "<strong><img class='' src='https://maplestory.io/api/GMS/210.1.1/npc/9130007/icon' width='61' height='93' data-v-69bdc78a='' />[Tsuchimikado Haruaki]: </strong>Swings his fan creating a wave of magic<ul><li>Increases %Damage Reduction</li></ul>",
            "<strong><img class='' src='https://maplestory.io/api/GMS/210.1.1/npc/9000425/icon' width='55' height='74' data-v-69bdc78a='' />[Ayame]: </strong>Shoots her rifle forward<ul><li>Increases %Crit Damage</li></ul>",
            "<img class='' src='https://maplestory.io/api/GMS/210.1.1/npc/9000427/icon' width='72' height='76' data-v-69bdc78a='' />[Takeda Shingen]: </strong>Flags strike down on nearby enemies<ul><li>Increases Attack and Magic Attack</li></ul>"
        ]
    },
    princessSakunoBlessing:{
        "name": "Princess Sakuno's Blessing",
        "shortDesc": "HP Cost: 1000, Duration: 45 sec, Final Damage Increase: 13%\\nPeriodical Bonus Final Damage Increase: 3%\\nPrincess Sakuno's Blessing will increase final damage by up to 48%\\nWhile the skill is active, 1 debilitating abnormal status attack will be ignored.\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/1/1a/Skill_Princess_Sakuno%27s_Blessing.png/revision/latest?cb=20191122065037"],
        "animations": ["https://media1.giphy.com/media/5trU6eJgfy60uoDzH2/giphy.gif"],
        "type": "Buff",
        "desc": "Increases %Final Damage",
        "details": [
            "The amount of %Final Damage provided increases periodically",
            "While active, prevents 1 Abnormal Status"
        ]
    },
    conversionOverdrive:{
        "name": "Conversion Overdrive",
        "shortDesc": "MP Cost: 15% of Max MP, Duration: 55 sec, Damage increases up to 45% depending on current MP proportions, Damage increase reset when Spell Storm occurs.\\nWhen using attack skill, activates a Spell Storm. Spell Storm MP Cost: additional 150 per 4 sec, Spell Storm Max Enemies Hit: 6, Spell Storm Damage: 1000%, Spell Storm Number of Attacks: 3\\nCooldown: 200 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Conversion_Overdrive.png/revision/latest?cb=20180701142936"],
        "animations": ["https://media4.giphy.com/media/DTXNaMlNmJjsxBdspG/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Damage in proportion to your current MP",
        "details": [
            "When attacking, you will periodically trigger a Spell Storm damaging nearby enemies<ul><li>The %Damage buff will be recalculated every time Spell Storm is activated</li></ul>"
        ]
    },
    transcendentRhinnePrayer:{
        "name": "Transcendent Rhinne's Prayer",
        "shortDesc": "Time Force Cost: 30, resets cooldowns for all skills.\\nDuration: 42 sec, Attack Power: +85. When Doubletime stacks, gives a buff that creates additional attack with 250% damage and 5 additional attacks to enemies you attack with your skills.\\n Additional hit buff disappears when additional attacks occurs, or if Transcendent Rhinne's Prayer ends.\\nDoubletime and Immune Barrier last for their maximum duration.\\nCooldown: 240 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/7/7f/Skill_Transcendent_Rhinne%27s_Prayer.png/revision/latest?cb=20191122065038"],
        "animations": ["https://media1.giphy.com/media/1l2KreXVnPRTEZaj1k/giphy.gif"],
        "type": "Buff",
        "desc": "When <img src='https://vignette.wikia.nocookie.net/maplestory/images/f/f8/Skill_Doubletime.png/revision/latest?cb=20140108010044' alt='Skill Doubletime'/> stacks, your next attack creates an additional attack",
        "details": [
            "When used, skill cooldowns are reset",
            "Additionally while active, <img src='https://vignette.wikia.nocookie.net/maplestory/images/f/f8/Skill_Doubletime.png/revision/latest?cb=20140108010044' alt='Skill Doubletime'/> and <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/55/Skill_Immune_Barrier.png/revision/latest?cb=20140107033613' alt='Skill Immune Barrier'/> last for their maximum duration"
        ]
    },
    weaponAura:{
        "name": "Weapon Aura",
        "shortDesc": "HP Cost: 10%, Ignores 15% Enemy DEF for 130 sec, Final Damage: +5%.\\nAura Wave (Usable Every 5 sec) - Using certain offensive skills will generate waves, inflicting 1000% damage on up to 10 enemies 6 times.\\nCooldown: 180 Sec.",
        "id": 400011000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/3a/Skill_Weapon_Aura.png/revision/latest?cb=20161204065742"],
        "animations": ["https://media4.giphy.com/media/flLOmhDE95Z0NDH1ug/giphy.gif"],
        "type": "Buff Attack",
        "desc": "Causes your attacks to periodically create a damaging wave"
    },
    impenetrableSkin:{
        "name": "Impenetrable Skin",
        "shortDesc": "HP Cost: 5% of Max HP, Duration: 35 sec, Knockdown Immunity and Status Resistance: +75\\nDamage increases +3% when hit, Max Stack: 10 times\\nCooldown: 240 sec\\n[Passive Effects - STR: +25, Max HP: +1250]",
        "id": 400011066,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/7/77/Skill_Impenetrable_Skin.png/revision/latest?cb=20171201185329"],
        "animations": ["https://media3.giphy.com/media/jjMaS7mAgN1OvvY9JT/giphy.gif"],
        "type": "Buff",
        "desc": "While active you gain increased Abnormal Status Resistance and 100% Knockback Resistance. As well, when you are hit you gain a stacking %Damage buff"
    },
    manaOverload:{
        "name": "Mana Overload",
        "shortDesc": "Consumes +2% Max MP to increase the Final Damage of all your skills (excluding summons) by 10%\\nConsumes 0.5% Max HP for jobs without MP\\nCan be toggled On/Off\\nCooldown: 35 sec",
        "id": 400021000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/6/67/Skill_Mana_Overload.png/revision/latest?cb=20161018183739"],
        "animations": ["https://media1.giphy.com/media/uH12ABjyZFLcfbvjFH/giphy.gif"],
        "type": "Buff",
        "desc": "When toggled, increases the %Final Damage of all your skills (excluding summons)",
        "details": [
            "Consumes %Max MP every second when toggled<ul><li>Consumes %Max HP for classes without MP</li></ul>"
        ]
    },
    etherealForm:{
        "name": "Ethereal Form",
        "shortDesc": "HP Cost: 1000, Duration: 3 sec, Gain Knockdown Immunity and lose 7750 MP instead of taking damage, when MP is 0 you lose 1750 HP\\nCooldown: 60 sec",
        "id": 400021060,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/0e/Skill_Ethereal_Form.png/revision/latest?cb=20171203075802"],
        "animations": ["https://media1.giphy.com/media/PoQHT9CkudFCPj6RBi/giphy.gif"],
        "type": "Buff",
        "desc": "While active, you gain 100% Knockback Resistance and lose a fixed amount of MP instead of taking damage",
        "details": [
            "When MP is 0 you take a fixed amount of HP damage"
        ]
    },
    guidedArrow: {
        "name": "Guided Arrow",
        "shortDesc": "MP Cost: 350, Duration: 60 sec, Arrow Damage: 800% damage 90 times to 1 nearby enemy when in combat\\nCooldown: 60 sec",
        "id": 400031000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Guided_Arrow.png/revision/latest?cb=20161204065740"],
        "animations": ["https://media0.giphy.com/media/8fKfxe9zlHnmrXuXVJ/giphy.gif"],
        "type": "Summon",
        "desc": "Creates a spirit arrow that seeks and attacks nearby enemies",
        "details": [
            "Unaffected by Damage Reflect"
        ]
    },
    viciousShot: {
        "name": "Vicious Shot",
        "shortDesc": "MP Cost: 500, Duration: 30 sec, Allows Critical Rate to exceed 100% and Critical Damage to increase by 45% of Critical Rate.\\nThe attack's additional Critical Rate is not applied.\\nCooldown: 120 sec",
        "id": 400031023,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/9/90/Skill_Vicious_Shot.png/revision/latest?cb=20171203075957"],
        "animations": ["https://media0.giphy.com/media/gLaAUn0lGqbwsnsPyl/giphy.gif"],
        "type": "Buff",
        "desc": "While active, allows your %Crit Rate to exceed 100% and increases your %Crit Damage depending on how much %Crit Rate you have"
    },
    venomBurst: {
        "name": "Venom Burst",
        "shortDesc": "MP Cost: 300, Consumes all active Damage-over-Time stacks on up to 12 poisoned enemies in range and instantly inflicts 100% of their remaining damage plus an additional 1000% damage 6 times Additional damage is +15% per remaining second of consumed DoT stacks up to 5\\nAfterwards, spreads the original DoT damage to up to 10 nearby enemies\\nCooldown: 8 sec\\n[Passive Effects - Bonus DoT Chance: 50% to deal 310% damage every 1 sec for 8 sec]",
        "id": 400041000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Venom_Burst.png/revision/latest?cb=20161204065741"],
        "animations": ["https://media3.giphy.com/media/hk99simjA0L918EjM0/giphy.gif"],
        "type": "Attack",
        "desc": "Consumes all active Damage-over-Time stacks on nearby enemies to instantly deal the remaining damage plus some additional %Final Damage",
        "details": [
            "When activated, the original DoT will spread to nearby enemies",
            "<strong>[Passive]</strong>: Permanently adds a bonus chance to apply a DoT effect to enemies when attacking"
        ]
    },
    lastResort: {
        "name": "Last Resort",
        "shortDesc": "HP Cost: 10% of Max HP, reduces Avoidability (including Bonus Evasion) and increases Final Damage for 30 sec, Hit Damage increased if attacked within a certain percentage of your max HP. Enters 2nd Stage with remaining duration being reduced to 50% when skill is used again during 1st Stage, skill ends when used again during 2nd Stage.\\n1st Stage - Avoidability: -20%, Hit Damage: +10%, Final Damage: +12%\\n2nd Stage - Avoidability: -90%, Hit Damage: +40%, Final Damage: +35%\\nCooldown: 78 sec\\n[Passive Effect - ATT Power: +25]",
        "id": 400041032,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/3f/Skill_Last_Resort.png/revision/latest?cb=20171203090611"],
        "animations": ["https://media1.giphy.com/media/H9sLPP1J2vVhs6Cmcl/giphy.gif"],
        "type": "Buff",
        "desc": "Reduces your %Avoidability while increases %Final Damage and %Damage Taken from %Max HP attacks",
        "details": [
            "There are two possible stages of the buff, pressing the Skill Key again will go to the second stage which increases the effects of both the debuff and buff portions of the Skill",
            "<strong>[Passive]</strong>: Permanently grants flat Attack"
        ]
    },
    loadedDice: {
        "name": "Loaded Dice",
        "shortDesc": "MP Cost: 1000, select your desired die roll. If a job that has Double Down gets the same number on 2 dice, the chance for the last die to have the same number is decreased by 50%.\\nCooldown: 10 Sec.\\n[Passive Effect: Attack Power: +35]",
        "id": 400051000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/4/4a/Skill_Loaded_Dice.png/revision/latest?cb=20161204065741"],
        "animations": ["https://media0.giphy.com/media/3o34vbKGyVYywzT5tB/giphy.gif"],
        "type": "Buff",
        "desc": "After casting this skill, the next time you use <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/5f/Skill_Roll_of_the_Dice.png/revision/latest?cb=20110508000058' alt='Skill Roll of the Dice' width='32' height='32' /> Roll of the Dice, you'll throw an additional dice of your choosing",
        "details": [
            "Classes without <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/5f/Skill_Roll_of_the_Dice.png/revision/latest?cb=20110508000058' alt='Skill Roll of the Dice' width='32' height='32' /> will be given a special skill to choose their desired number",
            "<strong>[Passive]</strong>: Permanently grants flat Attack"
        ]
    },
    overdrive: {
        "name": "Overdrive",
        "shortDesc": "HP Cost: 1750, Duration: 30 sec, Attack Power: +70% of base weapon attack power, Attack Power during cooldown: -15% of base weapon attack power\\nCooldown: 65 sec",
        "id": 400051033,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/a/a7/Skill_Overdrive.png/revision/latest?cb=20171203090813"],
        "animations": ["https://media2.giphy.com/media/rgc0CfIUzypN6jyNrL/giphy.gif"],
        "type": "Buff",
        "desc": "Increases your %Attack but after the effect ends and the skill is on cooldown, you have reduced %Attack"
    }
};

export const linkSkills = {
    expWarrior: {
        "id": 80002758,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Skill_Invincible_Belief.png/revision/latest?cb=20191124005023"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Warrior to reach Master Level",
            "Useful for BOSSING because of increased SURVIVABILITY"
        ]
    },
    expMage: {
        "id": 80002762,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304"],
        "type": "Passive",
        "desc": "When attacking, your attacks have a chance to debuff against the enemy with the highest Max HP",
        "details": [
            "<strong>[Debuff]: </strong>Increases %Damage and %Ignore DEF against this enemy (stacking up to 3 times)",
            "Can be stacked up to 3 times, once for each unique Explorer Magician to reach Master Level",
            "Useful for BOSSING because of INCREASED DAMAGE and IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE"
        ]
    },
    expArcher: {
        "id":80002766,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Archer to reach Master Level",
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE<ul><li>Additionally great for adding monsters to Monster Collection!!</li></ul>"
        ]
    },
    expThief: {
        "id": 80002770,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Thief to reach Master Level",
            "Useful for INCREASING DAMAGE for CLASSES WITH DEBUFFS"
        ]
    },
    expPirate: {
        "id":80002774,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 3 times, once for each unique Explorer Pirate to reach Master Level",
            "The stats are affected by %Stat bonuses",
            "<strong>[Note]: </strong>Link Skill has a togglable effect where you can swap STR + %STR into DEX + %DEX and vice versa<ul><li>Double-click the Link Skill to turn this effect on/off</li><li>The effect only applies to the original Link Skill, not the transferred version</li></ul>",
            "Useful for INCREASING DAMAGE and TRAINING characters pre-200 because of increased SURVIVABILITY"
        ]
    },
    jett: {
        "id":80001151,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Skill_Core_Aura.png/revision/latest?cb=20120619031149"],
        "type": "Passive",
        "desc": "Grants a random amount of STR, DEX, INT, LUK, Attack, and Magic Attack",
        "details": [
            "The stats change every day, there are items dropped from monsters or from the Cash Shop that help you reroll the stats. There is also an item in the Cash Shop that lock the stats preventing it from changing",
            "NOT VERY USEFUL because requires CASH ITEMS to be good"
        ]
    },
    cygnusKnights: {
        "id": 80000055,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 5 times, once for each unique Cygnus Knight to reach Master Level",
            "Useful for INCREASING DAMAGE and REDUCING DURATION OF DEBUFFS<ul><li>Important in bosses like Chaos Pink Bean</li></ul>"
        ]
    },
    mihile: {
        "id": 80001140,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705"],
        "type": "Buff",
        "desc": "",
        "details": [
            "Useful for BOSSING with CLASSES WITHOUT 100% KNOCKBACK RESISTANCE"
        ]
    },
    mercedes: {
        "id":80001040,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/e2/Skill_Elven_Blessing.png/revision/latest?cb=20110723104642"],
        "type": "Active / Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP"
        ]
    },
    aran: {
        "id":80000370,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP"
        ]
    },
    phantom: {
        "id":80000002,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE"
        ]
    },
    luminous: {
        "id":80000005,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE"
        ]
    },
    evan: {
        "id":80000369,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED EXP<ul><li>Runes provide a 2x EXP buff when active</li></ul>"
        ]
    },
    shade: {
        "id":80000169,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING because of increased SURVIVABILITY"
        ]
    },
    resistance: {
        "id": 80000329,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Can be stacked up to 4 times, once for each unique Resistance character (Except Demons and Xenon) to reach Master Level",
            "Useful for BOSSING because of increased UTILITY"
        ]
    },
    demonAvenger: {
        "id": 80000050,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    demonSlayer: {
        "id": 80000001,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    xenon: {
        "id": 80000047,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    angelicBuster: {
        "id": 80001155,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421"],
        "type": "Buff",
        "desc": "",
        "details": [
            "Useful for BOSSING for classes with BURST ATTACKS"
        ]
    },
    cadena: {
        "id": 80000261,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Weaker opponents refer to enemies lower level than you",
            "Useful for TRAINING because of INCREASED DAMAGE"
        ]
    },
    kaiser: {
        "id": 80000006,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING characters pre-200 because of increased SURVIVABILITY"
        ]
    },
    kain: {
        "id": 60030241,
        "icons": ["https://i.imgur.com/8ZnGQnN.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    hayato: {
        "id": 80000003,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/5/51/Skill_Keen_Edge.png/revision/latest?cb=20180520131734"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    kanna: {
        "id": 80000004,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    ark: {
        "id": 80000514,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834"],
        "type": "Passive",
        "desc": "While you are in combat state, you gain a stacking %Damage buff",
        "details": [
            "Useful for INCREASING DAMAGE"
        ]
    },
    illium: {
        "id": 80000268,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538"],
        "type": "Passive",
        "desc": "As you move around, you gain a stacking %Damage buff",
        "details": [
            "Useful for INCREASING DAMAGE for classes that MOVE A LOT"
        ]
    },
    adele: {
        "id": 80002857,
        "icons": ["https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=600"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for BOSSING"
        ]
    },
    beastTamer: {
        "id": 80010006,
        "icons": ["https://i.imgur.com/2G1kWET.png"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE and for BOSSING"
        ]
    },
    hoyoung: {
        "id": 80000609,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for TRAINING because of INCREASED DAMAGE"
        ]
    },
    kinesis: {
        "id": 80000188,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748"],
        "type": "Passive",
        "desc": "",
        "details": [
            "Useful for INCREASED DAMAGE"
        ]
    },
    zero: {
        "id": 80000110,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609"],
        "type": "Passive",
        "desc": "",
        "details": [
            "This skill is leveled up by completing the Zero storyline",
            "Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE<ul><li>Also useful for TRAINING pre-200 because of increased SURVIVABILITY</li></ul>"
        ]
    }
}

export default HeaderImageUrl;