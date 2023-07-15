import React from 'react';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdThree, BannerAdTwo, VideoAd, StickyAd } from '../../components/Ads';

function AttackSpeed() {
    return (
        <ContentPage>
            <Head>
                <title>Attack Speed | MapleStory | Grandis Library</title>
                <meta content={"An explanation of Attack Speed in MapleStory that covers details on how it works, what Attack Speed each weapon is, and what the soft cap and hard cap is."} name="description"/>
            </Head>
            <ContentTitle>Attack Speed</ContentTitle>
            <StickyAd/>
            <p>Modified from: <a href="http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303" target="_blank" rel="noreferrer noopener">http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303</a></p>
            <h2>Attack Speed of your Weapon</h2>
            <p>Each Weapon in the game has an Attack Speed value in their description as follows:</p>
            <p>Faster &gt; Fast &gt; Average &gt; Slow &gt; Slower</p>
            <p>The values for each Attack Speed can be classified as such:</p>
            <ul>
                <li>Slower (Stage 1)</li>
                <li>Slow (Stage 2)</li>
                <li>Slow (Stage 3)</li>
                <li>Average (Stage 4)</li>
                <li>Fast (Stage 5)</li>
                <li>Fast (Stage 6)</li>
                <li>Faster (Stage 7)</li>
            </ul>
            <p>Fast and Slow have two values to them because there are certain weapons that have the same Attack Speed label but may be noticeably faster than the other</p>
            <p>There are also 3 values greater than Faster (7) but no weapon naturally has an Attack Speed value above Faster (7). They can be classified as such:</p>
            <ul>
                <li>Fastest (Stage 8)</li>
                <li>Fastest (Stage 9)</li>
                <li>Fastest (Stage 10)</li>
            </ul>
            <p><strong>[Note]: </strong>Hurricane-type / Key-down skills like <img src="/class-icons/explorers/bowmaster/hurricane.png" alt="Skill Hurricane"/> <a href="https://maplestory.fandom.com/wiki/Hurricane" target="_blank" rel="noreferrer noopener">Hurricane</a>, <img src="/class-icons/heroes/phantom/mille-aiguilles.png" alt="Skill Mille Aiguilles"/> <a href="https://maplestory.fandom.com/wiki/Mille_Aiguilles" target="_blank" rel="noreferrer noopener">Mille Aiguilles</a>, <img src="/class-icons/heroes/mercedes/ishtars-ring.png" alt="Skill Ishtar's Ring"/> <a href="https://maplestory.fandom.com/wiki/Ishtar's_Ring" target="_blank" rel="noreferrer noopener">Ishtar's Ring</a>, <img src="/class-icons/resistance/xenon/beam-dance.png" alt="Skill Beam Dance"/> <a href="https://maplestory.fandom.com/wiki/Beam_Dance" target="_blank" rel="noreferrer noopener">Beam Dance</a>, or <img src="/class-icons/resistance/wild-hunter/wild-arrow-blast.png" alt="Skill Wild Arrow Blast"/> <a href="https://maplestory.fandom.com/wiki/Wild_Arrow_Blast" target="_blank" rel="noreferrer noopener">Wild Arrow Blast</a> are not affected by Attack Speed</p>
            <p><strong>[Note]: </strong>All mage classes are not affected by their weapon's Attack Speed. Instead, all skill casts use a base cast speed of Average (Stage 4) regardless of weapon</p>
            <VideoAd/>
            <h2>Savior Update Change</h2>
            <p>Prior to the Savior Update, Attack Speed referred to AS0 as the fastest and AS9 as the slowest. After the Savior Update, Stage 10 is the fastest and Stage 1 is the slowest. As well, the Weapon Speed "Normal" is now called "Average". For applicable regions, Stage 8 (AS2) is the Soft Cap and Stage 10 (AS0) is the Hard Cap.</p>
            <p>In short, the Attack Speed numbering now increases instead of decreasing. <strong>This page uses the Post-Savior formatting</strong></p>
            <p>Below is a reference for converting from the old format to the new format from slowest to fastest:</p>
            <ul>
                <li>AS9 -&gt; Stage 1</li>
                <li>AS8 -&gt; Stage 2</li>
                <li>AS7 -&gt; Stage 3</li>
                <li>AS6 -&gt; Stage 4</li>
                <li>AS5 -&gt; Stage 5</li>
                <li>AS4 -&gt; Stage 6</li>
                <li>AS3 -&gt; Stage 7</li>
                <li>AS2 -&gt; Stage 8</li>
                <li>AS1 -&gt; Stage 9</li>
                <li>AS0 -&gt; Stage 10</li>
            </ul>
            <h2>Weapon Attack Speeds</h2>
            <h3>Fast (6)</h3>
            <ul>
                <li>Dagger [1H] (Fast 6)
                    <ul>
                        <li>Sweetwater is (Faster 7)</li>
                    </ul>
                </li>
                <li>Claw [2H] (Fast 6)
                    <ul>
                        <li>Genesis is (Fast 5)</li>
                    </ul>
                </li>
                <li>Chain [1H] (Fast 6)</li>
                <li>Ritual Fan [1H] (Fast 6)</li>
                <li>Bladecaster / Tuner [1H] (Fast 6)</li>
                <li>Whispershot / Breath Shooter [1H] (Fast 6)</li>
                <li>Chakram [2H] (Fast 6)</li>
            </ul>
            <h3>Fast (5)</h3>
            <ul>
                <li>Sword [1H] (Fast 5)</li>
                <li>Axe [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater Axe is (Average 4)</li>
                    </ul>
                </li>
                <li>Blunt Weapon [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater Mace is (Average 4)</li>
                    </ul>
                </li>
                <li>Soul Shooter [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater is (Average 4)</li>
                    </ul>
                </li>
                <li>Polearm [2H] (Fast 5)
                    <ul>
                        <li>Sweetwater is (Average 4)</li>
                    </ul>
                </li>
                <li>Cane [1H] (Fast 5)</li>
                <li>Knuckle [2H] (Fast 5)</li>
                <li>Gun [2H] (Fast 5)</li>
                <li>Whip Blade [1H] (Fast 5)</li>
                <li>Katana [2H] (Fast 5)</li>
                <li>Arm Cannon [2H] (Fast 5)</li>
            </ul>
            <h3>Average (4)</h3>
            <ul>
                <li>Wand [1H] (Average 4)</li>
                <li>Shining Rod [1H] (Average 4)</li>
                <li>Sword [2H] (Average 4)</li>
                <li>Axe [2H] (Average 4)</li>
                <li>Blunt Weapon [2H] (Average 4)</li>
                <li>Spear [2H] (Average 4)</li>
                <li>Bow [2H] (Average 4)</li>
                <li>Crossbow [2H] (Average 4)</li>
                <li>Dual Bowguns [2H] (Average 4)</li>
                <li>Desperado [1H] (Average 4)</li>
                <li>Scepter [1H] (Average 4)</li>
                <li>Psy-limiter [1H] (Average 4)</li>
                <li>Alpha Long Sword [1H] (Average 4)</li>
                <li>Lucent Gauntlet [1H] (Average 4)</li>
                <li>Ancient Bow [1H] (Average 4)</li>
            </ul>
            <h3>Slow (2)</h3>
            <ul>
                <li>Staff [1H] (Slow 2)
                    <ul>
                        <li>Elemental Staves is (Fast 6)</li>
                        <li>ACS Staff and Genesis is (Average 4)</li>
                    </ul>
                </li>
                <li>Hand Cannon [2H] (Slow 2)</li>
                <li>Kanna Fan [2H] (Slow 2)
                    <ul>
                        <li>ACS and Genesis is (Average 4)</li>
                    </ul>
                </li>
                <li>Beta Heavy Sword [1H] (Slow 2)</li>
            </ul>
            <BannerAdOne/>
            <h2>Weapon Boosting Skills and Sources</h2>
            <p>All classes have a passive or buff <img src="/class-icons/flora/khali/chakram-booster.png" alt="Skill Chakram Booster"/> <img src="/class-icons/heroes/evan/agile-magic.png" alt="Skill Agile Magic"/> Weapon Booster skill that increases your Attack Speed by +2 stages</p>
            <p>A few classes have skills other than their typical weapon boosting skill that further that boosts their attack speed (i.e. Buccaneer or Thunder Breaker's <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> <a href="https://maplestory.fandom.com/wiki/Speed_Infusion" target="_blank" rel="noreferrer noopener">Speed Infusion</a> provides another +2 AS, a Kaiser using <img src="/class-icons/nova/kaiser/dragon-link.png" alt="Skill Dragon Link"/> key-command skills when their Dragon Gauge is filled provides another +2 AS, etc.)</p>
            <p>As well, there are sources beyond your class's skills that you can obtain to further increase your Attack Speed (i.e. +1 AS Inner Ability +1 AS from <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> <a href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noreferrer noopener">Decent Speed Infusion</a>, +1 AS from <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <a href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noreferrer noopener">Extreme Green Potion</a> from Monster Park, etc.)</p>
            <h2>Calculating your final attack speed</h2>
            <p>The actual math in calculating your final Attack Speed is very easy. You just take your weapon's Attack Speed then add it by the total Attack Speed boosts you get from your skills and sources</p>
            <h3>Examples:</h3>
            <p>A Dark Knight wielding a <img src="/images/equipment/fafnir-brionak.png" alt="Eqp Fafnir Brionak"/> Fafnir Brionak, which is Normal (4). The Dark Knight uses their <img src="/class-icons/explorers/dark-knight/agile-arms.png" alt="Skill Agile Arms"/> Weapon Booster skill that gives +2 AS, plus they have <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> Decent Speed Infusion that gives +1 AS (for a total of +3 AS). Thus, their final attack speed is: Normal (4) + (+3 AS) = Faster (7)</p>
            <p>A Cannoneer with a <img src="/images/equipment/fafnir-lost-cannon.png" alt="Eqp Fafnir Lost Cannon"/> Fafnir Lost Cannon, which is Slow (2). The Cannoneer gets +2 AS from their <img src="/class-icons/explorers/cannoneer/agile-cannons.png" alt="Skill Agile Cannons"/> Weapon Booster skill, +1 AS from the <img src="/class-icons/explorers/cannoneer/reinforced-cannon.png" alt="Skill Reinforced Cannon"/> Reinforced Cannon skill, +1 AS from the <img src="/class-icons/explorers/cannoneer/cannon-overload.png" alt="Skill Cannon Overload"/> Cannon Overload skill, +1 AS from the <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> Extreme Green Potion (for a total of +5 AS). Thus, their final attack speed is: Slow (2) + (+5 AS) = Faster (7)</p>
            <p>However, there TWO speed caps in place to prevent players from going crazy over attack speed</p>
            <BannerAdTwo/>
            <h2>Speed Cap 1 - The Soft Speed Cap</h2>
            <p>The first speed cap is the Soft Speed Cap, which is Fastest (8). Most attack speed boosting sources and skills cannot bypass the soft speed cap, including, but not limited to the following:</p>
            <ul>
                <li><img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png"/> <a href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noopener noreferrer">Decent Speed Infusion</a></li>
                <li>+1 Attack Speed Inner Ability</li>
                <li>Almost all Weapon Booster skills from your class' skills</li>
            </ul>
            <h3>Example:</h3>
            <p>A Shadower with a <img src="/images/equipment/fafnir-damascus.png" alt="Eqp Fafnir Damascus"/> Fafnir Damascus, which is Fast (6). The Shadower gets +2 AS from their <img src="/class-icons/explorers/shadower/agile-daggers.png" alt="Skill Agile Daggers"/> Weapon Booster skill. They also have +1 AS Inner Ability. You may think her final attack speed is Fastest (1), since Fast (6) + (+3 AS) = Fastest (9). However, their weapon boosting skill nor the +1 AS inner ability can break the soft speed cap of Fastest (8). Thus, they are stuck at Fastest (8) despite their inner ability</p>
            <h2>Speed Cap 2 - The Hard Speed Cap</h2>
            <p>The absolute fastest Attack Speed a player can achieve is Fastest (10), no exceptions. Fastest (10) is thus known as the Hard Speed Cap</p>
            <p>There are a handful of Attack Speed boost sources that can ignore the soft speed cap of Faster (8). These are the following:</p>
            <ul>
                <li>Rune of Decay (+1 AS)</li>
                <li>Rune of Destruction (+1 AS)</li>
                <li><img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <a href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noopener noreferrer">Extreme Green Potion</a> (+1 AS)</li>
                <li><img src="/images/items/crimson-queen-soul.png" alt="Use Crimson Queen Soul"/> <a href="https://maplestory.fandom.com/wiki/Fickle_Queen" target="_blank" rel="noopener noreferrer">Crimson Queen soul's attack speed buff</a> (+1 AS)</li>
                <li>Battle Mage's <img src="/class-icons/resistance/battle-mage/hasty-aura.png" alt="Skill Hasty Aura"/> <a href="https://maplestory.fandom.com/wiki/Hasty_Aura" target="_blank" rel="noopener noreferrer">Hasty Aura</a> (+2 AS)</li>
                <li>Zero's <img src="/class-icons/other/zero/divine-speed.png" alt="Skill Divine Speed"/> <a href="https://maplestory.fandom.com/wiki/Divine_Speed" target="_blank" rel="noopener noreferrer">Divine Speed</a> (+1 AS)</li>
                <li>Kaiser's <img src="/class-icons/nova/kaiser/kaisers-majesty.png" alt="Skill Kaiser's Majesty"/> <a href="https://maplestory.fandom.com/wiki/Kaiser's_Majesty" target="_blank" rel="noopener noreferrer">Kaiser's Majesty</a> (+1 AS)</li>
            </ul>
            <p>You will need only one of these Attack Speed boosts to break through the Soft Speed cap to be able to reach the Hard Speed cap</p>
            <strong>Note:</strong> Depending on your server, you may have a Hard Speed Cap of Stage 8. GMS and MSEA has a Hard Speed Cap of Stage 10
            <h3>Example:</h3>
            <p>An Aran with the <img src="/images/equipment/eviscerator.png" alt="Eqp Eviscerator"/> Eviscerator polearm, which is Slower (1). The Aran gets +2 AS from their <img src="/class-icons/heroes/aran/agile-polearms.png" alt="Skill Agile Polearms"/> Weapon Booster skill, +1 AS from <img src="/class-icons/heroes/aran/polearm-mastery.png" alt="Skill Polearm Mastery"/> Polearm Mastery skill, +1 AS from <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> Decent Speed Infusion, +1 from Inner Ability, and +1 from <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> Extreme Green Potion (for a total of +6 AS). Thus, their attack speed would be: Slower (1) + (+6 AS) = Fastest (7)</p>
            <p>Later, they find a Rune of Swiftness and uses it, granting them another +3 AS that can ignore the soft speed cap (for a total of +9 AS). Their final Attack Speed is Fastest (10)</p>
            <BannerAdThree/>
        </ContentPage>
    );
}

export default AttackSpeed;
