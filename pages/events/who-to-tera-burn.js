import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, VideoAd, StickyAd, BannerAdThree } from '../../components/Ads';

function WhoToTeraBurn() {
    return (
        <EventPage>
            <Head>
                <title>Who to Tera Burn | MapleStory | Grandis Library</title>
                <meta content={"A guide to help you choose a character to Tera Burn based on good Link Skills and Legion bonuses."} name="description"/>
            </Head>
            <ContentTitle>Who To Tera Burn</ContentTitle>
            <StickyAd/>
            <p>Modified from shrimpstation's: <a rel="noreferrer noopener" href="https://www.reddit.com/r/Maplestory/comments/gxbffr/ultimate_who_should_i_tera_burn_guide/" target="_blank">https://www.reddit.com/r/Maplestory/comments/gxbffr/ultimate_who_should_i_tera_burn_guide/</a></p>
            <h2>What makes a character good to burn?</h2>
            <p>Generally, burns are best for classes considered annoying and difficult to train or if you are seeking to create a new main character. Since Tera Burning goes to up Lv. 200 as opposed to Lv. 150 for Mega Burning, it’s a good time to get a character to Lv. 210 for their Lv. 3 Link Skill. There are also classes with good Legion System bonuses at Lv. 200 that are also useful if you already have your main Link Skills</p>
            <p>If you are using Tera Burning to create a new main character, any class is fine to choose from. Usually, for Tera Burn events, there are also rewards past Lv. 200 that help set you up for 5th Job as you reach certain levels</p>
            <p><strong>[Note]</strong>: You cannot burn the newest class release or Zero</p>
            <VideoAd/>
            <h3>Notably difficult or annoying classes to level:</h3>
            <ul>
                <li><img src="/class-icons/resistance/blaster/revolving-cannon-mastery.png" alt="Class Blaster"/> Blaster</li>
                <li><img src="/class-icons/explorers/buccaneer/octopunch-1.png" alt="Skill Octopunch"/> Buccaneer</li>
                <li><img src="/class-icons/explorers/dual-blade/bloody-storm.png" alt="Skill Bloody Storm"/> Dual Blade</li>
                <li><img src="/class-icons/explorers/hero/combo-attack.png" alt="Skill Combo Attack"/> Hero</li>
                <li><img src="/class-icons/explorers/marksman/snipe.png" alt="Skill Snipe"/> Marksman</li>
                <li><img src="/class-icons/resistance/mechanic/humanoid-mech.png" alt="Skill Humanoid Mech"/> Mechanic</li>
                <li><img src="/class-icons/heroes/mercedes/leap-tornado.png" alt="Skill Leap Tornado"/> Mercedes</li>
            </ul>
            <p><strong>[Note]</strong>:Explorer classes can job change using a <img src="/images/items/job-advancement-coin.png" alt="Etc Job Advancement Coin"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/4310086">[Job Advancement Coin]</a> to other Explorer classes within their job branch thus, you can level up a class with decent mobbing capabilities then job change to the desired class</p>
            <BannerAdOne/>
            <h3>Classes with Lv. 3 Link Skills / Good Legion Bonuses:</h3>
            <ul>
                <li>
                    <img src="/class-icons/nova/angelic-buster/trinity.png" alt="Skill Trinity"/> Angelic Buster - Provides buff that increases %Damage (+60%)
                    (90s cooldown)
                    <ul>
                        <li>Good for bossing for classes with burst-type attacks</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/heroes/aran/smash-swing.png" alt="Skill Smash Swing"/> Aran - Increases amount of EXP given from Combo Kill
                    orbs (900%)
                    <ul>
                        <li>Good for training characters pre-200</li>
                        <li><strong>[Legion]:</strong> Chance to recover 8% HP with each attack (has cooldown)</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/flora/ark/impending-death.png" alt="Class Ark"/> Ark - Grants a stacking %Damage buff (up to 5 times / 16%) when in
                    combat
                    <ul>
                        <li>Good for all classes</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/other/beast-tamer/friend-launcher.png" alt="Class Beast Tamer"/> Beast Tamer - +10% Crit Chance, +10% Boss Damage, +5%
                    Max HP/MP
                    <ul>
                        <li>Good if you require more %Crit Rate and %Boss Damage</li>
                        <li>[<strong>Legion]:</strong> +5% Ignore DEF</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/resistance/demon-avenger/exceed-double-slash.png" alt="Skill Exceed Double Slash"/> Demon Avenger - +15% Damage
                    <ul>
                        <li>Good for all classes</li>
                        <li><strong>[Legion]:</strong> +5% Boss Damage</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/resistance/demon-slayer/demon-thrash.png" alt="Skill Demon Thrash"/> Demon Slayer - +20% Boss Damage
                    <ul>
                        <li>Good for bossing</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/heroes/evan/mana-burst-i.png" alt="Skill Mana Burst I"/> Evan - Increases Rune EXP Duration by 70%
                    <ul>
                        <li>Good for training</li>
                        <li><strong>[Legion]: </strong>Chance to recover 8% MP with each attack (has cooldown)</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/nova/kaiser/tempest-blades.png" alt="Skill Tempest Blades"/> Kaiser - +20% Max HP
                    <ul>
                        <li>Good for training characters pre-200</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/heroes/luminous/equilibrium.png" alt="Class Luminous"/> Luminous - +20% Ignore DEF
                    <ul>
                        <li>Good for bossing</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/heroes/mercedes/leap-tornado.png" alt="Skill Leap Tornado"/> Mercedes - +20% EXP obtained
                    <ul>
                        <li>Good for training</li>
                        <li><strong>[Legion]</strong> - Skill Cooldown reduced by -5%</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/cygnus-knights/mihile/royal-guard.png" alt="Skill Royal Guard"/> Mihile - +100% Knockback Resistance 130s, 180s cooldown
                    <ul>
                        <li>Good for bossing for classes with &lt; 100% Knockback Resistance</li>
                        <li><strong>[Legion]</strong> - +2000 Max HP</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/heroes/phantom/mille-aiguilles.png" alt="Skill Mille Aiguilles"/> Phantom - +20% crit rate
                    <ul>
                        <li>Good for classes with &lt; 100% Crit Rate</li>
                        <li><strong>[Legion (Heroic World Recommended)]</strong> - Meso obtained +4%</li>
                    </ul>
                </li>
            </ul>
            <h3>Top 5 Tera Burns for Link Skills:</h3>
            <ul>
                <li>
                    <img src="/class-icons/link-skills/focus-spirit.png" alt="Skill Focus Spirit"/> Beast Tamer - +10% Crit Chance, +10% Boss Damage, +5%
                    Max HP/MP
                </li>
                <li><img src="/class-icons/link-skills/rune-persistence.png" alt="Skill Rune Persistence"/> Evan - Increased Rune EXP Duration by 70%</li>
                <li>
                    <img src="/class-icons/link-skills/elven-blessing.png" alt="Skill Elven Blessing (Linked)"/> Mercedes - +20% EXP obtained
                </li>
                <li>
                    <img src="/class-icons/link-skills/knights-watch.png" alt="Skill Knight's Watch"/> Mihile - +100% Knockback Resistance 130s, 3 min
                    cooldown
                </li>
                <li><img src="/class-icons/link-skills/phantom-instinct.png" alt="Skill Phantom Instinct"/> Phantom - +20% Crit Rate</li>
            </ul>
            <BannerAdTwo/>
            <h3>Good Legion Bonuses + Lv. 2 Link Skill that may be hard to level:</h3>
            <ul>
                <li>
                    <img src="/class-icons/resistance/blaster/revolving-cannon-mastery.png" alt="Class Blaster"/> Blaster - +5% Ignore DEF
                    <ul>
                        <li><strong>[Link Skill]:</strong> Invincibility after death</li>
                    </ul>
                </li>
                <li><img src="/class-icons/explorers/corsair/rapid-fire.png" alt="Skill Rapid Fire"/> Corsair - +10% Summon Duration</li>
                <li>
                    <img src="/class-icons/sengoku/hayato/normal-stance.png" alt="Skill Normal Stance Bonus"/> Hayato - +5% Crit Damage
                    <ul>
                        <li><strong>[Link Skill]: </strong>+15 All Stat, +15 Attack &amp; Magic Attack</li>
                    </ul>
                </li>
                <li><img src="/class-icons/explorers/marksman/snipe.png" alt="Skill Snipe"/> Marksman - +4% Crit Rate</li>
                <li>
                    <img src="/class-icons/resistance/mechanic/humanoid-mech.png" alt="Skill Humanoid Mech"/> Mechanic - +20% Buff Duration
                    <ul>
                        <li><strong>[Link Skill]:</strong> Invincibility after death</li>
                    </ul>
                </li>
                <li>
                    <img src="/class-icons/explorers/night-lord/showdown.png" alt="Skill Showdown"/> Night Lord - +4% Crit Rate
                    <ul>
                        <li><strong>[Link Skill]: </strong>Passive buff that grants %Damage when an Abnormal Status is inflicted</li>
                    </ul>
                </li>
                <li><img src="/class-icons/heroes/shade/spirit-bond-max.png" alt="Skill Spirit Bond Max"/> Shade - +5% Crit Damage</li>
                <li>
                    <img src="/class-icons/other/zero/twin-blades-of-time.png" alt="Skill Twin Blades of Time"/>
                    <em><strong>[Cannot be burned] </strong></em>Zero - +12% EXP obtained
                </li>
            </ul>
            <h3>Top 5 Tera Burns for Legion:</h3>
            <ul>
                <li>
                    <img src="/class-icons/explorers/corsair/rapid-fire.png" alt="Skill Rapid Fire"/> Corsair - +10% Summon Duration
                    <ul>
                        <li>
                            Is an Explorer Pirate so you can train a Cannoneer to Lv. 200 and use a <img src="/images/items/job-advancement-coin.png" alt="Etc Job Advancement Coin"/>
                            <a href="https://maplestory.wiki/GMS/210.1.1/item/4310086">[Job Advancement Coin]</a> to change to Corsair
                        </li>
                    </ul>
                </li>
                <li><img src="/class-icons/sengoku/hayato/normal-stance.png" alt="Skill Normal Stance Bonus"/> Hayato - +5% Crit Damage</li>
                <li><img src="/class-icons/resistance/mechanic/humanoid-mech.png" alt="Skill Humanoid Mech"/> Mechanic - +20% Buff Duration</li>
                <li><img src="/class-icons/heroes/shade/spirit-bond-max.png" alt="Skill Spirit Bond Max"/> Shade - +5% Crit Damage</li>
                <li><img src="/class-icons/resistance/blaster/revolving-cannon-mastery.png" alt="Class Blaster"/> Blaster - +5% Ignore DEF</li>
            </ul>
            <h3>Notes:</h3>
            <hr/>
            <p>Ignore DEF is calculated oddly; you basically want a few big singular sources as opposed to lots of small ones. You can get a maximum of 12% IED from Legion attacker bonuses but 40% IED from the actual Legion Board, but basically for beginners, Luminous IED {'>'} Legion IED</p>
            <p>Hayato’s link and Evan’s legion are not considered good for endgame but can be useful for training mules</p>
            <p>Corsair Legion bonus is sometimes not considered useful as many summons have 100% uptime. Corsair Legion bonus also applies to soul weapon summons such as Lucid soul</p>
            <p>Explorer Thief Link Skill may not seem good at first but synergizes well with Explorer Mage (which applies a debuff to enemies including bosses)</p>
            <hr/>
            <h3>Credits:</h3>
            <p>shrimpstation</p>
            <BannerAdThree/>
        </EventPage>
    )
}

export default WhoToTeraBurn
