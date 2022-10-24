import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, BannerAdThree, VideoAd } from '../../components/Ads';
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

    return (
        <ContentPage>
            <Head>
                <title>Progression Guide | Grandis Library</title>
                <meta content={"A guide to important content such as equipment, bosses, training maps, quests and 5th Job Advancement"} name="description"/>
            </Head>
            <ContentTitle>Progression Guide</ContentTitle>
            <p>For info on all the content in MapleStory, check out: <a href="https://www.grandislibrary.com/contents/level-content-guide" target="_blank" rel="noreferrer noopener">https://www.grandislibrary.com/contents/level-content-guide</a>
            </p>
            <ArticleHeaderTwo id="top">Quick Jumps:</ArticleHeaderTwo>
            <ul>
                <li className="quick-jump"><Link smooth href="#intro">Introduction</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#jobadv">Job Advancements</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#apsp">SP + AP Distribution</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#inner">Inner Ability</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#pocket">Pocket Slot</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#emblem">Gold Emblem + 4th Job</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#powercrystal">Intense Power Crystal</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#hyper">Hyper Skills + Hyper Stats</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#140">Lv. 140 and Beyond</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#5th">5th Job Advancement &amp; Arcane River</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#matrix">V Matrix + Nodestones</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#legion">Legion System</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#rewardpoint">Reward Points + Maple Rewards Shop</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#auction">Auction House in Regular Servers</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#content">Important Content</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#questlines">Important Questlines to Complete</Link>
                </li>
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
                <li className="quick-jump"><Link smooth href="#bosses">Bosses</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#dailyweekly">Daily and Weekly Quests</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#training">Training Maps</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#themedungeon">Theme Dungeons</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#quests">Quests</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#lightbulb">Lightbulb Quests</Link>
                </li>
            </ul>
            <VideoAd/>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="intro">Introduction:</ArticleHeaderTwo>
            <hr/>
            <p>Some brief advice before starting, do not worry much about dailies and bosses until you've reached Lv. 200 and have obtained your 5th Job Advancement. Focus mostly on training and filling up your equipment slots. When you have time, complete some pre-quests for important content. Some bosses you could try and fight pre-200 are Normal Zakum, Normal Hilla, Easy Magnus, Root Abyss, Easy/Normal Horntail, Normal Ranmaru, and Ursus</p>
            <p>Additionally, all classes are going to be weak early on, especially if this is your first character. As you get closer to Lv. 200, monsters will hit you hard and they will be harder to defeat. Past Lv. 200, it does get easier but you'll need to fill up your equipment slots and start upgrading your equipment. Lastly, you probably won't get to the level where your class is as strong as the DPM charts suggest plus, DPM charts do not translate to the actual DPM while playing the game. Choose a class that you enjoy or seems enticing and go from there</p>
            <p>Good luck on your Maple journey!!</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="jobadv">Job Advancements:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/job-advancement.png" alt="Job Advancement"/>
            <p>Most classes in the game have Job Advancements at Lv. 10, 30, 60, 100, and 200. These are referred to as your 1st, 2nd, 3rd, 4th, and 5th Job Advancements. During your Job Advancement, you will gain new skills to use</p>
            <p>To start your Job Advancement, open your Maple Guide, "U" by default, and you will see a button that says "Job Advancement Quest"</p>
            <p><strong>[Note]: </strong>Dual Blades have two additional Job Advancements at Lv. 20 and Lv. 45. They are a continuation of your 1st Job and 2nd Job Advancements and you will gain new skills at these levels</p><p><strong>[Note]: </strong>Beast Tamers do not have Job Advancements and instead only unlock new skills by reaching a certain level and allocating enough SP into an animal tree. A common build path is Bear/Hawk/Cat. For mobbing or Legion, you can use Bear/Leopard/Cat instead</p><p><strong>[Note]: </strong>Zero does not have Job Advancements and instead only unlock new skills by reaching certain levels</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="apsp">SP and AP Distribution:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/skill-ui.png" alt="Skill UI"/>
            <img className="repository-image" src="/images/info/stat-ui.png" alt="SP UI"/>
            <p>All newly created characters (except Beast Tamer) can max all of their 1st - 4th Job skills</p>
            <p>A tip for allocating SP is to first put 1 point in everything and then start maxing skills that require the least SP to reach Master Level. Next, start maxing passives by prioritizing the least SP and ones that provide useful stats like %Final Damage, %Damage, %Max HP, or %Damage Reduction. Next, move onto buffs and then lastly attacks</p>
            <p>For AP, you gain 5 AP every time you level up and most classes gain 5 AP for each Job Advancement from 1st to 4th. You do not need to worry about how to allocate your AP, instead just use Auto Assign for all your AP</p>
            <p><strong>[Note]</strong>: If you are playing Xenon, it is best to distribute your AP evenly between all 3 stats. You can easily do so by using the Auto Assign from 1st Job to 4th Job, the game will let you know when you've reached the requirement for the Multilateral skills. Past Lv. 200, you continue to evenly distribute your AP by referring to your current stats</p>
            <p><strong>[Note]</strong>: If you are creating an Explorer Pirate, you will have the choice between Auto Assigning to STR or DEX, choose STR only if you are creating a Buccaneer and DEX only if you are creating a Corsair</p>
            <p><strong>[Note]</strong>: If you are playing Beast Tamer, you will continue to gain SP up until Lv. 250. An ideal build path is Bear/Hawk/Cat. For mobbing or Legion, you can use Bear/Leopard instead and allocate remaining points either into Hawk or Cat</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="inner">Inner Ability:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/inner-ability.png" alt="Inner Ability"/>
            <p>To unlock your Inner Ability, you need to be Lv. 50. You will find a quest in your Lightbulb tab on the left-hand side called <a href="https://maplestory.fandom.com/wiki/Quests/59/The_Eye_Opener" target="_blank" rel="noreferrer noopener">"The Eye Opener"</a>
            </p>
            <p>Inner Abilities are special bonuses that add extra stats to your character. They work similarly to potentials and can be reset using <img src="/images/items/medal-of-honor.png" alt="Item Medal of Honor"/> <img src="/images/items/special-medal-of-honor.png" alt="Boss Medal of Honor Item"/> Honor EXP. Just like Potentials, there are different tiers, Rare, Epic, Unique, and Legendary. You can tier up by using Honor EXP to reset your Inner Ability but watch out, resetting can also drop your tier if you are above Epic. If you are starting out, you do not need to worry too much about it just yet. If you do have an excess of Honor EXP, you can start by resetting to reach Unique or Legendary Ability</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3>Link Skills:</h3>
            <hr/>
            <img className="repository-image" src="/images/info/link-skill-ui.png" alt="Link Manager"/>
            <p>Link Skills are unique to each class and can be given to your other characters on the same world. Link Skills mostly come as passives but there are a few Active Link Skills too Once a character reaches Level 70, they can share their Link Skill with another character. When you Share your Link Skill, both characters will gain the effect of the Link Skill. Sometimes Link Skills may have different effects for the character with the linked version. Link Skills grow stronger at Level 120 (Skill Level 2) and most grow stronger again at Level 210 (Skill Level 3). Some Link Skills can stack increasing the strength of the Link Skill by linking the same Link Skill multiple times from different characters of the same class group</p>
            <p><strong>[Note]:</strong> If you do not see your Link Skill in the Link Manager, you may have to accept a quest in the Lightbulb tab on the left-hand side of the screen. If you still do not see it, try relogging For more info on Link Skills, check out: <a href="https://www.grandislibrary.com/contents/link-skills" target="_blank" rel="noreferrer noopener">https://www.grandislibrary.com/contents/link-skills</a>
            </p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <BannerAdOne/>
            <ArticleHeaderTwo id="pocket">Pocket Slot:</ArticleHeaderTwo>
            <hr/>
            <p>Pocket Slot is an additional equipment slot you can unlock to equip Pocket Items. To unlock the Pocket Slot, you will first need to reach Lv. 30 Charm in your Traits Stat</p>
            <p>Traits are special stats that provide small bonuses to your character. To learn more about Traits, check out: <a href="https://maplestory.fandom.com/wiki/Traits" target="_blank" rel="noreferrer noopener">https://maplestory.fandom.com/wiki/Traits</a>
            </p>
            <p>You can increase your Charm by using <img src="/images/items/cologne.png" alt="Use Cologne"/> <img src="/images/items/premium-cologne.png" alt="Use Premium Cologne"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2022745" target="_blank">Cologne</a>, <img src="/images/items/trait-boost-potion.png" alt="Use Trait Boost Potion"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2430909" target="_blank">Trait Boost Potions</a> found in Event Shops, increasing your Fame level, wearing special equipment or Cash Items, or changing your hair</p>
            <p>Once you've reached Lv. 30 Charm you will receive a quest in your Star Event Tab on the left-hand side from <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/npc/1012117" target="_blank">Big Headward</a> in <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/100000104" target="_blank">Henesys Hair Salon</a>. You will be asked to bring a <img src="/images/items/rose-clipping.png" alt="Etc Rose Clipping"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/4032933" target="_blank">Rose Clipping</a> that can be found by harvesting herbs or from the Auction House</p>
            <p>Once unlocked, you can buy a regular Pocket Item from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Nave" target="_blank">Nave</a> in <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/100000100" target="_blank">Henesys Market</a>. There are also other special Pocket Items you can obtain but the most commonly used ones are dropped by bosses such as, <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162009" target="_blank">Stone of Eternal Life</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Hilla/Monster" target="_blank">Hilla</a>, <img src="/images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162025" target="_blank">Pink Holy Cup</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank">Pink Bean</a>, or <img src="/images/equipment/cursed-red-spellbook.png" alt="Eqp Cursed Red Spellbook"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162080" target="_blank">Cursed Spellbooks</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Will/Monster" target="_blank">Will</a>
            </p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="emblem">Gold Emblem + 4th Job</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/emblem-equip.png" alt="Emblem Item"/>
            <p>At Lv. 100, most classes will get their Gold Emblem for free by accepting a quest in your Lightbulb tab on the left-hand side of the screen. Emblems are very important and easy to obtain equipment that should be obtained right away. Emblems are special like Weapons and Secondary Weapons in which they can obtain %Ignore DEF, and %Attack lines as potentials which are very important stats to have. However, Emblems cannot obtain %Boss Damage</p>
            <p>Upon reaching 4th Job, you should start upgrading your equipment and Star Force them to 10 - 5 stars. It does not matter if the gear will be replaced, this will help you to fight monsters at an optimal pace</p>
            <p><strong>[Note]: </strong>For Kaiser and Angelic Buster can buy their <img src="/images/equipment/dragon-emblem.png" alt="Eqp Dragon Emblem"/> <img src="/images/equipment/angel-emblem.png" alt="Eqp Angel Emblem"/> Emblem from <a href="https://maplestory.fandom.com/wiki/Harpoon#Pantheon" target="_blank" rel="noreferrer noopener">Harpoon</a> or <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a></p>
            <p><strong>[Note]: </strong>For Xenon can buy their <img src="/images/equipment/hybrid-heart.png" alt="Eqp Hybrid Heart"/> Emblem/Power Source from <a href="https://maplestory.fandom.com/wiki/Edwin" target="_blank" rel="noreferrer noopener">Edwin</a> or <a href="https://maplestory.fandom.com/wiki/Silbaron" target="_blank" rel="noreferrer noopener">Silbaron</a></p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="powercrystal"> <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> Intense Power Crystals:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/collector-ui.png" alt="Intense Power Crystal Shop"/>
            <img className="repository-image" src="/images/info/quick-move.png" alt="Quick Move UI"/>
            <p>Most bosses (excluding Gollux) drop <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.wiki/GMS/215/item/4001886" target="_blank" rel="noreferrer noopener">[Intense Power Crystals]</a> that can be sold for Mesos. The price of the Intense Power Crystal will vary based on how many players are in your party, the difficulty of the boss, and if the boss is daily or weekly</p>
            <p>To sell your Intense Power Crystals, access the <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Collector" target="_blank">Collector</a> found by pressing the "Quick Move" button located below the minimap from any town. You can also access the Collector through the Free Market, also accessible from "Quick Move". The Collector will only accept 60 Intense Power Crystals a week and resets on Thursdays 12am UTC</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="hyper">Hyper Skills + Hyper Stats</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/hyper-skill-active-ui.png" alt="Hyper Active UI"/>
            <img className="repository-image" src="/images/info/hyper-skill-passive-ui.png" alt="Hyper Passive UI"/>
            <p>At Lv. 140 you will unlock access to Hyper Skills and Hyper Stats. Hyper Skills have a passive and active category. Active Skills are unlocked at Lv. 140, 160, and 190. Passive Hyper Skills provide benefits to some of your 1st - 4th job skills. You gain a 1 SP for your Passive Hyper Skills at Lv. 140, 150, 165, 180 and 190 (total of 5 SP)</p>
            <img className="repository-image" src="/images/info/hyper-stat-ui.png" alt="Hyper Stats UI"/>
            <p>Hyper Stats are special stats such as %Crit Rate, %Crit Damage, %Ignore DEF, %Damage, and %Boss Damage that you can allocate points into to level up and gain stats for. As you level up a Hyper Stat, it will cost more to upgrade. You gain Hyper Stat Points every level and the amount you gain every level increase every 10 levels</p>
            <p>Hyper Stats are very dependent on what you currently need at the moment rather than what is optimal for your class. Are you optimizing for bossing or mobbing? Do you need more damage? Crit Rate? To optimize your Hyper Stats for your current needs, I recommend you use the <a rel="noreferrer noopener" href="http://tiny.cc/maplestorycalculators" target="_blank">MapleStory Calculator</a> created by <a rel="noreferrer noopener" href="https://www.youtube.com/user/MasteringGaming" target="_blank">MasteringGaming</a>
            </p>
            <p>For more info on Hyper Stats, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Hyper_Stats" target="_blank">https://strategywiki.org/wiki/MapleStory/Hyper_Stats</a>
            </p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id={140}>Level 140 and Beyond:</ArticleHeaderTwo>
            <hr/>
            <p>Upon reaching Lv. 140, take some time to fill up every equipment slot and Spell Trace everything if you are on Regular Servers. Be sure to Star Force everything as much as you can. A bare minimum of 5 Stars on everything but the best would be to have at least 10 Stars. As well, reveal all the potentials on your equipment and try to use cubes to reroll for some %Main Stat or Epic Potential</p>
            <p>If you need help filling up your equipment slots, check out the <a href="https://www.grandislibrary.com/contents/progression-guide#equipment">Equipment Content</a> section of this guide!</p>
            <p>You can also check out <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a> for info on upgrading and enhancing your equipment</p>
            <p>Going forward, you do not need to worry much about dailies or bosses for now until you've reached Lv. 200. You can however try and fight some bosses in the &lt; 2k Main Stat section of the <a href="https://www.grandislibrary.com/contents/progression-guide#bosses">Bosses</a> part of this guide for Mesos, equipment, and <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2711001" target="_blank">Occult Cubes</a>. Your main priority right now is leveling up and working towards filling up each equipment slot with Epic Potential gear</p>
            <p>If you are struggling with Mesos, be sure to complete <img src="/images/map-icons/maple-tour.png" alt="MapIcon MTour" data-preserve-html-node="true"/> Maple Tour every day as the main reward is Mesos</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="5th">5th Job Advancement &amp; Arcane River:</ArticleHeaderTwo>
            <hr/>
            <p><strong>Mandatory Requirements to accept 5th Job Quest:</strong>
            </p>
            <ul>
                <li>100 Star Force minimum total</li>
                <li>10 Star Force on Primary Weapon</li>
            </ul>
            <p><strong>Requirements to Job Advance:</strong> <img src="/images/npc/memory-keeper.png" alt="NPC Memory Keeper"/> <img src="/images/npc/temple-keeper.png" alt="NPC Temple Keeper"/>
            </p>
            <ul>
                <li>After talking to the Memory Keeper and Temple Keeper, you'll receive a quest called <a href="https://maplestory.wiki/GMS/210.1.1/quest/1461" target="_blank" rel="noreferrer noopener">"5th Job: Blessing of the Goddess"</a>. Once you've talked to all the Goddesses and completed their challenge, you can job advanced to 5th Job</li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/100000201" target="_blank" rel="noreferrer noopener">Henesys: Bowman Instructional School</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>Talk to the "Goddess of Maple World" to complete the quest</li>
                </ul>
                </li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/105300000" target="_blank" rel="noreferrer noopener">Dark World Tree: Deserted Camp</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>After talking to the "Goddess of Tynerum", defeat all enemies and a series of maps after being teleport</li>
                </ul>
                </li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/400000001" target="_blank" rel="noreferrer noopener">Pantheon: Grand Temple Interior</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>Talk to the "Goddess of Grandis" twice and defeat a weak version of Magnus after being teleported</li>
                </ul>
                </li>
                <li>Each goddess will give you an <img src="/images/items/arcane-stone.png" alt="Use Arcane Stone"/> Arcane Stone which you can charge up by fighting monsters. Once the stone has been charged, you can use it again to gain some EXP
                <ul>
                    <li>You do not need to charge the stones up to Job Advance</li>
                </ul>
                </li>
            </ul>
            <img className="repository-image" src="/images/info/arcane-force-ui.png" alt="Arcane Force UI"/>
            <p><strong>After Advancement, obtaining an Arcane Symbol:</strong> To deal damage to monsters in the <a href="https://maplestory.fandom.com/wiki/Category:Arcane_River" target="_blank" rel="noopener referrer">Arcane River</a> - the main region past Level 200, Arcane Power is required similar to Star Force which you gain from equipping <img src="/images/equipment/arcane-symbol.png" alt="Eqp Arcane Symbol"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Arcane_Symbols" target="_blank">Arcane Symbols</a></p>
            <ul>
                <li>To obtain your first Arcane Symbol, you must complete the quest <a href="https://maplestory.wiki/GMS/210.1.1/quest/1466" target="_blank" rel="noreferrer noopener">"A Greater Power"</a> located in your Lightbulb icon. This quest is intentionally difficult as you have no Arcane Power yet</li>
                <li><strong>[Note]</strong>: The symbol you obtain is not a real Arcane Symbol yet until you complete the Vanishing Journey storyline. In the meantime, you must complete the story with the limited Arcane Power you have</li>
                <li><strong>[Tip]</strong> If you are struggling to defeat the monsters, there is a Hyper Stat for Arcane Power, allocate some points temporarily until you get enough Arcane Power</li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="matrix">5th Job V Matrix + Nodestones:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/v-matrix-ui.png" alt="V Matrix"/>
            <p>In 5th Job, you do not gain skills regularly like your previous Job Advancements. Instead, you have "Nodes" which contains a 5th Job Skill. You can equip these Nodes into your V Matrix to gain access to that skill. To gain Nodes, you need to open <img src="/images/items/nodestone.png" alt="Nodestone Item"/>Nodestones that are obtained from monsters in the Arcane River, Vanishing Journey Weekly Quest, Nodecrafting, and Event Shops</p>
            <img className="repository-image" src="/images/info/v-matrix-button.png" alt="Skill UI"/>
            <p>To view your V Matrix, open up your Skill UI, "K" by default, and click to the "V" tab and press the "V Matrix" button at the top</p>
            <p>You will notice you have empty slots and locked slots. You gain additional slots as your character levels up which will allow you to equip more Nodes and in turn more 5th Job Skills. Additionally, you can pay Mesos to unlock slots early. To equip a Node, double-click or drag them into an empty slot</p>
            <p>All classes have their Main 5th Job Skills that are exclusive to that class. There are also 5th Job Skills exclusive to a certain Class Group like Explorers or Cygnus Knights. Lastly, there are Common 5th Job skills that are available to all classes</p>
            <img className="repository-image" src="/images/info/node-enhance.png" alt="Enhancing Node"/>
            <img className="repository-image" src="/images/info/node-enhance-button.png" alt="Enhance Single Node"/>
            <p>You do not gain SP normally like your previous Job Advancements to level up your skills. Instead, you will need to enhance your Nodes to increase a skill's level. Each Node will have a Rank and EXP associated with it. To enhance a Node, you will need copies of the same Node to gain enough EXP to rank up. Upgrading a Node's Rank will increase the associated skill's level</p>
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
                <li>Each Boost Node has a max Rank of 25 but each boosted skill can reach a Master Level of 50 (60 with <em>Matrix Points</em>) by equipping two Boost Nodes that boost the same skill</li>
            </ul>
            <p>
                <img src="/images/info/special-node.png" alt="Special Node"/><strong> Special Nodes: </strong>These nodes provide a special effect that trigger once you've fulfilled a specific requirement</p>
            <ul>
                <li>They cannot be leveled up and have a timed duration and will disappear</li>
                <li>It is best to disassemble these nodes for Node Shards that are used to craft new Nodes</li>
            </ul>
            <h3>Matrix Points</h3>
            <img className="repository-image" src="/images/info/slot-enhancement-button.png" alt="Slot Enhancement Button"/>
            <img className="repository-image" src="/images/info/matrix-points.png" alt="Matrix Points"/>
            <p>Each time your character levels up, you gain a Matrix Point. Matrix Points are used to raise a Node's Rank but they are tied to the Node Slots themselves instead of the Node. Each slot can allocate up to 5 additional Ranks for a Node. This means each Skill Node or Boost Node can reach a max Rank of 30. You can assign your Matrix Points in the V Matrix by pressing the "Slot Enhancement" button</p>
            <h3>Node Enhancing</h3>
            <img className="repository-image" src="/images/info/node-crafting.png" alt="V Upgrade UI"/>
            <p>To enhance your Nodes, right-click a Node you want to enhance. Using copies of the same Node you are trying to enhance, you consume the extra Nodes to the gain EXP required to level up a Node. As mentioned previously, to enhance Boost Nodes, you need Nodes with the same Main Skill. All Nodes have a max Rank of 25 meaning each Node provides 25 Skill Levels for a skill</p>
            <p>To gain additional Nodes, you will need to open <img src="/images/items/nodestone.png" alt="Use Nodestone"/> <a href="https://maplestory.wiki/GMS/215/item/2435719" target="_blank" rel="noreferrer noopener">Nodestones</a> which will give you a random Node for your class. You can obtain Nodestones from monster drops in the Arcane River, from the <a href="https://maplestory.wiki/GMS/215/quest/34151" target="_blank" rel="noreferrer noopener">Weekly Quest in Vanishing Journey</a>, Nodecrafting, and from Events</p>
            <p>There are also special Nodestones called <img src="/images/items/exp-nodestone.png" alt="Use EXP Nodestone"/> <a href="https://maplestory.wiki/GMS/215/item/2439279" target="_blank" rel="noreferrer noopener">[Experience Nodestone]</a> which when opened provides an EXP Node that can be used on any Node as EXP. These Nodestones are only obtainable from Events</p>
            <h3>Node Disassembling</h3>
            <img className="repository-image" src="/images/info/disassemble-node.png" alt="Disassemble Node"/>
            <p>Nodes can be disassembled to gain Node Shards that are used to craft more Nodestones or a guaranteed Node. To disassemble Nodes, press on the "Disassemble Nodes" button beside the "Slot Enhancement" button</p>
            <p>You can select multiple Nodes to disassemble at a time or right click to select to disassemble a single Node</p>
            <h3>Nodecrafting</h3>
            <img className="repository-image" src="/images/info/node-skill-craft.png" alt="Node Crafting"/>
            <p>Specific Nodes can be crafted by pressing the "Nodecrafting" button. To craft Nodes, you will need Node Shards which are obtained from disassembling Nodes</p>
            <p>In the Nodecrafting UI, select the Node you want to craft and then press the "Craft" button. Do not press the "Craft Nodestone" button as you will craft a Nodestone instead</p>
            <p><strong>[Note]</strong>: When crafting Boost Nodes, you can choose the Main Skill for that Node by selecting the desired skill in the Nodecrafting UI</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="legion">Legion System</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/legion-ui.png" alt="Legion Board"/>
            <img className="repository-image" src="/images/info/legion-legend.png" alt="Legion Legend"/>
            <p>A system that is unlocked when you have either a total of 500 levels within your World from your characters or have reached Lv. 200 and completed the 5th Job Advancement. You can assign your characters onto a grid to provide bonuses to all your characters in your World</p>
            <p>You will see there is a "Total Level", this is based on your 40 highest level characters. This is also referred to as your "Legion Level". The higher your Legion Level the more characters you can assign to your grid. To increase the amount of characters you can assign, you also need to give your <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> to <a href="https://maplestory.fandom.com/wiki/Dame_Appropriation" target="_blank" rel="noreferrer noopener">Dame Appropriation</a>. Legion Coins are gained passively based on your characters currently assigned to the grid</p>
            <p>Legion Coins are also used to buy special items from <a href="https://maplestory.fandom.com/wiki/Squire_Pancho_Sanza" target="_blank" rel="noreferrer noopener">Squire Pancho Sanza</a> such as <img src="/images/items/legion-expertise.png" alt="Use Legion's Expertise"/> [EXP Booster], <img src="/images/items/legion-luck.png" alt="Use Legion's Luck"/> [Drop Rate Booster], <img src="/images/items/legion-wealth.png" alt="Use Legion's Wealth"/> [Meso Rate Booster], <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube"/> [Master Craftsman's Cube], <img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> [Bonus Potential Scrolls] and <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> [Powerful Rebirth Flames]</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="rewardpoint">Reward Points + Maple Rewards Shop:</ArticleHeaderTwo>
            <hr/>
            <p> <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points are a special currency used in the Cash Shop at the Maple Rewards Shop or to apply a 30% discount to certain Cash Shop purchases. The discount, however, is very limited so Reward Points are usually only used to buy items from the Maple Rewards Shop</p>
            <p>Reward Points expire at the end of the next month that the points were obtained. So if you obtained some Reward Points in August, the points would expire on September 30th</p>
            <p>The Maple Rewards Shop contains a variety of Cash Shop items available for purchase with Reward Points. You can only buy a set amount of each item per month per account, and the items restock every month. Certain items are not available in Reboot Servers since you can already buy them with Mesos or are related to upgrading/scrolling</p>
            <p>Some notable items in the shop are:</p>
            <ul>
                <li> <img src="/images/items/black-cube.png" alt="Cash Black Cube"/> <a href="https://maplestory.wiki/GMS/215/item/5062010" target="_blank" rel="noreferrer noopener">[Black Cube]</a>
                </li>
                <li> <img src="/images/items/red-cube.png" alt="Cash Black Cube"/> <a href="https://maplestory.wiki/GMS/215/item/5062009" target="_blank" rel="noreferrer noopener">[Red Cube]</a>
                </li>
                <li> <img src="/images/items/exp-special-coupon.png" alt="Cash EXP Special Coupon"/> <a href="https://maplestory.wiki/GMS/215/item/5211046" target="_blank" rel="noreferrer noopener">[1-day 2x EXP Special Coupon]</a> (Regular Server only)</li>
                <li> <img src="/images/items/wild-totem.png" alt="Cash Wild Totem Coupon"/> <a href="https://maplestory.wiki/GMS/215/item/5680823" target="_blank" rel="noreferrer noopener">[Wild Totem Coupon]</a>
                </li>
                <li> <img src="/images/items/platinum-scissors.png" alt="Cash Platinum Scissors of Karma"/> <a href="https://maplestory.wiki/GMS/215/item/5520001" target="_blank" rel="noreferrer noopener">[Platinum Scissors of Karma]</a> (Regular Server only)</li>
                <li> <img src="/images/items/premium-water-of-life.png" alt="Cash Premium Water of Life"/> <a href="https://maplestory.wiki/GMS/215/item/5689000" target="_blank" rel="noreferrer noopener">[Premium Water of Life]</a>
                </li>
                <li> <img src="/images/items/monster-park-additional-entry.png" alt="Cash Monster Park Additional Entry"/> <a href="https://maplestory.wiki/GMS/215/item/5252030" target="_blank" rel="noreferrer noopener">[Monster Park Additional Entry Ticket]</a>
                </li>
                <li> <img src="/images/items/pet-snack.png" alt="Cash Pet Snack"/> <a href="https://maplestory.wiki/GMS/215/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack] (Regular Server only)</a>
                </li>
                <li> <img src="/images/items/etc-slot-coupon.png" alt="Use Etc Slot Coupon"/> [Etc/Set-up/Use/Equip/Storage Add 8 Inventory Slots] - Unlimited purchases (Regular Server only)</li>
                <li> <img src="/images/items/add-pendant-slots.png" alt="Use Add Pendant Slots"/> <a href="https://maplestory.wiki/GMS/215/item/2435909" target="_blank" rel="noreferrer noopener">[30-day Pendent Slot Expansion]</a> - Unlimited purchases (Regular Server Only)</li>
                <li> <img src="/images/items/shielding-ward.png" alt="Cash Shielding Ward"/> <a href="https://maplestory.wiki/GMS/215/item/5064000" target="_blank" rel="noreferrer noopener">[Shielding Ward]</a> (Regular Server only)</li>
                <li> <img src="/images/items/shield-scroll.png" alt="Cash Shield Scroll"/> <a href="https://maplestory.wiki/GMS/215/item/5064100" target="_blank" rel="noreferrer noopener">[Shield Scroll]</a> (Regular Server only)</li>
                <li> <img src="/images/items/guardian-scroll.png" alt="Cash Guardian Scroll"/> <a href="https://maplestory.wiki/GMS/215/item/5064300" target="_blank" rel="noreferrer noopener">[Guardian Scroll]</a> (Regular Server only)</li>
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
                <li>Fairy Bros Daily Gift Reward</li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <BannerAdTwo/>
            <ArticleHeaderTwo id="auction">Auction House in Regular Servers:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/auction-house.png" alt="Auction House"/>
            <p>Auction House in Regular Servers allows you to buy and sell items to other Maplers. You can buy anything from equipment, potions, to cosmetic items like chairs and cash clothing. As well, you can also buy <a rel="noreferrer noopener" href="https://maplestory.nexon.net/micro-site/53117" target="_blank">Wonderberry</a> pets here that pick up items for you</p>
            <p><img className="repository-image" src="/images/info/auction-house-button.png" alt="Auction House Button"/></p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="content">Important Content:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><strong>[Regular Servers] Spell Tracing: </strong>Using <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Traces, you can upgrade your gear to gain more stats
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot]: </strong>Can be sold for Mesos</li>
                </ul>
                </li>
                <li><strong>Star Forcing: </strong>Enhancements that provide bonus stats depending on the amount of Star Force that is on an item</li>
                <li><strong>[Lv. 35] <a href="https://strategywiki.org/wiki/MapleStory/Professions" target="_blank" rel="noreferrer noopener">Professions / Crafting</a></strong>: Crafting may be important if you cannot find any new gear for your level. It is an easy and useful way to obtain equipment for your level
                <ul>
                    <li> <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <img src="/images/items/eternal-rebirth-flame.png" alt="Use Eternal Rebirth Flame"/> [Special Rebirth Flames] and <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube"/> <img src="/images/items/meisters-cube.png" alt="Use Meister's Cube"/> [Special Cubes] can also be crafted using Professions</li>
                    <li><strong>[Traits Stats]: </strong>You can also find your <a href="https://strategywiki.org/wiki/MapleStory/Traits" target="_blank" rel="noreferrer noopener">Traits</a> that grant your character small bonuses in your Professions UI</li>
                </ul>
                </li>
                <li><strong>[Lv. 50] <a href="https://strategywiki.org/wiki/MapleStory/Inner_Ability" target="_blank" rel="noreferrer noopener">Inner Ability</a></strong>: Bonuses that add extra stats to your character. They work similar to potentials and can be reset using <img src="/images/items/medal-of-honor.png" alt="Use Medal of Honor"/>  <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> Honor EXP</li>
                <li><strong>[Lv. 70] </strong><a href="https://maplestory.fandom.com/wiki/Link_Skill" target="_blank" rel="noreferrer noopener"><strong>Link Skills</strong></a>: Class-Unique skill that can be shared with another character in your world</li>
                <li><strong>[Lv. 100+] Star Force Maps</strong>: Special maps that require you to have a certain amount of Star Force Enhancements on your equipment to deal damage to monsters. Monsters here have more HP but in return give more EXP
                <ul>
                    <li><strong>[Note]: </strong>If this is your first time playing, training in these areas may be difficult as they are a lot stronger than normal monsters! If you are up for the challenge, try training here. Be sure to be appropriately geared up though</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/monster-park.png" alt="MapIcon MonsterPark"/> <strong>[Lv. 105+] <a href="https://maplestory.fandom.com/wiki/Category:Monster_Park" target="_blank" rel="noreferrer noopener">Monster Park</a></strong>: Completing Monster Park will reward you with a considerable amount of EXP and <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coin]</a> to use in a special shop
                <ul>
                    <li>Great for early levels as you gain a lot of EXP</li>
                    <li>Special shop sells special potions <img src="/images/items/extreme-red-potion.png" alt="Use Extreme Red Potion"/> <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <img src="/images/items/extreme-blue-potion.png" alt="Use Extreme Blue Potion"/> <img src="/images/items/extreme-gold-potion.png" alt="Use Extreme Gold Potion"/> that are transferable within your account (given same World) that grant useful buffs for training</li>
                    <li>Completing Monster Park 77 times for each day of the week will reward you a special <img src="/images/equipment/seven-day-monster-parker.png" alt="Eqp Seven Day Monster Parker"/> <a href="https://maplestory.fandom.com/wiki/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Medal]</a> that gives +10% Ignore Enemy Defence</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/maple-tour.png" alt="MapIcon MTour"/> <strong>[Lv. 105+] </strong><strong>Maple Tour: </strong>Completing Maple Tour will reward you with Mesos and <img src="/images/items/maple-tour-coin.png" alt="Etc Maple Tour Coins"/> [Maple Tour Coins] to buy special items at Maple Tour
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Important]: </strong>In Reboot servers, the amount of Mesos rewarded is increased and is considered a main activity because of this!</li>
                    <li>Provides some decent money to start out with and can be completed fairly quickly each day</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <strong> [Lv.125+] </strong><strong style={{color: '#ff6600'}}>[Reboot] </strong><strong><a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a></strong>: <img src="/images/equipment/royal-von-leon-suit.png" alt="Eqp Marx Von Leon Battle Suit"/> Royal Von Leon equipment dropped by Von Leon is useful for Reboot progression!
                <ul>
                    <li>Equipment is considered a Boss Item, it will gain additional Bonus Stats compared to normal equipment</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/yu-garden.png" alt="MapIcon ShangHaiCN"/> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong style={{color: '#ff6600'}}>[Reboot] The Far East (Yu Garden)</strong></a>: Provides an easy source to <strong/> [Epic Potential Scrolls] in Reboot Servers</li>
                <li><strong>[SPECIAL] <a href="https://maplestory.fandom.com/wiki/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: A system that is unlocked when you have either a total of 500 levels within your World from your characters or have reached Lv. 200 and completed the 5th Job Advancement. You can assign your characters onto a grid to provide bonuses to all your characters in your World. Additionally, you will passively gain <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> to use to buy items from <a href="https://maplestory.fandom.com/wiki/Squire_Pancho_Sanza" target="_blank" rel="noreferrer noopener">Squire Pancho Sanza</a>
                <ul>
                    <li><strong>Notable Items</strong>: <img src="/images/items/legion-expertise.png" alt="Use Legion's Expertise"/> [EXP Booster], <img src="/images/items/legion-luck.png" alt="Use Legion's Luck"/> [Drop Rate Booster], <img src="/images/items/legion-wealth.png" alt="Use Legion's Wealth"/> [Meso Rate Booster], <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls], <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube"/> [Master Craftsman's Cube], <img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> [Bonus Potential Scrolls] and <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> [Powerful Rebirth Flames]</li>
                </ul>
                </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="questlines">Important Questlines to Complete:</ArticleHeaderTwo>
            <hr/>
            <p>Questlines here unlock access to bosses or reward worthwhile equipment</p>
            <ul>
                <li> <img src="/images/map-icons/heliseum.png" alt="MapIcon retakeHQ"/> <strong>[Lv. 90] </strong><a href="https://maplestory.fandom.com/wiki/Category:Heliseum" target="_blank" rel="noreferrer noopener"><strong>Heliseum</strong></a>: Completing this storyline unlocks access to the boss <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestory.fandom.com/wiki/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> and daily quests for <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> which can be used as currency for a <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">special shop</a>
                <ul>
                    <li><strong>Notable shop items:</strong> <img src="/images/equipment/elite-heliseum-cape.png" alt="Eqp Elite Heliseum Cape"/> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>, <img src="/images/equipment/elite-heliseum-boots.png" alt="Eqp Elite Heliseum Boots"/> <img src="/images/equipment/nova-hyades-boots.png" alt="Eqp Nova Boots"/> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Shoe]</a>, <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="/images/equipment/antique-root-gloves.png" alt="Eqp Antique Root Gloves"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082688" target="_blank" rel="noreferrer noopener">[Antique Root Gloves]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/silent-crusade.png" alt="MapIcon CrossHunter"/> <strong> [Lv. 90+] <a href="https://maplestory.fandom.com/wiki/Silent_Crusade" target="_blank" rel="noreferrer noopener">Silent Crusade</a></strong>: Completing Silent Crusade unlocks access to <img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <a href="https://maplestory.fandom.com/wiki/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a>
                <ul>
                    <li> <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> Crusader Coins can be used to buy items from the Silent Crusade shop through the UI</li>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/superior-hunter.png" alt="Setup Superior Hunter"/> [Titles], <img src="/images/equipment/silent-crusade-champion.png" alt="Eqp Silent Crusade Champion"/>[Medals], <img src="/images/equipment/veteran-crusader-belt.png" alt="Eqp Silent Crusader Belt"/> <img src="/images/equipment/veteran-crusader-shoulder.png" alt="Eqp Veteran Crusader Shoulder"/> <img src="/images/equipment/veteran-crusader-pendant.png" alt="Eqp Veteran Crusader Pendant"/> [Veteran Crusader Gear], <img src="/images/equipment/mystic-belt.png" alt="Eqp Mystic Belt"/> <img src="/images/equipment/mystic-earrings.png" alt="Eqp Mystic Earrings"/> <img src="/images/equipment/mystic-pendant.png" alt="Eqp Mystic Pendant"/> <img src="/images/equipment/mystic-face-accessory.png" alt="Eqp Mystic Face Accessory"/> <img src="/images/equipment/mystic-eye-accessory.png" alt="Eqp Mystic Eye Accessory"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon LionCastle"/> <strong>[Lv. 115] <a href="https://maplestory.fandom.com/wiki/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Lion King's Castle</a></strong>: Completing this Theme Dungeon grants access to the boss <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a>
                </li>
                <li> <img src="/images/map-icons/root-abyss.png" alt="MapIcon rootabyss"/> <strong>[Lv. 125] </strong><a href="https://maplestory.fandom.com/wiki/Category:Root_Abyss" target="_blank" rel="noreferrer noopener"><strong>Root Abyss</strong></a>: Completing the storyline unlocks <img src="/images/items/gnarled-wooden-key.png" alt="Etc Gnarled Wooden Key"/> <a href="https://maplestory.fandom.com/wiki/Gnarled_Wooden_Key" target="_blank" rel="noreferrer noopener">Daily Keys</a> for <img src="/images/map-icons/crimson-queen.png" alt="MapIcon BloodyQueen"/> Crimson Queen, <img src="/images/map-icons/pierre.png" alt="MapIcon Piere"/> Pierre, <img src="/images/map-icons/von-bon.png" alt="MapIcon BanBan"/> Von Bon, and <img src="/images/map-icons/vellum.png" alt="MapIcon Bellum"/> Vellum
                <ul>
                    <li>Remember to defeat each Normal Mode 10 times to unlock their Chaos Mode</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/blockbuster.png" alt="MapIcon BlockBuster"/> <strong>[Lv. 120] <a href="https://maplestory.fandom.com/wiki/Blockbuster/Black_Heaven" target="_blank" rel="noreferrer noopener">[Blockbuster] Black Heaven</a></strong>: Completing Black Heaven will unlock access to the boss <img src="/images/map-icons/lotus-boss.png" alt="Mobicon Lotus"/> Lotus
                <ul>
                    <li>Completing this on one character will unlock access for all your characters in the same world</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/blockbuster.png" alt="MapIcon BlockBuster"/> <strong>[Lv. 135] <a href="https://maplestory.fandom.com/wiki/Blockbuster/Heroes_of_Maple" target="_blank" rel="noreferrer noopener">[Blockbuster] Heroes of Maple</a></strong>: Completing Act 4 will unlock access to <img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> Damien
                <ul>
                    <li>Completing this on one character will unlock access for all your characters in the same world</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/commerci.png" alt="MapIcon CommerzBT"/> <strong>[Lv. 140] <a href="https://maplestory.fandom.com/wiki/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener">Commerci Voyages</a></strong>: Completing a series of quests in Commerci and reaching the town San Commerci grants access to the Commerci Trade Voyages
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/sweetwater-sword.png" alt="Eqp Sweetwater Axe"/> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a>, <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon JP Nohime"/> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:Princess_No"><strong>Hieizan Temple</strong></a>: Completing this storyline will unlock access to the boss <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon JP Nohime"/> Princess No
                </li>
                <li> <img src="/images/map-icons/temple-of-time.png" alt="MapIcon TimeTemple"/> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:Temple_of_Time" target="_blank" rel="noreferrer noopener"><strong>Temple of Time</strong></a>: Completing storyline will unlock access to <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon PinkBean"/> Pink Bean</li>
                <li> <img src="/images/map-icons/henesys-ruins.png" alt="MapIcon destructionTown"/> <img src="/images/map-icons/stronghold.png" alt="MapIcon darkEreb"/> <strong>[Lv. 160]</strong>  <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Gate to the Future</strong></a>: Completing questline will unlock access to <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Signus"/> Normal Cygnus</li>
                <li>
                <img src="/images/map-icons/masteria-through-time.png" alt="MapIcon Masteria Through Time" /> <strong>[Lv. 160]</strong><strong> <a href="https://maplestory.fandom.com/wiki/Blockbuster/Masteria_Through_Time" target="_blank" rel="noreferrer noopener">[Blockbuster] Masteria Through Time</a></strong>: Completing blockbuster will reward you with <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">[Best-in-slot Medal]</a>, <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> OR <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662091" target="_blank" rel="noreferrer noopener">[Dr. Jang-Roid]</a> androids with NPC Vendor</li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="equipment">Equipment Content:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li>Level beside items are when they can be obtained or equipped</li>
                <li>For a more in-depth guide to Gear check out: <a href="https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p" target="_blank" rel="noreferrer noopener">https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p</a>
                <ul>
                    <li>Can be applied to regular servers too</li>
                </ul>
                </li>
                <li>For more info on equipment in the game check out: <a href="https://maplestory.fandom.com/wiki/Item" target="_blank" rel="noreferrer noopener">https://maplestory.fandom.com/wiki/Item</a>
                </li>
            </ul>
            <h3>Lv. 10 - 120:</h3>
            <ul>
                <li><strong>[Lv. 10 - 40]</strong><img src="/images/equipment/brown-winter-hat.png" alt="Eqp Brown Winter Hat"/><img src="/images/equipment/blue-split-piece.png" alt="Eqp Blue Split Piece"/><img src="/images/equipment/blue-shouldermail-pants.png" alt="Eqp Blue Shouldermail Pants"/><img src="/images/equipment/silver-sylvia.png" alt="Eqp Silver Sylvia"/><img src="/images/equipment/brown-leather-krag.png" alt="Eqp Brown Leather Krag"/> Can be bought from your class' hometown<ul><li>Can also be dropped by monsters around your level</li></ul></li>
                <li><strong>[Lv. 40 - 110]</strong><img src="/images/equipment/green-distinction.png" alt="Eqp Green Distinction"/><img src="/images/equipment/blue-requiem.png" alt="Eqp Blue Requiem"/><img src="/images/equipment/black-neos-pants.png" alt="Eqp Black Neos Pants"/><img src="/images/equipment/green-mystra.png" alt="Eqp Green Mystra"/><img src="/images/equipment/black-duke-barkin-shoes.png" alt="Eqp Black Duke Barkin Shoes"/> Dropped by monsters around your level<ul><li>Can also be crafted with the Blacksmith Profession</li></ul></li>
                <li><strong>[Lv. 30]</strong>  <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/> <img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/> <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/> <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/>  <img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/> <img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/>[<a href="https://maplestory.wiki/GMS/210.1.1/item/1012389" target="_blank" rel="noreferrer noopener">Face</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132292" target="_blank" rel="noreferrer noopener">Belt</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1032254" target="_blank" rel="noreferrer noopener">Earrings</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1022254" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1082533" target="_blank" rel="noreferrer noopener">Glove</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102590" target="_blank" rel="noreferrer noopener">Cape</a> ] Theme Dungeon Rewards
                <ul>
                    <li>Respectively, <a href="https://maplestory.fandom.com/wiki/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a>, <a href="https://maplestory.fandom.com/wiki/Category:Gold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach</a>, <a href="https://maplestory.fandom.com/wiki/Category%3AEllinel" target="_blank" rel="noreferrer noopener">Ellinel Fairy Academy</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 40]</strong>  <img src="/images/equipment/flower-tattoo.png" alt="Eqp Flower Tattoo"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012346" target="_blank" rel="noreferrer noopener">[Face]</a> Golden Beach Boss Drop - <a href="https://maplestory.fandom.com/wiki/Captain_Darkgoo#Gold_Beach" target="_blank" rel="noreferrer noopener">Captain Darkgoo</a>
                </li>
                <li><strong>[Lv. 40 - 140]</strong> <img src="/images/equipment/deadshot-ring.png" alt="Eqp Deadshot Ring"/> <img src="/images/equipment/gray-warrior-symbol.png" alt="Eqp Gray Warrior Symbol"/> <img src="/images/equipment/tenacious-leather-pauldron.png" alt="Eqp Tenacious Leather Pauldron"/> [Ring / Face / Shoulder] Accessory Crafting Profession Gear
                <ul>
                    <li>Early accessories cannot be Star Forced or Upgraded but provide flat stats and DEF</li>
                </ul>
                </li>
                <li><strong>[Lv. 60] </strong> <img src="/images/equipment/tangyoons-chef-hat.png" alt="Eqp Tangyoon's Chef Hat"/>  <img src="/images/equipment/tangyoons-chef-outfit.png" alt="Eqp Tangyoon's Chef Outfit"/> [<a href="https://maplestory.wiki/GMS/205/item/1003762" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestory.wiki/GMS/205/item/1052578" target="_blank" rel="noreferrer noopener">Overall</a>] Cooking With Tangyoon Rewards</li>
                <li><strong>[Lv. 65] </strong> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/>  <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">Pendant</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">Cape</a>] <a href="https://maplestory.fandom.com/wiki/Quests/91" target="_blank" rel="noreferrer noopener">Mushroom Castle</a> Theme Dungeon Rewards</li>
                <li><strong>[Lv. 70] </strong> <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/>  <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/>  <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Totems]</a>  <a href="https://maplestory.fandom.com/wiki/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a> Theme Dungeon Rewards
                <ul>
                    <li>Theme Dungeon may be tedious and buggy</li>
                </ul>
                </li>
                <li><strong>[Lv. 75] </strong> <img src="/images/equipment/greed-pendant.png" alt="Eqp Greed Pendant"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122219" target="_blank" rel="noreferrer noopener">[Pendant]</a> Bought from Monster Park using <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a>
                <ul>
                    <li>Increases equipment drop rate</li>
                </ul>
                </li>
                <li><strong>[Lv. 90] </strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Lv. 50 Hat]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener">Zakum</a>
                <ul>
                    <li>Fight Normal Zakum instead of Easy for extra EXP</li>
                </ul>
                </li>
                <li><strong>[Lv. 90] </strong> <img src="/images/equipment/veteran-crusader-belt.png" alt="Eqp Silent Crusader Belt"/>  <img src="/images/equipment/veteran-crusader-shoulder.png" alt="Eqp Veteran Crusader Shoulder"/> <img src="/images/equipment/veteran-crusader-pendant.png" alt="Eqp Veteran Crusader Pendant"/> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1132111" target="_blank" rel="noreferrer noopener">Belt</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1152069" target="_blank" rel="noreferrer noopener">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1122157" target="_blank" rel="noreferrer noopener">Pendant</a> ] Bought with <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/>  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Wence" target="_blank" rel="noreferrer noopener">Wence</a>
                </li>
                <li><strong>[Lv. 90 - 120] </strong> <img src="/images/equipment/bronze-cross-ring.png" alt="Eqp Bronze Cross Ring"/> <img src="/images/equipment/silver-cross-ring.png" alt="Eqp Silver Cross Ring"/> <img src="/images/equipment/gold-cross-ring.png" alt="Eqp Gold Cross Ring"/> <img src="/images/equipment/platinum-cross-ring.png" alt="Eqp Platinum Cross Ring"/> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1112676" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112677" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112678" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112679" target="_blank" rel="noreferrer noopener">Ring</a>] Silent Crusader Storyline Reward
                <ul>
                    <li>Platinum Cross Ring can be Star Forced but cannot have a Potential</li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="/images/equipment/virtues-medallion.png" alt="Eqp Virtues Medallion"/> <img src="/images/equipment/blasted-feather.png" alt="Eqp Blasted Feather"/> <img src="/images/equipment/golden-fox-marble.png" alt="Eqp Golden Fox Marble"/> [Secondary Weapon] Can be bought from <a href="https://maplestory.fandom.com/wiki/Neville" target="_blank" rel="noreferrer noopener">Neville</a>
                <ul>
                    <li>Excludes certain classes who use Shields and Dual Blades</li>
                    <li>Special Secondary Weapons are also available from <a href="https://maplestory.fandom.com/wiki/Category:Evolution_System" target="_blank" rel="noreferrer noopener">Evolution Lab</a> bought with <img src="/images/items/evolving-coin.png" alt="Etc Evolving Coin"/> <a href="https://maplestory.fandom.com/wiki/Evolving_Coin" target="_blank" rel="noreferrer noopener">[Evolving Coin]</a> from <a href="https://maplestory.fandom.com/wiki/Vendor-C2" target="_blank" rel="noreferrer noopener">Vendor-C2</a> that are slightly better</li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="/images/equipment/gold-maple-leaf-emblem.png" alt="Eqp Gold Maple Leaf Emblem"/> <img src="/images/equipment/gold-cygnus-emblem.png" alt="Eqp Gold Cygnus Emblem"/> <img src="/images/equipment/gold-heroes-emblem.png" alt="Eqp Gold Heroes Emblem (Phantom)"/> <a href="https://maplestory.fandom.com/wiki/Emblem" target="_blank" rel="noreferrer noopener">[Emblems]</a> Can be obtained from accepting a quest from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li>Kaiser and Angelic Buster can buy their Emblem from <a href="https://maplestory.fandom.com/wiki/Harpoon#Pantheon" target="_blank" rel="noreferrer noopener">Harpoon</a> or <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                    <li>Xenon can buy their Emblem/Power Source from <a href="https://maplestory.fandom.com/wiki/Edwin" target="_blank" rel="noreferrer noopener">Edwin</a> or <a href="https://maplestory.fandom.com/wiki/Silbaron" target="_blank" rel="noreferrer noopener">Silbaron</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Cape]</a> Rewarded after completing Mushroom Shrine Tales from <a href="https://maplestory.fandom.com/wiki/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a>
                <ul>
                    <li>Scaling stats considered slightly better than <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">Tyrant Capes</a> for the price</li>
                    <li>Bonus Stats can be freely rerolled by discarding the item and reobtaining it again from <a href="https://maplestory.fandom.com/wiki/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="/images/equipment/antique-leaf-cape.png" alt="Eqp Antique Leaf Cape"/> <a href="https://maplestory.fandom.com/wiki/Antique_Leaf_Cape" target="_blank" rel="noreferrer noopener">[Cape]</a> Bought with <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> or <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestory.fandom.com/wiki/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a></li>
                <li><strong>[Lv. 110] </strong> <img src="/images/equipment/ifias-earrings.png"/><img src="/images/equipment/ifias-ring.png"/><img src="/images/equipment/ifias-necklace.png"/> [<a href="https://maplestory.fandom.com/wiki/Ifia%27s_Earrings" target="_blank" rel="noreferrer noopener">Earrings</a> / <a href="https://maplestory.fandom.com/wiki/Ifia%27s_Ring" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.fandom.com/wiki/Ifia%27s_Necklace" target="_blank" rel="noreferrer noopener">Pendant</a>] Obtained from defeating <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Hard Von Leon</a>
                </li>
                <li><strong>[Lv. 110+] </strong><img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/><a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noopener noreferrer">[Best-in-slot for Training Medal]</a>, <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noopener noreferrer">[Android]</a> Rewarded for completing <a href="https://maplestory.fandom.com/wiki/Blockbuster/Monad" target="_blank" rel="noopener noreferrer">Monad Blockbuster</a> and <img src="/images/equipment/invincible-hero-of-the-snowfield.png" alt="Android"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/3700501" target="_blank" rel="noopener noreferrer">[Title]</a> rewarded for defeating Julieta without dying
                <ul>
                    <li>Completing blockbuster may be challenging at lower levels</li>
                </ul>
                </li>
                <li><strong>[Lv. 115] </strong> <img src="/images/equipment/mystic-face-accessory.png" alt="Eqp Mystic Face Accessory"/>  <img src="/images/equipment/mystic-eye-accessory.png" alt="Eqp Mystic Eye Accessory"/> <img src="/images/equipment/mystic-earrings.png" alt="Eqp Mystic Earrings"/>  <img src="/images/equipment/mystic-pendant.png" alt="Eqp Mystic Pendant"/> <img src="/images/equipment/mystic-belt.png" alt="Eqp Mystic Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a> Bought with <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/>  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Wence" target="_blank" rel="noreferrer noopener">Wence</a>
                </li>
            </ul>
            <h3>Lv. 120+:</h3>
            <ul>
                <li><strong>[Lv. 120+] </strong> <img src="/images/equipment/elite-heliseum-boots.png" alt="Eqp Elite Heliseum Boots"/> <img src="/images/equipment/elite-heliseum-cape.png" alt="Eqp Elite Heliseum Cape"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1072732" target="_blank" rel="noreferrer noopener">Lv. 80 Shoe</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102471">Lv. 80 Cape</a> ] Chance to drop from <a href="https://maplestory.fandom.com/wiki/Treglow" target="_blank" rel="noreferrer noopener">Treglow</a> / <a href="https://maplestory.fandom.com/wiki/Victor" target="_blank" rel="noreferrer noopener">Victor</a> / <a href="https://maplestory.fandom.com/wiki/Velderoth" target="_blank" rel="noreferrer noopener">Velderoth</a>
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>There is a version for each class</li>
                    <li>Can also be bought with <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120+] </strong> <img src="/images/equipment/nova-hyades-boots.png" alt="Nova Hyades Boots"/> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1072737" target="_blank" rel="noreferrer noopener">Lv. 110 Shoe</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102476" target="_blank" rel="noreferrer noopener">Lv. 110 Cape</a> ]Chance to drop from <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener">Magnus</a> (Easy/Normal/Hard)
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>There is a version for each class</li>
                    <li>Can also be bought with <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120] </strong> <img src="/images/equipment/noble-ifias-ring.png" alt="Eqp Noble Ifia's Ring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113282" target="_blank" rel="noreferrer noopener">[Ring]</a> Reward from Lion King's Castle - <a href="https://maplestory.fandom.com/wiki/Quests/221" target="_blank" rel="noreferrer noopener">Rose Garden</a>
                <ul>
                    <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120]</strong>  <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Timeless Fennel"/>  <img src="/images/equipment/eclectic-myst-blue.png" alt="Eqp Eclectic Myst Blue"/> <img src="/images/equipment/eclectic-rontano.png" alt="Eqp Ecletic Rontano"/> <img src="/images/equipment/eclectic-lubav.png" alt="Eqp Eclectic Lubav"/>  <img src="/images/equipment/briser-terror.png" alt="Eqp Timeless Executioner"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/6th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Eclectic Gear]</a> Obtained from fighting monsters around Lv. 120
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 130] </strong> <img src="/images/equipment/antique-leaf-shoulder.png" alt="Eqp Antique Leaf Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Antique_Leaf_Shoulder" target="_blank" rel="noreferrer noopener">[Shoulder]</a> Bought with <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> <a href="https://maplestory.fandom.com/wiki/Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Yggdrasil Rune]</a> or <img src="/images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> <a href="https://maplestory.fandom.com/wiki/Chaos_Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Chaos Yggdrasil Rune]</a> from <a href="https://maplestory.fandom.com/wiki/Oko#Root_Abyss" target="_blank" rel="noopener noreferrer">Oko</a></li>
                <li><strong>[Lv. 130] </strong> <img src="/images/equipment/muspell-warrior-hat.png" alt="Eqp Muspell Warrior Hat"/>  <img src="/images/equipment/muspell-magician-suit.png" alt="Eqp Muspell Magician Suit"/>  <img src="/images/equipment/muspell-warrior-shoes.png" alt="Eqp Muspell Warrior Shoes"/> <img src="/images/equipment/muspell-warrior-gloves.png" alt="Eqp Muspell Warrior Gloves"/> <img src="/images/equipment/jaihin-saber.png" alt="Eqp Jaihin Saber"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/7th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Muspell Gear]</a> Obtained from fighting monsters around Lv. 130
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="/images/equipment/pensalir-battle-helm.png" alt="Eqp Pensalir Battle Helm"/> <img src="/images/equipment/pensalir-mage-robe.png" alt="Eqp Pensalir Mage Robe"/> <img src="/images/equipment/pensalir-battle-boots.png" alt="Eqp Pensalir Battle Boots"/>  <img src="/images/equipment/pensalir-battle-gloves.png" alt="Eqp Pensalir Battle Gloves"/> <img src="/images/equipment/pensalir-battle-cape.png" alt="Eqp Pensalir Battle Cape"/>  <img src="/images/equipment/utgard-saber.png" alt="Eqp Utgard Saber"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/8th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Pensalir Gear]</a> Obtained from fighting monsters above Lv. 140
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/> <img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/>  <img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noreferrer noopener">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noreferrer noopener">Belt</a> ] Obtained from fighting <a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></li>
                <li><strong>[Lv. 140+] </strong> <img src="/images/equipment/princess-nos-accursed-arrow.png" alt="Eqp Princess No's Accursed Arrow"/> <img src="/images/equipment/princess-nos-damp-book.png" alt="Eqp Princess No's Damp Book"/> <img src="/images/equipment/princess-nos-fox-marble.png" alt="Eqp Princess No's Fox Marble"/> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Princess No Secondary]</a> Obtained from fighting <a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a>
                <ul>
                    <li>Considered best-in-slot for most classes</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="/images/equipment/meister-ring.png" alt="Eqp Meister Ring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113055" target="_blank" rel="noreferrer noopener">[Ring]</a> Obtained from Accessory Crafting Profession</li>
                <li><strong>[Lv. 140]</strong> <img src="/images/equipment/dimension-gloves.png" alt="Eqp Dimension Gloves"/> <img src="/images/equipment/high-quality-dimension-gloves.png" alt="Eqp High Quality Dimension Gloves"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1082488" target="_blank" rel="noreferrer noopener">Glove</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1082489" target="_blank" rel="noreferrer noopener">Glove</a> ] Can be obtained from <a href="https://maplestory.fandom.com/wiki/Category:Dimension_Invasion" target="_blank" rel="noreferrer noopener">Dimension Invasion</a>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="/images/equipment/commerci-hat.png" alt="Eqp Commerci Hat"/> <img src="/images/equipment/commerci-suit.png" alt="Eqp Commerci Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp "/> <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/> <img src="/images/equipment/commerci-belt.png" alt="Eqp Commerci Belt"/> <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/> <img src="/images/equipment/commerci-shoulder.png" alt="Eqp Commerci Shoulder"/> [ <a href="https://maplestory.wiki/GMS/205/item/1003984" target="_blank" rel="noreferrer noopener">Hat</a>, <a href="https://maplestory.wiki/GMS/205/item/1052673" target="_blank" rel="noreferrer noopener">Overall</a>, <a href="https://maplestory.wiki/GMS/205/item/1072874" target="_blank" rel="noreferrer noopener">Shoes</a>, <a href="https://maplestory.wiki/GMS/205/item/1082559">Gloves</a>, <a href="https://maplestory.wiki/GMS/205/item/1102626">Cape</a>, <a href="https://maplestory.wiki/GMS/205/item/1132248" target="_blank" rel="noreferrer noopener">Belt</a>, <a href="https://maplestory.wiki/GMS/205/item/1152161" target="_blank" rel="noreferrer noopener">Shoulder</a> ] Obtained from completing Commerci Storyline
                <ul>
                    <li>Not to be confused with Sweetwater Gear</li>
                </ul>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/>  <img src="/images/equipment/amaterasus-armor.png" alt="Eqp Oyamatsumi's Armor"/> <img src="/images/equipment/amaterasus-shoes.png" alt="Eqp Ame-no-Uzume's Shoes"/>  <img src="/images/equipment/amaterasus-gloves.png" alt="Eqp Tsukuyomi's Gloves"/> <img src="/images/equipment/amaterasus-cape.png" alt="Eqp Susano-o's Cape"/> <img src="/images/equipment/amaterasus-belt.png" alt="Eqp Amaterasu's Belt"/> <img src="/images/equipment/amaterasus-epaulet.png" alt="Eqp Susano-o's Epaulet"/>  <img src="/images/equipment/amaterasus-nimbus-sword.png" alt="Eqp Amaterasu's Nimbus Sword"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Gear]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Mori Ranmaru</a>
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="/images/equipment/antique-root-shoulder.png" alt="Eqp Antique Root Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Antique_Root_Shoulder" target="_blank" rel="noreferrer noopener">[Shoulder]</a> Bought with <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> <a href="https://maplestory.fandom.com/wiki/Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Yggdrasil Rune]</a> or <img src="/images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> <a href="https://maplestory.fandom.com/wiki/Chaos_Yggdrasil_Rune" target="_blank" rel="noopener noreferrer">[Chaos Yggdrasil Rune]</a> from <a href="https://maplestory.fandom.com/wiki/Oko#Root_Abyss" target="_blank" rel="noopener noreferrer">Oko</a></li>
                <li><strong>[Lv. 150] </strong> <img src="/images/equipment/antique-root-gloves.png" alt="Eqp Antique Root Gloves"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082688" target="_blank" rel="noreferrer noopener">[Glove]</a> Bought with <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> or <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestory.fandom.com/wiki/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="/images/equipment/enraged-zakum-helmet.png" alt="Eqp Enraged Zakum Helmet"/> <img src="/images/equipment/enraged-zakum-cape.png" alt="Eqp Enraged Zakum Cape"/> <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1004637" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102871" target="_blank" rel="noreferrer noopener">Cape</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132296" target="_blank" rel="noreferrer noopener">Belt</a> ] Dropped by <a href="https://maplestory.fandom.com/wiki/Zakum#Chaos" target="_blank" rel="noreferrer noopener">Chaos Zakum</a>
                </li>
                <li><strong>[Lv. 175+] </strong> <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Capes]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Magnus/Monster#Hard" target="_blank" rel="noreferrer noopener">Hard Magnus</a>
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>Can also be bought with <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> <a href="https://maplestory.fandom.com/wiki/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    <ul>
                        <li>Mayala also sells <img src="/images/equipment/tyrant-hyades-belt.png" alt="Eqp Tyrant Hyades Belt"/> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Belt" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Belts]</a>
                        </li>
                    </ul>
                    </li>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 160] </strong> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/>  <img src="/images/equipment/sweetwater-suit.png" alt="Eqp Sweetwater Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp Commerci Boots"/>  <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/>  <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/><strong/>  <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> Dropped from Commerci Voyage Bosses</li>
                <li><strong>[Lv. 160] </strong> <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/>  <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">Face</a> ] Bought with <img src="/images/items/commerci-denaro.png" alt="Etc Commerci Denaro"/> <a href="https://maplestory.fandom.com/wiki/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a> from <a href="https://maplestory.fandom.com/wiki/Javert" target="_blank" rel="noreferrer noopener">Javert</a>
                </li>
                <li><strong>[Lv. 160] </strong> <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">Best-In-Slot Medal</a> / <a href="https://maplestory.fandom.com/wiki/Subani-Roid" target="_blank" rel="noreferrer noopener">Android</a> / <a href="https://maplestory.fandom.com/wiki/Dr.Jang-Roid" target="_blank" rel="noreferrer noopener">Android</a> ] Obtained for completing Masteria Through Time Blockbuster
                <ul>
                    <li>Android has an NPC Vendor function</li>
                    <li>Does not have a Heart provided</li>
                </ul>
                </li>
                <li><strong>[Lv. 170] </strong> <img src="/images/equipment/treasure-hunter-johns-ring.png" alt="Eqp Treasure Hunter John's Ring"/>  <img src="/images/equipment/treasure-hunter-jacks-scar.png" alt="Eqp Treasure Hunter Jack's Scar"/>  <img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/> <img src="/images/equipment/lukans-pauldron.png" alt="Eqp Lukan's Pauldron"/> <img src="/images/equipment/elpams-belt.png" alt="Eqp Elpam's Belt"/> <img src="/images/equipment/professor-foxwits-glasses.png" alt="Eqp Professor Foxwit's Glasses"/> <img src="/images/equipment/sheriff-litas-earrings.png" alt="Eqp Sheriff Lita's Earrings"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Lv. 125 Masteria Explorer Gear]</a> Bought with <img src="/images/items/nlc-commemorative-coin.png" alt="Etc NLC Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/NLC_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[NLC Commemorative Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Spindle#Merchant" target="_blank" rel="noreferrer noopener">Spindle</a>
                </li>
                <li><strong>[Lv. 180]</strong>  <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <a href="https://maplestory.fandom.com/wiki/Glona%27s_Heart" target="_blank" rel="noreferrer noopener">[Ring]</a> Bought with <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> and Mesos from <a href="https://maplestory.fandom.com/wiki/Fiona" target="_blank" rel="noreferrer noopener">Fiona</a>
                <ul>
                    <li>Unless you are really trying to optimize your gear, ring is not required</li>
                </ul>
                </li>
                <li><strong>[Lv. 180+] </strong> <img src="/images/equipment/cracked-gollux-earrings.png" alt="Eqp Cracked Gollux Earrings"/> <img src="/images/equipment/solid-gollux-ring.png" alt="Eqp Solid Gollux Ring"/> <img src="/images/equipment/reinforced-engraved-gollux-pendant.png" alt="Eqp Reinforced Engraved Gollux Pendant"/> <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/> [<a href="https://maplestory.fandom.com/wiki/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">Cracked</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">Solid</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">Reinforced</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">Superior</a> Gollux Accessories] Obtained from defeating Gollux or bought with <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> <a href="https://maplestory.fandom.com/wiki/Gollux_Coin">[Gollux Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Lucia" target="_blank" rel="noreferrer noopener">Lucia</a>
                <ul>
                    <li>Revamped Gollux HP: <a href="https://imgur.com/a/iSOdwz6" target="_blank" rel="noreferrer noopener">https://imgur.com/a/iSOdwz6</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 180+] </strong> <img src="/images/equipment/root-abyss-master.png" alt="Setup Root Abyss Master"/> <a href="https://maplestory.fandom.com/wiki/Root_Abyss_Master" target="_blank" rel="noreferrer noopener">[Title]</a> Obtained by defeating each Chaos Root Abyss boss 10 times</li>
                <li><strong>[Lv. 200]</strong> <img src="/images/equipment/last-unwelcome-guest-ring.png" alt="Eqp Last Unwelcome Guest Ring"/>  <img src="/images/equipment/last-unwelcome-guest-necklace.png" alt="Eqp Last Unwelcome Guest Necklace"/> <img src="/images/equipment/last-unwelcome-guest-earrings.png" alt="Eqp Last Unwelcome Guest Earrings"/> <img src="/images/equipment/last-unwelcome-guest-belt.png" alt="Eqp Last Unwelcome Guest Belt"/> <img src="/images/equipment/rare-alien-fragment-helmet.png" alt="Eqp Rare Alien Fragment Helmet"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Alien_Fragment_Set">[Lv. 180 Alien Fragment Gear]</a>, <img src="/images/equipment/vip-bow.png" alt="Eqp VIP Bow"/> [Alien Fragment Weapons] can be obtained from <a href="https://maplestory.fandom.com/wiki/Category%3AAlien_Visitor" target="_blank" rel="noreferrer noopener">Alien Visitor</a></li>
                <li><strong>[Lv. 200+] </strong> <img src="/images/equipment/ring-of-restraint.png" alt="Eqp Ring of Restraint"/> <img src="/images/equipment/ultimatum-ring.png" alt="Eqp Ultimatum Ring"/>  <img src="/images/equipment/limit-ring.png" alt="Eqp Limit Ring"/> <img src="/images/equipment/health-cut-ring.png" alt="Eqp Health Cut Ring"/> <a href="https://maplestory.fandom.com/wiki/Ring#Tower%20of%20Oz%20Rings" target="_blank" rel="noreferrer noopener">[Tower of Oz Rings]</a> Obtained from <img src="/images/items/alicias-ring-box.png" alt="Use Alicia's Ring Box"/> [Alica's Ring Boxes] from Tower of Oz</li>
            </ul>
            <h3>Boss Armor:</h3>
            <ul>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats</li>
                <li>Considered the main gear to strive because they are Boss Items</li>
            </ul>
            <ul>
                <li><strong>[Hilla] </strong> <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <img src="/images/equipment/necromancer-warrior-suit.png" alt="Eqp Necromancer Magician Suit"/>  <img src="/images/equipment/necromancer-warrior-shoes.png" alt="Eqp Necromancer Warrior Shoes"/>  <img src="/images/equipment/necromancer-warrior-gloves.png" alt="Eqp Necromancer Warrior Gloves"/> <img src="/images/equipment/necro-terror.png" alt="Eqp Necro Terror"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a></li>
                <li><strong>[Von Leon <em>(Hard Mode)</em> +</strong> <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> <strong>] </strong> <img src="/images/equipment/marx-von-leon-helmet.png" alt="Eqp Marx Von Leon Helmet"/>  <img src="/images/equipment/royal-von-leon-suit.png" alt="Eqp Marx Von Leon Battle Suit"/> <img src="/images/equipment/marx-von-leon-war-boots.png" alt="Eqp Marx Von Leon War Boots"/> <img src="/images/equipment/marx-von-leon-gloves.png" alt="Eqp Marx Von Leon Gloves"/> <img src="/images/equipment/marx-von-leon-cape.png" alt="Eqp Marx Von Leon Cape"/> <img src="/images/equipment/marx-von-leon-sabre.png" alt="Eqp Marx Von Leon Sabre"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Royal Von Leon Gear]</a></li>
                <li><strong>[Cygnus </strong> <img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/> <strong>] </strong> <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/>  <img src="/images/equipment/lionheart-battle-mail.png" alt="Eqp Dragon Tail Mage Robe"/> <img src="/images/equipment/lionheart-battle-boots.png" alt="Eqp Raven Horn Chaser Boots"/>  <img src="/images/equipment/lionheart-battle-bracers.png" alt="Eqp Falcon Wing Sentinel Gloves"/>  <img src="/images/equipment/lionheart-battle-cape.png" alt="Eqp Lionheart Battle Cape"/> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/>  <img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                <li><strong>[Chaos Root Abyss </strong> <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> <strong>] </strong> <img src="/images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/> <img src="/images/equipment/eagle-eye-warrior-armor.png" alt="Eqp Eagle Eye Dunwitch Robe"/> <img src="/images/equipment/trixter-warrior-pants.png" alt="Eqp Trixter Ranger Pants"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Mistilteinn"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 CRA Gear]</a></li>
                <li><strong>[Damien / Lotus </strong> <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/>  <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> <strong>] </strong> <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Mage Suit"/>  <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/>  <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/>  <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 160 Absolab Gear]</a></li>
                <li><strong>[Lucid / Will </strong> <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> <img src="/images/items/arachno-coin.png" alt="Etc Arachno Coin"/><strong>] </strong> <img src="/images/equipment/arcane-umbra-knight-hat.png" alt="Eqp Arcane Umbra Knight Hat"/> <img src="/images/equipment/arcane-umbra-knight-suit.png" alt="Eqp Arcane Umbra Mage Suit"/>  <img src="/images/equipment/arcane-umbra-knight-shoes.png" alt="Eqp Arcane Umbra Knight Shoes"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="Eqp Arcane Umbra Knight Gloves"/>  <img src="/images/equipment/arcane-umbra-knight-cape.png" alt="Eqp Arcane Umbra Knight Cape"/>  <img src="/images/equipment/arcane-umbra-knight-shoulder.png" alt="Eqp Arcane Umbra Knight Shoulder"/> <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 200 Arcane Umbra Gear]</a></li>
                <li><strong>[Kalos </strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/><strong>] </strong> <img src="/images/equipment/eternal-knight-helm.png" alt="Eqp Eternal Knight Helm"/> <img src="/images/equipment/eternal-knight-armor.png" alt="Eqp Eternal Knight Armor"/> <img src="/images/equipment/eternal-knight-pants.png" alt="Eqp Eternal Knight Pants"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Eternal_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 250 Eternal Knight Gear]</a></li>
            </ul>
            <h3>Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a></li>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li><strong>[Zakum]</strong> <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Condensed_Power_Crystal" target="_blank" rel="noreferrer noopener">[ Lv. 110 Face ]</a></li>
                <li><strong>[Zakum]</strong> <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye"/> <a href="https://maplestory.fandom.com/wiki/Aquatic_Letter_Eye_Accessory" target="_blank" rel="noreferrer noopener">[ Lv. 100 Eye ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestory.fandom.com/wiki/Black_Bean_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 135 Eye ]</a></li>
                <li><strong>[Papulatus <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestory.fandom.com/wiki/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 145 Eye ]</a></li>
                <li><strong>[Horntail]</strong> <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earrings"/> <a href="https://maplestory.fandom.com/wiki/Dea_Sidus_Earring" target="_blank" rel="noreferrer noopener">[ Lv. 130 Earrings ]</a></li>
                <li><strong>[Horntail]</strong> <img src="/images/equipment/silver-blossom-ring.png" alt="Eqp Silver Blossom Ring"/> <a href="https://maplestory.fandom.com/wiki/Silver_Blossom_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 110 Ring ]</a></li>
                <li><a href="https://maplestory.fandom.com/wiki/Quests/221/Ifia%27s_Hope" target="_blank" rel="noreferrer noopener"><strong>[Ifia <em>(NPC)</em>]</strong></a> <img src="/images/equipment/noble-ifias-ring.png" alt="Eqp Noble Ifia's Ring"/> <a href="https://maplestory.fandom.com/wiki/Noble_Ifia%27s_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 120 Ring ]</a></li>
                <li><strong>[Guardian Angel Slime]</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Eqp Guardian Angel Ring"/> <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 160 Ring ]</a></li>
                <li><strong>[Horntail <em>(Easy / Normal Mode)</em>]</strong> <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestory.fandom.com/wiki/Horntail_Necklace" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Horntail <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestory.fandom.com/wiki/Chaos_Horntail_Necklace" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Arkarium]</strong> <img src="/images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Necklace"/> <a href="https://maplestory.fandom.com/wiki/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 120 Pendant ]</a></li>
                <li><strong>[Arkarium]</strong> <img src="/images/equipment/dominator-pendant.png" alt="Eqp Dominator Necklace"/> <a href="https://maplestory.fandom.com/wiki/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pendant ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestory.fandom.com/wiki/Golden_Clover_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 140 Belt ]</a></li>
                <li><strong>[Zakum <em>(Chaos Mode)</em>]</strong> <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/> <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 150 Belt ]</a></li>
                <li><strong>[Magnus]</strong> <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[ Lv. 120 Shoulder ]</a></li>
                <li><strong>[Hilla]</strong> <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestory.fandom.com/wiki/Stone_of_Eternal_Life" target="_blank" rel="noreferrer noopener">[ Lv. 0 Pocket Item ]</a></li>
                <li><strong>[Pink Bean]</strong> <img src="/images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestory.fandom.com/wiki/Pink_Holy_Cup" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pocket Item ]</a></li>
                <li><strong>[Magnus]</strong> <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestory.fandom.com/wiki/Crystal_Ventus_Badge" target="_blank" rel="noreferrer noopener">[ Lv. 130 Badge ]</a></li>
            </ul>
            <h3>Dawn Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Dawn_Boss_Set" target="_blank" rel="noreferrer noopener">Dawn Boss Accessory Set</a></li>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li><strong>[Verus Hilla / Chosen Seren]</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendent"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[ Lv. 140 Pendant ]</a></li>
                <li><strong>[Lucid / Will]</strong> <img src="/images/equipment/twilight-mark.png" alt="Eqp Twilight Mark"/> <a href="https://maplestory.fandom.com/wiki/Twilight_Mark" target="_blank" rel="noreferrer noopener">[ Lv. 140 Face ]</a></li>
                <li><strong>[Gloom / Darknell]</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestory.fandom.com/wiki/Estella_Earrings" target="_blank" rel="noreferrer noopener">[ Lv. 160 Earrings ]</a></li>
                <li>
                    <strong>[Guardian Angel Slime]</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Eqp Guardian Angel Ring"/> <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[ Lv. 160 Ring ]</a>
                    <ul>
                        <li>Ring is also part of the Boss Accessory set and requires using a special scroll <img src="/images/items/guardian-angel-ring-set-conversion-scroll.png" alt="Use Guardian Angel Ring Set Conversion Scroll"/> [Conversion Scroll] from the <a href="https://maplestory.fandom.com/wiki/Chief_Slime" target="_blank" rel="noreferrer noopener">Chief Slime</a> to convert it into the Dawn Boss Accessory set</li>
                    </ul>
                </li>
            </ul>
            <h3>Pitched Boss Accessories:</h3>
            <ul>
                <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Pitched_Boss_Set" target="_blank" rel="noreferrer noopener">Pitched Boss Accessory Set</a>
                </li>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li>Items here at very rare and hard to get, considered end game</li>
                <li><strong>[Lotus <em>(Hard Mode)</em>] </strong> <img src="/images/equipment/black-heart.png" alt="Eqp Black Heart"/>  <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> [<a href="https://maplestory.fandom.com/wiki/Black_Heart" target="_blank" rel="noreferrer noopener">Lv. 120 Heart</a> / <a href="https://maplestory.fandom.com/wiki/Berserked" target="_blank" rel="noreferrer noopener">Lv. 160 Face</a> ]
                    <ul>
                        <li>Heart is a time-limited item, time limit cannot be extended</li>
                    </ul>
                </li>
                <li><strong>[Damien <em>(Hard Mode)</em>]</strong> <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestory.fandom.com/wiki/Magic_Eyepatch" target="_blank" rel="noreferrer noopener">[ Lv. 160 Eye ]</a></li>
                <li><strong>[Verus Hilla]</strong> <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering"/> <a href="https://maplestory.fandom.com/wiki/Source_of_Suffering" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pendant ]</a></li>
                <li><strong>[Will <em>(Hard Mode)</em>]</strong> <img src="/images/equipment/cursed-red-spellbook.png" alt="Eqp Cursed Red Spellbook"/> <img src="/images/equipment/cursed-blue-spellbook.png" alt="Eqp Cursed Blue Spellbook"/> <img src="/images/equipment/cursed-green-spellbook.png" alt="Eqp Cursed Green Spellbook"/> <img src="/images/equipment/cursed-yellow-spellbook.png" alt="Eqp Cursed Yellow Spellbook"/> <a href="https://maplestory.fandom.com/wiki/Cursed_Red_Spellbook" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pocket Item ]</a></li>
                <li><strong>[Lucid (Hard Mode)]</strong> <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/> <a href="https://maplestory.fandom.com/wiki/Dreamy_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 200 Belt ]</a></li>
                <li><strong>[Gloom]</strong> <img src="/images/equipment/endless-terror.png" alt="Endless Terror Ring"/> <a href="https://maplestory.wiki/GMS/214/item/1113306" target="_blank" rel="noreferrer noopener">[ Lv. 200 Ring ]</a></li>
                <li><strong>[Darknell]</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Commanding Force Earring"/> <a href="https://maplestory.wiki/GMS/214/item/1032316" target="_blank" rel="noreferrer noopener">[ Lv. 200 Earrings]</a></li>
                <li><strong>[Black Mage]</strong> <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestory.wiki/GMS/218/item/1182285" target="_blank" rel="noreferrer noopener">[ Lv. 200 Badge ]</a></li>
            </ul>
            <h3>Progression towards Midgame:</h3>
            <hr/>
            <p>For info on upgrading and enhancing gear check out: <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a>
            </p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3 id="spelltrace"> <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Tracing in Regular Servers:</h3>
            <hr/>
            <p>For regular servers, be sure to upgrade all your gear with at least 70% Spell Tracing so that you can start Star Forcing your gear as well. On average, 70% Spell Tracing provides an optimal amount of stats compared to just 100% Spell Tracing your equipment</p>
            <p>In Reboot Servers, Spell Traces are useless and can be sold to NPCs for extra Mesos</p>
            <img className="repository-image" src="/images/info/equipment-enchant-ui.png" alt="Equipment Enhance"/>
            <img className="repository-image" src="/images/info/equipment-enchant-button.png" alt="Enhance Button"/>
            <p>You can open the Equipment Enchant menu for Spell Tracing and Star Forcing by either pressing "O" by default or through your inventory by pressing the <strong>red button with a hammer</strong>
            </p>
            <p>Some ways to obtain Spell Traces are:</p>
            <ul>
                <li>Monster drops</li>
                <li>Surprise Missions</li>
                <li>Inferno Wolf + Pollo/Frito Missions</li>
                <li> <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> Crusader Coin shop</li>
            </ul>
            <h5>Spell Trace Fever:</h5>
            <img className="repository-image" src="/images/info/spell-trace-fever.png" alt="Spell Trace Fever"/>
            <p>Occasionally on Regular Servers, there are special events that take place where Spell Trace enhancements have a higher success rate. These are the best times to upgrade equipment you plan to invest a lot of time into. Unless you are planning to perfect a piece of equipment, you do not need to wait for this event to start Spell Tracing</p>
            <h5>50% Off Spell Tracing:</h5>
            <p>Occasionally on Regular Servers, during Sunny Sundays, there are events where Spell Tracing will cost half the amount. This is a good time to use Spell Traces on (Ark) Innocence Scrolls or Clean Slates but, Spell Trace Fever is much better still because of the increased rates. Also, using regular 10% Clean Slates and 50% Innocence Scrolls will probably be more cost-effective than using the Spell Tracing versions</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3 id="starforce">Star Forcing:</h3>
            <hr/>
            <img className="repository-image" src="/images/info/starforce-tooltip.png" alt="Star Force Example"/>
            <p>Once you have consumed all upgrade slots, you may star force/enhance your gear. In Reboot, there are no upgrade slots, so you just star force/enhance instead. Star Forcing costs Mesos that grants increased stats on success</p>
            <p>A recommended amount of stars you want for each piece of equipment is around 10 - 12 stars early on but optimally all gear at 12 stars</p>
            <p>Occasionally there are events with shops that sell <img src="/images/items/star-enhancement-scroll.png" alt="Use Star Enchancement Scroll"/>[Star Enhancement Scrolls] which sets an equipment's Star Force to the said amount. There is normally one that enhances your gear to <a href="https://maplestory.wiki/GMS/210.1.1/item/2049378" target="_blank" rel="noreferrer noopener">15-stars</a> that you can get from events if you do not have enough Mesos to Star Force. Past 15 stars, equipment start to see a clear difference from equipment with fewer stars</p>
            <h5>30% Star Force Discount:</h5>
            <p>Occasionally on Sunny Sundays, there is an event where Star Forcing prices are discounted by 30%. These are the best times to Star Force if you are trying to reach above 15 stars. If you are just Star Forcing regularly to 12 stars, you do not need to wait for this to happen</p>
            <h5>5/10/15 Star Force 100%:</h5>
            <p>Occasionally on Sunny Sundays, there is an event where enhancing to 5, 10, or 15 Star Force, the success rate is guaranteed. This is also a good time to try reaching to 15 stars but is not necessary to start Star Forcing your gear</p>
            <h5>1+1 Event:</h5>
            <p>Occasionally on Sunny Sundays, there is an event where for every Star Force enhancement below 10 Stars, you gain 2 stars. This is also a good time to try reaching to 15 stars since you essentially only need to keep trying from 12 Stars, but is not necessary to start Star Forcing your gear</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3 id="additionalstats">Bonus Stats:</h3>
            <hr/>
            <p>For now you do not need to worry too much about Bonus Stats and Rebirth Flames. If you do obtain a special rebirth flame, feel free to use it on anything or on regular servers, you can sell them (if tradeable)</p>
            <p>Some nice stats to reroll into is your Main Stat, %All Stat, %Boss Damage or Attack/Magic Attack</p>
            <hr/>
            <p><strong>Some reasons that make certain items better than others (or best-in-slot) include:</strong>
            </p>
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
                <li>Amount of Star Force that can be obtained ( best being 25 stars)
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
                <li>Is a Boss Item / KMS Item
                <ul>
                    <li>These items can obtain higher tiers of Bonus Stats than non-KMS items</li>
                </ul>
                </li>
                <li>Set bonus effect</li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3 id="transferhammer">Transfer Hammer:</h3>
            <hr/>
            <img className="repository-image" src="/images/info/transfer-hammer-ui.png" alt="Transfer Hammer UI"/>
            <p>Transfer Hammer is a system that allows you to transfer Star Force, Potentials, Bonus Potentials, and Soul Weapon from one equipment to another (with restrictions). The following will not be transferred, Scrolled Stats and Bonus Stats. Additionally, you will lose one Star Force while transferring and any potentials above Epic will be dropped down to Epic Potential. You can only transfer equipment up to 10 levels apart of each other. For equipment below Lv. 119, you can transfer up to 20 levels apart</p>
            <p>Some requirements for Transfer Hammering is that the piece of equipment must have at least 1 Star Force, cannot be Superior Gear (such as Tyrants) and must be the same equipment type (regardless of job group). Overalls can be counted towards both as a top or bottom and vice versa</p>
            <p>In regular servers, any remaining upgrade slots will be filled by 100% Spell Traces for free. You can choose which stat you want the upgrades to be. I recommend that you already Upgrade/Spell Trace the Transferring Item first if you do not want the 100% Spell Trace stats</p>
            <img className="repository-image" src="/images/info/transfer-hammer-button.png" alt="Transfer Hammer Button"/>
            <p>To begin Transfer Hammering, you can access the UI from your Inventory by<strong> pressing the blue hammer icon</strong> For more info on Transfer Hammer, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Transfer_Hammer" target="_blank">https://strategywiki.org/wiki/MapleStory/Transfer_Hammer</a>
            </p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <h3 id="epicgear">Epic Potential Gear and so on:</h3>
            <hr/>
            <p>Early game you want to have all your gear at least 9% Main Stat and Epic Potential. You will also be wanting to be working towards Unique Potential gear. Your main focus for this would be to try and get your Weapon, Secondary Weapon, and Emblem to unique first as their potentials can provide special stats like %Attack/Magic Attack, %Ignore DEF and %Boss Damage unlike the rest of your gear. As a note, do not keep %Damage lines as they do not provide as much as a boost as the other potential lines do</p>
            <p>Additionally, be sure all your equipment have 3 lines of potential instead of 2. Use <img src="/images/items/gold-potential-stamp.png" alt="Gold Potential Stamp"/> <a href="https://maplestory.wiki/GMS/215/item/2049500" target="_blank" rel="noreferrer noopener">[Gold Potential Stamp]</a> to unlock a 3rd line if needed</p>
            <p>Do not be afraid to use expiring <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube"/> <a href="https://maplestory.wiki/GMS/218/item/2711005" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cubes]</a> as it's better to use them than waste it. As well, take that risk of rerolling your "okay" potentials for "great" potentials as they are easily replaceable (unless you have that 36% main stat)</p>
            <p>Some ways to obtain Epic Potential Scrolls are:</p>
            <ul>
                <li><strong style={{color: '#ff6600'}}>[Reboot] </strong>Yu Garden shop</li>
                <li><strong>[Regular] </strong>Auction House</li>
                <li>Event Shops</li>
                <li>Elite Bosses</li>
                <li>Pollo/Fritto Missions + Inferno Wolf</li>
                <li>Legion System</li>
            </ul>
            <p>Some ways to obtain Gold Potential Stamps are:</p>
            <ul>
                <li><strong>[Regular] </strong>Auction House
                <ul>
                    <li>Search for <img src="/images/items/gold-potential-stamp.png" alt="Perfect Potential Stamp"/> <a href="https://maplestory.wiki/GMS/215/item/2049506" target="_blank" rel="noreferrer noopener">[Perfect Potential Stamp]</a>
                    </li>
                </ul>
                </li>
                <li>Event Shops</li>
                <li>Elite Bosses</li>
                <li>Pollo/Fritto Missions + Inferno Wolf</li>
                <li>Legion System</li>
            </ul>
            <p>Some ways to obtain Master Craftsman's Cubes are:</p>
            <ul>
                <li>Crafting</li>
                <li>Harvesting from Mysterious Veins / Herbs</li>
                <li>Commerci Voyages</li>
                <li>Bosses</li>
                <li>Pollo/Frito Missions + Inferno Wolf</li>
                <li>Surprise Mission</li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="bosses">[ &lt; 2k Main Stat] Earlygame Bosses:</ArticleHeaderTwo>
            <hr/>
            <p>The amount of Main Stat listed is just a safe recommendation, your class may be able to defeat a boss with lower stat if you have the damage or the right mechanics</p>
            <p>As well, it should be noted, a better, more general guide would be to consider which floor you can reach in Mu Lung Dojo although neither is perfectly accurate. The best way to check if you can defeat a boss is by trying, especially in Practice Mode when applicable</p>
            <p>To view bosses by Dojo floors, check out: <a href="https://i.imgur.com/9u2Z6vq.png" target="_blank" rel="noreferrer noopener">https://i.imgur.com/9u2Z6vq.png</a></p>
            <ul>
                <li> <img src="/images/map-icons/zakum.png" alt="ElNathDungeon icon"/> <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener"><strong>Normal Zakum</strong></a>: Source of good EXP early game
                <ul>
                    <li><strong>Source of Mesos in Reboot from</strong>: <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> that can be sold for Mesos</li>
                    <li>
                        Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/>  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Easy Mode and Above Rewards:</strong>
                        <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>
                    </li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong>
                        <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>
                        , <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Condensed_Power_Crystal">[</a><a href="https://maplestory.wiki/GMS/210.1.1/item/1012478" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>
                        , <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022231" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>
                        , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ursus.png" alt="MapIcon Ursus"/>  <strong><a href="https://maplestory.fandom.com/wiki/Ursus" target="_blank" rel="noreferrer noopener">Ursus</a></strong>
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Important]: </strong>In Reboot servers, the amount of Mesos rewarded is increased and is considered a main activity</li>
                    <li>For more info on Ursus, check this out: <a href="https://strategywiki.org/wiki/MapleStory/Ursus" target="_blank" rel="noreferrer noopener">https://strategywiki.org/wiki/MapleStory/Ursus</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Easy Papulatus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Magnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>
                        , <img src="/images/equipment/elite-heliseum-cape.png"/> <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Cape" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>
                        , <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182087" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>
                        , <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>
                        , <img src="/images/equipment/kaiserion.png" alt="Eqp Kaiserion"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402205" target="_blank" rel="noreferrer noopener">[Kaiserion]</a>
                        , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                        , <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coin]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <a href="https://maplestory.fandom.com/wiki/Hilla/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Hilla</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162009" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>
                        , <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>
                        , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                        , <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> <a href="https://maplestory.fandom.com/wiki/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/omega-sector.png"/> <a href="https://maplestory.fandom.com/wiki/OMNI-CLN" target="_blank" rel="noreferrer noopener"><strong>OMNI-CLN</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal Mode Rewards:</strong> <img src="/images/items/omni-cln-component.png"/> <a href="https://maplestory.fandom.com/wiki/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>
                        , <img src="/images/items/omni-cln-vacuum.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[OMNI-CLN Vacuum]</a>
                        , <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Lv. 110 Rebirth Flame]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo id="bosses">[ &gt; 3k Main Stat] Earlygame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Easy/Normal Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>
                    </li>
                    <li>
                        <strong>Main Rewards:</strong> <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> [Gollux Penny]
                        , <img src="/images/equipment/cracked-gollux-earrings.png" alt="Eqp Cracked Gollux Earrings"/> <img src="/images/equipment/cracked-gollux-ring.png" alt="Eqp Cracked Gollux Ring"/> <img src="/images/equipment/cracked-gollux-engraved-pendant.png" alt="Eqp Cracked Engraved Gollux Pendant"/> <img src="/images/equipment/cracked-gollux-engraved-belt.png" alt="Eqp Cracked Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">[Cracked Gollux Accessories]</a>
                        , <img src="/images/equipment/solid-gollux-earrings.png" alt="Eqp Solid Gollux Earrings"/> <img src="/images/equipment/solid-gollux-ring.png" alt="Eqp Solid Gollux Ring"/> <img src="/images/equipment/solid-gollux-engraved-pendant.png" alt="Eqp Solid Engraved Gollux Pendant"/> <img src="/images/equipment/solid-gollux-engraved-belt.png" alt="Eqp Solid Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">[Solid Gollux Accessories (Normal and above)]</a>
                    </li>
                    <li>Gollux Pennies <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/root-abyss.png" alt="MapIcon rootabyss"/> <strong><a href="https://maplestory.fandom.com/wiki/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Normal Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a> and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal mode and Above Rewards:</strong> <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/>[Yggdrasil Coin]
                        , <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/><img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/> [Chair]
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/horntail.png" alt="MapIcon Hontale"/> <a href="https://maplestory.fandom.com/wiki/Horntail" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal/Chaos Horntail</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Chaos Only)</em> Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy Mode and Above Rewards: </strong> <img src="/images/equipment/silver-blossom-ring.png"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113149" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032241" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>
                        , <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122000" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>
                        , <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                    </li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/potion-recipe.png"/> <a href="https://maplestory.fandom.com/wiki/Wealth_Acquisition_Potion#Recipe" target="_blank" rel="noreferrer noopener">[Wealth Aquisition Potion Recipe]</a>
                    </li>
                    <li>
                    <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Chaos Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122076" target="_blank" rel="noreferrer noopener">[Chaos Horntail Necklace]</a>
                        , <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]
                        , <img src="/images/items/horntail-fountain.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Horntail Fountain]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <strong> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Easy/Normal/Hard Von Leon</a></strong>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
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
                    <li> <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> exchange for <img src="/images/equipment/royal-von-leon-suit.png"/><img src="/images/equipment/royal-von-leon-energy-chain.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> <strong> <a href="https://maplestory.fandom.com/wiki/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Normal/Hard Mori Ranmaru</a></strong>
                <ul>
                    <li>Hard requires much more range than Normal (close to 10k Main Stat) however grants a lot of EXP when defeated</li>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Hard Only)</em> Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Eclectic Fennel"/> [Lv. 120 Gear]
                        , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 120 Rebirth Flame]</a>
                        , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Reboot Only) Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Reboot Only) Eternal Rebirth Flame]</a>
                    </li>
                    <li>
                        <strong>Hard Mode only Rewards:</strong> , <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>
                        , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 130 Rebirth Flame]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon PinkBean"/> <a href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Normal Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>
                        , <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>
                        , <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>
                        , <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame]
                    </li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo id="bosses">[ &gt; 5k Main Stat] Earlygame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Signus"/> <a href="https://maplestory.fandom.com/wiki/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                        , <img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> [Empress Gear Fragment]
                    </li>
                    <li><img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> exchange for <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/><img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <a href="https://maplestory.fandom.com/wiki/Hilla/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Hilla</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Hard Mode Only Rewards:</strong>
                        <img src="/images/equipment/will-o-the-wisps.png"/> <a href="https://maplestory.fandom.com/wiki/Will_o%27_the_Wisps" target="_blank" rel="noreferrer noopener">[Will O' the Wisps]</a>
                        , <img src="/images/items/hilla-obelisk-floor-lamp.png"/> <a href="https://maplestory.fandom.com/wiki/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Hilla Obelisk Floor Lamp]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <a href="https://maplestory.fandom.com/wiki/Arkarium/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal Arkarium</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Normal Only)</em> Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Easy mode and Above Rewards:</strong> <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant"/> <a href="https://maplestory.fandom.com/wiki/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>
                        , <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> [Lv. 130 Rebirth Flame]
                        , <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>
                    </li>
                    <li>
                        <strong>Normal mode only Rewards:</strong> <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a href="https://maplestory.fandom.com/wiki/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>
                        , <img src="/images/items/arkarium-statue.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Arkarium Statue]</a>
                    </li>
                    <li>Ability to clear Arkarium early game will depend on your class, for example, does your class have a bind or iFrame?</li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>[ &gt; 8k Main Stat] Earlygame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Signus"/> <a href="https://maplestory.fandom.com/wiki/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode only Rewards:</strong> <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>
                        , <img src="/images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield"/><img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield"/><img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield"/> [Shield Recipes]
                        , <img src="/images/items/plush-cygnus-shelf.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Plush Cygnus Shelf]</a>
                    </li>
                    <li><img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> exchange for <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/><img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/zakum.png" alt="ElNathDungeon icon"/> <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener"><strong>Chaos Zakum</strong></a>
                <ul>
                    <li><strong>Source of Mesos in Reboot from</strong>: <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/> <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> that can be sold for Mesos</li>
                    <li>
                        Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/>  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-zakum-helmet.png" alt="Eqp Chaos Zakum Helmet"/>
                        <a href="https://maplestory.fandom.com/wiki/Chaos_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Chaos Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-helmet.png" alt="Eqp Enraged Zakum Helmet"/>
                        <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Helmet" target="_blank" rel="noreferrer noopener">[Enraged Zakum Helmet]</a>, <img src="/images/equipment/enraged-zakum-cape.png" alt="Eqp Enraged Zakum Cape"/>
                        <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Cape" target="_blank" rel="noreferrer noopener">[Enraged Zakum Cape]</a>, <img src="/images/equipment/enraged-zakum-belt.png" alt="Eqp Enraged Zakum Belt"/>
                        <a href="https://maplestory.fandom.com/wiki/Enraged_Zakum_Belt" target="_blank" rel="noreferrer noopener">[Enraged Zakum Belt]</a>, <img src="/images/items/zakum-hand-table.png"/>
                        <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Zakum Hand Table]</a>
                    </li>
                </ul>
                </li>
                <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Normal Papulatus</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/papulatus-clock-chair.png"/>
                            <a href="https://maplestory.fandom.com/wiki/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Papulatus Clock Chair]</a>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Magnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestory.fandom.com/wiki/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Nova Cape]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>[ &gt; 12k Main Stat] Midgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon PinkBean"/> <a href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Chaos Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/chaos-pink-bean-hat.png"/><img src="/images/equipment/chaos-pink-bean-suit.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Chaos_Pink_Bean_Set_I" target="_blank" rel="noreferrer noopener">[Chaos Pink Bean Set]</a>
                        , <img src="/images/equipment/black-bean-hat.png"/><img src="/images/equipment/black-bean-suit.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Black_Bean_Set" target="_blank" rel="noreferrer noopener">[Black Bean Set]</a>
                        , <img src="/images/items/powerful-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                        , <img src="/images/items/pink-bean-armchair.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Pink Bean Armchair]</a>
                        </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon JP Nohime"/> <strong><a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Main Rewards:</strong> <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noopener noreferrer">[Secondary Weapon Fragment]</a>
                        , <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noopener noreferrer">Belt</a> ]
                        , <img src="/images/items/princess-no-chair.png" alt="Setup Princess No Chair"/> <a href="https://maplestory.fandom.com/wiki/Princess_No_Chair" target="_blank" rel="noopener noreferrer">[Princess No Chair]</a>
                        , <img src="/images/items/princess-no-effect-coupon.png" alt="Use Princess No Effect Coupon"/> <a href="https://maplestory.fandom.com/wiki/Princess_No_Effect_Coupon" target="_blank" rel="noopener noreferrer">[Princess No Effect Coupon]</a>
                        , <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame]
                    </li>
                    <li><img src=" /images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> can be used to redeem the best <img src=" /images/equipment/princess-nos-accursed-shield.png" alt="Eqp Princess No's Accursed Shield"/> <img src="/images/equipment/princess-nos-fox-marble.png" alt="Eqp Princess No's Fox Marble"/> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Secondary Weapons]</a> in the game</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Hard Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>
                    </li>
                    <li><strong>Main Rewards:</strong> <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Coins], <img src=" /images/equipment/reinforced-gollux-earrings.png" alt="Eqp Reinforced Gollux Earrings"/> <img src=" /images/equipment/reinforced-engraved-gollux-belt.png" alt="Eqp Reinforced Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">[Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                    </li>
                    <li>Gollux Coins <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>[ &gt; 14k Main Stat] Midgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <p>Recommended to have at least &gt;%90 IED and &gt;200% Boss Damage for bosses beyond this point</p>
            <ul>
                <li> <img src="/images/map-icons/root-abyss.png" alt="MapIcon rootabyss"/> <strong><a href="https://maplestory.fandom.com/wiki/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Chaos Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Chaos Mode only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/> <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/> <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/> <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Chaos Hat], <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> [CRA Gear Fragment], <img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/>[Chaos Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/> <img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/> <img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/> <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair]
                    , <img src="/images/items/pierre-umbrella-stand.png"/><img src="/images/items/von-bon-windup-clock.png"/><img src="/images/items/crimson-queen-vanity-table.png"/><img src="/images/items/vellum-lava-bathtub.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Furniture]</a>
                    </li>
                    <li>These fragments <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> exchange for <img src=" /images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Mana Cradle"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 Root Abyss Gear]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Magnus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/power-elixir.png"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
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
                </ul>
                </li>
                <li><img src="/images/map-icons/fort-asura.png" alt="Ritual Altar Icon"/> <a href="https://maplestory.fandom.com/wiki/Akechi_Mitsuhide/Monster" target="_blank" rel="noopener noreferrer"><strong>Akechi Mitsuhide</strong></a>:
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                        <li><img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> Coin is usage to exchange for Japanese Wolf Weapons from <a href="https://maplestory.fandom.com/wiki/Kobayakawa_Takakage" target="_blank" rel="noopener noreferrer">Kobayakawa Takakage</a></li>
                    </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>[ &gt; 20k Main Stat] Midgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Chaos Papulatus</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li>
                        <strong>Hard Mode only Rewards:</strong> <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestory.fandom.com/wiki/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
                        , <img src="/images/items/papulatus-wall-clock.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noreferrer noopener">[Papulatus Wall Clock]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestory.fandom.com/wiki/Lotus" target="_blank" rel="noreferrer noopener">Normal Lotus</a></strong>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                </ul>
                </li>
                <li> <img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> <a href="https://maplestory.fandom.com/wiki/Damien" target="_blank" rel="noreferrer noopener"><strong>Normal Damien</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a> and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                </ul>
                </li>
                <li> <img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Hell Gollux (Hellux)</a></strong>
                <ul>
                <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> [Occult Cube], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, and <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a></li>
                    <li><strong>Main Rewards:</strong> <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Coins]
                    , <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/> <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Superior/Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                    , <img src="/images/items/gollux-wood-bench.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gollux Wood Bench]</a>
                    </li>
                    <li>Gollux Coins <img src=" /images/items/gollux-coin.png" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>[ &gt; 28k Main Stat] Midgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> <a href="https://maplestory.fandom.com/wiki/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                        <li>
                            <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard]
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> <strong><a href="https://maplestory.fandom.com/wiki/Will" target="_blank" rel="noreferrer noopener">Easy Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Easy Mode and Above Rewards: </strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> <strong><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Normal Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards: </strong>
                            <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>Tier I Endgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <p>Bosses beyond this point are not meant to be soloable and are more party-oriented bosses. As well, beyond this point, bosses will be separated by tiers as there is no good recommended stat indicators for the reasons mentioned earlier.</p>
            <ul>
                <li> <img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> <a href="https://maplestory.fandom.com/wiki/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/butterfly-droplet-stone.png"/> <a href="https://maplestory.fandom.com/wiki/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>
                            , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestory.fandom.com/wiki/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> <strong><a href="https://maplestory.fandom.com/wiki/Will" target="_blank" rel="noreferrer noopener">Normal Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/stone-cobweb-droplet.png"/> <a href="https://maplestory.fandom.com/wiki/Stone_Cobweb_Droplet" target="_blank" rel="noreferrer noopener">[Stone Cobweb Droplet]</a>
                            , <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestory.fandom.com/wiki/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon moonBridge"/> <strong><a href="https://maplestory.fandom.com/wiki/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Normal Gloom</a></strong>
                    <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li>
                        <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Estella_Earrings" target="_blank">[Estella Earrings]</a>
                        , <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Spark_of_Determination" target="_blank">[Spark of Determination]</a>
                        , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                        , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                        , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                        , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                        , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                        , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                    </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong><a href="https://maplestory.fandom.com/wiki/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Normal Darknell</a></strong>
                    <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                    </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>Tier II Endgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
            <li> <img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestory.fandom.com/wiki/Lotus" target="_blank" rel="noreferrer noopener">Hard Lotus</a></strong>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                </ul>
                </li>
                <li> <img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> <a href="https://maplestory.fandom.com/wiki/Damien" target="_blank" rel="noreferrer noopener"><strong>Hard Damien</strong></a>
                <ul>
                    <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                </ul>
                </li>
                <li> <img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> <a href="https://maplestory.fandom.com/wiki/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Hard Lucid</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/lucidroid.png"/> <a href="https://maplestory.fandom.com/wiki/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>
                            , <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/><a href="https://maplestory.wiki/GMS/210.1.1/item/1132308" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/lucids-canopy-bed.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Lucid's Canopy Bed]</a>
                            , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestory.fandom.com/wiki/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Non-Reboot Only) Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li> <img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> <strong><a href="https://maplestory.fandom.com/wiki/Will" target="_blank" rel="noreferrer noopener">Hard Will</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                    </ul>
                </li>
                <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon TheLabyrinthOfSuffering"/> <strong><a href="https://maplestory.fandom.com/wiki/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Normal Verus Hilla</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Daybreak Pendant]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>Tier III Endgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon moonBridge"/> <strong><a href="https://maplestory.fandom.com/wiki/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Chaos Gloom</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a> and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                    </ul>
                </li>
                <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon TheLabyrinthOfSuffering"/> <strong><a href="https://maplestory.fandom.com/wiki/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Hard Verus Hilla</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                    </ul>
                </li>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong><a href="https://maplestory.fandom.com/wiki/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Hard Darknell</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noopener noreferrer">[Soul Shard]</a>, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
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
                    </ul>
                </li>
                <li>
                    <img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> <strong><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Chaos Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Main Rewards:</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a></li>
                    </ul>
                </li>
            </ul>
            <ArticleHeaderTwo>Tier IV Endgame Bosses:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <a href="https://maplestory.fandom.com/wiki/Black_Mage/Monster" target="_blank" rel="noreferrer noopener"><strong>Black Mage</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/sealed-genesis-weapon-box.png" alt="Use Sealed Genesis Weapon Box"/> <a href="https://maplestory.fandom.com/wiki/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>
                            , <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182285" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>
                            , <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>
                            , <img src="/images/items/black-mages-mirror.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener noreferrer">[Black Mage's Mirror]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <a href="https://maplestory.fandom.com/wiki/Seren/Monster" target="_blank" rel="noreferrer noopener"><strong>Seren</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/mitras-rage-selection-box.png" alt="Use Mitra's Rage Selection Box"/> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Rage_Selection_Box" target="_blank" rel="noopener">[Mitra's Rage Selection Box]</a>
                            , <img src="/images/items/mitras-nodestone.png"/> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>
                            , <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestory.fandom.com/wiki/Daybreak_Pendant" target="_blank" rel="noopener">[Daybreak Pendant]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
                        </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/karote.png" alt="MapIcon Cernium"/> <a href="https://maplestory.fandom.com/wiki/Kalos/Monster" target="_blank" rel="noreferrer noopener"><strong>Kalos</strong></a>
                    <ul>
                        <li>Source of <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="/images/items/bonus-occult-cube.png"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/crusader-coin.png" alt="Etc Crusader Coins"/> <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a>, and <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li>
                            <strong>Main Rewards:</strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestory.fandom.com/wiki/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a>
                            , <img src="/images/items/kalos-ceiling-fan.png"/> <a href="https://maplestory.fandom.com/wiki/Home#Trophy" target="_blank" rel="noopener">[Kalos Ceiling Fan]</a>
                            , <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>
                            , <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                            , <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>
                            , <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>
                            , <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
                            , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>
                            , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                            , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                            , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                            , <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Accessory Coupon]</a>
                            , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestory.fandom.com/wiki/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Premium Scroll - Pet Equipment Coupon]</a>
                            , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestory.fandom.com/wiki/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Magical Scroll - Weapon Coupon]</a>
                            , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestory.fandom.com/wiki/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Incredible Chaos Scroll of Goodness 60%]</a>
                            , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Flame]</a>
                            , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestory.fandom.com/wiki/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Forever Unrelenting Black Flame]</a>
                        </li>
                        <li>
                            <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestory.fandom.com/wiki/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a> is used to redeem <img src="/images/equipment/eternal-knight-helm.png" alt="Eqp Eternal Knight Helm"/> <img src="/images/equipment/eternal-knight-armor.png" alt="Eqp Eternal Knight Armor"/> <img src="/images/equipment/eternal-knight-pants.png" alt="Eqp Eternal Knight Pants"/> [Eternal Gear]
                        </li>
                    </ul>
                </li>
            </ul>
            <hr/>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <BannerAdThree/>
            <ArticleHeaderTwo id="dailyweekly">Daily / Weekly Quests:</ArticleHeaderTwo>
            <hr/>
            <p>A majority of Daily and Weekly Quests are mostly done at Lv. 200+. Characters pre-200 do not need to worry about these quests as much</p>
            <ul>
                <li><img src="/images/map-icons/lil-wonky.png" alt="Lil Wonky Pet"/> <strong>[Lv. Any] [Daily] Fairy Bros Daily Gift</strong>: Defeat 300 enemies around you level each day to obtain a free check-in gift <br/>
                    <ul>
                    <li>There are a total of 28 check-ins and your check-ins reset every month</li>
                    <li>Once you've reached 300 enemies, a pop up will appear shortly, if not, you can try opening up the Fairy Bros UI</li>
                    <li>To open the Fairy Bros UI, click on the green icon with a check mark on the bottom right and then click on "Daily Gift"
                        <ul>
                        <li>If you don't see the icons, try pressing "]" by default</li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/monster-park.png" alt="MapIcon MonsterPark"/> <strong>[Lv. 105+] <a href="https://maplestory.fandom.com/wiki/Category:Monster_Park" target="_blank" rel="noreferrer noopener">[Daily] Monster Park</a></strong>: Completing Monster Park will reward you with a considerable amount of EXP and <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a> to use in a special shop
                    <ul>
                    <li>Great for early levels as you gain a lot of EXP</li>
                    <li>Special shop sells special potions <img src="/images/items/extreme-red-potion.png" alt="Use Extreme Red Potion"/> <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <img src="/images/items/extreme-blue-potion.png" alt="Use Extreme Blue Potion"/> <img src="/images/items/extreme-gold-potion.png" alt="Use Extreme Gold Potion"/> that are transferable within your account (given same World) that grant useful buffs for training</li>
                    <li>Completing Monster Park 77 times for each day of the week will reward you a <img src="/images/equipment/seven-day-monster-parker.png" alt="Eqp Seven Day Monster Parker"/> <a href="https://maplestory.fandom.com/wiki/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Best-in-Slot for Bossing Medal]</a> that gives +10% Ignore Enemy Defence</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/maple-tour.png" alt="MapIcon MTour"/> <strong>[Lv. 105+] [Daily] </strong><strong>Maple Tour: </strong>Completing Maple Tour will reward you with Mesos and <img src="/images/items/maple-tour-coin.png" alt="Etc Maple Tour Coin"/> [Maple Tour Coins] to buy special items at Maple Tour</li>
                <li><img src="/images/map-icons/yu-garden.png" alt="MapIcon ShangHaiCN"/> <strong>[Lv. 140+] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong>[Reboot] [Daily] The Far East (Yu Garden)</strong></a>: Completing The Far East storyline will unlock Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls] in Reboot Servers only</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Road of Vanishing"/> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">[Daily] Arcane River - Vanishing Journey</a></strong>: Completing the Vanishing Journey storyline will unlock Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Road of Vanishing"/> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">[Weekly] Arcane River - Vanishing Journey</a>: </strong>Completing the Vanishing Journey Daily twice each will reward you with Nodestones
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/items/nodestone.png" alt="Use Nodestone"/> <a href="https://maplestory.wiki/GMS/215/item/2435719" target="_blank" rel="noreferrer noopener">[Nodestones]</a></li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Road of Vanishing"/> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Erda_Spectrum" target="_blank" rel="noreferrer noopener">[Daily PQ] Erda Spectrum</a></strong>: Unlocked once you complete the Vanishing Journey storyline. Can be done in parties of 1 to 3. There are 2 stages and the objective to help Nina conduct research in several different areas
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon ChewChew"/> <strong>[Lv. 210+]</strong> <a href="https://maplestory.fandom.com/wiki/Category:Chu_Chu_Island" target="_blank" rel="noreferrer noopener"><strong>[Daily] Arcane River - Chu Chu Island</strong></a>: Completing storyline will unlock access to a Party Quest and Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon ChewChew"/> <strong> [Lv. 210+] <a href="https://maplestory.fandom.com/wiki/Category:Hungry_Muto" target="_blank" rel="noreferrer noopener">[Daily PQ] Hungry Muto</a></strong>: Unlocked once you complete the Chu Chu Island storyline. Can be done in parties of 1 to 4. The main objective is to collect ingredients from monsters to create dishes to feed Muto
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> <strong>[Lv. 220+] </strong><a href="https://maplestory.fandom.com/wiki/Category%3ALachelein" target="_blank" rel="noreferrer noopener"><strong>[Daily] Arcane River - Lachelein</strong></a>: Completing the storyline will unlock access to Dream Defender, Daily Quests
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lacheln"/> <strong>[Lv. 220+] <a href="https://maplestory.fandom.com/wiki/Category:Dream_Defender" target="_blank" rel="noreferrer noopener">[Daily] Dream Defender</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to protect Music Boxes from becoming corrupted. If they become corrupted, you must free them by attacking it
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/items/dream-coin.png" alt="Etc Dream Coin"/> <a href="https://maplestory.fandom.com/wiki/Dream_Coin" target="_blank" rel="noreferrer noopener">[Dream Coins]</a>
                        <ul>
                        <li><img src="/images/items/dream-coin.png" alt="Etc Dream Coin"/> can be exchanged for <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbols]</li>
                        <li>Once you have completed all your runs of Dream Defender you can talk to the five ranking NPCs in Lachelein for extra <img src="/images/items/dream-coin.png" alt="Etc Dream Coin"/>[Dream Coins]</li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong> [Lv. 225+] <a href="https://maplestory.fandom.com/wiki/Category:Arcana" target="_blank" rel="noreferrer noopener">[Daily] Arcane River - Arcana</a></strong>: Completing the storyline will unlock access to Spirit Savior and Daily Quests
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong> [Lv. 225+] <a href="https://maplestory.fandom.com/wiki/Category:Spirit_Savior" target="_blank" rel="noreferrer noopener">[Daily] Spirit Savior</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to save Rock Spirits that have been kidnapped while avoiding an evil spirit that chases you
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/items/spirit-coin.png" alt="Etc Spirit Coin"/> <a href="https://maplestory.fandom.com/wiki/Spirit_Coin" target="_blank" rel="noreferrer noopener">[Spirit Coins]</a></li>
                    <li><img src="/images/items/spirit-coin.png" alt="Etc Spirit Coin"/> can be exchanged for <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230+] </strong><a href="https://maplestory.fandom.com/wiki/Category%3AMorass" target="_blank" rel="noreferrer noopener"><strong>[Daily] Morass</strong></a>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230+] </strong><a href="https://maplestory.fandom.com/wiki/Ranheim_Defense_(Party_Quest)" target="_blank" rel="noreferrer noopener"><strong>[Daily] Ranheim Defense</strong></a>: This activity cannot be done in a party and must be done alone. The objective is to defend a pillar on the middle of the map by defeating enemies that appear
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> <strong>[Lv. 235+] <a href="https://maplestory.fandom.com/wiki/Category:Esfera" target="_blank" rel="noreferrer noopener">[Daily] Esfera</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/esfera.png" alt="MapIcon esfera"/> <strong>[Lv. 235+] <a href="https://maplestory.fandom.com/wiki/Esfera_Guardian_(Party_Quest)" target="_blank" rel="noreferrer noopener">[Daily] Esfera Guardian</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to destroy dimensional gates using a special turret to aim and shoot
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong>[Lv. 245+] <a href="https://maplestory.fandom.com/wiki/Quests/224/(Daily_Quest)_Tenebris_Research" target="_blank" rel="noreferrer noopener">[Daily] Tenebris</a></strong>: Completing the storyline in Moonbridge unlocks Daily Quests for this region
                    <ul>
                    <li>More daily quests are available once Labyrinth of Suffering and Limina storylines have been completed</li>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <strong>[Lv. 260+] <a href="https://maplestory.fandom.com/wiki/Category:Cernium" target="_blank" rel="noreferrer noopener">[Daily] Cernium</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/sacred-symbol-cernium.png" alt="Eqp Sacred Symbol Cernium"/> [Sacred Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <strong>[Lv. 265+] <a href="https://maplestory.fandom.com/wiki/Category:Burning_Cernium" target="_blank" rel="noreferrer noopener">[Daily] Burning Cernium</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/sacred-symbol-cernium.png" alt="Eqp Sacred Symbol Cernium"/> [Sacred Symbols]</li>
                    </ul>
                </li>
                <li><img src="/images/map-icons/hotel-arcus.png"/> <strong>[Lv. 270+] <a href="https://maplestory.fandom.com/wiki/Category:Hotel_Arcus" target="_blank" rel="noreferrer noopener">[Daily] Hotel Arcus</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong><img src="/images/equipment/sacred-symbol-arcus.png"/> [Sacred Symbols]</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h3>Optional:</h3>
            <ul>
                <li><img src="/images/map-icons/commerci.png" alt="MapIcon Commerci"/> <strong>[Lv. 140+] <a href="https://strategywiki.org/wiki/MapleStory/Commerci_Trade_Voyages" target="_blank" rel="noreferrer noopener">[Daily] Commerci Voyages</a></strong>: Unlocked once you reach the town of San Commerci. Complete trade voyages where waves of enemies spawn to earn <img src="/images/items/commerci-denaro.png" alt="Etc Commerci Denaro"/> <a href="https://maplestory.fandom.com/wiki/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a>
                <ul>
                    <li>Denaros are used to buy <strong/> <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a> and <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a> from <a href="https://maplestory.fandom.com/wiki/Javert" target="_blank" rel="noreferrer noopener">Javert</a>
                    </li>
                    <li>Accessories are BIS but only if you can Star Force above 15 stars, so daily is optional until you can obtain 15+ stars</li>
                    <li>On Regular Servers, you can also do trade voyages to buy and sell the Sweetwater accessories for Mesos</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/kritias.png" alt="MapIcon critias"/> <strong>[Lv. 170+]</strong>  <strong>[Weekly] Kritias</strong>: Unlocked after completing the Kritias storyline
                <br/>
                <ul>
                    <li>Weekly Quests reward you with <img src="/images/items/anti-magic-stone.png" alt="Etc Anti-magic Stone"/> <a href="https://maplestory.fandom.com/wiki/Anti-magic_Stone" target="_blank" rel="noreferrer noopener">[Anti-magic Stone]</a> and <img src="/images/items/anti-magic-stone-piece.png" alt="Use Anti-magic Stone Piece"/> <a href="https://maplestory.fandom.com/wiki/Anti-magic_Stone_Piece" target="_blank" rel="noreferrer noopener">[Anti-magic Stone Piece]</a> which are used to create <img src="/images/items/kritias-commemorative-coin.png" alt="Etc Kritias Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/Keilbarren" target="_blank" rel="noreferrer noopener">[Kritias Commemorative Coins]</a> to buy <img src="/images/equipment/tyrant-hyades-gloves.png" alt="Eqp Tyrant Hyades Gloves"/> [Tyrant Gloves] and <img src="/images/items/hard-magnus-reset-ticket.png" alt="Use Hard Magnus Reset Ticket"/> <img src="/images/items/chaos-vellum-reset-ticket.png" alt="Use Chaos Vellum Reset Ticket"/> [Weekly Boss Reset Tickets]
                    <ul>
                        <li>Due to the amount of time required to obtain some of these items, it is not worth the time and can be skipped</li>
                        <li>For more info on Kritias, check out: <a href="https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><img src="/images/map-icons/haven.png" alt="MapIcon Scrapyard"/> <strong>[Lv. 190+] <a href="https://maplestory.fandom.com/wiki/Category:Scrapyard" target="_blank" rel="noreferrer noopener">[Weekly] Scrapyard</a></strong>: Unlocked once you reach Lv. 190
                <ul>
                    <li>Weekly Quests reward you with <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/> [Diffusion-Line Energy Core (Grade A)] which are used to create <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/> [AbsoLab Coins] to buy for <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> [<em>(Shoe/Glove/Cape/Weapon)</em> AbsoLab Gear]
                    <ul>
                        <li>Can be skipped if you are not trying to get Absolab Gear</li>
                        <li>Monsters in this area also drop <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/> 
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon Dark World Tree"/> <strong>[Lv. 190+] <a href="https://maplestory.fandom.com/wiki/Category:Dark_World_Tree" target="_blank" rel="noreferrer noopener">[Weekly] Dark World Tree</a></strong>: Unlocked once you reach Lv. 190
                <ul>
                    <li>Weekly Quests reward you with <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/> [Faint Stigma Spirit Stone] which are used to create <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> [Stigma Coins] to buy for <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Knight Suit"/> <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/> [<em>(Hat/Overall/Shoulder/Weapon)</em> AbsoLab Gear]
                    <ul>
                        <li>Can be skipped if you are not trying to get Absolab Gear</li>
                        <li>Monsters in this area also drop <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonwood"/> <strong>[Lv. 180+] </strong><a href="https://maplestory.fandom.com/wiki/Category:Crimsonwood" target="_blank" rel="noreferrer noopener"><strong>[Daily] Crimsonwood - Phantom Forest</strong></a>: Completing the storyline for this area unlocks access to Daily Quests that reward <img src="/images/items/raven-ninja-coin.png" alt="Etc Raven Ninja Coin"/> <a href="https://maplestory.fandom.com/wiki/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> to buy items from Mo and Fiona in the Phantom Forest
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/numenals-willpower.png" alt="Eqp Numenal's Willpower"/> <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <img src="/images/equipment/legacy-of-light.png" alt="Eqp Legacy of Light"/> <img src="/images/equipment/legacy-of-darkness.png" alt="Eqp Legacy of Darkness"/> <img src="/images/equipment/delgrunds-honor.png" alt="Eqp Delgrund's Honor"/> <img src="/images/equipment/lirenis-wish.png" alt="Eqp Lireni's Wish"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="/images/equipment/white-identity.png" alt="Eqp White Identity"/> <img src="/images/equipment/crystal-leaf-earrings.png" alt="Eqp Crystal Leaf Earrings"/> <img src="/images/equipment/ravens-beak.png" alt="Eqp Raven's Beak"/> <a href="https://maplestory.fandom.com/wiki/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="/images/items/balanced-fury.png" alt="Use Balanced Fury"/> <a href="https://maplestory.fandom.com/wiki/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="/images/items/crystal-ilbi.png" alt="Use Crystal Ilbi Throwing-Stars"/> <a href="https://maplestory.fandom.com/wiki/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a>
                    </li>
                    <li>Unless you are really trying to optimize your gear, the Phantom Forest is not necessary and can be skipped</li>
                </ul>
                </li>
                <li><strong>[Daily] <a href="https://maplestory.fandom.com/wiki/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: Completing the quests will grant extra <img src="/images/items/legion-coin.png" alt="Etc Legion Coin"/> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a>
                <ul>
                    <li>Can be skipped</li>
                </ul>
                </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="training">Training Maps:</ArticleHeaderTwo>
            <hr/>
            <img className="repository-image" src="/images/info/world-map-ui.png" alt="World Map"/>
            <p>Below is a list of recommended training maps for grinding. To find out how to navigate to a specific map, open your World Map (W by default) and search for the desired map on the right-hand side. Clicking on the item you want will direct you to the map which will start blinking</p>
            <p>Special thanks to Proof#8868 for the recommended training maps. Click <a href="https://docs.google.com/spreadsheets/d/1QqtsUcnB5WBMGplKvpJI3qZQYAR5HSKn7VdHsJvRTtg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> for a Google Sheets version of the training maps</p>
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
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="themedungeon">Theme Dungeons:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li> <img src="/images/map-icons/ellinel.png" alt="MapIcon fairyAcademy"/> <strong>[Lv. 30 - 59] </strong><a href="https://maplestory.fandom.com/wiki/Category:Ellinel" target="_blank" rel="noreferrer noopener"><strong>Ellinel Fairy Academy</strong></a>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/> <a href="https://maplestory.wiki/GMS/215/item/1102590" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/> [Glove], <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/> <a href="https://maplestory.wiki/GMS/215/item/1022254" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a> and <img src="/images/equipment/honorary-fairy-professor.png" alt="Eqp Honorary Fairy Professor"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/gold-beach.png" alt="MapIcon GoldBeach"/> <strong>[Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach Resort</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/> <a href="https://maplestory.wiki/GMS/215/item/1032254" target="_blank" rel="noreferrer noopener">[Earrings]</a> and <img src="/images/equipment/beach-bum.png" alt="Eqp Beach Bum"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/riena-strait.png" alt="MapIcon glacierExplorer"/> <strong>[Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="/images/items/meso.png" alt="Meso"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/> <a href="https://maplestory.wiki/GMS/215/item/1012389" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/> <a href="https://maplestory.wiki/GMS/215/item/1132292" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="/images/equipment/deckhand.png" alt="Eqp Deckhand"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/elodin.png" alt="MapIcon Elodin"/> <strong> [Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category:Elodin" target="_blank" rel="noreferrer noopener">Secret Forest of Elodin</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/elodin-bird-dog.png" alt="Eqp Elodin Bird Dog"/> [Medal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces]</li>
                </ul>
                </li>
                <li>
                <img src="/images/map-icons/mushroom-castle.png" alt="MS Mushroom Castle icon.png"/> <strong>[Lv. 60] <a href="https://strategywiki.org/wiki/MapleStory/Mushroom_Castle" target="_blank" rel="noreferrer noopener">Mushroom Kingdom</a>: </strong>Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>
                <ul>
                    <li>Has lots of cutscenes compared to the previous Theme Dungeons which is why most people skip this one</li>
                    <li><strong>Main Rewards:</strong>  <img src="/images/items/meso.png" alt="Meso"/> [3 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/violettas-knight.png" alt="Eqp Violetta's Knight"/> [Medal], <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a><a href="https://maplestory.wiki/GMS/215/item/1142629" target="_blank" rel="noreferrer noopener">, </a> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/afterlands.png" alt="MapIcon PL AfterLand"/> <strong>[Lv. 75] <a href="https://maplestory.fandom.com/wiki/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a>: </strong>Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/> and Dimensional Mirror
                <ul>
                    <li>An easy way to obtain permanent totems that you can equip for extra stats (maximum 3 totems)</li>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/> <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/> <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Afterlands Totems]</a>
                    </li>
                    <li>This is not a mandatory activity if you find this Theme Dungeon too tedious
                    <ul>
                        <li>The Afterlands is known to be slightly buggy or frustrating to complete but provide some easy Totems</li>
                    </ul>
                    </li>
                    <li>Here is a guide: <a href="https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/" target="_blank" rel="noreferrer noopener">https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/mushroom-shrine.png" alt="MapIcon jipangu"/> <strong>[Lv. 100] </strong><a href="https://maplestory.fandom.com/wiki/Category:Mushroom_Shrine" target="_blank" rel="noreferrer noopener"><strong>Mushroom Shrine Tales</strong></a>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/> and Dimensional Mirror
                <ul>
                    <li>Completing this storyline gives you <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> which give some pretty good stats but may be tedious to obtain since the story is quite long</li>
                    <li>This cape may be useful for gear progression in Reboot if you do want to obtain it</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon LionCastle"/> <strong>[Lv. 115] <a href="https://maplestory.fandom.com/wiki/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Pre-Quest] Lion King's Castle</a></strong>: Accessible from a quest in your Lightbulb tab and from traveling from <a href="https://maplestory.wiki/GMS/210.1.1/map/211040600" target="_blank" rel="noreferrer noopener">El Nath</a>, Completing this Theme Dungeon grants access to the boss <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/heart-of-a-lion.png" alt="Eqp Heart of a Lion"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Folkvillige"/> <strong>[Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Korean_Folk_Town" target="_blank" rel="noreferrer noopener">Korean Folk Town</a>: </strong>Accessible by accepting a quest in your Lightbulb icon or by traveling from <a href="https://maplestory.fandom.com/wiki/Helios_Tower_(100th_Floor)" target="_blank" rel="noreferrer noopener">Ludibrium</a> or <a href="https://maplestory.fandom.com/wiki/The_Sharp_Unknown" target="_blank" rel="noreferrer noopener">Aqua Road</a>
                <ul>
                    <li><strong>Rewards:</strong> <img src="/images/equipment/like-clouds-and-winds.png" alt="Eqp Like Clouds and Winds"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/golden-temple.png" alt="MapIcon Golden Temple"/> <strong> [Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Golden_Temple" target="_blank" rel="noreferrer noopener">Golden Temple</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/> and Dimensional Mirror
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/ravanas-golden-crown.png" alt="Eqp Ravana's Golden Crown"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003455" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="/images/equipment/seeker-of-gilded-truth.png" alt="Eqp Seeker of Gilded Truth"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonwood"/> <strong> [Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Tynerum" target="_blank" rel="noreferrer noopener">Crimsonheart Castle</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/> and Dimensional Mirror
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/crimsonheart-savior.png" alt="Eqp Crimsonheart Savior"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/partem-ruins.png" alt="MapIcon Partem"/> <strong>[Lv. 135] </strong><strong>Partem Ruins</strong>: Accessible initially from a quest in your Lightbulb icon and from Partem in <a href="https://maplestory.fandom.com/wiki/Spore_Hill" target="_blank" rel="noreferrer noopener">Henesys</a>
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/blazing-hot.png" alt="Eqp Blazing Hot"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/yu-garden.png" alt="MapIcon ShangHaiCN"/> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong>The Far East (Yu Garden)</strong></a>: Accessible from <a href="https://maplestory.wiki/GMS/210.1.1/map/104020000" target="_blank" rel="noreferrer noopener">Six Path Crossway</a>
                <ul>
                    <li>After completing the storyline here, there are daily quests that reward you <img src="/images/items/yu-garden-coin.png" alt="Etc Yu Garden Coin"/> [Yu Garden Coins] a special currency</li>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [<em>(Reboot Only)</em> Epic Potential Scroll], <img src="/images/equipment/horseback-riding-doll-totem.png" alt="Eqp Horseback Riding Doll Totem"/> <img src="/images/equipment/jade-kettle-totem.png" alt="Eqp Jade Kettle Totem"/> <img src="/images/equipment/bronze-incense-burner-totem.png" alt="Eqp Bronze Incense Burner Totem"/> [Totems],</li>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Recommended + Important]:</strong> Provides an easy source to Epic Potential Scrolls in Reboot Servers which is why it is important!</li>
                    <li>An in-depth guide to the Yu Garden dailies: <a href="https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/" target="_blank" rel="noreferrer noopener">https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/commerci.png" alt="MapIcon CommerzBT"/> <strong>[Lv. 140] <a href="https://maplestory.fandom.com/wiki/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener">Commerci</a></strong>: Accessible from <img src="/images/info/lightbulb.png" alt="Lightbulb Icon"/>  and Dimensional Mirror. Grants access to the Commerci Merchant Union PQ after a completing a series of quests here
                <ul>
                    <li>The PQ is where you obtain <img src="/images/equipment/sweetwater-sword.png" alt="Eqp Sweetwater Axe"/> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> and <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a>
                    </li>
                    <li>A guide to the Commerci Pre-Quests: <a href="https://www.youtube.com/watch?v=OKIlC9I2ExM" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=OKIlC9I2ExM</a>
                    </li>
                    <li>An in-depth guide to Commerci: <a href="https://www.youtube.com/watch?v=UtW6Lldv7K8" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=UtW6Lldv7K8</a>
                    </li>
                    <li><strong>Main Rewards for Completing Storyline: </strong>[Medal], <img src="/images/equipment/commerci-hat.png" alt="Eqp Commerci Hat"/> <a href="https://maplestory.wiki/GMS/205/item/1003984" target="_blank" rel="noreferrer noopener">[Commerci Hat]</a>, <img src="/images/equipment/commerci-suit.png" alt="Eqp Commerci Suit"/> <a href="https://maplestory.wiki/GMS/205/item/1052673" target="_blank" rel="noreferrer noopener">[Commerci Suit]</a> <img src="/images/equipment/commerci-boots.png" alt="Eqp Commerci Boots"/> <a href="https://maplestory.wiki/GMS/205/item/1072874" target="_blank" rel="noreferrer noopener">[Commerci Boots]</a>, <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/> <a href="https://maplestory.wiki/GMS/205/item/1082559">[Commerci Gloves]</a>, <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/> <a href="https://maplestory.wiki/GMS/205/item/1102626">[Commerci Cape]</a>, <img src="/images/equipment/commerci-belt.png" alt="Eqp Commerci Belt"/> <a href="https://maplestory.wiki/GMS/205/item/1132248" target="_blank" rel="noreferrer noopener">[Commerci Belt]</a>, <img src="/images/equipment/commerci-shoulder.png" alt="Eqp Commerci Shoulder"/> <a href="https://maplestory.wiki/GMS/205/item/1152161" target="_blank" rel="noreferrer noopener">[Commerci Shoulder]</a>, <img src="/images/equipment/devils-sunrise.png" alt="Eqp Devil's Sunrise"/> [Commerci Weapon for your class]
                    <ul>
                        <li>Commerci gear is separate from Sweetwater gear</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/kerning-tower.png" alt="MapIcon KerningTower"/> <strong>[Lv. 145] <a href="https://maplestory.fandom.com/wiki/Category:Kerning_Tower" target="_blank" rel="noreferrer noopener">Kerning Tower</a></strong>: Accessible by completing a quest in your Lightbulb icon and from <a href="https://maplestory.wiki/GMS/210.1.1/map/103000000" target="_blank" rel="noreferrer noopener">Kerning City</a>
                <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/jackpot-entertainment-co-ceo.png" alt="Eqp Jackpot Entertainment Co-CEO"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/stone-colossus.png" alt="MapIcon Colossus"/> <strong>[Lv. 150]</strong>  <a href="https://maplestory.fandom.com/wiki/Category:Stone_Colossus" target="_blank" rel="noreferrer noopener"><strong>Stone Colossus</strong></a>: Accessible from <a href="https://maplestory.fandom.com/wiki/Forest_:_Crossroad" target="_blank" rel="noreferrer noopener">Leafre</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/colossal.png" alt="Eqp Colossal"/> [Medal], <img src="/images/items/kupos-ride-coupon.png" alt="Use Kupo's Ride Coupon"/> [Mount], <img src="/images/equipment/halflinger-expedition-badge.png" alt="Eqp Halflinger Expedition Badge"/> [Badge]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/omega-sector.png" alt="MapIcon OmegaSector"/> <strong> [Lv. 165] <a href="https://maplestory.fandom.com/wiki/Category:Omega_Sector" target="_blank" rel="noreferrer noopener">Omega Sector</a></strong>: Accessible initially by accepting a quest in the Lightbulb icon or from <a href="https://maplestory.wiki/GMS/210.1.1/map/220000400" target="_blank" rel="noreferrer noopener">Ludibrium Eos Tower</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/white-m-forcer.png" alt="Eqp White M-Forcer"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/savage-terminal.png" alt="MapIcon SavageTerminal"/> <strong>[Lv. 175] </strong><strong>Detective Rave's Case Notes: </strong>Accessible initially from accepting a quest in your Lightbulb icon or from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
                <ul>
                    <li><strong>Main Rewards</strong>: <img src="/images/equipment/detective-raves-honorary-assistant.png" alt="Eqp Detective Rave's Honorary Assistant"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/fox-valley.png" alt="MapIcon Fox Valley"/> <strong>[Lv. 185] </strong><a href="https://maplestory.fandom.com/wiki/Category:Fox_Valley" target="_blank" rel="noreferrer noopener"><strong>Fox Valley</strong></a>: Accessible by accepting a quest in the Lightbulb icon and from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/fox-point-ranger.png" alt="Eqp Fox Point Ranger"/> [Medal]</li>
                </ul>
                </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="quests">Quests:</ArticleHeaderTwo>
            <hr/>
            <ul>
                <li>Most of the pre-Lv. 100 quests here are outdated except the ones that reward medals and purely grinding is preferred</li>
                <li><strong>Class Main Storyline</strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 1 - 100</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/henesys.png" alt="MapIcon Henesys"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener">Henesys</a></strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 10 - 19</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/amethyst-earrings.png" alt="Eqp Amethyst Earrings"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032003" target="_blank" rel="noreferrer noopener">[Amethyst Earrings]</a>, <img src="/images/equipment/yellow-square.png" alt="Eqp Yellow Square"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032009">[Yellow Square Earrings]</a>,</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener">Perion</a></strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 10 - 19</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ellinia.png" alt="MapIcon Ellinia"/> <a href="https://maplestory.fandom.com/wiki/Quests/26" target="_blank" rel="noreferrer noopener"><strong>Ellinia</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>25-30</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/kerning-city.png" alt="MapIcon KerningCity"/> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Kerning City</strong></a>
                <ul>
                    <li><strong>Recommended Level</strong>: 43 - 50</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Perion</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>55 - 60</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Perion Excavation Site</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>60 - 70</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/sleepywood.png" alt="MapIcon Dungeon"/> <a href="https://maplestory.fandom.com/wiki/Quests/31" target="_blank" rel="noreferrer noopener"><strong>Sleepywood</strong></a>
                <ul>
                    <li><strong>Recommened Level: </strong>60 - 70</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/orbis.png" alt="MapIcon Orbis"/> <a href="https://maplestory.fandom.com/wiki/Quests/34" target="_blank" rel="noreferrer noopener"><strong>Orbis</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>70 - 75</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/helper-in-the-clouds.png" alt="Eqp Helper in the Clouds"/> [Medal],</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/aqua-road.png" alt="MapIcon AquaRoad"/> <a href="https://maplestory.fandom.com/wiki/Quests/35" target="_blank" rel="noreferrer noopener"><strong>Aqua Road</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>75 - 80</li>
                    <li><strong>Quest Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1102048" target="_blank" rel="noreferrer noopener">[Red Musketeer Cape]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/el-nath.png" alt="MapIcon ElNath"/> <a href="https://maplestory.fandom.com/wiki/Quests/33" target="_blank" rel="noreferrer noopener"><strong>El Nath</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>75 - 80</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/cape-of-warmness.png" alt="Eqp Cape of Warmness"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102109" target="_blank" rel="noreferrer noopener">[Cape of Warmness]</a>, <img src="/images/equipment/blue-justice-cape.png" alt="Eqp Blue Justice Cape"/> <img src="/images/equipment/red-justice-cape.png" alt="Eqp Red Justice Cape"/> <img src="/images/equipment/white-justice-cape.png" alt="Eqp White Justice Cape"/> <img src="/images/equipment/black-justice-cape.png" alt="Eqp Black Justice Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102011" target="_blank" rel="noreferrer noopener">[Justice Cape]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/magatia.png" alt="MapIcon Magatia"/> <a href="https://maplestory.fandom.com/wiki/Quests/43" target="_blank" rel="noreferrer noopener"><strong>Magatia</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 100</li>
                    <li><strong>Quest Rewards:</strong> <img src="/images/equipment/magatias-alchemist.png" alt="Eqp Magatia's Alchemist"/> [Medal], <img src="/images/equipment/zenumists-cape.png" alt="Eqp Zenumist's Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102139" target="_blank" rel="noreferrer noopener">[Zenumist's Cape]</a> OR <img src="/images/equipment/alcadnos-cape.png" alt="Eqp Alcadno's Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102140" target="_blank" rel="noreferrer noopener">[Alcadno's Cape]</a>, <img src="/images/equipment/strong-machine-gloves.png" alt="Eqp Strong Machine Gloves"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082283" target="_blank" rel="noreferrer noopener">[Strong Machine Gloves]</a></li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/heliseum.png" alt="MapIcon retakeHQ"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/21" target="_blank" rel="noreferrer noopener">Heliseum</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 110</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ellin-forest.png" alt="MapIcon EilnForest"/> <a href="https://maplestory.fandom.com/wiki/Quests/39" target="_blank" rel="noreferrer noopener"><strong>Ellin Forest</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>95 - 100</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/ellin-forest-guardian.png" alt="Eqp Ellin Forest Guardian"/> [Medal], <img src="/images/equipment/ephenias-ring.png" alt="Eqp Ephenia's Ring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1112683" target="_blank" rel="noreferrer noopener">[Ephenia's Ring]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <a href="https://maplestory.fandom.com/wiki/Quests/41" target="_blank" rel="noreferrer noopener"><strong>Leafre</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>102 - 110</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/ludibrium.png" alt="MapIcon Ludibrium"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/36" target="_blank" rel="noreferrer noopener">Ludibrium</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>95 - 115</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/ludibrium-sheriff.png" alt="Eqp Ludibrium Sheriff"/> [Medal], <img src="/images/equipment/skull-earrings.png" alt="Eqp Skull Earrings"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032012" target="_blank" rel="noreferrer noopener">[Skull Earrings]</a>, <img src="/images/equipment/ludibrium-cape.png" alt="Eqp Ludibrium Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102057" target="_blank" rel="noreferrer noopener">[Ludibrium Cape]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/dead-mine.png" alt="MapIcon Dead Mines"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/33" target="_blank" rel="noreferrer noopener">El Nath - Dead Mines</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>115 - 120</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <a href="https://maplestory.fandom.com/wiki/Quests/41" target="_blank" rel="noreferrer noopener"><strong>Leafre - Dragon Forest</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>120 - 130</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/mu-lung.png" alt="MapIcon Murueng"/> <img src="/images/map-icons/herb-town.png" alt="MapIcon WhiteHerb"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/44">Mu Lung / Herb Town</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>135 - 140</li>
                    <li><strong>Quest Rewards: </strong> <img src="/images/equipment/sage-asceticism.png" alt="Eqp Sage Asceticism"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/temple-of-time.png" alt="MapIcon TimeTemple"/> <strong> <a href="https://maplestory.fandom.com/wiki/Quests/46" target="_blank" rel="noreferrer noopener">Temple of Time</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>140 - 155</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/henesys-ruins.png" alt="MapIcon destructionTown"/> <img src="/images/map-icons/stronghold.png" alt="MapIcon darkEreb"/> <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Henesys Ruins / Knight Stronghold</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>160 - 185</li>
                    <li><strong>Quest Rewards:</strong> <img src="/images/equipment/rise-from-ruins.png" alt="Eqp Rise from Ruins"/> [Medal]</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/kritias.png" alt="MapIcon critias"/> <strong><a href="https://maplestory.fandom.com/wiki/Quests/81" target="_blank" rel="noreferrer noopener">Kritias</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 185</li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/nlc.png" alt="MapIcon NLC"/> <strong> <a href="https://maplestory.fandom.com/wiki/Category:Masteria" target="_blank" rel="noreferrer noopener">New Leaf City</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 200</li>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/nlc-commemorative-coin.png" alt="Etc NLC Commemorative Coin"/> <a href="https://maplestory.fandom.com/wiki/NLC_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[NLC Commemorative Coin]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="/images/map-icons/twilight-perion.png" alt="MapIcon destructionPerion"/> <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Twilight Perion</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>180 - 190</li>
                    <li><strong>Quest Rewards:</strong> <img src="/images/equipment/twilight-warrior.png" alt="Eqp Twilight Warrior"/> [Medal]</li>
                </ul>
                </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="lightbulb">Lightbulb Quests:</ArticleHeaderTwo>
            <hr/>
            <p>The quests found in your "Maple Mailbox" or the Lightbulb icon on the left-hand side may be overwhelming with the number of quests available. Here will be a list of quests and which ones are more important compared to others. If you do not see a certain quest, it may be tied to your class' storyline. These can be skipped by most classes. But, Explorer classes, Hoyoung, and Adele gain special rewards though from their class' storyline so, it should not be skipped. Quests with the label <span style={{color: '#ff0000'}} data-preserve-html-node="true">[Required]</span> should also be completed</p>
            <h3>Recommended Quests:</h3>
            <ul>
                <li><strong>(Lv. 33) Have you learned about pets? </strong>- Tutorial quest explaining pets. Rewards you with a free 3-day pet
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/tots-badge.png" alt="Eqp Tot's Badge"/> <a href="https://maplestory.wiki/GMS/215/item/1182286" target="_blank" rel="noreferrer noopener">[Badge]</a>, <img src="/images/equipment/puffram.png" alt="Cash Puffram"/> <a href="https://maplestory.wiki/GMS/215/item/5000241" target="_blank" rel="noreferrer noopener">[Pet <em>(Cannot be revived)</em>]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 35) The Professional </strong>- A quest to start unlocking Professions, MapleStory's crafting system</li>
                <li><strong>(Lv. 50) The Eye Opener </strong>- Unlocks your Inner Ability</li>
                <li><strong>(Lv. 70) [Link Skill] Teaching Link Skill </strong>- Explains Link Skills and unlocks your Link Skill for some classes</li>
                <li><strong>(Lv. 90) [Silent Crusade] A Cry for Help</strong> - Completing this storyline unlocks access to <img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <a href="https://maplestory.fandom.com/wiki/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a> (but cannot be fought until Lv. 140). You can access the Silent Crusade UI from a HotKey found in your keyboard shortcuts at the bottom by pressing "\"
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/superior-hunter.png" alt="Setup Superior Hunter"/> [Titles], <img src="/images/equipment/silent-crusade-champion.png" alt="Eqp Silent Crusade Champion"/>[Medals], <img src="/images/equipment/veteran-crusader-belt.png" alt="Eqp Silent Crusader Belt"/> <img src="/images/equipment/veteran-crusader-shoulder.png" alt="Eqp Veteran Crusader Shoulder"/> <img src="/images/equipment/veteran-crusader-pendant.png" alt="Eqp Veteran Crusader Pendant"/> [Veteran Crusader Gear], <img src="/images/equipment/mystic-belt.png" alt="Eqp Mystic Belt"/> <img src="/images/equipment/mystic-earrings.png" alt="Eqp Mystic Earrings"/> <img src="/images/equipment/mystic-pendant.png" alt="Eqp Mystic Pendant"/> <img src="/images/equipment/mystic-face-accessory.png" alt="Eqp Mystic Face Accessory"/> <img src="/images/equipment/mystic-eye-accessory.png" alt="Eqp Mystic Eye Accessory"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 90) To Pantheon </strong>- Completing this storyline unlocks access to the boss <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestory.fandom.com/wiki/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> (cannot be fought until Lv. 155) and daily quests for <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> which can be used as currency for a <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">special shop</a>
                <ul>
                    <li>Normal and Hard Magnus cannot be fought until Lv. 155+</li>
                </ul>
                </li>
                <li><strong>(Lv. 100) [Ursus] Rumors of The Mighty </strong>- Quest to get started with Ursus, an important boss in Reboot for Mesos. Provides a quick explanation to the boss
                <ul>
                    <li><strong>Main Reward: </strong><strong/>[Mesos]</li>
                </ul>
                </li>
                <li><strong>(Lv. 100) [Mushroom Shrine Tales] Kino Konoko's Request </strong>- Completing this storyline rewards you <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> which give some pretty good stats but may be tedious to obtain since the story is quite long
                <ul>
                    <li>This cape may be useful for gear progression in Reboot if you do want to obtain it</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Maple Tour] Lulu Spinel's Request </strong>- Quest to get started with Maple Tour, an important activity in Reboot for Mesos. Provides a quick explanation to Maple Tour
                <ul>
                    <li><strong>Main Reward: </strong><strong/>[Mesos]</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Monster Park] Monster Park Grand Re-opening</strong> - Quest to get started with Monster Park, a special dungeon area that provides EXP when completed</li>
                <li><strong>(Lv. 110) [MONAD: The First Omen] An Old Woman's Letter </strong>- A long storyline with multiple acts
                <ul>
                    <li>Monad may be difficult, I recommend trying out Monad at a higher level or else you may get stuck or die a lot</li>
                    <li>Additionally provides a decent amount of EXP and a great title, <img src="/images/equipment/invincible-hero-of-the-snowfield.png" alt="Invincible Hero of the Snowfield"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/3700501" target="_blank" rel="noreferrer noopener">[Title]</a> for defeating Julieta without dying</li>
                    <li><strong>Act 1 Rewards</strong>: <img src="/images/items/kaptafel-hat-transformation-coupon.png" alt="Eqp Kaptafel Hat"/> <a href="https://maplestory.wiki/GMS/205/item/2439152" target="_blank" rel="noreferrer noopener">[Kaptafel Hat Transformation Coupon]</a>, <img src="/images/items/eyefuls-equipment-coupon.png" alt="Use Eyeful's Equipment Trading Coupon"/> [Equipment Box]</li>
                    <li><strong>Act 2 Rewards</strong>: <img src="/images/items/shrelephant-mount.png" alt="Skill Shrelephant Mount"/> [Mount], <img src="/images/equipment/alikas-knight.png" alt="Eqp Alika's Knight"/>[Medal], <img src="/images/items/eyefuls-equipment-coupon.png" alt="Use Eyeful's Equipment Trading Coupon"/> [Equipment Box]</li>
                    <li><strong>Act 3 Rewards: </strong> <img src="/images/items/abrup-celebration-chair.png" alt="Setup Abrup Celebration Chair"/> [Chair], <img src="/images/equipment/savior-of-abrup.png" alt="Eqp Savior of Abrup"/>[Medal], <img src="/images/items/eyefuls-equipment-coupon.png" alt="Use Eyeful's Equipment Trading Coupon"/> [Equipment Box]</li>
                </ul>
                </li>
                <li><strong>(Lv. 115) [Easy Magnus] Magnus Simulator </strong>- Short dialogue quest that unlocks access to Easy Magnus</li>
                <li><strong>(Lv. 115) [Papulatus] The Light of Chaos </strong>- Starts the pre-quests for the boss Papulatus</li>
                <li><strong>(Lv. 120) Call of Princess Sakuno: Stop Mori Ranmaru! </strong>- Short dialogue quest that unlocks access to the boss Mori Ranmori</li>
                <li><strong>(Lv. 120) [Black Heaven] For Maple World </strong>- A long storyline with multiple Acts. Completing Black Heaven will unlock access to the boss <img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> Lotus (but cannot be fought until Lv. 190)
                <ul>
                    <li>Completing this on one character will unlock access to Lotus for all your characters in the same world</li>
                    <li><strong>Act 2 Rewards:</strong> <img src="/images/equipment/ace-of-the-alliance.png" alt="Eqp Ace of the Alliance"/> [Medal], <img src="/images/items/hanging-with-neinheart-chair.png" alt="Setup Hanging with Neinheart Chair"/> <a href="https://maplestory.wiki/GMS/215/item/3015030" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 4 Rewards:</strong> <img src="/images/equipment/android-helmet.png" alt="Eqp Android Helmet"/> <a href="https://maplestory.wiki/GMS/215/item/1004392" target="_blank" rel="noreferrer noopener">[Hat]</a>
                    </li>
                    <li><strong>Act 6 Rewards:</strong> <img src="/images/equipment/maple-world-savior.png" alt="Eqp Maple World Savior"/> [Medal], <img src="/images/items/orchids-support-mount.png" alt="Skill Orchid's Support Mount"/> <img src="/images/items/athena-pierces-support-mount.png" alt="Skill Athena Pierce's Support Mount"/> [Choice of 1 mount (lasts 30 days)]</li>
                </ul>
                </li>
                <li><strong>(Lv. 135) [Heroes] Feelings of Misfortune </strong>- A long storyline with multiple acts where you get to play as the five Heroes of Maple (Mercedes, Phantom, etc.)
                <ul>
                    <li>Completing Act 4 will unlock access to <img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> Damien (but cannot be fought until Lv. 190)
                    <ul>
                        <li>You do not need to do the other 3 acts</li>
                        <li>Completing this on one character will unlock access to Damien for all your characters in the same world</li>
                    </ul>
                    </li>
                    <li>Completing all Acts twice will grant <img src="/images/items/heroes-cube-chair-evan.png" alt="Setup Heroes Cube Chair - Evan"/> <a href="https://maplestory.wiki/GMS/215/item/3017016" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 1 Rewards: </strong> <img src="/images/items/heroes-cube-chair-aran.png" alt="Setup Heroes Cube Chair - Aran"/> <a href="https://maplestory.wiki/GMS/215/item/3017011" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 1.5 Rewards:</strong> <img src="/images/items/heroes-cube-chair-shade.png" alt="Setup Heroes Cube Chair - Shade"/> <a href="https://maplestory.wiki/GMS/215/item/3017012" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 2 Rewards:</strong> <img src="/images/items/heroes-cube-chair-phantom.png" alt="Setup Heroes Cube Chair - Phantom"/> <a href="https://maplestory.wiki/GMS/215/item/3017013" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 3 Rewards:</strong> <img src="/images/items/heroes-cube-chair-mercedes.png" alt="Setup Heroes Cube Chair - Mercedes"/> <a href="https://maplestory.wiki/GMS/215/item/3017014" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 4 Rewards:</strong> <img src="/images/items/heroes-cube-chair-luminous.png" alt="Setup Heroes Cube Chair - Luminous"/> <a href="https://maplestory.wiki/GMS/215/item/3017015" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Hieizan Temple] Regards, Takeda Shingen </strong>- Pre-quests to unlocking access to the boss Princess No</li>
                <li><strong>(Lv. 140) [Temple of Time] Path to the Past </strong>- Pre-quests to unlocking access to Pink Bean</li>
                <li><strong>(Lv. 160) [Masteria Epic] Lost Hero's Call - </strong>A long storyline with multiple acts where you learn the history behind Masteria's past. The storyline may be quite long but you get the best <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/>medal in the game currently as a reward
                <ul>
                    <li><strong>Act 4 Rewards: </strong> <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">[Best-in-slot Medal]</a>, <img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122352" target="_blank" rel="noreferrer noopener">[Subani's Pendant]</a>,</li>
                    <li><strong>Depending on choice rewards:</strong> [ <img src="/images/items/crimsonwood-warrior.png" alt="Setup Crimsonwood Warrior"/> [Chair], <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> ] OR [ <img src="/images/items/dark-follower.png" alt="Setup Dark Follower"/> [Chair], <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662091" target="_blank" rel="noreferrer noopener"> [Dr. Jang-Roid]</a> ]
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Gollux] The Cracks of Corruption </strong>- Short dialogue quest that unlocks access to the boss Gollux</li>
                <li><strong>(Lv. 190) [Haven] A New Home </strong>- Pre-quests to unlock access to Weekly Quests in the Scrapyard</li>
                <li><strong>(Lv. 190) [Dark World Tree] Those Who Remain </strong>- Pre-quests to unlock access to Weekly Quests in the Dark World Tree</li>
                <li><strong>(Lv. 200) [The Asura Crisis] Back to Momijigaoka </strong>- Pre-quests to unlocking access to the boss Akechi Mitsuhide</li>
                <li>
                    <strong>(Lv. 235) [Kao's Memory] The First Memory </strong>- Begins a storyline involving <a href="https://maplestory.fandom.com/wiki/Kao" target="_blank" rel="noopener noreferrer">Kao</a> between Lv. 235 to 255
                    <ul>
                        <li><strong>Main Reward</strong>: <img src="/images/equipment/kao-hood.png" alt="Eqp Kao Hood"/> <a href="https://maplestory.fandom.com/wiki/Kao_Hood" target="_blank" rel="noopener noreferrer">[Kao Hood]</a></li>
                    </ul>
                </li>
            </ul>
            <h3>Theme Dungeon Starting Quests:</h3>
            <p>Quests labeled in orange are recommended, in green are optional, in white are skippable</p>
            <p>The Lv. 30 Theme Dungeons are recommended as completing 2 and a half theme dungeons is enough to reach Lv. 60 to complete your 3rd Job Advancement. Theme Dungeons between Lv. 60 - 120 are completely optional (except for Lion King's Castle) as grinding is much faster and less tedious at these levels. They can be done if you dislike grinding but you will not gain as many levels compared to Lv. 30 - 60</p>
            <ul>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Riena Strait] Get it Strait</strong> - Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/meso.png" alt="Meso"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/> <a href="https://maplestory.wiki/GMS/215/item/1012389" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/> <a href="https://maplestory.wiki/GMS/215/item/1132292" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="/images/equipment/deckhand.png" alt="Eqp Deckhand"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Theme Dungeon] Ellinel Fairy Academy</strong> - Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/> <a href="https://maplestory.wiki/GMS/215/item/1102590" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/>[Glove], <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/> <a href="https://maplestory.wiki/GMS/215/item/1022254" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a> and <img src="/images/equipment/honorary-fairy-professor.png" alt="Eqp Honorary Fairy Professor"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Gold Beach] A Golden Opportunity </strong>- Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/meso.png" alt="Meso"/> [1 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/> <a href="https://maplestory.wiki/GMS/215/item/1032254" target="_blank" rel="noreferrer noopener">[Earrings]</a> and <img src="/images/equipment/beach-bum.png" alt="Eqp Beach Bum"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Elodin] Anne's Plea for Help </strong>- Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/elodin-bird-dog.png" alt="Eqp Elodin Bird Dog"/> [Medal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces]</li>
                </ul>
                </li>
                <li><strong>(Lv. 60) [Mushroom Castle] Mushking's Summons</strong> - Theme Dungeon
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/meso.png" alt="Meso"/> [3 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/violettas-knight.png" alt="Eqp Violetta's Knight"/> [Medal], <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a><a href="https://maplestory.wiki/GMS/215/item/1142629" target="_blank" rel="noreferrer noopener">, </a> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a>
                    </li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 75) [The Afterlands] A Cry for Help </strong>- Theme Dungeon that provides free permanent totems useful for progression. The storyline, however, can be glitchy and tedious which is why it is left as optional
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/> <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/> <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Totems]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 95) [Ellin Forest] A Peculiar Book </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/ephenias-ring.png" alt="Eqp Ephenia's Ring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1112683" target="_blank" rel="noreferrer noopener">[Ephenia's Ring]</a>, <img src="/images/equipment/ellin-forest-guardian.png" alt="Eqp Ellin Forest Guardian"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 115) [Lion King's Castle] Desolate Castle </strong>- Theme Dungeon that also unlocks access to the boss Von Leon after completing it
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Recommended] </strong>- Royal Von Leon equipment dropped by Von Leon is useful for Reboot progression</li>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/heart-of-a-lion.png" alt="Eqp Heart of a Lion"/> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 120) [Fantasy Theme World] Dylan's Story </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/heart-bracelet.png" alt="Heart Bracelet"/> <a href="https://maplestory.wiki/GMS/205/item/1082719" target="_blank" rel="noreferrer noopener">[Heart Bracelet]</a>, <img src="/images/equipment/101st-times-the-charm.png" alt="101st Time's the Charm"/> [Medal], <img src="/images/equipment/ludi-targa-hat.png" alt="Ludi Targa Hat"/> <img src="/images/equipment/ludi-scarlion-hat.png" alt="Ludi Scarlion Hat"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003534">[Ludi Targa Hat]</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/item/1003535">[Ludi Scarlion Hat]</a></li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 125) [Korean Folk Town] A Letter from the Library </strong>- Theme Dungeon
                <ul>
                    <li><strong>Rewards:</strong> <img src="/images/equipment/like-clouds-and-winds.png" alt="Eqp Like Clouds and Winds"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 130) [Crimsonheart] To Grendel's Library </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/crimsonheart-savior.png" alt="Eqp Crimsonheart Savior"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 130) [Golden Temple] Noi More Tourists </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/ravanas-golden-crown.png" alt="Eqp Ravana's Golden Crown"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003455" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="/images/equipment/seeker-of-gilded-truth.png" alt="Eqp Seeker of Gilded Truth"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 135) [Partem Ruins] Dark Prophecy </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/blazing-hot.png" alt="Eqp Blazing Hot"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}><em>[Reboot Recommended] </em>(Lv. 140) Finding Tomo </strong>- Quest to get started with the Yu Garden (The Far East) Theme Dungeon
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [Epic Potential Scrolls <em>(Reboot Only)</em>]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 140) [Commerci Republic] Neinheart's Calls </strong>- Theme Dungeon that also unlocks access to Commerci Trade Voyages and Transposing after reaching San Commerci</li>
                <li><strong>(Lv. 140) The Dragon and the Tiger </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="/images/equipment/gold-dragon-student.png" alt="Eqp Gold Dragon Student"/> <img src="/images/equipment/red-tiger-student.png" alt="Eqp Red Tiger Student"/>[Medal], <img src="/images/items/among-gold-dragons.png" alt="Setup Among Gold Dragons"/> <img src="/images/items/among-red-tigers.png" alt="Setup Among Red Tigers"/>[Chair], <img src="/images/items/special-potential-scroll.png" alt="Use Special Potential Scroll"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2049402" target="_blank" rel="noreferrer noopener">[Special Potential Scroll]</a>, <img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2048309" target="_blank" rel="noreferrer noopener">[Bonus Potential Scroll]</a>, <img src="/images/items/prototype-soul-enchanter.png" alt="Use Prototype Soul Enchanter"/> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Prototype Soul Enchanter]</a>, <img src="/images/equipment/the-enlightened-one-dragon.png" alt="Setup The Enlightened One Dragon"/> <img src="/images/equipment/the-enlightened-one-tiger.png" alt="Setup The Enlightened One Tiger"/>[Title]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 145) [Kerning Tower] Kerning Tower Grand Opening </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/jackpot-entertainment-co-ceo.png" alt="Eqp Jackpot Entertainment Co-CEO"/> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 150) [Stone Colossus] A Giant of a Rumor </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/colossal.png" alt="Eqp Colossal"/> [Medal], <img src="/images/items/kupos-ride-coupon.png" alt="Use Kupo's Ride Coupon"/> [Mount], <img src="/images/equipment/halflinger-expedition-badge.png" alt="Eqp Halflinger Expedition Badge"/> [Badge]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 175) [Detective Rave's Case Notes] Free Luxury Tour! </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards</strong>: <img src="/images/equipment/detective-raves-honorary-assistant.png" alt="Eqp Detective Rave's Honorary Assistant"/> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 185) [Fox Valley] Leaf Plane to Adventure </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/fox-point-ranger.png" alt="Eqp Fox Point Ranger"/> [Medal]</li>
                </ul>
                </li>
            </ul>
            <h3>Optional Quests:</h3>
            <ul>
                <li><strong>(Lv. 10) Do you know about Maple Guide? </strong>- Tutorial quest explaining Maple Guide</li>
                <li><strong>(Lv. 20) Do you know about Spell Enhancements? </strong>- Tutorial quest explaining <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Tracing</li>
                <li><strong>(Lv. 20) Do you know about Star Force Enhancements?</strong> Tutorial quest explaining Star Forcing</li>
                <li><strong>(Regular Server only) (Lv. 33) Mysterious Merchant Matilda </strong>- Tutorial quest explaining <a href="https://maplestory.fandom.com/wiki/Matilda" target="_blank" rel="noreferrer noopener">Matilda</a>, an NPC that sells <img src="/images/items/ap-reset-scroll.png" alt="Use AP Reset Scroll"/> <a href="https://maplestory.wiki/GMS/215/item/2501000" target="_blank" rel="noreferrer noopener">[AP Reset Scrolls]</a>, <img src="/images/items/sp-reset-scroll.png" alt="Use SP Reset Scroll"/> <a href="https://maplestory.wiki/GMS/215/item/2500000" target="_blank" rel="noreferrer noopener">[SP Reset Scrolls]</a>, <img src="/images/items/buff-freezer.png" alt="Cash Buff Freezer"/> <a href="https://maplestory.wiki/GMS/215/item/4143002" target="_blank" rel="noreferrer noopener">[Buff Freezers]</a>, <img src="/images/items/safety-charm.png" alt="Cash Safety Charm"/> <a href="https://maplestory.wiki/GMS/215/item/4140003" target="_blank" rel="noreferrer noopener">[Safety Charms]</a>, and <img src="/images/items/respawn-token.png" alt="Cash Respawn Token"/> <a href="https://maplestory.wiki/GMS/215/item/5510000" target="_blank" rel="noreferrer noopener">[Respawn Tokens]</a> for Mesos
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/safety-charm.png" alt="Cash Safety Charm"/> <a href="https://maplestory.wiki/GMS/215/item/4140003" target="_blank" rel="noreferrer noopener">[Safety Charms]</a>, <img src="/images/items/respawn-token.png" alt="Cash Respawn Token"/> <a href="https://maplestory.wiki/GMS/215/item/5510000" target="_blank" rel="noreferrer noopener">[Respawn Tokens]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 33) Trainer's Command </strong>- A special quest for unlocking the ability to have 3 pets out at once. Requires you to obtain a <img src="/images/items/pet-snack.png" alt="Cash Pet Snack"/> <a href="https://maplestory.wiki/GMS/215/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack]</a> from the Cash Shop using NX or <img src="/images/items/reward-points.png" alt="Use Reward Points"/> Reward Points</li>
                <li><strong>(Lv. 50) [Boss Matchmaking] Fight Together! </strong>- Tutorial quest explaining the Boss Matchmaking system</li>
                <li><strong>(Lv. 50) [Zakum] Statue of Dread </strong>- Quest that explains Zakum and teleports you to <a href="https://maplestory.fandom.com/wiki/Chief%27s_Residence" target="_blank" rel="noreferrer noopener">El Nath - Chief's Residence</a>
                <ul>
                    <li>This is a one-time teleport, you can use it to get to Zakum quickly at Lv. 100 to fight it</li>
                    <li>This quest is not required to fight Zakum</li>
                    <li>Talking to your corresponding Job NPC (Warrior, Mage, Thief, etc.) will teleport you directly to the entrance of Zakum, this can be used an unlimited number of times</li>
                </ul>
                </li>
                <li><strong>(Lv. 60) Have you learned about Potential? </strong>- Tutorial quest explaining equipment potentials
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/curbrocks-shoulder-accessory.png" alt="Eqp Curbrock's Shoulder Accessory"/> <a href="https://maplestory.wiki/GMS/215/item/1152207" target="_blank" rel="noreferrer noopener">[Curbrock's Shoulder Accessory]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 60) Have you learned about Bonus Stats? </strong>- Tutorial quest explaining equipment bonus stats
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/curbrocks-ring.png" alt="Eqp Curbrock's Ring"/> <a href="https://maplestory.wiki/GMS/215/item/1113018" target="_blank" rel="noreferrer noopener">[Curbrock's Ring]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 80) Use the Transfer Hammer! </strong>- Tutorial quest explaining Transfer Hammer</li>
                <li><strong>(Lv. 100) </strong><strong>[Grand Athenaeum] Visit the Grand Athenaeum </strong>- Cutscene heavy storyline that explains Maple World lore
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/scholarly-pendant.png" alt="Eqp Scholarly Pendant"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122263" target="_blank" rel="noreferrer noopener">[Scholarly Pendant]</a> for completing 3 stories</li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Dimension Invasion] Across Worlds </strong>- A quest to get started with Dimension Invasion. Provides a quick explanation of Dimension Invasion
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/dimension-gloves.png" alt="Eqp Dimension Gloves"/> <img src="/images/equipment/high-quality-dimension-gloves.png" alt="Eqp High Quality Dimension Gloves"/> <a href="https://maplestory.fandom.com/wiki/Dimension_Gloves" target="_blank" rel="noreferrer noopener">[Dimension Gloves]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Tower of Oz] Tower Under the Sea </strong>- A quest to get started with the Tower of Oz. Provides a quick explanation and tutorial for Tower of Oz
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/ring-of-restraint.png" alt="Eqp Ring of Restraint"/> <img src="/images/equipment/ultimatum-ring.png" alt="Eqp Ultimatum Ring"/> [Rings with Active Skills], <img src="/images/equipment/ryudes-sword.png" alt="Eqp Ryude's Sword"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402224" target="_blank" rel="noreferrer noopener">[Ryude's Sword]</a>, <img src="/images/equipment/ocean-glow-earrings.png" alt="Eqp Ocean Glow Earrings"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032232" target="_blank" rel="noreferrer noopener">[Ocean Glow Earrings]</a>, <img src="/images/equipment/lightseeker.png" alt="Eqp Lightseeker"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1452229" target="_blank" rel="noreferrer noopener">[Lightseeker Bow]</a>, <img src="/images/equipment/alicias-mutated-staff.png" alt="Eqp Alicia's Mutated Staff"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1382234" target="_blank" rel="noreferrer noopener">[Alicia's Mutated Staff]</a>, <img src="/images/equipment/aquarius-crown.png" alt="Eqp Aquarius Crown"/>  <a href="https://maplestory.wiki/GMS/210.1.1/item/1004075" target="_blank" rel="noreferrer noopener">[Aquarius Crown]</a>, <img src="/images/items/alicias-damage-skin.png" alt="Use Alicia's Damage Skin"/> <img src="/images/items/dorothys-damage-skin.png" alt="Use Dorothy's Damage Skin"/> <img src="/images/items/basic-damage-skin.png" alt="Use Basic Damage Skin"/> [Damage Skins]</li>
                    <li>Only the rings are valuable although they can be tedious to obtain because the power of each ring can vary and are randomly obtained from loot boxes</li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [System] Item Update</strong> - Provides an explanation to Transposing after reaching San Commerci</li>
                <li><strong>(Lv. 145) [Shaolin Temple] Elder Jung's Summons </strong>- Storyline
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/demon-mask-mount.png" alt="Use Demon Mask Mount"/> <a href="https://maplestory.wiki/GMS/215/item/2434618" target="_blank" rel="noreferrer noopener">[Mount]</a>, <img src="/images/items/nine-tailed-fox-damage-skin.png" alt="Use Nine Tailed Fox Damage Skin"/> <a href="https://maplestory.wiki/GMS/215/item/2434619" target="_blank" rel="noreferrer noopener">[Damage Skin]</a>, <img src="/images/items/demon-jar-chair.png" alt="Setup Demon Jar Chair"/> <a href="https://maplestory.wiki/GMS/215/item/1182286" target="_blank" rel="noreferrer noopener">[Chair]</a>, <img src="/images/equipment/nine-tailed-fox-totem.png" alt="Eqp Nine Tailed Fox Totem"/> <a href="https://maplestory.wiki/GMS/215/item/1202200" target="_blank" rel="noreferrer noopener">[Totem]</a>
                    </li>
                    <li>Totem is permanent and adds an effect behind your character</li>
                </ul>
                </li>
                <li><strong>(Lv. 160) [Showa Town] Welcome to Shawa Town!</strong> - Starts storyline for Showa Town which is required to unlock access to the boss Yakuza Boss</li>
                <li><strong>(Lv. 170) [NLC] Welcome back to NLC! </strong>- Starts storyline for New Leaf City
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/treasure-hunter-jacks-scar.png" alt="Eqp Treasure Hunter Jack's Scar"/> <img src="/images/equipment/professor-foxwits-glasses.png" alt="Eqp Professor Foxwit's Glasses"/> <img src="/images/equipment/sheriff-litas-earrings.png" alt="Eqp Sheriff Lita's Earrings"/> <img src="/images/equipment/treasure-hunter-johns-ring.png" alt="Eqp Treasure Hunter John's Ring"/> <img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/> <img src="/images/equipment/elpams-belt.png" alt="Eqp Elpam's Belt"/> <img src="/images/equipment/lukans-pauldron.png" alt="Eqp Lukan's Pauldron"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Masteria Explorer Gear]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 170) [Kritias] Sudden Kingdom </strong>- Completing this storyline unlocks access to Invasions and Daily Quests within Kritias to gain <img src="/images/items/kritias-commemorative-coin.png" alt="Etc Kritias Commemorative Coin"/> [Kritias Commemorative Coins] to use in a special shop. You can travel to Kritias from <a href="https://maplestory.fandom.com/wiki/Sky_Nest_I" target="_blank" rel="noreferrer noopener">Leafre</a>
                <ul>
                    <li><strong>Notable items: </strong> <img src="/images/equipment/tyrant-hyades-gloves.png" alt="Eqp Tyrant Hyades Gloves"/> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Gloves" target="_blank" rel="noreferrer noopener">[Superior Tyrant Glove]</a>, <img alt="Use Empress Reset Ticket" src="/images/items/empress-reset-ticket.png"/> [Boss Reset Tickets]
                    <ul>
                        <li>Only the Reset Tickets are valuable which give you an extra clear for a boss, you can try for these if you want to really min-max</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Phantom Forest] The Corrupted Forest </strong>- Completing the storyline for this area unlocks access to Daily Quests that reward <img src="/images/items/raven-ninja-coin.png" alt="Etc Raven Ninja Coin"/> <a href="https://maplestory.fandom.com/wiki/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> to buy items from Mo and Fiona in the Phantom Forest
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/numenals-willpower.png" alt="Eqp Numenal's Willpower"/> <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <img src="/images/equipment/legacy-of-light.png" alt="Eqp Legacy of Light"/> <img src="/images/equipment/legacy-of-darkness.png" alt="Eqp Legacy of Darkness"/> <img src="/images/equipment/delgrunds-honor.png" alt="Eqp Delgrund's Honor"/> <img src="/images/equipment/lirenis-wish.png" alt="Eqp Lireni's Wish"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="/images/equipment/white-identity.png" alt="Eqp White Identity"/> <img src="/images/equipment/crystal-leaf-earrings.png" alt="Eqp Crystal Leaf Earrings"/> <img src="/images/equipment/ravens-beak.png" alt="Eqp Raven's Beak"/> <a href="https://maplestory.fandom.com/wiki/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="/images/items/balanced-fury.png" alt="Use Balanced Fury"/> <a href="https://maplestory.fandom.com/wiki/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="/images/items/crystal-ilbi.png" alt="Use Crystal Ilbi Throwing-Stars"/> <a href="https://maplestory.fandom.com/wiki/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a>
                    </li>
                    <li>Unless you are really trying to optimize your gear, the Phantom Forest is not necessary</li>
                    <li>You can also do this if you want the Balanced Fury or Crystal Ilbis Throwing Stars</li>
                </ul>
                </li>
                <li><strong>(Lv. 200) </strong><strong>[Battle Content] Alien Visitors </strong>- A quest to get started with Alien Visitors PQ. Provides a quick explanation to Alien Visitor
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/equipment/last-unwelcome-guest-necklace.png" alt="Eqp Last Unwelcome Guest Necklace"/> <img src="/images/equipment/last-unwelcome-guest-earrings.png" alt="Eqp Last Unwelcome Guest Earrings"/> <img src="/images/equipment/last-unwelcome-guest-belt.png" alt="Eqp Last Unwelcome Guest Belt"/> <img src="/images/equipment/rare-alien-fragment-helmet.png" alt="Eqp Rare Alien Fragment Helmet"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Alien_Fragment_Set">[Lv. 180 Alien Fragment Gear]</a>, <img src="/images/equipment/vip-bow.png" alt="Eqp VIP Bow"/> [Alien Fragment Weapons] can be obtained from <a href="https://maplestory.fandom.com/wiki/Category%3AAlien_Visitor" target="_blank" rel="noreferrer noopener">Alien Visitor</a>
                    <li>Accessories are a decent substitute until you get Gollux accessories because they can be Star Forced to 25 stars and gain better potential lines</li>
                    </li>
                </ul>
                </li>
            </ul>
            <h3>Can Be Skipped:</h3>
            <p><strong>[Note]: </strong>Quests above Lv. 140 can be done as they provide some equipment but are rarely done compared to the quests in Optional</p>
            <ul>
                <li><strong>(Lv. 33) Do you know about the Beauty Salon? </strong>- Tutorial quest explaining the Beauty Salon, a place to save your hair and face styles
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="/images/items/hair-coupon.png" alt="Use Hair Coupon"/> <a href="https://maplestory.wiki/GMS/215/item/2543041" target="_blank" rel="noreferrer noopener">[Tutorial Hair Coupon]</a>, <img src="/images/items/hair-coupon.png" alt="Use Hair Coupon"/> <a href="https://maplestory.wiki/GMS/215/item/2432548" target="_blank" rel="noreferrer noopener">[Tutorial Face Coupon]</a>
                    <ul>
                        <li>DO NOT USE THESE, they will give you a really bad look
                        <ul>
                            <li>If you do, at least save your current style in the Beauty Salon first!</li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 45) [Kerning City] Dark Swamp Region </strong>- Starts the Kerning City area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/swamp-region-troubleshooter.png" alt="Eqp Swamp Region Troubleshooter"/> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 55) [Perion] Rocky Mountain Hunter </strong>- Starts the Perion area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/rocky-mountain-hunter.png" alt="Eqp Rocky Mountain Hunter"/>[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 65) [Sleepywood] Danger Seeker </strong>- Starts the Sleepywood area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/danger-seeker.png" alt="Eqp Danger Seeker"/>[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 70) [Cross World Party Quest] The Old Book</strong>
                </li>
                <li><strong>(Lv. 70) [Cross World Party Quest] Old Letter</strong>
                </li>
                <li><strong>(Lv. 70) [Cross World Party Quest] Notes of the Goddess</strong>
                </li>
                <li><strong>(Lv. 77) [El Nath] Snowfield Explorer </strong>- Starts the El Nath area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/snowfield-explorer.png" alt="Eqp Snowfield Explorer"/> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 85) [Ariant] Learning the Culture of Ariant </strong>- Starts the Ariant area quests for the medal
                <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/ariant-culture-expert.png" alt="Eqp Ariant Culture Expert"/> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 90) [Stellar Detectives] </strong><strong>The Erased Diary </strong>- The rewards that are not very worth obtaining. This is more for a fun activity or for item collecting rather than for training
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="/images/equipment/i-really-like-tutu.png" alt="Eqp I really like Tutu"/> <img src="/images/equipment/i-really-like-nenne.png" alt="Eqp I really like Nenne"/> <img src="/images/equipment/i-really-like-lingling.png" alt="Eqp I really like Lingling"/> <img src="/images/equipment/i-really-like-jett.png" alt="Eqp I Really Like Jett"/> [Medal], <img src="/images/items/lingling-damage-skin.png" alt="Use Lingling Damage Skin"/> <img src="/images/items/tutu-damage-skin.png" alt="Use Tutu Damage Skin"/> <img src="/images/items/nenne-damage-skin.png" alt="Use Nenne Damage Skin"/> [Damage Skins]</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Evolution System] Suspicious Movement on the Path </strong>- Quest to get started with Evolution System. Consists of a few cutscenes and tutorial quests</li>
                <li><strong>(Lv. 110) [Chryse] Find Xerxes </strong>- Quest to get started with the Chryse Party Quest</li>
                <li><strong>(Lv. 110) [Ludibrium] Ludibrium Sheriff </strong>- Starts the Ludibrium area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="/images/equipment/ludibrium-sheriff.png" alt="Eqp Ludibrium Sheriff"/>[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 115) [Lion King's Castle] </strong><strong>The Adventure of Jenn the Locksmith </strong>- Quest to get started with the Lion King's Castle Party Quest
                <ul>
                    <li>Separate from the actual Lion King's Castle Theme Dungeon</li>
                </ul>
                </li>
                <li><strong>(Lv. 120) Princess Sakuno Beckons </strong>- A quest explaining the boss Mori Ranmaru although, it is not required to actually fight the boss</li>
                <li><strong>(Lv. 120) Fly in the Sky! </strong>- A quest where completing it teaches you the skill "Soaring"
                <ul>
                    <li>Soaring is used in the Dragon Rider PQ but is not required anymore since the removal of the Crusader Codex</li>
                    <li><strong>Main Reward: </strong> <img src="/images/items/soaring.png" alt="Skill Soaring"/> <a href="https://maplestory.fandom.com/wiki/Soaring" target="_blank" rel="noreferrer noopener">[Soaring Skill]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 120) [Hilla] The Mysterious Mystic </strong>- A quest explaining the boss Hilla although, it is not required to actually fight the boss</li>
                <li><strong>(Lv. 125) [Ghost Park] Korean Folk Town's New Park</strong> - A quest explaining Ghost Park
                <ul>
                    <li>Most people prefer to train/grind which is why it is not a popular activity. Ghost Park can be somewhat difficult too for the amount of EXP you get</li>
                </ul>
                </li>
                <li><strong>(Lv. 150) The Dragon Rider's Identity 1 </strong>- Pre-quest for Dragon Rider PQ</li>
                <li><strong>(Lv. 160) Rumors from the Castle</strong> - Storyline for Ninja Castle, not required to fight Gigatoad / False Daimyo</li>
                <li><strong>(Lv. 180) [Twilight Perion] The Second Future </strong>- Storyline, it is not required to access Twilight Perion
                <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/twilight-warrior.png" alt="Twilight Warrior"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1143125" target="_blank" rel="noreferrer noopener">[Medal]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Masteria] Glimmer Man's Call </strong>- Storyline
                <ul>
                    <li><strong>Main Reward:</strong> <img src="/images/equipment/naricains-revival.png" alt="Naricain's Revival"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1143192" target="_blank" rel="noreferrer noopener">[Medal]</a>
                    </li>
                </ul>
                </li>
            </ul>
        </ContentPage>
    );
}

export default ProgressionGuide;
