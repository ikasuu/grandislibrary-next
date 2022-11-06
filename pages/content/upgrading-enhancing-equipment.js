import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, VideoAd, StickyAd } from '../../components/Ads';

function UpgradeEquipment() {
    return (
      <ContentPage>
          <Head>
            <title>Upgrading &amp; Enhancing Equipment | Grandis Library</title>
            <meta content={"An explanation on the different possible ways to upgrade and enhance your gear"} name="description"/>
          </Head>
          <ContentTitle>Upgrading &amp; Enhancing Equipment</ContentTitle>
          <StickyAd/>
          <p><img className="repository-image" src="/images/info/equipment-tooltip.png" alt="Equipment Diagram"/></p>
          <p>Bonus Stats appear in <span style={{color: '#339966'}}>green</span> font while stats from upgrading appear in <span style={{color: '#3366ff'}}>blue</span> [Refer to 11]. The color of an item's name indicates how many stats above or below average an item is [Refer to 02]</p>
          <h3 id="top">Quick Jumps</h3>
          <ul>
            <li><Link smooth href="#scrolls" scroll>Scrolls</Link></li>
            <li><Link smooth href="#spelltrace" scroll>Spell Tracing</Link></li>
            <li><Link smooth href="#starforce" scroll>Star Forcing</Link></li>
            <li><Link smooth href="#hammer" scroll>Transfer Hammer</Link></li>
            <li><Link smooth href="#transpose" scroll>Transposing</Link></li>
            <li><Link smooth href="#cubing" scroll>Cubing &amp; Potentials</Link></li>
            <li><Link smooth href="#bonus" scroll>Flames &amp; Bonus Stats</Link></li>
          </ul>
          <VideoAd/>
          <div className="repository-md-container">
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="scrolls">Scrolls in Regular Servers</ArticleHeaderTwo>
            <hr/>
            <p>Scrolls are one way of upgrading equipment, they are found in the USE tab. Scrolls are the traditional way of upgrading equipment and can be done by double-clicking it and dragging it on to an item. Most of regular scrolls nowadays are useless and have been replaced with an easier system called <a rel="noreferrer noopener" href="https://support-maplestory.nexon.net/hc/en-us/articles/204744535-What-are-Spell-Traces-" target="_blank">Spell Tracing</a> which will be explained later. For now, Spell Tracing provides the same function as scrolling and is much easier to obtain than scrolls</p>
            <p><strong>[Note]: </strong>Whenever you use a scroll, whether it fails or passes, an upgrade slot will be consumed</p>
            <p><strong>[Note]: </strong>Scrolls and upgrade slots are used only on non-Reboot servers. Reboot servers only have star forcing/enhancing</p>
            <hr/>
            <ul>
              <li>
                  <img src="/images/items/scroll.png" alt="Use Scroll"/><img src="/images/items/scroll-2.png" alt="Use Scroll"/><img src="/images/items/scroll-3.png" alt="Use Scroll"/>
                  <strong>[</strong><strong>Regular Scrolls]: </strong>When a regular scroll succeeds, it will increase the stats of equipment by a flat amount
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/x-scroll.png" alt="Use X Scroll"/><img src="/images/items/prime-scroll.png" alt="Use Prime Scroll"/><img src="/images/items/premium-pet-scroll-att.png" alt="Use Premium Pet Scroll ATT"/><img src="/images/items/premium-pet-scroll-matt.png" alt="Use Premium Pet Scroll MATT"/>
                  <strong>[Special Regular Scrolls]: </strong>There are also other scrolls obtainable from <a href="http://maplestory.nexon.net/micro-site/37241" target="_blank" rel="noreferrer noopener">Gachapon</a>, <a href="http://maplestory.nexon.net/game/marvel-machine" target="_blank" rel="noreferrer noopener">Marvel Machine</a>,
                  etc. (aka loot boxes) that provide better stats than Spell Tracing and regular scrolls. Keep in mind these are very expensive and are usually used late game to maximize damage. As well, the best scrolls most of the time also have
                  bad success rates and may destroy items so, they may cost extra to buy items that prevent items from being destroyed or losing an upgrade slot
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/magical-scroll-att.png" alt="Use Magical Scroll ATT"/><img src="/images/items/magical-scroll-matt.png" alt="Use Magical Scroll MATT"/><strong>[Magical Scroll]: </strong>Weapon scrolls that grant 9 to 11 Attack or Magic
                  Attack +3 all stats
                  <ul>
                      <li>Obtainable from Gachapon</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/prime-scroll.png" alt="Use Prime Scroll"/> <strong>[9th Anniversary Prime Scrolls]: </strong>Grants +3 all stats and Weapon Prime Scrolls provide +10 Attack and Magic Attack. Has a 40% chance to
                  succeed and 30% to destroy item on failure. Scrolling with these scrolls is also referred to as <strong>Priming</strong>
                  <ul>
                    <li> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/2613042" target="_blank">One-Handed Weapon</a>, <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/2612043" target="_blank">Two-Handed Weapon</a>, <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/2615026" target="_blank">Accessory</a> and <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/2616057" target="_blank">Armor</a>
                    </li>
                    <li>Obtainable from Marvel Machine</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/x-scroll.png" alt="Use X Scroll"/> <strong>[X Scrolls]: </strong>Weapon scrolls that grant 10 to 12 Attack or Magic Attack and +5 all stats when applied. Has a 100% Success Rate. There are
                  also Pet Equip scrolls that grant 5 to 7 Attack or Magic Attack
                  <ul>
                    <li>
                        <strong>[Attack]: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2613050" target="_blank" rel="noreferrer noopener">One-Handed Weapon</a>, <a href="https://maplestory.wiki/GMS/210.1.1/item/2612061" target="_blank" rel="noreferrer noopener">Two-Handed Weapon</a>, <a href="https://maplestory.wiki/GMS/210.1.1/item/2048817" target="_blank" rel="noreferrer noopener">Pet Equip</a>
                    </li>
                    <li>
                        <strong>[Magic Attack]: </strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2048817" target="_blank" rel="noreferrer noopener">One-Handed Weapon</a>, <a href="https://maplestory.wiki/GMS/210.1.1/item/2612062" target="_blank" rel="noreferrer noopener">Two-Handed Weapon</a>, <a href="https://maplestory.wiki/GMS/210.1.1/item/2048818" target="_blank" rel="noreferrer noopener">Pet Equip</a>
                    </li>
                    <li>These scrolls are usually obtained from Marvel Machine and rarely from Maplehood Watch</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/premium-accessory-scroll-att.png" alt="Use Premium Accessory Scroll ATT"/><img src="/images/items/premium-accessory-scroll-matt.png" alt="Use Premium Accessory Scroll MATT"/><img src="/images/items/premium-pet-scroll-att.png" alt="Use Premium Pet Scroll ATT"/><img src="/images/items/premium-pet-scroll-matt.png" alt="Use Premium Pet Scroll MATT"/>
                  <strong>[Premium Scrolls]:</strong> Grants 4 to 5 Attack or Magic Attack when applied
                  <ul>
                    <li>Obtainable from Gachapon and occasionally from Event Coin Shops</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/advanced-equip-enhancement-scroll.png" alt="Use Advanced Equip Enhancement Scroll"/> <strong>[Equip Enhancement Scroll]</strong>: These scrolls provides <strong>one star force</strong> (enhancement [1], refer to image at top) on success
              </li>
              <li>
                  <strong>[Pure Equipment Enhancement Scroll]: </strong>The Pure version scrolls are mainly used on Tyrant or <a href="https://maplestory.fandom.com/wiki/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">"Superior"</a> gear because it does not destroy an item on failure
                  <ul>
                    <li>Star Forcing/Enhancing Superior Gear costs much more than regular gear and has a higher chance to being destroyed on failure which is why people the prefer the Pure Equipment Enhancement Scrolls</li>
                    <li>These scrolls are also known as "No Booms"</li>
                    <li>Can be found from monster drops and things such as Philosopher Books and Marvel Machine</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/potential-scroll.png" alt="Use Potential Scroll"/><img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/><img src="/images/items/unique-potential-scroll.png" alt="Use Unique Potential Scroll"/><img src="/images/items/legendary-potential-scroll.png" alt="Use Legendary Potential Scroll"/><img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/><strong>
                  [Potential Scrolls]: </strong>These scrolls provide a <strong> potential for gear</strong>. When used, if an item does not have a potential, it will gain one on success. Or, there are certain ones that give <strong>Epic, Unique, and Legendary potential</strong>. There is also one that provides <strong>Bonus Potential</strong> which is extra potential on top of your current potential on your item (refer to the top image [14]).
                  <ul>
                      <li> <a href="https://maplestory.wiki/GMS/210.1.1/item/2049401" target="_blank" rel="noreferrer noopener">Regular Potential</a> and <a href="https://maplestory.wiki/GMS/210.1.1/item/2049705" target="_blank" rel="noreferrer noopener">Epic Potential</a> scrolls can be found normally in-game from hunting and in shops but <a href="https://maplestory.wiki/GMS/210.1.1/item/2049750" target="_blank" rel="noreferrer noopener">Unique Potential</a>, <a href="https://maplestory.wiki/GMS/210.1.1/item/2049780" target="_blank" rel="noreferrer noopener">Legendary Potential</a>, and <a href="https://maplestory.wiki/GMS/210.1.1/item/2048308" target="_blank" rel="noreferrer noopener">Bonus Potential Scrolls</a> are found from things such as Gachapon, Marvel Machine, Philosopher Books or rarely from Events
                      </li>
                      <li>
                        You can also obtain <a href="https://maplestory.wiki/GMS/210.1.1/item/2049407" target="_blank" rel="noreferrer noopener">Advanced Potential Scrolls</a> from <img src="/images/items/red-cube-fragment.png" alt="Use Red Cube Fragment"/> Red Cube Fragments (from using Red Cubes) that has a higher success rate than regular potential scrolls
                      </li>
                      <li>
                        You can also obtain <a href="https://maplestory.wiki/GMS/210.1.1/item/2048306" target="_blank" rel="noreferrer noopener">Special Bonus Potential Scrolls</a> from <img src="/images/items/black-cube-fragment.png" alt="Use Black Cube Fragment"/> Black Cube Fragments (from using Black Cubes) that has a 100% chance to add a Bonus Potential
                      </li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/star-enhancement-scroll.png" alt="Use Star Enhancement Scroll"/><strong> [Star Enhancement Scrolls]: </strong>These scrolls grant you a certain amount of <strong>star force/enhancements</strong> at a 100% rate
                  <ul>
                      <li>This does not mean it will add extra stars but instead set the star force to that amount if it is less than it</li>
                      <li>These scrolls cannot be used on Superior equipment such as Tyrant gear</li>
                      <li>Can be found in Event Shops and things such as Gachapon and Marvel Machine</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/clean-slate-scroll.png" alt="Use Clean Slate Scroll"/><strong> [Clean Slate Scrolls]: </strong>These scrolls on success <strong>grants you back one upgrade slot</strong> on a failed upgrade
                  <ul>
                      <li>They do not add extra slots but allow you to gain back failed slots</li>
                      <li>There are also Pure Clean Slate Scrolls but they function exactly the same as regular Clean Slate Scrolls</li>
                      <li>They can be found from hunting Elite Bosses and Event Shops. You can also find them in the Spell Trace UI</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/golden-hammer.png" alt="Use Golden Hammer"/><strong> [Golden Hammers]: </strong>Golden Hammers provide <strong>extra upgrade slots</strong> on success but, if they fail you must use Clean Slates to get the
                  slots back
                  <ul>
                      <li>You do not need another Golden Hammer afterward to add that extra upgrade slot back.</li>
                      <li>They can be found from hunting Elite Monsters, Event Shops and are occasionally rewarded</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/chaos-scroll.png" alt="Use Chaos Scroll"/><strong> [Chaos Scrolls]</strong>: These scrolls provide a <strong>random amount of stats</strong> that can either give you more stats or fewer stats. These
                  scrolls are risky but there are ones that only provide you with more stats but it's still a gamble to how much you get.
                  <ul>
                      <li>The most valuable Chaos Scrolls are the <strong>Incredible Chaos Scroll of Goodness</strong> that provide the best boost but are obtained through Event Shops or loot boxes like Marvel Machine</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/innocence-scroll.png" alt="USe Innocence Scroll"/><strong> [Innocence Scrolls]:</strong> These scrolls completely <strong>reset an item except for its Potential and Bonus Stats</strong>
                  <ul>
                      <li>This is useful if you ever mess up or need to start over</li>
                      <li>
                          There is also an Innocence Scroll called <strong>Ark Innocence Scroll</strong> that does the same thing a Innocence Scroll but does not remove your star force/enhancements. This scroll can be found and used in the Spell
                          Trace UI
                      </li>
                      <li>Can be found in Event Shops or from fighting Elite Monsters and Elite Bosses</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/gold-potential-stamp.png" alt="Use Gold Potential Stamp"/><img src="/images/items/silver-potential-stamp.png" alt="Use Silver Potential Stamp"/><img src="/images/items/bonus-potential-stamp.png" alt="Use Bonus Potential Stamp"/>
                  <strong> [Potential Stamps]: </strong>Some equipment may occasionally only come with two lines of potentials, potential stamps can <strong>add a third line on success</strong>
                  <ul>
                      <li>Can be found in Legion Shop, Event Shops and from <img src="/images/items/black-cube-fragment.png" alt="Use Black Cube Fragment"/> Black Cube Fragments (obtained from using Black Cubes)</li>
                  </ul>
              </li>
            </ul>
            <ul>
              <li>
                  <img src="/images/items/silver-scissors.png" alt="Use Silver Scissors of Karma"/><img src="/images/items/platinum-scissors.png" alt="Cash Platinum Scissors of Karma"/> <strong>[</strong><strong>Karma Scissors]: </strong>Allows equipment that is untradable to be
                  made tradable once
                  <ul>
                      <li>The Platinum version is found in the Cash Shop and is able to use on more items than the Silver version</li>
                      <li>The Silver version is found in NPC Potion shops</li>
                  </ul>
              </li>
            </ul>
            <p><strong>Note: The next few scrolls are obtained from the Cash Shop &amp; Maple Reward Shop but there are also a few that are obtainable from regular gameplay such as Elite Bosses</strong></p>
            <ul>
              <li>
                  <img src="/images/items/protection-scroll.png" alt="Use Protection Scroll"/><strong> <a href="https://maplestory.wiki/GMS/210.1.1/item/5064000" target="_blank" rel="noreferrer noopener">[Shielding Ward]</a>: </strong>Prevents an item from
                  being destroyed by a failed scroll (Safeguard)
              </li>
              <li>
                  <img src="/images/items/shield-scroll.png" alt="Use Shield Scroll"/><strong> <a href="https://maplestory.wiki/GMS/210.1.1/item/5064100">[Shield Scroll]</a>: </strong>Prevents the upgrade count of an item from decreasing on a scroll
                  fail
              </li>
              <li>
                  <img src="/images/items/guardian-scroll.png" alt="Use Guardian Scroll"/><strong> <a href="https://maplestory.wiki/GMS/210.1.1/item/5064300" target="_blank" rel="noreferrer noopener">[Guardian Scroll]</a>: </strong>Prevents a scroll
                  from being consumed if it were to fail. This is applied to equipment that can be upgraded
              </li>
              <li>
                  <img src="/images/items/return-scroll.png" alt="Use Return Scroll"/><strong> <a href="https://maplestory.wiki/GMS/210.1.1/item/5064400">[Return Scroll]</a>: </strong>Allows you to choose between the before and after effects of a
                  scroll when applied
              </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="spelltrace"><img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> Spell Tracing in Regular Servers</ArticleHeaderTwo>
            <hr/>
            <p><img src="/images/info/spell-trace-tooltip.png" alt="Spell Trace"/></p>
            <p>Spell tracing involves using an item called <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/4001832" target="_blank">"Spell Trace"</a> to upgrade items instead of using scrolls. They also consume an upgrade slot upon success or fail. This is the main and most common way to upgrade equipment. Some common ways to get Spell Traces is to hunt monsters, Pollo Frito portals, Silent Crusade, Surprise Missions and from events</p>
            <p><img src="/images/info/equipment-enchant-ui.png" alt="Spell Trace UI"/><img src="/images/info/equipment-enchant-button.png" alt="Enhance a piece"/></p>
            <p>You can open the Equipment Enchant menu by either pressing "O" by default or through your inventory by pressing the <strong>red button with a hammer</strong></p>
            <p><img className="repository-image" src="/images/info/equipment-enchant-in-use.png" alt="Spell Trace in Use"/></p>
            <p>Once you have opened the menu, you can drag a piece of equipment into it and start spell tracing. Spell tracing consumes a certain amount of spell traces to upgrade equipment</p>
            <p>There are different scrolls to choose from, for weapons most of the time you just use the 70% ones and 15% if you have the resources and plan to keep it for a while</p>
            <p>For regular gear, you can upgrade them using 70% and 30% if you have the resources and plan to keep it for a while</p>
            <p><strong>[Note]</strong>: The lower the success rate, the higher the stats they provide but also costs more Spell Traces! As well, the higher level gear will cost more Spell Traces</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="starforce">Star Forcing</ArticleHeaderTwo>
            <hr/>
            <p><img src="/images/info/starforce-tooltip.png" alt="Starforce Equipment"/></p>
            <p>Once you have consumed all upgrade slots, you may star force/enhance your gear. In Reboot, there are no upgrade slots, so you just star force/enhance instead. Star Forcing costs mesos that grants increased stats on success</p>
            <p><img src="/images/info/equipment-enchant-button.png" alt="Starforce Red Button"/></p>
            <p><img src="/images/info/equipment-enchant-ui.png" alt="Equip Enhance UI"/><img src="/images/info/starforce-ui.png" alt="Starforce UI"/></p>
            <p>Like before, you can drag equipment into the Equipment Enchant UI like spell tracing to star force your gear</p>
            <p><img src="/images/info/starforce-stop.png" alt="Starforce Stop UI"/><img src="/images/info/starforce-success.png" alt="Starforce Success"/></p>
            <p>Once you press "Enhance", a window/mini game will pop up, you will need to press "Stop" in the middle to increase your success rate by a VERY small amount. You can disable the mini game by pressing "Disable Star Catching". Another button you see is "Safeguard" which protects your item from being destroyed but increases the cost significantly</p>
            <p>Higher level equipment will have more available stars/enhancements but they are also more expensive to enhance but they provide more stats the more you enhance it. The optimal amount of stars you want for each piece of equipment is 10-12 stars early game</p>
            <h3><strong>Star Force Outcomes</strong></h3>
            <p>There are four possible outcomes when Star Forcing. The success and failure rates scale with the current Star Force level of the equipment</p>
            <table>
                <tbody>
                    <tr>
                        <td style={{paddingRight: '1rem'}}><strong>Success</strong></td>
                        <td>Increase Star Force level by 1</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: '1rem'}}><strong>Failure (Keep)</strong></td>
                        <td>No change to Star Force level</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: '1rem'}}><strong>Failure (Drop)</strong></td>
                        <td>Decrease Star Force level by 1</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: '1rem'}}><strong>Failure (Destroy)</strong></td>
                        <td>Destroy equipment and create Equipment Trace</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <p>If two Star Force attempts in a row result in failure, the next attempt will enter Chance Time and have a guaranteed success rate. Additionally, once a piece of equipment reaches 10, 15 and 20 Star Force respectively, they will not drop below that Star Force even if the attempt fails</p>
            <p>If the equipment is destroyed while Star Forcing, you will gain an Equipment Trace. Equipment Traces can be applied to a new copy of the same item to restore all the stats, potentials and enhancements</p>
            <p><strong>[Star Force Maps]</strong>: There are special training maps that will require you to have a certain amount of Star Force to hunt efficiently on a map. These maps feature monsters with greater health but give much more EXP</p>
            <p>Star Force also contributes to the amount of damage your Legion Character does on the Legion Board</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <BannerAdOne/>
            <ArticleHeaderTwo id="hammer">Transfer Hammer</ArticleHeaderTwo>
            <hr/>
            <p><img className="repository-image" src="/images/info/transfer-hammer-ui.png" alt="Transfer Hammer UI"/></p>
            <p>Transfer Hammer is a system that allows you to transfer Star Force, Potentials, Bonus Potentials, and Soul Weapon from one equipment to another (with restrictions). The following will not be transferred, Scrolled Stats and Bonus Stats. Additionally you will lose one Star Force while transferring and any potentials above Epic will be dropped down to Epic Potential. You can only transfer equipment up to 10 levels apart of each other. For equipment below Lv. 119, you can transfer up to 20 levels apart</p>
            <p>Some requirements for Transfer Hammering is that the piece of equipment must have at least 1 Star Force, cannot be Superior Gear (such as Tyrants) and must be the same equipment type (regardless of job group). Overalls can be counted towards both as a top or bottom and vice versa</p>
            <p>In regular servers, any remaining upgrade slots will be filled by 100% Spell Traces for free. You can choose which stat you want the upgrades to be. I recommend that you already Upgrade/Spell Trace the Transferring Item first if you do not want the 100% Spell Trace stats</p>
            <p><img className="repository-image" src="/images/info/transfer-hammer-button.png" alt="Transfer Hammer Button"/></p>
            <p>To begin Transfer Hammering, you can access the UI from your Inventory by<strong> pressing the blue hammer icon</strong></p>
            <p>For more info on Transfer Hammer, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Transfer_Hammer" target="_blank">https://strategywiki.org/wiki/MapleStory/Transfer_Hammer</a></p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="transpose">Transposing</ArticleHeaderTwo>
            <hr/>
            <p><img className="repository-image" src="/images/info/transpose-ui.png" alt="Transpose UI"/></p>
            <p>Tranposing allows you to transfer an equipment's bonus stats from Bonus Stats, Scroll and Star Force Enhancements (the blue and green stats) to <strong>Sweetwater gear</strong>. The Star Force count will also drop by 1 but you retain the bonus stats. Potential Ranks also carry over but the Potential Lines will be reset</p>
            <p>Transposing is unlocked after gaining access to Commerci at Lv. 140. Transposing will cost <img src="/images/items/commerci-denaro.png" alt="Etc Commerci Denaro"/> <a href="https://maplestory.fandom.com/wiki/Commerci_Denaro" target="_blank" rel="noreferrer noopener">[Commerci Denaros]</a> and the chance for transposing to succeed is not guaranteed</p>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="cubing">Cubing &amp; Potentials</ArticleHeaderTwo>
            <hr/>
            <p><img src="/images/info/potential-example.png" alt="Potential Example"/><img src="/images/info/potential-reroll.png" alt="Potential Reroll"/></p>
            <p>Potentials refer to additional stats that some items sometimes come with. These stats are listed at the bottom of a tooltip. There are different tiers of Potentials that grant greater bonuses, lowest being Rare and highest being Legendary. Potentials initially start off as Hidden Potentials and need to be revealed in order to reveal their additional stats. Additionally, there are also Bonus Potentials which is a second line of Potentials that function the same and can be added to equipment</p>
            <p>Cubing refers to using Cubes that will reroll the Potential of an item. Cubes may tier up your equipment's Potential to the next rank, up to what that cube will allow. Equipment can also have Bonus Potentials as well that add upon your regular Potentials</p>
            <p><img src="/images/info/reveal-potential-button.png" alt="Reveal Potential"/></p>
            <p>You can reveal a piece of equipment's Potential by pressing the <strong>blue button with a magnifying glass</strong></p>
            <h3>Potential Rank Hierarchy:</h3>
            <ul>
              <li>Rare (Blue)</li>
              <li>Epic (Purple)</li>
              <li>Unique (Yellow)</li>
              <li>Legendary (Green)</li>
            </ul>
            <p><img className="repository-image" src="/images/info/cube-chart.png" alt="Cube Chart"/></p>
            <ul>
              <li>
                  <img src="/images/items/occult-cube.png" alt="Use Occult Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2711000" target="_blank" rel="noreferrer noopener">[Occult Cube]</a>: </strong>Rerolls potential of
                  items up to EPIC
                  <ul>
                      <li>Drops from Bosses and are occasionally rewarded</li>
                      <li>They are tradable cubes found in the USE tab</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/bonus-occult-cube.png" alt="Use Bonus Occult Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2730002" target="_blank" rel="noreferrer noopener">[Bonus Occult Cube]</a>: </strong>Rerolls the BONUS
                  potential of items up to RARE
                  <ul>
                      <li>Dropped by Midgame/Lategame Bosses and also found in Event Shops</li>
                      <li>They are tradable cubes found in the USE tab</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/master-craftsmans-cube.png" alt="Use Master Craftsman's Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2710002" target="_blank" rel="noreferrer noopener">[Master Craftsman's Cube]</a>: </strong>Rerolls
                  potential of items up to UNIQUE
                  <ul>
                      <li>Can be crafted with Professions</li>
                      <li>Drops from Bosses and are occasionally rewarded and also found in Event Shops and Legion Shop</li>
                      <li>They are untradable cubes found in the USE tab</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/meisters-cube.png" alt="Use Meister's Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/2710003" target="_blank" rel="noreferrer noopener">[Meister's Cube]</a>: </strong>Rerolls potential of
                  items up to LEGENDARY
                  <ul>
                      <li>Can be crafted with Professions</li>
                      <li>Also drops rarely from Bosses</li>
                      <li>They are untradable cubes found in the USE tab</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/red-cube.png" alt="Cash Red Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/5062009">[Red Cube]</a>: </strong>Rerolls potential of items up to LEGENDARY
                  <ul>
                      <li>Found in the Cash Shop, Reward Points Shop and from Fairy Bros' Daily Gift</li>
                      <li>Occasionally also found in Event Shops</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/black-cube.png" alt="Cash Black Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/5062010" target="_blank" rel="noreferrer noopener">[Black Cube]</a>: </strong>Rerolls potential of items
                  up to LEGENDARY. You also have the chance to choose which potential you want, your Current one or the New one
                  <ul>
                      <li>Found in the Cash Shop, Reward Points Shop and from Fairy Bros' Daily Gift</li>
                      <li>Has a higher chance than Red Cubes to tier up equipment</li>
                      <li>Occasionally also found in Event Shops</li>
                  </ul>
              </li>
              <li>
                  <img src="/images/items/bonus-potential-cube.png" alt="Cash Bonus Potential Cube"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/item/5062500" target="_blank" rel="noreferrer noopener">[Bonus Potential Cube]</a>: </strong>Rerolls the
                  BONUS potential of items up to LEGENDARY
                  <ul>
                      <li>Found in the Cash Shop and from Fairy Bros' Daily Gift</li>
                  </ul>
              </li>
            </ul>
            {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
            <ArticleHeaderTwo id="bonus">Flames &amp; Bonus Stats</ArticleHeaderTwo>
            <p>Equipment can come with Bonus Stats. The stats can be categorized into Tiers. There are a total of 7 tiers with 7 being the highest and providing the most stat boosts. Boss Equipment & KMS equipment tends to have higher tiers of Bonus Stats compared to items outside of KMS (for example Gollux accessories & Sweetwater). More info can be found at the bottom of the page on Bonus Stats</p>
            <p>To reroll Bonus Stats, you need to use items called "Rebirth Flames". Regular rebirth flames that have a "LV. X" attached to it can only reroll certain items up to that specified level and are dropped by Bosses. These regular flames yield lower tiers compared to special ones. You can identify which equipment can be flamed by hovering over them and checking the top left corner of the equipment icon. If there is a transparent dot, it can be flamed with regular rebirth flames. If there is a white dot, it can only be flamed with special rebirth flames</p>
            <p><img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/><img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/><img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/><img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/><img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> Regular Rebirth Flames: <a href="https://maplestory.wiki/GMS/210.1.1/item/2048700" target="_blank" rel="noreferrer noopener">[Lv. 110]</a>, <a href="https://maplestory.wiki/GMS/214/item/2048701" target="_blank" rel="noreferrer noopener">[Lv. 120]</a>, <a href="https://maplestory.wiki/GMS/214/item/2048702" target="_blank" rel="noreferrer noopener">[Lv. 130]</a>, <a href="https://maplestory.wiki/GMS/214/item/2048703" target="_blank" rel="noreferrer noopener">[Lv. 140]</a>, and <a href="https://maplestory.wiki/GMS/214/item/2048704" target="_blank" rel="noreferrer noopener">[Lv. 150]</a></p>
            <p><img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/><img src="/images/items/eternal-rebirth-flame.png" alt="Use Eternal Rebirth Flame"/> Special Rebirth Flames: <a href="https://maplestory.wiki/GMS/214/item/2048716">[Powerful Rebirth Flame]</a> and <a href="https://maplestory.wiki/GMS/214/item/2048717" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a></p>
            <p>Powerful Rebirth Flames and Eternal Rebirth Flames can reroll any equipment with Bonus Stats. They can also provide the best Bonus Stats possible. These special Rebirth Flames can be crafted, sold in Event Shops, given from Fairy Bros' Daily Gift or sometimes dropped by Elite Monsters and Bosses</p>
            <p>Additionally, there is a special Rebirth Flame called the <img src="/images/items/black-rebirth-flame.png" alt="Black Rebirth Flame"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/2048753" target="_blank">Black Rebirth Flame</a> that is only available from Event Shops which functions just like an Eternal Rebirth Flame but you can choose between your previous stats or the current ones similar to the <img src="/images/items/black-cube.png" alt="Cash Black Cube"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/5062010" target="_blank">Black Cube</a> for Potentials</p>
            <h4>Item Dots <em data-preserve-html-node="true">(refer to [04] on the top image)</em></h4>
            <p>On the top left corner of an equipment icon when hovering over it, there is a dot that indicates if a Regular Rebirth Flame can be applied to that equipment</p>
            <p><img src="/images/info/item-transparent-dot.png" alt="Transparent Dot"/></p>
            <ul><li>Transparent dot: Can be flamed with all Rebirth Flames</li></ul>
            <p><img src="/images/info/item-white-dot.png" alt="White Dot"/></p>
            <ul><li>White dot: Can only be flamed with Powerful Rebirth Flames and Eternal Rebirth Flames</li></ul>
            <hr/>
            <p>For more info on Spell Tracing and Starforcing, check out:</p>
            <p><a href="https://strategywiki.org/wiki/MapleStory/Spell_Trace_and_Star_Force" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Spell_Trace_and_Star_Force</a></p>
            <p>
              <a href="https://support-maplestory.nexon.net/hc/en-us/articles/204088639-How-do-I-enhance-equips-with-Star-Force-" target="_blank" rel="noopener noreferrer">
                  https://support-maplestory.nexon.net/hc/en-us/articles/204088639-How-do-I-enhance-equips-with-Star-Force-
              </a>
            </p>
            <p>For more info on Bonus Stats and Rebirth Flames, check out the strategywiki here:            </p>
            <p><a href="https://strategywiki.org/wiki/MapleStory/Bonus_Stats" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Bonus_Stats</a></p>
            <p>For more info on endgame gear, check out this neat video:</p>
            <p><a href="https://www.youtube.com/watch?v=qdyIWRqXOH0" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=qdyIWRqXOH0</a></p>
            <p>For more info on Gear, check out this neat guide. It can also be applicable to Non-Reboot servers too even though it's curated for Reboot servers:</p>
              <p><a href="https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p" target="_blank" rel="noopener noreferrer">
                  https://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/preview#slide=id.p
              </a></p>
          </div>
          <BannerAdTwo/>
      </ContentPage>

    )
}

export default UpgradeEquipment
