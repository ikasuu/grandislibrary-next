import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';

function ProgressionGuide() {
    return (
        <ContentPage>
            <Head>
                <title>Progression Guide | Grandis Library</title>
                <meta content={"A guide to important content such as equipment, bosses, training maps, quests and 5th Job Advancement"} name="description"/>
            </Head>
            <ContentTitle>Progression Guide</ContentTitle>
            <p>For info on all the content in MapleStory, check out: <a href="https://www.grandislibrary.com/contents/level-content-guide" target="_blank" rel="noreferrer noopener">https://www.grandislibrary.com/contents/level-content-guide</a>
            </p>
            <h3 id="top">Quick Jumps:</h3>
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
                <li className="quick-jump"><Link smooth href="#emblem">Gold Emblem</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#powercrystal">Intense Power Crystal</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#4th">4th Job + Mastery Books</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#hyper">Hyper Skills + Hyper Stats</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#140">Lv. 140 and Beyond</Link>
                </li>
                <li className="quick-jump"><Link smooth href="#5th">5th Job Advancement</Link>
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
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="intro">Introduction:</h3>
            <hr/>
            <p>Some brief advice before starting, do not worry much about dailies and bosses until you've reached Lv. 200 and have obtained your 5th Job Advancement. Focus mostly on training and filling up your equipment slots. When you have time, complete some pre-quests for important content. Some bosses you could try and fight pre-200 are Normal Zakum, Normal Hilla, Easy Magnus, Root Abyss, Easy/Normal Horntail, Normal Ranmaru, and Ursus</p>
            <p>Additionally, all classes are going to be weak early on, especially if this is your first character. As you get closer to Lv. 200, monsters will hit you hard and they will be harder to defeat. Past Lv. 200, it does get easier but you'll need to fill up your equipment slots and start upgrading your equipment. Lastly, you probably won't get to the level where your class is as strong as the DPM charts suggest plus, DPM charts do not translate to the actual DPM while playing the game. Choose a class that you enjoy or seems enticing and go from there</p>
            <p>Good luck on your Maple journey!!</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="jobadv">Job Advancements:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/DjM5TZo.png" alt="Job Advancement" />
            <p>Most classes in the game have Job Advancements at Lv. 10, 30, 60, 100, and 200. These are referred to as your 1st, 2nd, 3rd, 4th, and 5th Job Advancements. During your Job Advancement, you will gain new skills to use</p>
            <p>To start your Job Advancement, open your Maple Guide, "U" by default, and you will see a button that says "Job Advancement Quest"</p>
            <p><strong>[Note]: </strong>Dual Blades have two additional Job Advancements at Lv. 20 and Lv. 45. They are a continuation of your 1st Job and 2nd Job Advancements and you will gain new skills at these levels</p><p><strong>[Note]: </strong>Beast Tamers do not have Job Advancements and instead only unlock new skills by reaching a certain level and allocating enough SP into an animal tree. A common build path is Bear/Hawk/Cat. For mobbing or Legion, you can use Bear/Leopard/Cat instead</p><p><strong>[Note]: </strong>Zero does not have Job Advancements and instead only unlock new skills by reaching certain levels</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="apsp">SP and AP Distribution:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/HOBLh7o.png" alt="Skill UI" />
            <img className="repository-image" src="https://i.imgur.com/0rT74RK.png" alt="SP UI" />
            <p>All newly created characters (except Beast Tamer) can max all of their 1st - 4th Job skills</p>
            <p>A tip for allocating SP is to first put 1 point in everything and then start maxing skills that require the least SP to reach Master Level. Next, start maxing passives by prioritizing the least SP and ones that provide useful stats like %Final Damage, %Damage, %Max HP, or %Damage Reduction. Next, move onto buffs and then lastly attacks</p>
            <p>For AP, you gain 5 AP every time you level up and most classes gain 5 AP for each Job Advancement from 1st to 4th. You do not need to worry about how to allocate your AP, instead just use Auto Assign for all your AP</p>
            <p><strong>[Note]</strong>: If you are playing Xenon, it is best to distribute your AP evenly between all 3 stats. You can easily do so by using the Auto Assign from 1st Job to 4th Job, the game will let you know when you've reached the requirement for the Multilateral skills. Past Lv. 200, you continue to evenly distribute your AP by referring to your current stats</p>
            <p><strong>[Note]</strong>: If you are creating an Explorer Pirate, you will have the choice between Auto Assigning to STR or DEX, choose STR only if you are creating a Buccaneer and DEX only if you are creating a Corsair</p>
            <p><strong>[Note]</strong>: If you are playing Dual Blade, their skills in 2nd Job and 3rd Job require special Mastery Books called <img src="https://maplestory.io/api/GMS/215/item/2431848/icon" alt="Mastery Book Dual Blade" /> <a href="https://maplestory.wiki/GMS/215/item/2431848" target="_blank" rel="noreferrer noopener">[Dual Blade Training Book]</a> to increase a Skill's Master Level which can be bought with Mesos from <a href="https://maplestory.fandom.com/wiki/Taeha" target="_blank" rel="noreferrer noopener">Taeha</a> in <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/MapIcon_SecretFlower.png/revision/latest?cb=20100619153333" alt="Secret Garden Icon" /> <a href="https://maplestory.fandom.com/wiki/The_Secret_Garden_Basement" target="_blank" rel="noreferrer noopener">The Secret Garden Basement</a>
            </p>
            <p><strong>[Note]</strong>: If you are playing Beast Tamer, you will only be able to max 2 animal tree and partially a third tree. An ideal build path is Bear/Hawk/Cat. For mobbing or Legion, you can use Bear/Leopard instead and allocate remaining points either into Hawk or Cat</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="inner">Inner Ability:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/hBlLBgO.png" alt="Inner Ability"/>
            <p>To unlock your Inner Ability, you need to be Lv. 50. You will find a quest in your Lightbulb tab on the left-hand side called <a href="https://maplestory.fandom.com/wiki/Quests/59/The_Eye_Opener" target="_blank" rel="noreferrer noopener">"The Eye Opener"</a>
            </p>
            <p>Inner Abilities are special bonuses that add extra stats to your character. They work similarly to potentials and can be reset using <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fb/Use_Medal_of_Honor.png/revision/latest?cb=20160612165034" alt="Item Medal of Honor" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Use_Boss_Medal_of_Honor.png/revision/latest?cb=20160612165230" alt="Boss Medal of Honor Item" /> Honor EXP. Just like Potentials, there are different tiers, Rare, Epic, Unique, and Legendary. You can tier up by using Honor EXP to reset your Inner Ability but watch out, resetting can also drop your tier if you are above Epic. If you are starting out, you do not need to worry too much about it just yet. If you do have an excess of Honor EXP, you can start by resetting to reach Unique or Legendary Ability</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3>Link Skills:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/MuIiQA4.png" alt="Link Manager" />
            <p>Link Skills are unique to each class and can be given to your other characters on the same world. Link Skills mostly come as passives but there are a few Active Link Skills too Once a character reaches Level 70, they can share their Link Skill with another character. When you Share your Link Skill, both characters will gain the effect of the Link Skill. Sometimes Link Skills may have different effects for the character with the linked version. Link Skills grow stronger at Level 120 (Skill Level 2) and most grow stronger again at Level 210 (Skill Level 3). Some Link Skills can stack increasing the strength of the Link Skill by linking the same Link Skill multiple times from different characters of the same class group</p>
            <p><strong>[Note]:</strong> If you do not see your Link Skill in the Link Manager, you may have to accept a quest in the Lightbulb tab on the left-hand side of the screen. If you still do not see it, try relogging For more info on Link Skills, check out: <a href="https://www.grandislibrary.com/contents/link-skills" target="_blank" rel="noreferrer noopener">https://www.grandislibrary.com/contents/link-skills</a>
            </p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="pocket">Pocket Slot:</h3>
            <hr />
            <p>Pocket Slot is an additional equipment slot you can unlock to equip Pocket Items. To unlock the Pocket Slot, you will first need to reach Lv. 30 Charm in your Traits Stat</p>
            <p>Traits are special stats that provide small bonuses to your character. To learn more about Traits, check out: <a href="https://maplestory.fandom.com/wiki/Traits" target="_blank" rel="noreferrer noopener">https://maplestory.fandom.com/wiki/Traits</a>
            </p>
            <p>You can increase your Charm by using <img src="https://maplestory.io/api/GMS/215/item/2022745/icon" alt="" /> <img src="https://maplestory.io/api/GMS/215/item/2022799/icon" alt="" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2022745" target="_blank">Cologne</a>, <img src="https://maplestory.io/api/GMS/215/item/2430909/icon" alt="" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2430909" target="_blank">Trait Boost Potions</a> found in Event Shops, increasing your Fame level, wearing special equipment or Cash Items, or changing your hair</p>
            <p>Once you've reached Lv. 30 Charm you will receive a quest in your Star Event Tab on the left-hand side from <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/npc/1012117" target="_blank">Big Headward</a> in <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/100000104" target="_blank">Henesys Hair Salon</a>. You will be asked to bring a <img src="https://maplestory.io/api/GMS/215/item/4032933/icon" alt="" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/4032933" target="_blank">Rose Clipping</a> that can be found by harvesting herbs or from the Auction House</p>
            <p>Once unlocked, you can buy a regular Pocket Item from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Nave" target="_blank">Nave</a> in <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/100000100" target="_blank">Henesys Market</a>. There are also other special Pocket Items you can obtain but the most commonly used ones are dropped by bosses such as, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d9/Eqp_Stone_of_Eternal_Life.png/revision/latest?cb=20151122223004" alt="Eqp Stone of Eternal Life" width={30} height={28} /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162009" target="_blank">Stone of Eternal Life</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Hilla/Monster" target="_blank">Hilla</a>, <img src="https://maplestory.io/api/GMS/215/item/1162025/icon" alt="" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162025" target="_blank">Pink Holy Cup</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank">Pink Bean</a>, or <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Eqp_Cursed_Red_Spellbook.png/revision/latest?cb=20180702021659" alt="Eqp Cursed Red Spellbook" width={38} height={37} /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/1162080" target="_blank">Cursed Spellbooks</a> from <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Will/Monster" target="_blank">Will</a>
            </p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="emblem">Gold Emblem</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/ETDXGqW.png" alt="Emblem Item" />
            <p>At Lv. 100, most classes will get their Gold Emblem for free by accepting a quest in your Lightbulb tab on the left-hand side of the screen. Emblems are very important and easy to obtain equipment that should be obtained right away. Emblems are special like Weapons and Secondary Weapons in which they can obtain %Ignore DEF, and %Attack lines as potentials which are very important stats to have. However, Emblems cannot obtain %Boss Damage</p>
            <p><strong>[Note]: </strong>For Kaiser and Angelic Buster can buy their Emblem from <a href="https://maplestory.fandom.com/wiki/Harpoon#Pantheon" target="_blank" rel="noreferrer noopener">Harpoon</a> or <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a></p>
            <p><strong>[Note]: </strong>For Xenon can buy their Emblem/Power Source from <a href="https://maplestory.fandom.com/wiki/Edwin" target="_blank" rel="noreferrer noopener">Edwin</a> or <a href="https://maplestory.fandom.com/wiki/Silbaron" target="_blank" rel="noreferrer noopener">Silbaron</a></p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="powercrystal"> <img src="https://maplestory.io/api/GMS/215/item/4001886/icon" alt="" /> Intense Power Crystals:</h3>
            <hr />
            <img className="repository-image"src="https://i.imgur.com/PNmC042.png" alt="Intense Power Crystal Shop" />
            <p>Most bosses (excluding Gollux) drop <img src="https://maplestory.io/api/GMS/215/item/4001886/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/4001886" target="_blank" rel="noreferrer noopener">[Intense Power Crystals]</a> that can be sold for Mesos. The price of the Intense Power Crystal will vary based on how many players are in your party, the difficulty of the boss, and if the boss is daily or weekly</p>
            <p>You can sell your Intense Power Crystals to the <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Collector" target="_blank">Collector</a> found at <img src="https://static.wikia.nocookie.net/maplestory/images/2/26/MapIcon_FreeMarket.png" alt="MapIcon FreeMarket.png" width={38} height={38} /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/910000000" target="_blank">Free Market Entrance</a> that can be accessed from any town by pressing the "Quick Move" button below the minimap. The Collector will only accept 60 Intense Power Crystals a week and resets on Thursdays 12am UTC</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="4th">4th Job and Mastery Books:</h3>
            <hr />
            <p>In 4th Job, you will require <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Use_Mastery_Book_20.png/revision/latest?cb=20140817012100" alt="Use Mastery Book 20" width={32} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Use_Mastery_Book_30.png/revision/latest?cb=20140817012104" alt="Use Mastery Book 30" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book" target="_blank" rel="noreferrer noopener">[Mastery Books]</a> (except for Cygnus Knights and Beast Tamers) to reach the Master Level of your skills. When you first reach 4th Job, you'll notice most of your skills' Master Level is 10. You will first need to use <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Use_Mastery_Book_20.png/revision/latest?cb=20140817012100" alt="Use Mastery Book 20" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book_20" target="_blank" rel="noreferrer noopener">[Mastery Book 20]</a> for each required skill to unlock Master Level 20. Afterward, you'll need to use a <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Use_Mastery_Book_30.png/revision/latest?cb=20140817012104" alt="Use Mastery Book 30" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book_30" target="_blank" rel="noreferrer noopener">[Mastery Book 30]</a> for skills that have a Master Level 30</p>
            <p>To obtain Mastery Books, they are sold by <a href="https://maplestory.fandom.com/wiki/Luna" target="_blank" rel="noreferrer noopener">Luna</a>, <a href="https://maplestory.fandom.com/wiki/Sly#Leafre" target="_blank" rel="noreferrer noopener">Sly</a>, <a href="https://maplestory.fandom.com/wiki/Illiad" target="_blank" rel="noreferrer noopener">Illiad</a>, and <a href="https://maplestory.fandom.com/wiki/Bung%27s_Mama" target="_blank" rel="noreferrer noopener">Bung's Mama</a> for 3,000,000/5,000,000 Mesos. You can also buy them from <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} />  <a href="https://maplestory.fandom.com/wiki/Wence" target="_blank" rel="noreferrer noopener"> Wence</a>,  <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/Etc_Yggdrasil_Rune.png/revision/latest?cb=20180329025907" alt="Etc Yggdrasil Rune" width={33} height={35} /> <a href="https://maplestory.fandom.com/wiki/Oko" target="_blank" rel="noreferrer noopener">Oko</a>, and <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5d/Etc_Time_Coin.png/revision/latest?cb=20150414000135" alt="Etc Time Coin" width={27} height={28} /> <a href="https://maplestory.fandom.com/wiki/Cello">Cello <em>(Zero Only)</em></a> with special currencies. However, the best way to obtain Mastery Books is from Event Shops and from Theme Dungeons. Some Theme Dungeons reward you with <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Box" target="_blank" rel="noreferrer noopener">[Mastery Boxes]</a> that functions as either a Mastery Book 20 or 30</p>
            <p>Here is a list of all the questlines that reward <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />:</p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/MapIcon_Library.png/revision/latest?cb=20140614011213" alt="MapIcon Library" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Grand_Athenaeum">Grand Athenaeum</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/13/MapIcon_LionCastle.png/revision/latest?cb=20100909103204" alt="MapIcon LionCastle" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category%3ALion_King's_Castle">Lion King's Castle</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/MapIcon_FantasticPark.png/revision/latest?cb=20120511074203" alt="MapIcon FantasticPark" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Fantasy_Theme_World">Fantasy Theme World</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/MapIcon_CrossHunter.png/revision/latest?cb=20120831140934" alt="MapIcon CrossHunter" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Silent_Crusade">Silent Crusade</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Root_Abyss">Root Abyss</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/MapIcon_Folkvillige.png/revision/latest?cb=20100619153530" alt="MapIcon Folkvillige" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Korean_Folk_Town">Korean Folk Town</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/MapIcon_GoldTempleTH.png/revision/latest?cb=20100619154244" alt="MapIcon GoldTempleTH" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Golden_Temple">Golden Temple</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3e/MapIcon_Crimsonwood.png/revision/latest?cb=20191204083038" alt="MapIcon Crimsonwood" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Tynerum">Crimsonheart Castle</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8f/MapIcon_Partem.png/revision/latest?cb=20191204082821" alt="MapIcon Partem" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Partem">Partem Ruins</a>
                </li>
            </ul>
            <p>Additionally, as you reach 4th Job, you should start upgrading your equipment and Star Force them to 10 - 5 stars. It does not matter if the gear will be replaced, this will help you to fight monsters at an optimal pace</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="hyper">Hyper Skills + Hyper Stats</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/u6GSzx9.png" alt="Hyper Active UI" />
            <img className="repository-image" src="https://i.imgur.com/Y5jjRzN.png" alt="Hyper Passive UI" />
            <p>At Lv. 140 you will unlock access to Hyper Skills and Hyper Stats. Hyper Skills have a passive and active category. Active Skills are unlocked at Lv. 140, 160, and 190. Passive Hyper Skills provide benefits to some of your 1st - 4th job skills. You gain a 1 SP for your Passive Hyper Skills at Lv. 140, 150, 165, 180 and 190 (total of 5 SP)</p>
            <img className="repository-image" src="https://i.imgur.com/n422Of0.png" alt="Hyper Stats UI" />
            <p>Hyper Stats are special stats such as %Crit Rate, %Crit Damage, %Ignore DEF, %Damage, and %Boss Damage that you can allocate points into to level up and gain stats for. As you level up a Hyper Stat, it will cost more to upgrade. You gain Hyper Stat Points every level and the amount you gain every level increase every 10 levels</p>
            <p>Hyper Stats are very dependent on what you currently need at the moment rather than what is optimal for your class. Are you optimizing for bossing or mobbing? Do you need more damage? Crit Rate? To optimize your Hyper Stats for your current needs, I recommend you use the <a rel="noreferrer noopener" href="http://tiny.cc/maplestorycalculators" target="_blank">MapleStory Calculator</a> created by <a rel="noreferrer noopener" href="https://www.youtube.com/user/MasteringGaming" target="_blank">MasteringGaming</a>
            </p>
            <p>For more info on Hyper Stats, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Hyper_Stats" target="_blank">https://strategywiki.org/wiki/MapleStory/Hyper_Stats</a>
            </p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id={140}>Level 140 and Beyond:</h3>
            <hr />
            <p>Past this point, you will begin to notice you are struggling against monsters. At Lv. 140 you will have gained all your 4th Job SP. I recommend that you max all your skills along with <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Use_Mastery_Book_20.png/revision/latest?cb=20140817012100" alt="Use Mastery Book 20" width={32} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Use_Mastery_Book_30.png/revision/latest?cb=20140817012104" alt="Use Mastery Book 30" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book" target="_blank" rel="noreferrer noopener">[Mastery Books]</a> before going any further</p>
            <p>Additionally, take some time to fill up every equipment slot and Spell Trace everything if you are on Regular Servers. Be sure to Star Force everything as much as you can. A bare minimum of 5 Stars on everything but the best would be to have at least 10 Stars. As well, reveal all the potentials on your equipment and try to use cubes to reroll for some %Main Stat or Epic Potential</p>
            <p>If you need help filling up your equipment slots, check out the <a href="https://www.grandislibrary.com/contents/progression-guide#equipment">Equipment Content</a> section of this guide!</p>
            <p>You can also check out <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a> for info on upgrading and enhancing your equipment</p>
            <p>Going forward, you do not need to worry much about dailies or bosses for now until you've reached Lv. 200. You can however try and fight some bosses in the &lt; 2k Main Stat section of the <a href="https://www.grandislibrary.com/contents/progression-guide#bosses">Bosses</a> part of this guide for Mesos, equipment, and <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2711001" target="_blank">Occult Cubes</a>. Your main priority right now is leveling up and working towards filling up each equipment slot with Epic Potential gear</p>
            <p>If you are struggling with Mesos, be sure to complete <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/MapIcon_MTour.png/revision/latest?cb=20200415050411" alt="MapIcon MTour" data-preserve-html-node="true" width={38} height={38} /> Maple Tour every day as the main reward is Mesos</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="5th">5th Job Advancement:</h3>
            <hr />
            <p><strong>Mandatory Requirements to accept 5th Job Quest:</strong>
            </p>
            <ul>
                <li>100 Star Force minimum total</li>
                <li>10 Star Force on Primary Weapon</li>
            </ul>
            <p><strong>Requirements to Job Advance:</strong> <img src="https://maplestory.io/api/GMS/210.1.1/npc/2140000/icon/" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/npc/2140001/icon/" alt="" />
            </p>
            <ul>
                <li>After talking to the Memory Keeper and Temple Keeper, you'll receive a quest called <a href="https://maplestory.wiki/GMS/210.1.1/quest/1461" target="_blank" rel="noreferrer noopener">"5th Job: Blessing of the Goddess"</a>. Once you've talked to all the Goddesses and completed their challenge, you can job advanced to 5th Job</li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/100000201" target="_blank" rel="noreferrer noopener">Henesys: Bowman Instructional School</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>Talk to "The Goddess of Maple World" to complete the quest</li>
                </ul>
                </li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/105300000" target="_blank" rel="noreferrer noopener">Dark World Tree: Deserted Camp</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>After talking to the "Goddess of Tynerum", you must climb up near the top of the Dark World Tree to find a <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a> on a random map</li>
                </ul>
                </li>
                <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/400000001" target="_blank" rel="noreferrer noopener">Pantheon: Grand Temple Interior</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
                <ul>
                    <li>After talking to the "Goddess of Grandis", you must defeat Magnus at any difficulty
                    <ul>
                        <li>I recommend defeating Easy Magnus</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li>Each goddess will give you an Arcane Stone which you can charge up by fighting monsters. Once the stone has been charged, you can use it again to gain some EXP
                <ul>
                    <li>You do not need to charge the stones up to Job Advance</li>
                </ul>
                </li>
            </ul>
            <p><strong>After Advancement, obtaining an Arcane Symbol:</strong> Monsters in the Arcane River require a special force called Arcane Force (or Power) similar to Star Force to deal damage to the monsters in these areas which you gain from equipping <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Arcane_Symbols" target="_blank">Arcane Symbols</a></p>
            <ul>
                <li>To obtain your Arcane Symbol, you must complete the quest <a href="https://maplestory.wiki/GMS/210.1.1/quest/1466" target="_blank" rel="noreferrer noopener">"A Greater Power"</a> located in your Lightbulb icon</li>
                <li><strong>[Note]: </strong>The symbol you obtain is not a real Arcane Symbol yet until you complete the Vanishing Journey storyline. In the meantime, you must complete the story with the limited Arcane Force you have</li>
                <li><strong>[Tip] </strong>If you are struggling to defeat the monsters, there is a Hyper Stat for Arcane Force, allocate some points temporarily until you get enough Arcane Force</li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="matrix">5th Job V Matrix + Nodestones:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/olWlY9O.png" alt="V Matrix" />
            <p>In 5th Job, you do not gain skills regularly like your previous Job Advancements. Instead, you have "Nodes" which contains a 5th Job Skill. You can equip these Nodes into your V Matrix to gain access to that Skill. To gain Nodes, you need to open <img src="https://maplestory.io/api/GMS/218/item/2435902/icon" alt="Nodestone Item" />Nodestones that are obtained from monsters in the Arcane River, Vanishing Journey Weekly Quest, and Event Shops</p>
            <img className="repository-image" src="https://i.imgur.com/k3uftia.png" alt="Skill UI" />
            <p>To view your V Matrix, open up your Skill UI, "K" by default, and click to the "V" tab and press the "V Matrix" button at the top</p>
            <p>You will notice you will have empty slots and locked slots. You gain additional slots as you level up your Character Level which will allow you to equip more Nodes and in turn more 5th Job Skills. Additionally, you can pay Mesos to unlock slots early. To equip a Node, double-click or drag them into an empty slot</p>
            <p>All classes have their Main 5th Job Skills that are exclusive to that class. There are also 5th Job Skills exclusive to a certain Class Group like Explorers or Cygnus Knights. Lastly, there are Common 5th Job skills that are available to all classes</p>
            <img className="repository-image" src="https://i.imgur.com/UJR3pCO.png" alt="Enhancing Node" />
            <img className="repository-image" src="https://i.imgur.com/zYhoMwx.png" alt="Enhance Single Node" />
            <p>You do not gain SP normally like your previous Job Advancements to level up your skills. Instead, you will need to enhance your Nodes to increase a skill's level. Each Node will have a Rank and EXP associated with it. To enhance a Node, you will need copies of the same Node to gain enough EXP to rank up. Upgrading a Node's Rank will increase the associated skill's level</p>
            <p>There are 3 types of Nodes:</p>
            <p>
                <img alt="" src="https://i.imgur.com/77aklyT.png" /><strong> Skill Nodes</strong>: These contain the main 5th Job Skills themselves</p>
            <ul>
                <li>A Skill Node has a max Rank of 25 or Master Level of is 25 (30 with <em>Matrix Points</em>)</li>
                <li>Only one copy of a Skill Node can be equipped at once</li>
            </ul>
            <p>
                <img alt="" src="https://i.imgur.com/ib6GOOz.png" /><strong>Boost Nodes</strong>: These are passives that increase the %Final Damage of your 1st - 4th Job Skills. They also provide different bonuses based on the Skill Level of the node such as extra %Crit Rate or %Ignore DEF</p>
            <ul>
                <li>Each Boost Node will enhance 3 different Skills. When you hover over a boost node in your V Matrix, the Main Skill that is used for leveling up a Boost Node will be the skill at the top. You will need multiple Boost Nodes with the same Main Skill to upgrade a Boost Node</li>
                <li>Each Boost Node has a max Rank of 25 but each boosted skill can reach a Master Level of 50 (60 with <em>Matrix Points</em>) by equipping two Boost Nodes that boost the same skill</li>
            </ul>
            <p>
                <img alt="" src="https://i.imgur.com/LsjjJzB.png" /><strong> Special Nodes: </strong>These nodes provide a special effect that trigger once you've fulfilled a specific requirement</p>
            <ul>
                <li>They cannot be leveled up and have a timed duration and will disappear</li>
                <li>It is best to disassemble these nodes for Node Shards that are used to craft new Nodes</li>
            </ul>
            <img className="repository-image" src="https://i.imgur.com/d3TT6AW.png" alt="Matrix Points" />
            <p>Each time your character levels up, you gain a Matrix Point. Matrix Points are used to raise a Node's Rank but they are tied to the Node Slots themselves instead of the Node. Each slot can allocate up to 5 additional Ranks for a Node. This means each Skill Node or Boost Node can reach a max Rank of 30. You can assign your Matrix Points in the V Matrix by pressing the "Slot Enhancement" button on the right</p> <img className="repository-image" src="https://maplestory.io/api/GMS/215/npc/1540945/icon/" alt="Node Master" />
            <img className="repository-image" src="https://i.imgur.com/PrRNdc3.png" alt="V Upgrade UI" />
            <p>To enhance your Nodes, you will need to talk to a Node Master such as <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/npc/1540945" target="_blank">Archelle</a> in <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/map/450001000" target="_blank">Nameless Town</a>. To start, right-click a Node you want to enhance. Using copies of the same Node you are trying to enhance, you consume the extra Nodes to the gain EXP required to level up a Node. As mentioned previously, to enhance Boost Nodes, you need Nodes with the same Main Skill. All Nodes have a max Rank of 25 meaning each Node provides 25 Skill Levels for a skill</p>
            <p>To gain additional Nodes, you will need to open <img src="https://maplestory.io/api/GMS/215/item/2435719/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2435719" target="_blank" rel="noreferrer noopener">Nodestones</a> which will give you a random Node for your class. You can obtain Nodestones from monster drops in the Arcane River, from the <a href="https://maplestory.wiki/GMS/215/quest/34151" target="_blank" rel="noreferrer noopener">Weekly Quest in Vanishing Journey</a>, and from Events. Additionally, there is a special Nodestone called <img src="https://maplestory.io/api/GMS/215/item/2439279/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2439279" target="_blank" rel="noreferrer noopener">[Experience Nodestone]</a> which when opened provides an EXP Node that can be used on any Node as EXP. These Nodestones are only obtainable from Events</p>
            <img className="repository-image" src="https://i.imgur.com/d8uJGQa.png" alt="Disassemble Node" />
            <img className="repository-image" src="https://i.imgur.com/dZPIICc.png" alt="Node Crafting" />
            <p>Another way to gain more Nodes is by Nodecrafting. To craft Nodes, you will need Node Shards which are obtained from disassembling unwanted Nodes at a Node Master. To start, click on the "Nodecrafting" button and then click on a Node you want to craft and then press the "Craft" button. Don't press the Craft Nodestone button as you will get a Nodestone instead!</p>
            <p><strong>[Note]</strong>: When crafting Boost Nodes, you can choose the Main Skill for that Node by choosing the desired skill in the Nodecrafting UI</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="legion">Legion System</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/1BhXSxx.png" alt="Legion Board" />
            <img className="repository-image" src="https://i.imgur.com/qa7V5dt.png" alt="Legion Legend" />
            <p>A system that is unlocked when you have either a total of 500 levels within your World from your characters or have reached Lv. 200 and completed the 5th Job Advancement. You can assign your characters onto a grid to provide bonuses to all your characters in your World</p>
            <p>You will see there is a "Total Level", this is based on your 40 highest level characters. This is also referred to as your "Legion Level". The higher your Legion Level the more characters you can assign to your grid. To increase the amount of characters you can assign, you also need to give your <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/11/Etc_Legion_Coin.png/revision/latest?cb=20171113182547" alt="Etc Legion Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> to <a href="https://maplestory.fandom.com/wiki/Dame_Appropriation" target="_blank" rel="noreferrer noopener">Dame Appropriation</a>. Legion Coins are gained passively based on your characters currently assigned to the grid</p>
            <p>Legion Coins are also used to buy special items from <a href="https://maplestory.fandom.com/wiki/Squire_Pancho_Sanza" target="_blank" rel="noreferrer noopener">Squire Pancho Sanza</a> such as <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Use_Legion%27s_Expertise.png/revision/latest?cb=20171113183055" alt="Use Legion's Expertise" width={32} height={32} /> [EXP Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/79/Use_Legion%27s_Luck.png/revision/latest?cb=20171113183106" alt="Use Legion's Luck" width={32} height={32} /> [Drop Rate Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b8/Use_Legion%27s_Wealth.png/revision/latest?cb=20171113183117" alt="Use Legion's Wealth" width={32} height={32} /> [Meso Rate Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Use_Epic_Potential_Scroll.png/revision/latest?cb=20170224033813" alt="Use Epic Potential Scroll" width={32} height={25} /> [Epic Potential Scrolls], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={32} /> [Master Craftsman's Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/87/Use_Bonus_Potential_Scroll.png/revision/latest?cb=20140727212800" alt="Use Bonus Potential Scroll" width={32} height={25} /> [Bonus Potential Scrolls] and <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Use_Powerful_Rebirth_Flame.png/revision/latest?cb=20180414204835" alt="Use Powerful Rebirth Flame" width={28} height={33} /> [Powerful Rebirth Flames]</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="rewardpoint">Reward Points + Maple Rewards Shop:</h3>
            <hr />
            <p> <img src="https://maplestory.io/api/GMS/215/item/2432742/icon" alt="" /> Reward Points are a special currency used in the Cash Shop at the Maple Rewards Shop or to apply a 30% discount to certain Cash Shop purchases. The discount, however, is very limited so Reward Points are usually only used to buy items from the Maple Rewards Shop</p>
            <p>Reward Points expire at the end of the next month that the points were obtained. So if you obtained some Reward Points in August, the points would expire on September 30th</p>
            <p>The Maple Rewards Shop contains a variety of Cash Shop items available for purchase with Reward Points. You can only buy a set amount of each item per month per account, and the items restock every month. Certain items are not available in Reboot Servers since you can already buy them with Mesos or are related to upgrading/scrolling</p>
            <p>Some notable items in the shop are:</p>
            <ul>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5062010/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5062010" target="_blank" rel="noreferrer noopener">[Black Cube]</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5062009/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5062009" target="_blank" rel="noreferrer noopener">[Red Cube]</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5211046/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5211046" target="_blank" rel="noreferrer noopener">[1-day 2x EXP Special Coupon]</a> (Regular Server only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5680823/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5680823" target="_blank" rel="noreferrer noopener">[Wild Totem Coupon]</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5520001/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5520001" target="_blank" rel="noreferrer noopener">[Platinum Scissors of Karma]</a> (Regular Server only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/2435926/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5689000" target="_blank" rel="noreferrer noopener">[Premium Water of Life]</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5252030/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5252030" target="_blank" rel="noreferrer noopener">[Monster Park Additional Entry Ticket]</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5460000/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack] (Regular Server only)</a>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/2430771/icon" alt="" /> <img src="https://maplestory.io/api/GMS/215/item/2430966/icon" alt="" /> <img src="https://maplestory.io/api/GMS/215/item/2430769/icon" alt="" /> <img src="https://maplestory.io/api/GMS/215/item/2430768/icon" alt="" /> <img src="https://maplestory.io/api/GMS/215/item/2433964/icon" alt="" /> [Etc/Set-up/Use/Equip/Storage Add 8 Inventory Slots] - Unlimited purchases (Regular Server only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/2435909/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2435909" target="_blank" rel="noreferrer noopener">[30-day Pendent Slot Expansion]</a> - Unlimited purchases (Regular Server Only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5064000/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5064000" target="_blank" rel="noreferrer noopener">[Shielding Ward]</a> (Regular Server only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5064101/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5064100" target="_blank" rel="noreferrer noopener">[Shield Scroll]</a> (Regular Server only)</li>
                <li> <img src="https://maplestory.io/api/GMS/215/item/5064300/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5064300" target="_blank" rel="noreferrer noopener">[Guardian Scroll]</a> (Regular Server only)</li>
            </ul>
            <p>Some ways to obtain <img src="https://maplestory.io/api/GMS/215/item/2432742/icon" alt="" /> Reward Points are:</p>
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
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="auction">Auction House in Regular Servers:</h3>
            <hr/>
            <img className="repository-image" src="https://i.imgur.com/XLfG4QV.png" alt="Auction House" />
            <p>Auction House in Regular Servers allows you to buy and sell items to other Maplers. You can buy anything from equipment, potions, to cosmetic items like chairs and cash clothing. As well, you can also buy <a rel="noreferrer noopener" href="https://maplestory.nexon.net/micro-site/53117" target="_blank">Wonderberry</a> pets here that pick up items for you</p>
            <p><img className="repository-image" src="https://i.imgur.com/95cRMte.png" alt="Auction House Button" /></p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="content">Important Content:</h3>
            <hr />
            <ul>
                <li><strong>[Regular Servers] Spell Tracing: </strong>Using <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> Spell Traces, you can upgrade your gear to gain more stats
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot]: </strong>Can be sold for Mesos</li>
                </ul>
                </li>
                <li><strong>Star Forcing: </strong>Enhancements that provide bonus stats depending on the amount of Star Force that is on an item</li>
                <li><strong>[Lv. 35] <a href="https://strategywiki.org/wiki/MapleStory/Professions" target="_blank" rel="noreferrer noopener">Professions / Crafting</a></strong>: Crafting may be important if you cannot find any new gear for your level. It is an easy and useful way to obtain equipment for your level
                <ul>
                    <li> <img src="https://maplestory.io/api/GMS/210.1.1/item/2048716/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/2048717/icon" alt="" /> [Special Rebirth Flames] and <img src="https://maplestory.io/api/GMS/210.1.1/item/2432083/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/2432162/icon" alt="" /> [Special Cubes] can also be crafted using Professions</li>
                    <li><strong>[Traits Stats]: </strong>You can also find your <a href="https://strategywiki.org/wiki/MapleStory/Traits" target="_blank" rel="noreferrer noopener">Traits</a> that grant your character small bonuses in your Professions UI</li>
                </ul>
                </li>
                <li><strong>[Lv. 50] <a href="https://strategywiki.org/wiki/MapleStory/Inner_Ability" target="_blank" rel="noreferrer noopener">Inner Ability</a></strong>: Bonuses that add extra stats to your character. They work similar to potentials and can be reset using <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fb/Use_Medal_of_Honor.png/revision/latest?cb=20160612165034" alt="Use Medal of Honor" width={27} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Use_Boss_Medal_of_Honor.png/revision/latest?cb=20160612165230" alt="Use Boss Medal of Honor" width={33} height={32} /> Honor EXP</li>
                <li><strong>[Lv. 70] </strong><a href="https://maplestory.fandom.com/wiki/Link_Skill" target="_blank" rel="noreferrer noopener"><strong>Link Skills</strong></a>: Class-Unique skill that can be shared with another character in your world</li>
                <li><strong>[Lv. 100+] Star Force Maps</strong>: Special maps that require you to have a certain amount of Star Force Enhancements on your equipment to deal damage to monsters. Monsters here have more HP but in return give more EXP
                <ul>
                    <li><strong>[Note]: </strong>If this is your first time playing, training in these areas may be difficult as they are a lot stronger than normal monsters! If you are up for the challenge, try training here. Be sure to be appropriately geared up though</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/MapIcon_MonsterPark.png/revision/latest?cb=20100619154742" alt="MapIcon MonsterPark" width={38} height={38} /> <strong>[Lv. 105+] <a href="https://maplestory.fandom.com/wiki/Category:Monster_Park" target="_blank" rel="noreferrer noopener">Monster Park</a></strong>: Completing Monster Park will reward you with a considerable amount of EXP and <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Etc_Monster_Park_Commemorative_Coin.png/revision/latest?cb=20150209010037" alt="Etc Monster Park Commemorative Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coin]</a> to use in a special shop
                <ul>
                    <li>Great for early levels as you gain a lot of EXP</li>
                    <li>Special shop sells special potions <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Use_Extreme_Red_Potion.png/revision/latest?cb=20170206074326" alt="Use Extreme Red Potion" width={22} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Use_Extreme_Green_Potion.png/revision/latest?cb=20170206074332" alt="Use Extreme Green Potion" width={22} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ac/Use_Extreme_Blue_Potion.png/revision/latest?cb=20170206074338" alt="Use Extreme Blue Potion" width={22} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/Use_Extreme_Gold_Potion.png/revision/latest?cb=20170206074343" alt="Use Extreme Gold Potion" width={30} height={35} /> that are transferable within your account (given same World) that grant useful buffs for training</li>
                    <li>Completing Monster Park 77 times for each day of the week will reward you a special <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cd/Eqp_Seven_Day_Monster_Parker.png/revision/latest?cb=20180524151134" alt="Eqp Seven Day Monster Parker" width={35} height={34} /> <a href="https://maplestory.fandom.com/wiki/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Medal]</a> that gives +10% Ignore Enemy Defence</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/MapIcon_MTour.png/revision/latest?cb=20200415050411" alt="MapIcon MTour" width={38} height={38} /> <strong>[Lv. 105+] </strong><strong>Maple Tour: </strong>Completing Maple Tour will reward you with Mesos and <img src="https://maplestory.io/api/GMS/212/item/4310286/icon" alt="" /> [Maple Tour Coins] to buy special items at Maple Tour
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Important]: </strong>In Reboot servers, the amount of Mesos rewarded is increased and is considered a main activity because of this!</li>
                    <li>Provides some decent money to start out with and can be completed fairly quickly each day</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b4/MapIcon_VanLeon.png/revision/latest?cb=20100909103717" alt="MapIcon VanLeon" width={38} height={38} /> <strong> [Lv.125+] </strong><strong style={{color: '#ff6600'}}>[Reboot] </strong><strong><a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a></strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/09/Eqp_Marx_Von_Leon_Battle_Suit.png/revision/latest?cb=20151030205905" alt="Eqp Marx Von Leon Battle Suit" width={31} height={34} />Royal Von Leon equipment dropped by Von Leon is useful for Reboot progression!
                <ul>
                    <li>Equipment is considered a Boss Item, it will gain additional Bonus Stats compared to normal equipment</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f5/MapIcon_ShangHaiCN.png/revision/latest?cb=20171129032322" alt="MapIcon ShangHaiCN" width={38} height={38} /> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong style={{color: '#ff6600'}}>[Reboot] The Far East (Yu Garden)</strong></a>: Provides an easy source to <strong /> [Epic Potential Scrolls] in Reboot Servers</li>
                <li><strong>[SPECIAL] <a href="https://maplestory.fandom.com/wiki/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: A system that is unlocked when you have either a total of 500 levels within your World from your characters or have reached Lv. 200 and completed the 5th Job Advancement. You can assign your characters onto a grid to provide bonuses to all your characters in your World. Additionally, you will passively gain <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/11/Etc_Legion_Coin.png/revision/latest?cb=20171113182547" alt="Etc Legion Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a> to use to buy items from <a href="https://maplestory.fandom.com/wiki/Squire_Pancho_Sanza" target="_blank" rel="noreferrer noopener">Squire Pancho Sanza</a>
                <ul>
                    <li><strong>Notable Items</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Use_Legion%27s_Expertise.png/revision/latest?cb=20171113183055" alt="Use Legion's Expertise" width={32} height={32} /> [EXP Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/79/Use_Legion%27s_Luck.png/revision/latest?cb=20171113183106" alt="Use Legion's Luck" width={32} height={32} /> [Drop Rate Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b8/Use_Legion%27s_Wealth.png/revision/latest?cb=20171113183117" alt="Use Legion's Wealth" width={32} height={32} /> [Meso Rate Booster], <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Use_Epic_Potential_Scroll.png/revision/latest?cb=20170224033813" alt="Use Epic Potential Scroll" width={32} height={25} /> [Epic Potential Scrolls], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={32} /> [Master Craftsman's Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/87/Use_Bonus_Potential_Scroll.png/revision/latest?cb=20140727212800" alt="Use Bonus Potential Scroll" width={32} height={25} /> [Bonus Potential Scrolls] and <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Use_Powerful_Rebirth_Flame.png/revision/latest?cb=20180414204835" alt="Use Powerful Rebirth Flame" width={28} height={33} /> [Powerful Rebirth Flames]</li>
                </ul>
                </li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="questlines">Important Questlines to Complete:</h3>
            <hr />
            <p>Questlines here unlock access to bosses or reward worthwhile equipment</p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/90/MapIcon_retakeHQ.png/revision/latest?cb=20120801091846" alt="MapIcon retakeHQ" width={38} height={38} /> <strong>[Lv. 90] </strong><a href="https://maplestory.fandom.com/wiki/Category:Heliseum" target="_blank" rel="noreferrer noopener"><strong>Heliseum</strong></a>: Completing this storyline unlocks access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/MapIcon_Magnus.png/revision/latest?cb=20141124064756" alt="MapIcon Magnus" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> and daily quests for <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> which can be used as currency for a <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">special shop</a>
                <ul>
                    <li><strong>Notable shop items:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d3/Eqp_Elite_Heliseum_Cape.png/revision/latest?cb=20190517225048" alt="Eqp Elite Heliseum Cape" width={32} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/44/Eqp_Nova_Hyades_Cloak.png/revision/latest?cb=20150920200301" alt="Eqp Nova Hyades Cloak" width={33} height={30} /> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ae/Eqp_Elite_Heliseum_Boots.png/revision/latest?cb=20190517225113" alt="Eqp Elite Heliseum Boots" width={26} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/Eqp_Nova_Boots.png/revision/latest?cb=20161221181553" alt="Eqp Nova Boots" width={26} height={31} /> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Shoe]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ed/Eqp_Elite_Heliseum_Belt.png/revision/latest?cb=20160828035418" alt="Eqp Elite Heliseum Belt" width={33} height={27} /> <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/40/Eqp_Antique_Root_Gloves.png/revision/latest?cb=20170530235034" alt="Eqp Antique Root Gloves" width={28} height={26} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082688" target="_blank" rel="noreferrer noopener">[Antique Root Gloves]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/MapIcon_CrossHunter.png/revision/latest?cb=20120831140934" alt="MapIcon CrossHunter" width={38} height={38} /> <strong> [Lv. 90+] <a href="https://maplestory.fandom.com/wiki/Silent_Crusade" target="_blank" rel="noreferrer noopener">Silent Crusade</a></strong>: Completing Silent Crusade unlocks access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e9/MapIcon_Akairum.png/revision/latest?cb=20141001075303" alt="MapIcon Akairum" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a>
                <ul>
                    <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} /> Crusader Coins can be used to buy items from the Silent Crusade shop through the UI</li>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Setup_Superior_Hunter.png/revision/latest?cb=20130708040838" alt="Setup Superior Hunter" width={33} height={31} /> [Titles], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Silent_Crusade_Champion.png/revision/latest?cb=20170604190531" alt="Eqp Silent Crusade Champion" width={32} height={34} />[Medals], <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/63/Eqp_Silent_Crusader_Belt.png/revision/latest?cb=20160829182556" alt="Eqp Silent Crusader Belt" width={30} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Eqp_Veteran_Crusader_Shoulder.png/revision/latest?cb=20200323171131" alt="Eqp Veteran Crusader Shoulder" width={32} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Eqp_Veteran_Crusader_Pendant.png/revision/latest?cb=20191026212657" alt="Eqp Veteran Crusader Pendant" width={33} height={31} /> [Veteran Crusader Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Eqp_Mystic_Belt.png/revision/latest?cb=20160829183426" alt="Eqp Mystic Belt" width={35} height={25} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Earrings.png/revision/latest?cb=20200323170011" alt="Eqp Mystic Earrings" width={31} height={26} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Mystic_Pendant.png/revision/latest?cb=20191026212843" alt="Eqp Mystic Pendant" width={30} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/be/Eqp_Mystic_Face_Accessory.png/revision/latest?cb=20200323161919" alt="Eqp Mystic Face Accessory" width={23} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Eye_Accessory.png/revision/latest?cb=20160123040217" alt="Eqp Mystic Eye Accessory" width={33} height={27} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/13/MapIcon_LionCastle.png/revision/latest?cb=20100909103204" alt="MapIcon LionCastle" width={38} height={38} /> <strong>[Lv. 115] <a href="https://maplestory.fandom.com/wiki/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Lion King's Castle</a></strong>: Completing this Theme Dungeon grants access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b4/MapIcon_VanLeon.png/revision/latest?cb=20100909103717" alt="MapIcon VanLeon" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width={38} height={38} /> <strong>[Lv. 125] </strong><a href="https://maplestory.fandom.com/wiki/Category:Root_Abyss" target="_blank" rel="noreferrer noopener"><strong>Root Abyss</strong></a>: Completing the storyline unlocks <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e0/Etc_Gnarled_Wooden_Key.png/revision/latest?cb=20190620061849" alt="Etc Gnarled Wooden Key" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Gnarled_Wooden_Key" target="_blank" rel="noreferrer noopener">Daily Keys</a> for <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/25/MapIcon_BloodyQueen.png/revision/latest?cb=20180109154740" alt="MapIcon BloodyQueen" width={38} height={38} /> Crimson Queen, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/MapIcon_Piere.png/revision/latest?cb=20180109073042" alt="MapIcon Piere" width={38} height={38} /> Pierre, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/MapIcon_BanBan.png/revision/latest?cb=20180109154944" alt="MapIcon BanBan" width={38} height={38} /> Von Bon, and <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_Bellum.png/revision/latest?cb=20180109155335" alt="MapIcon Bellum" width={38} height={38} /> Vellum
                <ul>
                    <li>Remember to defeat each Normal Mode 10 times to unlock their Chaos Mode</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/MapIcon_BlockBuster.png/revision/latest?cb=20191204082759" alt="MapIcon BlockBuster" width={38} height={38} /> <strong>[Lv. 120] <a href="https://maplestory.fandom.com/wiki/Blockbuster/Black_Heaven" target="_blank" rel="noreferrer noopener">[Blockbuster] Black Heaven</a></strong>: Completing Black Heaven will unlock access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Mobicon_Lotus_%282%29.png/revision/latest?cb=20150312043217" alt="Mobicon Lotus (2)" width={27} height={27} />Lotus
                <ul>
                    <li>Completing this on one character will unlock access for all your characters in the same world</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/MapIcon_BlockBuster.png/revision/latest?cb=20191204082759" alt="MapIcon BlockBuster" width={38} height={38} /> <strong>[Lv. 135] <a href="https://maplestory.fandom.com/wiki/Blockbuster/Heroes_of_Maple" target="_blank" rel="noreferrer noopener">[Blockbuster] Heroes of Maple</a></strong>: Completing Act 4 will unlock access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/MapIcon_fallenWorldTree.png/revision/latest?cb=20191204082811" alt="MapIcon fallenWorldTree" width={38} height={38} /> Damien
                <ul>
                    <li>Completing this on one character will unlock access for all your characters in the same world</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/MapIcon_CommerzBT.png/revision/latest?cb=20140328223105" alt="MapIcon CommerzBT" width={38} height={38} /> <strong>[Lv. 140] <a href="https://maplestory.fandom.com/wiki/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener">Commerci Voyages</a></strong>: Completing a series of quests in Commerci and reaching the town San Commerci grants access to the Commerci Trade Voyages
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5a/Eqp_Sweetwater_Axe.png/revision/latest?cb=20171006040855" alt="Eqp Sweetwater Axe" width={30} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a9/Eqp_Sweetwater_Hat.png/revision/latest?cb=20141001015449" alt="Eqp Sweetwater Hat" width={36} height={26} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Sweetwater_Tattoo.png/revision/latest?cb=20161102002907" alt="Eqp Sweetwater Tattoo" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/32/Eqp_Sweetwater_Monocle.png/revision/latest?cb=20161101060254" alt="Eqp Sweetwater Monocle" width={32} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_JP_Nohime.png/revision/latest?cb=20150225220019" alt="MapIcon JP Nohime" width={38} height={38} /> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:Princess_No"><strong>Hieizan Temple</strong></a>: Completing this storyline will unlock access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_JP_Nohime.png/revision/latest?cb=20150225220019" alt="MapIcon JP Nohime" width={38} height={38} /> Princess No
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/MapIcon_TimeTemple.png/revision/latest?cb=20100619154020" alt="MapIcon TimeTemple" width={38} height={38} /> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:Temple_of_Time" target="_blank" rel="noreferrer noopener"><strong>Temple of Time</strong></a>: Completing storyline will unlock access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/MapIcon_PinkBean.png/revision/latest?cb=20100619154913" alt="MapIcon PinkBean" width={38} height={38} /> Pink Bean</li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4f/MapIcon_destructionTown.png/revision/latest?cb=20101224163328" alt="MapIcon destructionTown" width={38} height={38} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3a/MapIcon_darkEreb.png/revision/latest?cb=20101224163439" alt="MapIcon darkEreb" width={38} height={38} /> <strong>[Lv. 160]</strong>  <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Gate to the Future</strong></a>: Completing questline will unlock access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Signus.png/revision/latest?cb=20141218024114" alt="MapIcon Signus" width={38} height={38} /> Normal Cygnus</li>
                <li>
                <img alt="" src="https://i.imgur.com/CcgJV1V.png" /> <strong>[Lv. 160]</strong><strong> <a href="https://maplestory.fandom.com/wiki/Blockbuster/Masteria_Through_Time" target="_blank" rel="noreferrer noopener">[Blockbuster] Masteria Through Time</a></strong>: Completing blockbuster will reward you with <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Antellion_Guardian.png/revision/latest?cb=20181026154458" alt="Eqp Antellion Guardian" width={26} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">[Best-in-slot Medal]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_Subani-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Subani-Roid" width={22} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> OR <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Dr.Jang-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Dr.Jang-Roid" width={22} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662091" target="_blank" rel="noreferrer noopener">[Dr. Jang-Roid]</a> androids with NPC Vendor</li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="equipment">Equipment Content:</h3>
            <hr />
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
            <h4>Lv. 10 - 120:</h4>
            <ul>
                <li><strong>[Lv. 10 - 40]</strong><img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1d/Eqp_Brown_Winter_Hat.png/revision/latest?cb=20190510052944" alt="Eqp Brown Winter Hat" width="29" height="21"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/3/30/Eqp_Blue_Split_Piece.png/revision/latest?cb=20190417103805" alt="Eqp Blue Split Piece" width="25" height="28"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Eqp_Blue_Shouldermail_Pants.png/revision/latest?cb=20171114175953" alt="Eqp Blue Shouldermail Pants" width="25" height="28"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/Eqp_Silver_Sylvia.png/revision/latest?cb=20190511094010" alt="Eqp Silver Sylvia" width="30" height="31"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/4/41/Eqp_Brown_Leather_Krag.png/revision/latest?cb=20161011195216" alt="Eqp Brown Leather Krag" width="29" height="21"/> Can be bought from your class' hometown<ul><li>Can also be dropped by monsters around your level</li></ul></li>
                <li><strong>[Lv. 40 - 110]</strong><img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Eqp_Green_Distinction.png/revision/latest?cb=20190418112133" alt="Eqp Green Distinction" width="32" height="22"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Eqp_Blue_Requiem.png/revision/latest?cb=20121030103414" alt="Eqp Blue Requiem" width="27" height="32"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Eqp_Black_Neos_Pants.png/revision/latest?cb=20171027061007" alt="Eqp Black Neos Pants" width="21" height="29"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/Eqp_Green_Mystra.png/revision/latest?cb=20191005215901" alt="Eqp Green Mystra" width="24" height="24"/><img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1a/Eqp_Black_Duke_Barkin_Shoes.png/revision/latest?cb=20161014031331" alt="Eqp Black Duke Barkin Shoes" width="24" height="29"/> Dropped by monsters around your level<ul><li>Can also be crafted with the Blacksmith Profession</li></ul></li>
                <li><strong>Lv. 30]</strong>  <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3b/Eqp_Sailor_Mask.png/revision/latest?cb=20141020050317" alt="Eqp Sailor Mask" width={29} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/46/Eqp_Sailor_Belt.png/revision/latest?cb=20151225204428" alt="Eqp Sailor Belt" width={34} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/Eqp_Octopus_Earrings.png/revision/latest?cb=20151220001827" alt="Eqp Octopus Earrings" width={29} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/Eqp_Fairy_Mark.png/revision/latest?cb=20151220000806" alt="Eqp Fairy Mark" width={23} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Eqp_Ellinel_Bracelet.png/revision/latest?cb=20141018233813" alt="Eqp Ellinel Bracelet" width={35} height={35} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Ellinel_Wings.png/revision/latest?cb=20141018232621" alt="Eqp Ellinel Wings" width={37} height={39} />[<a href="https://maplestory.wiki/GMS/210.1.1/item/1012389" target="_blank" rel="noreferrer noopener">Face</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132292" target="_blank" rel="noreferrer noopener">Belt</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1032254" target="_blank" rel="noreferrer noopener">Earrings</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1022254" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1082533" target="_blank" rel="noreferrer noopener">Glove</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102590" target="_blank" rel="noreferrer noopener">Cape</a> ] Theme Dungeon Rewards
                <ul>
                    <li>Respectively, <a href="https://maplestory.fandom.com/wiki/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a>, <a href="https://maplestory.fandom.com/wiki/Category:Gold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach</a>, <a href="https://maplestory.fandom.com/wiki/Category%3AEllinel" target="_blank" rel="noreferrer noopener">Ellinel Fairy Academy</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 40]</strong>  <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f4/Eqp_Flower_Tattoo.png/revision/latest?cb=20150512035815" alt="Eqp Flower Tattoo" width={21} height={24} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012346" target="_blank" rel="noreferrer noopener">[Face]</a> Golden Beach Boss Drop - <a href="https://maplestory.fandom.com/wiki/Captain_Darkgoo#Gold_Beach" target="_blank" rel="noreferrer noopener">Captain Darkgoo</a>
                </li>
                <li><strong>[Lv. 40 - 140]</strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1112535/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1012209/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1152010/icon" alt="" /> [Ring / Face / Shoulder] Accessory Crafting Profession Gear
                <ul>
                    <li>Early accessories cannot be Star Forced or Upgraded but provide flat stats and DEF</li>
                </ul>
                </li>
                <li><strong>[Lv. 60] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/79/Eqp_Tangyoon%27s_Chef_Hat.png/revision/latest?cb=20160719020259" alt="Eqp Tangyoon's Chef Hat" width={33} height={25} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/29/Eqp_Tangyoon%27s_Chef_Outfit.png/revision/latest?cb=20160719020249" alt="Eqp Tangyoon's Chef Outfit" width={27} height={31} /> [<a href="https://maplestory.wiki/GMS/205/item/1003762" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestory.wiki/GMS/205/item/1052578" target="_blank" rel="noreferrer noopener">Overall</a>] Cooking With Tangyoon Rewards</li>
                <li><strong>[Lv. 65] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Shackles_of_Love.png/revision/latest?cb=20160621015045" alt="Eqp Shackles of Love" width={35} height={33} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6a/Eqp_Heavy_Violetta_Cape.png/revision/latest?cb=20141115053729" alt="Eqp Heavy Violetta Cape" width={31} height={33} /> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">Pendant</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">Cape</a>] <a href="https://maplestory.fandom.com/wiki/Quests/91" target="_blank" rel="noreferrer noopener">Mushroom Castle</a> Theme Dungeon Rewards</li>
                <li><strong>[Lv. 70] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Eqp_Beodog_Figurine.png/revision/latest?cb=20170121172854" alt="Eqp Beodog Figurine" width={31} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/95/Eqp_Billy_Figurine.png/revision/latest?cb=20170121172901" alt="Eqp Billy Figurine" width={32} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/Eqp_Adler_Figurine.png/revision/latest?cb=20170121172908" alt="Eqp Adler Figurine" width={26} height={33} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Mansa_Figurine.png/revision/latest?cb=20170121172915" alt="Eqp Mansa Figurine" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Totems]</a>  <a href="https://maplestory.fandom.com/wiki/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a> Theme Dungeon Rewards
                <ul>
                    <li>Theme Dungeon may be tedious and buggy</li>
                </ul>
                </li>
                <li><strong>[Lv. 75] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/39/Eqp_Greed_Pendant.png/revision/latest?cb=20170206075046" alt="Eqp Greed Pendant" width={32} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122219" target="_blank" rel="noreferrer noopener">[Pendant]</a> Bought from Monster Park using <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Etc_Monster_Park_Commemorative_Coin.png/revision/latest?cb=20150209010037" alt="Etc Monster Park Commemorative Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a>
                <ul>
                    <li>Increases equipment drop rate</li>
                </ul>
                </li>
                <li><strong>[Lv. 90] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/63/Eqp_Silent_Crusader_Belt.png/revision/latest?cb=20160829182556" alt="Eqp Silent Crusader Belt" width={30} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Eqp_Veteran_Crusader_Shoulder.png/revision/latest?cb=20200323171131" alt="Eqp Veteran Crusader Shoulder" width={32} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Eqp_Veteran_Crusader_Pendant.png/revision/latest?cb=20191026212657" alt="Eqp Veteran Crusader Pendant" width={33} height={31} /> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1132111" target="_blank" rel="noreferrer noopener">Belt</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1152069" target="_blank" rel="noreferrer noopener">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1122157" target="_blank" rel="noreferrer noopener">Pendant</a> ] Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} />  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Wence" target="_blank" rel="noreferrer noopener">Wence</a>
                </li>
                <li><strong>[Lv. 90 - 120] </strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1112676/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1112677/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1112678/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1112679/icon" alt="" /> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1112676" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112677" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112678" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1112679" target="_blank" rel="noreferrer noopener">Ring</a>] Silent Crusader Storyline Reward
                <ul>
                    <li>Platinum Cross Ring can be Star Forced but cannot have a Potential</li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Eqp_Virtues_Medallion.png/revision/latest?cb=20150626122343" alt="Eqp Virtues Medallion" width={36} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ee/Eqp_Blasted_Feather.png/revision/latest?cb=20150626125517" alt="Eqp Blasted Feather" width={36} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/df/Eqp_Golden_Fox_Marble.png/revision/latest?cb=20150626125816" alt="Eqp Golden Fox Marble" width={35} height={33} /> [Secondary Weapon] Can be bought from <a href="https://maplestory.fandom.com/wiki/Neville" target="_blank" rel="noreferrer noopener">Neville</a>
                <ul>
                    <li>Excludes certain classes who use Shields and Dual Blades</li>
                    <li>Special Secondary Weapons are also available from <a href="https://maplestory.fandom.com/wiki/Category:Evolution_System" target="_blank" rel="noreferrer noopener">Evolution Lab</a> bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Etc_Evolving_Coin.png/revision/latest?cb=20180329025503" alt="Etc Evolving Coin" width={27} height={27} /> <a href="https://maplestory.fandom.com/wiki/Evolving_Coin" target="_blank" rel="noreferrer noopener">[Evolving Coin]</a> from <a href="https://maplestory.fandom.com/wiki/Vendor-C2" target="_blank" rel="noreferrer noopener">Vendor-C2</a> that are slightly better</li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d1/Eqp_Gold_Maple_Leaf_Emblem.png/revision/latest?cb=20150105204637" alt="Eqp Gold Maple Leaf Emblem" width={30} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/47/Eqp_Gold_Cygnus_Emblem.png/revision/latest?cb=20160904184434" alt="Eqp Gold Cygnus Emblem" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Eqp_Gold_Heroes_Emblem_%28Phantom%29.png/revision/latest?cb=20161113024445" alt="Eqp Gold Heroes Emblem (Phantom)" width={30} height={30} /> <a href="https://maplestory.fandom.com/wiki/Emblem" target="_blank" rel="noreferrer noopener">[Emblems]</a> Can be obtained from accepting a quest from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li>Kaiser and Angelic Buster can buy their Emblem from <a href="https://maplestory.fandom.com/wiki/Harpoon#Pantheon" target="_blank" rel="noreferrer noopener">Harpoon</a> or <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                    <li>Xenon can buy their Emblem/Power Source from <a href="https://maplestory.fandom.com/wiki/Edwin" target="_blank" rel="noreferrer noopener">Edwin</a> or <a href="https://maplestory.fandom.com/wiki/Silbaron" target="_blank" rel="noreferrer noopener">Silbaron</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Eqp_Zakum_Helmet.png/revision/latest?cb=20151116042441" alt="Eqp Zakum Helmet" width={36} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Lv. 50 Hat]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener">Zakum</a>
                <ul>
                    <li>Fight Normal Zakum instead of Easy for extra EXP</li>
                </ul>
                </li>
                <li><strong>[Lv. 100] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Wings_of_Fate.png/revision/latest?cb=20190531042939" alt="Eqp Wings of Fate" width={36} height={35} /> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Cape]</a> Rewarded after completing Mushroom Shrine Tales from <a href="https://maplestory.fandom.com/wiki/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a>
                <ul>
                    <li>Scaling stats considered slightly better than <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Eqp_Tyrant_Hyades_Cloak.png/revision/latest?cb=20141004221626" alt="Eqp Tyrant Hyades Cloak" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">Tyrant Capes</a> for the price</li>
                    <li>Bonus Stats can be freely rerolled by discarding the item and reobtaining it again from <a href="https://maplestory.fandom.com/wiki/Tengu/NPC#Town" target="_blank" rel="noreferrer noopener">Tengu</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 110+] </strong><img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Antellion_Guardian.png/revision/latest?cb=20181026154458" alt="Eqp Antellion Guardian" width="26" height="34"/><a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noopener noreferrer">[Best-in-slot for Training Medal]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_Subani-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Subani-Roid" width="22" height="28"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Dr.Jang-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Dr.Jang-Roid" width="22" height="28"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noopener noreferrer">[Android]</a> Rewarded for completing <a href="https://maplestory.fandom.com/wiki/Blockbuster/Monad" target="_blank" rel="noopener noreferrer">Monad Blockbuster</a> and <img src="https://maplestory.io/api/GMS/210.1.1/item/3700501/icon" alt="Android"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/3700501" target="_blank" rel="noopener noreferrer">[Title]</a> rewarded for defeating Julieta without dying
                <ul>
                    <li>Completing blockbuster may be challenging at lower levels</li>
                </ul>
                </li>
                <li><strong>[Lv. 115] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/be/Eqp_Mystic_Face_Accessory.png/revision/latest?cb=20200323161919" alt="Eqp Mystic Face Accessory" width={23} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Eye_Accessory.png/revision/latest?cb=20160123040217" alt="Eqp Mystic Eye Accessory" width={33} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Earrings.png/revision/latest?cb=20200323170011" alt="Eqp Mystic Earrings" width={31} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Mystic_Pendant.png/revision/latest?cb=20191026212843" alt="Eqp Mystic Pendant" width={30} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Eqp_Mystic_Belt.png" alt="Eqp Mystic Belt" /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a> Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} />  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Wence" target="_blank" rel="noreferrer noopener">Wence</a>
                </li>
            </ul>
            <h4>Lv. 120+:</h4>
            <ul>
                <li><strong>[Lv. 120+] </strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1072732/icon" alt="" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d3/Eqp_Elite_Heliseum_Cape.png/revision/latest?cb=20190517225048" alt="Eqp Elite Heliseum Cape" width={32} height={30} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1072732" target="_blank" rel="noreferrer noopener">Lv. 80 Shoe</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102471">Lv. 80 Cape</a> ] Chance to drop from <a href="https://maplestory.fandom.com/wiki/Treglow" target="_blank" rel="noreferrer noopener">Treglow</a> / <a href="https://maplestory.fandom.com/wiki/Victor" target="_blank" rel="noreferrer noopener">Victor</a> / <a href="https://maplestory.fandom.com/wiki/Velderoth" target="_blank" rel="noreferrer noopener">Velderoth</a>
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>There is a version for each class</li>
                    <li>Can also be bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120+] </strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1072737/icon" alt="" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/44/Eqp_Nova_Hyades_Cloak.png/revision/latest?cb=20150920200301" alt="Eqp Nova Hyades Cloak" width={33} height={30} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1072737" target="_blank" rel="noreferrer noopener">Lv. 110 Shoe</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102476" target="_blank" rel="noreferrer noopener">Lv. 110 Cape</a> ]Chance to drop from <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener">Magnus</a> (Easy/Normal/Hard)
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>There is a version for each class</li>
                    <li>Can also be bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Noble_Ifia%27s_Ring.png/revision/latest?cb=20170304041213" alt="Eqp Noble Ifia's Ring" width={35} height={35} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113282" target="_blank" rel="noreferrer noopener">[Ring]</a> Reward from Lion King's Castle - <a href="https://maplestory.fandom.com/wiki/Quests/221" target="_blank" rel="noreferrer noopener">Rose Garden</a>
                <ul>
                    <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 120]</strong>  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e7/Eqp_Timeless_Fennel.png/revision/latest?cb=20150129071634" alt="Eqp Timeless Fennel" width={33} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/41/Eqp_Timeless_Myst_Blue.png/revision/latest?cb=20170409043153" alt="Eqp Timeless Myst Blue" width={33} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/66/Eqp_Timeless_Rontano.png/revision/latest?cb=20170409203537" alt="Eqp Timeless Rontano" width={24} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b3/Eqp_Timeless_Lubav.png/revision/latest?cb=20170304065148" alt="Eqp Timeless Lubav" width={27} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1f/Eqp_Timeless_Executioner.png/revision/latest?cb=20151209081055" alt="Eqp Timeless Executioner" width={35} height={35} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/6th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Ectletic Gear]</a> Obtained from fighting monsters around Lv. 120
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 130] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Eqp_Muspell_Warrior_Hat.png/revision/latest?cb=20150129073125" alt="Eqp Muspell Warrior Hat" width={33} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/22/Eqp_Muspell_Magician_Suit.png/revision/latest?cb=20151213191915" alt="Eqp Muspell Magician Suit" width={31} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Muspell_Warrior_Shoes.png/revision/latest?cb=20161120230129" alt="Eqp Muspell Warrior Shoes" width={27} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Muspell_Warrior_Gloves.png/revision/latest?cb=20151119063555" alt="Eqp Muspell Warrior Gloves" width={27} height={22} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/ca/Eqp_Jaihin_Saber.png/revision/latest?cb=20161124052357" alt="Eqp Jaihin Saber" width={34} height={34} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/7th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Muspell Gear]</a> Obtained from fighting monsters around Lv. 130
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/19/Eqp_Pensalir_Battle_Helm.png/revision/latest?cb=20150129073124" alt="Eqp Pensalir Battle Helm" width={35} height={20} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/85/Eqp_Pensalir_Mage_Robe.png/revision/latest?cb=20151211015212" alt="Eqp Pensalir Mage Robe" width={29} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Eqp_Pensalir_Battle_Boots.png/revision/latest?cb=20161004014545" alt="Eqp Pensalir Battle Boots" width={30} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Eqp_Pensalir_Battle_Gloves.png/revision/latest?cb=20151119064023" alt="Eqp Pensalir Battle Gloves" width={29} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a8/Eqp_Pensalir_Battle_Cape.png/revision/latest?cb=20161004195741" alt="Eqp Pensalir Battle Cape" width={32} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Eqp_Utgard_Saber.png/revision/latest?cb=20161004221558" alt="Eqp Utgard Saber" width={36} height={36} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/8th_Warrior_Set" target="_blank" rel="noreferrer noopener">[Pensalir Gear]</a> Obtained from fighting monsters above Lv. 140
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f4/Eqp_Hayato%27s_Treasure.png/revision/latest?cb=20181024054825" alt="Eqp Hayato's Treasure" width={31} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Eqp_Kanna%27s_Treasure.png/revision/latest?cb=20181024054842" alt="Eqp Kanna's Treasure" width={31} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8e/Eqp_Ayame%27s_Treasure.png/revision/latest?cb=20160831005323" alt="Eqp Ayame's Treasure" width={33} height={28} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noreferrer noopener">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noreferrer noopener">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noreferrer noopener">Belt</a> ] Obtained from fighting <a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></li>
                <li><strong>[Lv. 140+] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Eqp_Princess_No%27s_Accursed_Arrow.png/revision/latest?cb=20170904025120" alt="Eqp Princess No's Accursed Arrow" width={37} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f8/Eqp_Princess_No%27s_Damp_Book.png/revision/latest?cb=20170904030802" alt="Eqp Princess No's Damp Book" width={41} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/50/Eqp_Princess_No%27s_Fox_Marble.png/revision/latest?cb=20150628091636" alt="Eqp Princess No's Fox Marble" width={36} height={34} /> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Princess No Secondary]</a> Obtained from fighting <a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a>
                <ul>
                    <li>Considered best-in-slot for most classes</li>
                </ul>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Eqp_Meister_Ring.png/revision/latest?cb=20171123033157" alt="Eqp Meister Ring" width={32} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113055" target="_blank" rel="noreferrer noopener">[Ring]</a> Obtained from Accessory Crafting Profession</li>
                <li><strong>[Lv. 140]</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Eqp_Dimension_Gloves.png/revision/latest?cb=20141002050006" alt="Eqp Dimension Gloves" width={31} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0d/Eqp_High_Quality_Dimension_Gloves.png/revision/latest?cb=20160704164629" alt="Eqp High Quality Dimension Gloves" width={31} height={31} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1082488" target="_blank" rel="noreferrer noopener">Glove</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1082489" target="_blank" rel="noreferrer noopener">Glove</a> ] Can be obtained from <a href="https://maplestory.fandom.com/wiki/Category:Dimension_Invasion" target="_blank" rel="noreferrer noopener">Dimension Invasion</a>
                </li>
                <li><strong>[Lv. 140] </strong> <img src="https://maplestory.io/api/GMS/205/item/1003984/icon" alt="" /> <img src="https://maplestory.io/api/GMS/205/item/1052673/icon" alt="" /> <img src="https://maplestory.io/api/GMS/205/item/1072874/icon" alt="" /> <img src="https://maplestory.io/api/GMS/205/item/1082559/icon" alt="" />
                <img className="repository-image" src="https://maplestory.io/api/GMS/205/item/1132248/icon" alt="" /> <img src="https://maplestory.io/api/GMS/205/item/1102626/icon" alt="" /> <img src="https://maplestory.io/api/GMS/205/item/1152161/icon" alt="" /> [ <a href="https://maplestory.wiki/GMS/205/item/1003984" target="_blank" rel="noreferrer noopener">Hat</a>, <a href="https://maplestory.wiki/GMS/205/item/1052673" target="_blank" rel="noreferrer noopener">Overall</a>, <a href="https://maplestory.wiki/GMS/205/item/1072874" target="_blank" rel="noreferrer noopener">Shoes</a>, <a href="https://maplestory.wiki/GMS/205/item/1082559">Gloves</a>, <a href="https://maplestory.wiki/GMS/205/item/1102626">Cape</a>, <a href="https://maplestory.wiki/GMS/205/item/1132248" target="_blank" rel="noreferrer noopener">Belt</a>, <a href="https://maplestory.wiki/GMS/205/item/1152161" target="_blank" rel="noreferrer noopener">Shoulder</a> ] Obtained from completing Commerci Storyline
                <ul>
                    <li>Not to be confused with Sweetwater Gear</li>
                </ul>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bf/Eqp_Amaterasu%27s_Helm.png/revision/latest?cb=20161116022415" alt="Eqp Amaterasu's Helm" width={38} height={40} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Eqp_Oyamatsumi%27s_Armor.png/revision/latest?cb=20190807060318" alt="Eqp Oyamatsumi's Armor" width={28} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0b/Eqp_Ame-no-Uzume%27s_Shoes.png/revision/latest?cb=20190807050619" alt="Eqp Ame-no-Uzume's Shoes" width={26} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Tsukuyomi%27s_Gloves.png/revision/latest?cb=20190808060222" alt="Eqp Tsukuyomi's Gloves" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/Eqp_Susano-o%27s_Cape.png/revision/latest?cb=20190808090438" alt="Eqp Susano-o's Cape" width={29} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_Amaterasu%27s_Belt.png/revision/latest?cb=20160831153106" alt="Eqp Amaterasu's Belt" width={28} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9a/Eqp_Susano-o%27s_Epaulet.png/revision/latest?cb=20190808090935" alt="Eqp Susano-o's Epaulet" width={27} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f2/Eqp_Amaterasu%27s_Nimbus_Sword.png/revision/latest?cb=20190806074332" alt="Eqp Amaterasu's Nimbus Sword" width={33} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Gear]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Mori Ranmaru</a>
                <ul>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/40/Eqp_Antique_Root_Gloves.png/revision/latest?cb=20170530235034" alt="Eqp Antique Root Gloves" width={28} height={26} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082688" target="_blank" rel="noreferrer noopener">[Glove]</a> Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coins]</a> or <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f9/Etc_Magnus_Coin.png/revision/latest?cb=20160517231411" alt="Etc Magnus Coin" width={30} height={30} /> <a href="https://maplestory.fandom.com/wiki/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                </li>
                <li><strong>[Lv. 150] </strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1004637/icon" alt="" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9e/Eqp_Enraged_Zakum_Cape.png/revision/latest?cb=20160424044217" alt="Eqp Enraged Zakum Cape" width={33} height={33} /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1132296/icon" alt="" /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1004637" target="_blank" rel="noreferrer noopener">Hat</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1102871" target="_blank" rel="noreferrer noopener">Cape</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132296" target="_blank" rel="noreferrer noopener">Belt</a> ] Dropped by <a href="https://maplestory.fandom.com/wiki/Zakum#Chaos" target="_blank" rel="noreferrer noopener">Chaos Zakum</a>
                </li>
                <li><strong>[Lv. 175+] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Eqp_Tyrant_Hyades_Cloak.png/revision/latest?cb=20141004221626" alt="Eqp Tyrant Hyades Cloak" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Capes]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Magnus/Monster#Hard" target="_blank" rel="noreferrer noopener">Hard Magnus</a>
                <ul>
                    <li>Not recommended because it is expensive to upgrade</li>
                    <li>Can also be bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f9/Etc_Magnus_Coin.png/revision/latest?cb=20160517231411" alt="Etc Magnus Coin" width={30} height={30} /> <a href="https://maplestory.fandom.com/wiki/Magnus_Coin" target="_blank" rel="noreferrer noopener">[Magnus Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
                    <ul>
                        <li>Mayala also sells <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/20/Eqp_Tyrant_Hyades_Belt.png/revision/latest?cb=20160828035503" alt="Eqp Tyrant Hyades Belt" width={33} height={27} /> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Belt" target="_blank" rel="noreferrer noopener">[Lv. 150 Tyrant Belts]</a>
                        </li>
                    </ul>
                    </li>
                    <li>There is a version for each class</li>
                </ul>
                </li>
                <li><strong>[Lv. 160] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a9/Eqp_Sweetwater_Hat.png/revision/latest?cb=20141001015449" alt="Eqp Sweetwater Hat" width={36} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Eqp_Sweetwater_Suit.png/revision/latest?cb=20141001015403" alt="Eqp Sweetwater Suit" width={28} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3d/Eqp_Commerci_Boots.png/revision/latest?cb=20140907033352" alt="Eqp Commerci Boots" width={26} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/22/Eqp_Commerci_Gloves.png/revision/latest?cb=20140917042227" alt="Eqp Commerci Gloves" width={27} height={25} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/31/Eqp_Commerci_Cape.png/revision/latest?cb=20140917045709" alt="Eqp Commerci Cape" width={27} height={27} /><strong />  <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> Dropped from Commerci Voyage Bosses</li>
                <li><strong>[Lv. 160] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/32/Eqp_Sweetwater_Monocle.png/revision/latest?cb=20161101060254" alt="Eqp Sweetwater Monocle" width={32} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Sweetwater_Tattoo.png/revision/latest?cb=20161102002907" alt="Eqp Sweetwater Tattoo" width={23} height={29} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">Eye</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">Face</a> ] Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/56/Etc_Commerci_Denaro.png/revision/latest?cb=20140901070302" alt="Etc Commerci Denaro" width={30} height={22} /> <a href="https://maplestory.fandom.com/wiki/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a> from <a href="https://maplestory.fandom.com/wiki/Javert" target="_blank" rel="noreferrer noopener">Javert</a>
                </li>
                <li><strong>[Lv. 160] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Antellion_Guardian.png/revision/latest?cb=20181026154458" alt="Eqp Antellion Guardian" width={26} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_Subani-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Subani-Roid" width={22} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Dr.Jang-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Dr.Jang-Roid" width={22} height={28} /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">Best-In-Slot Medal</a> / <a href="https://maplestory.fandom.com/wiki/Subani-Roid" target="_blank" rel="noreferrer noopener">Android</a> / <a href="https://maplestory.fandom.com/wiki/Dr.Jang-Roid" target="_blank" rel="noreferrer noopener">Android</a> ] Obtained for completing Masteria Through Time Blockbuster
                <ul>
                    <li>Android has an NPC Vendor function</li>
                    <li>Does not have a Heart provided</li>
                </ul>
                </li>
                <li><strong>[Lv. 170] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_Treasure_Hunter_John%27s_Ring.png/revision/latest?cb=20191222203815" alt="Eqp Treasure Hunter John's Ring" width={26} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/eb/Eqp_Treasure_Hunter_Jack%27s_Scar.png/revision/latest?cb=20160719010837" alt="Eqp Treasure Hunter Jack's Scar" width={23} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Subani%27s_Pendant.png/revision/latest?cb=20181026170542" alt="Eqp Subani's Pendant" width={30} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/14/Eqp_Lukan%27s_Pauldron.png/revision/latest?cb=20160719011447" alt="Eqp Lukan's Pauldron" width={31} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Eqp_Elpam%27s_Belt.png/revision/latest?cb=20160719010359" alt="Eqp Elpam's Belt" width={33} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Eqp_Professor_Foxwit%27s_Glasses.png/revision/latest?cb=20160719010610" alt="Eqp Professor Foxwit's Glasses" width={33} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/04/Eqp_Sheriff_Lita%27s_Earrings.png/revision/latest?cb=20160719012316" alt="Eqp Sheriff Lita's Earrings" width={26} height={30} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Lv. 125 Masteria Explorer Gear]</a> Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/40/Etc_NLC_Commemorative_Coin.png/revision/latest?cb=20191221140943" alt="Etc NLC Commemorative Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/NLC_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[NLC Commemorative Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Spindle#Merchant" target="_blank" rel="noreferrer noopener">Spindle</a>
                </li>
                <li><strong>[Lv. 180]</strong>  <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Glona%27s_Heart.png/revision/latest?cb=20200116033305" alt="Eqp Glona's Heart" width={30} height={30} /> <a href="https://maplestory.fandom.com/wiki/Glona%27s_Heart" target="_blank" rel="noreferrer noopener">[Ring]</a> Bought with <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Etc_Shadowknight_Coin.png/revision/latest?cb=20191227231213" alt="Etc Shadowknight Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> and Mesos from <a href="https://maplestory.fandom.com/wiki/Fiona" target="_blank" rel="noreferrer noopener">Fiona</a>
                <ul>
                    <li>Unless you are really trying to optimize your gear, ring is not required</li>
                </ul>
                </li>
                <li><strong>[Lv. 180+] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Eqp_Cracked_Gollux_Earrings.png/revision/latest?cb=20170126065516" alt="Eqp Cracked Gollux Earrings" width={37} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Eqp_Solid_Gollux_Ring.png/revision/latest?cb=20151120014059" alt="Eqp Solid Gollux Ring" width={33} height={35} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5b/Eqp_Reinforced_Engraved_Gollux_Pendant.png/revision/latest?cb=20150922083724" alt="Eqp Reinforced Engraved Gollux Pendant" width={34} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_Superior_Engraved_Gollux_Belt.png/revision/latest?cb=20150922083726" alt="Eqp Superior Engraved Gollux Belt" width={40} height={31} /> [<a href="https://maplestory.fandom.com/wiki/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">Cracked</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">Solid</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">Reinforced</a> / <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">Superior</a> Gollux Accessories] Obtained from defeating Gollux or bought with <a href="https://maplestory.fandom.com/wiki/Gollux_Coin">[Gollux Coins]</a> from <a href="https://maplestory.fandom.com/wiki/Lucia" target="_blank" rel="noreferrer noopener">Lucia</a>
                <ul>
                    <li>Revamped Gollux HP: <a href="https://imgur.com/a/iSOdwz6" target="_blank" rel="noreferrer noopener">https://imgur.com/a/iSOdwz6</a>
                    </li>
                </ul>
                </li>
                <li><strong>[Lv. 180+] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d5/Setup_Root_Abyss_Master.png/revision/latest?cb=20170618013328" alt="Setup Root Abyss Master" width={34} height={31} /> <a href="https://maplestory.fandom.com/wiki/Root_Abyss_Master" target="_blank" rel="noreferrer noopener">[Title]</a> Obtained by defeating each Chaos Root Abyss boss 10 times</li>
                <li><strong>[Lv. 200]</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/Eqp_Last_Unwelcome_Guest_Ring.png/revision/latest?cb=20151122063239" alt="Eqp Last Unwelcome Guest Ring" width={33} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Eqp_Last_Unwelcome_Guest_Necklace.png/revision/latest?cb=20160813201657" alt="Eqp Last Unwelcome Guest Necklace" width={32} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Eqp_Last_Unwelcome_Guest_Earrings.png/revision/latest?cb=20160813201545" alt="Eqp Last Unwelcome Guest Earrings" width={30} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Last_Unwelcome_Guest_Belt.png/revision/latest?cb=20160813201747" alt="Eqp Last Unwelcome Guest Belt" width={34} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ac/Eqp_Rare_Alien_Fragment_Helmet.png/revision/latest?cb=20150130204216" alt="Eqp Rare Alien Fragment Helmet" width={34} height={34} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Alien_Fragment_Set">[Lv. 180 Alien Fragment Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2e/Eqp_VIP_Bow.png/revision/latest?cb=20190519021335" alt="Eqp VIP Bow" width={37} height={38} /> [Alien Fragment Weapons] can be obtained from <a href="https://maplestory.fandom.com/wiki/Category%3AAlien_Visitor" target="_blank" rel="noreferrer noopener">Alien Visitor</a></li>
                <li><strong>[Lv. 200+] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Ring_of_Restraint.png/revision/latest?cb=20160210033306" alt="Eqp Ring of Restraint" width={27} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/Eqp_Ultimatum_Ring.png/revision/latest?cb=20160217030325" alt="Eqp Ultimatum Ring" width={32} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d3/Eqp_Limit_Ring.png/revision/latest?cb=20170829015203" alt="Eqp Limit Ring" width={27} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/06/Eqp_Health_Cut_Ring.png/revision/latest?cb=20170829022018" alt="Eqp Health Cut Ring" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Ring#Tower%20of%20Oz%20Rings" target="_blank" rel="noreferrer noopener">[Tower of Oz Rings]</a> Obtained from
                <img alt="" src="https://i.imgur.com/aCbxas2.png" /> [Alica's Ring Boxes] from Tower of Oz</li>
                <li><strong>[Lv. 210+] </strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Eqp Guardian Angel Ring"/> <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noopener noreferrer">[Guardian Angel Ring]</a> Dropped by <a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Guardian Angel Slime</a>
                    <ul>
                        <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Boss_Accessory_Set" target="_blank" rel="noreferrer noopener">Boss Accessory Set</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <h4>Boss Armor:</h4>
            <ul>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment?from=Frozen+Hat" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats</li>
                <li>Considered the main gear to strive because they are Boss Items</li>
            </ul>
            <ul>
                <li><strong>[Hilla] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9f/Eqp_Necromancer_Warrior_Hat.png/revision/latest?cb=20150129071244" alt="Eqp Necromancer Warrior Hat" width={34} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Eqp_Necromancer_Magician_Suit.png/revision/latest?cb=20171004070858" alt="Eqp Necromancer Magician Suit" width={25} height={32} />  <img src="https://maplestory.io/api/GMS/220/item/1072952/icon" alt="Eqp Necromancer Warrior Shoes" width={26} height={32} />  <img src="https://maplestory.io/api/GMS/220/item/1082593/icon" alt="Eqp Necromancer Warrior Gloves" width={31} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d9/Eqp_Necro_Terror.png/revision/latest?cb=20171005004714" alt="Eqp Necro Terror" width={35} height={35} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>
                </li>
                <li><strong>[Von Leon <em>(Hard Mode) </em>+ </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Etc_Royal_Lion_King_Medal.png/revision/latest?cb=20170331050307" alt="Etc Royal Lion King Medal" width={29} height={29} /> <strong>] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/58/Eqp_Marx_Von_Leon_Helmet.png/revision/latest?cb=20130712064422" alt="Eqp Marx Von Leon Helmet" width={31} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/09/Eqp_Marx_Von_Leon_Battle_Suit.png/revision/latest?cb=20151030205905" alt="Eqp Marx Von Leon Battle Suit" width={31} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3d/Eqp_Marx_Von_Leon_War_Boots.png/revision/latest?cb=20130712064435" alt="Eqp Marx Von Leon War Boots" width={23} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/94/Eqp_Marx_Von_Leon_Gloves.png/revision/latest?cb=20130712064440" alt="Eqp Marx Von Leon Gloves" width={31} height={28} /> <img src="https://maplestory.io/api/GMS/220/item/1102262/icon" alt="Eqp Marx Von Leon Cape" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e2/Eqp_Marx_Von_Leon_Sabre.png/revision/latest?cb=20170924215041" alt="Eqp Marx Von Leon Sabre" width={37} height={36} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Royal Von Leon Gear]</a>
                </li>
                <li><strong>[Cygnus </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Use_Piece_of_Darkness.png/revision/latest?cb=20161009231702" alt="Use Piece of Darkness" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Use_Piece_of_Ruin.png/revision/latest?cb=20160502042755" alt="Use Piece of Ruin" width={30} height={30} /> <strong>] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Lionheart_Battle_Helm.png/revision/latest?cb=20150130081706" alt="Eqp Lionheart Battle Helm" width={36} height={33} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/36/Eqp_Dragon_Tail_Mage_Robe.png/revision/latest?cb=20130710141254" alt="Eqp Dragon Tail Mage Robe" width={31} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/Eqp_Raven_Horn_Chaser_Boots.png/revision/latest?cb=20160208185245" alt="Eqp Raven Horn Chaser Boots" width={25} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Eqp_Falcon_Wing_Sentinel_Gloves.png/revision/latest?cb=20160910014820" alt="Eqp Falcon Wing Sentinel Gloves" width={27} height={25} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Lionheart_Battle_Cape.png/revision/latest?cb=20130710141311" alt="Eqp Lionheart Battle Cape" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Eqp_Lionheart_Battle_Shoulder.png/revision/latest?cb=20130710141306" alt="Eqp Lionheart Battle Shoulder" width={38} height={33} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Lionheart_Cutlass.png/revision/latest?cb=20160511031541" alt="Eqp Lionheart Cutlass" width={43} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a>
                </li>
                <li><strong>[Chaos Root Abyss </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/Use_Piece_of_Anguish.png/revision/latest?cb=20160430041012" alt="Use Piece of Anguish" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/38/Use_Piece_of_Mockery.png/revision/latest?cb=20160430040709" alt="Use Piece of Mockery" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/Use_Piece_of_Time.png/revision/latest?cb=20160430021101" alt="Use Piece of Time" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/Use_Piece_of_Destruction.png/revision/latest?cb=20160430041230" alt="Use Piece of Destruction" width={30} height={30} /> <strong>] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Eqp_Eagle_Eye_Dunwitch_Robe.png/revision/latest?cb=20160501235242" alt="Eqp Eagle Eye Dunwitch Robe" width={31} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Trixter_Ranger_Pants.png/revision/latest?cb=20160502023550" alt="Eqp Trixter Ranger Pants" width={27} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_Fafnir_Mistilteinn.png/revision/latest?cb=20151107043901" alt="Eqp Fafnir Mistilteinn" width={35} height={35} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 CRA Gear]</a>
                </li>
                <li><strong>[Damien / Lotus </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/Etc_AbsoLab_Coin.png/revision/latest?cb=20160926034628" alt="Etc AbsoLab Coin" width={27} height={26} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e6/Etc_Stigma_Coin.png/revision/latest?cb=20160926034615" alt="Etc Stigma Coin" width={27} height={26} /> <strong>] </strong> <img src="https://maplestory.io/api/GMS/220/item/1004422/icon" alt="Eqp AbsoLab Knight Helm" width={34} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1f/Eqp_AbsoLab_Mage_Suit.png/revision/latest?cb=20150830053259" alt="Eqp AbsoLab Mage Suit" width={28} height={32} />  <img src="https://maplestory.io/api/GMS/220/item/1073030/icon" alt="Eqp AbsoLab Knight Shoes" width={28} height={32} />  <img src="https://maplestory.io/api/GMS/220/item/1082636/icon" alt="Eqp AbsoLab Knight Gloves" width={32} height={30} /> <img src="https://maplestory.io/api/GMS/220/item/1102775/icon" alt="Eqp AbsoLab Knight Cape" width={34} height={33} />  <img src="https://maplestory.io/api/GMS/220/item/1152174/icon" alt="Eqp AbsoLab Knight Shoulder" width={34} height={33} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_AbsoLab_Saber.png/revision/latest?cb=20160719054959" alt="Eqp AbsoLab Saber" width={33} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Absolute_Labs_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 160 Absolab Gear]</a>
                </li>
                <li><strong>[Lucid / Will </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Etc_Phantasma_Coin.png/revision/latest?cb=20180329024358" alt="Etc Phantasma Coin" width={27} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7f/Etc_Arachno_Coin.png/revision/latest?cb=20180714060536" alt="Etc Arachno Coin" width={27} height={27} /><strong>] </strong> <img src="https://maplestory.io/api/GMS/220/item/1004808/icon" alt="Eqp Arcane Umbra Knight Hat" width={37} height={36} /> <img src="https://maplestory.io/api/GMS/220/item/1053064/icon" alt="Eqp Arcane Umbra Mage Suit" width={32} height={32} />  <img src="https://maplestory.io/api/GMS/220/item/1073158/icon" alt="Eqp Arcane Umbra Knight Shoes" width={26} height={30} /> <img src="https://maplestory.io/api/GMS/220/item/1082695/icon" alt="Eqp Arcane Umbra Knight Gloves" width={30} height={25} />  <img src="https://maplestory.io/api/GMS/220/item/1102940/icon" alt="Eqp Arcane Umbra Knight Cape" width={37} height={33} />  <img src="https://maplestory.io/api/GMS/220/item/1152196/icon" alt="Eqp Arcane Umbra Knight Shoulder" width={32} height={27} /> <img src="https://maplestory.io/api/GMS/220/item/1302343/icon" alt="Eqp Arcane Umbra Saber" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 200 Arcane Umbra Gear]</a>
                </li>
            </ul>
            <h4>Boss Accessories:</h4>
            <ul>
                <li>Part of the <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Pitched_Boss_Set" target="_blank" rel="noreferrer noopener">Pitched Boss Accessory Set</a>
                </li>
                <li>Considered a <a href="https://maplestory.fandom.com/wiki/Category:Boss_Reward_Equipment?from=Frozen+Hat" target="_blank" rel="noreferrer noopener">Boss Item</a> for Flames/Bonus Stats if applicable</li>
                <li>Items here at very rare and hard to get, considered end game</li>
                <li><strong>[Lotus <em>(Hard Mode)</em>] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/Eqp_Black_Heart.png/revision/latest?cb=20171208060241" alt="Eqp Black Heart" width={30} height={32} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Berserked.png/revision/latest?cb=20171208054253" alt="Eqp Berserked" width={23} height={29} /> [<a href="https://maplestory.fandom.com/wiki/Black_Heart" target="_blank" rel="noreferrer noopener">Lv. 120 Heart</a> / <a href="https://maplestory.fandom.com/wiki/Berserked" target="_blank" rel="noreferrer noopener">Lv. 160 Face</a> ]
                <ul>
                    <li>Heart is a time-limited item, time limit cannot be extended</li>
                </ul>
                </li>
                <li><strong>[Damien</strong>  <em><strong>(Hard Mode)</strong></em>] <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Magic_Eyepatch.png/revision/latest?cb=20171208055917" alt="Eqp Magic Eyepatch" width={31} height={20} /> <a href="https://maplestory.fandom.com/wiki/Magic_Eyepatch" target="_blank" rel="noreferrer noopener">[ Lv. 160 Eye ]</a>
                </li>
                <li><strong>[Verus Hilla] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Source_of_Suffering.png/revision/latest?cb=20181116001717" alt="Eqp Source of Suffering" width={36} height={36} /> <a href="https://maplestory.fandom.com/wiki/Source_of_Suffering" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pendant ]</a>
                </li>
                <li><strong>[Will <em>(Hard Mode)</em>] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Eqp_Cursed_Red_Spellbook.png/revision/latest?cb=20180702021659" alt="Eqp Cursed Red Spellbook" width={38} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Cursed_Blue_Spellbook.png/revision/latest?cb=20180702022133" alt="Eqp Cursed Blue Spellbook" width={38} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_Cursed_Green_Spellbook.png/revision/latest?cb=20180702022320" alt="Eqp Cursed Green Spellbook" width={37} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d4/Eqp_Cursed_Yellow_Spellbook.png/revision/latest?cb=20180702022434" alt="Eqp Cursed Yellow Spellbook" width={38} height={36} /> <a href="https://maplestory.fandom.com/wiki/Cursed_Red_Spellbook" target="_blank" rel="noreferrer noopener">[ Lv. 160 Pocket Item ]</a>
                </li>
                <li><strong>[Lucid (Hard Mode)] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Dreamy_Belt.png/revision/latest?cb=20170924211825" alt="Eqp Dreamy Belt" width={36} height={35} /> <a href="https://maplestory.fandom.com/wiki/Dreamy_Belt" target="_blank" rel="noreferrer noopener">[ Lv. 200 Belt ]</a>
                </li>
                <li><strong>[Gloom] </strong> <img src="https://maplestory.io/api/GMS/214/item/1113306/icon" alt="Endless Terror Ring" width={35} height={29} /> <a href="https://maplestory.wiki/GMS/214/item/1113306" target="_blank" rel="noreferrer noopener">[ Lv. 200 Ring ]</a>
                </li>
                <li><strong>[Darknell] </strong> <img src="https://maplestory.io/api/GMS/214/item/1032316/icon" alt="Commanding Force Earring" width={35} height={29} /> <a href="https://maplestory.wiki/GMS/214/item/1032316" target="_blank" rel="noreferrer noopener">[ Lv. 200 Earrings]</a>
                </li>
                <li><strong>[Black Mage] </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Eqp_Genesis_Badge.png/revision/latest?cb=20190120225321" alt="Eqp Genesis Badge" width={35} height={29} /> <a href="https://maplestory.wiki/GMS/218/item/1182285" target="_blank" rel="noreferrer noopener">[ Lv. 200 Badge ]</a>
                </li>
            </ul>
            <h3>Progression towards Midgame:</h3>
            <hr />
            <p>For info on upgrading and enhancing gear check out: <a rel="noreferrer noopener" href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a>
            </p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h4 id="spelltrace"> <img src="https://maplestory.io/api/GMS/210.1.1/item/2433943/icon" alt="" /> Spell Tracing in Regular Servers:</h4>
            <hr />
            <p>For regular servers, be sure to upgrade all your gear with at least 70% Spell Tracing so that you can start Star Forcing your gear as well. On average, 70% Spell Tracing provides an optimal amount of stats compared to just 100% Spell Tracing your equipment</p>
            <p>In Reboot Servers, Spell Traces are useless and can be sold to NPCs for extra Mesos</p>
            <img className="repository-image" src="https://i.imgur.com/9G06UGW.png" alt="Equipment Enhance" />
            <img className="repository-image" src="https://i.imgur.com/oxEJSYJ.png" alt="Enhance Button" />
            <p>You can open the Equipment Enchant menu for Spell Tracing and Star Forcing by either pressing "O" by default or through your inventory by pressing the <strong>red button with a hammer</strong>
            </p>
            <p>Some ways to obtain Spell Traces are:</p>
            <ul>
                <li>Monster drops</li>
                <li>Surprise Missions</li>
                <li>Inferno Wolf + Pollo/Frito Missions</li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} /> Crusader Coin shop</li>
            </ul>
            <p><strong>Spell Trace Fever:</strong>
            </p>
            <img className="repository-image" src="https://i.imgur.com/9zituYr.png" alt="Spell Trace Fever" />
            <p>Occasionally on Regular Servers, there are special events that take place where Spell Trace enhancements have a higher success rate. These are the best times to upgrade equipment you plan to invest a lot of time into. Unless you are planning to perfect a piece of equipment, you do not need to wait for this event to start Spell Tracing</p>
            <p><strong>50% Off Spell Tracing:</strong>
            </p>
            <p>Occasionally on Regular Servers, during Sunny Sundays, there are events where Spell Tracing will cost half the amount. This is a good time to use Spell Traces on (Ark) Innocence Scrolls or Clean Slates but, Spell Trace Fever is much better still because of the increased rates. Also, using regular 10% Clean Slates and 50% Innocence Scrolls will probably be more cost-effective than using the Spell Tracing versions</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h4 id="starforce">Star Forcing:</h4>
            <hr />
            <img className="repository-image" src="https://support-maplestory.nexon.net/hc/article_attachments/360057675372/starforce.png" alt="Star Force Example" />
            <p>Once you have consumed all upgrade slots, you may star force/enhance your gear. In Reboot, there are no upgrade slots, so you just star force/enhance instead. Star Forcing costs Mesos that grants increased stats on success</p>
            <p>A recommended amount of stars you want for each piece of equipment is around 10 - 12 stars early on but optimally all gear at 12 stars</p>
            <p>Occasionally there are events with shops that sell <img src="https://maplestory.io/api/GMS/210.1.1/item/2049370/icon" alt="" />[Star Enhancement Scrolls] which sets an equipment's Star Force to the said amount. There is normally one that enhances your gear to <a href="https://maplestory.wiki/GMS/210.1.1/item/2049378" target="_blank" rel="noreferrer noopener">15-stars</a> that you can get from events if you do not have enough Mesos to Star Force. Past 15 stars, equipment start to see a clear difference from equipment with fewer stars</p>
            <p><strong>30% Star Force Discount:</strong>
            </p>
            <p>Occasionally on Sunny Sundays, there is an event where Star Forcing prices are discounted by 30%. These are the best times to Star Force if you are trying to reach above 15 stars. If you are just Star Forcing regularly to 12 stars, you do not need to wait for this to happen</p>
            <p><strong>5/10/15 Star Force 100%:</strong>
            </p>
            <p>Occasionally on Sunny Sundays, there is an event where enhancing to 5, 10, or 15 Star Force, the success rate is guaranteed. This is also a good time to try reaching to 15 stars but is not necessary to start Star Forcing your gear</p>
            <p><strong>1+1 Event:</strong>
            </p>
            <p>Occasionally on Sunny Sundays, there is an event where for every Star Force enhancement below 10 Stars, you gain 2 stars. This is also a good time to try reaching to 15 stars since you essentially only need to keep trying from 12 Stars, but is not necessary to start Star Forcing your gear</p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h4 id="additionalstats">Bonus Stats:</h4>
            <hr />
            <p>For now you do not need to worry too much about Bonus Stats and Rebirth Flames. If you do obtain a special rebirth flame, feel free to use it on anything or on regular servers, you can sell them (if tradeable)</p>
            <p>Some nice stats to reroll into is your Main Stat, %All Stat, %Boss Damage or Attack/Magic Attack</p>
            <hr />
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
            <div><Link smooth href="#top">Go to top</Link></div>
            <h4 id="transferhammer">Transfer Hammer:</h4>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/W6T3Q8C.png" alt="Transfer Hammer UI" />
            <p>Transfer Hammer is a system that allows you to transfer Star Force, Potentials, Bonus Potentials, and Soul Weapon from one equipment to another (with restrictions). The following will not be transferred, Scrolled Stats and Bonus Stats. Additionally, you will lose one Star Force while transferring and any potentials above Epic will be dropped down to Epic Potential. You can only transfer equipment up to 10 levels apart of each other. For equipment below Lv. 100, you can transfer up to 20 levels apart</p>
            <p>Some requirements for Transfer Hammering is that the piece of equipment must have at least 1 Star Force, cannot be Superior Gear (such as Tyrants) and must be the same equipment type (regardless of job group). Overalls can be counted towards both as a top or bottom and vice versa</p>
            <p>In regular servers, any remaining upgrade slots will be filled by 100% Spell Traces for free. You can choose which stat you want the upgrades to be. I recommend that you already Upgrade/Spell Trace the Transferring Item first if you do not want the 100% Spell Trace stats</p>
            <p>Transfer Hammer is most useful early game for obtaining Epic Potential gear by obtaining <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0a/Eqp_Purple_Senior_Cap.png/revision/latest?cb=20160211210601" alt="Eqp Purple Senior Cap" width={31} height={16} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/12/Eqp_Purple_Senior_Gloves.png/revision/latest?cb=20170302225918" alt="Eqp Purple Senior Gloves" width={24} height={24} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Eqp_Purple_Senior_Shoes.png/revision/latest?cb=20180825035422" alt="Eqp Purple Senior Shoes" width={23} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/Eqp_Purple_Senior_Suit.png/revision/latest?cb=20180825034658" alt="Eqp Purple Senior Suit" width={27} height={30} /> Lv. 60 Purple Senior Equipment which is guaranteed to be Epic Potential and transferring it all the way up to your desired gear. Purple Senior gear also has a cheaper cost to reroll the potential compared to higher level gear</p>
            <img className="repository-image" src="https://i.imgur.com/9Dh4n89.png" alt="Transfer Hammer Button" />
            <p>To begin Transfer Hammering, you can access the UI from your Inventory by<strong> pressing the blue hammer icon</strong> For more info on Transfer Hammer, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Transfer_Hammer" target="_blank">https://strategywiki.org/wiki/MapleStory/Transfer_Hammer</a>
            </p>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h4 id="epicgear">Epic Potential Gear and so on:</h4>
            <hr />
            <p>Early game you want to have all your gear at least 9% Main Stat and Epic Potential. You will also be wanting to be working towards Unique Potential gear. Your main focus for this would be to try and get your Weapon, Secondary Weapon, and Emblem to unique first as their potentials can provide special stats like %Attack/Magic Attack, %Ignore DEF and %Boss Damage unlike the rest of your gear. As a note, do not keep %Damage lines as they do not provide as much as a boost as the other potential lines do</p>
            <p>Additionally, be sure all your equipment have 3 lines of potential instead of 2. Use <img src="https://maplestory.io/api/GMS/215/item/2049500/icon" alt="Gold Potential Stamp" /> <a href="https://maplestory.wiki/GMS/215/item/2049500" target="_blank" rel="noreferrer noopener">[Gold Potential Stamp]</a> to unlock a 3rd line if needed</p>
            <p>Do not be afraid to use expiring <img src="https://maplestory.io/api/GMS/210.1.1/item/2432083/icon" alt="" /> <a href="https://maplestory.wiki/GMS/218/item/2711005" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cubes]</a> as it's better to use them than waste it. As well, take that risk of rerolling your "okay" potentials for "great" potentials as they are easily replaceable (unless you have that 36% main stat)</p>
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
                    <li>Search for <img src="https://maplestory.io/api/GMS/215/item/2049506/icon" alt="Perfect Potential Stamp" /> <a href="https://maplestory.wiki/GMS/215/item/2049506" target="_blank" rel="noreferrer noopener">[Perfect Potential Stamp]</a>
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
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="bosses">[ &lt; 2k Main Stat] Earlygame Bosses:</h3>
            <hr />
            <p>Bosses listed are in a sort of easiest to hardest order but don't be afraid to try them out yourself. The amount of Main Stat listed is just a safe recommendation, your class may be able to defeat a boss with lower stat if you have the damage or the right mechanics</p>
            <p>As well, it should be noted, a better, more general guide would be to consider which floor you can reach in Mu Lung Dojo although neither is perfectly accurate. The best way to check if you can defeat a boss is by trying, especially in Practice Mode when applicable</p>
            <p>To view bosses by Dojo floors, check out: <a href="https://i.imgur.com/9u2Z6vq.png" target="_blank" rel="noreferrer noopener">https://i.imgur.com/9u2Z6vq.png</a></p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/ElNathDungeon_icon.png/revision/latest?cb=20121014185718&path-prefix=pl" alt="ElNathDungeon icon" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener"><strong>Normal Zakum</strong></a>: Source of good EXP early game from Normal Mode
                <ul>
                    <li><strong>Source of Mesos in Reboot from</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/26/Eqp_Zakum%27s_Poisonic_Sword.png/revision/latest?cb=20151209080801" alt="Eqp Zakum's Poisonic Sword" width={34} height={34} /> <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> that can be sold for Mesos</li>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} />  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Eqp_Zakum_Helmet.png/revision/latest?cb=20151116042441" alt="Eqp Zakum Helmet" width={36} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>
                    </li>
                    <li><strong>Normal/Chaos Mode Only Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/68/Eqp_Chaos_Zakum_Helmet.png/revision/latest?cb=20140923211822" alt="Eqp Chaos Zakum Helmet" width={40} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003112" target="_blank" rel="noreferrer noopener">[(Chaos Only) Chaos Zakum Helmet]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/26/Eqp_Zakum%27s_Poisonic_Sword.png/revision/latest?cb=20151209080801" alt="Eqp Zakum's Poisonic Sword" width={34} height={34} /> <a href="https://maplestory.fandom.com/wiki/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/93/Eqp_Condensed_Power_Crystal.png/revision/latest?cb=20151122090112" alt="Eqp Condensed Power Crystal" width={23} height={29} /> <a href="https://maplestory.fandom.com/wiki/Condensed_Power_Crystal">[</a><a href="https://maplestory.wiki/GMS/210.1.1/item/1012478" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Eqp_Aquatic_Letter_Eye_Accessory.png/revision/latest?cb=20150915005340" alt="Eqp Aquatic Letter Eye Accessory" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022231" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Mobicon_Ursus.png/revision/latest?cb=20160205050520" alt="Mobicon Ursus" width={24} height={25} />  <strong><a href="https://maplestory.fandom.com/wiki/Ursus" target="_blank" rel="noreferrer noopener">Ursus</a></strong>
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Important]: </strong>In Reboot servers, the amount of Mesos rewarded is increased and is considered a main activity</li>
                    <li>For more info on Ursus, check this out: <a href="https://strategywiki.org/wiki/MapleStory/Ursus" target="_blank" rel="noreferrer noopener">https://strategywiki.org/wiki/MapleStory/Ursus</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/223/map/220080001/icon" alt="MapIcon Papulatus Clock"/> <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Easy Papulatus</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Etc_Crusader_Coins.png/revision/latest?cb=20170331044758" alt="Etc Crusader Coins" width={27} height={25} />  <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">[Crusader Coin]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e7/Eqp_Timeless_Fennel.png/revision/latest?cb=20150129071634" alt="Eqp Timeless Fennel" width={33} height={29} /> [Lv. 120 Gear]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/MapIcon_Magnus.png/revision/latest?cb=20141124064756" alt="MapIcon Magnus" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Magnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Magnus</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Normal/Hard Only)</em> Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ed/Eqp_Elite_Heliseum_Belt.png/revision/latest?cb=20160828035418" alt="Eqp Elite Heliseum Belt" width={33} height={27} /> <a href="https://maplestory.fandom.com/wiki/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7d/Eqp_Blue_Dragon_Boots.png/revision/latest?cb=20171017030458" alt="Eqp Blue Dragon Boots" width={28} height={32} /> [Level 110 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Eqp_Crystal_Ventus_Badge.png/revision/latest?cb=20150911184149" alt="Eqp Crystal Ventus Badge" width={33} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182087" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Eqp_Royal_Black_Metal_Shoulder.png/revision/latest?cb=20160106224701" alt="Eqp Royal Black Metal Shoulder" width={30} height={33} /> <a href="https://maplestory.fandom.com/wiki/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> [Elixir %HP/MP Potions], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ac/Use_Rebirth_Flame_Lv._110.png/revision/latest?cb=20180414202217" alt="Use Rebirth Flame Lv. 110" width={27} height={33} /> [Lv. 110 Rebirth Flame], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> [Occult Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Soul_Shard.png/revision/latest?cb=20180112052625" alt="Use Soul Shard" width={29} height={25} /> [Soul Shard], <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">[Shadowdealer Coin]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> [Intense Power Crystal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9f/MapIcon_Hilla.png/revision/latest?cb=20140928235713" alt="MapIcon Hilla" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Hilla/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Hilla</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d9/Eqp_Stone_of_Eternal_Life.png/revision/latest?cb=20151122223004" alt="Eqp Stone of Eternal Life" width={30} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162009" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Eqp_Blue_Dragon_Helmet.png/revision/latest?cb=20150130205928" alt="Eqp Blue Dragon Helmet" width={33} height={32} /> [Lv. 110 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9f/Eqp_Necromancer_Warrior_Hat.png/revision/latest?cb=20150129071244" alt="Eqp Necromancer Warrior Hat" width={34} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> [Elixir], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Use_Rebirth_Flame_Lv._120.png/revision/latest?cb=20180414204202" alt="Use Rebirth Flame Lv. 120" width={27} height={33} /> [Rebirth Flame], <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/31/Use_%28Pet_Box%29_Blackheart.png/revision/latest?cb=20181028081359" alt="Use (Pet Box) Blackheart" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <h3 id="bosses">[ &gt; 3k Main Stat] Earlygame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_GiantVellud.png/revision/latest?cb=20140926175935" alt="MapIcon GiantVellud" width={36} height={37} /> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Easy/Normal Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points and <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a>
                    </li>
                    <li><strong>Main Rewards:</strong> <img src="https://maplestory.io/api/GMS/222/item/4310289/icon" alt="Etc Gollux Penny"/> [Gollux Penny], <img src="https://maplestory.io/api/GMS/222/item/1032220/icon" alt="Eqp Cracked Gollux Earrings"/> <img src="https://maplestory.io/api/GMS/222/item/1113072/icon" alt="Eqp Cracked Gollux Ring"/> <img src="https://maplestory.io/api/GMS/222/item/1122264/icon" alt="Eqp Cracked Engraved Gollux Pendant"/> <img src="https://maplestory.io/api/GMS/222/item/1132243/icon" alt="Eqp Cracked Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Cracked_Gollux_Set" target="_blank" rel="noreferrer noopener">[Cracked Gollux Accessories]</a>, <img src="https://maplestory.io/api/GMS/222/item/1032221/icon" alt="Eqp Solid Gollux Earrings"/> <img src="https://maplestory.io/api/GMS/222/item/1113073/icon" alt="Eqp Solid Gollux Ring"/> <img src="https://maplestory.io/api/GMS/222/item/1122265/icon" alt="Eqp Solid Engraved Gollux Pendant"/> <img src="https://maplestory.io/api/GMS/222/item/1132244/icon" alt="Eqp Solid Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Solid_Gollux_Set" target="_blank" rel="noreferrer noopener">[Solid Gollux Accessories (Normal and above)]</a>
                    </li>
                    <li>Gollux Pennies <img src="https://maplestory.io/api/GMS/222/item/4310289/icon" alt="Etc Gollux Penny"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Normal Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/Etc_Yggdrasil_Rune.png/revision/latest?cb=20180329025907" alt="Etc Yggdrasil Rune" width={33} height={35} />[Yggdrasil Coin], <img src="https://maplestory.io/api/GMS/210.1.1/item/3010514/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010513/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010512/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010515/icon" alt="" />[Chair]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/58/MapIcon_Hontale.png/revision/latest?cb=20141220001329" alt="MapIcon Hontale" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Horntail" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal/Chaos Horntail</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Chaos Only)</em> Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy Mode and Above Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1113149" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Dea_Sidus_Earring.png/revision/latest?cb=20151115034904" alt="Eqp Dea Sidus Earring" width={32} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032241" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Eqp_Horntail_Necklace.png/revision/latest?cb=20151121064432" alt="Eqp Horntail Necklace" width={30} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122000" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Eqp_Muspell_Warrior_Hat.png/revision/latest?cb=20150129073125" alt="Eqp Muspell Warrior Hat" width={33} height={29} /> [Lv. 130 Gear]</li>
                    <li><strong>Normal/Chaos Mode Only Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/19/Eqp_Pensalir_Battle_Helm.png/revision/latest?cb=20150129073124" alt="Eqp Pensalir Battle Helm" width={35} height={20} />[Lv. 140 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/85/Eqp_Chaos_Horntail_Necklace.png/revision/latest?cb=20140923211712" alt="Eqp Chaos Horntail Necklace" width={34} height={33} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122076" target="_blank" rel="noreferrer noopener">[(Chaos Only) Chaos Horntail Necklace]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b4/MapIcon_VanLeon.png/revision/latest?cb=20100909103717" alt="MapIcon VanLeon" width={38} height={38} /> <strong> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Easy/Normal/Hard Von Leon</a></strong>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy/Normal/Hard Mode Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e7/Eqp_Timeless_Fennel.png/revision/latest?cb=20150129071634" alt="Eqp Timeless Fennel" width={33} height={29} /> [Lv. 120 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Eqp_Muspell_Warrior_Hat.png/revision/latest?cb=20150129073125" alt="Eqp Muspell Warrior Hat" width={33} height={29} /> [<em>(Normal/Hard only)</em> Lv. 130 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> [Elixir], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Use_Rebirth_Flame_Lv._120.png/revision/latest?cb=20180414204202" alt="Use Rebirth Flame Lv. 120" width={27} height={33} /> [Rebirth Flame], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Soul_Shard.png/revision/latest?cb=20180112052625" alt="Use Soul Shard" width={29} height={25} /> [Soul Shard], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> [Occult Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={32} /> [Master Craftsman's Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Etc_Royal_Lion_King_Medal.png/revision/latest?cb=20170331050307" alt="Etc Royal Lion King Medal" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Royal_Lion_King_Medal">[Von Leon Gear Currency]</a>
                    </li>
                    <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Etc_Royal_Lion_King_Medal.png/revision/latest?cb=20170331050307" alt="Etc Royal Lion King Medal" width={29} height={29} /> exchange for <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Lionheart_Battle_Helm.png/revision/latest?cb=20150130081706" alt="Eqp Lionheart Battle Helm" width={36} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Lionheart_Cutlass.png/revision/latest?cb=20160511031541" alt="Eqp Lionheart Cutlass" width={43} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/94/MapIcon_Ranmaru.png/revision/latest?cb=20150105042228" alt="MapIcon Ranmaru" width={38} height={38} /> <strong> <a href="https://maplestory.fandom.com/wiki/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Normal/Madman Mori Ranmaru</a></strong>
                <ul>
                    <li>Madman requires much more range than Normal (close to 10k Main Stat)
                    <ul>
                        <li>Madman also grants a lot of EXP for defeating</li>
                    </ul>
                    </li>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Madman Only)</em> Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e7/Eqp_Timeless_Fennel.png/revision/latest?cb=20150129071634" alt="Eqp Timeless Fennel" width={33} height={29} /> [Lv. 120 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bf/Eqp_Amaterasu%27s_Helm.png/revision/latest?cb=20161116022415" alt="Eqp Amaterasu's Helm" width={38} height={40} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Lv. 150 Japanese Armor]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Use_Powerful_Rebirth_Flame.png/revision/latest?cb=20180414204835" alt="Use Powerful Rebirth Flame" width={28} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fa/Use_Eternal_Rebirth_Flame.png/revision/latest?cb=20180414204824" alt="Use Eternal Rebirth Flame" width={28} height={34} /> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Special Rebirth Flames]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/220/map/800023024/icon" alt="Showa Town Map Icon"/> <a href="https://maplestory.fandom.com/wiki/Yakuza_Boss" target="_blank" rel="noopener noreferrer"><strong>Yakuza Boss</strong></a>
                    <ul>
                        <li>Source of <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="32" height="38" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Main Rewards: <img src="https://maplestory.io/api/GMS/220/item/1402211/icon" alt="Eqp Terminus Divider"/><img src="https://maplestory.io/api/GMS/220/item/1472227/icon" alt="Eqp Terminus Executioner"/><img src="https://maplestory.io/api/GMS/220/item/1092113/icon" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="https://maplestory.io/api/JMS/393/item/2631425/icon" alt="Showa Town Damage Skin"/><img src="https://maplestory.io/api/JMS/393/item/2631513/icon" alt="Fire Racoon Damage Skin"/> [Damage Skins]</strong></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/220/map/231050000/icon" alt="Mushroom Shrine Icon"/> <a href="https://maplestory.fandom.com/wiki/Gigatoad" target="_blank" rel="noopener noreferrer"><strong>Gigatoad</strong></a>
                    <ul>
                    <li>Source of <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="32" height="38" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Normal Mode and Above Rewards: <img src="https://maplestory.io/api/GMS/220/item/1402211/icon" alt="Eqp Terminus Weapon"/><img src="https://maplestory.io/api/GMS/220/item/1472227/icon" alt="Eqp Terminus Weapon"/><img src="https://maplestory.io/api/GMS/220/item/1092113/icon" alt="Eqp Terminus Weapon"/></strong>[Terminus Weapons], <img src="https://maplestory.io/api/GMS/220/item/1382045/icon" alt="Eqp Elemental Staff 1"/><img src="https://maplestory.io/api/GMS/220/item/1382046/icon" alt="Eqp Elemental Staff 2"/>[Elemental Staves], <img src="https://grandislibrary.files.wordpress.com/2021/03/toad-1.png" alt="Toad Pet Coupon"/> [(30 Day) Toad Pet Coupon], <img src="https://grandislibrary.files.wordpress.com/2021/03/ninja-castle-damage-skin.png" alt="Ninja Castle Damage Skin"/> [Damage Skin]<strong><br /></strong></li>
                        <li><strong>Frenzied Mode Only Rewards: </strong><img src="https://maplestory.io/api/GMS/220/item/2049000/icon" alt="Clean Slate Scroll"/>[Clean Slate Scroll], <img src="https://maplestory.io/api/GMS/220/item/2512292/icon" alt="EXP Accumulation Potion Recipe"/> [EXP Accumulation Potion Recipe], <img src="https://maplestory.io/api/GMS/220/item/2512293/icon" alt="Wealth Acquisition Potion Recipe"/> [Wealth Acquisition Potion Recipe], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Soul_Shard.png/revision/latest?cb=20180112052625" alt="Use Soul Shard" width="29" height="25" /> [Soul Shard], <img src="https://grandislibrary.files.wordpress.com/2021/03/golden-toad.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture]</li>
                        <li><img src="https://grandislibrary.files.wordpress.com/2021/03/golden-toad.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture] is used for trading for items from <a href="https://maplestory.fandom.com/wiki/Princess_Suzume" target="_blank" rel="noopener noreferrer">Princess Yuzume</a></li>
                    </ul>
                </li>
            </ul>
            <h3 id="bosses">[ &gt; 5k Main Stat] Earlygame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/MapIcon_PinkBean.png/revision/latest?cb=20100619154913" alt="MapIcon PinkBean" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Normal Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8e/Eqp_Timeless_Dead_End.png/revision/latest?cb=20150512034227" alt="Eqp Timeless Dead End" width={39} height={39} />[Reverse Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/19/Eqp_Pensalir_Battle_Helm.png/revision/latest?cb=20150129073124" alt="Eqp Pensalir Battle Helm" width={35} height={20} />[Lv. 140 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/77/Eqp_Black_Bean_Mark.png/revision/latest?cb=20150915005354" alt="Eqp Black Bean Mark" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/12/Eqp_Golden_Clover_Belt.png/revision/latest?cb=20151126082335" alt="Eqp Golden Clover Belt" width={32} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Eqp_Pink_Holy_Cup.png/revision/latest?cb=20151122085210" alt="Eqp Pink Holy Cup" width={30} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> [Power Elixir], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Use_Rebirth_Flame_Lv._120.png/revision/latest?cb=20180414204202" alt="Use Rebirth Flame Lv. 120" width={27} height={33} /> [Rebirth Flames], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Soul_Shard.png/revision/latest?cb=20180112052625" alt="Use Soul Shard" width={29} height={25} /> [Soul Shard], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> [Occult Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={32} /> [Master Craftsman's Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> [Intense Power Crystal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Signus.png/revision/latest?cb=20141218024114" alt="MapIcon Signus" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy Mode and Above Rewards: </strong>[Lv. 140 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Use_Piece_of_Ruin.png/revision/latest?cb=20160502042755" alt="Use Piece of Ruin" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Use_Piece_of_Darkness.png/revision/latest?cb=20161009231702" alt="Use Piece of Darkness" width={30} height={30} /> [Empress Gear Fragment]</li>
                    <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Use_Piece_of_Ruin.png/revision/latest?cb=20160502042755" alt="Use Piece of Ruin" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Use_Piece_of_Darkness.png/revision/latest?cb=20161009231702" alt="Use Piece of Darkness" width={30} height={30} /> exchange for <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Lionheart_Battle_Helm.png/revision/latest?cb=20150130081706" alt="Eqp Lionheart Battle Helm" width={36} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Lionheart_Cutlass.png/revision/latest?cb=20160511031541" alt="Eqp Lionheart Cutlass" width={43} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e9/MapIcon_Akairum.png/revision/latest?cb=20141001075303" alt="MapIcon Akairum" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Arkarium/Monster" target="_blank" rel="noreferrer noopener"><strong>Easy/Normal Arkarium</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Use_Elixir.png/revision/latest?cb=20151109020319" alt="Use Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Elixir" target="_blank" rel="noreferrer noopener">[Elixir]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[<em>(Normal Only)</em> Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Easy mode and Above Rewards: </strong>[Lv. 130 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/84/Eqp_Mechanator_Pendant.png/revision/latest?cb=20151230204711" alt="Eqp Mechanator Pendant" width={30} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2e/Etc_Primal_Essence.png/revision/latest?cb=20180818193754" alt="Etc Primal Essence" width={30} height={31} /> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>
                    </li>
                    <li><strong>Normal mode only Rewards: </strong>[Lv. 140 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c3/Eqp_Dominator_Pendant.png/revision/latest?cb=20160106061857" alt="Eqp Dominator Pendant" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>
                    </li>
                    <li>Ability to clear Arkarium early game will depend on your class, for example, does your class have a bind or iFrame?</li>
                </ul>
                </li>
            </ul>
            <h3>[ &gt; 8k Main Stat] Earlygame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Signus.png/revision/latest?cb=20141218024114" alt="MapIcon Signus" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Cygnus/Monster" target="_blank" rel="noreferrer noopener"><strong>Normal Cygnus</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode only Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Eqp_Lionheart_Battle_Shoulder.png/revision/latest?cb=20130710141306" alt="Eqp Lionheart Battle Shoulder" width={38} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d1/Eqp_Deimos_Sage_Shield.png/revision/latest?cb=20180830075149" alt="Eqp Deimos Sage Shield" width={33} height={35} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/80/Eqp_Deimos_Shadow_Shield.png/revision/latest?cb=20180830075204" alt="Eqp Deimos Shadow Shield" width={28} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/Eqp_Deimos_Warrior_Shield.png/revision/latest?cb=20180830075214" alt="Eqp Deimos Warrior Shield" width={31} height={35} />[Shield Recipes]</li>
                    <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Use_Piece_of_Ruin.png/revision/latest?cb=20160502042755" alt="Use Piece of Ruin" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Use_Piece_of_Darkness.png/revision/latest?cb=20161009231702" alt="Use Piece of Darkness" width={30} height={30} /> exchange for <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Lionheart_Battle_Helm.png/revision/latest?cb=20150130081706" alt="Eqp Lionheart Battle Helm" width={36} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Lionheart_Cutlass.png/revision/latest?cb=20160511031541" alt="Eqp Lionheart Cutlass" width={43} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <h3>[ &gt; 12k Main Stat] Midgame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/MapIcon_PinkBean.png/revision/latest?cb=20100619154913" alt="MapIcon PinkBean" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Pink_Bean" target="_blank" rel="noreferrer noopener"><strong>Chaos Pink Bean</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8e/Eqp_Timeless_Dead_End.png/revision/latest?cb=20150512034227" alt="Eqp Timeless Dead End" width={39} height={39} />[Reverse Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/19/Eqp_Pensalir_Battle_Helm.png/revision/latest?cb=20150129073124" alt="Eqp Pensalir Battle Helm" width={35} height={20} />[Lv. 140 Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/77/Eqp_Black_Bean_Mark.png/revision/latest?cb=20150915005354" alt="Eqp Black Bean Mark" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/12/Eqp_Golden_Clover_Belt.png/revision/latest?cb=20151126082335" alt="Eqp Golden Clover Belt" width={32} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Eqp_Pink_Holy_Cup.png/revision/latest?cb=20151122085210" alt="Eqp Pink Holy Cup" width={30} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> [Power Elixir], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Use_Rebirth_Flame_Lv._120.png/revision/latest?cb=20180414204202" alt="Use Rebirth Flame Lv. 120" width={27} height={33} /> [Rebirth Flames], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Soul_Shard.png/revision/latest?cb=20180112052625" alt="Use Soul Shard" width={29} height={25} /> [Soul Shard], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> [Occult Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={32} /> [Master Craftsman's Cube], <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> [Intense Power Crystal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_JP_Nohime.png/revision/latest?cb=20150225220019" alt="MapIcon JP Nohime" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Princess_No/Monster" target="_blank" rel="noreferrer noopener">Princess No</a></strong>:
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/10/Use_Captivating_Fragment.png/revision/latest?cb=20190524152732" alt="Use Captivating Fragment" width={30} height={30} /> [Secondary Weapon Fragment], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f4/Eqp_Hayato%27s_Treasure.png/revision/latest?cb=20181024054825" alt="Eqp Hayato's Treasure" width="31" height="31" /><img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Eqp_Kanna%27s_Treasure.png/revision/latest?cb=20181024054842" alt="Eqp Kanna's Treasure" width="31" height="32" /><img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8e/Eqp_Ayame%27s_Treasure.png/revision/latest?cb=20160831005323" alt="Eqp Ayame's Treasure" width="33" height="28" /> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noopener noreferrer">Belt</a> ]</li>
                    <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/10/Use_Captivating_Fragment.png/revision/latest?cb=20190524152732" alt="Use Captivating Fragment" width={30} height={30} /> can be used to redeem the best <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Eqp_Princess_No%27s_Accursed_Shield.png/revision/latest?cb=20170904042316" alt="Eqp Princess No's Accursed Shield" width={36} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/50/Eqp_Princess_No%27s_Fox_Marble.png/revision/latest?cb=20150628091636" alt="Eqp Princess No's Fox Marble" width={36} height={34} /> <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Secondary Weapons]</a> in the game</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_GiantVellud.png/revision/latest?cb=20140926175935" alt="MapIcon GiantVellud" width={36} height={37} /> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Hard Gollux</a></strong>:
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points and <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>
                    </li>
                    <li><strong>Main Rewards:</strong> <img src="https://maplestory.io/api/GMS/222/item/4310288/icon" alt="Etc Gollux Coin"/> [Gollux Coins], <img src="https://maplestory.io/api/GMS/222/item/1032222/icon" alt="Eqp Reinforced Gollux Earrings"/> <img src="https://maplestory.io/api/GMS/222/item/1132245/icon" alt="Eqp Reinforced Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Reinforced_Gollux_Set" target="_blank" rel="noreferrer noopener">[Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                    </li>
                    <li>Gollux Coins <img src="https://maplestory.io/api/GMS/222/item/4310288/icon" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
            </ul>
            <h3>[ &gt; 14k Main Stat] Midgame Bosses:</h3>
            <hr />
            <p>Recommended to have at least &gt;%90 IED and &gt;200% Boss Damage for bosses beyond this point</p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Chaos Root Abyss</a></strong>:
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Use_Master_Craftsman%27s_Cube.png/revision/latest?cb=20140729054943" alt="Use Master Craftsman's Cube" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Master_Craftsman's_Cube" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Chaos Mode only Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/44/Eqp_Queen%27s_Tiara.png/revision/latest?cb=20160119074132" alt="Eqp Queen's Tiara" width={34} height={35} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/Eqp_Pierre_Hat.png/revision/latest?cb=20160119073818" alt="Eqp Pierre Hat" width={37} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/34/Eqp_Von_Bon_Helmet.png/revision/latest?cb=20160119074126" alt="Eqp Von Bon Helmet" width={29} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Eqp_Vellum%27s_Helm.png/revision/latest?cb=20150602004109" alt="Eqp Vellum's Helm" width={30} height={30} /> [Chaos Hat], <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/Use_Piece_of_Anguish.png/revision/latest?cb=20160430041012" alt="Use Piece of Anguish" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/38/Use_Piece_of_Mockery.png/revision/latest?cb=20160430040709" alt="Use Piece of Mockery" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/Use_Piece_of_Time.png/revision/latest?cb=20160430021101" alt="Use Piece of Time" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/Use_Piece_of_Destruction.png/revision/latest?cb=20160430041230" alt="Use Piece of Destruction" width={30} height={30} /> [CRA Gear Fragment], <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/28/Etc_Chaos_Yggdrasil_Rune.png/revision/latest?cb=20180329030102" alt="Etc Chaos Yggdrasil Rune" width={35} height={35} />[Chaos Yggdrasil Coin], <img src="https://maplestory.io/api/GMS/210.1.1/item/3010514/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010513/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010512/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010515/icon" alt="" />[Chair]</li>
                    <li>These fragments <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/Use_Piece_of_Anguish.png/revision/latest?cb=20160430041012" alt="Use Piece of Anguish" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/38/Use_Piece_of_Mockery.png/revision/latest?cb=20160430040709" alt="Use Piece of Mockery" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/Use_Piece_of_Time.png/revision/latest?cb=20160430021101" alt="Use Piece of Time" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/Use_Piece_of_Destruction.png/revision/latest?cb=20160430041230" alt="Use Piece of Destruction" width={30} height={30} /> exchange for <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Eqp_Royal_Warrior_Helm.png/revision/latest?cb=20150112211030" alt="Eqp Royal Warrior Helm" width={36} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Eqp_Fafnir_Mana_Cradle.png/revision/latest?cb=20140709055147" alt="Eqp Fafnir Mana Cradle" width={40} height={40} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 Root Abyss Gear]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/220/map/874000005/icon" alt="Ritual Altar Icon"/> <a href="https://maplestory.fandom.com/wiki/Akechi_Mitsuhide/Monster" target="_blank" rel="noopener noreferrer"><strong>Akechi Mitsuhide</strong></a>:
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="29" height="29" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="27" height="27" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="32" height="31" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="32" height="38" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Main Rewards:</strong> <img src="https://maplestory.io/api/GMS/220/item/1302364/icon" alt="Eqp Wolf Weapon"/><img src="https://maplestory.io/api/GMS/220/item/1402274/icon" alt="Eqp Wolf Weapon"/><a href="https://maplestory.fandom.com/wiki/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>, <img src="https://maplestory.io/api/GMS/220/item/4310295/icon" alt="Mark of the Silver Wolf"/> [Mark of the Silver Wolf]
                        <ul>
                            <li><img src="https://maplestory.io/api/GMS/220/item/4310295/icon" alt="Mark of the Silver Wolf"/> Coin is usage to exchange for Japanese Wolf Weapons from <a href="https://maplestory.fandom.com/wiki/Kobayakawa_Takakage" target="_blank" rel="noopener noreferrer">Kobayakawa Takakage</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
            </ul>
            <h3>[ &gt; 20k Main Stat] Midgame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://maplestory.io/api/GMS/223/map/220080001/icon" alt="MapIcon Papulatus Clock" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener"><strong>Chaos Papulatus</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Hard Mode only Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b7/Eqp_Papulatus_Mark.png/revision/latest?cb=20171210184421" alt="Eqp Papulatus Mark" width={23} height={29} /> <a href="https://maplestory.fandom.com/wiki/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/MapIcon_Haven.png/revision/latest?cb=20150118085415" alt="MapIcon Haven" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Lotus" target="_blank" rel="noreferrer noopener">Normal Lotus</a></strong>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f8/Etc_Extraordinary_Energy_Core_%28Grade_S%29.png/revision/latest?cb=20180313230821" alt="Etc Extraordinary Energy Core (Grade S)" width={34} height={35} />[Extraordinary Energy Core (Grade S)]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/MapIcon_fallenWorldTree.png/revision/latest?cb=20191204082811" alt="MapIcon fallenWorldTree" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Damien" target="_blank" rel="noreferrer noopener"><strong>Normal Damien</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7c/Eqp_Ruin_Force_Shield.png/revision/latest?cb=20170702215126" alt="Eqp Ruin Force Shield" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1099015" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Etc_Twisted_Stigma_Spirit_Stone.png/revision/latest?cb=20180313231601" alt="Etc Twisted Stigma Spirit Stone" width={35} height={33} /> [Twisted Stigma Spirit Stone]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_GiantVellud.png/revision/latest?cb=20140926175935" alt="MapIcon GiantVellud" width={36} height={37} /> <strong><a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Hell Gollux (Hellux)</a></strong>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points and <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[Power Elixir]</a>
                    </li>
                    <li><strong>Main Rewards:</strong> <img src="https://maplestory.io/api/GMS/222/item/4310288/icon" alt="Etc Gollux Coin"/> [Gollux Coins], <img src="https://maplestory.io/api/GMS/222/item/1032223/icon" alt="Eqp Superior Gollux Earrings"/> <img src="https://maplestory.io/api/GMS/222/item/1132246/icon" alt="Eqp Superior Engraved Gollux Belt"/> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Superior/Reinforced/Solid/Cracked Gollux Earrings &amp; Belt]</a>
                    </li>
                    <li>Gollux Coins <img src="https://maplestory.io/api/GMS/222/item/4310288/icon" alt="Etc Gollux Coin"/> can be used to buy items from <a href="https://maplestory.fandom.com/wiki/Randolf" target="_blank" rel="noreferrer noopener">Randolf</a> and <a href="https://maplestory.fandom.com/wiki/Mountain_Mumur" target="_blank" rel="noreferrer noopener">Mountain Murmur</a></li>
                </ul>
                </li>
                <li>
                    <img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> <strong><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Normal Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Main Rewards:</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a></li>
                    </ul>
                </li>
            </ul>
            <h3>Tier I Endgame Bosses:</h3>
            <hr />
            <p>Bosses beyond this point are not meant to be soloable and are more party-oriented bosses. As well, beyond this point, bosses will be separated by tiers as there is no good recommended stat indicators for the reasons mentioned earlier.</p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/MapIcon_Haven.png/revision/latest?cb=20150118085415" alt="MapIcon Haven" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Lotus" target="_blank" rel="noreferrer noopener">Hard Lotus</a></strong>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width={27} height={27} /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Hard Mode Only Rewards: </strong> <img src="https://maplestory.io/api/GMS/220/item/1073030/icon" alt="Eqp AbsoLab Knight Shoes" width={28} height={32} /> <img src="https://maplestory.io/api/GMS/220/item/1082636/icon" alt="Eqp AbsoLab Knight Gloves" width={32} height={30} /> <img src="https://maplestory.io/api/GMS/220/item/1102775/icon" alt="Eqp AbsoLab Knight Cape" width={34} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_AbsoLab_Saber.png/revision/latest?cb=20160719054959" alt="Eqp AbsoLab Saber" width={33} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Absolute_Labs_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Shoe/Glove/Cape/Weapon) AbsoLab Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Etc_Damaged_Black_Heart.png/revision/latest?cb=20170529165211" alt="Etc Damaged Black Heart" width={26} height={29} /> <a href="https://maplestory.fandom.com/wiki/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ed/Eqp_Deluxe_Android_%28M%29.png/revision/latest?cb=20200304062640" alt="Eqp Deluxe Android (M)" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Berserked.png/revision/latest?cb=20171208054253" alt="Eqp Berserked" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012632">[Beserked Face Accessory]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/MapIcon_fallenWorldTree.png/revision/latest?cb=20191204082811" alt="MapIcon fallenWorldTree" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Damien" target="_blank" rel="noreferrer noopener"><strong>Hard Damien</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width={27} height={27} /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Hard Mode Only Rewards: </strong> <img src="https://maplestory.io/api/GMS/220/item/1662088/icon" alt="Eqp Damienroid"/> <a href="https://maplestory.fandom.com/wiki/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Magic_Eyepatch.png/revision/latest?cb=20171208055917" alt="Eqp Magic Eyepatch" width={31} height={20} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022278" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>, <img src="https://maplestory.io/api/GMS/220/item/1004422/icon" alt="Eqp AbsoLab Knight Helm" width={34} height={28} /> <img src="https://maplestory.io/api/GMS/220/item/1052882/icon" alt="Eqp AbsoLab Knight Suit" width={26} height={32} /> <img src="https://maplestory.io/api/GMS/220/item/1152174/icon" alt="Eqp AbsoLab Knight Shoulder" width={34} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_AbsoLab_Saber.png/revision/latest?cb=20160719054959" alt="Eqp AbsoLab Saber" width={33} height={33} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Absolute_Labs_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Hat/Overall/Shoulder/Weapon) AbsoLab Gear]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <h3>Tier II Endgame Bosses:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Lucid/Monster" target="_blank" rel="noreferrer noopener"><strong>Lucid</strong></a>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width={27} height={27} /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong>  <a href="https://maplestory.fandom.com/wiki/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>
                    </li>
                    <li><strong>Hard Mode Only Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Dreamy_Belt.png/revision/latest?cb=20170924211825" alt="Eqp Dreamy Belt" width={36} height={35} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132308" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>, <img src="https://maplestory.io/api/GMS/220/item/1073158/icon" alt="Eqp Arcane Umbra Knight Shoes" width={26} height={30} /> <img src="https://maplestory.io/api/GMS/220/item/1082695/icon" alt="Eqp Arcane Umbra Knight Gloves" width={30} height={25} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/22/Eqp_Arcane_Umbra_Saber.png/revision/latest?cb=20161222220021" alt="Eqp Arcane Umbra Saber" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Shoe/Glove/Weapon) Arcane Umbra Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Will" target="_blank" rel="noreferrer noopener">Will</a></strong>
                <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width={29} height={29} /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width={27} height={27} /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>
                    </li>
                    <li><strong>Normal Mode and Above Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Etc_Stone_Cobweb_Droplet.png/revision/latest?cb=20180908000107" alt="Etc Stone Cobweb Droplet" width={34} height={36} />[Stone Cobweb Droplet]</li>
                    <li><strong>Hard Mode Only Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Eqp_Cursed_Red_Spellbook.png/revision/latest?cb=20180702021659" alt="Eqp Cursed Red Spellbook" width={38} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Cursed_Blue_Spellbook.png/revision/latest?cb=20180702022133" alt="Eqp Cursed Blue Spellbook" width={38} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_Cursed_Green_Spellbook.png/revision/latest?cb=20180702022320" alt="Eqp Cursed Green Spellbook" width={37} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d4/Eqp_Cursed_Yellow_Spellbook.png/revision/latest?cb=20180702022434" alt="Eqp Cursed Yellow Spellbook" width={38} height={36} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162080" target="_blank" rel="noreferrer noopener">[Cursed Spellbook]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Eqp_Arcane_Umbra_Knight_Hat.png/revision/latest?cb=20161208043106" alt="Eqp Arcane Umbra Knight Hat" width={37} height={36} /> <img src="https://maplestory.io/api/GMS/223/item/1152198/icon" alt="Eqp Arcane Umbra Knight Shoulder"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Eqp_Arcane_Umbra_Knight_Suit.png/revision/latest?cb=20161209231322" alt="Eqp Arcane Umbra Knight Suit" width={26} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/22/Eqp_Arcane_Umbra_Saber.png/revision/latest?cb=20161222220021" alt="Eqp Arcane Umbra Saber" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[(Hat/Shoulder/Overall/Weapon) Arcane Umbra Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7c/Use_Mirror_World_Nodestone.png/revision/latest?cb=20181002064218" alt="Use Mirror World Nodestone" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>
                    </li>
                </ul>
                </li>
            </ul>
            <h3>Tier III Endgame Bosses:</h3>
            <hr />
            <ul>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_moonBridge.png/revision/latest?cb=20191204082819" alt="MapIcon moonBridge" width="{38}" height="{38}" /> <strong><a href="https://maplestory.fandom.com/wiki/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Gloom</a></strong>
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="{29}" height="{29}" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="{32}" height="{31}" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="{32}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Normal/Chaos Mode Rewards: </strong> <img src="https://maplestory.io/api/KMS/333/item/1113306/icon" alt="" /> <a href="https://maplestory.wiki/GMS/218/item/1113306" target="_blank" rel="noreferrer noopener">[(Chaos Only) Endless Terror Ring]</a> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Etc_Spark_of_Determination.png/revision/latest?cb=20190203175011" alt="Etc Spark of Determination" width="{25}" height="{36}" /> <a href="https://maplestory.fandom.com/wiki/Spark_of_Determination" target="_blank" rel="noreferrer noopener">[Spark of Determination]</a></li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/MapIcon_TheLabyrinthOfSuffering.png/revision/latest?cb=20180831061919" alt="MapIcon TheLabyrinthOfSuffering" width="{38}" height="{38}" /> <strong><a href="https://maplestory.fandom.com/wiki/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Verus Hilla</a></strong>
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="{29}" height="{29}" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="{32}" height="{31}" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="{32}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Hard Mode Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Source_of_Suffering.png/revision/latest?cb=20181116001717" alt="Eqp Source of Suffering" width="{36}" height="{36}" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122430" target="_blank" rel="noreferrer noopener">[Source of Suffering]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2a/Etc_Shadow_of_Annihilation.png/revision/latest?cb=20190203175448" alt="Etc Shadow of Annihilation" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Shadow_of_Annihilation" target="_blank" rel="noreferrer noopener">[Shadow of Annihilation]</a></li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_Limen.png/revision/latest?cb=20191204082817" alt="MapIcon Limen" width="{38}" height="{38}" /> <strong><a href="https://maplestory.fandom.com/wiki/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Darknell</a></strong>
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="{29}" height="{29}" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="{32}" height="{31}" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="{32}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Normal/Hard Mode Rewards:</strong> <img src="https://maplestory.io/api/KMS/333/item/1032316/icon" alt="" /> <a href="https://maplestory.wiki/GMS/218/item/1032316" target="_blank" rel="noreferrer noopener">[(Hard Only) Commanding Force Earrings]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Etc_Spark_of_Determination.png/revision/latest?cb=20190203175011" alt="Etc Spark of Determination" width="{25}" height="{36}" />[Spark of Determination]</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/boss-icons/ramuramu.png" alt="MapIcon ramuramu"/> <strong><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer">Chaos Guardian Angel Slime</a></strong>
                    <ul>
                        <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" /> Reward Points, <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Non-Reboot Only) Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width={32} height={38} /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                        <li><strong>Main Rewards:</strong> <img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestory.fandom.com/wiki/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestory.fandom.com/wiki/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                        , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestory.fandom.com/wiki/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestory.fandom.com/wiki/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestory.fandom.com/wiki/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>
                        , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestory.fandom.com/wiki/50%25_Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestory.fandom.com/wiki/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a></li>
                    </ul>
                </li>
            </ul>
            <h3>Tier IV Endgame Bosses:</h3>
            <hr/>
            <ul>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_Limen.png/revision/latest?cb=20191204082817" alt="MapIcon Limen" width="{38}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Black_Mage/Monster" target="_blank" rel="noreferrer noopener"><strong>Black Mage</strong></a>
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="{29}" height="{29}" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="{32}" height="{31}" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="{32}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Main Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Eqp_Genesis_Badge.png/revision/latest?cb=20190120225321" alt="Eqp Genesis Badge" width="{35}" height="{29}" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182285" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a></li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/KMS/348/map/410000500/icon" alt="MapIcon Cernium" /> <a href="https://maplestory.fandom.com/wiki/Seren/Monster" target="_blank" rel="noreferrer noopener"><strong>Seren</strong></a>
                    <ul>
                    <li>Source of <img src="https://maplestory.io/api/GMS/210.1.1/item/2431872/icon" alt="" />Reward Points, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="{29}" height="{29}" /> <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Use_Bonus_Occult_Cube.png/revision/latest?cb=20190103221114" alt="Use Bonus Occult Cube" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Bonus_Occult_Cube" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Use_Power_Elixir.png/revision/latest?cb=20151109020354" alt="Use Power Elixir" width="{32}" height="{31}" /> <a href="https://maplestory.fandom.com/wiki/Power_Elixir">[ Power Elixir]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="{32}" height="{38}" /> <a href="https://maplestory.fandom.com/wiki/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li>
                    <li><strong>Main Rewards:</strong> <strong><img className="transparent" src="https://maplestory.io/api/GMS/225/item/1190555/icon?resize=1" alt="https://maplestory.io/api/GMS/225/item/1190555/icon?resize=1" /></strong> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Rage:_Warrior" target="_blank" rel="noopener">[Emblem]</a>, <img src="https://maplestory.io/api/GMS/225/item/2632972/icon" data-v-e6b15fb6="true" /> <a href="https://maplestory.fandom.com/wiki/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a></li>
                    </ul>
                </li>
            </ul>
            <hr />
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="dailyweekly">Daily / Weekly Quests:</h3>
            <hr />
            <p>A majority of Daily and Weekly Quests are mostly done at Lv. 200+. Characters pre-200 do not need to worry about these quests as much</p>
            <ul>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3b/Lil_Wonky_Pet.png/revision/latest?cb=20200207121555" alt="Lil Wonky Pet" /> <strong>[Lv. Any] [Daily] Fairy Bros Daily Gift</strong>: Defeat 300 enemies around you level each day to obtain a free check-in gift <br />
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
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/MapIcon_MonsterPark.png/revision/latest?cb=20100619154742" alt="MapIcon MonsterPark" width="{38}" height="{38}" /> <strong>[Lv. 105+] <a href="https://maplestory.fandom.com/wiki/Category:Monster_Park" target="_blank" rel="noreferrer noopener">[Daily] Monster Park</a></strong>: Completing Monster Park will reward you with a considerable amount of EXP and <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Etc_Monster_Park_Commemorative_Coin.png/revision/latest?cb=20150209010037" alt="Etc Monster Park Commemorative Coin" width="{28}" height="{28}" /> <a href="https://maplestory.fandom.com/wiki/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a> to use in a special shop
                    <ul>
                    <li>Great for early levels as you gain a lot of EXP</li>
                    <li>Special shop sells special potions <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Use_Extreme_Red_Potion.png/revision/latest?cb=20170206074326" alt="Use Extreme Red Potion" width="{22}" height="{31}" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Use_Extreme_Green_Potion.png/revision/latest?cb=20170206074332" alt="Use Extreme Green Potion" width="{22}" height="{31}" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ac/Use_Extreme_Blue_Potion.png/revision/latest?cb=20170206074338" alt="Use Extreme Blue Potion" width="{22}" height="{31}" /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c4/Use_Extreme_Gold_Potion.png/revision/latest?cb=20170206074343" alt="Use Extreme Gold Potion" width="{30}" height="{35}" />that are transferable within your account (given same World) that grant useful buffs for training</li>
                    <li>Completing Monster Park 77 times for each day of the week will reward you a <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cd/Eqp_Seven_Day_Monster_Parker.png/revision/latest?cb=20180524151134" alt="Eqp Seven Day Monster Parker" width="{35}" height="{34}" /> <a href="https://maplestory.fandom.com/wiki/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Best-in-Slot for Bossing Medal]</a> that gives +10% Ignore Enemy Defence</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/MapIcon_MTour.png/revision/latest?cb=20200415050411" alt="MapIcon MTour" width="{38}" height="{38}" /> <strong>[Lv. 105+] [Daily] </strong><strong>Maple Tour: </strong>Completing Maple Tour will reward you with Mesos and <img src="https://maplestory.io/api/GMS/212/item/4310286/icon" alt="" />[Maple Tour Coins] to buy special items at Maple Tour</li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f5/MapIcon_ShangHaiCN.png/revision/latest?cb=20171129032322" alt="MapIcon ShangHaiCN" width="{38}" height="{38}" /> <strong>[Lv. 140+] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong>[Reboot] [Daily] The Far East (Yu Garden)</strong></a>: Completing The Far East storyline will unlock Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/223/item/2049701/icon" alt="Use Epic Potential Scroll" /> [Epic Potential Scrolls] in Reboot Servers only</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width="{38}" height="{38}" /> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">[Daily] Arcane River - Vanishing Journey</a></strong>: Completing the Vanishing Journey storyline will unlock Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/223/item/1712001/icon" alt="Eqp Arcane Symbol Vanishing Journey" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width="{38}" height="{38}" /> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Vanishing_Journey" target="_blank" rel="noreferrer noopener">[Weekly] Arcane River - Vanishing Journey</a>: </strong>Completing the Vanishing Journey Daily twice each will reward you with Nodestones
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/215/item/2435719/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2435719" target="_blank" rel="noreferrer noopener">[Nodestones]</a></li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width="{38}" height="{38}" /> <strong>[Lv. 200+] <a href="https://maplestory.fandom.com/wiki/Category:Erda_Spectrum" target="_blank" rel="noreferrer noopener">[Daily PQ] Erda Spectrum</a></strong>: Unlocked once you complete the Vanishing Journey storyline. Can be done in parties of 1 to 3. There are 2 stages and the objective to help Nina conduct research in several different areas
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/223/item/1712001/icon" alt="Eqp Arcane Symbol Vanishing Journey" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width="{38}" height="{38}" /> <strong>[Lv. 210+]</strong> <a href="https://maplestory.fandom.com/wiki/Category:Chu_Chu_Island" target="_blank" rel="noreferrer noopener"><strong>[Daily] Arcane River - Chu Chu Island</strong></a>: Completing storyline will unlock access to a Party Quest and Daily Quests
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/223/item/1712002/icon" alt="Eqp Arcane Symbol Chu Chu Island" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width="{38}" height="{38}" /> <strong> [Lv. 210+] <a href="https://maplestory.fandom.com/wiki/Category:Hungry_Muto" target="_blank" rel="noreferrer noopener">[Daily PQ] Hungry Muto</a></strong>: Unlocked once you complete the Chu Chu Island storyline. Can be done in parties of 1 to 4. The main objective is to collect ingredients from monsters to create dishes to feed Muto
                    <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/223/item/1712002/icon" alt="Eqp Arcane Symbol Chu Chu Island" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width="{38}" height="{38}" /> <strong>[Lv. 220+] </strong><a href="https://maplestory.fandom.com/wiki/Category%3ALachelein" target="_blank" rel="noreferrer noopener"><strong>[Daily] Arcane River - Lachelein</strong></a>: Completing the storyline will unlock access to Dream Defender, Daily Quests
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3c/Eqp_Arcane_Symbol_Lachelein.png/revision/latest?cb=20170116215729" alt="Eqp Arcane Symbol Lachelein" width="{34}" height="{33}" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width="{38}" height="{38}" /> <strong>[Lv. 220+] <a href="https://maplestory.fandom.com/wiki/Category:Dream_Defender" target="_blank" rel="noreferrer noopener">[Daily] Dream Defender</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to protect Music Boxes from becoming corrupted. If they become corrupted, you must free them by attacking it
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/72/Etc_Dream_Coin.png/revision/latest?cb=20181013105725" alt="Etc Dream Coin" width="{27}" height="{27}" /> <a href="https://maplestory.fandom.com/wiki/Dream_Coin" target="_blank" rel="noreferrer noopener">[Dream Coins]</a>
                        <ul>
                        <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/7/72/Etc_Dream_Coin.png/revision/latest?cb=20181013105725" alt="Etc Dream Coin" width="{27}" height="{27}" /> can be exchanged for <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3c/Eqp_Arcane_Symbol_Lachelein.png/revision/latest?cb=20170116215729" alt="Eqp Arcane Symbol Lachelein" width="{34}" height="{33}" /> [Arcane Symbols]</li>
                        <li>Once you have completed all your runs of Dream Defender you can talk to the five ranking NPCs in Lachelein for extra <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/72/Etc_Dream_Coin.png/revision/latest?cb=20181013105725" alt="Etc Dream Coin" width="{27}" height="{27}" />[Dream Coins]</li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width="{38}" height="{38}" /> <strong> [Lv. 225+] <a href="https://maplestory.fandom.com/wiki/Category:Arcana" target="_blank" rel="noreferrer noopener">[Daily] Arcane River - Arcana</a></strong>: Completing the storyline will unlock access to Spirit Savior and Daily Quests
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/Eqp_Arcane_Symbol_Arcana.png/revision/latest?cb=20170807071750" alt="Eqp Arcane Symbol Arcana" width="{33}" height="{33}" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width="{38}" height="{38}" /> <strong> [Lv. 225+] <a href="https://maplestory.fandom.com/wiki/Category:Spirit_Savior" target="_blank" rel="noreferrer noopener">[Daily] Spirit Savior</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to save Rock Spirits that have been kidnapped while avoiding an evil spirit that chases you
                    <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Etc_Spirit_Coin.png/revision/latest?cb=20181013111133" alt="Etc Spirit Coin" width="{28}" height="{28}" /> <a href="https://maplestory.fandom.com/wiki/Spirit_Coin" target="_blank" rel="noreferrer noopener">[Spirit Coins]</a></li>
                    <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Etc_Spirit_Coin.png/revision/latest?cb=20181013111133" alt="Etc Spirit Coin" width="{28}" height="{28}" /> can be exchanged for <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/Eqp_Arcane_Symbol_Arcana.png/revision/latest?cb=20170807071750" alt="Eqp Arcane Symbol Arcana" width="{33}" height="{33}" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png/revision/latest?cb=20171021043007" alt="MapIcon Morass" width="{38}" height="{38}" /> <strong>[Lv. 230+] </strong><a href="https://maplestory.fandom.com/wiki/Category%3AMorass" target="_blank" rel="noreferrer noopener"><strong>[Daily] Morass</strong></a>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Eqp_Arcane_Symbol_Morass.png/revision/latest?cb=20171127043047" alt="Eqp Arcane Symbol Morass" width="{34}" height="{34}" />[Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png/revision/latest?cb=20171021043007" alt="MapIcon Morass" width="{38}" height="{38}" /> <strong>[Lv. 230+] </strong><a href="https://maplestory.fandom.com/wiki/Ranheim_Defense_(Party_Quest)" target="_blank" rel="noreferrer noopener"><strong>[Daily] Ranheim Defense</strong></a>: This activity cannot be done in a party and must be done alone. The objective is to defend a pillar on the middle of the map by defeating enemies that appear
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Eqp_Arcane_Symbol_Morass.png/revision/latest?cb=20171127043047" alt="Eqp Arcane Symbol Morass" width="{34}" height="{34}" />[Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width="{38}" height="{38}" /> <strong>[Lv. 235+] <a href="https://maplestory.fandom.com/wiki/Category:Esfera" target="_blank" rel="noreferrer noopener">[Daily] Esfera</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4f/Eqp_Arcane_Symbol_Esfera.png/revision/latest?cb=20180622045018" alt="Eqp Arcane Symbol Esfera" width="{33}" height="{33}" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width="{38}" height="{38}" /> <strong>[Lv. 235+] <a href="https://maplestory.fandom.com/wiki/Esfera_Guardian_(Party_Quest)" target="_blank" rel="noreferrer noopener">[Daily] Esfera Guardian</a></strong>: This activity cannot be done in a party and must be done alone. The objective is to destroy dimensional gates using a special turret to aim and shoot
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4f/Eqp_Arcane_Symbol_Esfera.png/revision/latest?cb=20180622045018" alt="Eqp Arcane Symbol Esfera" width="{33}" height="{33}" /> [Arcane Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/223/map/450009100/icon" alt="MapIcon Moonbridge" /> <strong>[Lv. 245+] <a href="https://maplestory.fandom.com/wiki/Quests/224/(Daily_Quest)_Tenebris_Research" target="_blank" rel="noreferrer noopener">[Daily] Tenebris</a></strong>: Completing the storyline in Moonbridge unlocks Daily Quests for this region
                    <ul>
                    <li>More daily quests are available once Labyrinth of Suffering and Limina storylines have been completed</li>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/223/item/4001893/icon" alt="Etc Spark of Determination" /> [Spark of Determination]</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/223/map/410000500/icon" alt="MapIcon Cernium" /> <strong>[Lv. 260+] <a href="https://maplestory.fandom.com/wiki/Category:Cernium" target="_blank" rel="noreferrer noopener">[Daily] Cernium</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/223/item/1713000/icon" alt="Eqp Sacred Symbol Cernium" /> [Sacred Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/223/map/410000500/icon" alt="MapIcon Cernium" /> <strong>[Lv. 265+] <a href="https://maplestory.fandom.com/wiki/Category:Burning_Cernium" target="_blank" rel="noreferrer noopener">[Daily] Burning Cernium</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/223/item/1713000/icon" alt="Eqp Sacred Symbol Cernium" /> [Sacred Symbols]</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/225/map/410003000/icon" data-v-e6b15fb6="true" /> <strong>[Lv. 270+] <a href="https://maplestory.fandom.com/wiki/Category:Hotel_Arcus" target="_blank" rel="noreferrer noopener">[Daily] Hotel Arcus</a></strong>: Completing the storyline here unlocks Daily Quests for this area
                    <ul>
                    <li><strong>Main Rewards: </strong><img src="https://maplestory.io/api/GMS/225/item/1713001/icon" data-v-e6b15fb6="true" /> [Sacred Symbols]</li>
                    </ul>
                </li>
            </ul>
            <hr />
            <h4>Optional:</h4>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/223/map/865000002/icon" alt="MapIcon Commerci"/> <strong>[Lv. 140+] <a href="https://strategywiki.org/wiki/MapleStory/Commerci_Trade_Voyages" target="_blank" rel="noreferrer noopener">[Daily] Commerci Voyages</a></strong>: Unlocked once you reach the town of San Commerci. Complete trade voyages where waves of enemies spawn to earn <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/56/Etc_Commerci_Denaro.png/revision/latest?cb=20140901070302" alt="Etc Commerci Denaro" width={30} height={22} /> <a href="https://maplestory.fandom.com/wiki/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaro]</a>
                <ul>
                    <li>Denaros are used to buy <strong /> [<a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">Sweetwater Monocle</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">Sweetwater Tattoo</a> ] from <a href="https://maplestory.fandom.com/wiki/Javert" target="_blank" rel="noreferrer noopener">Javert</a>
                    </li>
                    <li>Accessories are BIS but only if you can Star Force above 15 stars, so daily is optional until you can obtain 15+ stars</li>
                    <li>On Regular Servers, you can also do trade voyages to buy and sell the Sweetwater accessories for Mesos</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/MapIcon_critias.png/revision/latest?cb=20140817020313" alt="MapIcon critias" width={38} height={38} /> <strong>[Lv. 170+]</strong>  <strong>[Weekly] Kritias</strong>: Unlocked after completing the Kritias storyline
                <br />
                <ul>
                    <li>Weekly Quests reward you with <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/96/Etc_Anti-magic_Stone.png/revision/latest?cb=20141209072858" alt="Etc Anti-magic Stone" width={23} height={31} /> <a href="https://maplestory.fandom.com/wiki/Anti-magic_Stone" target="_blank" rel="noreferrer noopener">[Anti-magic Stone]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/30/Use_Anti-magic_Stone_Piece.png/revision/latest?cb=20141209065928" alt="Use Anti-magic Stone Piece" width={28} height={22} /> <a href="https://maplestory.fandom.com/wiki/Anti-magic_Stone_Piece" target="_blank" rel="noreferrer noopener">[Anti-magic Stone Piece]</a> which are used to create <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/16/Etc_Kritias_Commemorative_Coin.png/revision/latest?cb=20180329030519" alt="Etc Kritias Commemorative Coin" width={26} height={26} /> <a href="https://maplestory.fandom.com/wiki/Keilbarren" target="_blank" rel="noreferrer noopener">[Kritias Commemorative Coins]</a> to buy <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/Eqp_Tyrant_Hyades_Gloves.png/revision/latest?cb=20150209052456" alt="Eqp Tyrant Hyades Gloves" width={32} height={30} /> [Tyrant Gloves] and <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/21/Use_Hard_Magnus_Reset_Ticket.png/revision/latest?cb=20171210191646" alt="Use Hard Magnus Reset Ticket" width={33} height={26} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f2/Use_Chaos_Vellum_Reset_Ticket.png/revision/latest?cb=20171210191906" alt="Use Chaos Vellum Reset Ticket" width={33} height={26} /> [Weekly Boss Reset Tickets]
                    <ul>
                        <li>Due to the amount of time required to obtain some of these items, it is not worth the time and can be skipped</li>
                        <li>For more info on Kritias, check out: <a href="https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/223/map/310070000/icon" alt="MapIcon Scrapyard"/> <strong>[Lv. 190+] <a href="https://maplestory.fandom.com/wiki/Category:Scrapyard" target="_blank" rel="noreferrer noopener">[Weekly] Scrapyard</a></strong>: Unlocked once you reach Lv. 190
                <ul>
                    <li>Weekly Quests reward you with <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7c/Etc_Diffusion-Line_Energy_Core_%28Grade_A%29.png/revision/latest?cb=20180329022046" alt="Etc Diffusion-Line Energy Core (Grade A)" width={36} height={30} /> [Diffusion-Line Energy Core (Grade A)] which are used to create <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/Etc_AbsoLab_Coin.png/revision/latest?cb=20160926034628" alt="Etc AbsoLab Coin" width={27} height={26} /> [AbsoLab Coins] to buy for <img src="https://maplestory.io/api/GMS/220/item/1073030/icon" alt="Eqp AbsoLab Knight Shoes" width={28} height={32} /> <img src="https://maplestory.io/api/GMS/220/item/1082636/icon" alt="Eqp AbsoLab Knight Gloves" width={32} height={30} /> <img src="https://maplestory.io/api/GMS/220/item/1102775/icon" alt="Eqp AbsoLab Knight Cape" width={34} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_AbsoLab_Saber.png/revision/latest?cb=20160719054959" alt="Eqp AbsoLab Saber" width={33} height={33} /> [<em>(Shoe/Glove/Cape/Weapon)</em> AbsoLab Gear]
                    <ul>
                        <li>Can be skipped if you are not trying to get Absolab Gear</li>
                        <li>Monsters in this area also drop <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7c/Etc_Diffusion-Line_Energy_Core_%28Grade_A%29.png/revision/latest?cb=20180329022046" alt="Etc Diffusion-Line Energy Core (Grade A)" width={36} height={30} /> 
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/223/map/105300304/icon" alt="MapIcon Dark World Tree"/> <strong>[Lv. 190+] <a href="https://maplestory.fandom.com/wiki/Category:Dark_World_Tree" target="_blank" rel="noreferrer noopener">[Weekly] Dark World Tree</a></strong>: Unlocked once you reach Lv. 190
                <ul>
                    <li>Weekly Quests reward you with <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5d/Etc_Faint_Stigma_Spirit_Stone.png/revision/latest?cb=20180329023046" alt="Etc Faint Stigma Spirit Stone" width={22} height={21} />[Faint Stigma Spirit Stone] which are used to create <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e6/Etc_Stigma_Coin.png/revision/latest?cb=20160926034615" alt="Etc Stigma Coin" width={27} height={26} /> [Stigma Coins] to buy for <img src="https://maplestory.io/api/GMS/220/item/1004422/icon" alt="Eqp AbsoLab Knight Helm" width={34} height={28} /> <img src="https://maplestory.io/api/GMS/220/item/1052882/icon" alt="Eqp AbsoLab Knight Suit" width={26} height={32} /> <img src="https://maplestory.io/api/GMS/220/item/1152174/icon" alt="Eqp AbsoLab Knight Shoulder" width={34} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_AbsoLab_Saber.png/revision/latest?cb=20160719054959" alt="Eqp AbsoLab Saber" width={33} height={33} /> [<em>(Hat/Overall/Shoulder/Weapon)</em> AbsoLab Gear]
                    <ul>
                        <li>Can be skipped if you are not trying to get Absolab Gear</li>
                        <li>Monsters in this area also drop <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5d/Etc_Faint_Stigma_Spirit_Stone.png/revision/latest?cb=20180329023046" alt="Etc Faint Stigma Spirit Stone" width={22} height={21} />
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3e/MapIcon_Crimsonwood.png/revision/latest?cb=20191204083038" alt="MapIcon Crimsonwood" width={38} height={38} /> <strong>[Lv. 180+] </strong><a href="https://maplestory.fandom.com/wiki/Category:Crimsonwood" target="_blank" rel="noreferrer noopener"><strong>[Daily] Crimsonwood - Phantom Forest</strong></a>: Completing the storyline for this area unlocks access to Daily Quests that reward <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0d/Etc_Raven_Ninja_Coin.png/revision/latest?cb=20191227231031" alt="Etc Raven Ninja Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Etc_Shadowknight_Coin.png/revision/latest?cb=20191227231213" alt="Etc Shadowknight Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> to buy items from Mo and Fiona in the Phantom Forest
                <ul>
                    <li><strong>Main Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/Eqp_White_Identity.png/revision/latest?cb=20150925032544" alt="Eqp White Identity" width={32} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Crystal_Leaf_Earrings.png/revision/latest?cb=20200111083056" alt="Eqp Crystal Leaf Earrings" width={31} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8b/Eqp_Raven%27s_Beak.png/revision/latest?cb=20191006024355" alt="Eqp Raven's Beak" width={30} height={31} /> <a href="https://maplestory.fandom.com/wiki/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Use_Balanced_Fury.png/revision/latest?cb=20160207062143" alt="Use Balanced Fury" width={31} height={28} /> <a href="https://maplestory.fandom.com/wiki/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/80/Use_Crystal_Ilbi_Throwing-Stars.png/revision/latest?cb=20160207062053" alt="Use Crystal Ilbi Throwing-Stars" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a>
                    </li>
                    <li>Unless you are really trying to optimize your gear, the Phantom Forest is not necessary and can be skipped</li>
                </ul>
                </li>
                <li><strong>[Daily] <a href="https://maplestory.fandom.com/wiki/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a></strong>: Completing the quests will grant extra <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/11/Etc_Legion_Coin.png/revision/latest?cb=20171113182547" alt="Etc Legion Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Legion_Coin" target="_blank" rel="noreferrer noopener">[Legion Coins]</a>
                <ul>
                    <li>Can be skipped</li>
                </ul>
                </li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="training">Training Maps:</h3>
            <hr />
            <img className="repository-image" src="https://i.imgur.com/Zc3jRlG.png" alt="World Map" />
            <p>To find a certain map or monster listed here, open your World Map (W by default) and search for the desired item on the right-hand side. Clicking on the item you want will direct you to the map which will start blinking</p>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/62/MapIcon_Henesys.png/revision/latest?cb=20100619152431" alt="MapIcon Henesys" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/100040000" target="_blank" rel="noreferrer noopener">Henesys - Golem's Temple</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5150000" target="_blank" rel="noreferrer noopener">Mixed Golems</a>
                <ul>
                    <li><strong>Recommended Level</strong>: 10 - 15</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/62/MapIcon_Henesys.png/revision/latest?cb=20100619152431" alt="MapIcon Henesys" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/100040000" target="_blank" rel="noreferrer noopener">Henesys - Golem's Temple</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5150003" target="_blank" rel="noreferrer noopener">Flaming Mixed Golems</a>
                <ul>
                    <li><strong>Recommended Level</strong>: 15 - 25</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/MapIcon_Ellinia.png/revision/latest?cb=20100619152452" alt="MapIcon Ellinia" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/101030000" target="_blank" rel="noreferrer noopener">Ellinia - North Forest</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2230100" target="_blank" rel="noreferrer noopener">Evil Eyes</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3230100" target="_blank" rel="noreferrer noopener">Curse Eyes</a>
                <ul>
                    <li><strong>Recommended Level</strong>: 25 - 30</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/37/MapIcon_GoldBeach.png/revision/latest?cb=20121109150254" alt="MapIcon GoldBeach" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener"><strong>Gold Beach Resort</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/3401003" target="_blank" rel="noreferrer noopener">Violet Clam Slime</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3401010" target="_blank" rel="noreferrer noopener">Seashell Octopus Slime</a>
                <ul>
                    <li><strong>Recommended Level</strong>: 30 - 50</li>
                </ul>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/map/101083000/icon" alt="" /> <strong><a href="https://maplestory.fandom.com/wiki/Category:Elodin" target="_blank" rel="noreferrer noopener">Elodin</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/3501106" target="_blank" rel="noreferrer noopener">Forest Glimmerfox</a> and <a href="https://maplestory.wiki/GMS/215/mob/3501107" target="_blank" rel="noreferrer noopener">Night Glimmerfox</a>
                <ul>
                    <li><strong>Recommended Level: </strong>30 - 50</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_Perion.png/revision/latest?cb=20100619152512" alt="MapIcon Perion" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/map/102030000" target="_blank" rel="noreferrer noopener"><strong>Perion - Wild Boar Land</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2230102" target="_blank" rel="noreferrer noopener">Wild Boars</a>
                <ul>
                    <li><strong>Recommended Level: </strong>50 - 60</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_Perion.png/revision/latest?cb=20100619152512" alt="MapIcon Perion" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/102040200" target="_blank" rel="noreferrer noopener">Perion - Excavation Site</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230125" target="_blank" rel="noreferrer noopener">Skeledogs</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230126" target="_blank" rel="noreferrer noopener">Mummydogs</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/7130103" target="_blank" rel="noreferrer noopener">Commander Soldier</a>
                <ul>
                    <li><strong>Recommended Level: </strong>55 - 70</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/03/MapIcon_Dungeon.png/revision/latest?cb=20100619153113" alt="MapIcon Dungeon" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/105010000" target="_blank" rel="noreferrer noopener">Sleepywood - Silent Swamp</a></strong> and <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/105020000" target="_blank" rel="noreferrer noopener">Sunless Area</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4130100" target="_blank" rel="noreferrer noopener">Copper Drakes</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2600224" target="_blank" rel="noreferrer noopener">Drakes</a>
                <ul>
                    <li><strong>Recommended Level: </strong>60 - 70</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/20/MapIcon_ElNath.png/revision/latest?cb=20100619153423" alt="MapIcon ElNath" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/211040200" target="_blank" rel="noreferrer noopener">El Nath - Ice Valley II</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5140000" target="_blank" rel="noreferrer noopener">White Fang</a>
                <ul>
                    <li><strong>Recommended Level: </strong>70 - 80</li>
                </ul>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/map/310050000/icon" alt="" /> <strong><a href="https://maplestory.wiki/GMS/215/map/310050600" target="_blank" rel="noreferrer noopener">Verne Mine - Shaft 2</a> &amp; <a href="https://maplestory.wiki/GMS/215/map/310060300" target="_blank" rel="noreferrer noopener">Deep Shaft</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/7150001" target="_blank" rel="noreferrer noopener">Big Spider</a> and <a href="https://maplestory.wiki/GMS/215/mob/8105005" target="_blank" rel="noreferrer noopener">Ore Muncher</a>
                <ul>
                    <li><strong>Recommeded Level: </strong>80 - 85</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3f/MapIcon_Magatia.png/revision/latest?cb=20100619153950" alt="MapIcon Magatia" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/260020600" target="_blank" rel="noreferrer noopener">Nihal Desert - Sahel 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110300" target="_blank" rel="noreferrer noopener">Sand Rat</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110301" target="_blank" rel="noreferrer noopener">Scorpion</a>
                <ul>
                    <li><strong>Recommended Level: </strong>80 - 100</li>
                </ul>
                </li>
                <li><strong />  <a href="https://maplestory.wiki/GMS/210.1.1/map/260020610" target="_blank" rel="noreferrer noopener"><strong>Nihal Desert - The Desert of Serenity</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110300" target="_blank" rel="noreferrer noopener">Sand Rat</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3110301" target="_blank" rel="noreferrer noopener">Dark Sand Dwarf</a>
                <ul>
                    <li><strong>Recommended Level: </strong>80 - 100</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3f/MapIcon_Magatia.png/revision/latest?cb=20100619153950" alt="MapIcon Magatia" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/261020300" target="_blank" rel="noreferrer noopener">Magatia - Lab Area C-1</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/map/261020400" target="_blank" rel="noreferrer noopener">Lab Area C-2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5110301" target="_blank" rel="noreferrer noopener">Roid</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5110302" target="_blank" rel="noreferrer noopener">Neo Huroid</a>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 100</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240010600" target="_blank" rel="noreferrer noopener">[Star Force 5] Leafre - Sky Nest II</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140003" target="_blank" rel="noreferrer noopener">Blood Harp</a>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 100</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/240010000" target="_blank" rel="noreferrer noopener">Leafre - West Leafre Forest</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2600003" target="_blank" rel="noreferrer noopener">Rash</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2600004" target="_blank" rel="noreferrer noopener">Dark Rash</a>
                <ul>
                    <li><strong>Recommended Level:</strong> 100 - 110</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240020200" target="_blank" rel="noreferrer noopener">[Star Force 15] Leafre - The Area of Black Kentaurus</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140104" target="_blank" rel="noreferrer noopener">Black Kentaurus</a>
                <ul>
                    <li><strong>Recommended Level: </strong>100 - 110</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/ElNathDungeon_icon.png/revision/latest?cb=20121014185718&path-prefix=pl" alt="ElNathDungeon icon" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Zakum" target="_blank" rel="noreferrer noopener"><strong>[Boss] Normal Zakum</strong></a>: Defeating this will give you LOTS of EXP
                <ul>
                    <li><strong>Recommended Level: </strong>100 - 130</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/MapIcon_Ludibrium.png/revision/latest?cb=20100619153457" alt="MapIcon Ludibrium" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220020600" target="_blank" rel="noreferrer noopener">Ludibrium - Toy Factory</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230111" target="_blank" rel="noreferrer noopener">Robo</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230112" target="_blank" rel="noreferrer noopener">Master Robo</a>
                <ul>
                    <li><strong>Recommended Level: </strong>110 - 125</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/MapIcon_Ludibrium.png/revision/latest?cb=20100619153457" alt="MapIcon Ludibrium" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220060201" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Unbalanced Time</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/7160000" target="_blank" rel="noreferrer noopener">Dual Ghost Pirate</a>
                <ul>
                    <li><strong>Recommended Level: </strong>110 - 130</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/MapIcon_Ludibrium.png/revision/latest?cb=20100619153457" alt="MapIcon Ludibrium" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220060400" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Warped Passage</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8160000" target="_blank" rel="noreferrer noopener">Gatekeeper</a>
                <ul>
                    <li><strong>Recommended Level:</strong> 110 - 130</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/MapIcon_Ludibrium.png/revision/latest?cb=20100619153457" alt="MapIcon Ludibrium" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220070400" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Forgotten Passage</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8170000" target="_blank" rel="noreferrer noopener">Thanatos</a>
                <ul>
                    <li><strong>Recommended Level:</strong> 110 - 130</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/MapIcon_Folkvillige.png/revision/latest?cb=20100619153530" alt="MapIcon Folkvillige" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/224000100" target="_blank" rel="noreferrer noopener">Korean Folk Town - Black Mountain Entrance</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5100100" target="_blank" rel="noreferrer noopener">Moon Bunny</a>
                <ul>
                    <li><strong>Recommended Level: </strong>125 - 140</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/MapIcon_Folkvillige.png/revision/latest?cb=20100619153530" alt="MapIcon Folkvillige" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/224000142" target="_blank" rel="noreferrer noopener">Korean Folk Town - Goblin House</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5100108" target="_blank" rel="noreferrer noopener">Yellow King Goblin</a>
                <ul>
                    <li><strong>Recommended Level: </strong>130 - 150</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bf/MapIcon_ElNathDungeon.png/revision/latest?cb=20100619153440" alt="MapIcon ElNathDungeon" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/211042000" target="_blank" rel="noreferrer noopener">[Star Force 55] El Nath - The Cave of Trial I</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/map/211042200" target="_blank" rel="noreferrer noopener">III</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230108" target="_blank" rel="noreferrer noopener">Jr. Cerebes</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140500" target="_blank" rel="noreferrer noopener">Bain</a>
                <ul>
                    <li><strong>Recommended Level: </strong>130 - 145</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_KerningTower.png/revision/latest?cb=20161101184542" alt="MapIcon KerningTower" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/103041140" target="_blank" rel="noreferrer noopener">Kerning Tower - 5F Cosmetics Store 1</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310011" target="_blank" rel="noreferrer noopener">Killer Cosmetics</a>
                <ul>
                    <li><strong>Recommended Level: </strong>145 - 160</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240040320" target="_blank" rel="noreferrer noopener">[Star Force 65] Leafre - Black Wyvern's Nest</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8150303" target="_blank" rel="noreferrer noopener">Dark Wyvern</a>
                <ul>
                    <li><strong>Recommended Level: </strong>135 - 145</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_KerningTower.png/revision/latest?cb=20161101184542" alt="MapIcon KerningTower" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/103041119" target="_blank" rel="noreferrer noopener">[Star Force 80] Kerning Tower - 2F Cafe 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310017" target="_blank" rel="noreferrer noopener">Enraged Espresso Machine</a>
                <ul>
                    <li><strong>Recommended Level: </strong>145 - 160</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/34/MapIcon_Colossus.png/revision/latest?cb=20191204082802" alt="MapIcon Colossus" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240090200" target="_blank" rel="noreferrer noopener">Stone Colossus - Colossus West Road 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8147000" target="_blank" rel="noreferrer noopener">Mantis</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8147001" target="_blank" rel="noreferrer noopener">Blood Mantis</a>
                <ul>
                    <li><strong>Recommended Level: </strong>150 - 160</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e5/MapIcon_shouwa.png/revision/latest?cb=20171129032639" alt="MapIcon shouwa" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/801040004" target="_blank" rel="noreferrer noopener">Showa Town - Armory</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/9400015" target="_blank" rel="noreferrer noopener">Dusk Viper</a>
                <ul>
                    <li><strong>Recommended Level:</strong> 160 - 185</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/MapIcon_TimeTemple.png/revision/latest?cb=20100619154020" alt="MapIcon TimeTemple" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/map/270030300" target="_blank" rel="noreferrer noopener"><strong>Temple of Time - Road to Oblivion 2/3</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8200011" target="_blank" rel="noreferrer noopener">Oblivion Guardian</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8200012" target="_blank" rel="noreferrer noopener">Chief Oblivion Guardian</a>
                <ul>
                    <li><strong>Recommended Level: </strong>160 - 170</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3a/MapIcon_darkEreb.png/revision/latest?cb=20101224163439" alt="MapIcon darkEreb" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/map/271030200" target="_blank" rel="noreferrer noopener"><strong>Knight Stronghold - Knight District 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8610007" target="_blank" rel="noreferrer noopener">Official Knight C</a>
                <ul>
                    <li><strong>Recommended Level: </strong>165 - 180</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_KerningTower.png/revision/latest?cb=20161101184542" alt="MapIcon KerningTower" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/103041149" target="_blank" rel="noreferrer noopener"> [Star Force 80] Kerning Tower - 5F Cosmetics Store 4&gt;</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310020" target="_blank" rel="noreferrer noopener">Deadly Dressing Table</a>
                <ul>
                    <li><strong>Recommended Level: </strong>160 - 170</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_SavageTerminal.png/revision/latest?cb=20171115151523" alt="MapIcon SavageTerminal" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/map/402000125" target="_blank" rel="noreferrer noopener"><strong>Savage Terminal - Seedy Scrapyard 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2400330" target="_blank" rel="noreferrer noopener">Prickly Hedgehog</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2400331" target="_blank" rel="noreferrer noopener">Foul Ooze Waste</a>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 180</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/MapIcon_OmegaSector.png/revision/latest?cb=20100619153514" alt="MapIcon OmegaSector" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030610" target="_blank" rel="noreferrer noopener">Omega Sector - Corridor 202</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230132" target="_blank" rel="noreferrer noopener">Gray Luxury Saucer</a>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 185</li>
                </ul>
                </li>
                <li><strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030640" target="_blank" rel="noreferrer noopener">[Star Force 140] Omega Sector - Corridor H01/2/3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230141" target="_blank" rel="noreferrer noopener">Gray Commuter Saucer</a>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 200</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/28/MapIcon_destructionPerion.png/revision/latest?cb=20130216143600" alt="MapIcon destructionPerion" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273010000" target="_blank" rel="noreferrer noopener">Twilight Perion - Deserted Southern Ridge</a></strong> + <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273020000" target="_blank" rel="noreferrer noopener">Desolate Hills</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620000" target="_blank" rel="noreferrer noopener">Swollen Stump</a>
                <ul>
                    <li><strong>Recommended Level: </strong>180 - 190</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/28/MapIcon_destructionPerion.png/revision/latest?cb=20130216143600" alt="MapIcon destructionPerion" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273040100" target="_blank" rel="noreferrer noopener">Twilight Perion - Forsaken Excavation Site 2/3/4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620007" target="_blank" rel="noreferrer noopener">Sinister Rocky Mask</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620008" target="_blank" rel="noreferrer noopener">Sinister Steel Mask</a>
                <ul>
                    <li><strong>Recommended Level: </strong>185 - 200</li>
                </ul>
                </li>
                <li> <img src="https://maplestory.io/api/GMS/215/map/410000101/icon" alt="" /> <strong><a href="https://maplestory.wiki/GMS/215/map/410000101" target="_blank" rel="noreferrer noopener">Fox Valley - Fox Tree Midway 1</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/2400256" target="_blank" rel="noreferrer noopener">Snowy Stjartmes</a>
                <ul>
                    <li><strong>Recommended Level: </strong>185 - 200</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/MapIcon_Haven.png/revision/latest?cb=20150118085415" alt="MapIcon Haven" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/310070140" target="_blank" rel="noreferrer noopener">Scrapyard - Scrapyard Hill 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250003" target="_blank" rel="noreferrer noopener">Chaseroid Red</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250005" target="_blank" rel="noreferrer noopener">Hunterizer Red</a>
                <ul>
                    <li><strong>Recommended Level: </strong>200 - 210</li>
                </ul>
                </li>
            </ul>
            <h4>Arcane River - Vanishing Journey + Reverse City [Recommended Level: 200 - 212]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/450001014" target="_blank" rel="noreferrer noopener">[Arcane Force 30] Vanishing Journey - Weathered Land of Sorrow</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641002" target="_blank" rel="noreferrer noopener">Sad Erda</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450001112" target="_blank" rel="noreferrer noopener">[Arcane Force 40] Vanishing Journey - Fire Zone</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641005" target="_blank" rel="noreferrer noopener">Blazing Erda</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width={38} height={38} /> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/450001210" target="_blank" rel="noreferrer noopener">[Arcane Force 60] Vanishing Journey - Forked Road 1</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/map/450001216" target="_blank" rel="noreferrer noopener">Below the Cave</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641007" target="_blank" rel="noreferrer noopener">Tranquil Erda</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641008" target="_blank" rel="noreferrer noopener">Lantern Erda</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/MapIcon_Reverse_City.png/revision/latest?cb=20200611024631" alt="MapIcon Reverse City" width={32} height={34} /> <strong><a href="https://maplestory.wiki/GMS/214/map/450014020" target="_blank" rel="noreferrer noopener">[Arcane Force 40] Reverse City - Subway Tunnel 1 - 6</a></strong>: <a href="https://maplestory.wiki/GMS/214/mob/8641051" target="_blank" rel="noreferrer noopener">Erda Rat</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641052" target="_blank" rel="noreferrer noopener">Monto</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/MapIcon_Reverse_City.png/revision/latest?cb=20200611024631" alt="MapIcon Reverse City" width={32} height={34} /> <strong><a href="https://maplestory.wiki/GMS/214/map/450014100" target="_blank" rel="noreferrer noopener">[Arcane Force 40] Reverse City - T-Boy's Research Train 1 - 3</a></strong>: <a href="https://maplestory.wiki/GMS/214/mob/8641053" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model A</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641054" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model B</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/MapIcon_Reverse_City.png/revision/latest?cb=20200611024631" alt="MapIcon Reverse City" width={32} height={34} /> <a href="https://maplestory.wiki/GMS/214/map/450014300" target="_blank" rel="noreferrer noopener"><strong>[Arcane Force 100] Reverse City - </strong><strong>Hidden Research Train</strong></a>: <a href="https://maplestory.wiki/GMS/214/mob/8641066" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model A</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641067" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model B</a>
                </li>
            </ul>
            <h4>Arcane River - Chu Chu Island + Yum Yum Island [Recommended Level: 210 - 222]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002008" target="_blank" rel="noreferrer noopener">[Arcane Force 100] Chu Chu Island - Bitty-Bobble Forest 1</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642004" target="_blank" rel="noreferrer noopener">Flyon</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002014" target="_blank" rel="noreferrer noopener">[Arcane Force 130] Chu Chu Island - Torrent Zone 3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642010" target="_blank" rel="noreferrer noopener">Rhyturtle</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642011" target="_blank" rel="noreferrer noopener">Boss Rhyturtle</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002016" target="_blank" rel="noreferrer noopener">[Arcane Force 160] Chu Chu Island - Mountain's Mouth</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642012" target="_blank" rel="noreferrer noopener">Crilla</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2c/MapIcon_YumYum.png/revision/latest?cb=20200723072655" alt="MapIcon YumYum" width={36} height={36} /> <strong><a href="https://maplestory.wiki/GMS/215/map/450015050" target="_blank" rel="noreferrer noopener">[Arcane Force 130] Yum Yum Island - Mushbud Forest 3 - 6</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/8642051" target="_blank" rel="noreferrer noopener">Bunshroom</a> and <a href="https://maplestory.wiki/GMS/215/mob/8642050" target="_blank" rel="noreferrer noopener">Monkeyrog</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2c/MapIcon_YumYum.png/revision/latest?cb=20200723072655" alt="MapIcon YumYum" width={36} height={36} /> <strong><a href="https://maplestory.wiki/GMS/215/map/450015290" target="_blank" rel="noreferrer noopener">[Arcane Force 190] Yum Yum Island - Hidden Illiard Field</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/8642062" target="_blank" rel="noreferrer noopener">Potent Lytone</a> and <a href="https://maplestory.wiki/GMS/215/mob/8642063" target="_blank" rel="noreferrer noopener">Potent Stonepy</a>
                </li>
            </ul>
            <h4>Arcane River - Lachelein [Recommended Level: 220 - 225]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003310">[Arcane Force 210] Lachelein - Chicken Festival 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643004">Gallus</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003420"> [Arcane Force 210] Lachelein - Revelation Place 3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643008">Angry Masquerade Citizen</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643009">Insane Masquerade Citizen</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width={38} height={38} /> <a href="https://maplestory.wiki/GMS/210.1.1/map/450003440"><strong>[Arcane Force 210] Lachelein - Occupied Dance Floor 1</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643012">Weakened Dreamkeeper</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003500">[Arcane Force 240] Lachelein - Nightmare Clocktower 1F</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643000">Dreamkeeper</a>
                </li>
            </ul>
            <h4>Arcane River - Arcana [Recommended Level: 225 - 250]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005210">[Arcane Force 320] Arcana - Snow Cloud Clearing</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644003">Snow Cloud Spirit</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005220">[Arcane Force 320] Arcana - Thunder Cloud Clearing</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644004">Thunder Cloud Spirit</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005500">[Arcane Force 360] Arcana - Labyrinthine Cavern</a> and</strong>  <a href="https://maplestory.wiki/GMS/210.1.1/map/450005412"><strong>Upper Path 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644008">Anguished Spirit</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644009">Mournful Spirit</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005430">[Arcane Force 360] Arcana - Cavern Lower Path</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644007">Befuddled Spirit</a>
                </li>
            </ul>
            <h4>Arcane River - Morass [Recommended Level: 230 - 235]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png/revision/latest?cb=20171021043007" alt="MapIcon Morass" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450006210" target="_blank" rel="noreferrer noopener">[Arcane Force 480] Morass - Shadowdance Hall Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644405" target="_blank" rel="noreferrer noopener">Blue Shadow</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644405" target="_blank" rel="noreferrer noopener">Red Shadow</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png/revision/latest?cb=20171021043007" alt="MapIcon Morass" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450006410" target="_blank" rel="noreferrer noopener">[Arcane Force 520] Morass - That Day in Trueffet Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644411" target="_blank" rel="noreferrer noopener">Thralled Wizard</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644412" target="_blank" rel="noreferrer noopener">Thralled Archer</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644410" target="_blank" rel="noreferrer noopener">Thralled Warhammer Knight</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644409" target="_blank" rel="noreferrer noopener">Thralled Guard</a>
                </li>
            </ul>
            <h4>Arcane River - Esfera [Recommended Level: 235 - 250]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450007110" target="_blank" rel="noreferrer noopener">[Arcane Force 600] Esfera - Mirror-touched Sea Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644504" target="_blank" rel="noreferrer noopener">Aranya</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644505" target="_blank" rel="noreferrer noopener">Aranea</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450007210" target="_blank" rel="noreferrer noopener">[Arcane Force 640] Esfera - Radiant Temple Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450007210" target="_blank" rel="noreferrer noopener">Light Executor</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644509" target="_blank" rel="noreferrer noopener">Dark Executor</a>
                </li>
            </ul>
            <h4>Arcane River - Moonbridge + Labyrinth of Suffering [Recommended Level: 245 - 255]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_moonBridge.png/revision/latest?cb=20191204082819" alt="MapIcon moonBridge" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450009110" target="_blank" rel="noreferrer noopener">[Arcane Force 670] Moonbridge - Last Horizon Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644615" target="_blank" rel="noreferrer noopener">Soot Talon</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644614" target="_blank" rel="noreferrer noopener">Soot Beast</a>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_moonBridge.png/revision/latest?cb=20191204082819" alt="MapIcon moonBridge" width={38} height={38} /> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450009310" target="_blank" rel="noreferrer noopener">[Arcane Force 730] Moonbridge - Void Current Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644619" target="_blank" rel="noreferrer noopener">Burst Glare</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644618" target="_blank" rel="noreferrer noopener">Crushing Glare</a>
                </li>
            </ul>
            <h4>Arcane River - Limina [Recommended Level<strong>: </strong>255 - 275]</h4>
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_Limen.png/revision/latest?cb=20191204082817" alt="MapIcon Limen" width={38} height={38} /> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Category:Limina" target="_blank"><strong>Limina</strong></a>
                </li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="themedungeon">Theme Dungeons:</h3>
            <hr />
            <ul>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/MapIcon_fairyAcademy.png/revision/latest?cb=20130628060623" alt="MapIcon fairyAcademy" width={38} height={38} /> <strong>[Lv. 30 - 59] </strong><a href="https://maplestory.fandom.com/wiki/Category:Ellinel" target="_blank" rel="noreferrer noopener"><strong>Ellinel Fairy Academy</strong></a>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[1 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Ellinel_Wings.png/revision/latest?cb=20141018232621" alt="Eqp Ellinel Wings" width={37} height={39} /> <a href="https://maplestory.wiki/GMS/215/item/1102590" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Eqp_Ellinel_Bracelet.png/revision/latest?cb=20141018233813" alt="Eqp Ellinel Bracelet" width={35} height={35} />[Glove], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/Eqp_Fairy_Mark.png/revision/latest?cb=20151220000806" alt="Eqp Fairy Mark" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/215/item/1022254" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ea/Eqp_Honorary_Fairy_Professor.png/revision/latest?cb=20141018232629" alt="Eqp Honorary Fairy Professor" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/37/MapIcon_GoldBeach.png/revision/latest?cb=20121109150254" alt="MapIcon GoldBeach" width={38} height={38} /> <strong>[Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach Resort</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[1 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/Eqp_Octopus_Earrings.png/revision/latest?cb=20151220001827" alt="Eqp Octopus Earrings" width={29} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/1032254" target="_blank" rel="noreferrer noopener">[Earrings]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fe/Eqp_Beach_Bum.png/revision/latest?cb=20141019222458" alt="Eqp Beach Bum" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/MapIcon_glacierExplorer.png/revision/latest?cb=20130619034108" alt="MapIcon glacierExplorer" width={38} height={38} /> <strong>[Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[2 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3b/Eqp_Sailor_Mask.png/revision/latest?cb=20141020050317" alt="Eqp Sailor Mask" width={29} height={28} /> <a href="https://maplestory.wiki/GMS/215/item/1012389" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/46/Eqp_Sailor_Belt.png/revision/latest?cb=20151225204428" alt="Eqp Sailor Belt" width={34} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/1132292" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/Eqp_Deckhand.png/revision/latest?cb=20141020050643" alt="Eqp Deckhand" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/MapIcon_Elodin.png/revision/latest?cb=20190207224724" alt="MapIcon Elodin" width={38} height={38} /> <strong> [Lv. 30 - 59] <a href="https://maplestory.fandom.com/wiki/Category:Elodin" target="_blank" rel="noreferrer noopener">Secret Forest of Elodin</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/Eqp_Elodin_Bird_Dog.png/revision/latest?cb=20190616033103" alt="Eqp Elodin Bird Dog" width={32} height={33} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces]</li>
                </ul>
                </li>
                <li>
                <img src="https://cdn.wikimg.net/en/strategywiki/images/5/51/MS_Mushroom_Castle_icon.png" alt="MS Mushroom Castle icon.png" width={38} height={38} /> <strong>[Lv. 60] <a href="https://strategywiki.org/wiki/MapleStory/Mushroom_Castle" target="_blank" rel="noreferrer noopener">Mushroom Kingdom</a>: </strong>Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />
                <ul>
                    <li>Has lots of cutscenes compared to the previous Theme Dungeons which is why most people skip this one</li>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[3 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Violetta%27s_Knight.png/revision/latest?cb=20141115053750" alt="Eqp Violetta's Knight" width={33} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6a/Eqp_Heavy_Violetta_Cape.png/revision/latest?cb=20141115053729" alt="Eqp Heavy Violetta Cape" width={31} height={33} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a><a href="https://maplestory.wiki/GMS/215/item/1142629" target="_blank" rel="noreferrer noopener">, </a> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Shackles_of_Love.png/revision/latest?cb=20160621015045" alt="Eqp Shackles of Love" width={35} height={33} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/MapIcon_PL_AfterLand.png/revision/latest?cb=20181005120902" alt="MapIcon PL AfterLand" width={38} height={38} /> <strong>[Lv. 75] <a href="https://maplestory.fandom.com/wiki/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a>: </strong>Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />and Dimensional Mirror
                <ul>
                    <li>An easy way to obtain permanent totems that you can equip for extra stats (maximum 3 totems)</li>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Eqp_Beodog_Figurine.png/revision/latest?cb=20170121172854" alt="Eqp Beodog Figurine" width={31} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/95/Eqp_Billy_Figurine.png/revision/latest?cb=20170121172901" alt="Eqp Billy Figurine" width={32} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/Eqp_Adler_Figurine.png/revision/latest?cb=20170121172908" alt="Eqp Adler Figurine" width={26} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Mansa_Figurine.png/revision/latest?cb=20170121172915" alt="Eqp Mansa Figurine" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Afterlands Totems]</a>
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
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/65/MapIcon_jipangu.png/revision/latest?cb=20171129032623" alt="MapIcon jipangu" width={38} height={38} /> <strong>[Lv. 100] </strong><a href="https://maplestory.fandom.com/wiki/Category:Mushroom_Shrine" target="_blank" rel="noreferrer noopener"><strong>Mushroom Shrine Tales</strong></a>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />and Dimensional Mirror
                <ul>
                    <li>Completing this storyline gives you <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Wings_of_Fate.png/revision/latest?cb=20190531042939" alt="Eqp Wings of Fate" width={36} height={35} /> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> which give some pretty good stats but may be tedious to obtain since the story is quite long</li>
                    <li>This cape may be useful for gear progression in Reboot if you do want to obtain it</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/13/MapIcon_LionCastle.png/revision/latest?cb=20100909103204" alt="MapIcon LionCastle" width={38} height={38} /> <strong>[Lv. 115] <a href="https://maplestory.fandom.com/wiki/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Pre-Quest] Lion King's Castle</a></strong>: Accessible from a quest in your Lightbulb tab and from traveling from <a href="https://maplestory.wiki/GMS/210.1.1/map/211040600" target="_blank" rel="noreferrer noopener">El Nath</a>, Completing this Theme Dungeon grants access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b4/MapIcon_VanLeon.png/revision/latest?cb=20100909103717" alt="MapIcon VanLeon" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/14/Eqp_Heart_of_a_Lion.png/revision/latest?cb=20160808182142" alt="Eqp Heart of a Lion" width={31} height={33} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Box" target="_blank" rel="noreferrer noopener">[Mastery Book Box]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/23/MapIcon_Folkvillige.png/revision/latest?cb=20100619153530" alt="MapIcon Folkvillige" width={38} height={38} /> <strong>[Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Korean_Folk_Town" target="_blank" rel="noreferrer noopener">Korean Folk Town</a>: </strong>Accessible by accepting a quest in your Lightbulb icon or by traveling from <a href="https://maplestory.fandom.com/wiki/Helios_Tower_(100th_Floor)" target="_blank" rel="noreferrer noopener">Ludibrium</a> or <a href="https://maplestory.fandom.com/wiki/The_Sharp_Unknown" target="_blank" rel="noreferrer noopener">Aqua Road</a>
                <ul>
                    <li><strong>Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Eqp_Like_Clouds_and_Winds.png/revision/latest?cb=20160208230235" alt="Eqp Like Clouds and Winds" width={32} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/MapIcon_GoldTempleTH.png/revision/latest?cb=20100619154244" alt="MapIcon GoldTempleTH" width={38} height={38} /> <strong> [Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Golden_Temple" target="_blank" rel="noreferrer noopener">Golden Temple</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />and Dimensional Mirror
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Ravana%27s_Golden_Crown.png/revision/latest?cb=20151107212835" alt="Eqp Ravana's Golden Crown" width={27} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003455" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8a/Eqp_Seeker_of_Gilded_Truth.png/revision/latest?cb=20160808182338" alt="Eqp Seeker of Gilded Truth" width={30} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3e/MapIcon_Crimsonwood.png/revision/latest?cb=20191204083038" alt="MapIcon Crimsonwood" width={38} height={38} /> <strong> [Lv. 130] <a href="https://maplestory.fandom.com/wiki/Category:Tynerum" target="_blank" rel="noreferrer noopener">Crimsonheart Castle</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} />and Dimensional Mirror
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ee/Eqp_Crimsonheart_Savior.png/revision/latest?cb=20141115224825" alt="Eqp Crimsonheart Savior" width={27} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8f/MapIcon_Partem.png/revision/latest?cb=20191204082821" alt="MapIcon Partem" width={38} height={38} /> <strong>[Lv. 135] </strong><strong>Partem Ruins</strong>: Accessible initially from a quest in your Lightbulb icon and from Partem in <a href="https://maplestory.fandom.com/wiki/Spore_Hill" target="_blank" rel="noreferrer noopener">Henesys</a>
                <ul>
                    <li><strong>Main Rewards: </strong>[Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f5/MapIcon_ShangHaiCN.png/revision/latest?cb=20171129032322" alt="MapIcon ShangHaiCN" width={38} height={38} /> <strong>[Lv. 140] </strong><a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener"><strong>The Far East (Yu Garden)</strong></a>: Accessible from <a href="https://maplestory.wiki/GMS/210.1.1/map/104020000" target="_blank" rel="noreferrer noopener">Six Path Crossway</a>
                <ul>
                    <li>After completing the storyline here, there are daily quests that reward you <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/87/Etc_Yu_Garden_Coin.png/revision/latest?cb=20191222205244" alt="Etc Yu Garden Coin" width={30} height={30} /> [Yu Garden Coins] a special currency</li>
                    <li><strong>Main Rewards: </strong>[<em>(Reboot Only)</em> Epic Potential Scroll], <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d6/Eqp_Horseback_Riding_Doll_Totem.png/revision/latest?cb=20200323215029" alt="Eqp Horseback Riding Doll Totem" width={34} height={37} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c9/Eqp_Jade_Kettle_Totem.png/revision/latest?cb=20200323215111" alt="Eqp Jade Kettle Totem" width={36} height={36} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Eqp_Bronze_Incense_Burner_Totem.png/revision/latest?cb=20200323215158" alt="Eqp Bronze Incense Burner Totem" width={28} height={37} />[Totems],</li>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Recommended + Important]:</strong> Provides an easy source to Epic Potential Scrolls in Reboot Servers which is why it is important!</li>
                    <li>An in-depth guide to the Yu Garden dailies: <a href="https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/" target="_blank" rel="noreferrer noopener">https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/MapIcon_CommerzBT.png/revision/latest?cb=20140328223105" alt="MapIcon CommerzBT" width={38} height={38} /> <strong>[Lv. 140] <a href="https://maplestory.fandom.com/wiki/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener">Commerci</a></strong>: Accessible from <img src="https://grandislibrary.files.wordpress.com/2020/04/maplestory_qjjmolzewp.png" alt="MapleStory_qjjMOLZewp" width={48} height={45} /> and Dimensional Mirror. Grants access to the Commerci Merchant Union PQ after a completing a series of quests here
                <ul>
                    <li>The PQ is where you obtain <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5a/Eqp_Sweetwater_Axe.png/revision/latest?cb=20171006040855" alt="Eqp Sweetwater Axe" width={30} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a9/Eqp_Sweetwater_Hat.png/revision/latest?cb=20141001015449" alt="Eqp Sweetwater Hat" width={36} height={26} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Sweetwater_Tattoo.png/revision/latest?cb=20161102002907" alt="Eqp Sweetwater Tattoo" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/32/Eqp_Sweetwater_Monocle.png/revision/latest?cb=20161101060254" alt="Eqp Sweetwater Monocle" width={32} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a>
                    </li>
                    <li>A guide to the Commerci Pre-Quests: <a href="https://www.youtube.com/watch?v=OKIlC9I2ExM" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=OKIlC9I2ExM</a>
                    </li>
                    <li>An in-depth guide to Commerci:<a href="https://www.youtube.com/watch?v=UtW6Lldv7K8" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=UtW6Lldv7K8</a>
                    </li>
                    <li><strong>Main Rewards for Completing Storyline: </strong>[Medal], <img src="https://maplestory.io/api/GMS/205/item/1003984/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1003984" target="_blank" rel="noreferrer noopener">[Commerci Hat]</a>, <img src="https://maplestory.io/api/GMS/205/item/1052673/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1052673" target="_blank" rel="noreferrer noopener">[Commerci Suit]</a> <img src="https://maplestory.io/api/GMS/205/item/1072874/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1072874" target="_blank" rel="noreferrer noopener">[Commerci Boots]</a>, <img src="https://maplestory.io/api/GMS/205/item/1082559/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1082559">[Commerci Gloves]</a>, <img src="https://maplestory.io/api/GMS/205/item/1102626/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1102626">[Commerci Cape]</a>, <img src="https://maplestory.io/api/GMS/205/item/1132248/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1132248" target="_blank" rel="noreferrer noopener">[Commerci Belt]</a>, <img src="https://maplestory.io/api/GMS/205/item/1152161/icon" alt="" /> <a href="https://maplestory.wiki/GMS/205/item/1152161" target="_blank" rel="noreferrer noopener">[Commerci Shoulder]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Eqp_Devil%27s_Sunrise.png/revision/latest?cb=20160816172357" alt="Eqp Devil's Sunrise" width={38} height={38} /> [Commerci Weapon for your class]
                    <ul>
                        <li>Commerci gear is separate from Sweetwater gear</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_KerningTower.png/revision/latest?cb=20161101184542" alt="MapIcon KerningTower" width={38} height={38} /> <strong>[Lv. 145] <a href="https://maplestory.fandom.com/wiki/Category:Kerning_Tower" target="_blank" rel="noreferrer noopener">Kerning Tower</a></strong>: Accessible by completing a quest in your Lightbulb icon and from <a href="https://maplestory.wiki/GMS/210.1.1/map/103000000" target="_blank" rel="noreferrer noopener">Kerning City</a>
                <ul>
                    <li><strong>Main Reward:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/68/Eqp_Jackpot_Entertainment_Co-CEO.png/revision/latest?cb=20170531215647" alt="Eqp Jackpot Entertainment Co-CEO" width={35} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/34/MapIcon_Colossus.png/revision/latest?cb=20191204082802" alt="MapIcon Colossus" width={38} height={38} /> <strong>[Lv. 150]</strong>  <a href="https://maplestory.fandom.com/wiki/Category:Stone_Colossus" target="_blank" rel="noreferrer noopener"><strong>Stone Colossus</strong></a>: Accessible from <a href="https://maplestory.fandom.com/wiki/Forest_:_Crossroad" target="_blank" rel="noreferrer noopener">Leafre</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7d/Eqp_Colossal.png/revision/latest?cb=20140922173630" alt="Eqp Colossal" width={29} height={32} /> [Medal],
                    <img alt="" src="https://i.imgur.com/pqRM0QP.png" />[Mount], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Halflinger_Expedition_Badge.png/revision/latest?cb=20160827000811" alt="Eqp Halflinger Expedition Badge" width={33} height={29} /> [Badge]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/MapIcon_OmegaSector.png/revision/latest?cb=20100619153514" alt="MapIcon OmegaSector" width={38} height={38} /> <strong> [Lv. 165] <a href="https://maplestory.fandom.com/wiki/Category:Omega_Sector" target="_blank" rel="noreferrer noopener">Omega Sector</a></strong>: Accessible initially by accepting a quest in the Lightbulb icon or from <a href="https://maplestory.wiki/GMS/210.1.1/map/220000400" target="_blank" rel="noreferrer noopener">Ludibrium Eos Tower</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/74/Eqp_White_M-Forcer.png/revision/latest?cb=20170723054655" alt="Eqp White M-Forcer" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_SavageTerminal.png/revision/latest?cb=20171115151523" alt="MapIcon SavageTerminal" width={38} height={38} /> <strong>[Lv. 175] </strong><strong>Detective Rave's Case Notes: </strong>Accessible initially from accepting a quest in your Lightbulb icon or from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
                <ul>
                    <li><strong>Main Rewards</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c9/Eqp_Detective_Rave%27s_Honorary_Assistant.png/revision/latest?cb=20190308004823" alt="Eqp Detective Rave's Honorary Assistant" width={27} height={30} /> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/MapIcon_foxvillage.png/revision/latest?cb=20141217120807" alt="MapIcon foxvillage" width={38} height={38} /> <strong>[Lv. 185] </strong><a href="https://maplestory.fandom.com/wiki/Category:Fox_Valley" target="_blank" rel="noreferrer noopener"><strong>Fox Valley</strong></a>: Accessible by accepting a quest in the Lightbulb icon and from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/62/Eqp_Fox_Point_Ranger.png/revision/latest?cb=20180524140256" alt="Eqp Fox Point Ranger" width={29} height={32} /> [Medal]</li>
                </ul>
                </li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="quests">Quests:</h3>
            <hr />
            <ul>
                <li>Most of the pre-Lv. 100 quests here are outdated except the ones that reward medals and purely grinding is preferred</li>
                <li><strong>Class Main Storyline</strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 1 - 100</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/62/MapIcon_Henesys.png/revision/latest?cb=20100619152431" alt="MapIcon Henesys" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener">Henesys</a></strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 10 - 19</li>
                    <li><strong>Quest Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1032003" target="_blank" rel="noreferrer noopener">[Amethyst Earrings]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Yellow_Square.png/revision/latest?cb=20150221191907" alt="Eqp Yellow Square" width={30} height={27} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032009">[Yellow Square Earrings]</a>,</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_Perion.png/revision/latest?cb=20100619152512" alt="MapIcon Perion" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener">Perion</a></strong>
                <ul>
                    <li><strong>Recommended Level</strong>: 10 - 19</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/MapIcon_Ellinia.png/revision/latest?cb=20100619152452" alt="MapIcon Ellinia" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/26" target="_blank" rel="noreferrer noopener"><strong>Ellinia</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>25-30</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/MapIcon_KerningCity.png/revision/latest?cb=20100619152541" alt="MapIcon KerningCity" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Kerning City</strong></a>
                <ul>
                    <li><strong>Recommended Level</strong>: 43 - 50</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_Perion.png/revision/latest?cb=20100619152512" alt="MapIcon Perion" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Perion</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>55 - 60</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_Perion.png/revision/latest?cb=20100619152512" alt="MapIcon Perion" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/30" target="_blank" rel="noreferrer noopener"><strong>Perion Excavation Site</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>60 - 70</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/03/MapIcon_Dungeon.png/revision/latest?cb=20100619153113" alt="MapIcon Dungeon" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/31" target="_blank" rel="noreferrer noopener"><strong>Sleepywood</strong></a>
                <ul>
                    <li><strong>Recommened Level: </strong>60 - 70</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/MapIcon_Orbis.png/revision/latest?cb=20100619153403" alt="MapIcon Orbis" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/34" target="_blank" rel="noreferrer noopener"><strong>Orbis</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>70 - 75</li>
                    <li><strong>Quest Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/73/Eqp_Helper_in_the_Clouds.png/revision/latest?cb=20170831072844" alt="Eqp Helper in the Clouds" width={33} height={29} /> [Medal],</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_AquaRoad.png/revision/latest?cb=20100619153618" alt="MapIcon AquaRoad" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/35" target="_blank" rel="noreferrer noopener"><strong>Aqua Road</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>75 - 80</li>
                    <li><strong>Quest Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1102048" target="_blank" rel="noreferrer noopener">[Red Musketeer Cape]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/20/MapIcon_ElNath.png/revision/latest?cb=20100619153423" alt="MapIcon ElNath" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/33" target="_blank" rel="noreferrer noopener"><strong>El Nath</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>75 - 80</li>
                    <li><strong>Quest Rewards: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1102109" target="_blank" rel="noreferrer noopener">[Cape of Warmness]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b7/Eqp_Blue_Justice_Cape.png/revision/latest?cb=20121022081758" alt="Eqp Blue Justice Cape" width={29} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Eqp_Red_Justice_Cape.png/revision/latest?cb=20121022081804" alt="Eqp Red Justice Cape" width={29} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/63/Eqp_White_Justice_Cape.png/revision/latest?cb=20121022081812" alt="Eqp White Justice Cape" width={29} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Black_Justice_Cape.png/revision/latest?cb=20121022081816" alt="Eqp Black Justice Cape" width={29} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102011" target="_blank" rel="noreferrer noopener">[Justice Cape]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3f/MapIcon_Magatia.png/revision/latest?cb=20100619153950" alt="MapIcon Magatia" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/43" target="_blank" rel="noreferrer noopener"><strong>Magatia</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 100</li>
                    <li><strong>Quest Rewards:</strong>
                    </li>
                    <li> <img src="https://maplestory.io/api/GMS/210.1.1/item/1143025/icon" alt="" />[Medal],<strong />  <a href="https://maplestory.wiki/GMS/210.1.1/item/1102139" target="_blank" rel="noreferrer noopener">[Zenumist's Cape]</a> OR <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/16/Eqp_Alcadno%27s_Cape.png/revision/latest?cb=20191226032417" alt="Eqp Alcadno's Cape" width={30} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102140" target="_blank" rel="noreferrer noopener">[Alcadno's Cape]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Eqp_Strong_Machine_Gloves.png/revision/latest?cb=20121118095723" alt="Eqp Strong Machine Gloves" width={26} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082283" target="_blank" rel="noreferrer noopener">[Strong Machine Gloves]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/90/MapIcon_retakeHQ.png/revision/latest?cb=20120801091846" alt="MapIcon retakeHQ" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/21" target="_blank" rel="noreferrer noopener">Heliseum</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>90 - 110</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5e/MapIcon_EilnForest.png/revision/latest?cb=20100619153558" alt="MapIcon EilnForest" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/39" target="_blank" rel="noreferrer noopener"><strong>Ellin Forest</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>95 - 100</li>
                    <li><strong>Quest Rewards: </strong>[Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/33/Eqp_Ephenia%27s_Ring.png/revision/latest?cb=20130701085128" alt="Eqp Ephenia's Ring" width={34} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1112683" target="_blank" rel="noreferrer noopener">[Ephenia's Ring]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/41" target="_blank" rel="noreferrer noopener"><strong>Leafre</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>102 - 110</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/MapIcon_Ludibrium.png/revision/latest?cb=20100619153457" alt="MapIcon Ludibrium" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/36" target="_blank" rel="noreferrer noopener">Ludibrium</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>95 - 115</li>
                    <li><strong>Quest Rewards: </strong>[Medal]<strong>, </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/1032012" target="_blank" rel="noreferrer noopener">[Skull Earrings]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d1/Eqp_Ludibrium_Cape.png/revision/latest?cb=20200111210809" alt="Eqp Ludibrium Cape" width={33} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102057" target="_blank" rel="noreferrer noopener">[Ludibrium Cape]</a>
                    </li>
                </ul>
                </li>
                <li><strong><a href="https://maplestory.fandom.com/wiki/Quests/33" target="_blank" rel="noreferrer noopener">El Nath - Dead Mines</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>115 - 120</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_Leafre.png/revision/latest?cb=20100619153900" alt="MapIcon Leafre" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Quests/41" target="_blank" rel="noreferrer noopener"><strong>Leafre - Dragon Forest</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>120 - 130</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/MapIcon_Murueng.png/revision/latest?cb=20100619153917" alt="MapIcon Murueng" width={38} height={38} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/21/MapIcon_WhiteHerb.png/revision/latest?cb=20100619153907" alt="MapIcon WhiteHerb" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/44">Mu Lung / Herb Town</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>135 - 140</li>
                    <li><strong>Quest Rewards: </strong>[Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/MapIcon_TimeTemple.png/revision/latest?cb=20100619154020" alt="MapIcon TimeTemple" width={38} height={38} /> <strong> <a href="https://maplestory.fandom.com/wiki/Quests/46" target="_blank" rel="noreferrer noopener">Temple of Time</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>140 - 155</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4f/MapIcon_destructionTown.png/revision/latest?cb=20101224163328" alt="MapIcon destructionTown" width={38} height={38} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3a/MapIcon_darkEreb.png/revision/latest?cb=20101224163439" alt="MapIcon darkEreb" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Gate to the Future</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>160 - 185</li>
                    <li><strong>Quest Rewards:</strong> [Medal]</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/MapIcon_critias.png/revision/latest?cb=20140817020313" alt="MapIcon critias" width={38} height={38} /> <strong><a href="https://maplestory.fandom.com/wiki/Quests/81" target="_blank" rel="noreferrer noopener">Kritias</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 185</li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d4/MapIcon_NLC.png/revision/latest?cb=20130625154912" alt="MapIcon NLC" width={38} height={38} /> <strong> <a href="https://maplestory.fandom.com/wiki/Category:Masteria" target="_blank" rel="noreferrer noopener">New Leaf City</a></strong>
                <ul>
                    <li><strong>Recommended Level: </strong>170 - 200</li>
                    <li><strong>Main Rewards: </strong><a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Masteria Explorer Gear]</a>
                    </li>
                </ul>
                </li>
                <li> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/28/MapIcon_destructionPerion.png/revision/latest?cb=20130216143600" alt="MapIcon destructionPerion" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener"><strong>Gate to the Future</strong></a>
                <ul>
                    <li><strong>Recommended Level: </strong>180 - 190</li>
                    <li><strong>Quest Rewards:</strong> [Medal]</li>
                </ul>
                </li>
            </ul>
            <div><Link smooth href="#top">Go to top</Link></div>
            <h3 id="lightbulb">Lightbulb Quests:</h3>
            <hr />
            <p>The quests found in your "Maple Mailbox" or the Lightbulb icon on the left-hand side may be overwhelming with the number of quests available. Here will be a list of quests and which ones are more important compared to others. If you do not see a certain quest, it may be tied to your class' storyline. These can be skipped by most classes. But, Explorer classes, Hoyoung, and Adele gain special rewards though from their class' storyline so, it should not be skipped. Quests with the label <span style={{color: '#ff0000'}} data-preserve-html-node="true">[Required]</span> should also be completed</p>
            <h4>Recommended Quests:</h4>
            <ul>
                <li><strong>(Lv. 33) Have you learned about pets? </strong>- Tutorial quest explaining pets. Rewards you with a free 3-day pet
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://maplestory.io/api/GMS/215/item/1182286/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/1182286" target="_blank" rel="noreferrer noopener">[Badge]</a>, <img src="https://maplestory.io/api/GMS/215/item/5000241/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5000241" target="_blank" rel="noreferrer noopener">[Pet <em>(Cannot be revived)</em>]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 35) The Professional </strong>- A quest to start unlocking Professions, MapleStory's crafting system</li>
                <li><strong>(Lv. 50) The Eye Opener </strong>- Unlocks your Inner Ability</li>
                <li><strong>(Lv. 70) [Link Skill] Teaching Link Skill </strong>- Explains Link Skills and unlocks your Link Skill for some classes</li>
                <li><strong>(Lv. 90) [Silent Crusade] A Cry for Help</strong> - Completing this storyline unlocks access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e9/MapIcon_Akairum.png/revision/latest?cb=20141001075303" alt="MapIcon Akairum" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a> (but cannot be fought until Lv. 140). You can access the Silent Crusade UI from a HotKey found in your keyboard shortcuts at the bottom by pressing "\"
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Setup_Superior_Hunter.png/revision/latest?cb=20130708040838" alt="Setup Superior Hunter" width={33} height={31} /> [Titles], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Silent_Crusade_Champion.png/revision/latest?cb=20170604190531" alt="Eqp Silent Crusade Champion" width={32} height={34} />[Medals], <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/63/Eqp_Silent_Crusader_Belt.png/revision/latest?cb=20160829182556" alt="Eqp Silent Crusader Belt" width={30} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Eqp_Veteran_Crusader_Shoulder.png/revision/latest?cb=20200323171131" alt="Eqp Veteran Crusader Shoulder" width={32} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Eqp_Veteran_Crusader_Pendant.png/revision/latest?cb=20191026212657" alt="Eqp Veteran Crusader Pendant" width={33} height={31} /> [Veteran Crusader Gear], <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Eqp_Mystic_Belt.png/revision/latest?cb=20160829183426" alt="Eqp Mystic Belt" width={35} height={25} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Earrings.png/revision/latest?cb=20200323170011" alt="Eqp Mystic Earrings" width={31} height={26} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/Eqp_Mystic_Pendant.png/revision/latest?cb=20191026212843" alt="Eqp Mystic Pendant" width={30} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/be/Eqp_Mystic_Face_Accessory.png/revision/latest?cb=20200323161919" alt="Eqp Mystic Face Accessory" width={23} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Eqp_Mystic_Eye_Accessory.png/revision/latest?cb=20160123040217" alt="Eqp Mystic Eye Accessory" width={33} height={27} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Mystic_Set" target="_blank" rel="noreferrer noopener">[Mystic Gear]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 90) To Pantheon </strong>- Completing this storyline unlocks access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/MapIcon_Magnus.png/revision/latest?cb=20141124064756" alt="MapIcon Magnus" width={38} height={38} /> <a href="https://maplestory.fandom.com/wiki/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> (cannot be fought until Lv. 155) and daily quests for <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Etc_Shadowdealer_Coin.png/revision/latest?cb=20160519074425" alt="Etc Shadowdealer Coin" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> which can be used as currency for a <a href="https://maplestory.fandom.com/wiki/Mayala" target="_blank" rel="noreferrer noopener">special shop</a>
                <ul>
                    <li>Normal and Hard Magnus cannot be fought until Lv. 155+</li>
                </ul>
                </li>
                <li><strong>(Lv. 100) [Ursus] Rumors of The Mighty </strong>- Quest to get started with Ursus, an important boss in Reboot for Mesos. Provides a quick explanation to the boss
                <ul>
                    <li><strong>Main Reward: </strong><strong />[Mesos]</li>
                </ul>
                </li>
                <li><strong>(Lv. 100) [Mushroom Shrine Tales] Kino Konoko's Request </strong>- Completing this storyline rewards you <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/49/Eqp_Wings_of_Fate.png/revision/latest?cb=20190531042939" alt="Eqp Wings of Fate" width={36} height={35} /> <a href="https://maplestory.fandom.com/wiki/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> which give some pretty good stats but may be tedious to obtain since the story is quite long
                <ul>
                    <li>This cape may be useful for gear progression in Reboot if you do want to obtain it</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Maple Tour] Lulu Spinel's Request </strong>- Quest to get started with Maple Tour, an important activity in Reboot for Mesos. Provides a quick explanation to Maple Tour
                <ul>
                    <li><strong>Main Reward: </strong><strong />[Mesos]</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Monster Park] Monster Park Grand Re-opening</strong> - Quest to get started with Monster Park, a special dungeon area that provides EXP when completed</li>
                <li><strong>(Lv. 110) [MONAD: The First Omen] An Old Woman's Letter </strong>- A long storyline with multiple acts
                <ul>
                    <li>Monad may be difficult, I recommend trying out Monad at a higher level or else you may get stuck or die a lot</li>
                    <li>Additionally provides a decent amount of EXP and a great title, <img src="https://maplestory.io/api/GMS/210.1.1/item/3700501/icon" alt="Invincible Hero of the Snowfield" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/3700501" target="_blank" rel="noreferrer noopener">[Title]</a> for defeating Julieta without dying</li>
                    <li><strong>Act 1 Rewards</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/17/Eqp_Kaptafel_Hat.png/revision/latest?cb=20180819165342" alt="Eqp Kaptafel Hat" width={33} height={31} /> <a href="https://maplestory.wiki/GMS/205/item/2439152" target="_blank" rel="noreferrer noopener">[Kaptafel Hat Transformation Coupon]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Use_Eyeful%27s_Equipment_Trading_Coupon.png/revision/latest?cb=20180819165341" alt="Use Eyeful's Equipment Trading Coupon" width={31} height={23} />[Equipment Box]</li>
                    <li><strong>Act 2 Rewards</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b3/Skill_Shrelephant_Mount.png/revision/latest?cb=20180819165344" alt="Skill Shrelephant Mount" width={32} height={32} /> [Mount], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Alika%27s_Knight.png/revision/latest?cb=20180819165341" alt="Eqp Alika's Knight" width={37} height={35} />[Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Use_Eyeful%27s_Equipment_Trading_Coupon.png/revision/latest?cb=20180819165341" alt="Use Eyeful's Equipment Trading Coupon" width={31} height={23} />[Equipment Box]</li>
                    <li><strong>Act 3 Rewards: </strong>[Chair], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/94/Eqp_Savior_of_Abrup.png/revision/latest?cb=20180819165343" alt="Eqp Savior of Abrup" width={34} height={34} />[Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Use_Eyeful%27s_Equipment_Trading_Coupon.png/revision/latest?cb=20180819165341" alt="Use Eyeful's Equipment Trading Coupon" width={31} height={23} />[Equipment Box]</li>
                </ul>
                </li>
                <li><strong>(Lv. 115) [Easy Magnus] Magnus Simulator </strong>- Short dialogue quest that unlocks access to Easy Magnus</li>
                <li><strong>(Lv. 115) [Papulatus] The Light of Chaos </strong>- Starts the pre-quests for the boss Papulatus</li>
                <li><strong>(Lv. 120) Call of Princess Sakuno: Stop Mori Ranmaru! </strong>- Short dialogue quest that unlocks access to the boss Mori Ranmori</li>
                <li><strong>(Lv. 120) [Black Heaven] For Maple World </strong>- A long storyline with multiple Acts. Completing Black Heaven will unlock access to the boss <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bd/Mobicon_Lotus_%282%29.png/revision/latest?cb=20150312043217" alt="Mobicon Lotus (2)" width={27} height={27} />Lotus (but cannot be fought until Lv. 190)
                <ul>
                    <li>Completing this on one character will unlock access to Lotus for all your characters in the same world</li>
                    <li><strong>Act 2 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/Eqp_Ace_of_the_Alliance.png/revision/latest?cb=20181027073921" alt="Eqp Ace of the Alliance" width={23} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/Setup_Hanging_with_Neinheart_Chair.png/revision/latest?cb=20181027073921" alt="Setup Hanging with Neinheart Chair" width={30} height={31} /> <a href="https://maplestory.wiki/GMS/215/item/3015030" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 4 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Eqp_Android_Helmet.png/revision/latest?cb=20181027073921" alt="Eqp Android Helmet" width={31} height={31} /> <a href="https://maplestory.wiki/GMS/215/item/1004392" target="_blank" rel="noreferrer noopener">[Hat]</a>
                    </li>
                    <li><strong>Act 6 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Eqp_Maple_World_Savior.png/revision/latest?cb=20181027073921" alt="Eqp Maple World Savior" width={27} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/90/Skill_Orchid%27s_Support_Mount.png/revision/latest?cb=20181027073922" alt="Skill Orchid's Support Mount" width={32} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cf/Skill_Athena_Pierce%27s_Support_Mount.png/revision/latest?cb=20181027073922" alt="Skill Athena Pierce's Support Mount" width={32} height={32} /> [Choice of 1 mount (lasts 30 days)]</li>
                </ul>
                </li>
                <li><strong>(Lv. 135) [Heroes] Feelings of Misfortune </strong>- A long storyline with multiple acts where you get to play as the five Heroes of Maple (Mercedes, Phantom, etc.)
                <ul>
                    <li>Completing Act 4 will unlock access to <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/MapIcon_fallenWorldTree.png/revision/latest?cb=20191204082811" alt="MapIcon fallenWorldTree" width={38} height={38} /> Damien (but cannot be fought until Lv. 190)
                    <ul>
                        <li>You do not need to do the other 3 acts</li>
                        <li>Completing this on one character will unlock access to Damien for all your characters in the same world</li>
                    </ul>
                    </li>
                    <li>Completing all Acts twice will grant <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/Setup_Heroes_Cube_Chair_-_Evan.png/revision/latest?cb=20181027072815" alt="Setup Heroes Cube Chair - Evan" width={33} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/3017016" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 1 Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a3/Setup_Heroes_Cube_Chair_-_Aran.png/revision/latest?cb=20181027072814" alt="Setup Heroes Cube Chair - Aran" width={32} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/3017011" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 1.5 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8f/Setup_Heroes_Cube_Chair_-_Shade.png/revision/latest?cb=20181027072815" alt="Setup Heroes Cube Chair - Shade" width={33} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/3017012" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 2 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Setup_Heroes_Cube_Chair_-_Phantom.png/revision/latest?cb=20181027072815" alt="Setup Heroes Cube Chair - Phantom" width={32} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/3017013" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 3 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5b/Setup_Heroes_Cube_Chair_-_Mercedes.png/revision/latest?cb=20181027072815" alt="Setup Heroes Cube Chair - Mercedes" width={32} height={29} /> <a href="https://maplestory.wiki/GMS/215/item/3017014" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                    <li><strong>Act 4 Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d7/Setup_Heroes_Cube_Chair_-_Luminous.png/revision/latest?cb=20181027072815" alt="Setup Heroes Cube Chair - Luminous" width={32} height={29} /> <a href="https://maplestory.wiki/GMS/215/item/3017015" target="_blank" rel="noreferrer noopener">[Chair]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Hieizan Temple] Regards, Takeda Shingen </strong>- Pre-quests to unlocking access to the boss Princess No</li>
                <li><strong>(Lv. 140) [Temple of Time] Path to the Past </strong>- Pre-quests to unlocking access to Pink Bean</li>
                <li><strong>(Lv. 160) [Masteria Epic] Lost Hero's Call - </strong>A long storyline with multiple acts where you learn the history behind Masteria's past. The storyline may be quite long but you get the best <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Antellion_Guardian.png/revision/latest?cb=20181026154458" alt="Eqp Antellion Guardian" width={26} height={34} />medal in the game currently as a reward
                <ul>
                    <li><strong>Act 4 Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Antellion_Guardian.png/revision/latest?cb=20181026154458" alt="Eqp Antellion Guardian" width={26} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">[Best-in-slot Medal]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Subani%27s_Pendant.png/revision/latest?cb=20181026170542" alt="Eqp Subani's Pendant" width={30} height={31} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122352" target="_blank" rel="noreferrer noopener">[Subani's Pendant]</a>,</li>
                    <li><strong>Depending on choice rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/da/Setup_Crimsonwood_Warrior.png/revision/latest?cb=20181026171202" alt="Setup Crimsonwood Warrior" width={35} height={35} />[Chair], <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_Subani-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Subani-Roid" width={22} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> OR <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Setup_Dark_Follower.png/revision/latest?cb=20181026171412" alt="Setup Dark Follower" width={34} height={35} />[Chair], <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Dr.Jang-Roid.png/revision/latest?cb=20181026171412" alt="Eqp Dr.Jang-Roid" width={22} height={28} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662091" target="_blank" rel="noreferrer noopener">[Dr. Jang-Roid]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Gollux] The Cracks of Corruption </strong>- Short dialogue quest that unlocks access to the boss Gollux</li>
                <li><strong>(Lv. 190) [Haven] A New Home </strong>- Pre-quests to unlock access to Weekly Quests in the Scrapyard</li>
                <li><strong>(Lv. 190) [Dark World Tree] Those Who Remain </strong>- Pre-quests to unlock access to Weekly Quests in the Dark World Tree</li>
                <li><strong>(Lv. 200) [The Asura Crisis] Back to Momijigaoka </strong>- Pre-quests to unlocking access to the boss Akechi Mitsuhide</li>
            </ul>
            <h4>Theme Dungeon Starting Quests:</h4>
            <p>Quests labeled in orange are recommended, in green are optional, in white are skippable</p>
            <p>The Lv. 30 Theme Dungeons are recommended as completing 2 and a half theme dungeons is enough to reach Lv. 60 to complete your 3rd Job Advancement. Theme Dungeons between Lv. 60 - 120 are completely optional (except for Lion King's Castle) as grinding is much faster and less tedious at these levels. They can be done if you dislike grinding but you will not gain as many levels compared to Lv. 30 - 60</p>
            <ul>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Riena Strait] Get it Strait</strong> - Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[2 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3b/Eqp_Sailor_Mask.png/revision/latest?cb=20141020050317" alt="Eqp Sailor Mask" width={29} height={28} /> <a href="https://maplestory.wiki/GMS/215/item/1012389" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/46/Eqp_Sailor_Belt.png/revision/latest?cb=20151225204428" alt="Eqp Sailor Belt" width={34} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/1132292" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/Eqp_Deckhand.png/revision/latest?cb=20141020050643" alt="Eqp Deckhand" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Theme Dungeon] Ellinel Fairy Academy</strong> - Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[1 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Ellinel_Wings.png/revision/latest?cb=20141018232621" alt="Eqp Ellinel Wings" width={37} height={39} /> <a href="https://maplestory.wiki/GMS/215/item/1102590" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Eqp_Ellinel_Bracelet.png/revision/latest?cb=20141018233813" alt="Eqp Ellinel Bracelet" width={35} height={35} />[Glove], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/Eqp_Fairy_Mark.png/revision/latest?cb=20151220000806" alt="Eqp Fairy Mark" width={23} height={29} /> <a href="https://maplestory.wiki/GMS/215/item/1022254" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ea/Eqp_Honorary_Fairy_Professor.png/revision/latest?cb=20141018232629" alt="Eqp Honorary Fairy Professor" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Gold Beach] A Golden Opportunity </strong>- Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[1 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/Eqp_Octopus_Earrings.png/revision/latest?cb=20151220001827" alt="Eqp Octopus Earrings" width={29} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/1032254" target="_blank" rel="noreferrer noopener">[Earrings]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fe/Eqp_Beach_Bum.png/revision/latest?cb=20141019222458" alt="Eqp Beach Bum" width={31} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 30) [Elodin] Anne's Plea for Help </strong>- Theme Dungeon, provides good EXP for Lv. 30 - 59 with scaling monster levels
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/Eqp_Elodin_Bird_Dog.png/revision/latest?cb=20190616033103" alt="Eqp Elodin Bird Dog" width={32} height={33} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces]</li>
                </ul>
                </li>
                <li><strong>(Lv. 60) [Mushroom Castle] Mushking's Summons</strong> - Theme Dungeon
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/4036313/icon" alt="" />[3 mil Mesos], <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Etc_Spell_Trace.png/revision/latest?cb=20151220001317" alt="Etc Spell Trace" width={33} height={32} /> [Spell Traces], <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Violetta%27s_Knight.png/revision/latest?cb=20141115053750" alt="Eqp Violetta's Knight" width={33} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6a/Eqp_Heavy_Violetta_Cape.png/revision/latest?cb=20141115053729" alt="Eqp Heavy Violetta Cape" width={31} height={33} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a><a href="https://maplestory.wiki/GMS/215/item/1142629" target="_blank" rel="noreferrer noopener">, </a> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Shackles_of_Love.png/revision/latest?cb=20160621015045" alt="Eqp Shackles of Love" width={35} height={33} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a>
                    </li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 75) [The Afterlands] A Cry for Help </strong>- Theme Dungeon that provides free permanent totems useful for progression. The storyline, however, can be glitchy and tedious which is why it is left as optional
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Eqp_Beodog_Figurine.png/revision/latest?cb=20170121172854" alt="Eqp Beodog Figurine" width={31} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/95/Eqp_Billy_Figurine.png/revision/latest?cb=20170121172901" alt="Eqp Billy Figurine" width={32} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/Eqp_Adler_Figurine.png/revision/latest?cb=20170121172908" alt="Eqp Adler Figurine" width={26} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Eqp_Mansa_Figurine.png/revision/latest?cb=20170121172915" alt="Eqp Mansa Figurine" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Totems]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 95) [Ellin Forest] Invitation to Ellin Forest </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/33/Eqp_Ephenia%27s_Ring.png/revision/latest?cb=20130701085128" alt="Eqp Ephenia's Ring" width={34} height={34} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1112683" target="_blank" rel="noreferrer noopener">[Ephenia's Ring]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Eqp_Ellin_Forest_Guardian.png/revision/latest?cb=20140626202450" alt="Eqp Ellin Forest Guardian" width={32} height={33} /> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 115) [Lion King's Castle] Desolate Castle </strong>- Theme Dungeon that also unlocks access to the boss Von Leon after completing it
                <ul>
                    <li><strong style={{color: '#ff6600'}}>[Reboot Recommended] </strong>- Royal Von Leon equipment dropped by Von Leon is useful for Reboot progression</li>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/14/Eqp_Heart_of_a_Lion.png/revision/latest?cb=20160808182142" alt="Eqp Heart of a Lion" width={31} height={33} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Box" target="_blank" rel="noreferrer noopener">[Mastery Book Box]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 120) [Fantasy Theme World] Dylan's Story </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/211.1.0/item/1082719/icon" alt="Heart Bracelet" /> <a href="https://maplestory.wiki/GMS/205/item/1082719" target="_blank" rel="noreferrer noopener">[Heart Bracelet]</a>, <img src="https://maplestory.io/api/GMS/211.1.0/item/1143035/icon" alt="101st Time's the Charm" />[Medal], <img src="https://maplestory.io/api/GMS/211.1.0/item/1003534/icon" alt="Ludi Targa Hat" /> <img src="https://maplestory.io/api/GMS/211.1.0/item/1003535/icon" alt="Ludi Scarlion Hat" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003534">[Ludi Targa Hat]</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/item/1003535">[Ludi Scarlion Hat]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 125) [Korean Folk Town] A Letter from the Library </strong>- Theme Dungeon
                <ul>
                    <li><strong>Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Eqp_Like_Clouds_and_Winds.png/revision/latest?cb=20160208230235" alt="Eqp Like Clouds and Winds" width={32} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 130) [Crimsonheart] To Grendel's Library </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ee/Eqp_Crimsonheart_Savior.png/revision/latest?cb=20141115224825" alt="Eqp Crimsonheart Savior" width={27} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 130) [Golden Temple] Noi More Tourists </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Eqp_Ravana%27s_Golden_Crown.png/revision/latest?cb=20151107212835" alt="Eqp Ravana's Golden Crown" width={27} height={30} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003455" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8a/Eqp_Seeker_of_Gilded_Truth.png/revision/latest?cb=20160808182338" alt="Eqp Seeker of Gilded Truth" width={30} height={32} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 135) [Partem Ruins] Dark Prophecy </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9b/Eqp_Blazing_Hot.png/revision/latest?cb=20190728195805" alt="Eqp Blazing Hot" width={25} height={30} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/83/Use_Mastery_Box.png/revision/latest?cb=20181115044138" alt="Use Mastery Box" width={29} height={24} />[Mastery Box]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}><em>[Reboot Recommended] </em>(Lv. 140) Finding Tomo </strong>- Quest to get started with the Yu Garden (The Far East) Theme Dungeon
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d2/Use_Epic_Potential_Scroll.png/revision/latest?cb=20170224033813" alt="Use Epic Potential Scroll" width={32} height={25} /> [Epic Potential Scrolls <em>(Reboot Only)</em>]</li>
                </ul>
                </li>
                <li><strong style={{color: '#ff6600'}}>(Lv. 140) [Commerci Republic] Neinheart's Calls </strong>- Theme Dungeon that also unlocks access to Commerci Trade Voyages and Transposing after reaching San Commerci</li>
                <li><strong>(Lv. 140) The Dragon and the Tiger </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong>  <img src="https://maplestory.io/api/GMS/210.1.1/item/1142745/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/1142746/icon" alt="" />[Medal], <img src="https://maplestory.io/api/GMS/210.1.1/item/3010947/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3010948/icon" alt="" />[Chair], <img src="https://maplestory.io/api/GMS/210.1.1/item/2049402/icon" alt="" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/2049402" target="_blank" rel="noreferrer noopener">[Special Potential Scroll]</a>, <img src="https://maplestory.io/api/GMS/210.1.1/item/2048309/icon" alt="" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/2048309" target="_blank" rel="noreferrer noopener">[Bonus Potential Scroll]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Use_Prototype_Soul_Enchanter.png/revision/latest?cb=20160609060442" alt="Use Prototype Soul Enchanter" width={33} height={31} /> <a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Prototype Soul Enchanter]</a>, <img src="https://maplestory.io/api/GMS/210.1.1/item/3700266/icon" alt="" /> <img src="https://maplestory.io/api/GMS/210.1.1/item/3700267/icon" alt="" />[Title]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 145) [Kerning Tower] Kerning Tower Grand Opening </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Reward:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/68/Eqp_Jackpot_Entertainment_Co-CEO.png/revision/latest?cb=20170531215647" alt="Eqp Jackpot Entertainment Co-CEO" width={35} height={32} /> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 150) [Stone Colossus] A Giant of a Rumor </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7d/Eqp_Colossal.png/revision/latest?cb=20140922173630" alt="Eqp Colossal" width={29} height={32} /> [Medal],
                    <img alt="" src="https://i.imgur.com/pqRM0QP.png" />[Mount], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Halflinger_Expedition_Badge.png/revision/latest?cb=20160827000811" alt="Eqp Halflinger Expedition Badge" width={33} height={29} /> [Badge]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 175) [Detective Rave's Case Notes] Free Luxury Tour! </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards</strong>: <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c9/Eqp_Detective_Rave%27s_Honorary_Assistant.png/revision/latest?cb=20190308004823" alt="Eqp Detective Rave's Honorary Assistant" width={27} height={30} /> [Medal]</li>
                </ul>
                </li>
                <li><strong style={{color: '#99cc00'}}>(Lv. 185) [Fox Valley] Leaf Plane to Adventure </strong>- Theme Dungeon
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/62/Eqp_Fox_Point_Ranger.png/revision/latest?cb=20180524140256" alt="Eqp Fox Point Ranger" width={29} height={32} /> [Medal]</li>
                </ul>
                </li>
            </ul>
            <h4>Optional Quests:</h4>
            <ul>
                <li><strong>(Lv. 10) Do you know about Maple Guide? </strong>- Tutorial quest explaining Maple Guide</li>
                <li><strong>(Lv. 20) Do you know about Spell Enhancements? </strong>- Tutorial quest explaining <img src="https://maplestory.io/api/GMS/215/item/2433943/icon" alt="" />Spell Tracing</li>
                <li><strong>(Lv. 20) Do you know about Star Force Enhancements?</strong> Tutorial quest explaining Star Forcing</li>
                <li><strong>(Regular Server only) (Lv. 33) Mysterious Merchant Matilda </strong>- Tutorial quest explaining <a href="https://maplestory.fandom.com/wiki/Matilda" target="_blank" rel="noreferrer noopener">Matilda</a>, an NPC that sells <img src="https://maplestory.io/api/GMS/215/item/2501000/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2501000" target="_blank" rel="noreferrer noopener">[AP Reset Scrolls]</a>, <img src="https://maplestory.io/api/GMS/215/item/2500000/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2500000" target="_blank" rel="noreferrer noopener">[SP Reset Scrolls]</a>, <img src="https://maplestory.io/api/GMS/215/item/2435767/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/4143002" target="_blank" rel="noreferrer noopener">[Buff Freezers]</a>, <img src="https://maplestory.io/api/GMS/215/item/2432263/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/4140003" target="_blank" rel="noreferrer noopener">[Safety Charms]</a>, and <img src="https://maplestory.io/api/GMS/215/item/2433974/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5510000" target="_blank" rel="noreferrer noopener">[Respawn Tokens]</a> for Mesos
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/2432263/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/4140003" target="_blank" rel="noreferrer noopener">[Safety Charms]</a>, <img src="https://maplestory.io/api/GMS/215/item/2433974/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5510000" target="_blank" rel="noreferrer noopener">[Respawn Tokens]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 33) Trainer's Command </strong>- A special quest for unlocking the ability to have 3 pets out at once. Requires you to obtain a <img src="https://maplestory.io/api/GMS/215/item/5460000/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/5460000" target="_blank" rel="noreferrer noopener">[Pet Snack]</a> from the Cash Shop using NX or <img src="https://maplestory.io/api/GMS/215/item/2431872/icon" alt="" />Reward Points</li>
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
                    <li><strong>Main Reward: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8e/Eqp_Curbrock%27s_Shoulder_Accessory.png/revision/latest?cb=20190825235453" alt="Eqp Curbrock's Shoulder Accessory" width={30} height={30} /> <a href="https://maplestory.wiki/GMS/215/item/1152207" target="_blank" rel="noreferrer noopener">[Curbrock's Shoulder Accessory]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 60) Have you learned about Bonus Stats? </strong>- Tutorial quest explaining equipment bonus stats
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cb/Eqp_Curbrock%27s_Ring.png/revision/latest?cb=20190826000135" alt="Eqp Curbrock's Ring" width={30} height={31} /> <a href="https://maplestory.wiki/GMS/215/item/1113018" target="_blank" rel="noreferrer noopener">[Curbrock's Ring]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 80) Use the Transfer Hammer! </strong>- Tutorial quest explaining Transfer Hammer</li>
                <li><strong>(Lv. 100) Mastery Book Sale </strong>- Tutorial quest explaining Mastery Books <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Use_Mastery_Book_20.png/revision/latest?cb=20140817012100" alt="Use Mastery Book 20" width={32} height={29} />  <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Use_Mastery_Book_30.png/revision/latest?cb=20140817012104" alt="Use Mastery Book 30" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book" target="_blank" rel="noreferrer noopener">[Mastery Books]</a>
                </li>
                <li><strong>(Lv. 100) </strong><strong>[Grand Athenaeum] Visit the Grand Athenaeum </strong>- Cutscene heavy storyline that explains Maple World lore
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8d/Use_Mastery_Book_20.png/revision/latest?cb=20140817012100" alt="Use Mastery Book 20" width={32} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Use_Mastery_Book_30.png/revision/latest?cb=20140817012104" alt="Use Mastery Book 30" width={32} height={29} /> <a href="https://maplestory.fandom.com/wiki/Mastery_Book" target="_blank" rel="noreferrer noopener">[Mastery Books]</a> and a <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/Eqp_Scholarly_Pendant.png/revision/latest?cb=20150512000517" alt="Eqp Scholarly Pendant" width={32} height={29} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122263" target="_blank" rel="noreferrer noopener">[Scholarly Pendant]</a> for completing 3 stories</li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Dimension Invasion] Across Worlds </strong>- A quest to get started with Dimension Invasion. Provides a quick explanation of Dimension Invasion
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Eqp_Dimension_Gloves.png/revision/latest?cb=20141002050006" alt="Eqp Dimension Gloves" width={31} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0d/Eqp_High_Quality_Dimension_Gloves.png/revision/latest?cb=20160704164629" alt="Eqp High Quality Dimension Gloves" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Dimension_Gloves" target="_blank" rel="noreferrer noopener">[Dimension Gloves]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [Tower of Oz] Tower Under the Sea </strong>- A quest to get started with the Tower of Oz. Provides a quick explanation and tutorial for Tower of Oz
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Eqp_Ring_of_Restraint.png/revision/latest?cb=20160210033306" alt="Eqp Ring of Restraint" width={27} height={27} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4b/Eqp_Ultimatum_Ring.png/revision/latest?cb=20160217030325" alt="Eqp Ultimatum Ring" width={32} height={32} /> [Rings with Active Skills], <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/Eqp_Ryude%27s_Sword.png/revision/latest?cb=20150417192805" alt="Eqp Ryude's Sword" width={41} height={41} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402224" target="_blank" rel="noreferrer noopener">[Ryude's Sword]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Eqp_Ocean_Glow_Earrings.png/revision/latest?cb=20181210205550" alt="Eqp Ocean Glow Earrings" width={33} height={27} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032232" target="_blank" rel="noreferrer noopener">[Ocean Glow Earrings]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3a/Eqp_Lightseeker.png/revision/latest?cb=20151106065618" alt="Eqp Lightseeker" width={36} height={36} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1452229" target="_blank" rel="noreferrer noopener">[Lightseeker Bow]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f2/Eqp_Alicia%27s_Mutated_Staff.png/revision/latest?cb=20181210210548" alt="Eqp Alicia's Mutated Staff" width={41} height={41} /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1382234" target="_blank" rel="noreferrer noopener">[Alicia's Mutated Staff]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/64/Eqp_Aquarius_Crown.png/revision/latest?cb=20171106072914" alt="Eqp Aquarius Crown" width={34} height={25} />  <a href="https://maplestory.wiki/GMS/210.1.1/item/1004075" target="_blank" rel="noreferrer noopener">[Aquarius Crown]</a>,
                    <img alt="" src="https://i.imgur.com/V4awg7W.png" />
                    <img alt="" src="https://i.imgur.com/3X5bSJa.png" />
                    <img alt="" src="https://i.imgur.com/rKcYemF.png" />[Damage Skins]</li>
                    <li>Only the rings are valuable although they can be tedious to obtain because the power of each ring can vary and are randomly obtained from loot boxes</li>
                </ul>
                </li>
                <li><strong>(Lv. 140) [System] Item Update</strong> - Provides an explanation to Transposing after reaching San Commerci</li>
                <li><strong>(Lv. 145) [Shaolin Temple] Elder Jung's Summons </strong>- Storyline
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/2434618/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2434618" target="_blank" rel="noreferrer noopener">[Mount]</a>, <img src="https://maplestory.io/api/GMS/215/item/2434619/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2434619" target="_blank" rel="noreferrer noopener">[Damage Skin]</a>, <img src="https://maplestory.io/api/GMS/215/item/3015329/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/1182286" target="_blank" rel="noreferrer noopener">[Chair]</a>, <img src="https://maplestory.io/api/GMS/215/item/1202200/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/1202200" target="_blank" rel="noreferrer noopener">[Totem]</a>
                    </li>
                    <li>Totem is permanent and adds an effect behind your character</li>
                </ul>
                </li>
                <li><strong>(Lv. 160) [Showa Town] Welcome to Shawa Town!</strong> - Starts storyline for Showa Town which is required to unlock access to the boss Yakuza Boss</li>
                <li><strong>(Lv. 170) [NLC] Welcome back to NLC! </strong>- Starts storyline for New Leaf City
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/eb/Eqp_Treasure_Hunter_Jack%27s_Scar.png/revision/latest?cb=20160719010837" alt="Eqp Treasure Hunter Jack's Scar" width={23} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Eqp_Professor_Foxwit%27s_Glasses.png/revision/latest?cb=20160719010610" alt="Eqp Professor Foxwit's Glasses" width={33} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/04/Eqp_Sheriff_Lita%27s_Earrings.png/revision/latest?cb=20160719012316" alt="Eqp Sheriff Lita's Earrings" width={26} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/Eqp_Treasure_Hunter_John%27s_Ring.png/revision/latest?cb=20191222203815" alt="Eqp Treasure Hunter John's Ring" width={26} height={26} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/Eqp_Subani%27s_Pendant.png/revision/latest?cb=20181026170542" alt="Eqp Subani's Pendant" width={30} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Eqp_Elpam%27s_Belt.png/revision/latest?cb=20160719010359" alt="Eqp Elpam's Belt" width={33} height={23} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/14/Eqp_Lukan%27s_Pauldron.png/revision/latest?cb=20160719011447" alt="Eqp Lukan's Pauldron" width={31} height={23} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Masteria Explorer Gear]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 170) [Kritias] Sudden Kingdom </strong>- Completing this storyline unlocks access to Invasions and Daily Quests within Kritias to gain <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/16/Etc_Kritias_Commemorative_Coin.png/revision/latest?cb=20180329030519" alt="Etc Kritias Commemorative Coin" width={26} height={26} /> [Kritias Commemorative Coins] to use in a special shop. You can travel to Kritias from <a href="https://maplestory.fandom.com/wiki/Sky_Nest_I" target="_blank" rel="noreferrer noopener">Leafre</a>
                <ul>
                    <li><strong>Notable items: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/Eqp_Tyrant_Hyades_Gloves.png/revision/latest?cb=20150209052456" alt="Eqp Tyrant Hyades Gloves" width={32} height={30} /> <a href="https://maplestory.fandom.com/wiki/Tyrant_Hyades_Gloves" target="_blank" rel="noreferrer noopener">[Superior Tyrant Glove]</a>, <img alt="" src="https://i.imgur.com/8NlmSaz.png" />[Boss Reset Tickets]
                    <ul>
                        <li>Only the Reset Tickets are valuable which give you an extra clear for a boss, you can try for these if you want to really min-max</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Phantom Forest] The Corrupted Forest </strong>- Completing the storyline for this area unlocks access to Daily Quests that reward <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0d/Etc_Raven_Ninja_Coin.png/revision/latest?cb=20191227231031" alt="Etc Raven Ninja Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Etc_Shadowknight_Coin.png/revision/latest?cb=20191227231213" alt="Etc Shadowknight Coin" width={28} height={28} /> <a href="https://maplestory.fandom.com/wiki/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> to buy items from Mo and Fiona in the Phantom Forest
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/18/Eqp_Numenal%27s_Willpower.png/revision/latest?cb=20200102153019" alt="Eqp Numenal's Willpower" width={32} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Glona%27s_Heart.png/revision/latest?cb=20200116033305" alt="Eqp Glona's Heart" width={30} height={30} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/Eqp_Legacy_of_Light.png/revision/latest?cb=20200103144348" alt="Eqp Legacy of Light" width={32} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d7/Eqp_Legacy_of_Darkness.png/revision/latest?cb=20200103144509" alt="Eqp Legacy of Darkness" width={34} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Delgrund%27s_Honor.png/revision/latest?cb=20200116035209" alt="Eqp Delgrund's Honor" width={31} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Eqp_Lireni%27s_Wish.png/revision/latest?cb=20200116035346" alt="Eqp Lireni's Wish" width={33} height={31} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/08/Eqp_White_Identity.png/revision/latest?cb=20150925032544" alt="Eqp White Identity" width={32} height={28} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fd/Eqp_Crystal_Leaf_Earrings.png/revision/latest?cb=20200111083056" alt="Eqp Crystal Leaf Earrings" width={31} height={29} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8b/Eqp_Raven%27s_Beak.png/revision/latest?cb=20191006024355" alt="Eqp Raven's Beak" width={30} height={31} /> <a href="https://maplestory.fandom.com/wiki/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/97/Use_Balanced_Fury.png/revision/latest?cb=20160207062143" alt="Use Balanced Fury" width={31} height={28} /> <a href="https://maplestory.fandom.com/wiki/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/80/Use_Crystal_Ilbi_Throwing-Stars.png/revision/latest?cb=20160207062053" alt="Use Crystal Ilbi Throwing-Stars" width={31} height={31} /> <a href="https://maplestory.fandom.com/wiki/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a>
                    </li>
                    <li>Unless you are really trying to optimize your gear, the Phantom Forest is not necessary</li>
                    <li>You can also do this if you want the Balanced Fury or Crystal Ilbis Throwing Stars</li>
                </ul>
                </li>
                <li><strong>(Lv. 200) </strong><strong>[Battle Content] Alien Visitors </strong>- A quest to get started with Alien Visitors PQ. Provides a quick explanation to Alien Visitor
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/Eqp_Last_Unwelcome_Guest_Necklace.png/revision/latest?cb=20160813201657" alt="Eqp Last Unwelcome Guest Necklace" width={32} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Eqp_Last_Unwelcome_Guest_Earrings.png/revision/latest?cb=20160813201545" alt="Eqp Last Unwelcome Guest Earrings" width={30} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Last_Unwelcome_Guest_Belt.png/revision/latest?cb=20160813201747" alt="Eqp Last Unwelcome Guest Belt" width={34} height={31} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ac/Eqp_Rare_Alien_Fragment_Helmet.png/revision/latest?cb=20150130204216" alt="Eqp Rare Alien Fragment Helmet" width={34} height={34} /> <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Alien_Fragment_Set">[Lv. 180 Alien Fragment Gear]</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2e/Eqp_VIP_Bow.png/revision/latest?cb=20190519021335" alt="Eqp VIP Bow" width={37} height={38} /> [Alien Fragment Weapons] can be obtained from <a href="https://maplestory.fandom.com/wiki/Category%3AAlien_Visitor" target="_blank" rel="noreferrer noopener">Alien Visitor</a>
                    <li>Accessories are a decent substitute until you get Gollux accessories because they can be Star Forced to 25 stars and gain better potential lines</li>
                    </li>
                </ul>
                </li>
            </ul>
            <h4>Can Be Skipped:</h4>
            <p><strong>[Note]: </strong>Quests above Lv. 140 can be done as they provide some equipment but are rarely done compared to the quests in Optional</p>
            <ul>
                <li><strong>(Lv. 33) Do you know about the Beauty Salon? </strong>- Tutorial quest explaining the Beauty Salon, a place to save your hair and face styles
                <ul>
                    <li><strong>Main Rewards: </strong> <img src="https://maplestory.io/api/GMS/215/item/2543041/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2543041" target="_blank" rel="noreferrer noopener">[Tutorial Hair Coupon]</a>, <img src="https://maplestory.io/api/GMS/215/item/2543041/icon" alt="" /> <a href="https://maplestory.wiki/GMS/215/item/2432548" target="_blank" rel="noreferrer noopener">[Tutorial Face Coupon]</a>
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
                    <li><strong>Main Reward: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d0/Eqp_Swamp_Region_Troubleshooter.png/revision/latest?cb=20170902042949" alt="Eqp Swamp Region Troubleshooter" width={30} height={31} /> [Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 55) [Perion] Rocky Mountain Hunter </strong>- Starts the Perion area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://maplestory.io/api/GMS/215/item/1143119/icon" alt="" />[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 65) [Sleepywood] Danger Seeker </strong>- Starts the Sleepywood area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://maplestory.io/api/GMS/215/item/1143120/icon" alt="" />[Medal]</li>
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
                    <li><strong>Main Reward: </strong> <img src="https://maplestory.io/api/GMS/215/item/1143121/icon" alt="" />[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 85) [Ariant] Learning the Culture of Ariant </strong>- Starts the Ariant area quests for the medal
                <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/215/item/1143046/icon" alt="" />[Medal]</li>
                </ul>
                </li>
                <li><strong>(Lv. 90) [Stellar Detectives] </strong><strong>The Erased Diary </strong>- The rewards that are not very worth obtaining. This is more for a fun activity or for item collecting rather than for training
                <ul>
                    <li><strong>Main Rewards:</strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/Eqp_I_really_like_Tutu.png/revision/latest?cb=20191005220448" alt="Eqp I really like Tutu" width={25} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_I_really_like_Nenne.png/revision/latest?cb=20191005220447" alt="Eqp I really like Nenne" width={31} height={33} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/76/Eqp_I_really_like_Lingling.png/revision/latest?cb=20191005220447" alt="Eqp I really like Lingling" width={29} height={34} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Eqp_I_Really_Like_Jett.png/revision/latest?cb=20191005220446" alt="Eqp I Really Like Jett" width={27} height={33} /> [Medal], <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/ce/Use_Lingling_Damage_Skin.png/revision/latest?cb=20191005220449" alt="Use Lingling Damage Skin" width={32} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3f/Use_Tutu_Damage_Skin.png/revision/latest?cb=20191005220450" alt="Use Tutu Damage Skin" width={32} height={32} /> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Use_Nenne_Damage_Skin.png/revision/latest?cb=20191005220449" alt="Use Nenne Damage Skin" width={32} height={32} /> [Damage Skins]</li>
                </ul>
                </li>
                <li><strong>(Lv. 105) [Evolution System] Suspicious Movement on the Path </strong>- Quest to get started with Evolution System. Consists of a few cutscenes and tutorial quests</li>
                <li><strong>(Lv. 110) [Chryse] Find Xerxes </strong>- Quest to get started with the Chryse Party Quest</li>
                <li><strong>(Lv. 110) [Ludibrium] Ludibrium Sheriff </strong>- Starts the Ludibrium area quests for the medal
                <ul>
                    <li><strong>Main Reward: </strong> <img src="https://maplestory.io/api/GMS/215/item/1143122/icon" alt="" />[Medal]</li>
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
                    <li><strong>Main Reward: </strong> <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/Skill_Soaring.png/revision/latest?cb=20100529141549" alt="Skill Soaring" width={32} height={31} /> <a href="https://maplestory.fandom.com/wiki/Soaring" target="_blank" rel="noreferrer noopener">[Soaring Skill]</a>
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
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1143125/icon" alt="Twilight Warrior" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1143125" target="_blank" rel="noreferrer noopener">[Medal]</a>
                    </li>
                </ul>
                </li>
                <li><strong>(Lv. 180) [Masteria] Glimmer Man's Call </strong>- Storyline
                <ul>
                    <li><strong>Main Reward:</strong> <img src="https://maplestory.io/api/GMS/210.1.1/item/1143192/icon" alt="Naricain's Revival" /> <a href="https://maplestory.wiki/GMS/210.1.1/item/1143192" target="_blank" rel="noreferrer noopener">[Medal]</a>
                    </li>
                </ul>
                </li>
            </ul>
        </ContentPage>
    );
}

export default ProgressionGuide;
