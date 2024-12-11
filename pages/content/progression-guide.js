import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, BannerAdThree, VideoAd, StickyAd } from '../../components/Ads';
import TrainingMap from '../../components/content/TrainingMap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import Fuse from 'fuse.js';
import styled from 'styled-components';

import maps from '../../special/training-maps.json';

// Swiper element used for the training map
const TrainingMapSwiper = styled(Swiper)`
    width: 90%;
    max-height: 50rem;
    min-height: 50rem;
    overflow: hidden;
`;

// Filter search bar for training map
const TrainingMapSearch = styled.input`
    margin: 0 0 1.5rem 0;
    padding-left: 1rem;
    width: 95%;
    height: 3rem;
    border: none;
    -webkit-filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
    filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
`;

// Used to center search bar for training map
const TrainingMapSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

function ProgressionGuide() {
    return (
        <ContentPage>
            <Head>
                <title>Progression Guide | MapleStory | Grandis Library</title>
                <meta content={"A beginner-friendly guide that explains important content and concepts such as equipment, bosses, training maps, quests, 5th Job Advancement, and more."} name="description"/>
            </Head>
            <ContentTitle>Progression Guide</ContentTitle>
            <StickyAd/>
            <p>This guide will cover useful content for progression. This is not a step by step guide but instead a guide to help players get started. For info on all the content in MapleStory, check out the <a href="https://www.grandislibrary.com/contents/level-content-guide" target="_blank" rel="noreferrer noopener">Level Content Guide</a>
            </p>
            <h3 id="top">Quick Jumps</h3>
            <ul>
                <li className="quick-jump"><Link smooth href="#intro">Introduction</Link></li>
                <li className="quick-jump"><Link smooth href="#jobadv">Job Advancements</Link></li>
                <li className="quick-jump"><Link smooth href="#apsp">SP + AP Distribution</Link></li>
                <li className="quick-jump"><Link smooth href="#inner">Inner Ability</Link></li>
                <li className="quick-jump"><Link smooth href="#pocket">Pocket Slot</Link></li>
                <li className="quick-jump"><Link smooth href="#emblem">Gold Emblem + 4th Job</Link></li>
                <li className="quick-jump"><Link smooth href="#powercrystal">Intense Power Crystal</Link></li>
                <li className="quick-jump"><Link smooth href="#hyper">Hyper Skills + Hyper Stats</Link></li>
                <li className="quick-jump"><Link smooth href="#140">Lv. 140 and Beyond</Link></li>
                <li className="quick-jump"><Link smooth href="#5th">5th Job Advancement &amp; Arcane River</Link></li>
                <li className="quick-jump"><Link smooth href="#matrix">V Matrix + Nodestones</Link></li>
                <li className="quick-jump"><Link smooth href="#legion">Legion System</Link></li>
                <li className="quick-jump"><Link smooth href="#rewardpoint">Reward Points + Maple Rewards Shop</Link></li>
                <li className="quick-jump"><Link smooth href="#auction">Auction House in Interactive Worlds</Link></li>
                <li className="quick-jump"><Link smooth href="#content">Important Content</Link></li>
                <li className="quick-jump"><Link smooth href="#questlines">Important Questlines to Complete</Link></li>
                <li className="quick-jump"><Link smooth href="#equipment">Equipment Content</Link>
                    <ul>
                        <li className="quick-jump"><Link smooth href="#spelltrace">Spell Tracing</Link>
                        </li>
                        <li className="quick-jump"><Link smooth href="#starforce">Star Forcing</Link>
                        </li>
                        <li className="quick-jump"><Link smooth href="#additionalstats">Bonus Stats</Link>
                        </li>
                        <li className="quick-jump"><Link smooth href="#transferhammer">Transfer Hammer</Link>
                        </li>
                        <li className="quick-jump"><Link smooth href="#epicgear">Epic Gear and so on</Link>
                        </li>
                    </ul>
                </li>
                <li className="quick-jump"><Link smooth href="#bosses">Bosses</Link></li>
                <li className="quick-jump"><Link smooth href="#dailyweekly">Daily and Weekly Quests</Link></li>
                <li className="quick-jump"><Link smooth href="#mapleplanner">Maple Planner</Link></li>
                <li className="quick-jump"><Link smooth href="#training">Training Maps</Link></li>
                <li className="quick-jump"><Link smooth href="#themedungeon">Theme Dungeons</Link></li>
                <li className="quick-jump"><Link smooth href="#quests">Quests</Link></li>
            </ul>
            <VideoAd/>
            <Introduction/>
            <JobAdvancement/>
            <StatDistribution/>
            <InnerAbility/>
            <LinkSkills/>
            <BannerAdOne/>
            <PocketSlot/>
            <FourthJob/>
            <IntensePowerCrystal/>
            <HyperSkills/>
            <Level140Beyond/>
            <FifthJob/>
            <BannerAdTwo/>
            <VMatrix/>
            <LegionSystem/>
            <RewardPoints/>
            <AuctionHouse/>
            <BannerAdThree/>
            <ImportantContent/>
            <ImportantQuestlines/>
            <EquipmentContent/>
            <SpellTracing/>
            <StarForcing/>
            <BonusStats/>
            <TransferHammer/>
            <EpicPotentialGear/>
            <EarlygameBossesOne/>
            <EarlygameBossesTwo/>
            <EarlygameBossesThree/>
            <EarlygameBossesFour/>
            <EarlygameBossesFive/>
            <MidgameBossesOne/>
            <MidgameBossesTwo/>
            <MidgameBossesThree/>
            <EndgameBossesOne/>
            <EndgameBossesTwo/>
            <EndgameBossesThree/>
            <EndgameBossesFour/>
            <DailyWeekly/>
            <MaplePlanner/>
            <TrainingMaps/>
            <ThemeDungeons/>
            <QuestContent/>
        </ContentPage>
    );
};

function Introduction(){
    return(
        <div>
            <ArticleHeaderTwo id="intro">Introduction</ArticleHeaderTwo>
            <hr/>
            <p>Some brief advice, don't worry about dailies and bosses until after Lv. 200 and 5th Job Advancement. Even past Lv. 200, focus on levelling up, filling all equipment slots, and completing pre-quests</p>
            <p>All classes are weak early on, especially if this is your first character. As you reach Lv. 200 and beyond, enemies get stronger and tougher but will become easier as you progress</p>
            <p>Choose classes look enjoyable or interesting. Don't rely on DPM charts or look for the 'best' class since to become as strong as they are suggested because it is a massive time sink. As well, DPM charts do not translate to the actual DPM in-game as they are created under very specific conditions</p>
            <p>Good luck on your Maple journey!!</p>
        </div>
    );
};

function JobAdvancement(){
    return(
        <div>
            <ArticleHeaderTwo id="jobadv">Job Advancements</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/job-advancement.png" alt="Job Advancement"/>
            <p>Most classes gain new skills through Job Advancements at Lv. 10, 30, 60, 100, 200, and 260. These are known as 1st, 2nd, 3rd, 4th, 5th, and 6th Job Advancements</p>
            <p>5th Job and 6th Job both have unique skill systems that are different from your 1st - 4th Job Advancements</p>
            <p>To start your Job Advancement, open your Maple Guide, "U" by default, and click on the button that labelled as "Job Advancement Quest"</p>
            <p><strong>[Note]</strong>: Dual Blades have two additional Job Advancements at Lv. 20 and Lv. 45 that are an add-on to your 1st and 2nd Job</p>
            <p><strong>[Note]</strong>: Zero do not have Job Advancements and instead unlock new skills by levelling up</p>
        </div>
    );
};

function StatDistribution(){
    return(
        <div>
            <ArticleHeaderTwo id="apsp">SP and AP Distribution</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/skill-ui.png" alt="Skill UI"/>
            <img className="repository-image" src="/images/info/stat-ui.png" alt="SP UI"/>
            <p>All characters can max all 1st - 4th Job skills</p>
            <p>A tip for allocating SP is to put 1 SP in each skill and then max skills that require the least SP to reach Master Level, then passives, buffs, and lastly attacks</p>
            <p>AP can be assigned using "Auto Assign" in the Character Info UI. 5 AP is gained each level up and 5 AP each Job Advancement from 3rd - 4th Job</p>
            <p><strong>[Note]</strong>: For Xenon, distribute your AP evenly between all 3 stats using Auto Assign. The game will let you know when you've reached the requirement for the Multilateral skills. Past Lv. 200, you continue to evenly distribute your AP</p>
            <p><strong>[Note]</strong>: For Explorer Pirates, choose STR only if you are creating a Buccaneer and DEX only if you are creating a Corsair</p>
        </div>
    );
};

function InnerAbility(){
    return(
        <div>
            <ArticleHeaderTwo id="inner">Inner Ability</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/inner-ability.png" alt="Inner Ability"/>
            <p>Inner Ability is located in the Character Info UI and is automatically unlocked at Lv. 50</p>
            <p>Inner Abilities are rereollable stats similar to Item Potentials but tied to each character. They can be rerolled using <img src="/images/items/medal-of-honor.png" alt="Item Medal of Honor"/> <img src="/images/items/special-medal-of-honor.png" alt="Boss Medal of Honor Item"/> Honor EXP</p>
            <p>Similar to Potentials, there are Rare, Epic, Unique, and Legendary tier stats. You can tier up by using Honor EXP to reroll your Inner Ability and rerolling will not lower your tier</p>
        </div>
    );
};

function LinkSkills(){
    return(
        <div>
            <h3>Link Skills</h3>
            <hr/>
            <img className="repository-image" src="/images/info/link-skill-ui.png" alt="Link Manager"/>
            <p>Upon reaching Lv. 70, each class has a Link Skill that can be shared with another character where both characters gain the effect of the Link Skill</p>
            <p>Link Skills improve at Level 120 (Skill Level 2) and in GMS again at Level 210 (Skill Level 3)</p>
            <p>Explorer and Cygnus Knights Link Skills can stack to increase the strength of the Link Skill by linking each unique class</p>
        </div>
    );
};

function PocketSlot(){
    return(
        <div>
            <ArticleHeaderTwo id="pocket">Pocket Slot</ArticleHeaderTwo>
            <hr/>
            <p>Upon reaching Lv. 30 Charm Trait, the equipment slot for Pocket Items is automatically unlocked</p>
            <p>Traits located in the Professions UI, "B" by default provide special bonuses upon reaching certain levels like unlocking Pocket Slot or increasing %Ignore DEF</p>
            <p>To increase your Charm, use <img src="/images/items/cologne.png" alt="Use Cologne"/> <img src="/images/items/premium-cologne.png" alt="Use Premium Cologne"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Cologne" target="_blank">Cologne</a>, <img src="/images/items/trait-boost-potion.png" alt="Use Trait Boost Potion"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Trait_Potion" target="_blank">Trait Boost Potions</a> found in Event Shops, increasing your Fame level, wearing special equipment or Cash Items, or changing your hair</p>
            <p>To learn more about Traits, check out: <a href="https://maplestorywiki.net/w/Traits" target="_blank" rel="noreferrer noopener">https://maplestorywiki.net/w/Traits</a></p>
        </div>
    );
};

function FourthJob(){
    return(
        <div>
            <ArticleHeaderTwo id="emblem">Gold Emblem + 4th Job</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/emblem-equip.png" alt="Emblem Item"/>
            <p>At Lv. 100, a free Gold Emblem is given by accepting a Lightbulb Quest on the left side of the screen. Emblems are important because like Weapons and Secondary Weapons, are the only equipment that can obtain %Ignore DEF and %Attack potential lines</p>
            <p><em>Emblems cannot obtain %Boss Damage</em></p>
            <p>Upon reaching 4th Job, you should upgrade all equipment and Star Force them to 10 stars if possible. It does not matter if the gear will be replaced, this will help you to defeat enemies</p>
        </div>
    );
};

function IntensePowerCrystal(){
    return(
        <div>
            <ArticleHeaderTwo id="powercrystal"> <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> Intense Power Crystals:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/collector-ui.png" alt="Intense Power Crystal Shop"/>
            <img className="repository-image" src="/images/info/quick-move.png" alt="Quick Move UI"/>
            <p>Most bosses drop <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystals]</a> that are sold for Mesos. The price of the Intense Power Crystal is determined by the difficulty of the boss, if the boss is daily or weekly, and the number of party members when clearing. The crystals are divided into the following categories:</p>
            <ul>
                <li><img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> Daily</li>
                <li><img src="/images/items/intense-power-crystal-weekly.png" alt="Etc Intense Power Crystal Weekly"/> Weekly</li>
                <li><img src="/images/items/intense-power-crystal-monthly.png" alt="Etc Intense Power Crystal Monthly"/> Monthly</li>
            </ul>
            <p>Intense Power Crystals are sold to the <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Collector" target="_blank">Collector</a> by pressing the "Quick Move" button below the minimap from any town. 
             accepts 180 crystals a week per world and resets on Thursdays 12am UTC. However, the Collector will only accept 12 weekly crystals</p>
        </div>
    );
};

function HyperSkills(){
    return(
        <div>
            <ArticleHeaderTwo id="hyper">Hyper Skills + Hyper Stats</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/hyper-skill-active-ui.png" alt="Hyper Active UI"/>
            <img className="repository-image" src="/images/info/hyper-skill-passive-ui.png" alt="Hyper Passive UI"/>
            <p>Upon reaching Lv. 140, Hyper Skills and Hyper Stats are unlocked. Hyper Skills have a passive and active category. Active Skills are unlocked at Lv. 140, 160, and 190. Passive Hyper Skills provide benefits typically to 4th Job skills. 1 SP is gained for your Passive Hyper Skills at Lv. 140, 150, 165, 180 and 190 (total of 5 SP)</p>
            <img className="repository-image" src="/images/info/hyper-stat-ui.png" alt="Hyper Stats UI"/>
            <p>Hyper Stats points are gained each level to allocate into stats like %Crit Rate, %Crit Damage, %Ignore DEF, %Damage, and %Boss Damage. As you level up a Hyper Stat, it will cost more to upgrade. The amount Hyper Stat points gained increases every 10 levels</p>
            <p>Hyper Stats are dependent on your current needs, thus there is no optimal build. For example, are you optimizing for bossing or mobbing? Do you need more damage or crit rate?</p>
            <p>A useful tool for deciding where to allocate your points can be found here: <a rel="noreferrer noopener" href="https://brendonmay.github.io/" target="_blank">SuckHard's Maplestory Calculators</a></p>
            <p>For more info on Hyper Stats, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Hyper_Stats" target="_blank">https://strategywiki.org/wiki/MapleStory/Hyper_Stats</a></p>
        </div>
    );
};

function Level140Beyond(){
    return(
        <div>
            <ArticleHeaderTwo id={140}>Level 140 and Beyond:</ArticleHeaderTwo>
            <hr/>
            <p>Upon reaching Lv. 140, remember to fill all equipment slots and Star Force each equipment to at least 12 Stars. As well, reveal all the potentials on your equipment and to use cubes to reroll for some %Main Stat or Epic Potential</p>
            <p>For more info on enhancing equipment, check out <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a></p>
            <p>For extra mesos, equipment, and <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank">Mystical Cubes</a>, try the following bosses from the &lt; 2k Main Stat section of the <a href="https://www.grandislibrary.com/contents/progression-guide#bosses">Bosses</a></p>
            <p>As well, complete <img src="/images/map-icons/maple-tour.png" alt="MapIcon Maple Tour"/> Maple Tour every day for Mesos</p>
        </div>
    );
};

function FifthJob(){
    return(
        <div>
            <ArticleHeaderTwo id="5th">5th Job Advancement &amp; Arcane River</ArticleHeaderTwo>
            <hr/>
            <p><strong>Mandatory Requirements to accept 5th Job Quest:</strong></p>
            <ul>
                <li>100 Star Force minimum accumulated total</li>
                <li>10 Star Force on Primary Weapon</li>
            </ul>
            <p><strong>Requirements to Job Advance:</strong> <img src="/images/npc/memory-keeper.png" alt="NPC Memory Keeper"/><img src="/images/npc/temple-keeper.png" alt="NPC Temple Keeper"/></p>
            <ul>
                <li>After talking to the Memory Keeper and Temple Keeper, you'll receive a quest called <a href="https://maplestory.wiki/GMS/251/quest/1461" target="_blank" rel="noreferrer noopener">"5th Job: Blessing of the Goddess"</a>. Once you've talked to all the Goddesses and completed their challenge, you can job advanced to 5th Job</li>
                <li>Visit <a href="https://maplestorywiki.net/w/Bowman_Instructional_School" target="_blank" rel="noreferrer noopener">: Bowman Instructional School</a> and press up on the <a href="https://maplestorywiki.net/w/Horizon_Portal" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul><li>Talk to "The Goddess of Maple World" to complete the quest</li></ul>
                </li>
                <li>Visit <a href="https://maplestorywiki.net/w/Deserted_Camp" target="_blank" rel="noreferrer noopener">Dark World Tree: Deserted Camp</a> and press up on the <a href="https://maplestorywiki.net/w/Horizon_Portal" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul><li>After talking to the "Goddess of Tynerum", defeat all enemies in a series of maps after being teleport</li></ul>
                </li>
                <li>Visit <a href="https://maplestorywiki.net/w/Great_Temple_Interior" target="_blank" rel="noreferrer noopener">Pantheon: Grand Temple Interior</a> and press up on the <a href="https://maplestorywiki.net/w/Horizon_Portal" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul><li>Talk to the "Goddess of Grandis" twice and defeat a weakened version of Magnus after being teleported</li></ul>
                </li>
                <li>Each goddess will give you an <img src="/images/items/arcane-stone.png" alt="Skill Arcane Stone"/> Arcane Stone which you can charge up by fighting monsters. Once the stone has been charged, you can use it again to gain some EXP
                <ul><li>You do not need to charge the stones up to Job Advance</li></ul></li>
            </ul>
            <p><strong>After Advancement, obtaining an Arcane Symbol:</strong> To effectively damage monsters in the Arcane River, Arcane Power is required similar to Star Force which you gain from equipping <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Arcane_Symbols" target="_blank">Arcane Symbols</a></p>
            <ul>
                <li>To obtain your Arcane Symbol, you must complete the quest <a href="https://maplestorywiki.net/w/Quests/206/A_Greater_Power" target="_blank" rel="noreferrer noopener">"A Greater Power"</a> located in your Lightbulb Quests. This quest is intentionally difficult as you have no Arcane Power</li>
                <li>The initial symbol you obtain is not a real Arcane Symbol yet until you complete the Vanishing Journey storyline. In the meantime, you must complete the story with the limited Arcane Power you have</li>
                <li><strong>[Tip]</strong>: If you are struggling to defeat the monsters, there is a Hyper Stat for Arcane Power, allocate some points temporarily until you get enough Arcane Power</li>
            </ul>
        </div>
    );
};

function VMatrix(){
    return(
        <div>
            <ArticleHeaderTwo id="matrix">5th Job V Matrix + Nodestones</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/v-matrix-ui.png" alt="V Matrix"/>
            <p>Unlike previous Job Advancements, in 5th Job, skills are gained from equipping "Nodes" into your V Matrix to unlock new skills and passive boosts to 1st - 4th Job skills. Nodes are gained by opening <img src="/images/items/nodestone.png" alt="Nodestone Item"/> Nodestones that are obtained from monsters in the Arcane River, Vanishing Journey Weekly Quest, Nodecrafting, and Event Shops</p>
            <img className="repository-image" src="/images/info/v-matrix-button.png" alt="Skill UI"/>
            <p>To view your V Matrix, open the Skill UI, "K" by default, and click to the "V" tab and press the "V Matrix" button at the top</p>
            <p>You will notice you have empty slots and locked slots. Additional slots are unlocked as by levelling up which will allow you to equip more Nodes and in turn more 5th Job Skills. Additionally, you can pay Mesos to unlock slots early. To equip a Node, double-click or drag them into an empty slot</p>
            <p>All classes have main 5th Job Skills that are exclusive to that class. There are also 5th Job Skills exclusive to a certain Class Group like Explorers or Cygnus Knights. Lastly, there are Common 5th Job skills that are available to all classes</p>
            <img className="repository-image" src="/images/info/node-enhance.png" alt="Enhancing Node"/>
            <img className="repository-image" src="/images/info/node-enhance-button.png" alt="Enhance Single Node"/>
            <p>SP is not gained normally like previous Job Advancements to level up your skills. Instead, skill levels are gained by enhancing equipped Nodes. Each Node will have a Rank and EXP associated with it. To enhance a Node, copies of the same Node are used to gain EXP to rank up a Node. Upgrading a Node's Rank will increase the associated skill's level</p>
            <p>There are 3 types of Nodes:</p>
            <p>
                <img src="/images/info/skill-node.png" alt="Skill Node" /><strong> Skill Nodes</strong>: These contain the main 5th Job Skills themselves</p>
            <ul>
                <li>A Skill Node has a max Rank of 25 or Master Level of is 25 (30 with <em>Matrix Points</em>)</li>
                <li>Only one copy of a Skill Node can be equipped at once</li>
            </ul>
            <p>
                <img src="/images/info/boost-node.png" alt="Boost Node"/><strong>Boost Nodes</strong>: These are passives that increase the %Final Damage of your 1st - 4th Job Skills. They also provide different bonuses based on the Skill Level of the node such as extra %Crit Rate or %Ignore DEF</p>
            <ul>
                <li>Each Boost Node will enhance 3 different Skills. When you hover over a boost node in your V Matrix, the Main Skill that is used for leveling up a Boost Node will be the skill at the top. You will need multiple Boost Nodes with the same Main Skill to upgrade a Boost Node</li>
                <li>Boost Nodes with the same Main Skill cannot be equipped together</li>
                <li>Each Boost Node has a max Rank of 25 but each boosted skill can reach a Master Level of 50 (60 with <em>Matrix Points</em>) by equipping two Boost Nodes that boost the same skill</li>
            </ul>
            <p>
                <img src="/images/info/special-node.png" alt="Special Node"/><strong> Special Nodes: </strong>These nodes provide a special effect that trigger once you've fulfilled a specific requirement</p>
            <ul>
                <li>They cannot be leveled up and have a timed duration however, the duration can be extended</li>
                <li>It is best to disassemble these nodes for Node Shards that are used to craft new Nodes</li>
            </ul>
            <h3>Matrix Points</h3>
            <img className="repository-image" src="/images/info/slot-enhancement-button.png" alt="Slot Enhancement Button"/>
            <img className="repository-image" src="/images/info/matrix-points.png" alt="Matrix Points"/>
            <p>Each time your character levels up, you gain a Matrix Point. Matrix Points are used to raise a Node's Rank but they are tied to the Node Slots themselves instead of the Node. Each slot can allocate up to 5 additional Ranks for a Node. This means each Skill Node or Boost Node can reach a max Rank of 30. You can assign your Matrix Points in the V Matrix by pressing the "Slot Enhancement" button</p>
            <h3>Node Enhancing</h3>
            <img className="repository-image" src="/images/info/v-matrix-enhance.png" alt="V Upgrade UI"/>
            <p>To enhance your Nodes, right-click a Node or press the "Enhance All" button to enhance multiple Nodes at once. Enhancing Nodes requires consuming multiple copies of the same Node to gain EXP to level up a Node. As mentioned previously, to enhance Boost Nodes, you need Nodes with the same Main Skill. All Nodes have a max Rank of 25 meaning each Node provides 25 Skill Levels for a skill</p>
            <p>To gain additional Nodes, you will need to open <img src="/images/items/nodestone.png" alt="Use Nodestone"/> <a href="https://maplestorywiki.net/w/Nodestone" target="_blank" rel="noreferrer noopener">Nodestones</a> which will give you a random Node for your class. You can obtain Nodestones from monster drops in the Arcane River, from the <a href="https://maplestorywiki.net/w/Quests/207/(Weekly_Quest)_Diligent_Research_Reward" target="_blank" rel="noreferrer noopener">Weekly Quest in Vanishing Journey</a>, Nodecrafting, and from Events</p>
            <p>There are also special Nodestones called <img src="/images/items/exp-nodestone.png" alt="Use EXP Nodestone"/> <a href="https://maplestorywiki.net/w/Experience_Nodestone" target="_blank" rel="noreferrer noopener">[Experience Nodestone]</a> which when opened provides an EXP Node that can be used on any Node as EXP. These Nodestones are only obtainable from Events</p>
            <h3>Node Disassembling</h3>
            <img className="repository-image" src="/images/info/disassemble-node-button.png" alt="Disassemble Node Button"/>
            <img className="repository-image" src="/images/info/disassemble-node.png" alt="Disassemble Node"/>
            <p>Nodes can be disassembled to gain Node Shards that are used to craft more Nodestones or a guaranteed Node. To disassemble Nodes, press on the "Disassemble Nodes" button beside the "Slot Enhancement" button</p>
            <p>You can select multiple Nodes to disassemble at a time or right click to select to disassemble a single Node</p>
            <h3>Nodecrafting</h3>
            <img className="repository-image" src="/images/info/node-skill-craft.png" alt="Node Crafting"/>
            <img className="repository-image" src="/images/info/custom-node-craft.png" alt="Custom Node Crafting"/>
            <p>Nodes can also be crafted by pressing the "Nodecrafting" button. To craft Nodes, you will need Node Shards which are obtained from disassembling Nodes</p>
            <p>In the Nodecrafting UI, select the skill you want to boost as the Main Skill on the Node and press the "Craft" button to get a Boost Node containing the specified Main Skill and 2 random skills. Do not press the "Craft Nodestone" button as you will craft a Nodestone instead</p>
            <p>Additionally, a Boost Node with a given combination of 3 skills can be crafted by pressing the "Craft Custom Boost Node" button however, this will cost more Node Shards</p>
        </div>
    );
};

function LegionSystem(){
    return(
        <div>
            <ArticleHeaderTwo id="legion">Legion System</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/legion-ui.png" alt="Legion Board"/>
            <img className="repository-image" src="/images/info/legion-legend.png" alt="Legion Legend"/>
            <p>The Legion System is unlocked upon completing one of the following:</p>
            <ul>
                <li>Accumulated total of 500 levels within your World</li>
                <li>Reached Lv. 200 and completed the 5th Job Advancement</li>
            </ul>
            <p>The Legion Board grid is divided by different stats. By assigning characters onto the grid, each character will provide a "Legion Bonus" effect and a stat bonus depending on where it is assigned</p>
            <p>The "Total Level" or "Legion Level" is based on your 42 highest level characters. The higher your Legion Level the more characters you can assign to your grid. By using <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestorywiki.net/w/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> your Legion Board can be upgraded by talking to <a href="https://maplestorywiki.net/w/Dame_Appropriation" target="_blank" rel="noreferrer noopener">Dame Appropriation</a> to upgrade your board. Legion Coins are gained passively based on your characters currently assigned to the grid</p>
            <p>Legion Coins are used to exchange items from <a href="https://maplestorywiki.net/w/Squire_Pancho_Sanza" target="_blank" rel="noreferrer noopener">Squire Pancho Sanza</a> such as:</p>
            <ul>
                <li><img src="/images/items/legion-expertise.png" alt="Use Legion's Expertise"/> [EXP Booster]</li>
                <li><img src="/images/items/legion-luck.png" alt="Use Legion's Luck"/> [Drop Rate Booster]</li>
                <li><img src="/images/items/legion-wealth.png" alt="Use Legion's Wealth"/> [Meso Rate Booster]</li>
                <li><img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls]</li>
                <li><img src="/images/items/hard-cube.png" alt="Use Hard Cube"/> [Hard Cube]</li>
                <li><img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> [Bonus Potential Scrolls]</li>
                <li><img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> [Powerful Rebirth Flames]</li>
            </ul>
        </div>
    );
};

function RewardPoints(){
    return(
        <div>
            <ArticleHeaderTwo id="rewardpoint">Reward Points + Maple Rewards Shop</ArticleHeaderTwo>
            <hr/>
            <p><img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points are used in the Cash Shop at the Maple Rewards Shop or to apply a 30% discount to certain Cash Shop purchases</p>
            <p>Reward Points expire at the end of the next month that the points were obtained. So if you obtained some Reward Points in August, the points would expire on September 30th</p>
            <p>The Maple Rewards Shop contains a variety of Cash Shop items available for purchase with Reward Points. There is a purchase limit to each item per month per account, and items restock every month</p>
            <p>Some notable items in the shop are:</p>
            <ul>
                <li><img src="/images/items/bright-cube.png" alt="Cash Bright Cube"/> <a href="https://maplestorywiki.net/w/Cube" target="_blank" rel="noreferrer noopener">[Bright Cube]</a></li>
                <li><img src="/images/items/glowing-cube.png" alt="Cash Glowing Cube"/> <a href="https://maplestorywiki.net/w/Cube" target="_blank" rel="noreferrer noopener">[Glowing Cube]</a></li>
                <li><img src="/images/items/premium-water-of-life.png" alt="Cash Premium Water of Life"/> <a href="https://maplestory.wiki/GMS/251/item/5689000" target="_blank" rel="noreferrer noopener">[Premium Water of Life]</a></li>
                <li><img src="/images/items/monster-park-additional-entry.png" alt="Cash Monster Park Additional Entry"/> <a href="https://maplestory.wiki/GMS/251/item/5252030" target="_blank" rel="noreferrer noopener">[Monster Park Additional Entry Ticket]</a></li>
                <li><img src="/images/items/pet-snack.png" alt="Cash Pet Snack"/> <a href="https://maplestory.wiki/GMS/251/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack] (Interactive Worlds only)</a></li>
                <li><img src="/images/items/etc-slot-coupon.png" alt="Use Etc Slot Coupon"/> [Etc/Set-up/Use/Equip/Storage Add 8 Inventory Slots] - Unlimited purchases (Interactive Worlds only)</li>
                <li><img src="/images/items/shielding-ward.png" alt="Cash Shielding Ward"/> <a href="https://maplestory.wiki/GMS/251/item/5064000" target="_blank" rel="noreferrer noopener">[Shielding Ward]</a> (Interactive Worlds only)</li>
                <li><img src="/images/items/shield-scroll.png" alt="Cash Shield Scroll"/> <a href="https://maplestory.wiki/GMS/251/item/5064100" target="_blank" rel="noreferrer noopener">[Shield Scroll]</a> (Interactive Worlds only)</li>
                <li><img src="/images/items/guardian-scroll.png" alt="Cash Guardian Scroll"/> <a href="https://maplestory.wiki/GMS/251/item/5064300" target="_blank" rel="noreferrer noopener">[Guardian Scroll]</a> (Interactive Worlds only)</li>
                <li><img src="/images/items/exp-special-coupon.png" alt="Cash EXP Special Coupon"/> <a href="https://maplestory.wiki/GMS/251/item/5211046" target="_blank" rel="noreferrer noopener">[1-day 2x EXP Special Coupon]</a> (Interactive Worlds only)</li>
                <li><img src="/images/items/platinum-scissors.png" alt="Cash Platinum Scissors of Karma"/> <a href="https://maplestory.wiki/GMS/251/item/5520001" target="_blank" rel="noreferrer noopener">[Platinum Scissors of Karma]</a> (Interactive Worlds only)</li>
            </ul>
            <p>Some ways to obtain <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points are:</p>
            <ul>
                <li>Defeating bosses and completing a quest in the pink giftbox tab on the left-hand side of the screen
                <ul>
                    <li>The giftbox should have stars on it and a "C" with a ribbon</li>
                    <li>The quests are automatically accepted each day, you just need to remember to hand it in or else it will not reset</li>
                </ul>
                </li>
                <li>Monster Collection Explorations</li>
                <li>Playing MapleStory M, the mobile game</li>
                <li>MAPLE Daily Gift Reward</li>
            </ul>
        </div>
    );
};

function AuctionHouse(){
    return(
        <div>
            <ArticleHeaderTwo id="auction">Auction House in Interactive Worlds:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/auction-house.png" alt="Auction House"/>
            <p>The Auction House is a system in Interactive Worlds to buy and sell items with other players. You can buy anything from equipment, consumables, or cosmetic items like chairs and cash clothing. As well, you can also buy <a rel="noreferrer noopener" href="https://maplestory.nexon.net/micro-site/53117" target="_blank">Wonderberry</a> pets here that pick up items for you</p>
            <p><img className="repository-image" src="/images/info/auction-house-button.png" alt="Auction House Button"/></p>
        </div>
    );
};

function ImportantContent(){
    return(
        <div>
            <ArticleHeaderTwo id="content">Important Content</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><strong>[Interactive Worlds] Spell Tracing</strong>: <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Traces are used for upgrading gear based on the number of "Remaining Enhancements" an equipment has
                    <ul>
                        <li><strong style={{color: '#ff6600'}}>[Heroic Worlds]</strong>: Can be sold for Mesos</li>
                    </ul>
                </li>
                <li><strong>Star Forcing</strong>: Gear enhancements that provide stats based on the number of succssful Star Force on an item</li>
                <li><strong>[Lv. 35] <a href="https://strategywiki.org/wiki/MapleStory/Professions" target="_blank" rel="noreferrer noopener">Professions / Crafting</a></strong>: Crafting may be useful if you cannot find new gear for earlier levels
                    <ul>
                        <li><img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <img src="/images/items/eternal-rebirth-flame.png" alt="Use Eternal Rebirth Flame"/> [Special Rebirth Flames] and <img src="/images/items/hard-cube.png" alt="Use Hard Cube"/> <img src="/images/items/solid-cube.png" alt="Use Solid Cube"/> [Special Cubes] can also be crafted using Professions</li>
                        <li><strong>[Traits Stats]</strong>: <a href="https://strategywiki.org/wiki/MapleStory/Traits" target="_blank" rel="noreferrer noopener">Traits</a> are also found in the Professions UI that grant small bonuses</li>
                    </ul>
                </li>
                <li><strong>[Lv. 50] <a href="https://strategywiki.org/wiki/MapleStory/Inner_Ability" target="_blank" rel="noreferrer noopener">Inner Ability</a></strong>: Rerollable stats similar to potentials but tied to your character that are rerolled using <img src="/images/items/medal-of-honor.png" alt="Use Medal of Honor"/>  <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> Honor EXP</li>
                <li><strong>[Lv. 70] </strong><a href="https://maplestorywiki.net/w/Link_Skill" target="_blank" rel="noreferrer noopener"><strong>Link Skills</strong></a>: Class-Unique skill that can be shared with another character in your World</li>
                <li><strong>[Lv. 100+] Star Force Maps</strong>: Training maps that require a minimum amount of Star Force Enhancements on your equipment to deal damage to monsters that have more HP but give more EXP</li>
                <li><img src="/images/map-icons/monster-park.png" alt="MapIcon MonsterPark"/> <strong>[Lv. 105+] <a href="https://maplestorywiki.net/w/Monster_Park" target="_blank" rel="noreferrer noopener">Monster Park</a></strong>: Stage-based dungeons that reward a considerable amount of EXP and <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestorywiki.net/w/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coin]</a> for exchanging items
                    <ul>
                        <li>Special shop sells special potions <img src="/images/items/extreme-red-potion.png" alt="Use Extreme Red Potion"/> <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <img src="/images/items/extreme-blue-potion.png" alt="Use Extreme Blue Potion"/> <img src="/images/items/extreme-gold-potion.png" alt="Use Extreme Gold Potion"/> that grant useful buffs</li>
                        <li>Completing Monster Park 77 times for each day of the week rewards a <img src="/images/equipment/seven-day-monster-parker.png" alt="Eqp Seven Day Monster Parker"/> <a href="https://maplestorywiki.net/w/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Medal]</a> that gives +10% Ignore Enemy Defence</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/maple-tour.png" alt="MapIcon Maple Tour"/> <strong>[Lv. 105+] </strong><strong>Maple Tour</strong>: Stage-based dungeons that reward Mesos and <img src="/images/items/maple-tour-coin.png" alt="Etc Maple Tour Coins"/> [Maple Tour Coins] for exchanging items
                    <ul>
                        <li>Mesos are accumulated and can be retrieved 7 days later for the full amount or retrieved earlier for half the amount</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <strong>[Lv.125+]<span style={{color: '#ff6600'}}>[Heroic World]</span> <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a></strong>: <img src="/images/equipment/royal-von-leon-suit.png" alt="Eqp Marx Von Leon Battle Suit"/> Royal Von Leon equipment dropped by the boss Von Leon is considered a Boss Item and gains additional Bonus Stats</li>
                <li><img src="/images/map-icons/yu-garden.png" alt="MapIcon Yu Garden"/> <strong>[Lv. 140] <span style={{color: '#ff6600'}}>[Heroic World]</span> <a href="https://maplestorywiki.net/w/Category:The_Far_East" target="_blank" rel="noreferrer noopener">The Far East (Yu Garden)</a></strong>: Provides an easy source of <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls] in Heroic Worlds</li>
                <li><strong>[SPECIAL] <a href="https://maplestorywiki.net/w/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: A system that provides useful stats which is unlocked upon accumulating a total of 500 levels within your World or after reaching Lv. 200 and completing the 5th Job Advancement. By assigning characters onto a grid, bonus stats are given to all characters in the same World. Additionally, <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestorywiki.net/w/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> are generated passively that can be exchanged for items
                    <ul>
                        <li><strong>Notable Items</strong>: <img src="/images/items/legion-expertise.png" alt="Use Legion's Expertise"/> [EXP Booster], <img src="/images/items/legion-luck.png" alt="Use Legion's Luck"/> [Drop Rate Booster], <img src="/images/items/legion-wealth.png" alt="Use Legion's Wealth"/> [Meso Rate Booster], <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls], <img src="/images/items/hard-cube.png" alt="Use Hard Cube"/> [Hard Cube], <img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> [Bonus Potential Scrolls] and <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> [Powerful Rebirth Flames]</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function ImportantQuestlines(){
    return(
        <div>
            <ArticleHeaderTwo id="questlines">Important Questlines to Complete</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/heliseum.png" alt="MapIcon Heliseum"/> <strong>[Lv. 100] </strong><a href="https://maplestorywiki.net/w/Quests/259" target="_blank" rel="noreferrer noopener"><strong>Heliseum</strong></a>: Unlocks access to the boss <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestorywiki.net/w/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> and daily quests for <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> use to exchange items from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    <ul>
                        <li><strong>Notable shop items:</strong> <img src="/images/equipment/elite-heliseum-cape.png" alt="Eqp Elite Heliseum Cape"/> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>, <img src="/images/equipment/elite-heliseum-boots.png" alt="Eqp Elite Heliseum Boots"/> <img src="/images/equipment/nova-hyades-boots.png" alt="Eqp Nova Boots"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Shoe]</a>, <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="/images/equipment/antique-root-gloves.png" alt="Eqp Antique Root Gloves"/> <a href="https://maplestorywiki.net/w/Antique_Root_Gloves" target="_blank" rel="noreferrer noopener">[Antique Root Gloves]</a> <img src="/images/equipment/antique-leaf-cape.png" alt="Eqp Antique Leaf Cape"/> <a href="https://maplestorywiki.net/w/Antique_Leaf_Cape" target="_blank" rel="noreferrer noopener">[Antique Leaf Cape]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon Lion King's Castle"/> <strong>[Lv. 120] <a href="https://maplestorywiki.net/w/Quests/260" target="_blank" rel="noreferrer noopener">Lion King's Castle</a></strong>: Unlocks access to the boss <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a></li>
                <li><img src="/images/map-icons/root-abyss.png" alt="MapIcon Root Abyss"/> <strong>[Lv. 125] </strong><a href="https://maplestorywiki.net/w/Quests/261" target="_blank" rel="noreferrer noopener"><strong>Root Abyss</strong></a>: Unlocks access to the bosses <img src="/images/map-icons/crimson-queen.png" alt="MapIcon BloodyQueen"/> Crimson Queen, <img src="/images/map-icons/pierre.png" alt="MapIcon Piere"/> Pierre, <img src="/images/map-icons/von-bon.png" alt="MapIcon BanBan"/> Von Bon, and <img src="/images/map-icons/vellum.png" alt="MapIcon Bellum"/> Vellum
                    <ul>
                        <li><img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> <img src="/images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> Coins dropped from the bosses are used to exchange items like <img src="/images/equipment/antique-leaf-shoulder.png" alt="Eqp Antique Leaf Shoulder"/> <img src="/images/equipment/antique-root-shoulder.png" alt="Eqp Antique Root Shoulder"/> equipment for Transfer Hammer</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/temple-of-time.png" alt="MapIcon Temple of Time"/> <strong>[Lv. 130] </strong><a href="https://maplestorywiki.net/w/Quests/263" target="_blank" rel="noreferrer noopener"><strong>Temple of Time</strong></a>: Unlocks access to the boss <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> <a href="https://maplestorywiki.net/w/Pink_Bean" target="_blank" rel="noreferrer noopener">Pink Bean</a></li>
                <li><img src="/images/map-icons/silent-crusade.png" alt="MapIcon Silent Crusade"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Quests/264" target="_blank" rel="noreferrer noopener">[Silent Crusade] A Cry for Help</a></strong>: Unlocks access to the boss <img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <a href="https://maplestorywiki.net/w/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a></li>
                <li><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> <strong>[Lv. 140] </strong><a href="https://maplestorywiki.net/w/Quests/95"><strong>Hieizan Temple</strong></a>: Unlocks access to the boss <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> <a href="https://maplestorywiki.net/w/Princess_No" target="_blank" rel="noreferrer noopener">Princess No</a></li>
                <li><img src="/images/map-icons/stronghold.png" alt="MapIcon Stronghold"/> <strong>[Lv. 165]</strong>  <a href="https://maplestorywiki.net/w/Quests/266" target="_blank" rel="noreferrer noopener"><strong>Gate to the Future</strong></a>: Unlocks access to the boss <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> <a href="https://maplestorywiki.net/w/Cygnus/Monster" target="_blank" rel="noreferrer noopener">Cygnus</a></li>
                <li><img src="/images/map-icons/masteria-through-time.png" alt="MapIcon Masteria Through Time" /> <strong>[Lv. 160]</strong><strong> <a href="https://maplestorywiki.net/w/Epic/Masteria_Through_Time" target="_blank" rel="noreferrer noopener">[Masteria Epic] Lost Hero's Call</a></strong>: Completing the epic, Masteria Through Time rewards <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <a href="https://maplestorywiki.net/w/Antellion_Guardian" target="_blank" rel="noreferrer noopener">[Medal]</a>, <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <a href="https://maplestorywiki.net/w/Subani-Roid" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> OR <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> <a href="https://maplestorywiki.net/w/Dr.Jang-Roid" target="_blank" rel="noreferrer noopener">[Dr. Jang-Roid]</a> androids</li>
                <li><img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> <strong>[Lv. 210] <a href="https://maplestorywiki.net/w/Quests/243" target="_blank" rel="noreferrer noopener">Ramuramu</a></strong>: Unlocks access to the boss <img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> Guardian Angel Slime</li>
            </ul>
        </div>
    );
};

function EquipmentContent(){
    return(
        <div>
            <ArticleHeaderTwo id="equipment">Equipment Content</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li>Level beside items are when they can be obtained or equipped</li>
                <li>For a more in-depth guide to Gear check out: <a href="https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p" target="_blank" rel="noreferrer noopener">https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p</a>
                    <ul>
                        <li>Can be applied to Interactive Worlds too</li>
                    </ul>
                </li>
                <li>For more info on equipment in the game check out: <a href="https://maplestorywiki.net/w/Item" target="_blank" rel="noreferrer noopener">https://maplestorywiki.net/w/Item</a></li>
            </ul>
            <h3>Lv. 10 - 120:</h3>
            <ul>
                <li><strong>[Lv. 10 - 40]</strong> <img src="/images/equipment/brown-winter-hat.png" alt="Eqp Brown Winter Hat"/><img src="/images/equipment/blue-split-piece.png" alt="Eqp Blue Split Piece"/><img src="/images/equipment/blue-shouldermail-pants.png" alt="Eqp Blue Shouldermail Pants"/><img src="/images/equipment/silver-sylvia.png" alt="Eqp Silver Sylvia"/><img src="/images/equipment/brown-leather-krag.png" alt="Eqp Brown Leather Krag"/> Purchasable from your class' hometown or dropped by monsters around your level</li>
                <li><strong>[Lv. 40 - 110]</strong> <img src="/images/equipment/green-distinction.png" alt="Eqp Green Distinction"/><img src="/images/equipment/blue-requiem.png" alt="Eqp Blue Requiem"/><img src="/images/equipment/black-neos-pants.png" alt="Eqp Black Neos Pants"/><img src="/images/equipment/green-mystra.png" alt="Eqp Green Mystra"/><img src="/images/equipment/black-duke-barkin-shoes.png" alt="Eqp Black Duke Barkin Shoes"/> Dropped by monsters around your level or crafted with the Blacksmith Profession</li>
                <li><strong>[Lv. 30]</strong> <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/><img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/>(Riena Strait) <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/>(Gold Beach) <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/><img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/><img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/>(Ellinel Fairy Academy) [<a href="https://maplestorywiki.net/w/Sailor_Mask" target="_blank" rel="noreferrer noopener">Face</a> / <a href="https://maplestorywiki.net/w/Sailor_Belt" target="_blank" rel="noreferrer noopener">Belt</a> / <a href="https://maplestorywiki.net/w/Octopus_Earrings" target="_blank" rel="noreferrer noopener">Earrings</a> / <a href="https://maplestorywiki.net/w/Fairy_Mark" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestorywiki.net/w/Ellinel_Bracelet" target="_blank" rel="noreferrer noopener">Glove</a> / <a href="https://maplestorywiki.net/w/Ellinel_Wings" target="_blank" rel="noreferrer noopener">Cape</a> ] Theme Dungeon Rewards</li>
                <li><strong>[Lv. 40]</strong> <img src="/images/equipment/flower-tattoo.png" alt="Eqp Flower Tattoo"/> <a href="https://maplestorywiki.net/w/Flower_Tattoo" target="_blank" rel="noreferrer noopener">[Face]</a> Dropped by <a href="https://maplestorywiki.net/w/Captain_Darkgoo#Gold_Beach" target="_blank" rel="noreferrer noopener">Captain Darkgoo</a> in Gold Beach
                </li>
                <li><strong>[Lv. 40 - 140]</strong> <img src="/images/equipment/deadshot-ring.png" alt="Eqp Deadshot Ring"/> <img src="/images/equipment/gray-warrior-symbol.png" alt="Eqp Gray Warrior Symbol"/> <img src="/images/equipment/tenacious-leather-pauldron.png" alt="Eqp Tenacious Leather Pauldron"/> [Ring / Face / Shoulder] Obtained from Accessory Crafting Profession</li>
                <li><strong>[Lv. 60]</strong> <img src="/images/equipment/tangyoons-chef-hat.png" alt="Eqp Tangyoon's Chef Hat"/>  <img src="/images/equipment/tangyoons-chef-outfit.png" alt="Eqp Tangyoon's Chef Outfit"/> [<a href="https://maplestorywiki.net/w/Tangyoon%27s_Chef_Hat" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestorywiki.net/w/Tangyoon%27s_Chef_Outfit" target="_blank" rel="noreferrer noopener">Overall</a>] Obtained from Cooking With Tangyoon PQ</li>
                <li><strong>[Lv. 65]</strong> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/>  <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> [<a href="https://maplestorywiki.net/w/Shackles_of_Love" target="_blank" rel="noreferrer noopener">Pendant</a> / <a href="https://maplestorywiki.net/w/Heavy_Violetta_Cape" target="_blank" rel="noreferrer noopener">Cape</a>] Obtained from <a href="https://maplestorywiki.net/w/Category:Mushroom_Castle" target="_blank" rel="noreferrer noopener">Mushroom Castle</a> Theme Dungeon</li>
                <li><strong>[Lv. 70]</strong> <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/>  <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/>  <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Totems]</a> Obtained from <a href="https://maplestorywiki.net/w/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a> Theme Dungeon</li>
                <li><strong>[Lv. 75]</strong> <img src="/images/equipment/greed-pendant.png" alt="Eqp Greed Pendant"/> <a href="https://maplestorywiki.net/w/Greed_Pendant" target="_blank" rel="noreferrer noopener">[Pendant]</a> Purchasable from Monster Park using <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestorywiki.net/w/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a> that increases equipment drop rate</li>
                <li><strong>[Lv. 90]</strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/> <a href="https://maplestorywiki.net/w/Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Lv. 50 Hat]</a> Dropped by <a href="https://maplestorywiki.net/w/Zakum" target="_blank" rel="noreferrer noopener">Zakum</a></li>
                <li><strong>[Lv. 100]</strong> <img src="/images/equipment/virtues-medallion.png" alt="Eqp Virtues Medallion"/> <img src="/images/equipment/blasted-feather.png" alt="Eqp Blasted Feather"/> <img src="/images/equipment/golden-fox-marble.png" alt="Eqp Golden Fox Marble"/> [Secondary Weapon] Can be bought from <a href="https://maplestorywiki.net/w/Neville" target="_blank" rel="noreferrer noopener">Neville</a>
                    <ul>
                        <li>Excludes certain classes who use Shields and Dual Blades</li>
                        <li>An "Evolving" version can also be bought for 100 million Mesos</li>
                    </ul>
                </li>
                <li><strong>[Lv. 100]</strong> <img src="/images/equipment/gold-maple-leaf-emblem.png" alt="Eqp Gold Maple Leaf Emblem"/> <img src="/images/equipment/gold-cygnus-emblem.png" alt="Eqp Gold Cygnus Emblem"/> <img src="/images/equipment/gold-heroes-emblem.png" alt="Eqp Gold Heroes Emblem (Phantom)"/> <a href="https://maplestorywiki.net/w/Emblem" target="_blank" rel="noreferrer noopener">[Emblems]</a> Can be obtained from accepting a quest from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                    <ul>
                        <li>Kaiser and Angelic Buster can buy their Emblem from <a href="https://maplestorywiki.net/w/Harpoon#Pantheon" target="_blank" rel="noreferrer noopener">Harpoon</a> or <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a></li>
                        <li>Xenon can buy their Emblem/Power Source from <a href="https://maplestorywiki.net/w/Edwin" target="_blank" rel="noreferrer noopener">Edwin</a> or <a href="https://maplestorywiki.net/w/Silbaron" target="_blank" rel="noreferrer noopener">Silbaron</a></li>
                    </ul>
                </li>
                <li><strong>[Lv. 100]</strong> <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestorywiki.net/w/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Cape]</a> Rewarded from completing Mushroom Shrine Tales from <a href="https://maplestorywiki.net/w/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a>
                    <ul>
                        <li>Scaling stats considered slightly better than <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">Tyrant Capes</a> for the price</li>
                        <li>Bonus Stats can be freely rerolled by discarding the item and reobtaining it again from <a href="https://maplestorywiki.net/w/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a></li>
                    </ul>
                </li>
                <li><strong>[Lv. 100]</strong> <img src="/images/equipment/antique-leaf-cape.png" alt="Eqp Antique Leaf Cape"/> <a href="https://maplestorywiki.net/w/Antique_Leaf_Cape" target="_blank" rel="noreferrer noopener">[Cape]</a> Purchasable using <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> or <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestorywiki.net/w/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a></li>
                <li><strong>[Lv. 110]</strong> <img src="/images/equipment/ifias-earrings.png"/><img src="/images/equipment/ifias-ring.png"/><img src="/images/equipment/ifias-necklace.png"/> [<a href="https://maplestorywiki.net/w/Ifia%27s_Earrings" target="_blank" rel="noreferrer noopener">Earrings</a> / <a href="https://maplestorywiki.net/w/Ifia%27s_Ring" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestorywiki.net/w/Ifia%27s_Necklace" target="_blank" rel="noreferrer noopener">Pendant</a>] Dropped by <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Hard Von Leon</a></li>
            </ul>
            <h3>Lv. 120+:</h3>
            <ul>
                <li><strong>[Lv. 120+]</strong> <img src="/images/equipment/elite-heliseum-boots.png" alt="Eqp Elite Heliseum Boots"/> <img src="/images/equipment/elite-heliseum-cape.png" alt="Eqp Elite Heliseum Cape"/> [ <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Boots" target="_blank" rel="noreferrer noopener">Lv. 80 Shoe</a> / <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Belt">Lv. 80 Cape</a> ] Dropped by <a href="https://maplestorywiki.net/w/Treglow" target="_blank" rel="noreferrer noopener">Treglow</a> / <a href="https://maplestorywiki.net/w/Victor" target="_blank" rel="noreferrer noopener">Victor</a> / <a href="https://maplestorywiki.net/w/Velderoth" target="_blank" rel="noreferrer noopener">Velderoth</a> and purchasable using <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    <ul>
                        <li>Not recommended because it is expensive to upgrade</li>
                    </ul>
                </li>
                <li><strong>[Lv. 120+]</strong> <img src="/images/equipment/nova-hyades-boots.png" alt="Nova Hyades Boots"/> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> [ <a href="https://maplestorywiki.net/w/Nova_Hyades_Boots" target="_blank" rel="noreferrer noopener">Lv. 110 Shoe</a> / <a href="https://maplestorywiki.net/w/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">Lv. 110 Cape</a> ] Dropped by <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener">Magnus</a> and purchassable using <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    <ul>
                        <li>Not recommended because it is expensive to upgrade</li>
                    </ul>
                </li>
                <li><strong>[Lv. 120]</strong> <img src="/images/equipment/noble-ifias-ring.png" alt="Eqp Noble Ifia's Ring"/> <a href="https://maplestorywiki.net/w/Noble_Ifia%27s_Ring" target="_blank" rel="noreferrer noopener">[Ring]</a> Reward from Lion King's Castle - <a href="https://maplestorywiki.net/w/Category:Lion_King%27s_Castle" target="_blank" rel="noreferrer noopener">Rose Garden</a>
                    <ul>
                        <li>Part of the <a href="https://maplestorywiki.net/w/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a></li>
                    </ul>
                </li>
                <li><strong>[Lv. 120]</strong>  <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Timeless Fennel"/>  <img src="/images/equipment/eclectic-myst-blue.png" alt="Eqp Eclectic Myst Blue"/> <img src="/images/equipment/eclectic-rontano.png" alt="Eqp Ecletic Rontano"/> <img src="/images/equipment/eclectic-lubav.png" alt="Eqp Eclectic Lubav"/>  <img src="/images/equipment/briser-terror.png" alt="Eqp Timeless Executioner"/> <a href="https://maplestorywiki.net/w/Equipment_Set/6th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Eclectic Gear]</a> Dropped by monsters near Lv. 120</li>
                <li><strong>[Lv. 130]</strong> <img src="/images/equipment/antique-leaf-shoulder.png" alt="Eqp Antique Leaf Shoulder"/> <a href="https://maplestorywiki.net/w/Antique_Leaf_Shoulder" target="_blank" rel="noreferrer noopener">[Shoulder]</a> Purchasable using <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> <a href="https://maplestorywiki.net/w/Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Yggdrasil Rune]</a> or <img src="/images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> <a href="https://maplestorywiki.net/w/Chaos_Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Chaos Yggdrasil Rune]</a> from <a href="https://maplestorywiki.net/w/Oko#Root_Abyss" target="_blank" rel="noopener noreferrer">Oko</a></li>
                <li><strong>[Lv. 130]</strong> <img src="/images/equipment/muspell-warrior-hat.png" alt="Eqp Muspell Warrior Hat"/>  <img src="/images/equipment/muspell-magician-suit.png" alt="Eqp Muspell Magician Suit"/>  <img src="/images/equipment/muspell-warrior-shoes.png" alt="Eqp Muspell Warrior Shoes"/> <img src="/images/equipment/muspell-warrior-gloves.png" alt="Eqp Muspell Warrior Gloves"/> <img src="/images/equipment/jaihin-saber.png" alt="Eqp Jaihin Saber"/> <a href="https://maplestorywiki.net/w/Equipment_Set/7th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Muspell Gear]</a> Dropped by monsters near Lv. 130</li>
                <li><strong>[Lv. 140]</strong> <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm"/> <img src="/images/equipment/pensalir-mage-robe.png" alt="Eqp Pensalir Mage Robe"/> <img src="/images/equipment/pensalir-battle-boots.png" alt="Eqp Pensalir Battle Boots"/>  <img src="/images/equipment/pensalir-battle-gloves.png" alt="Eqp Pensalir Battle Gloves"/> <img src="/images/equipment/pensalir-battle-cape.png" alt="Eqp Pensalir Battle Cape"/>  <img src="/images/equipment/utgard-saber.png" alt="Eqp Utgard Saber"/> <a href="https://maplestorywiki.net/w/Equipment_Set/8th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Pensalir Gear]</a> Obtained from fighting monsters above Lv. 140</li>
                <li><strong>[Lv. 140]</strong> <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/> <img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/>  <img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestorywiki.net/w/Hayato%27s_Treasure" target="_blank" rel="noreferrer noopener">Shoulder</a> / <a href="https://maplestorywiki.net/w/Kanna%27s_Treasure" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestorywiki.net/w/Ayame%27s_Treasure" target="_blank" rel="noreferrer noopener">Belt</a> ] Dropped by <a href="https://maplestorywiki.net/w/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></li>
                <li><strong>[Lv. 140+]</strong> <img src="/images/equipment/princess-nos-accursed-arrow.png" alt="Eqp Princess No's Accursed Arrow"/> <img src="/images/equipment/princess-nos-damp-book.png" alt="Eqp Princess No's Damp Book"/> <img src="/images/equipment/princess-nos-fox-marble.png" alt="Eqp Princess No's Fox Marble"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Princess No Secondary]</a> Obtained from exchanging <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> [Fragments] dropped by <a href="https://maplestorywiki.net/w/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></li>
                <li><strong>[Lv. 140]</strong> <img src="/images/equipment/meister-ring.png" alt="Eqp Meister Ring"/> <a href="https://maplestorywiki.net/w/Meister_Ring" target="_blank" rel="noreferrer noopener">[Ring]</a> Obtained from Accessory Crafting Profession</li>
                <li><strong>[Lv. 140]</strong> <img src="/images/equipment/commerci-hat.png" alt="Eqp Commerci Hat"/> <img src="/images/equipment/commerci-suit.png" alt="Eqp Commerci Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp "/> <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/> <img src="/images/equipment/commerci-belt.png" alt="Eqp Commerci Belt"/> <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/> <img src="/images/equipment/commerci-shoulder.png" alt="Eqp Commerci Shoulder"/> [ <a href="https://maplestorywiki.net/w/Commerci_Hat" target="_blank" rel="noreferrer noopener">Hat</a>, <a href="https://maplestorywiki.net/w/Commerci_Suit" target="_blank" rel="noreferrer noopener">Overall</a>, <a href="https://maplestorywiki.net/w/Commerci_Boots" target="_blank" rel="noreferrer noopener">Shoes</a>, <a href="https://maplestorywiki.net/w/Commerci_Gloves">Gloves</a>, <a href="https://maplestorywiki.net/w/Commerci_Cape">Cape</a>, <a href="https://maplestorywiki.net/w/Commerci_Belt" target="_blank" rel="noreferrer noopener">Belt</a>, <a href="https://maplestorywiki.net/w/Commerci_Shoulder" target="_blank" rel="noreferrer noopener">Shoulder</a> ] Rewarded from completing Commerci Storyline
                <ul>
                    <li>Not to be confused with Sweetwater Gear</li>
                </ul>
                </li>
                <li><strong>[Lv. 150]</strong> <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/>  <img src="/images/equipment/amaterasus-armor.png" alt="Eqp Oyamatsumi's Armor"/> <img src="/images/equipment/amaterasus-shoes.png" alt="Eqp Ame-no-Uzume's Shoes"/>  <img src="/images/equipment/amaterasus-gloves.png" alt="Eqp Tsukuyomi's Gloves"/> <img src="/images/equipment/amaterasus-cape.png" alt="Eqp Susano-o's Cape"/> <img src="/images/equipment/amaterasus-belt.png" alt="Eqp Amaterasu's Belt"/> <img src="/images/equipment/amaterasus-epaulet.png" alt="Eqp Susano-o's Epaulet"/>  <img src="/images/equipment/amaterasus-nimbus-sword.png" alt="Eqp Amaterasu's Nimbus Sword"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Gear]</a> Dropped by <a href="https://maplestorywiki.net/w/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Mori Ranmaru</a></li>
                <li><strong>[Lv. 150]</strong> <img src="/images/equipment/antique-root-shoulder.png" alt="Eqp Antique Root Shoulder"/> <a href="https://maplestorywiki.net/w/Antique_Root_Shoulder" target="_blank" rel="noreferrer noopener">[Shoulder]</a> Bought with <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> <a href="https://maplestorywiki.net/w/Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Yggdrasil Rune]</a> or <img src="/images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> <a href="https://maplestorywiki.net/w/Chaos_Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Chaos Yggdrasil Rune]</a> from <a href="https://maplestorywiki.net/w/Oko#Root_Abyss" target="_blank" rel="noopener noreferrer">Oko</a></li>
                <li><strong>[Lv. 150]</strong> <img src="/images/equipment/antique-root-gloves.png" alt="Eqp Antique Root Gloves"/> <a href="https://maplestorywiki.net/w/Antique_Root_Gloves" target="_blank" rel="noreferrer noopener">[Glove]</a> Bought with <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> or <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestorywiki.net/w/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                </li>
                <li><strong>[Lv. 150]</strong> <img src="/images/equipment/enraged-zakum-helmet.png" alt="Eqp Enraged Zakum Helmet"/> <img src="/images/equipment/enraged-zakum-cape.png" alt="Eqp Enraged Zakum Cape"/> <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/> [ <a href="https://maplestorywiki.net/w/Enraged_Zakum_Helmet" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestorywiki.net/w/Enraged_Zakum_Cape" target="_blank" rel="noreferrer noopener">Cape</a> / <a href="https://maplestorywiki.net/w/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">Belt</a> ] Dropped by <a href="https://maplestorywiki.net/w/Zakum#Chaos" target="_blank" rel="noreferrer noopener">Chaos Zakum</a>
                </li>
                <li><strong>[Lv. 160]</strong> <img src="/images/equipment/amaterasus-lupine-storm.png" alt="Eqp Amaterasu's Lupine Storm"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Lupine Japanese Gear]</a> Dropped by <a href="https://maplestorywiki.net/w/Akechi_
                Mitsuhide/Monster" target="_blank" rel="noreferrer noopener">Akechi Mitsuhide</a> or exchanged with <img src="/images/items/mark-of-the-silver-wolf.png" alt="Etc Mark of the Silver Wolf"/> [Mark of the Silver Wolf] from <a href="https://maplestorywiki.net/w/Kobayakawa_Takakage" target="_blank" rel="noreferrer noopener">Kobayakawa Takakage</a></li>
                <li><strong>[Lv. 160]</strong> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/>  <img src="/images/equipment/sweetwater-suit.png" alt="Eqp Sweetwater Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp Commerci Boots"/>  <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/>  <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/><strong/>  <a href="https://maplestorywiki.net/w/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> Dropped by Commerci Voyage Bosses</li>
                <li><strong>[Lv. 160]</strong> <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/>  <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> [ <a href="https://maplestorywiki.net/w/Sweetwater_Tattoo" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestorywiki.net/w/Sweetwater_Monocle" target="_blank" rel="noreferrer noopener">Face</a> ] Purchasable using <img src="/images/items/commerci-denaro.png" alt="Etc Commerci Denaro"/> <a href="https://maplestorywiki.net/w/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a> from <a href="https://maplestorywiki.net/w/Javert" target="_blank" rel="noreferrer noopener">Javert</a></li>
                <li><strong>[Lv. 160]</strong> <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> [ <a href="https://maplestorywiki.net/w/Antellion_Guardian" target="_blank" rel="noreferrer noopener">Medal</a> / <a href="https://maplestorywiki.net/w/Subani-Roid" target="_blank" rel="noreferrer noopener">Android</a> / <a href="https://maplestorywiki.net/w/Dr.Jang-Roid" target="_blank" rel="noreferrer noopener">Android</a> ] Rewarded for completing <a href="https://maplestorywiki.net/w/Epic/Masteria_Through_Time" target="_blank" rel="noopener noreferrer">Masteria Through Time Blockbuster</a>
                    <ul>
                        <li>Android has an NPC Vendor function</li>
                        <li>Does not have a Heart provided</li>
                    </ul>
                </li>
                <li><strong>[Lv. 170]</strong> <img src="/images/equipment/treasure-hunter-johns-ring.png" alt="Eqp Treasure Hunter John's Ring"/>  <img src="/images/equipment/treasure-hunter-jacks-scar.png" alt="Eqp Treasure Hunter Jack's Scar"/>  <img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/> <img src="/images/equipment/lukans-pauldron.png" alt="Eqp Lukan's Pauldron"/> <img src="/images/equipment/elpams-belt.png" alt="Eqp Elpam's Belt"/> <img src="/images/equipment/professor-foxwits-glasses.png" alt="Eqp Professor Foxwit's Glasses"/> <img src="/images/equipment/sheriff-litas-earrings.png" alt="Eqp Sheriff Lita's Earrings"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Lv. 125 Masteria Explorer Gear]</a> Purchasable using <img src="/images/items/nlc-commemorative-coin.png" alt="Etc NLC Commemorative Coin"/> <a href="https://maplestorywiki.net/w/NLC_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[NLC Commemorative Coins]</a> from <a href="https://maplestorywiki.net/w/Spindle#Merchant" target="_blank" rel="noreferrer noopener">Spindle</a></li>
                <li><strong>[Lv. 175+]</strong> <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Capes]</a> Dropped by <a href="https://maplestorywiki.net/w/Magnus/Monster#Hard" target="_blank" rel="noreferrer noopener">Hard Magnus</a> and purchasable using <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestorywiki.net/w/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a> who also sells <img src="/images/equipment/tyrant-hyades-belt.png" alt="Eqp Tyrant Hyades Belt"/> <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Belt" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Belts]</a>
                    <ul>
                        <li>Not recommended because it is expensive to upgrade</li>
                    </ul>
                </li>
                <li><strong>[Lv. 180]</strong>  <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <a href="https://maplestorywiki.net/w/Glona%27s_Heart" target="_blank" rel="noreferrer noopener">[Ring]</a> Purchasable using <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestorywiki.net/w/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> and Mesos from <a href="https://maplestorywiki.net/w/Fiona" target="_blank" rel="noreferrer noopener">Fiona</a>
                    <ul>
                        <li>Not recommended because it is expensive to upgrade</li>
                    </ul>
                </li>
                <li><strong>[Lv. 180+]</strong> <img src="/images/equipment/cracked-gollux-earrings.png" alt="Eqp Cracked Gollux Earrings"/> <img src="/images/equipment/solid-gollux-ring.png" alt="Eqp Solid Gollux Ring"/> <img src="/images/equipment/reinforced-engraved-gollux-pendant.png" alt="Eqp Reinforced Engraved Gollux Pendant"/> <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/> [<a href="https://maplestorywiki.net/w/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">Cracked</a> / <a href="https://maplestorywiki.net/w/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">Solid</a> / <a href="https://maplestorywiki.net/w/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">Reinforced</a> / <a href="https://maplestorywiki.net/w/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">Superior</a> Gollux Accessories] Dropped by Gollux and purchasable using <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> <a href="https://maplestorywiki.net/w/Gollux_Coin">[Gollux Coins]</a> from <a href="https://maplestorywiki.net/w/Lucia" target="_blank" rel="noreferrer noopener">Lucia</a></li>
                <li><strong>[Lv. 180+]</strong> <img src="/images/equipment/root-abyss-master.png" alt="Setup Root Abyss Master"/> <a href="https://maplestorywiki.net/w/Root_Abyss_Master" target="_blank" rel="noreferrer noopener">[Title]</a> Rewarded by defeating each Chaos Root Abyss boss 10 times</li>
                <li><strong>[Lv. 200+]</strong> <img src="/images/equipment/ring-of-restraint.png" alt="Eqp Ring of Restraint"/> <img src="/images/equipment/ultimatum-ring.png" alt="Eqp Ultimatum Ring"/>  <img src="/images/equipment/limit-ring.png" alt="Eqp Limit Ring"/> <img src="/images/equipment/health-cut-ring.png" alt="Eqp Health Cut Ring"/><a href="https://maplestorywiki.net/w/Jade_Boss_Ring_Box" target="_blank" rel="noreferrer noopener">[Jade Boss Rings]</a> Obtained from boss drops</li>
            </ul>
            <h3>Boss Armor:</h3>
            <ul>
                <li>Considered a <a href="https://maplestorywiki.net/w/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats</li>
                <li>Considered the main gear to strive because they are Boss Items</li>
            </ul>
            <ul>
                <li><strong>[Hilla] </strong> <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <img src="/images/equipment/necromancer-warrior-suit.png" alt="Eqp Necromancer Magician Suit"/>  <img src="/images/equipment/necromancer-warrior-shoes.png" alt="Eqp Necromancer Warrior Shoes"/>  <img src="/images/equipment/necromancer-warrior-gloves.png" alt="Eqp Necromancer Warrior Gloves"/> <img src="/images/equipment/necro-terror.png" alt="Eqp Necro Terror"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a></li>
                <li><strong>[Von Leon <em>(Hard Mode)</em> +</strong> <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> <strong>] </strong> <img src="/images/equipment/marx-von-leon-helmet.png" alt="Eqp Marx Von Leon Helmet"/>  <img src="/images/equipment/royal-von-leon-suit.png" alt="Eqp Marx Von Leon Battle Suit"/> <img src="/images/equipment/marx-von-leon-war-boots.png" alt="Eqp Marx Von Leon War Boots"/> <img src="/images/equipment/marx-von-leon-gloves.png" alt="Eqp Marx Von Leon Gloves"/> <img src="/images/equipment/marx-von-leon-cape.png" alt="Eqp Marx Von Leon Cape"/> <img src="/images/equipment/marx-von-leon-sabre.png" alt="Eqp Marx Von Leon Sabre"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Royal Von Leon Gear]</a></li>
                <li><strong>[Cygnus </strong> <img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/> <strong>] </strong> <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/>  <img src="/images/equipment/lionheart-battle-mail.png" alt="Eqp Dragon Tail Mage Robe"/> <img src="/images/equipment/lionheart-battle-boots.png" alt="Eqp Raven Horn Chaser Boots"/>  <img src="/images/equipment/lionheart-battle-bracers.png" alt="Eqp Falcon Wing Sentinel Gloves"/>  <img src="/images/equipment/lionheart-battle-cape.png" alt="Eqp Lionheart Battle Cape"/> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/>  <img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                <li><strong>[Chaos Root Abyss </strong> <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> <strong>] </strong> <img src="/images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/> <img src="/images/equipment/eagle-eye-warrior-armor.png" alt="Eqp Eagle Eye Dunwitch Robe"/> <img src="/images/equipment/trixter-warrior-pants.png" alt="Eqp Trixter Ranger Pants"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Mistilteinn"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 CRA Gear]</a></li>
                <li><strong>[Damien / Lotus </strong> <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/>  <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> <strong>] </strong> <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Mage Suit"/>  <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/>  <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/>  <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 160 AbsoLab Gear]</a></li>
                <li><strong>[Lucid / Will </strong> <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> <img src="/images/items/arachno-coin.png" alt="Etc Arachno Coin"/><strong>] </strong> <img src="/images/equipment/arcane-umbra-knight-hat.png" alt="Eqp Arcane Umbra Knight Hat"/> <img src="/images/equipment/arcane-umbra-knight-suit.png" alt="Eqp Arcane Umbra Mage Suit"/>  <img src="/images/equipment/arcane-umbra-knight-shoes.png" alt="Eqp Arcane Umbra Knight Shoes"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="Eqp Arcane Umbra Knight Gloves"/>  <img src="/images/equipment/arcane-umbra-knight-cape.png" alt="Eqp Arcane Umbra Knight Cape"/>  <img src="/images/equipment/arcane-umbra-knight-shoulder.png" alt="Eqp Arcane Umbra Knight Shoulder"/> <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Lv. 200 Arcane Umbra Gear]</a></li>
                <li><strong>[Kalos </strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/><strong>] </strong> <img src="/images/equipment/eternal-knight-helm.png" alt="Eqp Eternal Knight Helm"/> <img src="/images/equipment/eternal-knight-armor.png" alt="Eqp Eternal Knight Armor"/> <img src="/images/equipment/eternal-knight-pants.png" alt="Eqp Eternal Knight Pants"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Eternal_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 250 Eternal Knight Gear]</a></li>
            </ul>
            <h3>Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestorywiki.net/w/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a></li>
                <li>Considered a <a href="https://maplestorywiki.net/w/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li><strong>[Zakum]</strong> <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/> <a href="https://maplestorywiki.net/w/Condensed_Power_Crystal" target="_blank" rel="noreferrer noopener">[ Lv. 110 Face ]</a></li>
                <li><strong>[Zakum]</strong> <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye"/> <a href="https://maplestorywiki.net/w/Aquatic_Letter_Eye_Accessory" target="_blank" rel="noreferrer noopener">[ Lv. 100 Eye ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestorywiki.net/w/Black_Bean_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 135 Eye ]</a></li>
                <li><strong>[Papulatus <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestorywiki.net/w/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 145 Eye ]</a></li>
                <li><strong>[Horntail]</strong> <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earrings"/> <a href="https://maplestorywiki.net/w/Dea_Sidus_Earring" target="_blank" rel="noreferrer noopener">[ Lv. 130 Earrings ]</a></li>
                <li><strong>[Horntail]</strong> <img src="/images/equipment/silver-blossom-ring.png" alt="Eqp Silver Blossom Ring"/> <a href="https://maplestorywiki.net/w/Silver_Blossom_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 110 Ring ]</a></li>
                <li><a href="https://maplestorywiki.net/w/Category:Lion_King%27s_Castle/Ifia%27s_Hope" target="_blank" rel="noreferrer noopener"><strong>[Ifia <em>(NPC)</em>]</strong></a> <img src="/images/equipment/noble-ifias-ring.png" alt="Eqp Noble Ifia's Ring"/> <a href="https://maplestorywiki.net/w/Noble_Ifia%27s_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 120 Ring ]</a></li>
                <li><strong>[Guardian Angel Slime]</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Eqp Guardian Angel Ring"/> <a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 160 Ring ]</a></li>
                <li><strong>[Horntail <em>(Easy / Normal Mode)</em>]</strong> <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestorywiki.net/w/Horntail_Necklace" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Horntail <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestorywiki.net/w/Chaos_Horntail_Necklace" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Arkarium]</strong> <img src="/images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Necklace"/> <a href="https://maplestorywiki.net/w/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Arkarium]</strong> <img src="/images/equipment/dominator-pendant.png" alt="Eqp Dominator Necklace"/> <a href="https://maplestorywiki.net/w/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pendant ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestorywiki.net/w/Golden_Clover_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 140 Belt ]</a></li>
                <li><strong>[Zakum <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/> <a href="https://maplestorywiki.net/w/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 150 Belt ]</a></li>
                <li><strong>[Magnus]</strong> <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestorywiki.net/w/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[ Lv. 120 Shoulder ]</a></li>
                <li><strong>[Hilla]</strong> <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestorywiki.net/w/Stone_of_Eternal_Life" target="_blank" rel="noreferrer noopener">[ Lv. 0 Pocket Item ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestorywiki.net/w/Pink_Holy_Cup" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pocket Item ]</a></li>
                <li><strong>[Magnus]</strong> <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestorywiki.net/w/Crystal_Ventus_Badge" target="_blank" rel="noreferrer noopener">[ Lv. 130 Badge ]</a></li>
            </ul>
            <h3>Dawn Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestorywiki.net/w/Equipment_Set/Dawn_Boss_Set" target="_blank" rel="noreferrer noopener">Dawn Boss Accessory Set</a></li>
                <li>Considered a <a href="https://maplestorywiki.net/w/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li><strong>[Verus Hilla / Chosen Seren]</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendent"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pendant ]</a></li>
                <li><strong>[Lucid / Will]</strong> <img src="/images/equipment/twilight-mark.png" alt="Eqp Twilight Mark"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 140 Face ]</a></li>
                <li><strong>[Gloom / Darknell]</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestorywiki.net/w/Estella_Earrings" target="_blank" rel="noreferrer noopener">[ Lv. 160 Earrings ]</a></li>
                <li>
                    <strong>[Guardian Angel Slime]</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Eqp Guardian Angel Ring"/> <a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 160 Ring ]</a>
                    <ul>
                        <li>Ring is also part of the Boss Accessory set and requires using a special scroll <img src="/images/items/guardian-angel-ring-set-conversion-scroll.png" alt="Use Guardian Angel Ring Set Conversion Scroll"/> [Conversion Scroll] from the <a href="https://maplestorywiki.net/w/Chief_Slime" target="_blank" rel="noreferrer noopener">Chief Slime</a> to convert it into the Dawn Boss Accessory set</li>
                    </ul>
                </li>
            </ul>
            <h3>Pitched Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestorywiki.net/w/Equipment_Set/Pitched_Boss_Set" target="_blank" rel="noreferrer noopener">Pitched Boss Accessory Set</a>
                </li>
                <li>Considered a <a href="https://maplestorywiki.net/w/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li>Items here at very rare and hard to get</li>
                <li><strong>[Lotus <em>(Hard Mode)</em>] </strong> <img src="/images/equipment/black-heart.png" alt="Eqp Black Heart"/>  <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> [<a href="https://maplestorywiki.net/w/Black_Heart" target="_blank" rel="noreferrer noopener">Lv. 120 Heart</a> / <a href="https://maplestorywiki.net/w/Berserked" target="_blank" rel="noreferrer noopener">Lv. 160 Face</a> ]
                    <ul>
                        <li>Heart is a time-limited item, time limit cannot be extended</li>
                    </ul>
                </li>
                <li><strong>[Damien <em>(Hard Mode)</em>]</strong> <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestorywiki.net/w/Magic_Eyepatch" target="_blank" rel="noreferrer noopener">[ Lv. 160 Eye ]</a></li>
                <li><strong>[Verus Hilla]</strong> <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering"/> <a href="https://maplestorywiki.net/w/Source_of_Suffering" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pendant ]</a></li>
                <li><strong>[Will <em>(Hard Mode)</em>]</strong> <img src="/images/equipment/cursed-red-spellbook.png" alt="Eqp Cursed Red Spellbook"/> <img src="/images/equipment/cursed-blue-spellbook.png" alt="Eqp Cursed Blue Spellbook"/> <img src="/images/equipment/cursed-green-spellbook.png" alt="Eqp Cursed Green Spellbook"/> <img src="/images/equipment/cursed-yellow-spellbook.png" alt="Eqp Cursed Yellow Spellbook"/> <a href="https://maplestorywiki.net/w/Cursed_Red_Spellbook" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pocket Item ]</a></li>
                <li><strong>[Lucid (Hard Mode)]</strong> <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/> <a href="https://maplestorywiki.net/w/Dreamy_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 200 Belt ]</a></li>
                <li><strong>[Gloom]</strong> <img src="/images/equipment/endless-terror.png" alt="Endless Terror Ring"/> <a href="https://maplestorywiki.net/w/Endless_Terror" target="_blank" rel="noreferrer noopener">[ Lv. 200 Ring ]</a></li>
                <li><strong>[Darknell]</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Commanding Force Earring"/> <a href="https://maplestorywiki.net/w/Commanding_Force_Earring" target="_blank" rel="noreferrer noopener">[ Lv. 200 Earrings]</a></li>
                <li><strong>[Black Mage]</strong> <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestorywiki.net/w/Genesis_Badge" target="_blank" rel="noreferrer noopener">[ Lv. 200 Badge ]</a></li>
            </ul>
        </div>
    );
};

function SpellTracing(){
    return(
        <div>
            <h3>Progression towards Midgame</h3>
            <hr/>
            <p>For info on upgrading and enhancing gear check out: <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a></p>
            <h3 id="spelltrace"> <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Tracing in Interactive Worlds:</h3>
            <hr/>
            <p>In Interactive Worlds, be sure to upgrade all your gear with at least 70% Spell Tracing so that you can start Star Forcing. On average, 70% Spell Tracing provides an optimal amount of stats compared to just 100% Spell Tracing your equipment</p>
            <p>In Heroic Worlds, Spell Traces are unused and can be sold to NPCs for Mesos</p>
            <img className="repository-image" src="/images/info/equipment-enchant-ui.png" alt="Equipment Enhance"/>
            <img className="repository-image" src="/images/info/equipment-enchant-button.png" alt="Enhance Button"/>
            <p>The Spell Trace and Star Force system is located in the Equipment Enchant UI by pressing "O" by default or through your inventory by pressing the <strong>red button with a hammer</strong>
            </p>
            <p>Some ways to obtain Spell Traces are:</p>
            <ul>
                <li>Monster and Boss drops</li>
                <li>Inferno Wolf + Pollo/Frito Missions</li>
            </ul>
            <h5>Spell Trace Fever:</h5>
            <img className="repository-image" src="/images/info/spell-trace-fever.png" alt="Spell Trace Fever"/>
            <p>There are typically events where Spell Trace enhancements have an increased success rate. These are the best times to upgrade equipment you plan to invest a lot of time into. Unless you are planning to perfect a piece of equipment, you do not need to wait for this event to start Spell Tracing</p>
            <h5>50% Off Spell Tracing:</h5>
            <p>During Sunny Sundays, there are typically events where the number of Spell Traces required to upgrade is halved. This is a good time to use Spell Traces on Innocence Scrolls or Clean Slates</p>
        </div>
    );
};

function StarForcing(){
    return(
        <div>
            <h3 id="starforce">Star Forcing</h3>
            <hr/>
            <img className="repository-image" src="/images/info/starforce-tooltip.png" alt="Star Force Example"/>
            <p>Star Force Enhancements cost Mesos and grants increased stats to an equipment upon success. On Interactive Worlds, before an equipment can be Star Force/enhance, all upgrade slots must be used. In Heroic Worlds, gear can be Star Forced/enhanced immediately since there are no upgrade slots</p>
            <p>In early game, 12-stars on each item is suggested to keep at a comfortable pace. However, past 15 stars, equipment start to see a clear difference from equipment with fewer stars</p>
            <p>During events, there are normally shops and rewards available to obtain <img src="/images/items/star-enhancement-scroll.png" alt="Use Star Enchancement Scroll"/> [Star Enhancement Scrolls] that sets an equipment's Star Force to a certain amount. For example, there are scrolls that upgrade an equipment immediately to 15 or 17 stars</p>
            <h5>30% Star Force Discount:</h5>
            <p>Occasionally on Sunny Sundays, Star Forcing is discounted by 30%. This is a good time to Star Force if you are trying to reach above 15-star. If you are just Star Forcing regularly to 12 stars, you do not need to wait for this to happen</p>
            <h5>5/10/15 Star Force 100%:</h5>
            <p>Occasionally on Sunny Sundays, Star Forcing to 5, 10, or 15 stars is a guaranteed success. This is a good time to reach 15-star but is not necessary to start Star Forcing your gear</p>
            <h5>1+1 Event:</h5>
            <p>Occasionally on Sunny Sundays, Star Forcing below 10 Stars grants 2 stars. This is useful for enhancing multiple items to 12-star, but is not necessary to start Star Forcing your gear</p>
            <h5>Shining Star Force Event:</h5>
            <p>Occasionally on Sunny Sundays, the 30% Discount and 5/10/15 Star event may overlap which provides the best opportunity to Star Force your gear especially to 17-star</p>
        </div>
    );
};

function BonusStats(){
    return(
        <div>
            <h3 id="additionalstats">Bonus Stats/Flames</h3>
            <hr/>
            <p>For now don't worry too much about Bonus Stats and Rebirth Flames. If you do obtain a special rebirth flame, feel free to use it on anything or on Interactive Worlds, you can sell them (if tradeable)</p>
            <p>Some nice stats to reroll into is your Main Stat, %All Stat, %Boss Damage or Attack/Magic Attack</p>
            <hr/>
            <p><strong>Some reasons that make certain items better than others (or best-in-slot) include:</strong></p>
            <ul>
                <li>Level Requirement of gear, higher the level, the better
                    <ul>
                        <li>Level also affects the scaling of Bonus Stats</li>
                    </ul>
                </li>
                <li>Base Attack value &amp; base stats
                    <ul>
                        <li>Higher attack results in higher attack scaling on flames/bonus stats</li>
                    </ul>
                </li>
                <li>Amount of Star Force Enhancements (max. 25 stars)
                <ul>
                    <li>This is tied to the level requirement of the gear - higher level, more stars</li>
                    <li>This is the most important factor</li>
                </ul>
                </li>
                <li>Potential lines that can be obtained
                <ul>
                    <li>This is tied to the level requirement of the gear - higher level, better lines</li>
                    <li>Ex. Higher level potentials provide more %Stat than lower level potentials</li>
                </ul>
                </li>
                <li>Is a Boss Item or KMS Item
                    <ul>
                        <li>These items can obtain higher tiers of Bonus Stats than non-KMS items</li>
                    </ul>
                </li>
                <li>Set bonus effect</li>
            </ul>
        </div>
    )
};

function TransferHammer(){
    return(
        <div>
            <h3 id="transferhammer">Transfer Hammer</h3>
            <hr/>
            <img className="repository-image" src="/images/info/transfer-hammer-ui.png" alt="Transfer Hammer UI"/>
            <p>Transfer Hammer is a system that allows you to transfer Star Force, Potentials, Bonus Potentials, and Soul Weapon from one equipment to another (with restrictions). The following will not be transferred, Scrolled Stats and Bonus Stats. Additionally, you will lose one Star Force while transferring and any potentials above Epic will be dropped down to Epic Potential. You can only transfer equipment up to 10 levels apart of each other. For equipment below Lv. 119, you can transfer up to 20 levels apart</p>
            <p>Some requirements for Transfer Hammering is that the piece of equipment must have at least 1 Star Force, cannot be Superior Gear (such as Tyrants) and must be the same equipment type (regardless of job group). Overalls can be counted towards both as a top or bottom and vice versa</p>
            <p>In Interactive Worlds, any remaining upgrade slots will be filled by 100% Spell Traces for free. You can choose which stat the upgrades will be. I recommend that you already Upgrade/Spell Trace the Transferring Item first if you do not want the 100% Spell Trace stats</p>
            <img className="repository-image" src="/images/info/transfer-hammer-button.png" alt="Transfer Hammer Button"/>
            <p>The Transfer Hammering UI is accessible from the Inventory UI by <strong>pressing the blue hammer icon</strong>. For more info on Transfer Hammer, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Transfer_Hammer" target="_blank">https://strategywiki.org/wiki/MapleStory/Transfer_Hammer</a></p>
        </div>
    );
};

function EpicPotentialGear(){
    return(
        <div>
            <h3 id="epicgear">Epic Potential Gear and so on</h3>
            <hr/>
            <p>In early game, all gear should be at least 9% Main Stat with Epic Potential. You will also want to working towards Unique Potential gear. Your main focus for this would be to try and get your Weapon, Secondary Weapon, and Emblem to unique first as their potentials can provide stats like %Attack/Magic Attack, %Ignore DEF and %Boss Damage unlike the rest of your gear. As a note, do not keep %Damage lines as they do not provide as much as a boost as the other potential lines do</p>
            <p>As well, all equipment should have 3 lines of potential instead of 2. Otherwise, use <img src="/images/items/gold-potential-stamp.png" alt="Gold Potential Stamp"/> <a href="https://maplestorywiki.net/w/Gold_Potential_Stamp" target="_blank" rel="noreferrer noopener">[Gold Potential Stamp]</a> to unlock a 3rd line</p>
            <p>Do not be afraid to use expiring <img src="/images/items/hard-cube.png" alt="Use Hard Cube"/> <a href="https://maplestorywiki.net/w/Hard_Cube" target="_blank" rel="noreferrer noopener">[Hard Cubes]</a> as it's better to use them than waste it. As well, take that risk of rerolling your "okay" potentials for "great" potentials as they are easily regained</p>
            <p>Some ways to obtain Epic Potential Scrolls are:</p>
            <ul>
                <li><strong style={{color: '#ff6600'}}>[Heroic Worlds] </strong>Yu Garden shop</li>
                <li><strong>[Interactive Worlds] </strong>Auction House</li>
                <li>Event Shops</li>
                <li>Elite Bosses</li>
                <li>Pollo/Fritto Missions + Inferno Wolf</li>
                <li>Legion System</li>
            </ul>
            <p>Some ways to obtain Gold Potential Stamps are:</p>
            <ul>
                <li><strong>[Interactive Worlds]</strong> Auction House
                    <ul>
                        <li>Search for <img src="/images/items/gold-potential-stamp.png" alt="Perfect Potential Stamp"/> <a href="https://maplestorywiki.net/w/Perfect_Potential_Stamp" target="_blank" rel="noreferrer noopener">[Perfect Potential Stamp]</a></li>
                    </ul>
                </li>
                <li><strong>[Heroic Worlds]</strong> General Merchant Stores
                    <ul>
                        <li>Sells <img src="/images/items/silver-potential-stamp.png" alt="Silver Potential Stamp"/> <a href="https://maplestorywiki.net/w/Silver_Potential_Stamp" target="_blank" rel="noreferrer noopener">[Silver Potential Stamp]</a> instead that has a lower chance of success</li>
                    </ul>
                </li>
                <li>Event Shops</li>
                <li>Elite Bosses</li>
                <li>Pollo/Fritto Missions + Inferno Wolf</li>
                <li>Legion System</li>
            </ul>
            <p>Some ways to obtain Hard Cubes are:</p>
            <ul>
                <li>Crafting</li>
                <li>Harvesting from Mysterious Veins / Herbs</li>
                <li>Commerci Voyages</li>
                <li>Bosses</li>
                <li>Pollo/Frito Missions + Inferno Wolf</li>
            </ul>
        </div>
    );
};

function EarlygameBossesOne(){
  return(
    <div>
        <ArticleHeaderTwo id="bosses">[ &lt; 2k Main Stat] Earlygame Bosses</ArticleHeaderTwo>
        <hr/>
        <p>The amount of Main Stat listed is just a safe recommendation, your class may be able to defeat a boss with lower stat since there many other ways to improve a character besides Main Stat like Boost Nodes, %Boss Damage, or %Ignore DEF</p>
        <p>There are also better options to test boss readiness such as attempting Practice Mode on a boss or Battle Analysis with a training dummy</p>
        <p>An alternative is also to compare with Combat Power like this <a href="https://docs.google.com/spreadsheets/d/1CVXdf29crUi0QH1Pw4JZfcfEys-i4NDcSE7oqhJG3N4" target="_blank" rel="noreferrer noopener">Google Doc</a></p>
        <ul>
            <li> <img src="/images/map-icons/zakum.png" alt="ElNathDungeon icon"/> <a href="https://maplestorywiki.net/w/Zakum" target="_blank" rel="noreferrer noopener"><strong>Normal Zakum</strong></a>
            <ul>
                <li><strong>Source of Mesos in Heroic Worlds from</strong>: <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestorywiki.net/w/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> that can be sold for Mesos</li>
                <li>
                    Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                </li>
                <li>
                    <strong>Easy Mode and Above Rewards:</strong>
                    <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/> <a href="https://maplestorywiki.net/w/Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>
                </li>
                <li>
                    <strong>Normal Mode and Above Rewards:</strong>
                    <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestorywiki.net/w/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>
                    , <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/> <a href="https://maplestorywiki.net/w/Condensed_Power_Crystal">[</a><a href="https://maplestorywiki.net/w/Condensed_Power_Crystal" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>
                    , <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory"/> <a href="https://maplestorywiki.net/w/Aquatic_Letter_Eye_Accessory" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>
                    , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/ursus.png" alt="MapIcon Ursus"/>  <strong><a href="https://maplestorywiki.net/w/Ursus" target="_blank" rel="noreferrer noopener">Ursus</a></strong>
            <ul>
                <li>Source of Mesos</li>
                <li>For more info on Ursus, check this out: <a href="https://strategywiki.org/wiki/MapleStory/Ursus" target="_blank" rel="noreferrer noopener">https://strategywiki.org/wiki/MapleStory/Ursus</a></li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Easy Papulatus</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Magnus</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                </li>
                <li>
                    <strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>
                    , <img src="/images/equipment/elite-heliseum-cape.png"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Cape" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>
                    , <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestorywiki.net/w/Crystal_Ventus_Badge" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>
                    , <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestorywiki.net/w/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>
                    , <img src="/images/equipment/kaiserion.png" alt="Eqp Kaiserion"/> <a href="https://maplestorywiki.net/w/Kaiserion" target="_blank" rel="noreferrer noopener">[Kaiserion]</a>
                    , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                    , <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coin]</a>
                </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <a href="https://maplestorywiki.net/w/Hilla/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Hilla</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                </li>
                <li>
                    <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestorywiki.net/w/Stone_of_Eternal_Life" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>
                    , <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>
                    , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                    , <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> <a href="https://maplestorywiki.net/w/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>
                </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/omega-sector.png"/> <a href="https://maplestorywiki.net/w/OMNI-CLN" target="_blank" rel="noreferrer noopener"><strong>OMNI-CLN</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                </li>
                <li>
                    <strong>Normal Mode Rewards:</strong> <img src="/images/items/omni-cln-component.png"/> <a href="https://maplestorywiki.net/w/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>
                    , <img src="/images/items/omni-cln-vacuum.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[OMNI-CLN Vacuum]</a>
                    , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                </li>
            </ul>
            </li>
        </ul>
    </div>
  );  
};

function EarlygameBossesTwo(){
    return(
        <div>
            <ArticleHeaderTwo id="bosses">[ &gt; 3k Main Stat] Earlygame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestorywiki.net/w/Gollux" target="_blank" rel="noreferrer noopener">Easy/Normal Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                    </li>
                    <li>
                        <strong>Main Rewards:</strong> <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> [Gollux Penny]
                        , <img src="/images/equipment/cracked-gollux-earrings.png" alt="Eqp Cracked Gollux Earrings"/> <img src="/images/equipment/cracked-gollux-ring.png" alt="Eqp Cracked Gollux Ring"/> <img src="/images/equipment/cracked-gollux-engraved-pendant.png" alt="Eqp Cracked Engraved Gollux Pendant"/> <img src="/images/equipment/cracked-gollux-engraved-belt.png" alt="Eqp Cracked Engraved Gollux Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">[Cracked Gollux Accessories]</a>
                        , <img src="/images/equipment/solid-gollux-earrings.png" alt="Eqp Solid Gollux Earrings"/> <img src="/images/equipment/solid-gollux-ring.png" alt="Eqp Solid Gollux Ring"/> <img src="/images/equipment/solid-gollux-engraved-pendant.png" alt="Eqp Solid Engraved Gollux Pendant"/> <img src="/images/equipment/solid-gollux-engraved-belt.png" alt="Eqp Solid Engraved Gollux Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">[Solid Gollux Accessories (Normal and above)]</a>
                    </li>
                    <li>Gollux Pennies <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> can be used to buy items from <a href="https://maplestorywiki.net/w/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestorywiki.net/w/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/root-abyss.png" alt="MapIcon Root Abyss"/> <strong><a href="https://maplestorywiki.net/w/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Normal Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a> and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal mode and Above Rewards:</strong> <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/>[Yggdrasil Coin]
                        , <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/><img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/> [Chair]
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/horntail.png" alt="MapIcon Horntail"/> <a href="https://maplestorywiki.net/w/Horntail" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal/Chaos Horntail</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[<em>(Chaos Only)</em> Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy Mode and Above Rewards: </strong> <img src="/images/equipment/silver-blossom-ring.png"/> <a href="https://maplestorywiki.net/w/Silver_Blossom_Ring" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring"/> <a href="https://maplestorywiki.net/w/Dea_Sidus_Earring" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>
                        , <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestorywiki.net/w/Horntail_Necklace" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>
                        , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
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
                </li>
                <li> <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <strong> <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Easy/Normal/Hard Von Leon</a></strong>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
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
                    <li> <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> exchange for <img src="/images/equipment/royal-von-leon-suit.png"/><img src="/images/equipment/royal-von-leon-energy-chain.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> <strong> <a href="https://maplestorywiki.net/w/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Normal/Hard Mori Ranmaru</a></strong>
                <ul>
                    <li>Hard requires much more range than Normal (close to 10k Main Stat) however grants a lot of EXP when defeated</li>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[<em>(Hard Only)</em> Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Eclectic Fennel"/> [Lv. 120 Gear]
                        , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 120 Rebirth Flame]</a>
                        , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Eternal Rebirth Flame]</a>
                    </li>
                    <li>
                        <strong>Hard Mode Only Rewards:</strong> , <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>
                        , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 130 Rebirth Flame]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> <a href="https://maplestorywiki.net/w/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Normal Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestorywiki.net/w/Black_Bean_Mark" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>
                        , <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestorywiki.net/w/Golden_Clover_Belt" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>
                        , <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestorywiki.net/w/Pink_Holy_Cup" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>
                        , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    );
};

function EarlygameBossesThree(){
    return(
        <div>
            <ArticleHeaderTwo id="bosses">[ &gt; 5k Main Stat] Earlygame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> <a href="https://maplestorywiki.net/w/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                        , <img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> [Empress Gear Fragment]
                    </li>
                    <li><img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> exchange for <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/><img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <a href="https://maplestorywiki.net/w/Hilla/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Hilla</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Hard Mode Only Rewards:</strong>
                        <img src="/images/equipment/will-o-the-wisps.png"/> <a href="https://maplestorywiki.net/w/Will_o%27_the_Wisps" target="_blank" rel="noreferrer noopener">[Will O' the Wisps]</a>
                        , <img src="/images/items/hilla-obelisk-floor-lamp.png"/> <a href="https://maplestorywiki.net/w/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Hilla Obelisk Floor Lamp]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <a href="https://maplestorywiki.net/w/Arkarium/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal Arkarium</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestorywiki.net/w/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[<em>(Normal Only)</em> Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy mode and Above Rewards:</strong> <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant"/> <a href="https://maplestorywiki.net/w/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>
                        , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> [Lv. 130 Rebirth Flame]
                        , <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>
                    </li>
                    <li>
                        <strong>Normal mode Only Rewards:</strong> <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a href="https://maplestorywiki.net/w/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>
                        , <img src="/images/items/arkarium-statue.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Arkarium Statue]</a>
                    </li>
                    <li>Ability to clear Arkarium early game will depend on your class, for example, does your class have a bind or iFrame?</li>
                </ul>
                </li>
            </ul>
        </div>
    );
};

function EarlygameBossesFour(){
    return(
        <div>
            <ArticleHeaderTwo>[ &gt; 8k Main Stat] Earlygame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> <a href="https://maplestorywiki.net/w/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode Only Rewards:</strong> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>
                        , <img src="/images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield"/><img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield"/><img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield"/> [Shield Recipes]
                        , <img src="/images/items/plush-cygnus-shelf.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Plush Cygnus Shelf]</a>
                    </li>
                    <li><img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> exchange for <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/><img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/zakum.png" alt="ElNathDungeon icon"/> <a href="https://maplestorywiki.net/w/Zakum" target="_blank" rel="noreferrer noopener"><strong>Chaos Zakum</strong></a>
                <ul>
                    <li><strong>Source of Mesos in Heroic Worlds from</strong>: <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestorywiki.net/w/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> that can be sold for Mesos</li>
                    <li>
                        Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
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
                </li>
                <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Normal Papulatus</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/papulatus-clock-chair.png"/>
                            <a href="https://maplestorywiki.net/w/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Papulatus Clock Chair]</a>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Magnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Nova Cape]</a>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    );
};

function EarlygameBossesFive(){
    return(
        <div>
            <ArticleHeaderTwo>[ &gt; 12k Main Stat] Earlygame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> <a href="https://maplestorywiki.net/w/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Chaos Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-pink-bean-hat.png"/><img src="/images/equipment/chaos-pink-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Chaos_Pink_Bean_Set_I" target="_blank" rel="noreferrer noopener">[Chaos Pink Bean Set]</a>
                        , <img src="/images/equipment/black-bean-hat.png"/><img src="/images/equipment/black-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Black_Bean_Set" target="_blank" rel="noreferrer noopener">[Black Bean Set]</a>
                        , <img src="/images/items/powerful-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                        , <img src="/images/items/pink-bean-armchair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Pink Bean Armchair]</a>
                        </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> <strong><a href="https://maplestorywiki.net/w/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Main Rewards:</strong> <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noopener noreferrer">[Secondary Weapon Fragment]</a>
                        , <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestorywiki.net/w/Hayato%27s_Treasure" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestorywiki.net/w/Kanna%27s_Treasure" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestorywiki.net/w/Ayame%27s_Treasure" target="_blank" rel="noopener noreferrer">Belt</a> ]
                        , <img src="/images/items/princess-no-chair.png" alt="Setup Princess No Chair"/> <a href="https://maplestorywiki.net/w/Princess_No_Chair" target="_blank" rel="noopener noreferrer">[Princess No Chair]</a>
                        , <img src="/images/items/princess-no-effect-coupon.png" alt="Use Princess No Effect Coupon"/> <a href="https://maplestorywiki.net/w/Princess_No_Effect_Coupon" target="_blank" rel="noopener noreferrer">[Princess No Effect Coupon]</a>
                        , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                    </li>
                    <li><img src=" /images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> can be used to redeem the best <img src=" /images/equipment/princess-nos-accursed-shield.png" alt="Eqp Princess No's Accursed Shield"/> <img src="/images/equipment/princess-nos-fox-marble.png" alt="Eqp Princess No's Fox Marble"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Secondary Weapons]</a> in the game</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestorywiki.net/w/Gollux" target="_blank" rel="noreferrer noopener">Hard Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                    </li>
                    <li><strong>Main Rewards:</strong> <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Coins], <img src=" /images/equipment/reinforced-gollux-earrings.png" alt="Eqp Reinforced Gollux Earrings"/> <img src=" /images/equipment/reinforced-engraved-gollux-belt.png" alt="Eqp Reinforced Engraved Gollux Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">[Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                    </li>
                    <li>Gollux Coins <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestorywiki.net/w/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestorywiki.net/w/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
            </ul>
        </div>
    );
};

function MidgameBossesOne(){
    return(
        <div>
            <ArticleHeaderTwo>[ &gt; 14k Main Stat] Midgame Bosses</ArticleHeaderTwo>
            <hr/>
            <p>Recommended to have at least &gt;%90 IED and &gt;200% Boss Damage for bosses beyond this point</p>
            <ul>
                <li> <img src="/images/map-icons/root-abyss.png" alt="MapIcon Root Abyss"/> <strong><a href="https://maplestorywiki.net/w/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Chaos Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/> <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/> <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/> <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Chaos Hat], <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> [CRA Gear Fragment], <img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/>[Chaos Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/> <img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/> <img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/> <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair]
                    , <img src="/images/items/pierre-umbrella-stand.png"/><img src="/images/items/von-bon-windup-clock.png"/><img src="/images/items/crimson-queen-vanity-table.png"/><img src="/images/items/vellum-lava-bathtub.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Furniture]</a>
                    </li>
                    <li>These fragments <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> exchange for <img src=" /images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Mana Cradle"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 Root Abyss Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Magnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
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
                </li>
                <li><img src="/images/map-icons/fort-asura.png" alt="MapIcon Fort Asura"/> <a href="https://maplestorywiki.net/w/Akechi_Mitsuhide/Monster" target="_blank" rel="noopener noreferrer"><strong>Akechi Mitsuhide</strong></a>:
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/equipment/nimbus-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><img src="/images/equipment/weeping-spirit-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>
                            , <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> <a href="https://maplestorywiki.net/w/Mark_of_the_Silver_Wolf" target="_blank" rel="noopener noreferrer">[Mark of the Silver Wolf]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/><a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>
                            , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/><a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>
                            , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/><a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                            , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/><a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
                        </li>
                        <li><img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> Coin is usage to exchange for Japanese Wolf Weapons from <a href="https://maplestorywiki.net/w/Kobayakawa_Takakage" target="_blank" rel="noopener noreferrer">Kobayakawa Takakage</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function MidgameBossesTwo(){
    <div>
        <ArticleHeaderTwo>[ &gt; 20k Main Stat] Midgame Bosses</ArticleHeaderTwo>
        <hr/>
        <ul>
            <li> <img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Chaos Papulatus</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                </li>
                <li>
                    <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestorywiki.net/w/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
                    , <img src="/images/items/papulatus-wall-clock.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Papulatus Wall Clock]</a>
                </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestorywiki.net/w/Lotus" target="_blank" rel="noreferrer noopener">Normal Lotus</a></strong>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                <li>
                    <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)"/> [Extraordinary Energy Core (Grade S)]
                    , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                    , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                    , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                    , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                    , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                    , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                    , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                    , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                    , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                    , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                    , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                    , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
                </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> <a href="https://maplestorywiki.net/w/Damien" target="_blank" rel="noreferrer noopener"><strong>Normal Damien</strong></a>
            <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a> and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                <li>
                    <strong>Normal Mode Rewards: </strong> , <img src="/images/equipment/ruin-force-shield.png" alt="Eqp Ruin Force Shield"/> <a href="https://maplestorywiki.net/w/Ruin_Force_Shield" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a>
                    , <img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone"/> [Twisted Stigma Spirit Stone]
                    , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                    , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                    , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                    , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                    , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                    , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                    , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                    , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                    , <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]
                    , <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
                    , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                    , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                    </li>
            </ul>
            </li>
            <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestorywiki.net/w/Gollux" target="_blank" rel="noreferrer noopener">Hell Gollux (Hellux)</a></strong>
            <ul>
            <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]</li>
                <li><strong>Main Rewards:</strong> <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Coins]
                , <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/> <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Superior/Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                , <img src="/images/items/gollux-wood-bench.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gollux Wood Bench]</a>
                </li>
                <li>Gollux Coins <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestorywiki.net/w/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestorywiki.net/w/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
            </ul>
            </li>
        </ul>
    </div>
};

function MidgameBossesThree(){
    return(
        <div>
            <ArticleHeaderTwo>[ &gt; 28k Main Stat] Midgame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <a href="https://maplestorywiki.net/w/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                        <li>
                            <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong><a href="https://maplestorywiki.net/w/Will" target="_blank" rel="noreferrer noopener">Easy Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Easy Mode and Above Rewards: </strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> <strong><a href="https://maplestorywiki.net/w/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Normal Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards: </strong>
                            <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function EndgameBossesOne(){
    return(
        <div>
            <ArticleHeaderTwo>Tier I Endgame Bosses</ArticleHeaderTwo>
            <hr/>
            <p>Bosses beyond this point are not meant to be soloable and are more party-oriented bosses. As well, beyond this point, bosses will be separated by tiers as there is no good recommended stat indicators for the reasons mentioned earlier.</p>
            <ul>
                <li> <img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <a href="https://maplestorywiki.net/w/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/butterfly-droplet-stone.png"/> <a href="https://maplestorywiki.net/w/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>
                            , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong><a href="https://maplestorywiki.net/w/Will" target="_blank" rel="noreferrer noopener">Normal Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/stone-cobweb-droplet.png"/> <a href="https://maplestorywiki.net/w/Stone_Cobweb_Droplet" target="_blank" rel="noreferrer noopener">[Stone Cobweb Droplet]</a>
                            , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong><a href="https://maplestorywiki.net/w/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Normal Gloom</a></strong>
                    <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Estella_Earrings" target="_blank">[Estella Earrings]</a>
                        , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Spark_of_Determination" target="_blank">[Spark of Determination]</a>
                        , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                        , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                        , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                        , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                        , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                    </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong><a href="https://maplestorywiki.net/w/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Normal Darknell</a></strong>
                    <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Estella Earrings]</a>
                        , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination]
                        , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                        , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                        , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                        , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                        , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                        , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                        , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                        , <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> [Intense Power Crystal]
                        , <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
                        , <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function EndgameBossesTwo(){
    return(
        <div>
            <ArticleHeaderTwo>Tier II Endgame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestorywiki.net/w/Lotus" target="_blank" rel="noreferrer noopener">Hard Lotus</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards: </strong> <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                            , <img src="/images/items/damaged-black-heart.png" alt="Etc Damaged Black Heart"/> <a href="https://maplestorywiki.net/w/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>
                            , <img src="/images/equipment/android.png" alt="Eqp Deluxe Android (M)"/> <a href="https://maplestorywiki.net/w/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>
                            , <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> <a href="https://maplestorywiki.net/w/Berserked">[Beserked Face Accessory]</a>
                            , <img src="/images/items/orchids-plush-bunny.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Orchid's Plush Bunny]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> <a href="https://maplestorywiki.net/w/Damien" target="_blank" rel="noreferrer noopener"><strong>Hard Damien</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/damienroid.png"/> <a href="https://maplestorywiki.net/w/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>
                            , <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestorywiki.net/w/Magic_Eyepatch" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>
                            , <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>
                            , <img src="/images/items/damiens-sword.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Damien's Sword]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <a href="https://maplestorywiki.net/w/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/lucidroid.png"/> <a href="https://maplestorywiki.net/w/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>
                            , <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/><a href="https://maplestorywiki.net/w/Dreamy_Belt" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/lucids-canopy-bed.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Lucid's Canopy Bed]</a>
                            , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong><a href="https://maplestorywiki.net/w/Will" target="_blank" rel="noreferrer noopener">Hard Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards: </strong> <img src="/images/items/wills-cursed-spellbook-selection-box.png"/> <a href="https://maplestorywiki.net/w/Will%27s_Cursed_Spellbook_Selection_Box" target="_blank" rel="noreferrer noopener">[Will's Cursed Spellbook Selection Box]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/mirror-world-nodestone.png" alt="Use Mirror World Nodestone"/><a href="https://maplestorywiki.net/w/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/wills-web-swing-chair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Will's Web Swing Chair]</a>
                            , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon Labyrinth of Suffering"/> <strong><a href="https://maplestorywiki.net/w/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Normal Verus Hilla</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Daybreak Pendant]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function EndgameBossesThree(){
    return(
        <div>
            <ArticleHeaderTwo>Tier III Endgame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong><a href="https://maplestorywiki.net/w/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Chaos Gloom</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a> and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/endless-terror.png" alt="Eqp Endless Terror"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Endless_Terror" target="_blank">[Endless Terror]</a>
                            , <img src="/images/items/gloom-dark-bean-bag.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gloom Dark Bean Bag]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon Labyrinth of Suffering"/> <strong><a href="https://maplestorywiki.net/w/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Hard Verus Hilla</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                </li>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong><a href="https://maplestorywiki.net/w/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Hard Darknell</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Eqp Commanding Force Earrings"/> <a href="https://maplestorywiki.net/w/Commanding_Force_Earring" target="_blank" rel="noreferrer noopener">[Commanding Force Earrings]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/darknells-helmet-decoration.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Darknell's Helmet Decoration]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> <strong><a href="https://maplestorywiki.net/w/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Chaos Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Main Rewards:</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function EndgameBossesFour(){
    return(
        <div>
            <ArticleHeaderTwo>Tier IV Endgame Bosses</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <a href="https://maplestorywiki.net/w/Black_Mage/Monster" target="_blank" rel="noreferrer noopener"><strong>Black Mage</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/sealed-genesis-weapon-box.png" alt="Use Sealed Genesis Weapon Box"/> <a href="https://maplestorywiki.net/w/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>
                            , <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestorywiki.net/w/Genesis_Badge" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Arcane_Umbra_Armor_Box" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/black-mages-mirror.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Black Mage's Mirror]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <a href="https://maplestorywiki.net/w/Seren/Monster" target="_blank" rel="noreferrer noopener"><strong>Seren</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/mitras-rage-selection-box.png" alt="Use Mitra's Rage Selection Box"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Rage_Selection_Box" target="_blank" rel="noopener">[Mitra's Rage Selection Box]</a>
                            , <img src="/images/items/mitras-nodestone.png"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>
                            , <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noopener">[Daybreak Pendant]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/karote.png" alt="MapIcon Cernium"/> <a href="https://maplestorywiki.net/w/Kalos/Monster" target="_blank" rel="noreferrer noopener"><strong>Kalos</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], and <img src="/images/items/intense-power-crystal-daily.png" alt="Etc Intense Power Crystal Daily"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestorywiki.net/w/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a>
                            , <img src="/images/items/kalos-ceiling-fan.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener">[Kalos Ceiling Fan]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
                        </li>
                        <li>
                            <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestorywiki.net/w/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a> is used to redeem <img src="/images/equipment/eternal-knight-helm.png" alt="Eqp Eternal Knight Helm"/> <img src="/images/equipment/eternal-knight-armor.png" alt="Eqp Eternal Knight Armor"/> <img src="/images/equipment/eternal-knight-pants.png" alt="Eqp Eternal Knight Pants"/> [Eternal Gear]
                        </li>
                    </ul>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

function DailyWeekly(){
    return(
        <div>
            <ArticleHeaderTwo id="dailyweekly">Daily / Weekly Quests</ArticleHeaderTwo>
            <hr/>
            <p>Daily and Weekly Quests are primarily unlocked after Lv. 200. Characters pre-200 should focus on levelling up first before worring about these quests</p>
            <h3>Dailies</h3>
            <ul>
                <li><img src="/images/map-icons/lil-wonky.png" alt="Lil Wonky Pet"/> <strong>[Lv. Any] MAPLE Daily Gift</strong>: A free daily check-in gift available after defeating 300 enemies near your level 
                    <ul>
                        <li>There are a total of 28 check-ins and check-ins reset monthly</li>
                        <li>Upon defeating 300 enemies, a notification will pop up, or you can open the MAPLE Daily Gift UI to claim gift</li>
                        <li>To open the MAPLE Daily Gift UI, click the green icon with a check mark on the bottom right menu bar and then click on "Daily Gift"</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/monster-park.png" alt="MapIcon MonsterPark"/> <strong>[Lv. 105+] <a href="https://maplestorywiki.net/w/Monster_Park" target="_blank" rel="noreferrer noopener">Monster Park</a></strong>: Completing Monster Park rewards EXP and <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestorywiki.net/w/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a> for exchanging items
                    <ul>
                        <li>The <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> coins can be exchanged for potion buffs <img src="/images/items/extreme-red-potion.png" alt="Use Extreme Red Potion"/> <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <img src="/images/items/extreme-blue-potion.png" alt="Use Extreme Blue Potion"/> <img src="/images/items/extreme-gold-potion.png" alt="Use Extreme Gold Potion"/> that can be stored in storage which are useful training and bossing</li>
                        <li>Completing Monster Park 77 times for each day of the week will reward a <img src="/images/equipment/seven-day-monster-parker.png" alt="Eqp Seven Day Monster Parker"/> <a href="https://maplestorywiki.net/w/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Medal]</a> that provides +10% Ignore Enemy Defense</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/maple-tour.png" alt="MapIcon Maple Tour"/> <strong>[Lv. 105+] Maple Tour</strong>: Completing Maple Tour rewards Mesos and <img src="/images/items/maple-tour-coin.png" alt="Etc Maple Tour Coin"/> [Maple Tour Coins] for exchanging items
                    <ul>
                        <li>Mesos are accumulated and can be retrieved 7 days later for the full amount or retrieved earlier for half the amount</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/yu-garden.png" alt="MapIcon Yu Garden"/> <strong>[Lv. 140+] <a href="https://maplestorywiki.net/w/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff6600'}}>[Heroic World]</span> The Far East (Yu Garden)</a></strong>: Completing The Far East storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls] in Heroic Worlds only</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong>[Lv. 200+] <a href="https://maplestorywiki.net/w/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">Arcane River - Vanishing Journey</a></strong>: Completing the Vanishing Journey storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong>[Lv. 210+] <a href="https://maplestorywiki.net/w/Category:Chu_Chu_Island" target="_blank" rel="noreferrer noopener">Arcane River - Chu Chu Island</a></strong>: Completing the Chu Chu Island storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong>[Lv. 220+] <a href="https://maplestorywiki.net/w/Category%3ALachelein" target="_blank" rel="noreferrer noopener">Arcane River - Lachelein</a></strong>: Completing the Lachelein storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong> [Lv. 225+] <a href="https://maplestorywiki.net/w/Category:Arcana" target="_blank" rel="noreferrer noopener">Arcane River - Arcana</a></strong>: Completing the Arcana storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230+] <a href="https://maplestorywiki.net/w/Category%3AMorass" target="_blank" rel="noreferrer noopener">Arcane River - Morass</a></strong>: Completing the Morass storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong>[Lv. 235+] <a href="https://maplestorywiki.net/w/Category:Esfera" target="_blank" rel="noreferrer noopener">Arcane River - Esfera</a></strong>: Completing the Esfera storyline unlocks Daily Quests
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong>[Lv. 245+] <a href="https://maplestorywiki.net/w/Quests/224/(Daily_Quest)_Tenebris_Research" target="_blank" rel="noreferrer noopener">Tenebris - Moonbridge</a></strong>: Completing the Moonbridge storyline unlocks Daily Quests
                    <ul>
                        <li>More daily quests are available after completing the Labyrinth of Suffering and Limina storylines</li>
                        <li><strong>Main Rewards</strong>: <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination]</li>
                    </ul>
                </li>
            </ul>
            <h3>Weeklies</h3>
            <ul>
                <li><img src="/images/map-icons/haven.png" alt="MapIcon Scrapyard"/> <strong>[Lv. 190+] <a href="https://maplestorywiki.net/w/Category:Scrapyard" target="_blank" rel="noreferrer noopener">Scrapyard</a></strong>: No pre-quests
                    <ul>
                        <li>Weekly Quests reward <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/> [Diffusion-Line Energy Core (Grade A)] that are used to create <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/> [AbsoLab Coins] to buy <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> [<em>(Shoe/Glove/Cape/Weapon)</em> AbsoLab Gear]</li>
                        <li>Enemies in this area also drop <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon Dark World Tree"/> <strong>[Lv. 190+] <a href="https://maplestorywiki.net/w/Category:Dark_World_Tree" target="_blank" rel="noreferrer noopener">Dark World Tree</a></strong>: No pre-quests
                    <ul>
                        <li>Weekly Quests reward <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/> [Faint Stigma Spirit Stone] that are used to create <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> [Stigma Coins] to buy for <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Knight Suit"/> <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> [<em>(Hat/Overall/Shoulder/Weapon)</em> AbsoLab Gear]</li>
                        <li>Monsters in this area also drop <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong>[Lv. 200+] <a href="https://maplestorywiki.net/w/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">Arcane River - Vanishing Journey</a></strong>: Completing the Vanishing Journey Daily twice rewards Nodestones
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/items/nodestone.png" alt="Use Nodestone"/> <a href="https://maplestorywiki.net/w/Nodestone" target="_blank" rel="noreferrer noopener">[Nodestones]</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong>[Lv. 200+] <a href="https://maplestorywiki.net/w/Erda_Spectrum" target="_blank" rel="noreferrer noopener">[Party Quest] Erda Spectrum</a></strong>: Unlocked after completing the Vanishing Journey storyline. Requires 1-3 party members to enter. There are 2 stages and the objective to help Nina conduct research
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong>[Lv. 210+] <a href="https://maplestorywiki.net/w/Category:Hungry_Muto" target="_blank" rel="noreferrer noopener">[Party Quest] Hungry Muto</a></strong>: Unlocked after completing the Chu Chu Island storyline. Requires 1-4 party members to enter. The main objective is to gather ingredients from monsters to create dishes to feed Muto
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong>[Lv. 220+] <a href="https://maplestorywiki.net/w/Midnight_Chaser" target="_blank" rel="noreferrer noopener">Midnight Chaser</a></strong>: This activity can only be entered alone. The objective is to locate objects scattered around a series of maps
                    <ul>
                        <li>
                            <strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbols]
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong>[Lv. 225+] <a href="https://maplestorywiki.net/w/Spirit_Savior" target="_blank" rel="noreferrer noopener">Spirit Savior</a></strong>: This activity can only be entered alone. The objective is to save Rock Spirits that have been kidnapped while avoiding an evil spirit that chases you
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230+] <a href="https://maplestorywiki.net/w/Ranheim_Defense" target="_blank" rel="noreferrer noopener">Ranheim Defense</a></strong>: This activity can only be entered alone. The objective is to defend a pillar on the middle of the map from invading enemies
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong>[Lv. 235+] <a href="https://maplestorywiki.net/w/Esfera_Guardian" target="_blank" rel="noreferrer noopener">Esfera Guardian</a></strong>: This activity can only be entered alone. The objective is to destroy dimensional gates using a turret to aim and shoot
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbols]</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h3>Optional:</h3>
            <p>Quests here have rewards that are not required for most players</p>
            <ul>
                <li><img src="/images/map-icons/commerci.png" alt="MapIcon Commerci"/> <strong>[Lv. 140+] <a href="https://strategywiki.org/wiki/MapleStory/Commerci_Trade_Voyages" target="_blank" rel="noreferrer noopener">[Daily] Commerci Voyages</a></strong>: Unlocked after reaching the town of San Commerci. Completing trade voyages reward <img src="/images/items/commerci-denaro.png" alt="Etc Commerci Denaro"/> <a href="https://maplestorywiki.net/w/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a>
                    <ul>
                        <li>Denaros are used to buy <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestorywiki.net/w/Sweetwater_Tattoo" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a> and <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestorywiki.net/w/Sweetwater_Monocle" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a> from <a href="https://maplestorywiki.net/w/Javert" target="_blank" rel="noreferrer noopener">Javert</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/kritias.png" alt="MapIcon Kritias"/> <strong>[Lv. 170+] [Weekly] Kritias</strong>: Unlocked after completing the Kritias storyline
                    <ul>
                        <li>Weekly Quests reward <img src="/images/items/anti-magic-stone.png" alt="Etc Anti-magic Stone"/> <a href="https://maplestorywiki.net/w/Anti-magic_Stone" target="_blank" rel="noreferrer noopener">[Anti-magic Stone]</a> and <img src="/images/items/anti-magic-stone-piece.png" alt="Use Anti-magic Stone Piece"/> <a href="https://maplestorywiki.net/w/Anti-magic_Stone_Piece" target="_blank" rel="noreferrer noopener">[Anti-magic Stone Piece]</a> that are used to create <img src="/images/items/kritias-commemorative-coin.png" alt="Etc Kritias Commemorative Coin"/> <a href="https://maplestorywiki.net/w/Keilbarren" target="_blank" rel="noreferrer noopener">[Kritias Commemorative Coins]</a> to buy <img src="/images/equipment/tyrant-hyades-gloves.png" alt="Eqp Tyrant Hyades Gloves"/> [Tyrant Gloves] and <img src="/images/items/hard-magnus-reset-ticket.png" alt="Use Hard Magnus Reset Ticket"/> <img src="/images/items/chaos-vellum-reset-ticket.png" alt="Use Chaos Vellum Reset Ticket"/> [Weekly Boss Reset Tickets]</li>
                        <li>For more info on Kritias, check out: <a href="https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonheart Castle"/> <strong>[Lv. 180+] <a href="https://maplestorywiki.net/w/Category:Crimsonwood" target="_blank" rel="noreferrer noopener">[Daily] Crimsonwood - Phantom Forest</a></strong>: Completing the Phantom Forest storyline unlocks Daily Quests that reward <img src="/images/items/raven-ninja-coin.png" alt="Etc Raven Ninja Coin"/> <a href="https://maplestorywiki.net/w/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestorywiki.net/w/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> to buy items from Mo and Fiona in the Phantom Forest
                    <ul>
                        <li><strong>Main Rewards: </strong> <img src="/images/equipment/numenals-willpower.png" alt="Eqp Numenal's Willpower"/> <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <img src="/images/equipment/legacy-of-light.png" alt="Eqp Legacy of Light"/> <img src="/images/equipment/legacy-of-darkness.png" alt="Eqp Legacy of Darkness"/> <img src="/images/equipment/delgrunds-honor.png" alt="Eqp Delgrund's Honor"/> <img src="/images/equipment/lirenis-wish.png" alt="Eqp Lireni's Wish"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="/images/equipment/white-identity.png" alt="Eqp White Identity"/> <img src="/images/equipment/crystal-leaf-earrings.png" alt="Eqp Crystal Leaf Earrings"/> <img src="/images/equipment/ravens-beak.png" alt="Eqp Raven's Beak"/> <a href="https://maplestorywiki.net/w/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="/images/items/balanced-fury.png" alt="Use Balanced Fury"/> <a href="https://maplestorywiki.net/w/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="/images/items/crystal-ilbi.png" alt="Use Crystal Ilbi Throwing-Stars"/> <a href="https://maplestorywiki.net/w/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a></li>
                    </ul>
                </li>
                <li><strong>[Daily] <a href="https://maplestorywiki.net/w/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: Completing quests reward <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestorywiki.net/w/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a></li>
            </ul>
        </div>
    );
};

function MaplePlanner(){
    return(
        <div>
            <ArticleHeaderTwo id="mapleplanner">Maple Planner</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/maple-planner-ui.png" alt="Maple Planner"/>
            <p>The Maple Planner provides a convenient way to organize your daily and weekly content. By pressing on the Gear icon beside each category, content can be added to the Maple Planner. Content that is added like bosses can be directly teleported. Content that is added like daily or weekly quests can be accepted and completed directly</p>
            <p>The Maple Planner can be accessed by clicking the Book icon on the left-side of the screen or by assigning a Key Slot</p>
        </div>
    );
}

function TrainingMaps(){
    SwiperCore.use([Scrollbar, Mousewheel]);

    // Create search query object that searches our data by looking at the question and tags
    const fuse = new Fuse(maps, {keys: ["level", "mapName", "area"]});
    // Used to store what's typed into search bar
    const [searchTerm, setSearchTerm] = React.useState("");

    // Custom filtering function, return original if search query returns nothing (len = 0)
    const searchQuery = (term) => {
        const results = fuse.search(term);
        if(results.length){
            return results;
        }
        return maps;
    }

    return(
        <div>
            <ArticleHeaderTwo id="training">Training Maps</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/world-map-ui.png" alt="World Map"/>
            <p>Below is a list of suggested training maps. To find out how to navigate to a specific map, open your World Map (W by default) and search for the desired map on the right-hand side. Clicking on an entry will direct you to the map and start blinking</p>
            <p>Special thanks to Proof#8868 for the list of training maps. Click <a href="https://docs.google.com/spreadsheets/d/1QqtsUcnB5WBMGplKvpJI3qZQYAR5HSKn7VdHsJvRTtg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> for a Google Sheets version of the training maps</p>
            <p><em>*Search function may not be 100% reliable</em></p>
            <TrainingMapSearchWrapper><TrainingMapSearch className="faq-search" type="text" placeholder="Search" onChange={event => setSearchTerm((event.target.value))}></TrainingMapSearch></TrainingMapSearchWrapper>
            <TrainingMapSwiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView="auto"
                direction="vertical"
                freeMode
                mousewheel
                >
                    {
                        // Since fuse returns a slightly different object, we need to use a ternary to adjust based on if the original is returned or the filtered is returned
                        searchQuery(searchTerm).map((map, index) =>
                        <SwiperSlide key={index}>
                            <TrainingMap level={map.level ? map.level : map.item.level} icon={map.icon ? map.icon : map.item.icon} mapName={`${map.area ? map.area : map.item.area} - ${map.mapName ? map.mapName : map.item.mapName}`} mapLink={map.mapLink ? map.mapLink : map.item.mapLink}/>
                        </SwiperSlide>
                        )
                    }
            </TrainingMapSwiper>
        </div>
    );
};

function ThemeDungeons(){
    return(
        <div>
            <ArticleHeaderTwo id="themedungeon">Theme Dungeons</ArticleHeaderTwo>
            <hr/>
            <p>Theme Dungeons are storylines tied to areas below Lv. 200. Typcially, completing a theme dungeon rewards Mesos and equipment. In the next section, Quest Content, the starting quest for each theme dungeon will be listed</p>
            <p>Above Lv. 200, area quests are referred to as simply storylines or questlines. The main story above Lv. 200 takes place in the Arcane River and continent of Grandis. Within these two areas are sub-areas with their own storylines and quests</p>
            <ul>
                <li> <img src="/images/map-icons/ellinel.png" alt="MapIcon Ellinel"/> <strong>[Lv. 30 - 59] </strong><a href="https://maplestorywiki.net/w/Category:Ellinel" target="_blank" rel="noreferrer noopener"><strong>Ellinel Fairy Academy</strong></a>
                    <ul>
                        <li><strong>Main Rewards</strong>:  <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/> <a href="https://maplestorywiki.net/w/Ellinel_Wings" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/> [Glove], <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/> <a href="https://maplestorywiki.net/w/Fairy_Mark" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a>, <img src="/images/equipment/honorary-fairy-professor.png" alt="Eqp Honorary Fairy Professor"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/gold-beach.png" alt="MapIcon Gold Beach"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach Resort</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/> <a href="https://maplestorywiki.net/w/Octopus_Earrings" target="_blank" rel="noreferrer noopener">[Earrings]</a>, <img src="/images/equipment/beach-bum.png" alt="Eqp Beach Bum"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/riena-strait.png" alt="MapIcon Riena Strait"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a></strong>
                    <ul>
                        <li><strong>Main Rewards:</strong>  <img src="/images/items/meso.png" alt="Meso"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/> <a href="https://maplestorywiki.net/w/Sailor_Mask" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/> <a href="https://maplestorywiki.net/w/Sailor_Belt" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="/images/equipment/deckhand.png" alt="Eqp Deckhand"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/elodin.png" alt="MapIcon Elodin"/> <strong> [Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category:Elodin" target="_blank" rel="noreferrer noopener">Secret Forest of Elodin</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/elodin-bird-dog.png" alt="Eqp Elodin Bird Dog"/> [Medal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/mushroom-castle.png" alt="MapIcon Mushroom Castle"/> <strong>[Lv. 60] <a href="https://strategywiki.org/wiki/MapleStory/Mushroom_Castle" target="_blank" rel="noreferrer noopener">Mushroom Kingdom</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/items/meso.png" alt="Meso"/> [3 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/violettas-knight.png" alt="Eqp Violetta's Knight"/> [Medal], <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> <a href="https://maplestorywiki.net/w/Heavy_Violetta_Cape" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a><a href="https://maplestorywiki.net/w/Deckhand" target="_blank" rel="noreferrer noopener">, </a> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/> <a href="https://maplestorywiki.net/w/Shackles_of_Love" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/afterlands.png" alt="MapIcon Afterlands"/> <strong>[Lv. 75] <a href="https://maplestorywiki.net/w/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/> <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/> <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Afterlands Totems]</a></li>
                        <li>An easy way to obtain permanent Totem equipment but it is known to be slightly buggy and frustrating without a guide</li>
                        <li>Here is a guide: <a href="https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/" target="_blank" rel="noreferrer noopener">https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/mushroom-shrine.png" alt="MapIcon Mushroom Shrine"/> <strong>[Lv. 100] </strong><a href="https://maplestorywiki.net/w/Category:Mushroom_Shrine" target="_blank" rel="noreferrer noopener"><strong>Mushroom Shrine Tales</strong></a>
                    <ul>
                        <li>Upon completing the storyline, the <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestorywiki.net/w/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> cape is rewarded with goods stats but it is tedious to obtain as the storyline is long
                            <ul>
                                <li>The cape can be reobtained at no cost if discarded thus useful for rerolling bonus stats</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon Lion King's Castle"/> <strong>[Lv. 115] <a href="https://maplestorywiki.net/w/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Pre-Quest] Lion King's Castle</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/heart-of-a-lion.png" alt="Eqp Heart of a Lion"/> [Medal]</li>
                        <li>Completing this theme dungeon unlocks access to the boss <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Korean Folk Town"/> <strong>[Lv. 130] <a href="https://maplestorywiki.net/w/Category:Korean_Folk_Town" target="_blank" rel="noreferrer noopener">Korean Folk Town</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/like-clouds-and-winds.png" alt="Eqp Like Clouds and Winds"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/golden-temple.png" alt="MapIcon Golden Temple"/> <strong> [Lv. 130] <a href="https://maplestorywiki.net/w/Category:Golden_Temple" target="_blank" rel="noreferrer noopener">Golden Temple</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/ravanas-golden-crown.png" alt="Eqp Ravana's Golden Crown"/> <a href="https://maplestorywiki.net/w/Ravana%27s_Golden_Crown" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="/images/equipment/seeker-of-gilded-truth.png" alt="Eqp Seeker of Gilded Truth"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonheart Castle"/> <strong> [Lv. 130] <a href="https://maplestorywiki.net/w/Category:Tynerum" target="_blank" rel="noreferrer noopener">Crimsonheart Castle</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/crimsonheart-savior.png" alt="Eqp Crimsonheart Savior"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/partem-ruins.png" alt="MapIcon Partem"/> <strong>[Lv. 135] </strong><strong>Partem Ruins</strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/blazing-hot.png" alt="Eqp Blazing Hot"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/yu-garden.png" alt="MapIcon Yu Garden"/> <strong>[Lv. 140] </strong><a href="https://maplestorywiki.net/w/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong>The Far East (Yu Garden)</strong></a>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [<em>(Heroic World Only)</em> Epic Potential Scroll], <img src="/images/equipment/horseback-riding-doll-totem.png" alt="Eqp Horseback Riding Doll Totem"/> <img src="/images/equipment/jade-kettle-totem.png" alt="Eqp Jade Kettle Totem"/> <img src="/images/equipment/bronze-incense-burner-totem.png" alt="Eqp Bronze Incense Burner Totem"/> [Totems]</li>
                        <li>Completing the questline unlocks daily quests that reward <img src="/images/items/yu-garden-coin.png" alt="Etc Yu Garden Coin"/> [Yu Garden Coins] used to exchange items</li>
                        <li>An in-depth guide to the Yu Garden dailies: <a href="https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/" target="_blank" rel="noreferrer noopener">  https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/ </a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/commerci.png" alt="MapIcon Commerci"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener">Commerci</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/commercis-forever-friend.png" alt="Eqp Commerci's Forever-Friend"/> [Medal], <img src="/images/equipment/commerci-hat.png" alt="Eqp Commerci Hat"/> <img src="/images/equipment/commerci-suit.png" alt="Eqp Commerci Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp Commerci Boots"/> <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/> <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/> <img src="/images/equipment/commerci-belt.png" alt="Eqp Commerci Belt"/> <img src="/images/equipment/commerci-shoulder.png" alt="Eqp Commerci Shoulder"/> <img src="/images/equipment/devils-sunrise.png" alt="Eqp Devil's Sunrise"/>[Commerci Equipment]</li>
                        <li>Upon reaching the town of San Commerci, Trade Voyages is unlocked with rewards such as <img src="/images/equipment/sweetwater-sword.png" alt="Eqp Sweetwater Axe"/> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> and <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestorywiki.net/w/Sweetwater_Tattoo" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestorywiki.net/w/Sweetwater_Monocle" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a></li>
                        <li>Additionally, in San Commerci, Transposing is unlocked
                            <ul><li>For more info on Transposing, check out <a href="https://www.youtube.com/watch?v=oDXiz0x0hV0" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=oDXiz0x0hV0</a></li></ul>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong>[Lv. 145] <a href="https://maplestorywiki.net/w/Category:Kerning_Tower" target="_blank" rel="noreferrer noopener">Kerning Tower</a></strong>
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/jackpot-entertainment-co-ceo.png" alt="Eqp Jackpot Entertainment Co-CEO"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/stone-colossus.png" alt="MapIcon Stone Colossus"/> <strong>[Lv. 150] <a href="https://maplestorywiki.net/w/Category:Stone_Colossus" target="_blank" rel="noreferrer noopener">Stone Colossus</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/colossal.png" alt="Eqp Colossal"/> [Medal], <img src="/images/items/kupos-ride-coupon.png" alt="Use Kupo's Ride Coupon"/> [Mount], <img src="/images/equipment/halflinger-expedition-badge.png" alt="Eqp Halflinger Expedition Badge"/> [Badge]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong>[Lv. 165] <a href="https://maplestorywiki.net/w/Category:Omega_Sector" target="_blank" rel="noreferrer noopener">Omega Sector</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/white-m-forcer.png" alt="Eqp White M-Forcer"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/savage-terminal.png" alt="MapIcon Savage Terminal"/> <strong>[Lv. 175] Detective Rave's Case Notes</strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/detective-raves-honorary-assistant.png" alt="Eqp Detective Rave's Honorary Assistant"/> [Medal]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/fox-valley.png" alt="MapIcon Fox Valley"/> <strong>[Lv. 185] <a href="https://maplestorywiki.net/w/Category:Fox_Valley" target="_blank" rel="noreferrer noopener">Fox Valley</a></strong>
                    <ul>
                        <li><strong>Main Rewards</strong>: <img src="/images/equipment/fox-point-ranger.png" alt="Eqp Fox Point Ranger"/> [Medal]</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

function QuestContent(){
    return(
        <div>
            <ArticleHeaderTwo id="quests">Quest Content</ArticleHeaderTwo>
            <hr/>
            <p>Quests are categorized as Job Quests, Main Quests, and Normal Quests. For a full list of quests, check out the <a href="https://maplestorywiki.net/w/Quests" target="_blank" rel="noreferrer noopener">MapleStory Wiki</a></p>
            <p>Below is a list of quests from the the Lightbulb icon on the left-hand side. Job Quests will not be listed below</p>
            <p>The list may not contain all quests as new quests are frequently added</p>
            <h3>Recommended Quests:</h3>
            <ul>
                <li><strong>(Lv. 33) Have you learned about pets?</strong> - Tutorial quest that rewards a 3-day pet (cannot be revived)</li>
                <li><strong>(Lv. 33) Trainer's Command</strong> - A special quest for unlocking the ability to have 3 pets out at once. Requires you to obtain a <img src="/images/items/pet-snack.png" alt="Cash Pet Snack"/> <a href="https://maplestory.wiki/GMS/251/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack]</a> from the Cash Shop using NX or <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points</li>
                <li><strong>(Lv. 35) The Professional</strong> - A quest to start Professions, the crafting system</li>
                <li><strong>(Lv. 70) [Link Skill] Teaching Link Skill</strong> - An explanation to Link Skills
                    <ul><li>Not required to unlock Link Skills</li></ul>
                </li>
                <li><strong>(Lv. 100) [Ursus] Rumors of The Mighty</strong> - Introduction quest to the boss Ursus</li>
                <li><strong>(Lv. 100) [Main][Heliseum]</strong> - Introduction quest to the Magnus boss pre-quest
                    <ul><li>Starting quest name may be different depending on class</li></ul>
                </li>
                <li><strong>(Lv. 100) [Mushroom Shrine Tales] Kino Konoko's Request</strong> - Introduction quest to the Mushroom Shrine Tales storyline</li>
                <li><strong>(Lv. 105) [Monster Park] Monster Park Grand Re-opening</strong> - Introduction quest to Monster Park
                    <ul><li>Not required to enter Monster Park</li></ul>
                </li>
                <li><strong>(Lv. 115) [Papulatus] The Light of Chaos</strong> - Introduction quest to the Papulatus boss pre-quest</li>
                <li><strong>(Lv. 120) [Ranmaru] Call of Princess Sakuno: Stop Mori Ranmaru!</strong> - Short dialogue quest to unlock access to the boss Mori Ranmori</li>
                <li><strong>(Lv. 125) [Main][Alliance]</strong> - Completing this questline grants a passive skill
                    <ul><li>Starting quest name may be different depending on class</li></ul>
                </li>
                <li><strong>(Lv. 140) [Princess No] Regards, Takeda Shingen</strong> - Introduction quest to the Princess No boss pre-quest</li>
                <li><strong>(Lv. 130) [Main][Temple of Time] Path to the Past</strong> - Introduction quest to the Pink Bean boss pre-quest</li>
                <li><strong>(Lv. 140) [Main][Silent Crusade] A Cry for Help</strong> - Introduction quest to the Arkarium boss pre-quest
                    <ul>There is also a Lv. 190 Silent Crusade quest however, it is not required for Arkarium</ul>
                </li>
                <li><strong>(Lv. 165) [Main][Knight Stronghold] Scouting the Stronghold</strong> - Introduction quest to the Cygnus boss pre-quest</li>
                <li><strong>(Lv. 180) [Gollux] The Cracks of Corruption</strong> - Short dialogue quest to unlock access to the boss Gollux</li>
                <li><strong>(Lv. 190) [Haven] A New Home</strong> - Short dialogue quest to unlock access to Weekly Quests in the Scrapyard</li>
                <li><strong>(Lv. 190) [Dark World Tree] Those Who Remain</strong> - Short dialogue quest to unlock access to Weekly Quests in the Dark World Tree</li>
                <li><strong>(Lv. 210) [Ramuramu] Psych Exam</strong> - Introduction quest to the Guardian Angel Slime boss pre-quest</li>
                <li><strong>(Lv. 200) [Collector's Request] In Search of the Legend </strong>- Quest required to purchase <img src="/images/items/sayrams-elixer.png" alt="Use Sayram's Elixer"/> <img src="/images/items/aurelias-elixer.png" alt="Use Aurelia's Elixer"/> potion buffs from the <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Collector" target="_blank">Collector</a></li>
                <li><strong>(Lv. 235) [Kao's Memory] The First Memory </strong>- Introduction quest to the storyline involving <a href="https://maplestorywiki.net/w/Kao" target="_blank" rel="noopener noreferrer">Kao</a> between Lv. 235 to 255</li>
                <li><strong>(Lv. 255) [Aftermath] After that Day & (Lv. 260) [Convergence] Under Ereve </strong>- Questline required for 6th Job Advancement</li>
                <li><strong>(Lv. 260) [Epic Dungeon] High Mountain </strong>- Questline to unlock weekly activity</li>
            </ul>
            <h3>Theme Dungeon Starting Quests:</h3>
            <p>Below is a list of Lightbulb Quests that are introduction quests to Theme Dungeons</p>
            <ul>
                <li><strong>(Lv. 30) [Elodin] Anne's Plea for Help </strong></li>
                <li><strong>(Lv. 30) [Gold Beach] A Golden Opportunity</strong></li>
                <li><strong>(Lv. 30) [Main][Riena Strait] Get it Strait</strong></li>
                <li><strong>(Lv. 30) [Theme Dungeon] Ellinel Fairy Academy</strong></li>
                <li><strong>(Lv. 60) [Mushroom Castle] Mushking's Summons</strong></li>
                <li><strong>(Lv. 75) [The Afterlands] A Cry for Help </strong></li>
                <li><strong>(Lv. 95) [Ellin Forest] A Peculiar Book</strong></li>
                <li><strong>(Lv. 100) [Grand Athenaeum] Visit the Grand Athenaeum</strong></li>
                <li><strong>(Lv. 115) [Main][Lion King's Castle] Among the Tundra</strong></li>
                <li><strong>(Lv. 120) [Fantasy Theme World] Dylan's Story </strong></li>
                <li><strong>(Lv. 125) [Korean Folk Town] A Letter from the Library</strong></li>
                <li><strong>(Lv. 130) [Crimsonheart] To Grendel's Library</strong></li>
                <li><strong>(Lv. 130) [Golden Temple] Noi More Tourists</strong></li>
                <li><strong>(Lv. 135) [Partem Ruins] Dark Prophecy </strong></li>
                <li><strong>(Lv. 140) Finding Tomo</strong> - Yu Garden</li>
                <li><strong>(Lv. 140) The Dragon and the Tiger</strong> - Beast of Fury</li>
                <li><strong>(Lv. 140) [Commerci Republic] Neinheart's Calls</strong></li>
                <li><strong>(Lv. 145) [Shaolin Temple] Elder Jung's Summons</strong></li>
                <li><strong>(Lv. 145) [Kerning Tower] Kerning Tower Grand Opening</strong></li>
                <li><strong>(Lv. 150) [Main][Stone Colossus] A Giant of a Rumor</strong></li>
                <li><strong>(Lv. 160) [Showa Town] Welcome to Shawa Town!</strong></li>
                <li><strong>(Lv. 160) [Omega Sector] Dr. Kim's Call</strong></li>
                <li><strong>(Lv. 170) [NLC] Welcome back to NLC!</strong></li>
                <li><strong>(Lv. 170) [Main][Kritias] Sudden Kingdom</strong></li>
                <li><strong>(Lv. 175) [Detective Rave's Case Notes] Free Luxury Tour!</strong></li>
                <li><strong>(Lv. 180) [Phantom Forest] The Corrupted Forest</strong></li>
                <li><strong>(Lv. 185) [Fox Valley] Leaf Plane to Adventure</strong></li>
            </ul>
            <h3>Optional Quests:</h3>
            <ul>
                <li><strong>(Lv. 10) Do you know about Maple Guide?</strong> - Tutorial quest explaining Maple Guide</li>
                <li><strong>(Lv. 20) Do you know about Spell Enhancements?</strong> - Tutorial quest explaining <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Tracing</li>
                <li><strong>(Lv. 20) Do you know about Star Force Enhancements?</strong> - Tutorial quest explaining Star Forcing</li>
                <li><strong>(Interactive Worlds only) (Lv. 33) Mysterious Merchant Matilda</strong> - Tutorial quest explaining <a href="https://maplestorywiki.net/w/Matilda" target="_blank" rel="noreferrer noopener">Matilda</a>, an NPC that sells <img src="/images/items/ap-reset-scroll.png" alt="Use AP Reset Scroll"/> <a href="https://maplestory.wiki/GMS/251/item/2501000" target="_blank" rel="noreferrer noopener">[AP Reset Scrolls]</a>, and <img src="/images/items/sp-reset-scroll.png" alt="Use SP Reset Scroll"/> <a href="https://maplestory.wiki/GMS/251/item/2500000" target="_blank" rel="noreferrer noopener">[SP Reset Scrolls]</a> for Mesos</li>
                <li><strong>(Lv. 60) Have you learned about Potential?</strong> - Tutorial quest explaining equipment potentials</li>
                <li><strong>(Lv. 60) Have you learned about Bonus Stats?</strong> - Tutorial quest explaining equipment bonus stats</li>
                <li><strong>(Lv. 80) Use the Transfer Hammer!</strong> - Tutorial quest explaining Transfer Hammer</li>
                <li><strong>(Lv. 90) [Stellar Detectives] The Erased Diary</strong></li>
                <li><strong>(Lv. 105) [Maple Tour] Lulu Spinel's Request</strong> - Introduction quest to Maple Tour 
                    <ul><li>Not required to enter Maple Tour</li></ul>
                </li>
                <li><strong>(Lv. 160) [Masteria Epic] Lost Hero's Call</strong> - Introduction quest to the Masteria Through Time blockbuster</li>
                <li><strong>(Lv. 190) [Main][Silent Crusade] Strange Letter </strong>- A questline related to Will and the Arcane River</li>
                <li><strong>(Lv. 200) [Tower of Oz] Tower Under the Sea</strong> - A quest to get started with the Tower of Oz. Provides a quick explanation and tutorial for Tower of Oz</li>
            </ul>
            <h3>Can Be Skipped:</h3>
            <ul>
                <li><strong>(Lv. 33) Do you know about the Beauty Salon?</strong> - Tutorial quest explaining the Beauty Salon UI for saving hair and face styles
                    <ul>
                        <li><strong>Main Rewards: </strong> <img src="/images/items/hair-coupon.png" alt="Use Hair Coupon"/> <a href="https://maplestory.wiki/GMS/251/item/2543041" target="_blank" rel="noreferrer noopener">[Tutorial Hair Coupon]</a>, <img src="/images/items/hair-coupon.png" alt="Use Hair Coupon"/> <a href="https://maplestory.wiki/GMS/251/item/2432548" target="_blank" rel="noreferrer noopener">[Tutorial Face Coupon]</a>
                            <ul>
                                <li>DO NOT USE without saving your current style in the Beauty Salon as they will give you a really bad look</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>(Lv. 45) [Kerning City] Dark Swamp Region</strong> - Starts the Kerning City area quests for the medal</li>
                <li><strong>(Lv. 50) [Zakum] Statue of Dread</strong> - Quest that explains Zakum and teleports you to <a href="https://maplestorywiki.net/w/Chief%27s_Residence" target="_blank" rel="noreferrer noopener">El Nath - Chief's Residence</a>
                    <ul>
                        <li>Not required to enter the boss Zakum</li>
                        <li>Talking to your corresponding Job NPC (Warrior, Mage, Thief, etc.) will teleport you to the entrance of Zakum</li>
                    </ul>
                </li>
                <li><strong>(Lv. 55) [Perion] Rocky Mountain Hunter</strong> - Starts the Perion area quests for the medal</li>
                <li><strong>(Lv. 60) [Main][Verne Mine] Edelstein, the City of Iron</strong> - Starts the Verne Mine area quests</li>
                <li><strong>(Lv. 65) [Sleepywood] Danger Seeker </strong>- Starts the Sleepywood area quests for the medal</li>
                <li><strong>(Lv. 70) [Cross World Party Quest] The Old Book</strong></li>
                <li><strong>(Lv. 70) [Cross World Party Quest] Old Letter</strong></li>
                <li><strong>(Lv. 70) [Cross World Party Quest] Notes of the Goddess</strong></li>
                <li><strong>(Lv. 70) [Orbis] Helping the Orbis Locals</strong> - Starts the Orbis area quests for the medal</li>
                <li><strong>(Lv. 75) [El Nath] Snowfield Explorer</strong> - Starts the El Nath area quests for the medal</li>
                <li><strong>(Lv. 75) Shammos Awakening</strong> - Quest related to the Resurrection of the Hoblin King Party Quest</li>
                <li><strong>(Lv. 80) [Main][Azwan] Alliance Mission</strong> - Starts the Azwan area quests</li>
                <li><strong>(Lv. 85) [Ariant] Learning the Culture of Ariant</strong> - Starts the Ariant area quests for the medal</li>
                <li><strong>(Lv. 85) [Main][Magatia's Secret] A Deal with the Broker</strong> - Starts the Magatia area quests</li>
                <li><strong>(Lv. 100) [FriendStory] Student From Another World</strong> - Storyline about an alternate world where characters are students at a school</li>
                <li><strong>(Lv. 110) [Chryse] Find Xerxes</strong> - Quest related to the Chryse Party Quest</li>
                <li><strong>(Lv. 110) [Ludibrium] Ludibrium Sheriff</strong> - Starts the Ludibrium area quests for the medal</li>
                <li><strong>(Lv. 115) [Lion King's Castle] The Adventure of Jenn the Locksmith</strong> - Quest related to the Lion King's Castle Party Quest</li>
                <li><strong>(Lv. 120) Fly in the Sky!</strong> - A quest to learn the skill "Soaring" used in Dragon Rider PQ</li>
                <li><strong>(Lv. 125) [Ghost Park] Korean Folk Town's New Park</strong> - A quest explaining Ghost Park</li>
                <li><strong>(Lv. 135) [Mu Lung Garden] How to Become a Sage</strong> - Starts the Mu Lung area quests for the medal</li>
                <li><strong>(Lv. 150) [Masteria] Hungry for Adventure </strong> - Quest related to Masteria / NLC</li>
                <li><strong>(Lv. 150) The Dragon Rider's Identity 1</strong> - Pre-quest for Dragon Rider PQ</li>
                <li><strong>(Lv. 160) [Ninja Castle] Rumors from the Castle</strong> - Storyline for Ninja Castle, not required to fight Gigatoad / False Daimyo</li>
                <li><strong>(Lv. 160) [Main][Henesys Ruins] The Rumor</strong> - Starts the Henesys Ruins area quests for the medal</li>
                <li><strong>(Lv. 180) [Twilight Perion] The Second Future</strong> - Storyline, it is not required to access Twilight Perion</li>
                <li><strong>(Lv. 190) [Masteria] Glimmer Man's Call</strong> - Quest related to Masteria / NLC</li>
                <li><strong>(Lv. 200) [The Asura Crisis] Back to Momijigaoka </strong>- A quest to start the Asura Crisis storyline</li>
            </ul>
        </div>
    );
};

export default ProgressionGuide;
