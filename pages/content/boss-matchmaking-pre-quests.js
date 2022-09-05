import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import { AdInArticleBanner, AdOutArticle } from '../../components/Ads';

function BossMatchmaking() {
    return (
      <ContentPage>
        <Head>
            <title>Boss Pre-Quests | Grandis Library</title>
            <meta content={"An explanation on how to unlock access to each of the bosses in the Boss Matchmaking System"} name="description"/>
        </Head>
        <ContentTitle>Boss Pre-Quests</ContentTitle>
        <p><img className="repository-image" src="/images/info/boss-queue.png" alt="Boss Queue"/></p>
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
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="balrog"><img src="/images/map-icons/balrog.png" alt="MapIcon Balog"/> Balrog</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 65+]</strong></p>
          <p>No pre-quests</p>
          <ul>
              <li>
                  <strong>Main Rewards:</strong> <img src="/images/equipment/bain-wings.png" alt="Eqp Bain Wings"/>[Lv. 58 Bain Weapon], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/balrog-horn-throne.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Balrog-Horn Throne]</a>
              </li>
              <li><strong>Can clear</strong>: 7 times daily</li>
              <li><strong>Location:</strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/105100100">Balrog Temple: Bottom of the Temple</a> in Sleepywood</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="zakum"><img src="/images/map-icons/zakum.png" alt="MapIcon Zakum"/> Zakum</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 50+] [Normal/Chaos Lv. 100+]</strong></p>
          <p>No pre-quests but, initially there is a quest in the Lightbulb icon called "[Zakum] Statue of Dread" at Lv. 50 that will teleport you to <a href="https://maplestory.wiki/GMS/210.1.1/map/211000001" target="_blank" rel="noreferrer noopener">El Nath - Chief's Residence</a> where you talk to an NPC corresponding to your job (Mage, Archer, Thief, etc.) to teleport to <a href="https://maplestory.wiki/GMS/210.1.1/map/211042300" target="_blank" rel="noreferrer noopener">Dead Mines - The Door to Zakum</a></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/>
                <a href="https://maplestory.fandom.com/wiki/Occult_Cube#Tradeable" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/>
                <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/>
                <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/>
                <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>, <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/>
                <a href="https://maplestory.fandom.com/wiki/Condensed_Power_Crystal">[</a><a href="https://maplestory.wiki/GMS/210.1.1/item/1012478" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>, <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/1022231" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>, <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/>
                <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-zakum-helmet.png" alt="Eqp Chaos Zakum Helmet"/>
              <a href="https://maplestory.fandom.com/wiki/Chaos_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Chaos Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-helmet.png" alt="Eqp Enraged Zakum Helmet"/>
              <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Enraged Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-cape.png" alt="Eqp Enraged Zakum Cape"/>
              <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Cape" target="_blank" rel="noreferrer noopener">[Enraged Zakum Cape]</a>, <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/>
              <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">[Enraged Zakum Belt]</a>, <img src="/images/items/zakum-hand-table.png"/>
              <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Zakum Hand Table]</a>
            </li>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/211042300" target="_blank" rel="noreferrer noopener">El Nath: The Door to Zakum</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="ursus"><img src="/images/map-icons/ursus.png" alt="Soul Collector Artwork Ursus (1)"/> Ursus</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 100+]</strong></p>
          <p>You must complete a quest in the Lightbulb icon called “[Ursus] Rumors of The Mighty” at Lv. 100 that is required to enter Ursus. The quest is short and explains what Ursus is</p>
          <ul>
            <li><strong>Can clear</strong>: 3 times daily</li>
            <li><strong>Location</strong>: Dimensional Mirror after completing pre-quests</li>
            <li><strong>Main Rewards:</strong> <img src="/images/items/meso.png" alt="Meso"/> [Mesos]</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="magnus"><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> Magnus</ArticleHeaderTwo>
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
                <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>
                , <img src="/images/equipment/elite-heliseum-cape.png"/> <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Cape" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>
                , <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182087" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>
                , <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>
                , <img src="/images/equipment/kaiserion.png" alt="Eqp Kaiserion"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402205" target="_blank" rel="noreferrer noopener">[Kaiserion]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> [Shadowdealer Coin], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Nova Cape]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
            </li>
            <li>
                <strong>Hard Mode only Rewards:</strong>
                <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Tyrant Cape]</a>
                , <img src="/images/equipment/nova-hyades-boots.png"/> <a href="https://maplestory.fandom.com/wiki/Nova_Hyades_Boots" target="_blank" rel="noreferrer noopener">[Superior Nova Boots]</a>
                , <img src="/images/equipment/cursed-kaiserium.png" alt="Eqp Cursed Kaiserium"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402179" target="_blank" rel="noreferrer noopener">[Cursed Kaiserium]</a>
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> [Magnus Coin]
                , <img src="/images/items/magnus-horn-throne.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Magnus Horn Throne]</a>
            </li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/401060000" target="_blank" rel="noreferrer noopener">Tyrant's Castle : Heliseum Heights Entry</a> in Heliseum/Pantheon</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <AdInArticleBanner/>
          <ArticleHeaderTwo id="hilla"><img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> Hilla</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 120+] [Hard Lv. 170+]</strong></p>
          <p>No pre-quests</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162009" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>
                , <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Rebirth Flame]
                , <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> <a href="https://maplestory.fandom.com/wiki/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong>
              <img src="/images/equipment/will-o-the-wisps.png"/> <a href="https://maplestory.fandom.com/wiki/Will_o%27_the_Wisps" target="_blank" rel="noreferrer noopener">[Will O' the Wisps]</a>
              , <img src="/images/items/hilla-obelisk-floor-lamp.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Hilla Obelisk Floor Lamp]</a>
            </li>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: Dimensional Mirror</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="omnicln"><img src="/images/map-icons/omega-sector.png" alt="MapIcon OmegaSector"/> OMNI-CLN</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 180+]</strong></p>
          <p>You must complete the Omega Sector Theme Dungeon to gain access to OMNI-CLN. To start the Theme Dungeon, accept the quest from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/38/(Omega_Sector)_Dr._Kim%27s_Call" target="_blank" rel="noreferrer noopener">[Omega Sector] Dr. Kim’s Call</a>” at Lv. 165</p>
          <ul>
            <li>
                <strong>Main Rewards: </strong><img src="/images/items/elixir.png"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/omni-cln-component.png" alt="Etc OMNI-CLN Component"/> <a href="https://maplestory.fandom.com/wiki/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>, <img src="/images/items/omni-cln-vacuum.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[OMNI-CLN Vacuum]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/221030900" target="_blank" rel="noreferrer noopener">Omega Sector - Pilothouse</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="papulatus"><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> Papulatus</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 115+] [Normal Lv. 155+] [Chaos Lv. 190+]</strong></p>
          <p>You must complete the questline from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/36/(Papulatus)_The_Light_Of_Chaos" target="_blank" rel="noreferrer noopener">[Papulatus] The Light of Chaos</a>” at Lv. 115</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/papulatus-clock-chair.png"/> <a href="https://maplestory.fandom.com/wiki/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Papulatus Clock Chair]</a>
            </li>
            <li>
                <strong>Hard Mode only Rewards:</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestory.fandom.com/wiki/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
                , <img src="/images/items/papulatus-wall-clock.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Papulatus Wall Clock]</a>
            </li>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/220080000" target="_blank" rel="noreferrer noopener">Ludibrium - Deep Inside the Clocktower</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="rootabyss"><img src="/images/map-icons/pierre.png" alt="MapIcon Piere"/><img src="/images/map-icons/von-bon.png" alt="MapIcon BanBan"/><img src="/images/map-icons/crimson-queen.png" alt="MapIcon BloodyQueen"/><img src="/images/map-icons/vellum.png" alt="MapIcon Bellum"/> Root Abyss</ArticleHeaderTwo>
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
                <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Root Abyss Hat], <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> [Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/>
                <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair]
            </li>
            <li>
                <strong>Chaos Mode only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Chaos Hat], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/><img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/><img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/><img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> [Chaos Root Abyss Gear Fragment], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> [Chaos Yggdrasil Coin]
                , <img src="/images/items/pierre-umbrella-stand.png"/><img src="/images/items/von-bon-windup-clock.png"/><img src="/images/items/crimson-queen-vanity-table.png"/><img src="/images/items/vellum-lava-bathtub.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Furniture]</a>
              </li>
              <li><strong>Can clear Chaos</strong>: Weekly</li>
              <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/105200000">Root Abyss: Colossal Root</a> in Sleepywood, accessible from Dimensonal Mirror</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="vonleon"><img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> Von Leon</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard Lv. 125+]</strong></p>
          <p>You must complete the Lion King's Castle Theme Dungeon from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/221/Desolate_Castle">Desolate Castle</a>” at Lv. 115. The quest “<a href="https://maplestory.fandom.com/wiki/Quests/221/The_Adventure_of_Jenn_the_Locksmith">The Adventure of Jenn the Locksmith</a>” is also required to unlock Von Leon - it is accessible from the Lightbulb icon</p>
          <ul>
            <li>
                <strong>Easy/Normal Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> [Von Leon Gear Currency]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Hard Mode and Above Rewards:</strong> <img src="/images/equipment/royal-von-leon-suit.png"/><img src="/images/equipment/royal-von-leon-energy-chain.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>
              , <img src="/images/equipment/ifias-earrings.png"/><img src="/images/equipment/ifias-ring.png"/><img src="/images/equipment/ifias-necklace.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Ifia%27s_Treasure_Set" target="_blank" rel="noreferrer noopener">[Ifia Accessories]</a>
              , <img src="/images/items/lion-ice-sculpture.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Lion Ice Sculpture]</a>
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li>
                <strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/211070000">Lion King's Castle: Audience Room Corridor</a> in El Nath using <img src="/images/items/the-knights-magic-scroll.png" alt="Use The Knight's Magic Scroll"/>
                <a href="https://maplestory.wiki/GMS/210.1.1/item/2030021" target="_blank" rel="noreferrer noopener">[The Knight's Magic Scroll]</a>
            </li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <AdInArticleBanner/>
          <ArticleHeaderTwo id="horntail"><img src="/images/map-icons/horntail.png" alt="MapIcon Hontale"/> Horntail</ArticleHeaderTwo>
          <p><strong>[Easy/Normal Lv. 130+] [Chaos Lv. 135+]</strong></p>
          <p>No pre-quests to teleport to Horntail using the Boss Matchmaking System but requires you to complete some quests from <a href="https://maplestory.fandom.com/wiki/Moira" target="_blank" rel="noreferrer noopener">Moira</a> located just <a href="https://maplestory.wiki/GMS/210.1.1/map/240040700" target="_blank" rel="noreferrer noopener">outside of Horntail</a>. The quests are short and just dialogue</p>
          <ul>
            <li><strong>Easy Mode and Above Rewards: </strong> <img src="/images/equipment/silver-blossom-ring.png"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113149" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032241" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>
                , <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122000" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/potion-recipe.png"/> <a href="https://maplestory.fandom.com/wiki/Wealth_Acquisition_Potion#Recipe" target="_blank" rel="noreferrer noopener">[Wealth Aquisition Potion Recipe]</a>
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Chaos Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122076" target="_blank" rel="noreferrer noopener">[Chaos Horntail Necklace]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/horntail-fountain.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Horntail Fountain]</a>
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/240040700" target="_blank" rel="noreferrer noopener">Leafre: Cave of Life - Entrance</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="arkarium"><img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> Arkarium</ArticleHeaderTwo>
          <p><strong>[Easy/Normal Lv. 140+]</strong></p>
          <p>You must complete the Silent Crusade questline from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/1/(Silent_Crusade)_A_Cry_for_Help">[Silent Crusade] A Cry for Help</a>” at Lv. 90 to unlock access to Arkarium</p>
          <ul>
            <li>
                <strong>Easy mode and Above Rewards:</strong> <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant"/> <a href="https://maplestory.fandom.com/wiki/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> [Lv. 130 Rebirth Flame]
                , <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                ,<img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coin]
            </li>
            <li>
                <strong>Normal mode only Rewards:</strong> <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a href="https://maplestory.fandom.com/wiki/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>
                , <img src="/images/items/arkarium-statue.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Arkarium Statue]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/272020110">Dimensional Schism: Front of Arkarium's Alter</a> in the Temple of Time</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="pinkbean"><img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon PinkBean"/> Pink Bean</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 160+] [Chaos Lv. 170+]</strong></p>
          <p><img src="/images/npc/temple-keeper.png" alt="NPC Temple Keeper"/></p>
          <p>You must complete the main Temple of Time questline to unlock access to Pink Bean. You can start the questline by accepting the quest “<a href="https://maplestory.wiki/GMS/210.1.1/quest/3500" target="_blank" rel="noreferrer noopener">Path to the Past</a>" from the Temple Keeper</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>
                , <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>
                , <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-pink-bean-hat.png"/><img src="/images/equipment/chaos-pink-bean-suit.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Chaos_Pink_Bean_Set_I" target="_blank" rel="noreferrer noopener">[Chaos Pink Bean Set]</a>
              , <img src="/images/equipment/black-bean-hat.png"/><img src="/images/equipment/black-bean-suit.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Black_Bean_Set" target="_blank" rel="noreferrer noopener">[Black Bean Set]</a>
              , <img src="/images/items/powerful-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/pink-bean-armchair.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Pink Bean Armchair]</a>
            </li>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/270050000">Deep Place of Temple: Forgotten Twilight</a> in the Temple of Time</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="cygnus"><img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Signus"/> Cygnus</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 140+]</strong></p>
          <p>No pre-quests</p>
          <p><strong>[Normal Lv. 170+]</strong></p>
          <p><img src="/images/npc/chief-alex.png" alt="NPC Chief Alex"/></p>
          <p>You must complete the Knight Stronghold questline starting at “<a href="https://maplestory.fandom.com/wiki/Quests/47/(Knight_Stronghold)_Scouting_the_Stronghold">[Knight Stronghold] Scouting the Stronghold</a>” at Lv. 165 from Chief Alex at <a href="https://maplestory.wiki/GMS/210.1.1/map/271010000" target="_blank" rel="noreferrer noopener">Future Henesys</a></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> [Empress Gear Fragment]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode only Rewards:</strong> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>
                , <img src=" /images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield"/><img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield"/><img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield"/> [Shield Recipes]
                , <img src="/images/items/plush-cygnus-shelf.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Plush Cygnus Shelf]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/271040200" target="_blank" rel="noreferrer noopener">Knight Stronghold: Cygnus Rear Garden</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="lotus"><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> Lotus</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 190+]</strong></p>
          <p>You must complete all Acts of Black Heaven Blockbuster from the Lightbulb icon called “<a href="https://maplestory.wiki/GMS/210.1.1/quest/33127" target="_blank" rel="noreferrer noopener">[Black Heaven] For Maple World</a>" at Lv. 120. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest Completing the Blockbuster will unlock access for all of your other characters in the same world</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)"/> [Extraordinary Energy Core (Grade S)]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradeable" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Bonus Occult Cube]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong> <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                , <img src="/images/items/damaged-black-heart.png" alt="Etc Damaged Black Heart"/> <a href="https://maplestory.fandom.com/wiki/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>
                , <img src="/images/equipment/android.png" alt="Eqp Deluxe Android (M)"/> <a href="https://maplestory.fandom.com/wiki/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>
                , <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012632">[Beserked Face Accessory]</a>
                , <img src="/images/items/orchids-plush-bunny.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Orchid's Plush Bunny]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestory.fandom.com/wiki/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/350060300" target="_blank" rel="noreferrer noopener">Black Heaven Inside: Core Entrance</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <AdInArticleBanner/>
          <ArticleHeaderTwo id="damien"><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> Damien</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 190+]</strong></p>
          <p>You must complete Act 4 of Heroes of Maple Blockbuster from the Lightbulb icon called <a href="https://maplestory.wiki/GMS/210.1.1/quest/33916" target="_blank" rel="noreferrer noopener">“[Heroes] Feelings of Misfortune”</a> at Lv. 135. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest. Completing Act 4 will unlock access for all of your other characters in the same world</p>
          <ul>
            <li>
              <strong>Normal Mode Rewards: </strong> , <img src="/images/equipment/ruin-force-shield.png" alt="Eqp Ruin Force Shield"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1099015" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a>
              , <img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone"/> [Twisted Stigma Spirit Stone]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
              , <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/damienroid.png"/> <a href="https://maplestory.fandom.com/wiki/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>
                , <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022278" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>
                , <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                , <img src="/images/items/damiens-sword.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Damien's Sword]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestory.fandom.com/wiki/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.fandom.com/wiki/Path_to_the_World_Tree_Summit" target="_blank" rel="noreferrer noopener">Dark World Tree: Path to the World Tree Summit</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="guardian-angel-slime"><img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> Guardian Angel Slime</ArticleHeaderTwo>
          <p><strong>[Normal/Chaos Lv. 210+]</strong></p>
          <p>You must complete the quest <a href="https://maplestory.fandom.com/wiki/Quests/243/(Ramuramu)_Who%27s_REALLY_the_Cutest_of_Them_All%3F" target="_blank" rel="noreferrer noopener">"[Ramuramu] Who's REALLY the Cutest of Them All?"</a> that consists of only a series of dialogue</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong>
                <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>
            </li>
            <li>
                <strong>Chaos Mode Only Rewards: </strong><img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime_Altar" target="_blank" rel="noreferrer noopener">Ramuramu Valley: Guardian Angel Slime Altar</a></li>
          </ul> 
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="lucid"><img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> Lucid</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard Lv. 220+ &amp; 360ArcP+]</strong></p>
          <p>You must complete the Lachelein storyline and defeat Story Mode Lucid in order to unlock access to Lucid</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal],
                , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
            </li>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/butterfly-droplet-stone.png"/> <a href="https://maplestory.fandom.com/wiki/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>
              , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestory.fandom.com/wiki/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/lucidroid.png"/> <a href="https://maplestory.fandom.com/wiki/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>
                , <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132308" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>
                , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/lucids-canopy-bed.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Lucid's Canopy Bed]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestory.fandom.com/wiki/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450004000" target="_blank" rel="noreferrer noopener">Lachelein: Nightmare Clocktower</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="gollux"><img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> Gollux</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard/Hell Lv. 180]</strong></p>
          <p>You can enter the Gollux area without any pre-quests. Enter through the Dimensional Mirror. To gain access to Gollux, you must complete the quest “[Gollux] The Cracks of Corruption”. The quest consists of only dialogue</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Penny/Coins]
                , <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/>
                <img src="/images/equipment/superior-gollux-ring.png"/>
                <img src="/images/equipment/superior-engraved-gollux-pendant.png" alt="Eqp Superior Engraved Gollux Pendant"/>
                <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/>
                <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Gollux Accessories]</a>
                , <img src="/images/items/gollux-wood-bench.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[(Hell Mode Only) Gollux Wood Bench]</a>
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
            </li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: Dimensional Mirror</li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="gloom"><img src="/images/map-icons/moonbridge.png" alt="MapIcon moonBridge"/> Gloom</ArticleHeaderTwo>
          <p><strong>[Normal/Chaos Lv. 245+ &amp; 730ArcP+]</strong></p>
          <p>You must complete the Moonbridge storyline and defeat Story Mode Gloom in order to unlock access to Gloom</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Estella_Earrings" target="_blank">[Estella Earrings]</a>
                , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Spark_of_Determination" target="_blank">[Spark of Determination]</a>
                , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
                , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
                , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/endless-terror.png" alt="Eqp Endless Terror"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/218/item/1113306" target="_blank">[Endless Terror]</a>
              , <img src="/images/items/gloom-dark-bean-bag.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gloom Dark Bean Bag]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/map/450009301" target="_blank">Moonbridge: Facing the Eye of the Void</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <AdInArticleBanner/>
          <ArticleHeaderTwo id="verushilla"><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon TheLabyrinthOfSuffering"/> Verus Hilla</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 250+ &amp; 900ArcP+]</strong></p>
          <p>You must complete the Labyrinth of Suffering storyline and defeat Story Mode Verus Hilla in order to unlock access to Verus Hilla</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Daybreak Pendant]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122430" target="_blank" rel="noreferrer noopener">[Source of Suffering]</a>
              , <img src="/images/items/shadow-of-annihilation.png" alt="Etc Shadow of Annihilation"/> <a href="https://maplestory.fandom.com/wiki/Shadow_of_Annihilation" target="_blank" rel="noreferrer noopener">[Shadow of Annihilation]</a>
              , <img src="/images/items/soul-candle.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Soul Candle]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450011320" target="_blank" rel="noreferrer noopener">Labyrinth of Suffering: Deep Core Base</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="darknell"><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> Darknell</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 255+ &amp; 850ArcP+]</strong></p>
          <p>You must complete the Limina storyline and defeat Story Mode Darknell to unlock access to Darknell</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Estella Earrings]</a>
              , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Eqp Commanding Force Earrings"/> <a href="https://maplestory.wiki/GMS/218/item/1032316" target="_blank" rel="noreferrer noopener">[Commanding Force Earrings]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/darknells-helmet-decoration.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Darknell's Helmet Decoration]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450012200" target="_blank" rel="noreferrer noopener">Limina: Final Horizon Fore</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="blackmage"><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> Black Mage</ArticleHeaderTwo>
          <p><strong>[Hard Lv. 255+ 1320ArcP+]</strong></p>
          <p>You must complete the Limina storyline and defeat Story Mode Black Mage to unlock access to Black Mage</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/items/sealed-genesis-weapon-box.png" alt="Use Sealed Genesis Weapon Box"/> <a href="https://maplestory.fandom.com/wiki/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>
              , <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182285" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/black-mages-mirror.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Black Mage's Mirror]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Monthly</li>
            <li><strong>Location</strong>: <a href="http://Limina: Giant's Heart" target="_blank" rel="noreferrer noopener">Limina: Giant's Heart</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="seren"><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> Seren</ArticleHeaderTwo>
          <p><strong>[Hard Lv. 265+ 150SacP+]</strong></p>
          <p>You must complete the Burning Cernium storyline to unlock access to Seren</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/items/mitras-rage-selection-box.png" alt="Use Mitra's Rage Selection Box"/> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Rage_Selection_Box" target="_blank" rel="noopener">[Mitra's Rage Selection Box]</a>
              , <img src="/images/items/mitras-nodestone.png"/> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>
              , <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noopener">[Daybreak Pendant]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
              , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> [(Non-Reboot Only) Bonus Occult Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.fandom.com/wiki/Palace_Main_Hall" target="_blank" rel="noreferrer noopener">Cernium: Palace Main Hall</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="ranmaru"><img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> Ranmaru</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 120+/Lv.180+]</strong></p>
          <p>No pre-quests</p>
          <ul>
              <li>
                  <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Eclectic Fennel"/> [Lv. 120 Gear]
                  , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                  , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 120 Rebirth Flame]</a>
                  , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                  , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
                  , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Reboot Only) Powerful Rebirth Flame]</a>
                  , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Reboot Only) Eternal Rebirth Flame]</a>
              </li>
              <li>
                  <strong>Hard Mode only Rewards:</strong> , <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>
                  , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                  , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 130 Rebirth Flame]</a>
              </li>
              <li><strong>Can clear</strong>: Daily</li>
              <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/807300100" target="_blank" rel="noreferrer noopener">El Nath: Secret Altar Path</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <AdInArticleBanner/>
          <ArticleHeaderTwo id="princessno"><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon JP Nohime"/> Princess No</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 140+]</strong></p>
          <p>You must complete the Hieizan Temple storyline to gain access to Princess No. To start, accept the quest from the Lightbulb icon called “<a href="https://maplestory.fandom.com/wiki/Quests/56/(Hieizan_Temple)_Regards,_Takeda_Shingen">[Hieizan Temple] Regards, Takeda Shingen</a>” at Lv. 140</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noopener noreferrer">[Secondary Weapon Fragment]</a>
                , <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noopener noreferrer">Belt</a> ]
                , <img src="/images/items/princess-no-chair.png" alt="Setup Princess No Chair"/> <a href="https://maplestory.fandom.com/wiki/Princess_No_Chair" target="_blank" rel="noopener noreferrer">[Princess No Chair]</a>
                , <img src="/images/items/princess-no-effect-coupon.png" alt="Use Princess No Effect Coupon"/> <a href="https://maplestory.fandom.com/wiki/Princess_No_Effect_Coupon" target="_blank" rel="noopener noreferrer">[Princess No Effect Coupon]</a>
                , <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube]
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/811000999" target="_blank" rel="noreferrer noopener">Hieizan: Hieizan Temple Plaza</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="will"><img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> Will</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 235+ &amp; 760ArcP+]</strong></p>
          <p>You must complete the Esfera storyline and defeat Story Mode Will in order to unlock access to Will</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards: </strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
                , <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> [Crusader Coins]
            </li>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/stone-cobweb-droplet.png"/> <a href="https://maplestory.fandom.com/wiki/Stone_Cobweb_Droplet" target="_blank" rel="noreferrer noopener">[Stone Cobweb Droplet]</a>
              , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestory.fandom.com/wiki/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong> <img src="/images/items/wills-cursed-spellbook-selection-box.png"/> <a href="https://maplestory.fandom.com/wiki/Will%27s_Cursed_Spellbook_Selection_Box" target="_blank" rel="noreferrer noopener">[Will's Cursed Spellbook Selection Box]</a>
                , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                , <img src="/images/items/mirror-world-nodestone.png" alt="Use Mirror World Nodestone"/><a href="https://maplestory.fandom.com/wiki/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/wills-web-swing-chair.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Will's Web Swing Chair]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestory.fandom.com/wiki/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><strong>Can clear</strong>: Weekly</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450007200" target="_blank" rel="noreferrer noopener">Esfera: Radiant Temple</a></li>
          </ul>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <ArticleHeaderTwo id="julieta"><img src="/images/map-icons/abrup.png" alt="MapIcon PL Abrup"/> Julieta</ArticleHeaderTwo>
          <p><strong>[Normal Level 140+]</strong></p>
          <p>You must complete the Monad Blockbuster from the Lightbulb icon called "[MONAD: The First Omen] An Old Woman's Letter] at Lv. 110. The Blockbuster can be accessible from the Dimensional Mirror as well after completing the quest</p>
          <ul>
            <li><strong>Can clear</strong>: 3 times daily</li>
            <li><strong>Location</strong>: Accessible from the Boss Matchmaking System directly</li>
          </ul>
          <ArticleHeaderTwo id="akechi"><img src="/images/map-icons/fort-asura.png" alt="Ritual Altar Icon"/> Akechi Mitsuhide</ArticleHeaderTwo>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <hr/>
          <p><strong>[Normal Level 200+]</strong></p>
          <p>You must complete the Asura Crisis storyline starting with the quest from your Lightbulb icon called "[The Asura Crisis] Back to Momijigaoka" at Lv. 200</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/equipment/nimbus-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><img src="/images/equipment/weeping-spirit-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>
              , <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> <a href="https://maplestory.fandom.com/wiki/Mark_of_the_Silver_Wolf" target="_blank" rel="noopener noreferrer">[Mark of the Silver Wolf]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/><a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/><a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>
              , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
              , <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/><a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Bonus Occult Cube]</a>
            </li>
            <li><strong><strong>Can clear</strong>:</strong> Weekly</li>
            <li><strong><strong>Location</strong>: </strong><a href="https://maplestory.wiki/GMS/220/map/800000000" target="_blank" rel="noopener noreferrer">Mushroom Shrine</a></li>
          </ul>
          <ArticleHeaderTwo id="yakuza"><img src="/images/map-icons/showa-town.png" alt="Showa Town Map Icon"/> Yakuza Boss</ArticleHeaderTwo>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <hr/>
          <p><strong>[Normal Level 160+]</strong></p> 
          <p>You must complete a series of quest starting from "[Showa Town] Welcome to Showa Town!" from the Lightbulb icon at Lv. 160. The last quest you need to complete is "Investigating Fire Raccoon Finance"</p>
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/><img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/items/showa-town-damage-skin.png" alt="Showa Town Damage Skin"/><img src="/images/items/fire-raccoon-damage-skin.png" alt="Fire Racoon Damage Skin"/> [Damage Skins]</li>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestory.wiki/GMS/220/map/801040003" target="_blank" rel="noopener noreferrer">Showa Town: Parlor</a></li>
          </ul>
          <ArticleHeaderTwo id="gigatoad"><img src="/images/map-icons/mushroom-shrine.png" alt="Mushroom Shrine Icon"/> Gigatoad</ArticleHeaderTwo>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
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
        <AdOutArticle/>
      </ContentPage>
    )
}

export default BossMatchmaking
