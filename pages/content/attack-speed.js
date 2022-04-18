import React from 'react';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import { AdInArticleBanner, AdOutArticle } from '../../components/Ads';

function AttackSpeed() {
    return (
        <ContentPage>
            <Head>
                <title>Attack Speed | Grandis Library</title>
                <meta content={"An explanation of Attack Speed and the difference between Soft Cap and Hard Cap attack speed"} name="description"/>
            </Head>
            <ContentTitle>Attack Speed</ContentTitle>
            <p>Modified from: <a href="http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303" target="_blank" rel="noreferrer noopener">http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303</a></p>
            <h2>Attack Speed of your Weapon</h2>
            <p>Each Weapon in the game has an Attack Speed value in their description as follows:</p>
            <p>Faster &gt; Fast &gt; Normal &gt; Slow &gt; Slower</p>
            <p>The values for each Attack Speed can be classified as such:</p>
            <ul>
                <li>Faster (3)</li>
                <li>Fast (4)</li>
                <li>Fast (5)</li>
                <li>Normal (6)</li>
                <li>Slow (7)</li>
                <li>Slow (8)</li>
                <li>Slower (9)</li>
            </ul>
            <p>Fast and Slow have two values to them because there are certain weapons that have the same Attack Speed label but may be noticeably faster than the other</p>
            <p>There are also 3 values greater than Faster (3) but no weapon naturally has an Attack Speed value above Faster (3). They can be classified as such:</p>
            <ul>
                <li>Fastest (0)</li>
                <li>Fastest (1)</li>
                <li>Fastest (2)</li>
            </ul>
            <p><strong>[Note]: </strong>Hurricane-type / Key-down skills like <img src="/class-icons/explorers/bowmaster/hurricane.png" alt="Skill Hurricane"/> <a href="https://maplestory.fandom.com/wiki/Hurricane" target="_blank" rel="noreferrer noopener">Hurricane</a>, <img src="/class-icons/heroes/phantom/mille-aiguilles.png" alt="Skill Mille Aiguilles"/> <a href="https://maplestory.fandom.com/wiki/Mille_Aiguilles" target="_blank" rel="noreferrer noopener">Mille Aiguilles</a>, <img src="/class-icons/heroes/mercedes/ishtars-ring.png" alt="Skill Ishtar's Ring"/> <a href="https://maplestory.fandom.com/wiki/Ishtar's_Ring" target="_blank" rel="noreferrer noopener">Ishtar's Ring</a>, <img src="/class-icons/resistance/xenon/beam-dance.png" alt="Skill Beam Dance"/> <a href="https://maplestory.fandom.com/wiki/Beam_Dance" target="_blank" rel="noreferrer noopener">Beam Dance</a>, or <img src="/class-icons/resistance/wild-hunter/wild-arrow-blast.png" alt="Skill Wild Arrow Blast"/> <a href="https://maplestory.fandom.com/wiki/Wild_Arrow_Blast" target="_blank" rel="noreferrer noopener">Wild Arrow Blast</a> are not affected by Attack Speed</p>
            <p><strong>[Note]: </strong>All mages except Battle Mage are not affected by their weapon's Attack Speed. Instead, all attacks have a cast speed of Normal (6) regardless of weapon which is still affected by Attack Speed </p>
            <h2>Weapon Attack Speeds</h2>
            <h3>Fast (4)</h3>
            <ul>
                <li>Dagger [1H] (Fast 4)
                    <ul>
                        <li>Sweetwater is (Faster 3)</li>
                    </ul>
                </li>
                <li>Claw [2H] (Fast 4)
                    <ul>
                        <li>Genesis is (Fast 5)</li>
                    </ul>
                </li>
                <li>Chain [1H] (Fast 4)</li>
                <li>Ritual Fan [1H] (Fast 4)</li>
                <li>Bladecaster / Tuner [1H] (Fast 4)</li>
                <li>Whispershot / Breath Shooter [1H] (Fast 4)</li>
            </ul>
            <h3>Fast (5)</h3>
            <ul>
                <li>Sword [1H] (Fast 5)</li>
                <li>Axe [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater Axe is (Normal 6)</li>
                    </ul>
                </li>
                <li>Blunt Weapon [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater Mace is (Normal 6)</li>
                    </ul>
                </li>
                <li>Soul Shooter [1H] (Fast 5)
                    <ul>
                        <li>Sweetwater is (Normal 6)</li>
                    </ul>
                </li>
                <li>Polearm [2H] (Fast 5)
                    <ul>
                        <li>Sweetwater is (Normal 6)</li>
                    </ul>
                </li>
                <li>Cane [1H] (Fast 5)</li>
                <li>Knuckle [2H] (Fast 5)</li>
                <li>Gun [2H] (Fast 5)</li>
                <li>Whip Blade [1H] (Fast 5)</li>
                <li>Katana [2H] (Fast 5)</li>
                <li>Arm Cannon [2H] (Fast 5)</li>
            </ul>
            <h3>Normal (6)</h3>
            <ul>
                <li>Wand [1H] (Normal 6)</li>
                <li>Shining Rod [1H] (Normal 6)</li>
                <li>Sword [2H] (Normal 6)</li>
                <li>Axe [2H] (Normal 6)</li>
                <li>Blunt Weapon [2H] (Normal 6)</li>
                <li>Spear [2H] (Normal 6)</li>
                <li>Bow [2H] (Normal 6)</li>
                <li>Crossbow [2H] (Normal 6)</li>
                <li>Dual Bowguns [2H] (Normal 6)</li>
                <li>Desperado [1H] (Normal 6)</li>
                <li>Scepter [1H] (Normal 6)</li>
                <li>Psy-limiter [1H] (Normal 6)</li>
                <li>Alpha Long Sword [1H] (Normal 6)</li>
                <li>Lucent Gauntlet [1H] (Normal 6)</li>
                <li>Ancient Bow [1H] (Normal 6)</li>
            </ul>
            <h3>Slow (8)</h3>
            <ul>
                <li>Staff [1H] (Slow 8)
                    <ul>
                        <li>Elemental Staves is (Fast 4)</li>
                        <li>ACS Staff and Genesis is (Normal 6)</li>
                    </ul>
                </li>
                <li>Hand Cannon [2H] (Slow 8)</li>
                <li>Kanna Fan [2H] (Slow 8)
                    <ul>
                        <li>ACS and Genesis is (Normal 6)</li>
                    </ul>
                </li>
                <li>Beta Heavy Sword [1H] (Slow 8)</li>
            </ul>
            {/* <AdOutArticle/> */}
            <h2>Weapon Boosting Skills and Sources</h2>
            <p>All classes have a standard <img src="/class-icons/heroes/aran/polearm-booster.png" alt="Skill Polearm Booster"/> <img src="/class-icons/heroes/evan/magic-booster.png" alt="Skill Magic Booster (Evan)"/> Weapon Booster skill that increases your attack speed by +2 stages</p>
            <p>A few classes have skills other than their typical weapon boosting skill that further that boosts their attack speed (i.e. Buccaneer or Thunder Breaker's <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> <a href="https://maplestory.fandom.com/wiki/Speed_Infusion" target="_blank" rel="noreferrer noopener">Speed Infusion</a> provides another +2 AS, a Kaiser using <img src="/class-icons/nova/kaiser/dragon-link.png" alt="Skill Dragon Link"/> key-command skills when their Dragon Gauge is filled provides another +2 AS, etc.)</p>
            <p>As well, there are sources beyond your class's skills that you can obtain to further increase your Attack Speed (i.e. +1 AS Inner Ability +1 AS from <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> <a href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noreferrer noopener">Decent Speed Infusion</a>, +1 AS from <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <a href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noreferrer noopener">Extreme Green Potion</a> from Monster Park, etc.)</p>
            <h2>Calculating your final attack speed</h2>
            <p>The actual math in calculating your final Attack Speed is very easy. You just take your weapon's Attack Speed then subtract it by the total Attack Speed boosts you get from your skills and sources</p>
            <h3>Examples:</h3>
            <p>A Dark Knight wielding a <img src="/images/equipment/fafnir-brionak.png" alt="Eqp Fafnir Brionak"/> Fafnir Brionak, which is Normal (6). The Dark Knight uses their <img src="/class-icons/explorers/dark-knight/weapon-booster.png" alt="Skill Weapon Booster (Spearman)"/> Weapon Booster skill that gives +2 AS, plus they have <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> Decent Speed Infusion that gives +1 AS (for a total of +3 AS). Thus, their final attack speed is: Normal (6) - (+3 AS) = Faster (3)</p>
            <p>A Cannoneer with a <img src="/images/equipment/fafnir-lost-cannon.png" alt="Eqp Fafnir Lost Cannon"/> Fafnir Lost Cannon, which is Slow (8). The Cannoneer gets +2 AS from their <img src="/class-icons/explorers/cannoneer/cannon-booster.png" alt="Skill Cannon Booster"/> Weapon Booster skill, +1 AS from the <img src="/class-icons/explorers/cannoneer/reinforced-cannon.png" alt="Skill Reinforced Cannon"/> Reinforced Cannon skill, +1 AS from the <img src="/class-icons/explorers/cannoneer/cannon-overload.png" alt="Skill Cannon Overload"/> Cannon Overload skill, +1 AS from the <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> Extreme Green Potion (for a total of +5 AS). Thus, their final attack speed is: Slow (8) - (+5 AS) = Faster (3)</p>
            <p>However, there TWO speed caps in place to prevent players from going crazy over attack speed</p>
            <h2>Speed Cap 1 - The Soft Speed Cap</h2>
            <p>The first speed cap is the Soft Speed Cap, which is Fastest (2). Most attack speed boosting sources and skills cannot bypass the soft speed cap, including, but not limited to the following:</p>
            <ul>
                <li><img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" width={32} height={32}/> <a href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noopener noreferrer">Decent Speed Infusion</a></li>
                <li>+1 Attack Speed Inner Ability</li>
                <li>Almost all Weapon Booster skills from your class' skills</li>
            </ul>
            <h3>Example:</h3>
            <p>A Shadower with a <img src="/images/equipment/fafnir-damascus.png" alt="Eqp Fafnir Damascus"/> Fafnir Damascus, which is Fast (4). The Shadower gets +2 AS from their <img src="/class-icons/explorers/shadower/dagger-booster.png" alt="Skill Dagger Booster"/> Weapon Booster skill. They also have +1 AS Inner Ability. You may think her final attack speed is Fastest (1), since Fast (4) - (+3 AS) = Fastest (1). However, their weapon boosting skill nor the +1 attack speed inner ability can break the soft speed cap of Fastest (2). Thus, they are stuck at Fastest (2) despite her inner ability</p>
            <h2>Speed Cap 2 - The Hard Speed Cap</h2>
            <p>The absolute fastest attack speed a player can achieve is Fastest (0), no exceptions. Fastest (0) is thus known as the Hard Speed Cap</p>
            <p>There are a handful of Attack Speed boost sources that can ignore the soft speed cap of Faster (2). These are the following:</p>
            <ul>
                <li>Rune of Decay (+1 attack speed)</li>
                <li>Rune of Destruction (+1 attack speed)</li>
                <li>Rune of Swiftness (+3 attack speed)</li>
                <li><img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <a href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noopener noreferrer">Extreme Green Potion</a> (+1 attack speed)</li>
                <li><img src="/images/items/crimson-queen-soul.png" alt="Use Crimson Queen Soul"/> <a href="https://maplestory.fandom.com/wiki/Fickle_Queen" target="_blank" rel="noopener noreferrer">Crimson Queen soul's attack speed buff</a> (+1 attack speed)</li>
                <li>Battle Mage's <img src="/class-icons/resistance/battle-mage/hasty-aura.png" alt="Skill Hasty Aura"/> <a href="https://maplestory.fandom.com/wiki/Hasty_Aura" target="_blank" rel="noopener noreferrer">Hasty Aura</a> (+2 attack speed)</li>
                <li>Zero's <img src="/class-icons/other/zero/divine-speed.png" alt="Skill Divine Speed"/> <a href="https://maplestory.fandom.com/wiki/Divine_Speed" target="_blank" rel="noopener noreferrer">Divine Speed</a> (+1 attack speed)</li>
                <li>Kaiser's <img src="/class-icons/nova/kaiser/kaisers-majesty.png" alt="Skill Kaiser's Majesty"/> <a href="https://maplestory.fandom.com/wiki/Kaiser's_Majesty" target="_blank" rel="noopener noreferrer">Kaiser's Majesty</a> (+1 attack speed)</li>
            </ul>
            <p>You will need only one of these Attack Speed boosts to break through the Soft Speed cap to be able to reach the Hard Speed cap</p>
            <strong>Note:</strong> Depending on your server, you may have a Hard Speed Cap of 2. GMS and MSEA has a Hard Speed Cap of 0
            <h3>Example:</h3>
            <p>An Aran with the <img src="/images/equipment/eviscerator.png" alt="Eqp Eviscerator"/> Eviscerator polearm, which is Slower (9). The Aran gets +2 AS from their <img src="/class-icons/heroes/aran/polearm-booster.png" alt="Skill Polearm Booster"/> Weapon Booster skill, +1 AS from <img src="/class-icons/heroes/aran/polearm-mastery.png" alt="Skill Polearm Mastery"/> Polearm Mastery skill, +1 AS from <img src="/class-icons/common/speed-infusion.png" alt="Skill Speed Infusion"/> Decent Speed Infusion, +1 from Inner Ability, and +1 from <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> Extreme Green Potion (for a total of +6 AS). Thus, their attack speed would be: Slower (9) - (+6 AS) = Fastest (3)</p>
            <p>Later, they find a Rune of Swiftness and uses it, granting them another +3 attack speed that can ignore the soft speed cap (for a total of +9 attack speed). Their final Attack Speed is Fastest (0)</p>
            <AdOutArticle/>
        </ContentPage>
    );
}

export default AttackSpeed;