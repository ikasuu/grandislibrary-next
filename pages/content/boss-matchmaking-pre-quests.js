import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';

function BossMatchmaking() {
    return (
      <ContentPage>
        <Head>
            <title>Boss Pre-Quests | Grandis Library</title>
            <meta content={"An explanation on how to unlock access to each of the bosses in the Boss Matchmaking System"} name="description"/>
        </Head>
        <ContentTitle>Boss Pre-Quests</ContentTitle>
        <p><img className="repository-image" src="https://i.imgur.com/dZesF8F.png" alt="Boss Queue"/></p>
        <p>As you level up even more, you will gain access to more and more bosses. To easily get to some of these bosses (but you must complete their pre-quests first!) , you can use the Boss Matchmaking system! You can find it by pressing "F" or "P" by default to open the Friend List or Party List and switching to "BOSS". Whenever you are in a party with another person, you will instantly be queued and teleported to a boss when you accept the notification that pops up. Occasionally you may get an extra party member (but usually they'll leave on their own) but it is a quick way to get to bosses</p>
        <p><strong>Note</strong>: Bosses with multiple difficulties with only one "Can clear" tag listed below means that clears are shared between all difficulties. If you see multiple "Can clear"s for a boss that means the clears are independent for each difficulty</p>
        <h3 id="top">Quick Jumps</h3>
        <ul>
          <li><Link smooth href="#balrog" scroll>Balrog</Link></li>
          <li><Link smooth href="#zakum" scroll>Zakum</Link></li>
          <li><Link smooth href="#ursus" scroll>Ursus</Link></li>
          <li><Link smooth href="#magnus" scroll>Magnus</Link></li>
          <li><Link smooth href="#hilla" scroll>Hilla</Link></li>
          <li><Link smooth href="#omnicln" scroll>OMNI-CLN</Link></li>
          <li><Link smooth href="#papulatus" scroll>Papulatus</Link></li>
          <li><Link smooth href="#rootabyss" scroll>Root Abyss</Link></li>
          <li><Link smooth href="#vonleon" scroll>Von Leon</Link></li>
          <li><Link smooth href="#horntail" scroll>Horntail</Link></li>
          <li><Link smooth href="#arkarium" scroll>Arkarium</Link></li>
          <li><Link smooth href="#pinkbean" scroll>Pink Bean</Link></li>
          <li><Link smooth href="#cygnus" scroll>Cygnus</Link></li>
          <li><Link smooth href="#lotus" scroll>Lotus</Link></li>
          <li><Link smooth href="#damien" scroll>Damien</Link></li>
          <li><Link smooth href="#guardian-angel-slime" scroll>Guardian Angel Slime</Link></li>
          <li><Link smooth href="#lucid" scroll>Lucid</Link></li>
          <li><Link smooth href="#gollux" scroll>Gollux</Link></li>
          <li><Link smooth href="#gloom" scroll>Gloom</Link></li>
          <li><Link smooth href="#verushilla" scroll>Verus Hilla</Link></li>
          <li><Link smooth href="#darknell" scroll>Darknell</Link></li>
          <li><Link smooth href="#blackmage" scroll>Black Mage</Link></li>
          <li><Link smooth href="#seren" scroll>Seren</Link></li>
          <li><Link smooth href="#ranmaru" scroll>Ranmaru</Link></li>
          <li><Link smooth href="#princessno" scroll>Princess No</Link></li>
          <li><Link smooth href="#will" scroll>Will</Link></li>
          <li><Link smooth href="#julieta" scroll>Julieta</Link></li>
          <li><Link smooth href="#akechi" scroll>Akechi Mitsuhide</Link></li>
          <li><Link smooth href="#yakuza" scroll>Yakuza Boss</Link></li>
          <li><Link smooth href="#gigatoad" scroll>Gigatoad</Link></li>
        </ul>
        <div className="repository-md-container">
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="balrog"><img src="/images/map-icons/balrog.png" alt="MapIcon Balog" width="38" height="38"/> Balrog</h2>
          <p><strong>[Easy Lv. 65+]</strong></p>
          <p>No pre-quests</p>
          <ul>
              <li>
                  <strong>Main Rewards:</strong> <img src="/images/equipment/bain-wings.png" alt="Eqp Bain Wings" width="37" height="37"/>[Lv. 58 Bain/Balrog Weapon], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard]
              </li>
              <li><strong>Can clear</strong>: 7 times daily</li>
              <li><strong>Location:</strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/105100100">Balrog Temple: Bottom of the Temple</a> in Sleepywood</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="zakum"><img src="/images/map-icons/zakum.png" alt="MapIcon Zakum" width="38" height="38"/> Zakum</h2>
          <p><strong>[Easy Lv. 50+] [Normal/Chaos Lv. 100+]</strong></p>
          <p>No pre-quests but, initially there is a quest in the Lightbulb icon called "[Zakum] Statue of Dread" at Lv. 50 that will teleport you to <a href="https://maplestory.wiki/GMS/210.1.1/map/211000001" target="_blank" rel="noreferrer noopener">El Nath - Chief's Residence</a> where you talk to an NPC corresponding to your job (Mage, Archer, Thief, etc.) to teleport to <a href="https://maplestory.wiki/GMS/210.1.1/map/211042300" target="_blank" rel="noreferrer noopener">Dead Mines - The Door to Zakum</a></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet" width="36" height="34"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Occult_Cube#Tradeable" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/>
                <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/>
                <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
            </li>
            <li>
                <strong>Normal/Chaos Mode Only Rewards:</strong>
                <img src="/images/equipment/chaos-zakum-helmet.png" alt="Eqp Chaos Zakum Helmet" width="40" height="38"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1003112" target="_blank" rel="noreferrer noopener">[(Chaos Only) Chaos Zakum Helmet]</a>, <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword" width="34" height="34"/>
                <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>, <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal" width="23" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Condensed_Power_Crystal">[</a><a href="https://maplestory.wiki/GMS/210.1.1/item/1012478" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>, <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory" width="23" height="29"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1022231" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>, <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110" width="27" height="33"/>
                <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>, <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>
            </li>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/211042300" target="_blank" rel="noreferrer noopener">El Nath: The Door to Zakum</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="ursus"><img src="/images/map-icons/ursus.png" alt="Soul Collector Artwork Ursus (1)" width="42" height="45"/> Ursus</h2>
          <p><strong>[Normal Lv. 100+]</strong></p>
          <p>You must complete a quest in the Lightbulb icon called “[Ursus] Rumors of The Mighty” at Lv. 100 that is required to enter Ursus. The quest is short and explains what Ursus is</p>
          <ul>
            <li><strong>Can clear</strong>: 3 times daily</li>
            <li><strong>Location</strong>: Dimensional Mirror after completing pre-quests</li>
            <li><strong>Main Rewards:</strong> <img src="/images/items/meso.png" alt="Meso"/> [Mesos]</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="magnus"><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus" width="38" height="38"/> Magnus</h2>
          <p><strong>[Easy Lv. 115+]</strong></p>
          <p>In Heliseum there will be a quest from Piston called "<a href="https://maplestory.fandom.com/wiki/Quests/21/(Easy_Magnus)_Magnus_Simulator" target="_blank" rel="noreferrer noopener">[Easy Magnus] Magnus Simulator</a>" that is required to enter Easy Magnus. The quest is short and consists of some dialogue</p>
          <ul>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/401000001" target="_blank" rel="noreferrer noopener">Heliseum - Commander Barracks</a></li>
          </ul>
          <p><strong>[Normal Lv. 155+][Hard Lv.175+]</strong></p>
          <p>You must complete a questline from the Lightbulb icon called "<a href="https://maplestory.fandom.com/wiki/Quests/21/To_Pantheon" target="_blank" rel="noreferrer noopener">To Pantheon</a>" at Lv. 90 until you gain access to the Tyrant's Castle</p>
          <p><strong>[NOTE]: Angelic Buster, Kaiser and Cadena must complete their entire storyline to unlock access to Magnus (excluding Easy mode)</strong></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong>
                <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt" width="33" height="27"/>
                <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="/images/equipment/blue-dragon-boots.png" alt="Eqp Blue Dragon Boots" width="28" height="32"/> [Level 110 Gear], <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge" width="33" height="31"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1182087" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>, <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder" width="30" height="33"/>
                <a href="https://maplestory.fandom.com/wiki/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>, <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir %HP/MP Potions], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110" width="27" height="33"/> [Lv. 110 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin" width="31" height="31"/> [Shadowdealer Coin], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak" width="33" height="30"/>
                <a href="https://maplestory.fandom.com/wiki/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Nova Superior Cape]</a>, <img src="/images/equipment/kaiserion.png" alt="Eqp Kaiserion" width="39" height="36"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1402205" target="_blank" rel="noreferrer noopener">[Kaiserion]</a>, <img src="/images/equipment/muspell-warrior-hat.png" alt="Eqp Muspell Warrior Hat" width="33" height="29"/> [Lv. 130 Gear], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir]
            </li>
            <li>
                <strong>Hard Mode only Rewards:</strong>
                <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak" width="32" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Tyrant Cape]</a>, <img src="/images/equipment/cursed-kaiserium.png" alt="Eqp Cursed Kaiserium" width="39" height="36"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1402179" target="_blank" rel="noreferrer noopener">[Cursed Kaiserium]</a>, <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm" width="35" height="20"/> [Lv. 140 Gear], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin" width="30" height="30"/> [Magnus Coin]
            </li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/401060000" target="_blank" rel="noreferrer noopener">Tyrant's Castle : Heliseum Heights Entry</a> in Heliseum/Pantheon</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="hilla"><img src="/images/map-icons/hilla.png" alt="MapIcon Hilla" width="38" height="38"/> Hilla</h2>
          <p><strong>[Normal Lv. 120+] [Hard Lv. 170+]</strong></p>
          <p>No pre-quests</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life" width="30" height="28"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1162009" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>, <img src="/images/equipment/blue-dragon-helmet.png" alt="Eqp Blue Dragon Helmet" width="33" height="32"/> [Lv. 110 Gear], <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat" width="34" height="31"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>, <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart" width="31" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coin]
            </li>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: Dimensional Mirror</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="omnicln"><img src="/images/map-icons/omega-sector.png" alt="MapIcon OmegaSector" width="38" height="38"/> OMNI-CLN</h2>
          <p><strong>[Normal Lv. 180+]</strong></p>
          <p>You must complete the Omega Sector Theme Dungeon to gain access to OMNI-CLN. To start the Theme Dungeon, accept the quest from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/38/(Omega_Sector)_Dr._Kim%27s_Call" target="_blank" rel="noreferrer noopener">[Omega Sector] Dr. Kim’s Call</a>” at Lv. 165</p>
          <ul>
            <li>
                <strong>Main Rewards: </strong>[Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110" width="27" height="33"/> [Lv. 110 Rebirth Flame], <img src="/images/items/omni-cln-component.png" alt="Etc OMNI-CLN Component"/> <a href="https://maplestory.fandom.com/wiki/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/221030900" target="_blank" rel="noreferrer noopener">Omega Sector - Pilothouse</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="papulatus"><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock" width="38" height="38"/> Papulatus</h2>
          <p><strong>[Easy Lv. 115+] [Normal Lv. 155+] [Hard Lv. 190+]</strong></p>
          <p>You must complete the questline from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/36/(Papulatus)_The_Light_Of_Chaos" target="_blank" rel="noreferrer noopener">[Papulatus] The Light of Chaos</a>” at Lv. 115</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong>
                <img src="/images/equipment/timeless-fennel.png" alt="Eqp Timeless Fennel" width="33" height="29"/> [Lv. 120 Gear], <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110" width="27" height="33"/> [Lv. 110 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm" width="35" height="20"/> [Lv. 140 Gear], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir]
            </li>
            <li>
                <strong>Hard Mode only Rewards:</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark" width="23" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
            </li>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/220080000" target="_blank" rel="noreferrer noopener">Ludibrium - Deep Inside the Clocktower</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="rootabyss"><img src="/images/map-icons/pierre.png" alt="MapIcon Piere" width="38" height="38"/><img src="/images/map-icons/von-bon.png" alt="MapIcon BanBan" width="38" height="38"/><img src="/images/map-icons/crimson-queen.png" alt="MapIcon BloodyQueen" width="38" height="38"/><img src="/images/map-icons/vellum.png" alt="MapIcon Bellum" width="38" height="38"/> Root Abyss</h2>
          <p><strong>[Normal Lv. 125+]</strong></p>
          <p>You must complete the questline from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/62/(Root_Abyss)_An_Urgent_Summons">[Root Abyss] An Urgent Summon</a>” at Lv. 125. Once you've completed the questline, you get 5 free keys daily to access the bosses</p>
          <ul>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/105200000">Root Abyss: Colossal Root</a> in Sleepywood, accessible from Dimensonal Mirror</li>
          </ul>
          <p><strong>[Chaos Lv. 180+]</strong></p>
          <p>Unlocked by completing Normal Root Abyss 10 times for the corresponding boss</p>
          <ul>
            <li><strong>Normal mode and Above Rewards:</strong></li>
            <li>
                <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara" width="34" height="35"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat" width="37" height="33"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet" width="29" height="29"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm" width="30" height="30"/> [Root Abyss Hat], <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coin], <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune" width="33" height="35"/> [Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt=""/><img src="/images/items/happy-pierre-chair.png" alt=""/><img src="/images/items/von-bons-von-chair.png" alt=""/>
                <img src="/images/items/vellum-rock-chair.png" alt=""/>[Chair]
            </li>
            <li>
                <strong>Chaos Mode only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara" width="34" height="35"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat" width="37" height="33"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet" width="29" height="29"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm" width="30" height="30"/> [Chaos Hat], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="https://maplestory.io/api/GMS/210.1.1/item/2434586/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2434585/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2434584/icon" alt=""/>
                <img src="https://maplestory.io/api/GMS/210.1.1/item/2434587/icon" alt=""/> [Chaos Root Abyss Gear Fragment]
                <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune" width="35" height="35"/> [Chaos Yggdrasil Coin]
              </li>
              <li><strong>Can clear Chaos</strong>: Weekly</li>
              <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/105200000">Root Abyss: Colossal Root</a> in Sleepywood, accessible from Dimensonal Mirror</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="vonleon"><img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon" width="38" height="38"/> Von Leon</h2>
          <p><strong>[Easy/Normal/Hard Lv. 125+]</strong></p>
          <p>You must complete the Lion King's Castle Theme Dungeon from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/221/Desolate_Castle">Desolate Castle</a>” at Lv. 115. The quest “<a href="https://maplestory.fandom.com/wiki/Quests/221/The_Adventure_of_Jenn_the_Locksmith">The Adventure of Jenn the Locksmith</a>” is also required to unlock Von Leon - it is accessible from the Lightbulb icon</p>
          <ul>
            <li>
                <strong>Easy/Normal/Hard Mode Rewards:</strong>
                <img src="/images/equipment/timeless-fennel.png" alt="Eqp Timeless Fennel" width="33" height="29"/> [Lv. 120 Gear], <img src="/images/equipment/muspell-warrior-hat.png" alt="Eqp Muspell Warrior Hat" width="33" height="29"/> [<em>(Normal/Hard only)</em> Lv.
                130 Gear], <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal" width="29" height="29"/> [Von Leon Gear Currency]
                <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li>
                <strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/211070000">Lion King's Castle: Audience Room Corridor</a> in El Nath using <img src="https://maplestory.io/api/GMS/210.1.1/item/2030021/icon" alt=""/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/2030021" target="_blank" rel="noreferrer noopener">[The Knight's Magic Scroll]</a>
            </li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="horntail"><img src="/images/map-icons/horntail.png" alt="MapIcon Hontale" width="38" height="38"/> Horntail</h2>
          <p><strong>[Easy/Normal Lv. 130+] [Chaos Lv. 135+]</strong></p>
          <p>No pre-quests to teleport to Horntail using the Boss Matchmaking System but requires you to complete some quests from <a href="https://maplestory.fandom.com/wiki/Moira" target="_blank" rel="noreferrer noopener">Moira</a> located just <a href="https://maplestory.wiki/GMS/210.1.1/map/240040700" target="_blank" rel="noreferrer noopener">outside of Horntail</a>. The quests are short and just dialogue</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1113149" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring" width="32" height="32"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1032241" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>, <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace" width="30" height="32"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1122000" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>, <img src="/images/equipment/muspell-warrior-hat.png" alt="Eqp Muspell Warrior Hat" width="33" height="29"/> [Lv. 130 Gear], <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120" width="27" height="33"/> [Lv. 120 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li>
                <strong>Normal/Chaos Mode Only Rewards:</strong>
                <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm" width="35" height="20"/> [Lv. 140 Gear], <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Chaos Horntail Necklace" width="34" height="33"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1122076" target="_blank" rel="noreferrer noopener">[(Chaos Only) Chaos Horntail Necklace]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [<em>(Chaos Only)</em> Power Elixir]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/240040700" target="_blank" rel="noreferrer noopener">Leafre: Cave of Life - Entrance</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="arkarium"><img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum" width="38" height="38"/> Arkarium</h2>
          <p><strong>[Easy/Normal Lv. 140+]</strong></p>
          <p>You must complete the Silent Crusade questline from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/1/(Silent_Crusade)_A_Cry_for_Help">[Silent Crusade] A Cry for Help</a>” at Lv. 90 to unlock access to Arkarium</p>
          <ul>
            <li>
                <strong>Easy mode and Above Rewards: </strong>[Lv. 130 Gear], <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant" width="30" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>, <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence" width="30" height="31"/>
                <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube],<img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coin]
            </li>
            <li>
                <strong>Normal mode only Rewards: </strong>[Lv. 140 Gear], <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant" width="32" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/272020110">Dimensional Schism: Front of Arkarium's Alter</a> in the Temple of Time</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="pinkbean"><img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon PinkBean" width="38" height="38"/> Pink Bean</h2>
          <p><strong>[Normal Lv. 160+] [Chaos Lv. 170+]</strong></p>
          <p><img src="https://maplestory.io/api/GMS/210.1.1/npc/2140000/icon" alt=""/></p>
          <p>You must complete the main Temple of Time questline to unlock access to Pink Bean. You can start the questline by accepting the quest “<a href="https://maplestory.wiki/GMS/210.1.1/quest/3500" target="_blank" rel="noreferrer noopener">Path to the Past</a>" from the Temple Keeper</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/timeless-dead-end.png" alt="Eqp Timeless Dead End" width="39" height="39"/>[Reverse Gear], <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm" width="35" height="20"/> [Lv. 140 Gear], <img src=" /images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark" width="23" height="29"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>, <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt" width="32" height="28"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>, <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup" width="30" height="30"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120" width="27" height="33"/> [Rebirth Flames], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/270050000">Deep Place of Temple: Forgotten Twilight</a> in the Temple of Time</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="cygnus"><img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Signus" width="38" height="38"/> Cygnus</h2>
          <p><strong>[Easy Lv. 140+]</strong></p>
          <p>No pre-quests</p>
          <p><strong>[Normal Lv. 170+]</strong></p>
          <p><img src="https://maplestory.io/api/GMS/210.1.1/npc/2142001/icon" alt=""/></p>
          <p>You must complete the Knight Stronghold questline starting at “<a href="https://maplestory.fandom.com/wiki/Quests/47/(Knight_Stronghold)_Scouting_the_Stronghold">[Knight Stronghold] Scouting the Stronghold</a>” at Lv. 165 from Chief Alex at <a href="https://maplestory.wiki/GMS/210.1.1/map/271010000" target="_blank" rel="noreferrer noopener">Future Henesys</a></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards: </strong>[Lv. 140 Gear], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin" width="30" height="30"/>
                <img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness" width="30" height="30"/> [Empress Gear Fragment], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode only Rewards:</strong>
                <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder" width="38" height="33"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>, <img src=" /images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield" width="33" height="35"/>
                <img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield" width="28" height="32"/>
                <img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield" width="31" height="35"/> [Shield Recipes]
            </li>
            <li><strong>Can clear Normal</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/271040200" target="_blank" rel="noreferrer noopener">Knight Stronghold: Cygnus Rear Garden</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="lotus"><img src="/images/map-icons/haven.png" alt="MapIcon Haven" width="38" height="38"/> Lotus</h2>
          <p><strong>[Normal/Hard Lv. 190+]</strong></p>
          <p>You must complete all Acts of Black Heaven Blockbuster from the Lightbulb icon called “<a href="https://maplestory.wiki/GMS/210.1.1/quest/33127" target="_blank" rel="noreferrer noopener">[Black Heaven] For Maple World</a>" at Lv. 120. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest Completing the Blockbuster will unlock access for all of your other characters in the same world</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong><img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power
                Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)" width="34" height="35"/>
                [Extraordinary Energy Core (Grade S)], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong>
                <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes" width="28" height="32"/>
                <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves" width="32" height="30"/>
                <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape" width="34" height="33"/>
                <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber" width="33" height="33"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Absolute_Labs_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Shoe/Glove/Cape/Weapon) AbsoLab Gear]</a>, <img src="/images/items/damaged-black-heart.png" alt="Etc Damaged Black Heart" width="26" height="29"/>
                <a href="https://maplestory.fandom.com/wiki/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>, <img src="/images/equipment/android.png" alt="Eqp Deluxe Android (M)" width="31" height="31"/>
                <a href="https://maplestory.fandom.com/wiki/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>, <img src="/images/equipment/berserked.png" alt="Eqp Berserked" width="23" height="29"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1012632">[Beserked Face Accessory]</a>, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube" width="27" height="27"/>
                <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradeable" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/350060300" target="_blank" rel="noreferrer noopener">Black Heaven Inside: Core Entrance</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="damien"><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree" width="38" height="38"/> Damien</h2>
          <p><strong>[Normal/Hard Lv. 190+]</strong></p>
          <p>You must complete Act 4 of Heroes of Maple Blockbuster from the Lightbulb icon called <a href="https://maplestory.wiki/GMS/210.1.1/quest/33916" target="_blank" rel="noreferrer noopener">“[Heroes] Feelings of Misfortune”</a> at Lv. 135. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest Completing Act 4 will unlock access for all of your other characters in the same world</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong><img src="/images/equipment/ruin-force-shield.png" alt="Eqp Ruin Force Shield" width="38" height="38"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1099015" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone" width="35" height="33"/> [Twisted Stigma
                Spirit Stone], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>, <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch" width="31" height="20"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1022278" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>, <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm" width="34" height="28"/>
                <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Knight Suit" width="26" height="32"/>
                <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder" width="34" height="33"/>
                <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber" width="33" height="33"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Absolute_Labs_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Hat/Overall/Shoulder/Weapon) AbsoLab Gear]</a>, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube" width="27" height="27"/>
                <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/350060300" target="_blank" rel="noreferrer noopener">Black Heaven Inside: Core Entrance</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="guardian-angel-slime"><img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> Guardian Angel Slime</h2>
          <p><strong>[Normal/Chaos Lv. 210+]</strong></p>
          <p>You must complete the quest <a href="https://maplestory.fandom.com/wiki/Quests/243/(Ramuramu)_Who%27s_REALLY_the_Cutest_of_Them_All%3F" target="_blank" rel="noreferrer noopener">"[Ramuramu] Who's REALLY the Cutest of Them All?"</a> that consists of only a series of dialogue</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong>
                <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coins]</a>, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>
            </li>
            <li>
                <strong>Chaos Mode Only Rewards: </strong><img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime_Altar" target="_blank" rel="noreferrer noopener">Ramuramu Valley: Guardian Angel Slime Altar</a></li>
          </ul> 
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="lucid"><img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln" width="38" height="38"/> Lucid</h2>
          <p><strong>[Easy/Normal/Hard Lv. 220+ &amp; 360AF+]</strong></p>
          <p>You must complete the Lachelein storyline and defeat Story Mode Lucid in order to unlock access to Lucid</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power
                Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth
                Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube" width="27" height="27"/> [Bonus Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li><strong>Normal Mode and Above Rewards:</strong> <a href="https://maplestory.fandom.com/wiki/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a></li>
            <li>
                <strong>Hard Mode Only Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>, <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt" width="36" height="35"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1132308" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>, <img src="/images/equipment/arcane-umbra-knight-shoes.png" alt="Eqp Arcane Umbra Knight Shoes" width="26" height="30"/>
                <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="Eqp Arcane Umbra Knight Gloves" width="30" height="25"/>
                <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber" width="32" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Shoe/Glove/Weapon) Arcane Umbra Gear]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450004000" target="_blank" rel="noreferrer noopener">Lachelein: Nightmare Clocktower</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="gollux"><img src="/images/map-icons/gollux.png" alt="MapIcon GiantVellud" width="36" height="37"/> Gollux</h2>
          <p><strong>[Easy/Normal/Hard/Hell Lv. 180]</strong></p>
          <p>You can enter the Gollux area without any pre-quests. Enter through the Dimensional Mirror. To gain access to Gollux, you must complete the quest “[Gollux] The Cracks of Corruption”. The quest consists of only dialogue</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny" width="30" height="29"/>
                <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin" width="31" height="32"/> [Gollux Penny/Coins], <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings" width="37" height="34"/>
                <img src="/images/equipment/superior-gollux-ring.png" alt="Eqp Superior Gollux Ring" width="33" height="35"/>
                <img src="/images/equipment/superior-engraved-gollux-pendant.png" alt="Eqp Superior Engraved Gollux Pendant" width="37" height="36"/>
                <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt" width="40" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Gollux Accessories]</a>
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: Dimensional Mirror</li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="gloom"><img src="/images/map-icons/moonbridge.png" alt="MapIcon moonBridge" width="38" height="38"/> Gloom</h2>
          <p><strong>[Normal/Chaos Lv. 245+ &amp; 730AF+]</strong></p>
          <p>You must complete the Moonbridge storyline and defeat Story Mode Gloom in order to unlock access to Gloom</p>
          <ul>
            <li>
                <strong>Normal/Hard Mode Rewards: </strong><img src="/images/equipment/endless-terror.png" alt=""/>
                <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/218/item/1113306" target="_blank">[(Chaos Only) Endless Terror Ring]</a>
                <img width="32" height="31"  src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img width="27" height="33"  src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img width="29" height="29"  src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img width="27" height="27"  src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [Bonus Occult Cube], <img width="25" height="36"  src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/>
                <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Spark_of_Determination" target="_blank">[Spark of Determination]</a>, <img width="32" height="38" src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img width="27" height="25"  src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/map/450009301" target="_blank">Moonbridge: Facing the Eye of the Void</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="verushilla"><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon TheLabyrinthOfSuffering" width="38" height="38"/> Verus Hilla</h2>
          <p><strong>[Hard Lv. 250+ &amp; 900AF+]</strong></p>
          <p>You must complete the Labyrinth of Suffering storyline and defeat Story Mode Verus Hilla in order to unlock access to Verus Hilla</p>
          <ul>
            <li>
                <strong>Hard Mode Rewards:</strong>
                <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering" width="36" height="36"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1122430" target="_blank" rel="noreferrer noopener">[Source of Suffering]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/shadow-of-annihilation.png" alt="Etc Shadow of Annihilation" width="27" height="27"/>
                <a href="https://maplestory.fandom.com/wiki/Shadow_of_Annihilation" target="_blank" rel="noreferrer noopener">[Shadow of Annihilation]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450011320" target="_blank" rel="noreferrer noopener">Labyrinth of Suffering: Deep Core Base</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="darknell"><img src="/images/map-icons/limina.png" alt="MapIcon Limen" width="38" height="38"/> Darknell</h2>
          <p><strong>[Normal/Hard Lv. 255+ &amp; 850AF+]</strong></p>
          <p>You must complete the Limina storyline and defeat Story Mode Darknell to unlock access to Darknell</p>
          <ul>
            <li>
                <strong>Normal/Hard Mode Rewards:</strong> <img src="/images/equipment/commanding-force-earring.png" alt=""/>
                <a href="https://maplestory.wiki/GMS/218/item/1032316" target="_blank" rel="noreferrer noopener">[(Hard Only) Commanding Force Earrings]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube" width="27" height="27"/> [Bonus Occult Cube], <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination" width="25" height="36"/> [Spark of Determination], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450012200" target="_blank" rel="noreferrer noopener">Limina: Final Horizon Fore</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="blackmage"><img src="/images/map-icons/limina.png" alt="MapIcon Limen" width="38" height="38"/> Black Mage</h2>
          <p><strong>[Hard Lv. 255+ 1320AF+]</strong></p>
          <p>You must complete the Limina storyline and defeat Story Mode Black Mage to unlock access to Black Mage</p>
          <ul>
            <li>
                <strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/219/item/2439614/icon" alt="Item Sealed Genesis Weapon Box"/>
                <a href="https://maplestory.fandom.com/wiki/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>, <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge" width="35" height="29"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1182285" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li><strong>Can clear</strong>: Monthly</li>
            <li><strong>Location</strong>: <a href="http://Limina: Giant's Heart" target="_blank" rel="noreferrer noopener">Limina: Giant's Heart</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="seren"><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> Seren</h2>
          <p><strong>[Hard Lv. 265+ 150SacF+]</strong></p>
          <p>You must complete the Burning Cernium storyline and to unlock access to Seren</p>
          <ul>
            <li><strong>Main Rewards: </strong><strong><img className="transparent" src="/images/equipment/mitras-rage-warrior.png" alt="/images/equipment/mitras-rage-warrior.png"/></strong> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Rage:_Warrior" target="_blank" rel="noopener">[Emblem]</a>, <img src="/images/items/mitras-nodestone.png" data-v-e6b15fb6="true"/> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width={32} height={31}/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width={27} height={33}/> [Lv. 150 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width={29} height={29}/> [Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width={32} height={38}/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width={27} height={25}/> [Crusader Coins]</li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.fandom.com/wiki/Palace_Main_Hall" target="_blank" rel="noreferrer noopener">Cernium: Palace Main Hall</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="ranmaru"><img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru" width="38" height="38"/> Ranmaru</h2>
          <p><strong>[Normal/Madman Lv. 120+/Lv.180+]</strong></p>
          <p>No pre-quests</p>
          <ul>
              <li>
                  <strong>Normal Mode and Above Rewards:</strong>
                  <img src="/images/equipment/timeless-fennel.png" alt="Eqp Timeless Fennel" width="33" height="29"/> [Lv. 120 Gear], <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm" width="38" height="40"/>
                  <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/>
                  <img src="/images/items/elixir.png" alt="Use Elixir" width="32" height="31"/> [Elixir], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame" width="28" height="33"/>
                  <img src="/images/items/eternal-rebirth-flame.png" alt="Use Eternal Rebirth Flame" width="28" height="34"/>
                  <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Special Rebirth Flames]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                  Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
              </li>
              <li>
                  <strong>Madman Mode only Rewards:</strong>
                  <img src="/images/items/mastery-book-30.png" alt="Use Mastery Book 30" width="32" height="29"/>[Mastery Book], <img src="/images/items/meisters-cube.png" alt="Use Meister's Cube" width="32" height="32"/> [Meister's Cube]
              </li>
              <li><strong>Can clear</strong>: Daily</li>
              <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/807300100" target="_blank" rel="noreferrer noopener">El Nath: Secret Altar Path</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="princessno"><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon JP Nohime" width="38" height="38"/> Princess No</h2>
          <p><strong>[Normal Lv. 140+]</strong></p>
          <p>You must complete the Hieizan Temple storyline to gain access to Princess No. To start, accept the quest from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/56/(Hieizan_Temple)_Regards,_Takeda_Shingen">[Hieizan Temple] Regards, Takeda Shingen</a>” at Lv. 140</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong>
                <img src=" /images/items/captivating-fragment.png" alt="Use Captivating Fragment" width="30" height="30"/> [Secondary Weapon Fragment], <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure" width="31" height="31"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure" width="31" height="32"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure" width="33" height="28"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noopener noreferrer">Belt</a> ], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir" width="32" height="31"/> [Power Elixir], <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140" width="27" height="33"/> [Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube" width="32" height="32"/> [Master Craftsman's
                Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal]
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/811000999" target="_blank" rel="noreferrer noopener">Hieizan: Hieizan Temple Plaza</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="will"><img src="/images/map-icons/esfera.png" alt="MapIcon esfera" width="38" height="38"/> Will</h2>
          <p><strong>[Normal/Hard Lv. 235+ &amp; 760AF+]</strong></p>
          <p>You must complete the Esfera storyline and defeat Story Mode Will in order to unlock access to Will</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong>[Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150" width="27" height="33"/> [Lv. 150 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard" width="29" height="25"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube" width="29" height="29"/> [Occult Cube], <img src="/images/items/stone-cobweb-droplet.png" alt="Etc Stone Cobweb Droplet" width="34" height="36"/> [Stone Cobweb Droplet], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal" width="32" height="38"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins" width="27" height="25"/> [Crusader Coins]
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong>
                <img src="/images/equipment/cursed-red-spellbook.png" alt="Eqp Cursed Red Spellbook" width="38" height="37"/>
                <img src="/images/equipment/cursed-blue-spellbook.png" alt="Eqp Cursed Blue Spellbook" width="38" height="37"/>
                <img src="/images/equipment/cursed-green-spellbook.png" alt="Eqp Cursed Green Spellbook" width="37" height="37"/>
                <img src="/images/equipment/cursed-yellow-spellbook.png" alt="Eqp Cursed Yellow Spellbook" width="38" height="36"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1162080" target="_blank" rel="noreferrer noopener">[Cursed Spellbook]</a>, <img src="/images/equipment/arcane-umbra-knight-hat.png" alt="Eqp Arcane Umbra Knight Hat" width="37" height="36"/>
                <img src="https://maplestory.wiki/GMS/220/item/1152196" alt="Eqp Arcane Umbra Knight Shoulder" width="32" height="27"/>
                <img src="/images/equipment/arcane-umbra-knight-suit.png" alt="Eqp Arcane Umbra Knight Suit" width="26" height="31"/>
                <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber" width="32" height="32"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Hat/Shoulder/Overall/Weapon) Arcane Umbra Gear]</a>, <img src="/images/items/mirror-world-nodestone.png" alt="Use Mirror World Nodestone" width="38" height="38"/>
                <a href="https://maplestory.fandom.com/wiki/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450007200" target="_blank" rel="noreferrer noopener">Esfera: Radiant Temple</a></li>
          </ul>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <h2 id="julieta"><img src="/images/map-icons/abrup.png" alt="MapIcon PL Abrup" width="38" height="38"/> Julieta</h2>
          <p><strong>[Normal Level 140+]</strong></p>
          <p>You must complete the Monad Blockbuster from the Lightbulb icon called "[MONAD: The First Omen] An Old Woman's Letter] at Lv. 110. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest</p>
          <ul>
            <li><strong>Can clear</strong>: 3 times daily</li>
            <li><strong>Location</strong>: Accessible from the Boss Matchmaking System directly</li>
          </ul>
          <h2 id="akechi"><img src="/images/map-icons/fort-asura.png" alt="Ritual Altar Icon"/> Akechi Mitsuhide</h2>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <hr/>
          <p><strong>[Normal Level 200+]</strong></p>
          <p>You must complete the Asura Crisis storyline starting with the quest from your Lightbulb icon called "[The Asura Crisis] Back to Momijigaoka" at Lv. 200</p>
          <ul>
            <li><strong>Main Rewards: </strong><img src="/images/items/occult-cube.png" alt="Use Occult Cube"/><a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/><a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/><a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a><img src="/images/equipment/nimbus-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><img src="/images/equipment/weeping-spirit-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>, <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> [Mark of the Silver Wolf]</li>
            <li><strong><strong>Can clear</strong>:</strong> Weekly</li>
            <li><strong><strong>Location</strong>: </strong><a href="https://maplestory.wiki/GMS/220/map/800000000" target="_blank" rel="noopener noreferrer">Mushroom Shrine</a></li>
          </ul>
          <h2 id="yakuza"><img src="/images/map-icons/showa-town.png" alt="Showa Town Map Icon"/> Yakuza Boss</h2>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <hr/>
          <p><strong>[Normal Level 160+]</strong></p> 
          <p>You must complete a series of quest starting from "[Showa Town] Welcome to Showa Town!" from the Lightbulb icon at Lv. 160. The last quest you need to complete is "Investigating Fire Raccoon Finance"</p>
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/><img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/items/showa-town-damage-skin.png" alt="Showa Town Damage Skin"/><img src="/images/items/fire-raccoon-damage-skin.png" alt="Fire Racoon Damage Skin"/> [Damage Skins]</li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/220/map/801040003" target="_blank" rel="noopener noreferrer">Showa Town: Parlor</a></li>
          </ul>
          <h2 id="gigatoad"><img src="/images/map-icons/mushroom-shrine.png" alt="Mushroom Shrine Icon"/> Gigatoad</h2>
          <div><Link smooth href="#top" scroll>Go to top</Link></div>
          <hr/>
          <p><strong>[Normal &amp; Frenzied Level 160+]</strong></p>
          <p>No pre-quests</p>
          <ul>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/><img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/equipment/elemental-staff-1.png" alt="Eqp Elemental Staff 1"/><img src="/images/equipment/elemental-staff-2.png" alt="Eqp Elemental Staff 2"/>[Elemental Staves], <img src="/images/items/toad-pet-coupon.png" alt="Toad Pet Coupon"/> [(30 Day) Toad Pet Coupon], <img src="/images/items/ninja-castle-damage-skin.png" alt="Ninja Castle Damage Skin"/> [Damage Skin]</li>
            <li><strong><strong>Frenzied Mode Only Rewards: </strong></strong><img src="/images/items/clean-slate-scroll.png" alt="Clean Slate Scroll"/>[Clean Slate Scroll], <img src="/images/items/potion-recipe.png" alt="Exp Accumulation Potion Recipe"/> [EXP Accumulation Potion Recipe], <img src="/images/items/potion-recipe.png" alt="Wealth Acquisition Potion Recipe"/> [Wealth Acquisition Potion Recipe], <img src="/images/items/soul-shard.png" alt="Soul Shard"/> [Soul Shard], <img src="/images/items/golden-toad-sculpture.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture]</li>
            <li><strong><strong>Can clear</strong>:</strong> 3 times daily</li>
            <li><strong><strong>Location</strong>: </strong>Accessible from Ninja Castle</li>
          </ul>
        </div>
      </ContentPage>
    )
}

export default BossMatchmaking
