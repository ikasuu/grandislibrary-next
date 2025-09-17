import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import { BannerAdOne, BannerAdTwo, BannerAdThree, VideoAd, StickyAd } from '../../components/Ads';

function BossMatchmaking() {
    return (
      <ContentPage>
        <Head>
            <title>Boss Pre-Quests | MapleStory | Grandis Library</title>
            <meta content={"An explanation on how to unlock access to MapleStory bosses in the Boss Matchmaking System. As well, the guide covers information on clear limits, level requirements, and boss reward drops."} name="description"/>
        </Head>
        <ContentTitle>Boss Pre-Quests</ContentTitle>
        <StickyAd/>
        <p><img className="repository-image" src="/images/info/boss-queue.png" alt="Boss Queue"/></p>
        <p>As you level up, you will reach the required level to more and more bosses. To instantly move to bosses for free after completing their pre-quests, you can access the "Boss Contents" UI. You can find it by assigning the "Boss Party" Key Slot to your Keyboard Shortcuts</p>
        <p><strong>Note</strong>: Bosses with multiple difficulties with only one "Can clear" tag listed below means that clears are shared between all difficulties. If you see multiple "Can clear"s for a boss that means the clears are independent for each difficulty</p>
        <h3 id="top">Quick Jumps</h3>
        <ul>
          <li><Link smooth href="#ursus" scroll>Ursus</Link></li>
          <li><Link smooth href="#balrog" scroll>Balrog</Link></li>
          <li><Link smooth href="#zakum" scroll>Zakum</Link></li>
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
          <li><Link smooth href="#will" scroll>Will</Link></li>
          <li><Link smooth href="#gloom" scroll>Gloom</Link></li>
          <li><Link smooth href="#verushilla" scroll>Verus Hilla</Link></li>
          <li><Link smooth href="#darknell" scroll>Darknell</Link></li>
          <li><Link smooth href="#blackmage" scroll>Black Mage</Link></li>
          <li><Link smooth href="#seren" scroll>Seren</Link></li>
          <li><Link smooth href="#kalos" scroll>Kalos</Link></li>
          <li><Link smooth href="#kaling" scroll>Kaling</Link></li>
          <li><Link smooth href="#gollux" scroll>Gollux</Link></li>
          <li><Link smooth href="#ranmaru" scroll>Ranmaru</Link></li>
          <li><Link smooth href="#princessno" scroll>Princess No</Link></li>
          <li><Link smooth href="#akechi" scroll>Akechi Mitsuhide</Link></li>
          <li><Link smooth href="#yakuza" scroll>Yakuza Boss</Link></li>
          <li><Link smooth href="#gigatoad" scroll>Gigatoad</Link></li>
        </ul>
        <VideoAd/>
        <div className="repository-md-container">
                    <ArticleHeaderTwo id="ursus"><img src="/images/map-icons/ursus.png" alt="Soul Collector Artwork Ursus (1)"/> Ursus</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 100+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: 3 times daily</li>
            <li><strong>Main Rewards:</strong> <img src="/images/items/meso.png" alt="Meso"/> [Mesos]</li>
          </ul>
          <p>You must complete the Lightbulb Quest called “[Ursus] Rumors of The Mighty” at Lv. 100 that is required to enter Ursus. The quest is short and explains what Ursus is</p>
          <p>To enter Ursus, you are required daily to defeat 300 enemies near your level</p>
          <ArticleHeaderTwo id="balrog"><img src="/images/map-icons/balrog.png" alt="MapIcon Balog"/> Balrog</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 65+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Unlimited times daily</li>
          </ul>
          <p>No pre-quests</p>
          <ul>
              <li>
                  <strong>Main Rewards:</strong> <img src="/images/equipment/bain-wings.png" alt="Eqp Bain Wings"/>[Lv. 58 Bain Weapon], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/balrog-horn-throne.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Balrog-Horn Throne]</a>
              </li>
          </ul>
          <ArticleHeaderTwo id="zakum"><img src="/images/map-icons/zakum.png" alt="MapIcon Zakum"/> Zakum</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 50+] [Normal/Chaos Lv. 90+]</strong></p>
          <ul>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
          </ul>
          <p>No pre-quests</p>
          <p>To summon Zakum, an <img src="/images/items/eye-of-fire.png" alt="Etc Eye of Fire"/><a href="https://maplestorywiki.net/w/Eye_of_Fire" target="_blank" rel="noreferrer noopener">[Eye of Fire]</a> is given upon entry that must be dropped in the middle of the map to summon the boss</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/>
                <a href="https://maplestorywiki.net/w/Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/>
                <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/>
                <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/>
                <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/>
                <a href="https://maplestorywiki.net/w/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>, <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/>
                <a href="https://maplestorywiki.net/w/Condensed_Power_Crystal" target="_blank" rel="noreferrer noopener">[Condensed Power Crystal]</a>, <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory"/>
                <a href="https://maplestorywiki.net/w/Aquatic_Letter_Eye_Accessory" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>, <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/>
                <a href="https://maplestorywiki.net/w/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-zakum-helmet.png" alt="Eqp Chaos Zakum Helmet"/>
              <a href="https://maplestorywiki.net/w/Chaos_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Chaos Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-helmet.png" alt="Eqp Enraged Zakum Helmet"/>
              <a href="https://maplestorywiki.net/w/Enraged_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Enraged Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-cape.png" alt="Eqp Enraged Zakum Cape"/>
              <a href="https://maplestorywiki.net/w/Enraged_Zakum_Cape" target="_blank" rel="noreferrer noopener">[Enraged Zakum Cape]</a>, <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/>
              <a href="https://maplestorywiki.net/w/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">[Enraged Zakum Belt]</a>, <img src="/images/items/zakum-hand-table.png"/>
              <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Zakum Hand Table]</a>
            </li>
          </ul>
          <BannerAdOne/>
          <ArticleHeaderTwo id="magnus"><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> Magnus</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 115+][Normal Lv. 155+][Hard Lv.175+]</strong></p>
          <ul>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
          </ul>
          <p>You must complete the questline from the Lightbulb Quest labelled with "<a href="https://maplestorywiki.net/w/Quests/259" target="_blank" rel="noreferrer noopener">[Heliseum]</a>" at Lv. 100</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong>
                <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>
                , <img src="/images/equipment/elite-heliseum-cape.png"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Cape" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>
                , <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestorywiki.net/w/Crystal_Ventus_Badge" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>
                , <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestorywiki.net/w/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>
                , <img src="/images/equipment/kaiserion.png" alt="Eqp Kaiserion"/> <a href="https://maplestorywiki.net/w/Kaiserion" target="_blank" rel="noreferrer noopener">[Kaiserion]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> [Shadowdealer Coin], <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Nova Cape]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong>
                <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Tyrant Cape]</a>
                , <img src="/images/equipment/nova-hyades-boots.png"/> <a href="https://maplestorywiki.net/w/Nova_Hyades_Boots" target="_blank" rel="noreferrer noopener">[Superior Nova Boots]</a>
                , <img src="/images/equipment/cursed-kaiserium.png" alt="Eqp Cursed Kaiserium"/> <a href="https://maplestorywiki.net/w/Cursed_Kaiserium" target="_blank" rel="noreferrer noopener">[Cursed Kaiserium]</a>
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> [Magnus Coin]
                , <img src="/images/items/magnus-horn-throne.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Magnus Horn Throne]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="hilla"><img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> Hilla</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 85+] [Hard Lv. 170+]</strong></p>
          <ul>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
          </ul>
          <p>No pre-quests</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong>
                <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestorywiki.net/w/Stone_of_Eternal_Life" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>
                , <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Rebirth Flame]
                , <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> <a href="https://maplestorywiki.net/w/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong>
              <img src="/images/equipment/will-o-the-wisps.png"/> <a href="https://maplestorywiki.net/w/Will_o%27_the_Wisps" target="_blank" rel="noreferrer noopener">[Will O' the Wisps]</a>
              , <img src="/images/items/hilla-obelisk-floor-lamp.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Hilla Obelisk Floor Lamp]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="omnicln"><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> OMNI-CLN</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 180+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>You must complete the Omega Sector Theme Dungeon to unlock OMNI-CLN. To start the Theme Dungeon, accept the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quests/38/(Omega_Sector)_Dr._Kim%27s_Call" target="_blank" rel="noreferrer noopener">[Omega Sector] Dr. Kim’s Call</a>” at Lv. 165</p>
          <ul>
            <li>
                <strong>Main Rewards: </strong><img src="/images/items/elixir.png"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/omni-cln-component.png" alt="Etc OMNI-CLN Component"/> <a href="https://maplestorywiki.net/w/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>, <img src="/images/items/omni-cln-vacuum.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[OMNI-CLN Vacuum]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
          </ul>
          <ArticleHeaderTwo id="papulatus"><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> Papulatus</ArticleHeaderTwo>
          <p><strong>[Easy Lv. 115+] [Normal Lv. 155+] [Chaos Lv. 190+]</strong></p>
          <ul>
            <li><strong>Can clear Easy/Normal</strong>: Daily</li>
            <li><strong>Can clear Hard</strong>: Weekly</li>
          </ul>
          <p>You must complete the questline from the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quests/36/(Papulatus)_The_Light_Of_Chaos" target="_blank" rel="noreferrer noopener">[Papulatus] The Light of Chaos</a>” at Lv. 115</p>
          <p>To summon Papulatus, a <img src="/images/items/piece-of-cracked-dimension.png" alt="Etc Piece of Cracked Dimension"/> <a href="https://maplestorywiki.net/w/Piece_of_Cracked_Dimension" target="_blank" rel="noreferrer noopener">[Piece of Cracked Dimension]</a> is given upon entry that must be dropped on the glowing outline to summon the boss</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/papulatus-clock-chair.png"/> <a href="https://maplestorywiki.net/w/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Papulatus Clock Chair]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestorywiki.net/w/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
                , <img src="/images/items/papulatus-wall-clock.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Papulatus Wall Clock]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="rootabyss"><img src="/images/map-icons/pierre.png" alt="MapIcon Piere"/><img src="/images/map-icons/von-bon.png" alt="MapIcon BanBan"/><img src="/images/map-icons/crimson-queen.png" alt="MapIcon BloodyQueen"/><img src="/images/map-icons/vellum.png" alt="MapIcon Bellum"/> Root Abyss</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 125+] [Chaos Lv. 180+]</strong></p>
          <ul>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
          </ul>
          <p>You must complete the questline from the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quest/(Root_Abyss)_An_Urgent_Summons" target="_blank" rel="noreferrer noopener">[Root Abyss] An Urgent Summons</a>” at Lv. 125</p>
          <ul>
            <li><strong>Normal mode and Above Rewards:</strong></li>
            <li>
                <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Root Abyss Hat], <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal], <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> [Yggdrasil Rune], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/>
                <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair]
            </li>
            <li>
                <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/>
                <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/>
                <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/>
                <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Chaos Hat], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/><img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/><img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/><img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> [Chaos Root Abyss Gear Fragment], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> [Chaos Yggdrasil Rune]
                , <img src="/images/items/pierre-umbrella-stand.png"/><img src="/images/items/von-bon-windup-clock.png"/><img src="/images/items/crimson-queen-vanity-table.png"/><img src="/images/items/vellum-lava-bathtub.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Furniture]</a>
              </li>
          </ul>
          <BannerAdTwo/>
          <ArticleHeaderTwo id="vonleon"><img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> Von Leon</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard Lv. 125+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>You must complete the Lion King's Castle Main Quest starting from the Lightbulb Quest called <a href="https://maplestorywiki.net/w/Quests/260/(Lion_King%27s_Castle)_Among_the_Tundra" target="_blank" rel="noreferrer noopener">"[Lion King's Castle] Among the Tundra"</a> at Lv. 120</p>
          <ul>
            <li>
                <strong>Easy/Normal Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> [Von Leon Gear Currency]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Hard Mode and Above Rewards:</strong> <img src="/images/equipment/royal-von-leon-suit.png"/><img src="/images/equipment/royal-von-leon-energy-chain.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>
              , <img src="/images/equipment/ifias-earrings.png"/><img src="/images/equipment/ifias-ring.png"/><img src="/images/equipment/ifias-necklace.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Ifia%27s_Treasure_Set" target="_blank" rel="noreferrer noopener">[Ifia Accessories]</a>
              , <img src="/images/items/lion-ice-sculpture.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Lion Ice Sculpture]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="horntail"><img src="/images/map-icons/horntail.png" alt="MapIcon Horntail"/> Horntail</ArticleHeaderTwo>
          <p><strong>[Easy/Normal Lv. 130+] [Chaos Lv. 135+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>No pre-quests</p>
          <ul>
            <li><strong>Easy Mode and Above Rewards: </strong> <img src="/images/equipment/silver-blossom-ring.png"/> <a href="https://maplestorywiki.net/w/Silver_Blossom_Ring" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring"/> <a href="https://maplestorywiki.net/w/Dea_Sidus_Earring" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>
                , <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestorywiki.net/w/Horntail_Necklace" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/potion-recipe.png"/> <a href="https://maplestorywiki.net/w/Wealth_Acquisition_Potion#Recipe" target="_blank" rel="noreferrer noopener">[Wealth Aquisition Potion Recipe]</a>
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Chaos Horntail Necklace"/> <a href="https://maplestorywiki.net/w/Chaos_Horntail_Necklace" target="_blank" rel="noreferrer noopener">[Chaos Horntail Necklace]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/horntail-fountain.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Horntail Fountain]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="arkarium"><img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> Arkarium</ArticleHeaderTwo>
          <p><strong>[Easy/Normal Lv. 140+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>You must complete a questline from the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quests/264/(Silent_Crusade)_A_Cry_for_Help">[Silent Crusade] A Cry for Help</a>” at Lv. 140 to unlock access to Arkarium</p>
          <ul>
            <li>
                <strong>Easy mode and Above Rewards:</strong> <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant"/> <a href="https://maplestorywiki.net/w/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>
                , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> [Lv. 130 Rebirth Flame]
                , <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                ,<img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
            </li>
            <li>
                <strong>Normal mode Only Rewards:</strong> <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a href="https://maplestorywiki.net/w/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>
                , <img src="/images/items/arkarium-statue.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Arkarium Statue]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
            </li>
          </ul>
          <ArticleHeaderTwo id="pinkbean"><img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> Pink Bean</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 140+] [Chaos Lv. 170+]</strong></p>
          <ul>
            <li><strong>Can clear Normal</strong>: Daily</li>
            <li><strong>Can clear Chaos</strong>: Weekly</li>
          </ul>
          <p><img src="/images/npc/temple-keeper.png" alt="NPC Temple Keeper"/></p>
          <p>You must complete the main Temple of Time questline to unlock access to Pink Bean. You can start the questline by accepting the quest “<a href="https://maplestorywiki.net/w/Quests/263/(Temple_of_Time)_Path_to_the_Past" target="_blank" rel="noreferrer noopener">Path to the Past</a>" from the Temple Keeper</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestorywiki.net/w/Black_Bean_Mark" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>
                , <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestorywiki.net/w/Golden_Clover_Belt" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>
                , <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestorywiki.net/w/Pink_Holy_Cup" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-pink-bean-hat.png"/><img src="/images/equipment/chaos-pink-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Chaos_Pink_Bean_Set_I" target="_blank" rel="noreferrer noopener">[Chaos Pink Bean Set]</a>
              , <img src="/images/equipment/black-bean-hat.png"/><img src="/images/equipment/black-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Black_Bean_Set" target="_blank" rel="noreferrer noopener">[Black Bean Set]</a>
              , <img src="/images/items/powerful-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/pink-bean-armchair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Pink Bean Armchair]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="cygnus"><img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> Cygnus</ArticleHeaderTwo>
          <p><strong>[Easy/Normal Lv. 165+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p><img src="/images/npc/chief-alex.png" alt="NPC Chief Alex"/></p>
          <p>You must complete the Knight Stronghold questline starting at “<a href="https://maplestorywiki.net/w/Quests/266/(Knight_Stronghold)_Scouting_the_Stronghold">[Knight Stronghold] Scouting the Stronghold</a>” at Lv. 165 from Chief Alex at <a href="https://maplestorywiki.net/w/Henesys_Ruins_(Map)" target="_blank" rel="noreferrer noopener">Henesys Ruins</a></p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> [Empress Gear Fragment]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
            <li>
                <strong>Normal Mode Only Rewards:</strong> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>
                , <img src=" /images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield"/><img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield"/><img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield"/> [Shield Recipes]
                , <img src="/images/items/plush-cygnus-shelf.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Plush Cygnus Shelf]</a>
            </li>
          </ul>
          <BannerAdThree/>
          <ArticleHeaderTwo id="lotus"><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> Lotus</ArticleHeaderTwo>
          <p><strong>[Normal/Hard/Extreme Lv. 190+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>No pre-quests</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)"/> [Extraordinary Energy Core (Grade S)]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards</strong>: <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                , <img src="/images/items/damaged-black-heart.png" alt="Etc Damaged Black Heart"/> <a href="https://maplestorywiki.net/w/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>
                , <img src="/images/equipment/android.png" alt="Eqp Deluxe Android (M)"/> <a href="https://maplestorywiki.net/w/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>
                , <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> <a href="https://maplestorywiki.net/w/Berserked">[Beserked Face Accessory]</a>
                , <img src="/images/items/orchids-plush-bunny.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Orchid's Plush Bunny]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li>
              <strong>Extreme Mode Only Rewards</strong>: <img src="/images/equipment/total-control.png" alt="Eqp Total Control"/> <a href="https://maplestorywiki.net/w/Total_Control" target="_blank" rel="noreferrer noopener">[Total Control - Android Heart]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="damien"><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> Damien</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 190+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>No pre-quest</p>
          <ul>
            <li>
              <strong>Normal Mode Rewards: </strong> , <img src="/images/equipment/ruin-force-shield.png" alt="Eqp Ruin Force Shield"/> <a href="https://maplestorywiki.net/w/Ruin_Force_Shield" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a>
              , <img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone"/> [Twisted Stigma Spirit Stone]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/damienroid.png"/> <a href="https://maplestorywiki.net/w/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>
                , <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestorywiki.net/w/Magic_Eyepatch" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>
                , <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                , <img src="/images/items/damiens-sword.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Damien's Sword]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="guardian-angel-slime"><img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> Guardian Angel Slime</ArticleHeaderTwo>
          <p><strong>[Normal/Chaos Lv. 210+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the quest <a href="https://maplestorywiki.net/w/Quest/(Ramuramu)_Psych_Exam" target="_blank" rel="noreferrer noopener">"[Ramuramu] Psych Exam"</a> that consists of a series of dialogue</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards: </strong>
                <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
            </li>
            <li>
                <strong>Chaos Mode Only Rewards: </strong> <img src="/images/items/guardian-angel-slime-fountain.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener">[Guardian Angel Slime Fountain]</a>
                , <img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>
                , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul> 
          <ArticleHeaderTwo id="lucid"><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> Lucid</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard Lv. 220+ &amp; 360ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Lachelein storyline and defeat Story Mode Lucid to unlock access to Lucid</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal],
                , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
            </li>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/butterfly-droplet-stone.png"/> <a href="https://maplestorywiki.net/w/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>
              , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/lucidroid.png"/> <a href="https://maplestorywiki.net/w/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>
                , <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/> <a href="https://maplestorywiki.net/w/Dreamy_Belt" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>
                , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/lucids-canopy-bed.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Lucid's Canopy Bed]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="will"><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> Will</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 235+ &amp; 760ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Esfera storyline and defeat Story Mode Will to unlock access to Will</p>
          <ul>
            <li>
                <strong>Easy Mode and Above Rewards: </strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
            </li>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/stone-cobweb-droplet.png"/> <a href="https://maplestorywiki.net/w/Stone_Cobweb_Droplet" target="_blank" rel="noreferrer noopener">[Stone Cobweb Droplet]</a>
              , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li>
                <strong>Hard Mode Only Rewards: </strong> <img src="/images/items/wills-cursed-spellbook-selection-box.png"/> <a href="https://maplestorywiki.net/w/Will%27s_Cursed_Spellbook_Selection_Box" target="_blank" rel="noreferrer noopener">[Will's Cursed Spellbook Selection Box]</a>
                , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                , <img src="/images/items/mirror-world-nodestone.png" alt="Use Mirror World Nodestone"/><a href="https://maplestorywiki.net/w/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/wills-web-swing-chair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Will's Web Swing Chair]</a>
                , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="gloom"><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> Gloom</ArticleHeaderTwo>
          <p><strong>[Normal/Chaos Lv. 245+ &amp; 730ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Moonbridge storyline and defeat Story Mode Gloom to unlock access to Gloom</p>
          <ul>
            <li>
                <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Estella_Earrings" target="_blank">[Estella Earrings]</a>
                , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Spark_of_Determination" target="_blank">[Spark of Determination]</a>
                , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
            </li>
            <li>
              <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/endless-terror.png" alt="Eqp Endless Terror"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Endless_Terror" target="_blank">[Endless Terror]</a>
              , <img src="/images/items/gloom-dark-bean-bag.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gloom Dark Bean Bag]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="verushilla"><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon Labyrinth of Suffering"/> Verus Hilla</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 250+ &amp; 900ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Labyrinth of Suffering storyline and defeat Story Mode Verus Hilla to unlock access to Verus Hilla</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Daybreak Pendant]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering"/> <a href="https://maplestorywiki.net/w/Source_of_Suffering" target="_blank" rel="noreferrer noopener">[Source of Suffering]</a>
              , <img src="/images/items/shadow-of-annihilation.png" alt="Etc Shadow of Annihilation"/> <a href="https://maplestorywiki.net/w/Shadow_of_Annihilation" target="_blank" rel="noreferrer noopener">[Shadow of Annihilation]</a>
              , <img src="/images/items/soul-candle.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Soul Candle]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="darknell"><img src="/images/map-icons/limina.png" alt="MapIcon Limina"/> Darknell</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 255+ &amp; 850ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Limina storyline and defeat Story Mode Darknell to unlock access to Darknell</p>
          <ul>
            <li>
              <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Estella Earrings]</a>
              , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination]
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Eqp Commanding Force Earrings"/> <a href="https://maplestorywiki.net/w/Commanding_Force_Earring" target="_blank" rel="noreferrer noopener">[Commanding Force Earring]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/darknells-helmet-decoration.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Darknell's Helmet Decoration]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="blackmage"><img src="/images/map-icons/limina.png" alt="MapIcon Limina"/> Black Mage</ArticleHeaderTwo>
          <p><strong>[Hard/Extreme Lv. 255+ 1320ArcP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Monthly</li>
          </ul>
          <p>You must complete the Limina storyline and defeat Story Mode Black Mage to unlock access to Black Mage</p>
          <p>To enter Black Mage, an item is required that is exchanged from <a href="https://maplestorywiki.net/w/Lorelai" target="_blank" rel="noopener noreferrer">Lorelai</a></p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestorywiki.net/w/Genesis_Badge" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>
              , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
              , <img src="/images/items/black-mages-mirror.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Black Mage's Mirror]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="seren"><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> Seren</ArticleHeaderTwo>
          <p><strong>[Normal/Hard/Extreme Lv. 260+ 150SacP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Burning Cernium storyline to unlock access to Seren</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/items/mitras-rage-selection-box.png" alt="Use Mitra's Rage Selection Box"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Rage_Selection_Box" target="_blank" rel="noopener">[Mitra's Rage Selection Box]</a>
              , <img src="/images/items/mitras-nodestone.png"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>
              , <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noopener">[Daybreak Pendant]</a>
              , <img src="/images/items/holy-sword-wall-decoration.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener">[Holy Sword Wall Decoration]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="kalos"><img src="/images/map-icons/karote.png" alt="MapIcon Kalos"/> Kalos</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Chaos/Extreme Lv. 265+ 200SacP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the <a href="https://maplestorywiki.net/w/Quests/285/(Karote)_Kalos_the_Guardian" target="_blank" rel="noopener noreferrer">[Karote] Kalos the Guardian</a> questline and defeat Story Mode Kalos to unlock access to Kalos</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestorywiki.net/w/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a>
              , <img src="/images/items/kalos-ceiling-fan.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener">[Kalos Ceiling Fan]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="kaling"><img src="/images/map-icons/shangri-la.png" alt="MapIcon Shang-ri La"/> Kaling</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Chaos/Extreme Lv. 275+ 230SacP+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li  >
          </ul>
          <p>You must complete the Shangri-La questline to unlock access to Kaling</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/items/ferocious-beast-entanglement-ring.png" alt="Use Ferocious Beast Entanglement Ring"/> <a href="https://maplestorywiki.net/w/Ferocious_Beast_Entanglement_Ring" target="_blank" rel="noopener">[Ferocious Beast Entanglement Ring]</a>
              , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
              , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
              , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
              , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="gollux"><img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> Gollux</ArticleHeaderTwo>
          <p><strong>[Easy/Normal/Hard/Hell Lv. 180]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>You must complete the quest “[Gollux] The Cracks of Corruption” that consists of dialogue</p>
          <p>Gollux is also accessible through the Dimensional Mirror</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Penny/Coins]
                , <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/>
                <img src="/images/equipment/superior-gollux-ring.png"/>
                <img src="/images/equipment/superior-engraved-gollux-pendant.png" alt="Eqp Superior Engraved Gollux Pendant"/>
                <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/>
                <a href="https://maplestorywiki.net/w/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Gollux Accessories]</a>
                , <img src="/images/items/gollux-wood-bench.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[(Hell Mode Only) Gollux Wood Bench]</a>
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
            </li>
          </ul>
          <ArticleHeaderTwo id="ranmaru"><img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> Ranmaru</ArticleHeaderTwo>
          <p><strong>[Normal/Hard Lv. 120+/Lv.180+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
          </ul>
          <p>You must complete the quest "[Ranmaru] Call of Princess Sakuno: Stop Mori Ranmaru!" that consists of dialogue</p>
          <ul>
              <li>
                  <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Eclectic Fennel"/> [Lv. 120 Gear]
                  , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir]
                  , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 120 Rebirth Flame]</a>
                  , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                  , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                  , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Powerful Rebirth Flame]</a>
                  , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Eternal Rebirth Flame]</a>
              </li>
              <li>
                  <strong>Hard Mode Only Rewards:</strong> , <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>
                  , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                  , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 130 Rebirth Flame]</a>
              </li>
          </ul>
          <ArticleHeaderTwo id="princessno"><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> Princess No</ArticleHeaderTwo>
          <p><strong>[Normal Lv. 140+]</strong></p>
          <ul>
            <li><strong>Can clear</strong>: Weekly</li>
          </ul>
          <p>You must complete the Hieizan storyline starting with the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quest/(Princess_No)_Regards,_Takeda_Shingen" target="_blank" rel="noreferrer noopener">[Princess No] Regards, Takeda Shingen</a>” at Lv. 140</p>
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noopener noreferrer">[Secondary Weapon Fragment]</a>
                , <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestorywiki.net/w/Hayato%27s_Treasure" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestorywiki.net/w/Kanna%27s_Treasure" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestorywiki.net/w/Ayame%27s_Treasure" target="_blank" rel="noopener noreferrer">Belt</a> ]
                , <img src="/images/items/princess-no-chair.png" alt="Setup Princess No Chair"/> <a href="https://maplestorywiki.net/w/Princess_No_Chair" target="_blank" rel="noopener noreferrer">[Princess No Chair]</a>
                , <img src="/images/items/princess-no-effect-coupon.png" alt="Use Princess No Effect Coupon"/> <a href="https://maplestorywiki.net/w/Princess_No_Effect_Coupon" target="_blank" rel="noopener noreferrer">[Princess No Effect Coupon]</a>
                , <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
            </li>
          </ul>
          <ArticleHeaderTwo id="akechi"><img src="/images/map-icons/fort-asura.png" alt="MapIcon Fort Asura"/> Akechi Mitsuhide</ArticleHeaderTwo>
          <hr/>
          <p><strong>[Normal Level 200+]</strong></p>
          <ul>
            <li><strong><strong>Can clear</strong>:</strong> Weekly</li>
          </ul>
          <p>No pre-quest</p>
          <ul>
            <li>
              <strong>Main Rewards:</strong> <img src="/images/equipment/nimbus-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><img src="/images/equipment/weeping-spirit-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>
              , <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> <a href="https://maplestorywiki.net/w/Mark_of_the_Silver_Wolf" target="_blank" rel="noopener noreferrer">[Mark of the Silver Wolf]</a>
              , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
              , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
              , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
              , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/><a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>
              , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/><a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>
              , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/><a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
              , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/><a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
            </li>
          </ul>
          <ArticleHeaderTwo id="yakuza"><img src="/images/map-icons/showa-town.png" alt="Showa Town Map Icon"/> Yakuza Boss</ArticleHeaderTwo>
          <hr/>
          <p><strong>[Normal Level 160+]</strong></p> 
          <ul>
            <li><strong>Can clear</strong>: Daily</li>
            <li><strong>Location</strong>: <a href="https://maplestorywiki.net/w/Parlor" target="_blank" rel="noopener noreferrer">Showa Town: Parlor</a></li>
          </ul>
          <p>You must complete the questline from the Lightbulb Quest called "[Showa Town] Welcome to Showa Town!" until the quest "Investigating Fire Raccoon Finance"</p>
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/><a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/><img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/items/showa-town-damage-skin.png" alt="Showa Town Damage Skin"/><img src="/images/items/fire-raccoon-damage-skin.png" alt="Fire Racoon Damage Skin"/> [Damage Skins]</li>
          </ul>
          <ArticleHeaderTwo id="gigatoad"><img src="/images/map-icons/mushroom-shrine.png" alt="Mushroom Shrine Icon"/> Gigatoad</ArticleHeaderTwo>
          {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
          <hr/>
          <p><strong>[Normal &amp; Frenzied Level 160+]</strong></p>
          <ul>
            <li><strong><strong>Can clear</strong>:</strong> 3 times daily</li>
            <li><strong><strong>Location</strong>: </strong>Accessible from Ninja Castle</li>
          </ul>
          <p>No pre-quests</p>
          <ul>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/><a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/><img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/equipment/elemental-staff-1.png" alt="Eqp Elemental Staff 1"/><img src="/images/equipment/elemental-staff-2.png" alt="Eqp Elemental Staff 2"/>[Elemental Staves], <img src="/images/items/toad-pet-coupon.png" alt="Toad Pet Coupon"/> [(30 Day) Toad Pet Coupon], <img src="/images/items/ninja-castle-damage-skin.png" alt="Ninja Castle Damage Skin"/> [Damage Skin]</li>
            <li><strong><strong>Frenzied Mode Only Rewards: </strong></strong><img src="/images/items/clean-slate-scroll.png" alt="Clean Slate Scroll"/>[Clean Slate Scroll], <img src="/images/items/potion-recipe.png" alt="Exp Accumulation Potion Recipe"/> [EXP Accumulation Potion Recipe], <img src="/images/items/potion-recipe.png" alt="Wealth Acquisition Potion Recipe"/> [Wealth Acquisition Potion Recipe], <img src="/images/items/soul-shard.png" alt="Soul Shard"/> [Soul Shard], <img src="/images/items/golden-toad-sculpture.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture]</li>
          </ul>
        </div>
      </ContentPage>
    )
}

export default BossMatchmaking
