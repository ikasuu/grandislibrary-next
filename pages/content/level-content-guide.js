import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, BannerAdThree, VideoAd, StickyAd } from '../../components/Ads';

function ContentGuide() {
 return (
  <ContentPage>
    <Head>
        <title>Level Content Guide | MapleStory | Grandis Library</title>
        <meta content={"An in-depth explanation of all the content and notable training maps in MapleStory separated by each level all the way up until Lv. 250."} name="description"/>
    </Head>
    <ContentTitle>Level Content Guide</ContentTitle>
    <StickyAd/>
    <h3 id="top">Quick Jumps</h3>
    <ul> <li><Link smooth href="#1">Lv. 1 - 29</Link></li> <li><Link smooth href="#30">Lv. 30-49</Link></li> <li><Link smooth href="#50">Lv. 50</Link></li> <li><Link smooth href="#60">Lv. 60</Link></li> <li><Link smooth href="#70">Lv. 70</Link></li> <li><Link smooth href="#80">Lv. 80</Link></li> <li><Link smooth href="#90">Lv. 90</Link></li> <li><Link smooth href="#100">Lv. 100</Link></li> <li><Link smooth href="#110">Lv. 110</Link></li> <li><Link smooth href="#120">Lv. 120</Link></li> <li><Link smooth href="#130">Lv. 130</Link></li> <li><Link smooth href="#140">Lv. 140</Link></li> <li><Link smooth href="#150">Lv. 150</Link></li> <li><Link smooth href="#160">Lv. 160</Link></li> <li><Link smooth href="#170">Lv. 170</Link></li> <li><Link smooth href="#180">Lv. 180</Link></li> <li><Link smooth href="#190">Lv. 190</Link></li> <li><Link smooth href="#200">Lv. 200</Link></li> <li><Link smooth href="#210">Lv. 210</Link></li> <li><Link smooth href="#220">Lv. 220</Link></li> <li><Link smooth href="#230">Lv. 230</Link></li> <li><Link smooth href="#240">Lv. 240</Link></li> <li><Link smooth href="#250">Lv. 250+</Link></li>
    </ul>
    <VideoAd/>
    <Level1To29/>
    <Level30To49/>
    <Level50/>
    <BannerAdOne/>
    <Level60/>
    <Level70/>
    <Level80/>
    <Level90/>
    <BannerAdTwo/>
    <Level100/>
    <Level110/>
    <Level120/>
    <Level130/>
    <Level140/>
    <Level150/>
    <Level160/>
    <Level170/>
    <Level180/>
    <Level190/>
    <BannerAdThree/>
    <Level200/>
    <Level210/>
    <Level220/>
    <Level230/>
    <Level240/>
    <Level250/>
    <Credits/>
  </ContentPage>
 );
};

function Credits(){
  return(
    <div>
      <ArticleHeaderTwo>Credits:</ArticleHeaderTwo>
      <p>
        <a href="https://www.youtube.com/watch?v=OUXyJ-J7P0w&amp;t">https://www.youtube.com/watch?v=OUXyJ-J7P0w&amp;t</a><br/> <a href="https://www.youtube.com/watch?v=_3zL6TAOSBY&amp;t">https://www.youtube.com/watch?v=_3zL6TAOSBY&amp;t</a><br/> <a href="https://www.youtube.com/watch?v=r4P89p2jfJY&amp;t=5664s">https://www.youtube.com/watch?v=r4P89p2jfJY&amp;t</a><br/> <a href="https://maplestorywiki.net/w/MapleStory">https://maplestorywiki.net/w/MapleStory</a><br/> <a href="https://maplestory.wiki/">https://maplestory.wiki/</a>
      </p>
    </div>
  );
};

function Level1To29(){
  return (
    <div>
      <ArticleHeaderTwo id="1">Level 1 - 29</ArticleHeaderTwo>
      <p>Follow your class' storyline as these will get you to level 30 and 2nd Job. As well, certain class storylines may be required and provide unique rewards</p>
      <p>If you are looking for equipment, monsters near your level will drop equipment or you may buy equipment from NPCs in towns. The follow towns on Victoria Island will have the following low-level gear:</p>
      <ul>
        <li><img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <a href="https://maplestorywiki.net/w/Perion" target="_blank" rel="noreferrer noopener"><strong>Perion</strong></a>: Warrior Gear</li>
        <li><img src="/images/map-icons/henesys.png" alt="MapIcon Henesys"/> <a href="https://maplestorywiki.net/w/Henesys" target="_blank" rel="noreferrer noopener"><strong>Henesys</strong></a>: Archer Gear</li>
        <li><img src="/images/map-icons/ellinia.png" alt="MapIcon Ellinia"/> <a href="https://maplestorywiki.net/w/Ellinia" target="_blank" rel="noreferrer noopener"><strong>Ellinia</strong></a>: Mage Gear</li>
        <li><img src="/images/map-icons/kerning-city.png" alt="MapIcon Kerning City"/><a href="https://maplestorywiki.net/w/Kerning_City" target="_blank" rel="noreferrer noopener"><strong>Kerning City</strong></a>: Thief Gear</li>
        <li><img src="/images/map-icons/nautilus.png" alt="MapIcon Nautilus"/> <a href="https://maplestorywiki.net/w/Nautilus"><strong>Nautilus</strong></a>: Pirate Gear</li>
      </ul>
      <img className="repository-image" src="/images/info/npc-shop-ui.png" alt="Shop NPC"/>
      <hr/>
      <p>Some notable training maps if you do not want to follow your storyline are:</p>
      <ul>
        <li><img src="/images/map-icons/henesys.png" alt="MapIcon Henesys"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/100040000" target="_blank" rel="noreferrer noopener"><strong>Henesys - Golem's Temple</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5150003" target="_blank" rel="noreferrer noopener">Flaming Mixed Golems</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5150000" target="_blank" rel="noreferrer noopener">Mixed Golems</a></li>
        <li>
          <img src="/images/map-icons/ellinia.png" alt="MapIcon Ellinia"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/101030000" target="_blank" rel="noreferrer noopener"><strong>Ellinia - North Forest</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2230100" target="_blank" rel="noreferrer noopener">Evil Eyes</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3230100" target="_blank" rel="noreferrer noopener">Curse Eyes</a>
          <ul><li>To find these maps open the World Map ("W" by default) and search for the monsters listed above</li></ul>
        </li>
      </ul>
      <hr/>
    </div>
  );
};

function Level30To49(){
  return(
    <div>
      <ArticleHeaderTwo id="30">Level 30 - 49</ArticleHeaderTwo>
      <img className="repository-image" src="/images/info/maple-guide-expanded.png" alt="Maple Content Guide"/>
      <img className="repository-image" src="/images/info/maple-guide-ui.png" alt="Content Guide Minimized"/>
      <p>Reaching Lv. 30 unlocks the expanded "Maple Guide" that provides shortcut access to Job Advancement quests, instant teleport to training maps, and more. To expand the UI press "U" by default to see available content for all levels. You can only teleport to maps if you are lower than 10 levels above the maximum recommended level. However, gaining a "Completion Stamp" by completing specified requirements allows you to teleport back regardless of your level</p>
      <img src="/images/npc/dimensional-mirror.png" alt="NPC Dimensional Mirror"/><img className="repository-image" src="/images/info/dimensional-mirror-ui.png" alt="Dimensional Mirror UI"/>
      <p>In most towns, the "Dimensional Mirror" NPC grants access to a variety of content. When in town, the "Quick Move" button on the top left corner of the screen provides a shortcut to useful NPCs within the town like the Dimensional Mirror</p>
      <img className="repository-image" src="/images/info/quick-move.png" alt="Quick Move"/>
      <hr/>
      <img className="repository-image" src="/images/info/lightbulb-quest-ui.png" alt="Lightbulb Quest UI"/><img className="repository-image" src="/images/info/sidebar-icons.png" alt="Sidebar Icons"/>
      <p>Common quests can be accessed through the <img alt="Lightbulb Icon" src="/images/info/lightbulb.png"/> Lightbulb icon on the left-hand side of the screen. Quests found here are typically Job Advancements, class storylines, Theme Dungeons, and content pre-quests. As well, most areas can be returned to via the Dimensional Mirror or Maple Guide</p>
      <p>Filtering the quests by clicking the "My Level Range" button on the bottom right is recommended. As well, the list of quests is quite long but, not all quests are required to be completed. The necessary ones will have a [Required] tag in red beside the quest</p>
      <hr/>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <h5>[Content here may unlock content or provide meaningful rewards]</h5>
      <p><img className="repository-image" src="/images/info/ardentmill.png" alt="Ardentmill"/></p>
      <ul>
        <li><img src="/images/map-icons/ardentmill.png" alt="MapIcon profession"/> <strong>[Lv. 35] <a href="https://strategywiki.org/wiki/MapleStory/Professions" target="_blank" rel="noreferrer noopener">Professions / Crafting</a></strong>: Professions are located in Ardentmill that is accessible from town and "Quick Move". To start, accept the quest "The Professional in the Lightbulb icon"
          <ul>
            <li>In Ardentmill you can unlock all Harvesting Professions: Mining and Herbalism and Crafting Professions: Alchemy, Smithing or Accessory Crafting</li>
            <li>Pressing "B" by default will open the Professions UI where you can view info on your Professions and remaining monsters before special flowers and veins can be harvested. As well, <a href="https://strategywiki.org/wiki/MapleStory/Traits" target="_blank" rel="noreferrer noopener">Traits</a> that provide small stat bonuses can be viewed.</li>
            <li>An in-depth guide to Professions: <a href="https://www.youtube.com/watch?v=3hfJoCd2utc" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=3hfJoCd2utc</a></li>
          </ul> 
        </li>
      </ul>
      <hr/>
      <p><img className="repository-image" src="/images/info/annas-plea.png" alt="Anne's Plea"/></p>
      <p>4 Theme Dungeons storylines are unlocked at Lv. 30 that can be started through Lightbulb icon. Theme Dungeon storylines provide great EXP and have useful rewards like gear and mesos. The Theme Dungeons below have enemies that scale to your level from Lv. 30 to 59. The monsters are also instanced meaning that the monsters you hunt are different from other players</p>
      <ul>
        <li><img src="/images/map-icons/ellinel.png" alt="MapIcon Ellinel"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category:Ellinel" target="_blank" rel="noreferrer noopener">Ellinel Fairy Academy</a></strong>: <img src="/images/items/meso.png" alt="Mesos Icon"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Traces], <img src="/images/equipment/ellinel-wings.png" alt="Eqp Ellinel Wings"/> <a href="https://maplestory.wiki/GMS/215/item/1102590" target="_blank" rel="noreferrer noopener">[Cape]</a>, <img src="/images/equipment/ellinel-bracelet.png" alt="Eqp Ellinel Bracelet"/>[Glove], <img src="/images/equipment/fairy-mark.png" alt="Eqp Fairy Mark"/> <a href="https://maplestory.wiki/GMS/215/item/1022254" target="_blank" rel="noreferrer noopener">[Eye Accessory]</a> and <img src="/images/equipment/honorary-fairy-professor.png" alt="Eqp Honorary Fairy Professor"/> [Medal]</li>
        <li><img src="/images/map-icons/gold-beach.png" alt="MapIcon Gold Beach"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach Resort</a></strong>: <img src="/images/items/meso.png" alt="Mesos Icon"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/>[Spell Traces], <img src="/images/equipment/octopus-earrings.png" alt="Eqp Octopus Earrings"/> <a href="https://maplestory.wiki/GMS/215/item/1032254" target="_blank" rel="noreferrer noopener">[Earrings]</a> and <img src="/images/equipment/beach-bum.png" alt="Eqp Beach Bum"/> [Medal] </li>
        <li><img src="/images/map-icons/riena-strait.png" alt="MapIcon Riena Strait"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category:Riena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a></strong>: <img src="/images/items/meso.png" alt="Mesos Icon"/> [2 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/>[Spell Traces], <img src="/images/equipment/sailor-mask.png" alt="Eqp Sailor Mask"/> <a href="https://maplestory.wiki/GMS/215/item/1012389" target="_blank" rel="noreferrer noopener">[Face Accessory]</a>, <img src="/images/equipment/sailor-belt.png" alt="Eqp Sailor Belt"/> <a href="https://maplestory.wiki/GMS/215/item/1132292" target="_blank" rel="noreferrer noopener">[Belt]</a>, <img src="/images/equipment/deckhand.png" alt="Eqp Deckhand"/> [Medal]</li>
        <li><img src="/images/map-icons/elodin.png" alt="MapIcon Elodin"/> <strong>[Lv. 30 - 59] <a href="https://maplestorywiki.net/w/Category:Elodin" target="_blank" rel="noreferrer noopener">Secret Forest of Elodin</a></strong>: <img src="/images/equipment/elodin-bird-dog.png" alt="Eqp Elodin Bird Dog"/> [Medal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/>[Spell Traces]</li>
      </ul>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/gold-beach.png" alt="MapIcon Gold Beach"/> <a href="https://maplestorywiki.net/w/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener"><strong>Gold Beach Resort</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/3401003" target="_blank" rel="noreferrer noopener">Violet Clam Slime</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3401010" target="_blank" rel="noreferrer noopener">Seashell Octopus Slime</a></li>
        <li><img src="/images/map-icons/elodin.png" alt="MapIcon Elodin"/> <strong><a href="https://maplestorywiki.net/w/Category:Elodin" target="_blank" rel="noreferrer noopener">Elodin</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/3501106" target="_blank" rel="noreferrer noopener">Forest Glimmerfox</a> and <a href="https://maplestory.wiki/GMS/215/mob/3501107" target="_blank" rel="noreferrer noopener">Night Glimmerfox</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level50(){
  return(
    <div>
      <ArticleHeaderTwo id="50">Level 50</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <img className="repository-image" src="/images/info/inner-ability.png" alt="Inner Ability UI"/>
      <ul>
        <li><strong>[Lv. 50] <a href="https://strategywiki.org/wiki/MapleStory/Inner_Ability" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff0000'}}>[Important]</span> Inner Ability</a></strong>: Rerollable stats that are automatically unlocked at Lv. 50. They function similar to potentials with different tiers (Rare, Epic, Unique, Legendary) and can be rerolled using <img src="/images/items/medal-of-honor.png" alt="Use Medal of Honor"/> <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> Honor EXP or <img src="/images/items/miracle-circulator.png" alt="Use Miracle Circulator"/> Circulators</li>
      </ul>
      <h4>Optional</h4>
      <h5>[Content here may not be useful compared to recommended content]</h5>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/dead-mine.png" alt="MapIcon Dead Mine"/> <strong>[Lv. 50+] <a href="https://maplestorywiki.net/w/Zakum" target="_blank" rel="noreferrer noopener">[Boss] Easy Zakum</a></strong>: A boss located in El Nath. The quest "[Zakum] Statue of Dread" in the Lightbulb icon is not required and only teleports you to <a href="https://maplestory.wiki/GMS/210.1.1/map/211000001" target="_blank" rel="noreferrer noopener">El Nath - Chief's Residence</a> where you talk to an NPC corresponding to your job (Mage, Archer, Thief, etc.) to teleport to <a href="https://maplestory.wiki/GMS/210.1.1/map/211042300" target="_blank" rel="noreferrer noopener">Dead Mines - The Door to Zakum</a>
          <ul><li><strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/zakum-helmet.png" alt="Eqp Zakum Helmet"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002357" target="_blank" rel="noreferrer noopener">[Zakum Helmet]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> <a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a></li></ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/102030000" target="_blank" rel="noreferrer noopener">Perion - Wild Boar Land</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2230102" target="_blank" rel="noreferrer noopener">Wild Boars</a></li>
        <li><img src="/images/map-icons/perion.png" alt="MapIcon Perion"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/102040200" target="_blank" rel="noreferrer noopener">Perion - Excavation Site</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230125" target="_blank" rel="noreferrer noopener">Skeledogs</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230126" target="_blank" rel="noreferrer noopener">Mummydogs</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/7130103" target="_blank" rel="noreferrer noopener">Commander Soldier</a> </li>
      </ul>
      <hr/>
    </div>
  );
};

function Level60(){
  return(
    <div>
      <ArticleHeaderTwo id="60">Level 60</ArticleHeaderTwo>
      <p>Congratulations on level 60! Welcome to 3rd job!</p>
      <img className="repository-image" src="/images/info/boss-queue.png" alt="Boss Matchmaking UI"/>
      <p>Using the "Boss Contents" UI provides a direct teleport to bosses after completing their pre-quests. The "Boss Party" Key can be assigned to a Key Slot through the "Keyboard Shortcuts" UI</p>
      <p>Defeating monsters is recommended during these levels as there is no useful content to complete</p>
      <h3>Content Available:</h3>
      <h4>Optional</h4>
      <h5>[Grinding is preferred at these levels as there isn't much to do]</h5>
      <hr/>
      <ul>
        <li>
          <img src="/images/map-icons/mushroom-castle.png" alt="MapIcon Mushroom Castle"/> <strong>[Lv. 60] <a href="https://strategywiki.org/wiki/MapleStory/Mushroom_Castle" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Mushroom Kingdom</a></strong>: Slower compared to previous Theme Dungeons due to lots of cutscenes
          <ul><li><strong>Main Rewards:</strong> <img src="/images/items/meso.png" alt="Mesos Icon"/> [3 mil Mesos], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/>[Spell Traces], <img src="/images/equipment/violettas-knight.png" alt="Eqp Violetta's Knight"/> [Medal], <img src="/images/equipment/heavy-violetta-cape.png" alt="Eqp Heavy Violetta Cape"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1102689" target="_blank" rel="noreferrer noopener">[Heavy Violetta Cape]</a> <a href="https://maplestory.wiki/GMS/215/item/1142629" target="_blank" rel="noreferrer noopener">, </a> <img src="/images/equipment/shackles-of-love.png" alt="Eqp Shackles of Love"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122321" target="_blank" rel="noreferrer noopener">[Shackles of Love]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/tangyoon.png" alt="MapIcon Tangyoon"/> <strong>[Lv. 60] <a href="https://maplestorywiki.net/w/Cooking_with_Tangyoon" target="_blank" rel="noreferrer noopener">[Party Quest] Cooking with Tangyoon</a></strong>: Requires 1-3 party members to enter. The objective is to defeat monsters in a certain order to cook the correct dish
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li>Depending on if the dishes were successful or not, you will be rewarded <img src="/images/items/chef-certificate.png" alt="Etc Chief Certificate"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/4033668" target="_blank" rel="noreferrer noopener">Chef Certificates</a> to exchange for equipment</li>
            <li><strong>Main Rewards</strong>: <img src="/images/equipment/good-cook.png" alt="Eqp Good Cook"/> [Medal], <img src="/images/equipment/tangyoons-chef-hat.png" alt="Eqp Tangyoon's Chef Hat"/> <a href="https://maplestory.wiki/GMS/205/item/1003762" target="_blank" rel="noreferrer noopener">[Tangyoon's Chef Hat]</a>, <img src="/images/equipment/tangyoons-chef-outfit.png" alt="Eqp Tangyoon's Chef Outfit"/> <a href="https://maplestory.wiki/GMS/205/item/1052578" target="_blank" rel="noreferrer noopener">[Tangyoon's Chef Outfit]</a></li>
          </ul>
        </li>
        <li>
          <img src="/images/map-icons/balrog.png" alt="MapIcon Balog"/> <strong>[Lv. 65] <a href="https://maplestorywiki.net/w/Balrog" target="_blank" rel="noreferrer noopener">[Boss] Lord Balrog</a></strong>: A boss located within Sleepywood. You can get to Lord Balrog through the Maple Guide, Boss Contents UI, or by traveling to <a href="https://maplestory.wiki/GMS/210.1.1/map/105100100" target="_blank" rel="noreferrer noopener">Sleepywood - Bottom of the Temple</a>
          <ul>
            <li>An indepth guide to Lord Balrog: <a href="https://dexless.com/guides/balrog-bossing-guide.123/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/balrog-bossing-guide.123/</a></li>
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/bain-wings.png" alt="Eqp Bain Wings"/>[Lv. 58 Bain Weapon], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Soul Shard]</a>, <img src="/images/items/balrog-horn-throne.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Balrog-Horn Throne]</a></li>
          </ul>
        </li>
      </ul>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/sleepywood.png" alt="MapIcon Dungeon"/> <strong><a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/map/105010000" target="_blank">Sleepywood - Silent Swamp</a></strong> and <strong><a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/map/105020000" target="_blank">Sunless Area</a></strong>: <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/mob/4130100" target="_blank">Copper Drakes</a> and <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/mob/2600224" target="_blank">Drakes</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level70(){
  return(
    <div>
      <ArticleHeaderTwo id="70">Level 70</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <img className="repository-image" src="/images/info/link-skill-ui.png" alt="MapIcon Link Skill UI"/>
      <ul>
        <li>
          <strong>[Lv. 70] <a href="https://maplestorywiki.net/w/Link_Skill" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff0000'}}>[Important]</span> Link Skills</a></strong>:  Class-specific skill that can be shared with another of your characters to both gain the skill. Link Skills are located in your Beginner's Skill Tab by double-clicking on <img src="/class-icons/link-skills/link-manager.png" alt="Skill Link Manager"/> Link Manager
          <ul><li>For more info on Link Skills check out: <a href="https://maplestorywiki.net/w/Link_Skill" target="_blank" rel="noreferrer noopener">https://maplestorywiki.net/w/Link_Skill</a></li></ul>
        </li>
        <li>
          <img src="/images/map-icons/afterlands.png" alt="MapIcon Afterlands"/> <strong>[Lv. 70] <a href="https://maplestorywiki.net/w/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">[Theme Dungeon] The Afterlands</a>:</strong> Provides an easy way to obtain permanent totem equipment however, it can be easy to get stuck without a guide
          <ul> 
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/beodog-figurine.png" alt="Eqp Beodog Figurine"/> <img src="/images/equipment/billy-figurine.png" alt="Eqp Billy Figurine"/> <img src="/images/equipment/adler-figurine.png" alt="Eqp Adler Figurine"/> <img src="/images/equipment/mansa-figurine.png" alt="Eqp Mansa Figurine"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Afterlands_Souvenir" target="_blank" rel="noreferrer noopener">[Afterlands Totems]</a> </li>
            <li>Here is a guide: <a href="https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/" target="_blank" rel="noreferrer noopener">  https://www.reddit.com/r/Maplestory/comments/8fgfty/afterlands_guide_fastest_way_possible_no_bugs/</a></li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <h5>[Grinding is preferred at these levels as there isn't much to do]</h5>
      <hr/>
      <p><img className="repository-image" src="/images/info/party-quest-map.png" alt="Party Quests"/></p>
      <ul>
        <li>
          <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> <strong>[Lv. 70] </strong> <a href="https://maplestorywiki.net/w/Party_Quest" target="_blank" rel="noreferrer noopener"><strong>Party Quests + Cross World Party Quests</strong></a>: Content to be completed with other players
          <ul>
            <li>Completing Cross World Party Quests rewards Points that can be exchanged for primarily cosmetic items</li>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li>Party quests available at Lv. 70 are: 
              <ul>
                <li><strong><a href="https://maplestorywiki.net/w/Moon_Bunny%27s_Rice_Cake" target="_blank" rel="noreferrer noopener">Moon Bunny's Rice Cake [Cross World]</a></strong></li>
                <li><strong><a href="https://maplestorywiki.net/w/First_Time_Together" target="_blank" rel="noreferrer noopener">First Time Together [Cross World]</a></strong></li>
                <li><strong><a href="https://maplestorywiki.net/w/Remnant_of_the_Goddess" target="_blank" rel="noreferrer noopener">Remnant of the Goddess [Cross World]</a></strong></li>
                <li><strong><a href="https://maplestorywiki.net/w/Forest_of_Poison_Haze" target="_blank" rel="noreferrer noopener">Forest of Poison Haze [Cross World]</a></strong></li>
                <li><strong><a href="https://maplestorywiki.net/w/Ariant_Coliseum" target="_blank" rel="noreferrer noopener">Ariant Coliseum [Cross World]</a></strong></li>
                <li><strong><a href="https://maplestorywiki.net/w/Romeo_and_Juliet" target="_blank" rel="noreferrer noopener">Romeo and Juliet [Party Quest]</a></strong></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/el-nath.png" alt="MapIcon ElNath"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/211040200" target="_blank" rel="noreferrer noopener">El Nath - Ice Valley II</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5140000" target="_blank" rel="noreferrer noopener">White Fang</a></li>
        <li><img src="/images/map-icons/orbis.png" alt="MapIcon Orbis"/> <a href="https://maplestorywiki.net/w/Orbis" target="_blank" rel="noreferrer noopener"><strong>Orbis</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5120000" target="_blank" rel="noreferrer noopener">Luster Pixie</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5120001" target="_blank" rel="noreferrer noopener">Cellion</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5120002" target="_blank" rel="noreferrer noopener">Lioner</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5120003" target="_blank" rel="noreferrer noopener">Grupin</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level80(){
  return(
    <div>
      <ArticleHeaderTwo id="80">Level 80</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Optional</h4>
      <h5>[Grinding is preferred at these levels as there isn't much to do]</h5>
      <hr/>
      <ul>
        <li>
          <img src="/images/map-icons/ariant.png" alt="MapIcon Ariant"/> <strong>[Lv. 80] <a href="https://maplestorywiki.net/w/Nett%27s_Pyramid_(Party_Quest)" target="_blank" rel="noreferrer noopener">[Party Quest] Nett's Pyramid</a></strong>: Requires 4 party members to enter. The objective is to defeat waves of enemies
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/pharaoh-belt.png" alt="Eqp Pharaoh Belt"/> <a href="https://maplestory.wiki/GMS/212/item/1132013" target="_blank" rel="noreferrer noopener">[Immortal Pharaoh Belt]</a>, <img src="/images/equipment/the-immortal-pharaoh-shoes.png" alt="Eqp The Immortal Pharaoh Shoes"/> <a href="https://maplestory.wiki/GMS/205/item/1072619" target="_blank" rel="noreferrer noopener">[Immortal Pharaoh Shoes]</a>, <img src="/images/equipment/the-immortal-pharaoh-ring.png" alt="Eqp The Immortal Pharaoh Ring"/> <a href="https://maplestory.wiki/GMS/212/item/1112682" target="_blank" rel="noreferrer noopener">[Immortal Pharaoh Ring]</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/verne-mine.png" alt="MapIcon Verne Mine"/> <strong> <a href="https://maplestory.wiki/GMS/215/map/310050600" target="_blank" rel="noreferrer noopener">Verne Mine - Shaft 2</a> &amp; <a href="https://maplestory.wiki/GMS/215/map/310060300" target="_blank" rel="noreferrer noopener">Deep Shaft</a> </strong> : <a href="https://maplestory.wiki/GMS/215/mob/7150001" target="_blank" rel="noreferrer noopener">Big Spider</a> and <a href="https://maplestory.wiki/GMS/215/mob/8105005" target="_blank" rel="noreferrer noopener">Ore Muncher</a></li>
        <li><img src="/images/map-icons/magatia.png" alt="MapIcon Magatia"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/260020600" target="_blank" rel="noreferrer noopener">Nihal Desert - Sahel 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110300" target="_blank" rel="noreferrer noopener">Sand Rat</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110301" target="_blank" rel="noreferrer noopener">Scorpion</a></li>
        <li><img src="/images/map-icons/magatia.png" alt="MapIcon Magatia"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/260020610" target="_blank" rel="noreferrer noopener"><strong>Nihal Desert - The Desert of Serenity</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2110300" target="_blank" rel="noreferrer noopener">Sand Rat</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/3110301" target="_blank" rel="noreferrer noopener">Dark Sand Dwarf</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level90(){
  return(
    <div>
      <ArticleHeaderTwo id="90">Level 90</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li>
          <img src="/images/map-icons/dead-mine.png" alt="ElNathDungeon icon"/> <a href="https://maplestorywiki.net/w/Zakum" target="_blank" rel="noreferrer noopener"><strong>[Boss] Normal &amp; Chaos Zakum</strong></a>: Both difficulties have much more HP however, Chaos Mode should not be attempted until Lv. 200+
          <ul>
            <li>
                  <strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/poisonic-sword.png" alt="Eqp Zakum's Poisonic Sword"/>
                  <a href="https://maplestorywiki.net/w/Zakum%27s_Poisonic_Sword" target="_blank" rel="noreferrer noopener">[Poisonic Weapons]</a>, <img src="/images/equipment/condensed-power-crystal.png" alt="Eqp Condensed Power Crystal"/>
                  <a href="https://maplestorywiki.net/w/Condensed_Power_Crystal">[</a><a href="https://maplestory.wiki/GMS/210.1.1/item/1012478" target="_blank" rel="noreferrer noopener">Condensed Power Crystal]</a>, <img src="/images/equipment/aquatic-letter-eye.png" alt="Eqp Aquatic Letter Eye Accessory"/>
                  <a href="https://maplestory.wiki/GMS/210.1.1/item/1022231" target="_blank" rel="noreferrer noopener">[Aquatic Letter Eye]</a>, <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/>
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
        </li>
        <li>
          <img src="/images/map-icons/heliseum.png" alt="MapIcon Heliseum"/> <strong>[Lv. 90] </strong> <a href="https://maplestorywiki.net/w/Category:Heliseum" target="_blank" rel="noreferrer noopener"><strong>[Pre-Quest / Storyline] Heliseum</strong></a>: Completing this Storyline unlocks access to the Lv. 155+ boss <img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <a href="https://maplestorywiki.net/w/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a> and daily quests for <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> <a href="https://maplestorywiki.net/w/Shadowdealer_Coin" target="_blank" rel="noreferrer noopener">Shadowdealer Coins</a> that are used to buy gear from <a href="https://maplestorywiki.net/w/Mayala" target="_blank" rel="noreferrer noopener">Mayala</a>
          <ul>
            <li><strong>Notable shop items:</strong> <img src="/images/equipment/elite-heliseum-cape.png" alt="Eqp Elite Heliseum Cape"/> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>, <img src="/images/equipment/elite-heliseum-boots.png" alt="Eqp Elite Heliseum Boots"/> <img src="/images/equipment/nova-hyades-boots.png" alt="Eqp Nova Boots"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Shoe]</a>, <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="/images/equipment/antique-root-gloves.png" alt="Eqp Antique Root Gloves"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1082688" target="_blank" rel="noreferrer noopener">[Antique Root Gloves]</a>
              <ul>
                <li>Superior equipment grant more stats when Starforcing but cost more mesos and have a higher chance to destroy on failure</li>
              </ul>
            </li>
            <li> Guide to the pre-quest: <a href="https://www.youtube.com/watch?v=E8cjZb2b2CI" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=E8cjZb2b2CI</a>
              <ul><li>Pre-quest for Nova characters is slightly different</li></ul>
            </li>
          </ul>
        </li>
        <li>
          <img src="/images/map-icons/mushroom-shrine.png" alt="MapIcon Mushroom Shrine"/> <strong>[Lv. 90] <a href="https://maplestorywiki.net/w/Category:Mushroom_Shrine" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Mushroom Shrine Tales</a></strong>: Accessible from the Dimensional Mirror and the storyline can be started from the Lightbulb Quests
          <ul>
            <li>Upon completing the storyline, the <img src="/images/equipment/wings-of-fate.png" alt="Eqp Wings of Fate"/> <a href="https://maplestorywiki.net/w/Wings_of_Fate" target="_blank" rel="noreferrer noopener">[Wings of Fate]</a> cape is rewarded with goods stats but it is tedious to obtain as the storyline is long
              <ul>
                <li>The cape can be reobtained at no cost if discarded thus useful for rerolling bonus stats</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/ellin-forest.png" alt="MapIcon Ellin Forest"/> <strong>[Lv. 95] <a href="https://maplestorywiki.net/w/Category:Ellin_Forest" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Ellin Forest</a></strong>
          <ul><li>Main Rewards: <img src="/images/equipment/ephenias-ring.png" alt="Eqp Ephenia's Ring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1112683" target="_blank" rel="noreferrer noopener">[Ephenia's Ring]</a>, <img src="/images/equipment/ellin-forest-guardian.png" alt="Eqp Ellin Forest Guardian"/> [Medal]</li></ul>
        </li>
        <li>
          <img src="/images/map-icons/hyperspace-cube.png" alt="MapIcon Maple Detective"/> <strong>[Lv. 90] <a href="https://maplestorywiki.net/w/Stellar_Detectives" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Stellar Detectives</a></strong>
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/i-really-like-tutu.png" alt="Eqp I really like Tutu"/> <img src="/images/equipment/i-really-like-nenne.png" alt="Eqp I really like Nenne"/> <img src="/images/equipment/i-really-like-lingling.png" alt="Eqp I really like Lingling"/> <img src="/images/equipment/i-really-like-jett.png" alt="Eqp I Really Like Jett"/> [Medal], <img src="/images/items/lingling-damage-skin.png" alt="Use Lingling Damage Skin"/> <img src="/images/items/tutu-damage-skin.png" alt="Use Tutu Damage Skin"/> <img src="/images/items/nenne-damage-skin.png" alt="Use Nenne Damage Skin"/> [Damage Skins]</li></ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/magatia.png" alt="MapIcon Magatia"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/261020300" target="_blank" rel="noreferrer noopener">Magatia - Lab Area C-1</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/map/261020400" target="_blank" rel="noreferrer noopener">Lab Area C-2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5110301" target="_blank" rel="noreferrer noopener">Roid</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/5110302" target="_blank" rel="noreferrer noopener">Neo Huroid</a></li>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240010600" target="_blank" rel="noreferrer noopener">[Star Force 5] Leafre - Sky Nest II</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140003" target="_blank" rel="noreferrer noopener">Blood Harp</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level100(){
  return(
    <div>
      <ArticleHeaderTwo id="100">Level 100</ArticleHeaderTwo>
      <p>Congratulations on level 100 and welcome to 4th Job! You are now halfway to level 200 and 5th job</p>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><strong>[Training] Star Force Maps</strong>: Training maps with stronger enemies that give more EXP but require a certain amount of Star Force Enhancements on your gear to deal damage to enemies
          <ul>
            <li>For more info on Star Force check out: <a href="https://maplestorywiki.net/w/Enhancing" target="_blank" rel="noreferrer noopener">https://maplestorywiki.net/w/Enhancing</a> and <a href="https://strategywiki.org/wiki/MapleStory/Spell_Trace_and_Star_Force" target="_blank" rel="noreferrer noopener">https://strategywiki.org/wiki/MapleStory/Spell_Trace_and_Star_Force</a></li> 
          </ul>
        </li>
        <li><img src="/images/map-icons/monster-park.png" alt="MapIcon MonsterPark"/> <strong>[Lv. 105] <a href="https://maplestorywiki.net/w/Monster_Park" target="_blank" rel="noreferrer noopener">[Recommended] Monster Park</a></strong>: Accessible through the Dimensional Mirror. Monster Park has level-based dungeons with stages of enemies and upon completion rewards EXP and <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> <a href="https://maplestorywiki.net/w/Monster_Park_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[Monster Park Commemorative Coins]</a> for exchanging items
          <ul>
            <li>Can be completed 2 times per day for free and extra runs will cost <a href="http://maplestory.nexon.net/game/beginners-guide/shop" target="_blank" rel="noreferrer noopener">Maple Points</a>
              <ul><li>There is an item that grants extra runs in the Cash Shop available with Reward Points (Interactive Worlds) or Mesos (Heroic Worlds)</li></ul>
            </li>
            <li>The <img src="/images/items/monster-park-coin.png" alt="Etc Monster Park Commemorative Coin"/> coins can be exchanged for potion buffs <img src="/images/items/extreme-red-potion.png" alt="Use Extreme Red Potion"/> <img src="/images/items/extreme-green-potion.png" alt="Use Extreme Green Potion"/> <img src="/images/items/extreme-blue-potion.png" alt="Use Extreme Blue Potion"/> <img src="/images/items/extreme-gold-potion.png" alt="Use Extreme Gold Potion"/> that can be stored in storage which are useful training and bossing</li>
            <li>Completing Monster Park 77 times for each day of the week will reward a <img src="/images/equipment/seven-day-monster-parker.png" alt="Eqp Seven Day Monster Parker"/> <a href="https://maplestorywiki.net/w/Quests/87/(Monster_Park)_Daily_Medal_Challenge" target="_blank" rel="noreferrer noopener">[Medal]</a> that provides +10% Ignore Enemy Defense</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/maple-tour.png" alt="MapIcon Maple Tour"/> <strong>[Lv. 105] [Recommended] Maple Tour</strong>: Accessible through the Dimensional Mirror. Maple Tour is similar to Monster Park, but instead reward Mesos and <img src="/images/items/maple-tour-coin.png" alt="Etc Maple Tour Coin"/> [Maple Tour Coins] that can be exchanged for items
          <ul>
            <li>Mesos are accumulated and can be retrieved 7 days later for the full amount or retrieved earlier for half the amount</li>
            <li>Can be completed 2 times per day for free and extra runs will cost <a href="http://maplestory.nexon.net/game/beginners-guide/shop" target="_blank" rel="noreferrer noopener">Maple Points</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/ursus.png" alt="Mobicon Ursus"/> <strong>[Lv. 100] <a href="https://maplestorywiki.net/w/Ursus" target="_blank" rel="noreferrer noopener">[Recommended] <span style={{color: '#ff9900'}}>[Boss]</span> Ursus</a></strong>: Accessible from the Dimensional Mirror. Ursus is a party boss that rewards Mesos
          <ul>
            <li>Materials are rewarded for defeating Ursus that can be exchanged for items</li>
            <li>For more info on Ursus, check this out: <a href="https://strategywiki.org/wiki/MapleStory/Ursus" target="_blank" rel="noreferrer noopener">https://strategywiki.org/wiki/MapleStory/Ursus</a></li>
          </ul>
        </li>
        <li>
          <img src="/images/map-icons/mu-lung-dojo.png" alt="MapIcon Mu Lung Dojo"/> <strong>[Lv. 105] </strong> <a href="https://maplestorywiki.net/w/Mu_Lung_Dojo" target="_blank" rel="noreferrer noopener"> <strong>Mu Lung Dojo</strong></a>:  Accessible through the Dimensional Mirror. Players fight a series of bosses to compete with other players based on time and floor reached
          <ul>
            <li>Rewards will be given based on your weekly ranking such as: <img src="/images/equipment/heros-gloves.png" alt="Eqp Hero's Gloves"/> <a href="https://maplestorywiki.net/w/Hero%27s_Gloves" target="_blank" rel="noreferrer noopener">Hero's Gloves [Glove]</a>, <img src="/images/equipment/one-with-300-years-of-inner-power.png" alt="Setup One with 300 Years of Inner Power"/> [Title]</li>
            <li>Based on the floors cleared, points are rewarded that can be exchanged for items
              <ul><li><strong>Notable items:</strong> <img src="/images/items/mu-gongs-honor-exp-guarantee.png" alt="Use Mu Gong's Honor EXP Guarantee"/> [Honor EXP], <img src="/images/items/unity-training-center-entrance-charm-coupon.png" alt="Etc Unity Training Center Entrance Charm"/> [Passive EXP Zone Entry Coupon]</li></ul> 
            </li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/grand-athenaeum.png" alt="MapIcon Grand Athenaeum"/> <strong>[Lv. 100] <a href="https://maplestorywiki.net/w/Category:Grand_Athenaeum" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Grand Anthenaeum</a></strong>: Accessible from the Dimensional Mirror. The Grand Anthenaeum consists of storylines based on the Maple World lore and previously experienced class and area storylines
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/scholarly-pendant.png" alt="Eqp Scholarly Pendant"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122263" target="_blank" rel="noreferrer noopener">[Scholarly Pendant]</a> for completing 3 stories</li>
          </ul>
        </li>
        <li> <img src="/images/map-icons/friendstory.png" alt="MapIcon spinOff1"/> <strong>[Lv. 100] <a href="https://maplestorywiki.net/w/Category:Shinsoo_International_School" target="_blank" rel="noreferrer noopener">[Theme Dungeon] FriendStory</a></strong>: Accessible from the Dimensional Mirror and the storyline can be started from the Lightbulb Quests. FriendStory is an alternate world storyline where the characters of Maple World are students and teachers at a school
          <ul>
            <li><strong>Main Rewards: </strong> <img src="/images/items/regular-school-uniform-coupon-m.png" alt="Use Regular School Uniform Coupon (M)"/><img src="/images/items/regular-school-uniform-coupon-f.png" alt="Use Regular School Uniform Coupon (F)"/> <a href="https://maplestory.wiki/GMS/205/item/2432776" target="_blank" rel="noreferrer noopener">[Regular School Uniform Coupon]</a>, <img src="/images/equipment/shinsoo-school-badge.png" alt="Eqp Shinsoo School Badge"/> <a href="https://maplestory.wiki/GMS/205/item/1182079" target="_blank" rel="noreferrer noopener">[Shinsoo School Badge]</a>, <img src="/images/items/irenas-rock-chair.png" alt="Setup Irena's Rock Chair"/><img src="/images/items/francis-best-friend.png" alt="Setup Francis' Best Friend"/> [Chair]</li>
          </ul> 
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/240010000" target="_blank" rel="noreferrer noopener">Leafre - West Leafre Forest</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2600003" target="_blank" rel="noreferrer noopener">Rash</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2600004" target="_blank" rel="noreferrer noopener">Dark Rash</a></li>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240010600" target="_blank" rel="noreferrer noopener">[Star Force 5] Leafre - Sky Nest II</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140003" target="_blank" rel="noreferrer noopener">Blood Harp</a></li>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240020200" target="_blank" rel="noreferrer noopener">[Star Force 15] Leafre - The Area of Black Kentaurus</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140104" target="_blank" rel="noreferrer noopener">Black Kentaurus</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level110(){
  return(
    <div>
      <ArticleHeaderTwo id="110">Level 110</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <strong>[Lv. 115] </strong> <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"> <strong><span style={{color: '#ff9900'}}>[Boss]</span> Easy Magnus</strong></a>: Completing the <img src="/images/map-icons/heliseum.png" alt="MapIcon Helisium"/> Helisium storyline unlocks access to a Magnus. The boss is accessible from the Boss Contents UI or within Heliseum at <a href="https://maplestorywiki.net/w/Tyrant%27s_Castle_3rd_Floor_Hallway" target="_blank" rel="noreferrer noopener">Tyrant's Castle</a>
          <ul>
            <li><strong>Easy Mode and Above Rewards:</strong> <img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Belt" target="_blank" rel="noreferrer noopener">[Superior Belt]</a>, <img src="/images/equipment/elite-heliseum-cape.png"/> <a href="https://maplestorywiki.net/w/Elite_Heliseum_Warrior_Cape" target="_blank" rel="noreferrer noopener">[Superior Cape]</a>, <img src="/images/equipment/crystal-ventus-badge.png" alt="Eqp Crystal Ventus Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182087" target="_blank" rel="noreferrer noopener">[Crystal Ventus Badge]</a>, <img src="/images/equipment/royal-black-metal-shoulder.png" alt="Eqp Royal Black Metal Shoulder"/> <a href="https://maplestorywiki.net/w/Royal_Black_Metal_Shoulder" target="_blank" rel="noreferrer noopener">[Royal Black Metal Shoulder]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/shadowdealer-coin.png" alt="Etc Shadowdealer Coin"/> [Shadowdealer Coin], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal] </li>
            <li><img src="/images/equipment/elite-heliseum-belt.png" alt="Eqp Elite Heliseum Belt"/> <a href="https://maplestorywiki.net/w/Category:Superior_Equipment" target="_blank" rel="noreferrer noopener">Superior Gear</a> grant more stats when Starforcing but cost more mesos and have a higher chance to destroy on failure</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <strong>[Lv. 115] <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Boss]</span> Easy Papulatus</a></strong>: Completing a questline in Ludibrium unlocks access to all difficulties but only Easy is available at Lv. 110. The boss is accessible from the Boss Contents UI or within Ludibrium at <a href="https://maplestory.wiki/GMS/210.1.1/map/220080000" target="_blank" rel="noreferrer noopener">Ludibrium Clocktower</a>
          <ul>
            <li><strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li>
            <li>A guide to the pre-quests: <a href="https://www.youtube.com/watch?v=mAq43NaBFmY" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=mAq43NaBFmY</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon Lion King's Castle"/> <strong>[Lv. 115] <a href="https://maplestorywiki.net/w/Category%3ALion_King's_Castle" target="_blank" rel="noreferrer noopener">[Pre-Quest / Theme Dungeon] Lion King's Castle</a></strong>: Storyline can be started from the Lightbulb Quests or by traveling from <a href="https://maplestory.wiki/GMS/210.1.1/map/211040600" target="_blank" rel="noreferrer noopener">El Nath</a>. Completing this Theme Dungeon unlocks the boss <img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener">Von Leon</a> available at Lv. 125
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/heart-of-a-lion.png" alt="Eqp Heart of a Lion"/> [Medal]</li></ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li>
          <img src="/images/map-icons/chryse.png" alt="MapIcon Krease"/> <strong> [Lv. 110] <a href="https://maplestorywiki.net/w/Xerxes_in_Chryse" target="_blank" rel="noreferrer noopener">[Party Quest] Xerxes in Chryse</a></strong>: Requires 1 to 4 party members to enter. There are 4 stages and a boss at the final stage.
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/michaels-glasses.png" alt="Eqp Michael's Glasses"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022245" target="_blank" rel="noreferrer noopener">Michael's New Glasses</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul> 
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Ludibrium"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220020600" target="_blank" rel="noreferrer noopener">Ludibrium - Toy Factory</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230111" target="_blank" rel="noreferrer noopener">Robo</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230112" target="_blank" rel="noreferrer noopener">Master Robo</a></li>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Ludibrium"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220060201" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Unbalanced Time</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/7160000" target="_blank" rel="noreferrer noopener">Dual Ghost Pirate</a></li>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240020200" target="_blank" rel="noreferrer noopener">[Star Force 15] Leafre - The Area of Black Kentaurus</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140104" target="_blank" rel="noreferrer noopener">Black Kentaurus</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level120(){
  return(
    <div>
      <ArticleHeaderTwo id="120">Level 120</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/root-abyss.png" alt="MapIcon Root Abyss"/> <strong>[Lv. 125] <a href="https://maplestorywiki.net/w/Category:Root_Abyss" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Boss]</span> Root Abyss</a></strong>: Accessible from the Dimensional Mirror or Boss Contents UI after completing the storyline from the Lightbulb Quests. Root Abyss is comprised of 4 bosses where Normal mode is unlocked at Lv. 125 and Chaos mode is unlocked at Lv. 180
          <ul> 
            <li><strong>Normal mode and Above Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/> <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/> <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/> <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Root Abyss Hat], <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/yggdrasil-rune.png" alt="Etc Yggdrasil Rune"/> [Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/> <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair]</li>
            <li>Chaos bosses drop <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> fragments that are exchanged for <img src="/images/equipment/eagle-eye-warrior-armor.png" alt="Eqp Eagle Eye Warrior Armor"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Penitent Tears"/> Root Abyss equipment also referred to as CRA (Chaos Root Abyss)</li>
            <li>A guide to the Root Abyss pre-quests: <a href="https://www.youtube.com/watch?v=ctKe_wr4uLs" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=ctKe_wr4uLs</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/blockbuster.png" alt="MapIcon BlockBuster"/> <strong>[Lv. 120] <a href="https://maplestorywiki.net/w/Epic/Black_Heaven" target="_blank" rel="noreferrer noopener">[Blockbuster] Black Heaven</a></strong>: A storyline with multiple Acts
          <ul>
            <li>Black Heaven is not required to unlock access to the boss Lotus or weekly quests</li>
            <li>Can be started from the Lightbulb Quest "[Black Heaven] For Maple World" and accessible from the Dimensional Mirror by clicking on <img alt="MapIcon Ereve" src="/images/map-icons/ereve.png"/> Ereve Conference Pavillion</li>
            <li>Completing each Act rewards <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> [Honor EXP]</li>
            <li><strong>Act 2 Rewards:</strong> <img src="/images/equipment/ace-of-the-alliance.png" alt="Eqp Ace of the Alliance"/> [Medal], <img src="/images/items/hanging-with-neinheart-chair.png" alt="Setup Hanging with Neinheart Chair"/> [Chair]</li>
            <li><strong>Act 4 Rewards:</strong> <img src="/images/equipment/android-helmet.png" alt="Eqp Android Helmet"/> [Hat]</li>
            <li><strong>Act 6 Rewards:</strong> <img src="/images/equipment/maple-world-savior.png" alt="Eqp Maple World Savior"/> [Medal], <img src="/images/items/orchids-support-mount.png" alt="Skill Orchid's Support Mount"/> <img src="/images/items/athena-pierces-support-mount.png" alt="Skill Athena Pierce's Support Mount"/> [Choice of 1 mount (lasts 30 days)]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> <strong> [Lv. 120] <a href="https://maplestorywiki.net/w/Mori_Ranmaru" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Boss]</span> Normal Mori Ranmaru</a></strong>: Accessible from Boss Contents UI or travelling to <a href="https://maplestory.wiki/GMS/210.1.1/map/211041700" target="_blank" rel="noreferrer noopener">Dead Mines in El Nath</a> after completing a short dialogue Lightbulb Quest
          <ul>
            <li>Hard mode is unlocked at Lv. 190+</li>
            <li><strong>Normal Mode and Above Rewards</strong>: <img src="/images/equipment/eclectic-fennel.png" alt="Eqp Eclectic Fennel"/> [Lv. 120 Gear], <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 120 Rebirth Flame]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[(Heroic World Only) Eternal Rebirth Flame]</a></li>
            <li><strong>Hard Mode Only Rewards</strong>: <img src="/images/equipment/amaterasus-helm.png" alt="Eqp Amaterasu's Helm"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noreferrer noopener">[Japanese Armor]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._120" target="_blank" rel="noreferrer noopener">[Lv. 130 Rebirth Flame]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <strong>[Lv. 120] <a href="https://maplestorywiki.net/w/Hilla/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Boss]</span> Normal Hilla</a></strong>: Accessible through the Boss Contents UI, there are no pre-quests
          <ul>
            <li>Hard mode is unlocked at Lv. 170+</li>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/stone-of-eternal-life.png" alt="Eqp Stone of Eternal Life"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162009" target="_blank" rel="noreferrer noopener">[Stone of Eternal Life]</a>, <img src="/images/equipment/blue-dragon-helmet.png" alt="Eqp Blue Dragon Helmet"/> [Lv. 110 Gear], <img src="/images/equipment/necromancer-warrior-hat.png" alt="Eqp Necromancer Warrior Hat"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Necromancer_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 120 Necromancer Gear]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Rebirth Flame], <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> <a href="https://maplestorywiki.net/w/(Pet_Box)_Blackheart" target="_blank" rel="noreferrer noopener">[Pet Box]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/hard-cube.png" alt="Use Hard Cube"/> [Hard Cube], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/von-leon.png" alt="MapIcon VanLeon"/> <strong>[Lv. 125] <a href="https://maplestorywiki.net/w/Von_Leon/Monster" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Boss]</span> Von Leon</a></strong>: Accessible through the Boss Contents UI after completing the <img src="/images/map-icons/lion-kings-castle.png" alt="MapIcon Lion King's Castle"/> Lion King's Castle Theme Dungeon. Von Leon can also be found at <a href="https://maplestorywiki.net/w/Fourth_Tower" target="_blank" rel="noreferrer noopener">Lion King's Castle</a> by talking to Luden
          <ul>
            <li><strong>Easy/Normal Mode and Above Rewards:</strong> <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> [Von Leon Gear Currency], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li>
            <li><strong>Hard Mode and Above Rewards:</strong> <img src="/images/equipment/royal-von-leon-suit.png"/><img src="/images/equipment/royal-von-leon-energy-chain.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a>, <img src="/images/equipment/ifias-earrings.png"/><img src="/images/equipment/ifias-ring.png"/><img src="/images/equipment/ifias-necklace.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Ifia%27s_Treasure_Set" target="_blank" rel="noreferrer noopener">[Ifia Accessories]</a>, <img src="/images/items/lion-ice-sculpture.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Lion Ice Sculpture]</a></li>
            <li>The <img src="/images/items/royal-lion-king-medal.png" alt="Etc Royal Lion King Medal"/> medals are used to exchange for <img src="/images/equipment/marx-von-leon-sabre.png" alt="Eqp Marx Von Leon Sabre"/> <img src="/images/equipment/marx-von-leon-helmet.png" alt="Eqp Marx Von Leon Helmet"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Lv. 130 Von Leon Gear]</a> from <a href="https://maplestorywiki.net/w/Murt" target="_blank" rel="noreferrer noopener">Murt</a></li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Korean Folk Town"/> <strong>[Lv. 125] <a href="https://maplestorywiki.net/w/Category:Korean_Folk_Town" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Korean Folk Town</a></strong>: Can be started by accepting the Lightbulb Quest or by traveling from <a href="https://maplestorywiki.net/w/Helios_Tower_(100th_Floor)" target="_blank" rel="noreferrer noopener">Ludibrium</a> or <a href="https://maplestorywiki.net/w/The_Sharp_Unknown" target="_blank" rel="noreferrer noopener">Aqua Road</a>
          <ul><li><strong>Rewards:</strong> <img src="/images/equipment/like-clouds-and-winds.png" alt="Eqp Like Clouds and Winds"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/ghost-park.png" alt="MapIcon GhostPark"/> <strong>[Lv. 125] </strong> <a href="https://maplestorywiki.net/w/Ghost_Park" target="_blank" rel="noreferrer noopener"><strong>Ghost Park</strong></a>: Accessible from the Dimensional Mirror. The objective is to survive while defeating monsters
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/master-exorcist.png" alt="Setup Master Exorcist"/>[Title], <img src="/images/items/master-exorcist-chair.png" alt="Setup Master Exorcist Chair"/>[Chair], <img src="/images/items/master-exorcist-emblem.png" alt="Setup Master Exorcist Emblem"/><img src="/images/items/veteran-exorcist-emblem.png" alt="Setup Veteran Exorcist Emblem"/><img src="/images/items/junior-exorcist-emblem.png" alt="Setup Junior Exorcist Emblem"/>[Character Effects]</li></ul>
        </li>
        <li><img src="/images/map-icons/fantasy-theme-world.png" alt="MapIcon FantasticPark"/> <strong>[Lv. 120] </strong> <a href="https://maplestorywiki.net/w/Category:Fantasy_Theme_World" target="_blank" rel="noreferrer noopener"><strong>[Theme Dungeon] Fantasy Theme World</strong></a>: Accessible from <a href="https://maplestory.wiki/GMS/210.1.1/map/220000000" target="_blank" rel="noreferrer noopener">Ludibrium</a>
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/heart-bracelet.png" alt="Heart Bracelet"/> <a href="https://maplestory.wiki/GMS/205/item/1082719" target="_blank" rel="noreferrer noopener">[Heart Bracelet]</a>, <img src="/images/equipment/101st-times-the-charm.png" alt="101st Time's the Charm"/> [Medal], <img src="/images/equipment/ludi-targa-hat.png" alt="Ludi Targa Hat"/> <img src="/images/equipment/ludi-scarlion-hat.png" alt="Ludi Scarlion Hat"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003534">[Ludi Targa Hat]</a> &amp;  <a href="https://maplestory.wiki/GMS/210.1.1/item/1003535">[Ludi Scarlion Hat]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/abandoned-tower.png" alt="MapIcon Abandoned Tower"/> <strong>[Lv. 120] <a href="https://maplestorywiki.net/w/Category%3ADimensional_Crack" target="_blank" rel="noreferrer noopener">[Party Quest] Dimensional Crack</a></strong>: Requires 3 to 6 party members to enter. There are 6 stages and a boss at the final stage
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Reward:</strong> <img src="/images/equipment/broken-glasses.png" alt="Eqp Broken Glasses"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022073" target="_blank" rel="noreferrer noopener">[Broken Glasses]</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Korean Folk Town"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/224000100" target="_blank" rel="noreferrer noopener">Korean Folk Town - Black Mountain Entrance</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5100100" target="_blank" rel="noreferrer noopener">Moon Bunny</a></li>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Ludibrium"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220060201" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Unbalanced Time</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/7160000" target="_blank" rel="noreferrer noopener">Dual Ghost Pirate</a></li>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Ludibrium"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/220060400" target="_blank" rel="noreferrer noopener">[Star Force 26] Ludibrium - Warped Passage</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8160000" target="_blank" rel="noreferrer noopener">Gatekeeper</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level130(){
  return(
    <div>
      <ArticleHeaderTwo id="130">Level 130</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/horntail.png" alt="MapIcon Horntail"/> <strong>[Lv. 135+] </strong> <a href="https://maplestorywiki.net/w/Horntail" target="_blank" rel="noreferrer noopener"> <strong><span style={{color: '#ff9900'}}>[Boss]</span> Horntail</strong></a>: Accessible through the Boss Contents UI or by travelling to <a href="https://maplestorywiki.net/w/Cave_of_Life_-_Entrance">Leafre, Cave of Life - Entrance</a>. Easy and Normal mode is unlocked once you reach Lv. 130+ and Chaos mode is unlocked at Lv. 135+
          <ul>
            <li><strong>Easy Mode and Above Rewards</strong>: <img src="/images/equipment/silver-blossom-ring.png"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1113149" target="_blank" rel="noreferrer noopener">[Silver Blossom Ring]</a>, <img src="/images/equipment/dea-sidus-earrings.png" alt="Eqp Dea Sidus Earring"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032241" target="_blank" rel="noreferrer noopener">[Dea Sidus Earrings]</a>, <img src="/images/equipment/horntail-necklace.png" alt="Eqp Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122000" target="_blank" rel="noreferrer noopener">[Horntail Necklace]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/potion-recipe.png"/> <a href="https://maplestorywiki.net/w/Wealth_Acquisition_Potion#Recipe" target="_blank" rel="noreferrer noopener">[Wealth Aquisition Potion Recipe]</a></li>
            <li><strong>Chaos Mode Only Rewards</strong>: <img src="/images/equipment/chaos-horntail-necklace.png" alt="Eqp Chaos Horntail Necklace"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122076" target="_blank" rel="noreferrer noopener">[Chaos Horntail Necklace]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/horntail-fountain.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Horntail Fountain]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/blockbuster.png" alt="MapIcon BlockBuster"/> <strong>[Lv. 135] <a href="https://maplestorywiki.net/w/Epic/Heroes_of_Maple" target="_blank" rel="noreferrer noopener">[Blockbuster] Heroes of Maple</a></strong>: A storyline with multiple acts where you play as the five Heroes of Maple (Mercedes, Phantom, etc.)
          <ul>
            <li>Heroes of Maple is not required to unlock acccess to the boss Damien or weekly quests</li>
            <li>Accessible by accepting the quest in the Lightbulb icon called "[Heroes] Feelings of Misfortune"
              <ul>
                <li>Can also be accessed from Dimensional Mirror by clicking on <img alt="MapIcon Ereve" src="/images/map-icons/ereve.png"/> Ereve Conference Pavillion after accepting quest</li>
              </ul>
            </li>
            <li>Completing an Act rewards <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> [Honor EXP] and <img src="/images/items/heroes-cube-chair-aran.png" alt="Setup Heroes Cube Chair - Aran"/><img src="/images/items/heroes-cube-chair-shade.png" alt="Setup Heroes Cube Chair - Shade"/><img src="/images/items/heroes-cube-chair-phantom.png" alt="Setup Heroes Cube Chair - Phantom"/><img src="/images/items/heroes-cube-chair-mercedes.png" alt="Setup Heroes Cube Chair - Mercedes"/><img src="/images/items/heroes-cube-chair-luminous.png" alt="Setup Heroes Cube Chair - Luminous"/> [Chair] and completing all Acts twice rewards <img src="/images/items/heroes-cube-chair-evan.png" alt="Setup Heroes Cube Chair - Evan"/> [Chair]</li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/golden-temple.png" alt="MapIcon Golden Temple"/> <strong>[Lv. 130] <a href="https://maplestorywiki.net/w/Category:Golden_Temple" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Golden Temple</a></strong>: Accessible from the Dimensional Mirror and can be started from the Lightbulb Quest
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/ravanas-golden-crown.png" alt="Eqp Ravana's Golden Crown"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1003455" target="_blank" rel="noreferrer noopener">[Ravana's Golden Crown]</a>, <img src="/images/equipment/seeker-of-gilded-truth.png" alt="Eqp Seeker of Gilded Truth"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonheart Castle"/> <strong> [Lv. 130] <a href="https://maplestorywiki.net/w/Category:Tynerum" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Crimsonheart Castle</a></strong>: Accessible from the Dimensional Mirror and can be started from the Lightbulb Quest
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/crimsonheart-savior.png" alt="Eqp Crimsonheart Savior"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/partem-ruins.png" alt="MapIcon Partem"/> <strong>[Lv. 135] [Theme Dungeon] Partem Ruins</strong>: Can be started through the Lightbulb Quest and accessible from Partem in <a href="https://maplestorywiki.net/w/Spore_Hill" target="_blank" rel="noreferrer noopener">Henesys</a>
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/blazing-hot.png" alt="Eqp Blazing Hot Medal"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/lord-pirate.png" alt="MapIcon Lord Pirate"/> <strong>[Lv. 130] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Lord_Pirate_(Party_Quest)" target="_blank">[Party Quest] Lord Pirate</a></strong>: Requires parties of 3 to 6 to enter. There are 4 stages and a boss at the final stage
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Possible Rewards</strong>: <img src="/images/equipment/lord-pirate-hat.png" alt="Eqp Lord Pirate Hat"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1002571" target="_blank" rel="noreferrer noopener">[Lord Pirate Hat]</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Korean Folk Town"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/224000142" target="_blank" rel="noreferrer noopener">Korean Folk Town - Goblin House</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5100108" target="_blank" rel="noreferrer noopener">Yellow King Goblin</a></li>
        <li><img src="/images/map-icons/dead-mine.png" alt="MapIcon ElNathDungeon"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/211042200" target="_blank" rel="noreferrer noopener">[Star Force 55] El Nath - The Cave of Trial</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230108" target="_blank" rel="noreferrer noopener">Jr. Cerebes</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8140500" target="_blank" rel="noreferrer noopener">Bain</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level140(){
  return(
    <div>
      <ArticleHeaderTwo id="140">Level 140</ArticleHeaderTwo>
      <img className="repository-image" src="/images/info/hyper-skill-active-ui.png" alt="Hyper Actives UI"/><img className="repository-image" src="/images/info/hyper-skill-passive-ui.png" alt="Hyper Passives UI"/>
      <p>Hyper Skills and Hyper Stats are unlocked at Level 140. Hyper Skills have a passive and active category. Active Skills are unlocked at Lv. 140, 160, and 190. Passive Hyper Skills provide enhancements to 1st - 4th Job skills. Passive Hyper Skills SP are gained at Lv. 140, 150, 165, 180 and 190 (total of 5 SP)</p>
      <img className="repository-image" src="/images/info/hyper-stat-ui.png" alt="Hyper Stats UI"/>
      <p>Hyper Stats is a system where Points earned each level can be allocated to gain stats like %Crit Rate, %Crit Damage, %Ignore DEF, or %Boss Damage. As you level up a Hyper Stat, it will cost more Points to upgrade. The amount of Points gained every level increase every 10 levels</p>
      <p>For more info on Hyper Stats, check out: <a rel="noreferrer noopener" href="https://strategywiki.org/wiki/MapleStory/Hyper_Stats" target="_blank">https://strategywiki.org/wiki/MapleStory/Hyper_Stats</a></p>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/commerci.png" alt="MapIcon Commerci"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Category:Commerci_Republic" target="_blank" rel="noreferrer noopener"> [Theme Dungeon] Commerci</a></strong>: Accessible from the Dimensional Mirror and the storyline can be started from the Lightbulb
          <ul>
            <li>Upon reaching the town of San Commerci, Trade Voyages is unlocked with rewards such as <img src="/images/equipment/sweetwater-sword.png" alt="Eqp Sweetwater Axe"/> <img src="/images/equipment/sweetwater-hat.png" alt="Eqp Sweetwater Hat"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Sweetwater_Set" target="_blank" rel="noreferrer noopener">[Sweetwater Gear]</a> and <img src="/images/equipment/sweetwater-tattoo.png" alt="Eqp Sweetwater Tattoo"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012438" target="_blank" rel="noreferrer noopener">[Sweetwater Tattoo]</a>, <img src="/images/equipment/sweetwater-monocle.png" alt="Eqp Sweetwater Monocle"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022211" target="_blank" rel="noreferrer noopener">[Sweetwater Monocle]</a></li>
            <li>Additionally, in San Commerci, Transposing is unlocked
              <ul><li>For more info on Transposing, check out <a href="https://www.youtube.com/watch?v=oDXiz0x0hV0" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=oDXiz0x0hV0</a></li></ul>
            </li>
            <li><strong>Main Rewards</strong>: <img src="/images/equipment/commercis-forever-friend.png" alt="Eqp Commerci's Forever-Friend"/> [Medal], <img src="/images/equipment/commerci-hat.png" alt="Eqp Commerci Hat"/> <img src="/images/equipment/commerci-suit.png" alt="Eqp Commerci Suit"/> <img src="/images/equipment/commerci-boots.png" alt="Eqp Commerci Boots"/> <img src="/images/equipment/commerci-gloves.png" alt="Eqp Commerci Gloves"/> <img src="/images/equipment/commerci-cape.png" alt="Eqp Commerci Cape"/> <img src="/images/equipment/commerci-belt.png" alt="Eqp Commerci Belt"/> <img src="/images/equipment/commerci-shoulder.png" alt="Eqp Commerci Shoulder"/> <img src="/images/equipment/devils-sunrise.png" alt="Eqp Devil's Sunrise"/>[Commerci Equipment]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/arkarium.png" alt="MapIcon Akairum"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Arkarium/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Arkarium</a></strong>: Accessible through the Boss Contents UI or by travelling to <a href="https://maplestory.wiki/GMS/210.1.1/map/270000000" target="_blank" rel="noreferrer noopener">Temple of Time</a> after completing the questline from the Lightbulb Quest called “<a href="https://maplestorywiki.net/w/Quests/1/(Silent_Crusade)_A_Cry_for_Help">[Silent Crusade] A Cry for Help</a>”
          <ul>
            <li><strong>Easy Mode and Above Rewards:</strong> <img src=" /images/equipment/mechanator-pendant.png" alt="Eqp Mechanator Pendant"/> <a href="https://maplestorywiki.net/w/Mechanator_Pendant" target="_blank" rel="noreferrer noopener">[Mechanator Pendant]</a>, <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-130.png" alt="Use Rebirth Flame Lv. 130"/> [Lv. 130 Rebirth Flame], <img src=" /images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noreferrer noopener">[Primal Essence]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube],<img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]</li><li><strong>Normal mode Only Rewards:</strong> <img src=" /images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a href="https://maplestorywiki.net/w/Dominator_Pendant" target="_blank" rel="noreferrer noopener">[Dominator Pendant]</a>, <img src="/images/items/arkarium-statue.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Arkarium Statue]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Princess_No">[Pre-Quest / Storyline] Hieizan Temple</a></strong>: Completing this storyline will unlock access to the boss <img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> Princess No
          <ul><li>A guide to the Pre-Quest: <a href="https://www.youtube.com/watch?v=5AuXfVfkMgU">https://www.youtube.com/watch?v=5AuXfVfkMgU</a></li></ul>
        </li>
        <li><img src="/images/map-icons/princess-no-boss.png" alt="MapIcon Princess No"/> <strong> [Lv. 140+] <a href="https://maplestorywiki.net/w/Princess_No/Monster" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Princess No</a></strong>: Accessible from the Boss Contents UI or by travelling to <a href="https://maplestory.wiki/GMS/210.1.1/map/807000000" target="_blank" rel="noreferrer noopener">Momijigaoka</a> after completing the Hieizan Temple storyline
          <ul>
            <li><strong>Main Rewards</strong>: <img src="/images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noopener noreferrer">[Secondary Weapon Fragment]</a>, <img src="/images/equipment/hayatos-treasure.png" alt="Eqp Hayato's Treasure"/><img src="/images/equipment/kannas-treasure.png" alt="Eqp Kanna's Treasure"/><img src="/images/equipment/ayames-treasure.png" alt="Eqp Ayame's Treasure"/> [ <a href="https://maplestory.wiki/GMS/210.1.1/item/1152171" target="_blank" rel="noopener noreferrer">Shoulder</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1113155" target="_blank" rel="noopener noreferrer">Ring</a> / <a href="https://maplestory.wiki/GMS/210.1.1/item/1132275" target="_blank" rel="noopener noreferrer">Belt</a> ], <img src="/images/items/princess-no-chair.png" alt="Setup Princess No Chair"/> <a href="https://maplestorywiki.net/w/Princess_No_Chair" target="_blank" rel="noopener noreferrer">[Princess No Chair]</a>, <img src="/images/items/princess-no-effect-coupon.png" alt="Use Princess No Effect Coupon"/> <a href="https://maplestorywiki.net/w/Princess_No_Effect_Coupon" target="_blank" rel="noopener noreferrer">[Princess No Effect Coupon]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li>
            <li>These fragments <img src=" /images/items/captivating-fragment.png" alt="Use Captivating Fragment"/> can be used to exchange for <img src=" /images/equipment/princess-nos-accursed-shield.png" alt="Eqp Princess No's Accursed Shield"/> <img src="/images/equipment/princess-nos-fox-marble.png" alt="Eqp Princess No's Fox Marble"/> <a href="https://maplestorywiki.net/w/Captivating_Fragment" target="_blank" rel="noreferrer noopener">[Secondary Weapons]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/temple-of-time.png" alt="MapIcon Temple of Time"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Category:Temple_of_Time" target="_blank" rel="noreferrer noopener">[Pre-Quest / Storyline] Temple of Time</a></strong>: Completing this storyline unlocks access to the boss <img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> Pink Bean</li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong>[Lv. 145] <a href="https://maplestorywiki.net/w/Category:Kerning_Tower" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Kerning Tower</a></strong>: Accessible by accepting the Lightbulb Quest or by travelling from <a href="https://maplestory.wiki/GMS/210.1.1/map/103000000" target="_blank" rel="noreferrer noopener">Kerning City</a>
          <ul><li><strong>Main Reward:</strong> <img src="/images/equipment/jackpot-entertainment-co-ceo.png" alt="Eqp Jackpot Entertainment Co-CEO"/> [Medal]</li></ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/yu-garden.png" alt="MapIcon Yu Garden"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Category:The_Far_East" target="_blank" rel="noreferrer noopener">[Theme Dungeon] The Far East (Yu Garden)</a></strong>: Accessible from <a href="https://maplestory.wiki/GMS/210.1.1/map/104020000" target="_blank" rel="noreferrer noopener">Six Path Crossway</a>
          <ul>
            <li>Completing the questline unlocks daily quests that reward <img src="/images/items/yu-garden-coin.png" alt="Etc Yu Garden Coin"/> [Yu Garden Coins] used to exchange items</li>
            <li><strong>Main Rewards</strong>: <img src="/images/items/epic-potential-scroll.png" alt="Use Epic Potential Scroll"/> [<em>(Heroic World Only)</em> Epic Potential Scroll], <img src="/images/equipment/horseback-riding-doll-totem.png" alt="Eqp Horseback Riding Doll Totem"/> <img src="/images/equipment/jade-kettle-totem.png" alt="Eqp Jade Kettle Totem"/> <img src="/images/equipment/bronze-incense-burner-totem.png" alt="Eqp Bronze Incense Burner Totem"/> [Totems]</li>
            <li>An in-depth guide to the Yu Garden dailies: <a href="https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/" target="_blank" rel="noreferrer noopener">  https://www.reddit.com/r/Maplestory/comments/62tld2/guide_for_yu_garden_dailies_reboot_daily_epic_pot/ </a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/beasts-of-fury.png" alt="MapIcon Beasts of Fury"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Quests/117" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Beasts of Fury</a></strong>
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/gold-dragon-student.png" alt="Eqp Gold Dragon Student"/><img src="/images/equipment/red-tiger-student.png" alt="Eqp Red Tiger Student"/>[Medal], <img src="/images/items/among-gold-dragons.png" alt="Setup Among Gold Dragons"/><img src="/images/items/among-red-tigers.png" alt="Setup Among Red Tigers"/> [Chair], <img src="/images/items/special-potential-scroll.png" alt="Use Special Potential Scroll"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2049402" target="_blank" rel="noreferrer noopener">[Special Potential Scroll]</a>, <img src="/images/items/bonus-potential-scroll.png" alt="Use Bonus Potential Scroll"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2048309" target="_blank" rel="noreferrer noopener">[Bonus Potential Scroll]</a>, <img src="/images/items/prototype-soul-enchanter.png" alt="Use Prototype Soul Enchanter"/> <a href="https://maplestorywiki.net/w/Soul_Weapon" target="_blank" rel="noreferrer noopener">[Prototype Soul Enchanter]</a>, <img src="/images/equipment/the-enlightened-one-dragon.png" alt="Setup The Enlightened One Dragon"/> <img src="/images/equipment/the-enlightened-one-tiger.png" alt="Setup The Enlightened One Tiger"/> [Title]</li></ul>
        </li>
        <li><img src="/images/map-icons/escape.png" alt="MapIcon prisonBreak"/> <strong>[Lv. 140] <a href="https://maplestorywiki.net/w/Escape" target="_blank" rel="noreferrer noopener">[Party Quest] Escape</a></strong>: Requires 3-6 party members to enter. There are 7 stages and a boss at the final stage
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Rewards</strong>: <img src="/images/equipment/marx-von-leon-war-belt.png" alt="Eqp Marx Von Leon War Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Royal_Von_Leon_Warrior_Set" target="_blank" rel="noreferrer noopener">[Von Leon Belt]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/shaolin-temple.png" alt="MapIcon Shaolin Temple"/> <strong>(Lv. 145) [Theme Dungeon] Shaolin Temple</strong>: Storyline can be started from the Lightbulb Quest or by navigating from the Maple Guide or the <a href="https://maplestorywiki.net/w/Shanghai_Interdimensional_Portal" target="_blank" rel="noreferrer noopener">Shanghai Dimensional Portal</a> from <a href="https://maplestorywiki.net/w/Six_Path_Crossway" target="_blank" rel="noreferrer noopener">Six Path Crossway</a>
          <ul><li><strong>Main Rewards</strong>: <img src="/images/items/demon-mask-mount.png" alt="Use Demon Mask Mount"/> <a href="https://maplestory.wiki/GMS/215/item/2434618" target="_blank" rel="noreferrer noopener">[Mount]</a>, <img src="/images/items/nine-tailed-fox-damage-skin.png" alt="Use Nine Tailed Fox Damage Skin"/> <a href="https://maplestory.wiki/GMS/215/item/2434619" target="_blank" rel="noreferrer noopener">[Damage Skin]</a>, <img src="/images/items/demon-jar-chair.png" alt="Setup Demon Jar Chair"/> <a href="https://maplestory.wiki/GMS/215/item/1182286" target="_blank" rel="noreferrer noopener">[Chair]</a>, <img src="/images/equipment/nine-tailed-fox-totem.png" alt="Eqp Nine Tailed Fox Totem"/> <a href="https://maplestory.wiki/GMS/215/item/1202200" target="_blank" rel="noreferrer noopener">[Totem]</a></li></ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/korean-folk-town.png" alt="MapIcon Korean Folk Town"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/224000142" target="_blank" rel="noreferrer noopener">Korean Folk Town - Goblin House</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/5100108" target="_blank" rel="noreferrer noopener">Yellow King Goblin</a></li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/103041140" target="_blank" rel="noreferrer noopener">Kerning Tower - 5F Cosmetics Store 1</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310011" target="_blank" rel="noreferrer noopener">Killer Cosmetics</a></li>
        <li><img src="/images/map-icons/leafre.png" alt="MapIcon Leafre"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240040320" target="_blank" rel="noreferrer noopener">[Star Force 65] Leafre - Black Wyvern's Nest</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8150303" target="_blank" rel="noreferrer noopener">Dark Wyvern</a></li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/103041119" target="_blank" rel="noreferrer noopener">[Star Force 80] Kerning Tower - 2F Cafe 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310017" target="_blank" rel="noreferrer noopener">Enraged Espresso Machine</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level150(){
  return(
    <div>
      <ArticleHeaderTwo id="150">Level 150</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <strong>[Lv. 155] <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Normal Papulatus</a></strong>: Completing a questline in Ludibrium unlock access to Papulatus. The boss is accessible from the Boss Contents UI or within Ludibrium at <a href="https://maplestory.wiki/GMS/210.1.1/map/220080000" target="_blank" rel="noreferrer noopener">Ludibrium Clocktower</a>
          <ul>
            <li>A guide to the pre-quests: <a href="https://www.youtube.com/watch?v=mAq43NaBFmY">https://www.youtube.com/watch?v=mAq43NaBFmY</a></li>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/papulatus-clock-chair.png"/> <a href="https://maplestorywiki.net/w/Papulatus_Clock_Chair" target="_blank" rel="noreferrer noopener">[Papulatus Clock Chair]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <strong>[Lv. 155] <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Normal Magnus</a></strong>: Completing the <img src="/images/map-icons/heliseum.png" alt="MapIcon Helisium"/> Helisium storyline unlocks access to a Magnus. The boss is accessible from the Boss Contents UI or within Heliseum at <a href="https://maplestorywiki.net/w/Tyrant%27s_Castle_3rd_Floor_Hallway" target="_blank" rel="noreferrer noopener">Tyrant's Castle</a>
          <ul><li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/nova-hyades-cloak.png" alt="Eqp Nova Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Nova_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Nova Cape]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir]</li></ul> 
        </li> 
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
          <li><img src="/images/map-icons/dragon-rider.png" alt="MapIcon Dragon Rider"/> <strong>[Lv. 150]</strong> <a href="https://maplestorywiki.net/w/Dragon_Rider_(Party_Quest)" target="_blank" rel="noreferrer noopener"><strong>[Party Quest] Dragon Rider</strong></a>: Requires 3-6 party members to enter. There are 5 stages and a boss on the final stage
            <ul>
              <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
              <li><strong>Main Rewards:</strong> <img src="/images/items/dragon-riders-warrior-box.png" alt="Use Dragon Rider's Warrior Box"/> <img src="/images/items/dragon-riders-magician-box.png" alt="Use Dragon Rider's Magician Box"/> <img src="/images/items/dragon-riders-bowman-box.png" alt="Use Dragon Rider's Bowman Box"/> <img src="/images/items/dragon-riders-thief-box.png" alt="Use Dragon Rider's Thief Box"/> <img src="/images/items/dragon-riders-pirate-box.png" alt="Use Dragon Rider's Pirate Box"/> [Lv. 100 - 110 Gear]</li>
            </ul>
          </li>
          <li><img src="/images/map-icons/stone-colossus.png" alt="MapIcon Stone Colossus"/> <strong>[Lv. 150]</strong> <a href="https://maplestorywiki.net/w/Category:Stone_Colossus" target="_blank" rel="noreferrer noopener"><strong>[Theme Dungeon] Stone Colossus</strong></a>: Accessible from <a href="https://maplestorywiki.net/w/Forest_:_Crossroad" target="_blank" rel="noreferrer noopener">Leafre</a>
            <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/colossal.png" alt="Eqp Colossal"/> [Medal], <img src="/images/items/kupos-ride-coupon.png" alt="Use Kupo's Ride Coupon"/> [Mount], <img src="/images/equipment/halflinger-expedition-badge.png" alt="Eqp Halflinger Expedition Badge"/> [Badge]</li></ul>
          </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/stone-colossus.png" alt="MapIcon Stone Colossus"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/240090200" target="_blank" rel="noreferrer noopener">Stone Colossus - Colossus West Road 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8147000" target="_blank" rel="noreferrer noopener">Mantis</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8147001" target="_blank" rel="noreferrer noopener">Blood Mantis</a></li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/103041140" target="_blank" rel="noreferrer noopener">Kerning Tower - 5F Cosmetics Store 1</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310011" target="_blank" rel="noreferrer noopener">Killer Cosmetics</a></li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/103041119" target="_blank" rel="noreferrer noopener">[Star Force 80] Kerning Tower - 2F Cafe 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310017" target="_blank" rel="noreferrer noopener">Enraged Espresso Machine</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level160(){
  return(
    <div>
      <ArticleHeaderTwo id="160">Level 160</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <ul>
        <li><img src="/images/map-icons/henesys-ruins.png" alt="MapIcon Henesys Ruins"/> <img src="/images/map-icons/stronghold.png" alt="MapIcon Stronghold"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener">[Pre-Quest / Storyline] Gate to the Future</a></strong>: A questline required to unlock access to the boss <img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> Cygnus
          <ul><li>A guide to completing the Pre-Quest: <a href="https://www.youtube.com/watch?v=eeu0SzmLFQE" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=eeu0SzmLFQE</a></li></ul>
        </li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong> [Lv. 165] <a href="https://maplestorywiki.net/w/Category:Omega_Sector" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Omega Sector</a></strong>: Accessible by starting Lightbulb Quest or by navigating to <a href="https://maplestory.wiki/GMS/210.1.1/map/220000400" target="_blank" rel="noreferrer noopener">Ludibrium Eos Tower</a>
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/white-m-forcer.png" alt="Eqp White M-Forcer"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/masteria-through-time.png" alt="MapIcons Masteria Through Time"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Epic/Masteria_Through_Time" target="_blank" rel="noreferrer noopener">[Recommended Blockbuster] Masteria Through Time</a></strong>: A storyline with multiple Acts
          <ul>
            <li>Completing each Act rewards <img src="/images/items/special-medal-of-honor.png" alt="Use Boss Medal of Honor"/> [Honor EXP]</li>
            <li><strong>Act 4 Rewards</strong>: <img src="/images/equipment/antellion-guardian.png" alt="Eqp Antellion Guardian"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1142962" target="_blank" rel="noreferrer noopener">[Best-in-slot Medal]</a>, <img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122352" target="_blank" rel="noreferrer noopener">[Subani's Pendant]</a></li>
            <li><strong>Depending on choice rewards</strong>: <img src="/images/items/crimsonwood-warrior.png" alt="Setup Crimsonwood Warrior"/> [Chair], <img src="/images/equipment/subani-roid.png" alt="Eqp Subani-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662090" target="_blank" rel="noreferrer noopener">[Subani-Roid]</a> OR <img src="/images/items/dark-follower.png" alt="Setup Dark Follower"/> [Chair], <img src="/images/equipment/jang-roid.png" alt="Eqp Dr.Jang-Roid"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1662091" target="_blank" rel="noreferrer noopener">[Dr. Jang-Roid]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> <strong>[Lv. 160] </strong> <a href="https://maplestorywiki.net/w/Pink_Bean" target="_blank" rel="noreferrer noopener"> <strong><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Normal Pink Bean</strong> </a>: Accessible from the Boss Contents UI or by navigating to <a href="https://maplestory.wiki/GMS/210.1.1/map/270030500" target="_blank" rel="noreferrer noopener">Temple of Time</a> after completing the storyline in Temple of Time
          <ul><li><strong>Normal Mode and Above Rewards</strong>: <img src="/images/equipment/black-bean-mark.png" alt="Eqp Black Bean Mark"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022232" target="_blank" rel="noreferrer noopener">[Black Bean Mark]</a>, <img src=" /images/equipment/golden-clover-belt.png" alt="Eqp Golden Clover Belt"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132272" target="_blank" rel="noreferrer noopener">[Golden Clover Belt]</a>, <img src=" /images/equipment/pink-holy-cup.png" alt="Eqp Pink Holy Cup"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1162025" target="_blank" rel="noreferrer noopener">[Pink Holy Cup]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-120.png" alt="Use Rebirth Flame Lv. 120"/> [Lv. 120 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li></ul>
        </li>
        <li><img src="/images/map-icons/cygnus-boss.png" alt="MapIcon Cygnus"/> <strong>[Lv. 165] </strong> <a href="https://maplestorywiki.net/w/Cygnus/Monster" target="_blank" rel="noreferrer noopener"> <strong><span style={{color: '#ff9900'}}>[Challenging Boss]</span>Cygnus</strong> </a>: Accessible from the Boss Contents UI after completing the pre-quest in the Gate to the Future
          <ul>
            <li><strong>Easy Mode and Above Rewards</strong>: <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-140.png" alt="Use Rebirth Flame Lv. 140"/> [Lv. 140 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src=" /images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/><img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> [Empress Gear Fragment], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]</li>
            <li><strong>Normal Mode Only Rewards</strong>: <img src="/images/equipment/lionheart-battle-shoulder.png" alt="Eqp Lionheart Battle Shoulder"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Empress Shoulder]</a>, <img src=" /images/equipment/deimos-warrior-shield.png" alt="Eqp Deimos Sage Shield"/><img src=" /images/equipment/deimos-shadow-shield.png" alt="Eqp Deimos Shadow Shield"/><img src=" /images/equipment/deimos-sage-shield.png" alt="Eqp Deimos Warrior Shield"/> [Shield Recipes], <img src="/images/items/plush-cygnus-shelf.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Plush Cygnus Shelf]</a></li>
            <li>These fragments <img src="/images/items/piece-of-ruin.png" alt="Use Piece of Ruin"/> <img src=" /images/items/piece-of-darkness.png" alt="Use Piece of Darkness"/> exchange for <img src="/images/equipment/lionheart-battle-helm.png" alt="Eqp Lionheart Battle Helm"/> <img src="/images/equipment/lionheart-cutlass.png" alt="Eqp Lionheart Cutlass"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Lionheart_Set" target="_blank" rel="noreferrer noopener">[Lv. 140 Empress Gear]</a></li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul> 
        <li><img src="/images/map-icons/showa-town.png" alt="MapIcon Showa Town"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Category:Showa" target="_blank" rel="noopener noreferrer">[Storyline] Showa Town</a></strong>: Accessible accepting the Lightbulb Quest called "[Showa Town] Welcome to Showa Town!" or from Mushroom Shrine via the Dimensional Mirror
            <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/fire-raccoon-finance-auditor.png" alt="Eqp Fire Raccoon Finance Auditor"/> [Medal], <img src="/images/items/antique-tv-chair.png" alt="Setup Antique TV Chair"/><img src="/images/items/missive-chair.png" alt="Setup Missive Chair"/> [Chair], <img src="/images/items/glass-marble.png" alt="Use Glass Marble"/> [Bullet Ammo], <img src="/images/items/pet-equip-scroll-att.png" alt="Use Scroll for Pet Equip. for ATT"/> <img src="/images/items/pet-equip-scroll-matt.png" alt="Use Scroll For Pet Equip. for M. ATT"/> [Pet Equip Scroll], <img src="/images/items/showa-grandma-outfit-coupon.png" alt="Use Showa Grandma Outfit Coupon"/><img src="/images/items/showa-grandpa-outfit-coupon.png" alt="Use Showa Grandpa Outfit Coupon"/> [Cash Outfit]</li></ul>
        </li>
        <li><img src="/images/map-icons/showa-town.png" alt="MapIcon Showa Town"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Yakuza_Boss" target="_blank" rel="noopener noreferrer"><span style={{color: '#ff9900'}}>[Boss]</span> Yakuza Boss</a></strong>: Accessible after completing the storyline in Showa Town up to the quest "Investigating Fire Raccoon Finance"
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/> <img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/items/showa-town-damage-skin.png" alt="Showa Town Damage Skin"/> <img src="/images/items/fire-raccoon-damage-skin.png" alt="Fire Racoon Damage Skin"/> [Damage Skins]</li></ul>
        </li>
        <li>
          <img src="/images/map-icons/kenta.png" alt="MapIcon kentaInDanger"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Kenta_in_Danger" target="_blank" rel="noreferrer noopener">[Party Quest] Kenta in Danger</a></strong>: Requires 2-6 party members to enter. There are 4 stages and boss on the final stage
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Rewards</strong>: <img src="/images/equipment/kentas-new-goggles.png" alt="Eqp Kenta's New Goggles"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022175" target="_blank" rel="noreferrer noopener">[Kenta's New Goggles]</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/showa-town.png" alt="MapIcon Showa Town"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/801040004" target="_blank" rel="noreferrer noopener">Showa Town - Armory</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/9400015" target="_blank" rel="noreferrer noopener">Dusk Viper</a></li>
        <li><img src="/images/map-icons/temple-of-time.png" alt="MapIcon Temple of Time"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/270030300" target="_blank" rel="noreferrer noopener"><strong>Temple of Time - Road to Oblivion 2/3</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8200011" target="_blank" rel="noreferrer noopener">Oblivion Guardian</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8200012" target="_blank" rel="noreferrer noopener">Chief Oblivion Guardian</a></li>
        <li><img src="/images/map-icons/stronghold.png" alt="MapIcon Stronghold"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/271030200" target="_blank" rel="noreferrer noopener"><strong>Knight Stronghold - Knight District 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8610007" target="_blank" rel="noreferrer noopener">Official Knight C</a></li>
        <li><img src="/images/map-icons/kerning-tower.png" alt="MapIcon Kerning Tower"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/103041149" target="_blank" rel="noreferrer noopener"> [Star Force 80] Kerning Tower - 5F Cosmetics Store 4&gt;</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4310020" target="_blank" rel="noreferrer noopener">Deadly Dressing Table</a></li>
      </ul>
      <hr/> 
    </div>
  );
};

function Level170(){
  return(
    <div>
      <ArticleHeaderTwo id="170">Level 170</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/savage-terminal.png" alt="MapIcon Savage Terminal"/> <strong>[Lv. 175] </strong> <strong>[Theme Dungeon] Detective Rave's Case Notes</strong>: Can be started by accepting the Lightbulb Quest or by navigating from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/detective-raves-honorary-assistant.png" alt="Eqp Detective Rave's Honorary Assistant"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/nlc.png" alt="MapIcon NLC"/> <strong>[Lv. 170] <a href="https://maplestorywiki.net/w/Category:Masteria" target="_blank" rel="noreferrer noopener">[Storyline] New Leaf City</a></strong>: Accessible from the Dimensional Mirror. Completing the storyline rewards <img src="/images/items/nlc-commemorative-coin.png" alt="Etc NLC Commemorative Coin"/> <a href="https://maplestorywiki.net/w/NLC_Commemorative_Coin" target="_blank" rel="noreferrer noopener">[NLC Commemorative Coins]</a> used to exchange items from Spinel
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/treasure-hunter-jacks-scar.png" alt="Eqp Treasure Hunter Jack's Scar"/><img src="/images/equipment/professor-foxwits-glasses.png" alt="Eqp Professor Foxwit's Glasses"/><img src="/images/equipment/sheriff-litas-earrings.png" alt="Eqp Sheriff Lita's Earrings"/><img src="/images/equipment/treasure-hunter-johns-ring.png" alt="Eqp Treasure Hunter John's Ring"/><img src="/images/equipment/subanis-pendant.png" alt="Eqp Subani's Pendant"/><img src="/images/equipment/elpams-belt.png" alt="Eqp Elpam's Belt"/><img src="/images/equipment/lukans-pauldron.png" alt="Eqp Lukan's Pauldron"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Masteria_Explorer_Set" target="_blank" rel="noreferrer noopener">[Masteria Explorer Gear]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/pink-bean-boss.png" alt="MapIcon Pink Bean"/> <strong>[Lv. 170+] <a href="https://maplestorywiki.net/w/Pink_Bean" target="_blank" rel="noreferrer noopener">  <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Chaos Pink Bean</a></strong>: Accessible from the Boss Contents UI or by navigating to <a href="https://maplestory.wiki/GMS/210.1.1/map/270030500" target="_blank" rel="noreferrer noopener">Temple of Time</a> after completing the storyline in Temple of Time
          <ul><li><strong>Chaos Mode Only Rewards</strong>: <img src="/images/equipment/chaos-pink-bean-hat.png"/><img src="/images/equipment/chaos-pink-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Chaos_Pink_Bean_Set_I" target="_blank" rel="noreferrer noopener">[Chaos Pink Bean Set]</a>, <img src="/images/equipment/black-bean-hat.png"/><img src="/images/equipment/black-bean-suit.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Black_Bean_Set" target="_blank" rel="noreferrer noopener">[Black Bean Set]</a>, <img src="/images/items/powerful-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/pink-bean-armchair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Pink Bean Armchair]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/magnus.png" alt="MapIcon Magnus"/> <strong>[Lv. 175+] <a href="https://maplestorywiki.net/w/Magnus/Monster" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Hard Magnus</a></strong>: Completing the <img src="/images/map-icons/heliseum.png" alt="MapIcon Helisium"/> Helisium storyline unlocks access to a Magnus. The boss is accessible from the Boss Contents UI or within Heliseum at <a href="https://maplestorywiki.net/w/Tyrant%27s_Castle_3rd_Floor_Hallway" target="_blank" rel="noreferrer noopener">Tyrant's Castle</a>
          <ul>
            <li><strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/tyrant-hyades-cloak.png" alt="Eqp Tyrant Hyades Cloak"/> <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Cloak" target="_blank" rel="noreferrer noopener">[Superior Tyrant Cape]</a>, <img src="/images/equipment/nova-hyades-boots.png"/> <a href="https://maplestorywiki.net/w/Nova_Hyades_Boots" target="_blank" rel="noreferrer noopener">[Superior Nova Boots]</a>, <img src="/images/equipment/cursed-kaiserium.png" alt="Eqp Cursed Kaiserium"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402179" target="_blank" rel="noreferrer noopener">[Cursed Kaiserium]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> [Magnus Coin], <img src="/images/items/magnus-horn-throne.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Magnus Horn Throne]</a></li>
            <li><img src="/images/items/magnus-coin.png" alt="Etc Magnus Coin"/> [Magnus Coin] is used exchange for <img src="/images/equipment/tyrant-hyades-cloak.png" alt="/images/equipment/tyrant-hyades-cloak.png"/>  [Tyrant Capes]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/hilla.png" alt="MapIcon Hilla"/> <strong>[Lv. 170+] <a href="https://maplestorywiki.net/w/Hilla" target="_blank" rel="noreferrer noopener">  <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Hard Hilla</a></strong>: Accessible through the Boss Contents UI, there are no pre-quests
          <ul>
            <li><strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/will-o-the-wisps.png"/> <a href="https://maplestorywiki.net/w/Will_o%27_the_Wisps" target="_blank" rel="noreferrer noopener">[Will O' the Wisps]</a>, <img src="/images/items/hilla-obelisk-floor-lamp.png"/> <a href="https://maplestorywiki.net/w/Home" target="_blank" rel="noreferrer noopener">[Hilla Obelisk Floor Lamp]</a></li>
            <li>Drop rate is increased for <img src="/images/items/pet-box-blackheart.png" alt="Use (Pet Box) Blackheart"/> [Pet Box] in Hard Hilla</li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/kritias.png" alt="MapIcon Kritias"/> <strong>[Lv. 170] <a href="https://maplestorywiki.net/w/Category:Kritias" target="_blank" rel="noreferrer noopener">[Storyline] Kritias</a></strong>: Accessible from <a href="https://maplestorywiki.net/w/Sky_Nest_I" target="_blank" rel="noreferrer noopener">Leafre</a>, completing this storyline unlocks access to Weekly Quests that reward <img src="/images/items/kritias-commemorative-coin.png" alt="Etc Kritias Commemorative Coin"/> [Kritias Commemorative Coins] used for exchanging items
          <ul>
            <li><strong>Notable items</strong>: <a href="https://maplestorywiki.net/w/Tyrant_Hyades_Gloves" target="_blank" rel="noreferrer noopener">[Superior Tyrant Glove]</a>, <img src="/images/items/empress-reset-ticket.png" alt="Use Empress Reset Ticket"/> [Boss Reset Tickets]</li>
            <li>Reset tickets give you an extra clear for a boss</li>
            <li>An in-depth guide to Kritias: <a href="https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/kritias-everything-you-need-to-know-about-it.217/</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/mushroom-shrine.png" alt="MapIcon Mushroom Shrine"/> <strong>[Lv. 160] <a href="https://maplestorywiki.net/w/Gigatoad" target="_blank" rel="noopener noreferrer"><span style={{color: '#ff9900'}}>[Boss]</span> Gigatoad</a></strong>: Located within Ninja Castle. This boss is unlocked once you reach Lv. 160, there are no pre-quests<br/>
          <ul>
            <li><strong>Main Rewards:</strong>&nbsp;<img src="/images/equipment/terminus-dominator.png" alt="Eqp Terminus Divider"/><img src="/images/equipment/terminus-executioner.png" alt="Eqp Terminus Executioner"/> <img src="/images/equipment/terminus-defender.png" alt="Eqp Terminus Defender"/>[Terminus Weapons], <img src="/images/equipment/elemental-staff-1.png" alt="Eqp Elemental Staff 1"/> <img src="/images/equipment/elemental-staff-2.png" alt="Eqp Elemental Staff 2"/>[Elemental Staves], <img src="/images/items/toad-pet-coupon.png" alt="Toad Pet Coupon"/> [(30 Day) Toad Pet Coupon], <img src="/images/items/ninja-castle-damage-skin.png" alt="Ninja Castle Damage Skin"/> [Damage Skin], <img src="/images/items/clean-slate-scroll.png" alt="Clean Slate Scroll"/>[Clean Slate Scroll], <img src="/images/items/potion-recipe.png" alt="Exp Accumulation Potion Recipe"/> [EXP Accumulation Potion Recipe], <img src="/images/items/potion-recipe.png" alt="Wealth Acquisition Potion Recipe"/> [Wealth Acquisition Potion Recipe], <img src="/images/items/soul-shard.png" alt="Soul Shard"/> [Soul Shard], <img src="/images/items/golden-toad-sculpture.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture]</li>
            <li><img src="/images/items/golden-toad-sculpture.png" alt="Golden Toad Sculpture"/> [Golden Toad Sculpture] is used to exchange items from <a href="https://maplestorywiki.net/w/Princess_Suzume" target="_blank" rel="noopener noreferrer">Princess Yuzume</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/hob-king.png" alt="MapIcon Hob King"/> <strong>[Lv. 170] <a href="https://maplestorywiki.net/w/Resurrection_of_the_Hoblin_King" target="_blank" rel="noreferrer noopener">[Party Quest] Resurrection of the Hoblin King</a></strong>: Requires 2-6 party members to enter. There are 4 stages and a boss on the final stage
          <ul>
            <li>Accessible through the Dimensional Mirror by clicking on <img alt="Icon Party Quest" src="/images/info/party-quest-icon.png"/> Party Quest Entry</li>
            <li><strong>Main Rewards:</strong> <img src="/images/equipment/rexs-perfect-green-earrings.png" alt="Eqp Rex's Perfect Green Earrings"/> <img src="/images/equipment/rexs-perfect-red-earrings.png" alt="Eqp Rex's Perfect Red Earrings"/> <img src="/images/equipment/rexs-perfect-blue-earrings.png" alt="Eqp Rex's Perfect Blue Earrings"/> [Earrings], <img src="/images/items/rexs-hyena.png" alt="Skill Rex's Hyena"/> [Mount]</li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/savage-terminal.png" alt="MapIcon Savage Terminal"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/402000125" target="_blank" rel="noreferrer noopener"><strong>Savage Terminal - Seedy Scrapyard 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/2400330" target="_blank" rel="noreferrer noopener">Prickly Hedgehog</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/2400331" target="_blank" rel="noreferrer noopener">Foul Ooze Waste</a></li>
        <li><img src="/images/map-icons/showa-town.png" alt="MapIcon Showa Town"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/801040004" target="_blank" rel="noreferrer noopener">Showa Town - Armory</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/9400015" target="_blank" rel="noreferrer noopener">Dusk Viper</a></li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030610" target="_blank" rel="noreferrer noopener">Omega Sector - Corridor 202</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230132" target="_blank" rel="noreferrer noopener">Gray Luxury Saucer</a></li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030640" target="_blank" rel="noreferrer noopener">[Star Force 140] Omega Sector - Corridor H01/2/3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230141" target="_blank" rel="noreferrer noopener">Gray Commuter Saucer</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level180(){
  return(
    <div>
      <ArticleHeaderTwo id="180">Level 180</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/fox-valley.png" alt="MapIcon Fox Valley"/> <strong>[Lv. 185] <a href="https://maplestorywiki.net/w/Category:Fox_Valley" target="_blank" rel="noreferrer noopener">[Theme Dungeon] Fox Valley</a></strong>: Accessible by accepting a quest in the Lightbulb Quest and by travelling from <a href="https://maplestory.wiki/GMS/210.1.1/map/400000000" target="_blank" rel="noreferrer noopener">Pantheon</a>
          <ul><li><strong>Main Rewards</strong>; <img src="/images/equipment/fox-point-ranger.png" alt="Eqp Fox Point Ranger"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/root-abyss.png" alt="MapIcon Root Abyss"/> <strong> [Lv. 180+] <a href="https://maplestorywiki.net/w/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Chaos Root Abyss</a></strong>: Accessible from the Dimensional Mirror or Boss Contents UI after completing the storyline from the Lightbulb Quests and have cleared each corresponding Normal Mode boss 10 times
          <ul>
            <li><strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/queens-tiara.png" alt="Eqp Queen's Tiara"/> <img src="/images/equipment/pierre-hat.png" alt="Eqp Pierre Hat"/> <img src="/images/equipment/von-bon-helmet.png" alt="Eqp Von Bon Helmet"/> <img src="/images/equipment/vellums-helm.png" alt="Eqp Vellum's Helm"/> [Chaos Hat], <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame],<img src=" /images/items/chaos-yggdrasil-rune.png" alt="Etc Chaos Yggdrasil Rune"/> [Chaos Yggdrasil Coin], <img src="/images/items/crimson-queens-throne.png" alt="Setup Crimson Queen's Throne"/><img src="/images/items/happy-pierre-chair.png" alt="Setup Happy Pierre Chair"/><img src="/images/items/von-bons-von-chair.png" alt="Setup Von Bon's Von Chair"/> <img src="/images/items/vellum-rock-chair.png" alt="Setup Vellum Rock Chair"/>[Chair], <img src="/images/items/pierre-umbrella-stand.png"/><img src="/images/items/von-bon-windup-clock.png"/><img src="/images/items/crimson-queen-vanity-table.png"/><img src="/images/items/vellum-lava-bathtub.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Furniture]</a></li>
            <li>These fragments <img src="/images/items/piece-of-anguish.png" alt="Use Piece of Anguish"/> <img src="/images/items/piece-of-mockery.png" alt="Use Piece of Mockery"/> <img src="/images/items/piece-of-time.png" alt="Use Piece of Time"/> <img src="/images/items/piece-of-destruction.png" alt="Use Piece of Destruction"/> exchange for <img src=" /images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/> <img src="/images/equipment/fafnir-mistilteinn.png" alt="Eqp Fafnir Mana Cradle"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Root_Abyss_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Lv. 150 Root Abyss Gear]</a></li>
            <li>A guide to the Root Abyss pre-quests: <a href="https://www.youtube.com/watch?v=ctKe_wr4uLs" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=ctKe_wr4uLs</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/gollux.png" alt="MapIcon Gollux"/> <strong>[Lv. 180+] <a href="https://maplestorywiki.net/w/Gollux" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Gollux</a></strong>: Accessible from the Dimensional Mirror and Boss Contents UI upon completing a short dialogue Lightbulb Quest. Gollux is a boss consisting of multiple segments
          <ul>
            <li>There are 4 difficulties based on how many limbs are defeated before taking on Gollux's Head</li>
            <li><strong>Main Rewards</strong>: <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> [Gollux Penny/Coins], <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/> <img src="/images/equipment/superior-gollux-ring.png" alt="Eqp Superior Gollux Ring"/> <img src="/images/equipment/superior-engraved-gollux-pendant.png" alt="Eqp Superior Engraved Gollux Pendant"/> <img src="/images/equipment/superior-engraved-gollux-belt.png" alt="Eqp Superior Engraved Gollux Belt"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Superior_Gollux_Set" target="_blank" rel="noreferrer noopener">[Gollux Accessories]</a>, <img src="/images/items/gollux-wood-bench.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[(Hell Mode Only) Gollux Wood Bench]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube]</li>
            <li>The coins <img src="/images/items/gollux-penny.png" alt="Etc Gollux Penny"/> <img src="/images/items/gollux-coin.png" alt="Etc Gollux Coin"/> are used to exchange for <img src="/images/equipment/superior-gollux-earrings.png" alt="Eqp Superior Gollux Earrings"/> <img src="/images/equipment/superior-gollux-ring.png" alt="Eqp Superior Gollux Ring"/> [Gollux Accesories] and <img src="/images/items/gollux-scroll.png" alt="Use Gollux Scroll"/> <a href="https://maplestorywiki.net/w/Advanced_Gollux_Scroll" target="_blank" rel="noreferrer noopener">[Advanced Gollux Scrolls]</a> to upgrade the accessories</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/ranmaru.png" alt="MapIcon Ranmaru"/> <strong>[Lv. 180+] <a href="https://maplestorywiki.net/w/Mori_Ranmaru" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Hard Mori Ranmaru</a></strong>: Accessible from Boss Contents UI or travelling to <a href="https://maplestory.wiki/GMS/210.1.1/map/211041700" target="_blank" rel="noreferrer noopener">Dead Mines in El Nath</a> after completing a short dialogue Lightbulb Quest
          <ul><li><strong>Hard Mode Only Rewards:</strong> <img src="/images/items/solid-cube.png" alt="Use Solid Cube"/> [Solid Cube]</li></ul>
        </li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong>[Lv. 180+] <a href="https://maplestorywiki.net/w/OMNI-CLN" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Boss]</span> OMNI-CLN</a></strong>: Accessible from the Boss Contents UI or by travelling from <a href="https://maplestory.wiki/GMS/210.1.1/map/221030900" target="_blank" rel="noreferrer noopener">Omega Sector</a> after completing the Omega Sector Theme Dungeon
          <ul><li><strong>Main Rewards</strong>: <img src="/images/items/elixir.png" alt="Use Elixir"/> [Elixir], <img src="/images/items/rebirth-flame-110.png" alt="Use Rebirth Flame Lv. 110"/> [Lv. 110 Rebirth Flame], <img src="/images/items/omni-cln-component.png" alt="Etc OMNI-CLN Component"/> <a href="https://maplestorywiki.net/w/OMNI-CLN_Component" target="_blank" rel="noreferrer noopener">[OMNI-CLN Component]</a>, <img src="/images/items/omni-cln-vacuum.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[OMNI-CLN Vacuum]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]</li></ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonheart Castle"/> <strong>[Lv. 180] <a href="https://maplestorywiki.net/w/Category:Crimsonwood" target="_blank" rel="noreferrer noopener">[Daily Quest / Storyline] Crimsonwood - Phantom Forest</a></strong>: Accessible from <a href="https://maplestorywiki.net/w/NLC_Town_Center" target="_blank" rel="noreferrer noopener">New Leaf City</a>. Completing the storyline unlocks Daily Quests that reward <img src="/images/items/raven-ninja-coin.png" alt="Etc Raven Ninja Coin"/> <a href="https://maplestorywiki.net/w/Raven_Ninja_Coin" target="_blank" rel="noreferrer noopener">[Raven Ninja Coins]</a> and <img src="/images/items/shadowknight-coin.png" alt="Etc Shadowknight Coin"/> <a href="https://maplestorywiki.net/w/Shadowknight_Coin" target="_blank" rel="noreferrer noopener">[Shadowknight Coins]</a> for exchanging items from Mo and Fiona in the Phantom Forest
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/numenals-willpower.png" alt="Eqp Numenal's Willpower"/> <img src="/images/equipment/glonas-heart.png" alt="Eqp Glona's Heart"/> <img src="/images/equipment/legacy-of-light.png" alt="Eqp Legacy of Light"/> <img src="/images/equipment/legacy-of-darkness.png" alt="Eqp Legacy of Darkness"/> <img src="/images/equipment/delgrunds-honor.png" alt="Eqp Delgrund's Honor"/> <img src="/images/equipment/lirenis-wish.png" alt="Eqp Lireni's Wish"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Masteria%27s_Legacy" target="_blank" rel="noreferrer noopener">[Masteria's Legacy Gear]</a>, <img src="/images/equipment/white-identity.png" alt="Eqp White Identity"/> <img src="/images/equipment/crystal-leaf-earrings.png" alt="Eqp Crystal Leaf Earrings"/> <img src="/images/equipment/ravens-beak.png" alt="Eqp Raven's Beak"/> <a href="https://maplestorywiki.net/w/Mo" target="_blank" rel="noreferrer noopener">[iTCG Gear]</a>, <img src="/images/items/balanced-fury.png" alt="Use Balanced Fury"/> <a href="https://maplestorywiki.net/w/Balanced_Fury" target="_blank" rel="noreferrer noopener">[Balanced Fury]</a>, <img src="/images/items/crystal-ilbi.png" alt="Use Crystal Ilbi Throwing-Stars"/> <a href="https://maplestorywiki.net/w/Crystal_Ilbi_Throwing-Stars" target="_blank" rel="noreferrer noopener">[Crystal Ilbis]</a></li></ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/twilight-perion.png" alt="MapIcon Twilight Perion"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273010000" target="_blank" rel="noreferrer noopener">Twilight Perion - Deserted Southern Ridge</a></strong> + <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273020000" target="_blank" rel="noreferrer noopener">Desolate Hills</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620000" target="_blank" rel="noreferrer noopener">Swollen Stump</a></li>
        <li><img src="/images/map-icons/twilight-perion.png" alt="MapIcon Twilight Perion"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/273040100" target="_blank" rel="noreferrer noopener">Twilight Perion - Forsaken Excavation Site 2/3/4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620007" target="_blank" rel="noreferrer noopener">Sinister Rocky Mask</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620008" target="_blank" rel="noreferrer noopener">Sinister Steel Mask</a></li>
        <li><img src="/images/map-icons/fox-valley.png" alt="MapIcons Fox Valley"/> <strong><a href="https://maplestory.wiki/GMS/215/map/410000101" target="_blank" rel="noreferrer noopener">Fox Valley - Fox Tree Midway 1</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/2400256" target="_blank" rel="noreferrer noopener">Snowy Stjartmes</a></li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030640" target="_blank" rel="noreferrer noopener">[Star Force 140] Omega Sector - Corridor H01/2/3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230141" target="_blank" rel="noreferrer noopener">Gray Commuter Saucer</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level190(){
  return(
    <div>
      <ArticleHeaderTwo id="190">Level 190</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/ludibrium.png" alt="MapIcon Papulatus Clock"/> <strong>[Lv. 190+] <a href="https://maplestorywiki.net/w/Papulatus" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Chaos Papulatus</a></strong>: Completing a questline in Ludibrium unlock access to Papulatus. The boss is accessible from the Boss Contents UI or within Ludibrium at <a href="https://maplestory.wiki/GMS/210.1.1/map/220080000" target="_blank" rel="noreferrer noopener">Ludibrium Clocktower</a>
          <ul>
            <li>A guide to the pre-quests: <a href="https://www.youtube.com/watch?v=mAq43NaBFmY" target="_blank" rel="noreferrer noopener">https://www.youtube.com/watch?v=mAq43NaBFmY</a></li>
            <li><strong>Hard Mode Only Rewards</strong>: <img src="/images/equipment/papulatus-mark.png" alt="Eqp Papulatus Mark"/> <a href="https://maplestorywiki.net/w/Papulatus_Mark" target="_blank" rel="noreferrer noopener">[Papulatus Mark]</a>, <img src="/images/items/papulatus-wall-clock.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noreferrer noopener">[Papulatus Wall Clock]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong>[Lv. 190+] <a href="https://maplestorywiki.net/w/Lotus" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Lotus</a></strong>: Accessible from the Boss Contents UI or travelling from <a href="https://maplestory.wiki/GMS/210.1.1/map/350060300" target="_blank" rel="noreferrer noopener">Scrapyard</a>
          <ul>
            <li><strong>Normal Mode and Above Rewards</strong>: <img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)"/> [Extraordinary Energy Core (Grade S)], <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a></li>
            <li>
              <strong>Hard Mode Only Rewards</strong>: <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>, <img src="/images/items/damaged-black-heart.png" alt="Etc Damaged Black Heart"/> <a href="https://maplestorywiki.net/w/Damaged_Black_Heart" target="_blank" rel="noreferrer noopener">[Damaged Black Heart]</a>, <img src="/images/equipment/android.png" alt="Eqp Deluxe Android (M)"/> <a href="https://maplestorywiki.net/w/Lotusroid" target="_blank" rel="noreferrer noopener">[Lotusroid Android]</a>, <img src="/images/equipment/berserked.png" alt="Eqp Berserked"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1012632">[Beserked Face Accessory]</a>, <img src="/images/items/orchids-plush-bunny.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Orchid's Plush Bunny]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><img src="/images/items/extraordinary-energy-core.png" alt="Etc Extraordinary Energy Core (Grade S)"/> are used to combine with <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/> [Diffusion-Line Energy Core (Grade A)] to create <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/> [Absolab Coins] for exchanging <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/>[ <em>(Shoe/Glove/Cape/Weapon)</em> AbsoLab Gear]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/dark-world-tree.png" alt="MapIcon fallenWorldTree"/> <strong>[Lv. 190+] <a href="https://maplestorywiki.net/w/Damien" target="_blank" rel="noreferrer noopener">  <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Damien</a></strong>: Accessible from the Boss Contents UI or travelling from <a href="https://maplestory.wiki/GMS/210.1.1/map/105300303" target="_blank" rel="noreferrer noopener">Dark World Tree</a>
          <ul>
            <li><strong>Normal Mode Rewards: </strong> , <img src="/images/equipment/ruin-force-shield.png" alt="Eqp Ruin Force Shield"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1099015" target="_blank" rel="noreferrer noopener">[(Demon-Class Exclusive) Ruin Force Shield]</a>, <img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone"/> [Twisted Stigma Spirit Stone], <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/bonus-mystical-cube.png"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]</li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/damienroid.png"/> <a href="https://maplestorywiki.net/w/Damienroid" target="_blank" rel="noreferrer noopener">[Damienroid Android]</a>, <img src="/images/equipment/magic-eyepatch.png" alt="Eqp Magic Eyepatch"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1022278" target="_blank" rel="noreferrer noopener">[Magic Eyepatch]</a>, <img src="/images/items/absolab-box.png" alt="Use AbsoLab Box"/> <a href="https://maplestorywiki.net/w/Equipment_Set/AbsoLab_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[AbsoLab Armor/Weapon Box]</a>, <img src="/images/items/damiens-sword.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Damien's Sword]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><img src="/images/items/twisted-stigma-spirit-stone.png" alt="Etc Twisted Stigma Spirit Stone"/> are used to combine with <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/> [Faint Stigma Spirit Stone] to create <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> [Stigma Coins] for exchanging <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Knight Suit"/> <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/>[ <em>(Hat/Overall/Shoulder/Weapon)</em> AbsoLab Gear]</li>
          </ul>
        </li>
        <li><strong>[Lv. 190] <a href="https://maplestorywiki.net/w/Category:Scrapyard" target="_blank" rel="noreferrer noopener">[Weekly Quest / Area] Scrapyard</a></strong>: Unlocked upon reaching Lv. 190
          <ul><li>Weekly Quests and monster drops give <img src="/images/items/diffusion-line-energy-core.png" alt="Etc Diffusion-Line Energy Core (Grade A)"/> [Diffusion-Line Energy Core (Grade A)] used to create <img src="/images/items/absolab-coin.png" alt="Etc AbsoLab Coin"/> [AbsoLab Coins] for exchanging <img src="/images/equipment/absolab-knight-shoes.png" alt="Eqp AbsoLab Knight Shoes"/> <img src="/images/equipment/absolab-knight-gloves.png" alt="Eqp AbsoLab Knight Gloves"/> <img src="/images/equipment/absolab-knight-cape.png" alt="Eqp AbsoLab Knight Cape"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/>[ <em>(Shoe/Glove/Cape/Weapon)</em> AbsoLab Gear]</li></ul>
        </li>
        <li><strong>[Lv. 190] <a href="https://maplestorywiki.net/w/Category:Dark_World_Tree" target="_blank" rel="noreferrer noopener">[Weekly Quest / Area] Dark World Tree</a></strong>: Unlocked upon reaching Lv. 190
          <ul><li>Weekly Quests and monster drops give <img src="/images/items/faint-stigma-spirit-stone.png" alt="Etc Faint Stigma Spirit Stone"/> [Faint Stigma Spirit Stone] used to create <img src="/images/items/stigma-coin.png" alt="Etc Stigma Coin"/> [Stigma Coins] for exchanging <img src="/images/equipment/absolab-knight-helm.png" alt="Eqp AbsoLab Knight Helm"/> <img src="/images/equipment/absolab-knight-suit.png" alt="Eqp AbsoLab Knight Suit"/> <img src="/images/equipment/absolab-knight-shoulder.png" alt="Eqp AbsoLab Knight Shoulder"/> <img src="/images/equipment/absolab-saber.png" alt="Eqp AbsoLab Saber"/>[ <em>(Hat/Overall/Shoulder/Weapon)</em> AbsoLab Gear]</li></ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/crimsonheart-castle.png" alt="MapIcon Crimsonheart Castle"/> <strong>[Lv. 190] <a href="https://maplestorywiki.net/w/Category:Masteria" target="_blank" rel="noreferrer noopener">[Storyline] Masteria</a></strong>: Accessible from <a href="https://maplestorywiki.net/w/NLC_Town_Center" target="_blank" rel="noreferrer noopener">New Leaf City</a>
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/naricains-revival.png" alt="Eqp Naricain's Revival"/> [Medal]</li></ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/310070140" target="_blank" rel="noreferrer noopener">Scrapyard - Scrapyard Hill 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250003" target="_blank" rel="noreferrer noopener">Chaseroid Red</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250005" target="_blank" rel="noreferrer noopener">Hunterizer Red</a></li>
        <li><img src="/images/map-icons/twilight-perion.png" alt="MapIcon Twilight Perion"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/273040100" target="_blank" rel="noreferrer noopener"><strong>Twilight Perion - Forsaken Excavation Site 2/3/4</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620007" target="_blank" rel="noreferrer noopener">Sinister Rocky Mask</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8620008" target="_blank" rel="noreferrer noopener">Sinister Steel Mask</a></li>
        <li><img src="/images/map-icons/omega-sector.png" alt="MapIcon Omega Sector"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/221030640" target="_blank" rel="noreferrer noopener">[Star Force 140] Omega Sector - Corridor H01/2/3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/4230141" target="_blank" rel="noreferrer noopener">Gray Commuter Saucer</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level200(){
  return(
    <div>
      <ArticleHeaderTwo id="200">Level 200</ArticleHeaderTwo>
      <h3>5th Job Advancement:</h3>
      <p><strong>Mandatory Requirements to accept 5th Job Quest:</strong></p>
      <ul>
        <li>100 Star Force minimum accumulated total</li>
        <li>10 Star Force on Primary Weapon</li>
      </ul>
      <p><strong>Requirements to Job Advance:</strong> <img src="/images/npc/memory-keeper.png" alt="NPC Memory Keeper"/><img src="/images/npc/temple-keeper.png" alt="NPC Temple Keeper"/></p>
      <ul>
        <li>After talking to the Memory Keeper and Temple Keeper, you'll receive a quest called <a href="https://maplestory.wiki/GMS/210.1.1/quest/1461" target="_blank" rel="noreferrer noopener">"5th Job: Blessing of the Goddess"</a>. Once you've talked to all the Goddesses and completed their challenge, you can job advanced to 5th Job</li>
        <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/100000201" target="_blank" rel="noreferrer noopener">Henesys: Bowman Instructional School</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
          <ul><li>Talk to "The Goddess of Maple World" to complete the quest</li></ul>
        </li>
        <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/105300000" target="_blank" rel="noreferrer noopener">Dark World Tree: Deserted Camp</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
          <ul><li>After talking to the "Goddess of Tynerum", defeat all enemies in a series of maps after being teleport</li></ul>
        </li>
        <li>Visit <a href="https://maplestory.wiki/GMS/210.1.1/map/400000001" target="_blank" rel="noreferrer noopener">Pantheon: Grand Temple Interior</a> and press up on the <a href="https://maplestory.wiki/GMS/210.1.1/npc/1540941" target="_blank" rel="noreferrer noopener">Horizon Portal</a>
          <ul><li>Talk to the "Goddess of Grandis" twice and defeat a weakened version of Magnus after being teleported</li></ul>
        </li>
        <li>Each goddess will give you an <img src="/images/items/arcane-stone.png" alt='Skill Arcane Stone'/> Arcane Stone which you can charge up by fighting monsters. Once the stone has been charged, you can use it again to gain some EXP
          <ul><li>You do not need to charge the stones up to Job Advance</li></ul></li>
      </ul>
      <p><strong>After Advancement, obtaining an Arcane Symbol:</strong> To effectively damage monsters in the Arcane River, Arcane Power is required similar to Star Force which you gain from equipping <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Arcane_Symbols" target="_blank">Arcane Symbols</a></p>
      <ul>
        <li>To obtain your Arcane Symbol, you must complete the quest <a href="https://maplestory.wiki/GMS/210.1.1/quest/1466" target="_blank" rel="noreferrer noopener">"A Greater Power"</a> located in your Lightbulb Quests. This quest is intentionally difficult as you have no Arcane Power</li>
        <li>The initial symbol you obtain is not a real Arcane Symbol yet until you complete the Vanishing Journey storyline. In the meantime, you must complete the story with the limited Arcane Power you have</li>
        <li><strong>[Tip]</strong>: If you are struggling to defeat the monsters, there is a Hyper Stat for Arcane Power, allocate some points temporarily until you get enough Arcane Power</li>
      </ul>
      <h3>Content Available:</h3>
      <h4>Recommended</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong>[Lv. 200] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Category:Vanishing_Journey" target="_blank">[Daily Quest / Area] Arcane River - Vanishing Journey</a></strong>: Completing the storyline here rewards you with your first <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/>  <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Arcane_Symbols" target="_blank">[Arcane Symbol]</a>
          <ul><li>Completing the storyline also unlocks a Weekly Activity and Daily Quests that reward <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> <a href="https://maplestorywiki.net/w/Arcane_Symbols" target="_blank" rel="noreferrer noopener">[Arcane Symbols]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong>[Lv. 200] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Erda_Spectrum" target="_blank">[Weekly Party Quest] Erda Spectrum</a></strong>: Unlocked after completing the Vanishing Journey storyline. Requires 1-3 party members to enter. There are 2 stages and the objective to help Nina conduct research
          <ul><li><strong>Main Reward: </strong> <img src="/images/equipment/arcane-symbol-vanishing-journey.png" alt="Eqp Arcane Symbol Vanishing Journey"/> [Arcane Symbols]</li></ul>
        </li>
        <li><img src="/images/map-icons/reverse-city.png" alt="MapIcon Reverse City"/> <strong>[Lv. 205] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Category%3AReverse_City" target="_blank">[Area] Arcane River -  Reverse City</a></strong>: Accessible from Vanishing Journey
          <ul><li><strong>Main Reward</strong>: <img src="/images/items/arcane-symbol-selector.png" alt="Use Arcane Symbol Selector Coupon"/> <a href="https://maplestory.wiki/GMS/214/item/2437750" target="_blank" rel="noreferrer noopener">[Arcane Symbol Selector Coupon]</a>, <img src="/images/equipment/t-boys-monitor.png" alt="Eqp T-Boy's Monitor"/> <a href="https://maplestory.wiki/GMS/214/item/1005497" target="_blank" rel="noreferrer noopener">[T-Boy's Monitor]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/fort-asura.png" alt="MapIcon Fort Asura"/> <strong>[Lv. 200] <a href="https://maplestorywiki.net/w/Akechi_Mitsuhide/Monster" target="_blank" rel="noopener noreferrer"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Akechi Mitsuhide</a></strong>: Accessible through the Boss Contents UI or travelling from <img src="/images/map-icons/mushroom-shrine.png" alt="Mushroom Shrine Map Icon"/> Mushroom Shrine
          <ul>
            <li>
                <strong>Main Rewards:</strong> <img src="/images/equipment/nimbus-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><img src="/images/equipment/weeping-spirit-sword-of-the-wolf.png" alt="Eqp Wolf Weapon"/><a href="https://maplestorywiki.net/w/Equipment_Set/Amaterasu_Set" target="_blank" rel="noopener noreferrer">[Japanese Wolf Weapons]</a>, <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> <a href="https://maplestorywiki.net/w/Mark_of_the_Silver_Wolf" target="_blank" rel="noopener noreferrer">[Mark of the Silver Wolf]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>
                , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/><a href="https://maplestorywiki.net/w/Mystical_Cube" target="_blank" rel="noreferrer noopener">[Mystical Cube]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/><a href="https://maplestorywiki.net/w/Power_Elixir">[Power Elixir]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/><a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/><a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
            </li>
            <li>The coins <img src="/images/items/mark-of-the-silver-wolf.png" alt="Mark of the Silver Wolf"/> are used to exchange for Japanese Wolf Weapons from <a href="https://maplestorywiki.net/w/Kobayakawa_Takakage" target="_blank" rel="noopener noreferrer">Kobayakawa Takakage</a></li>
          </ul>
        </li>
      </ul>
      <h4>Optional</h4>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/tower-of-oz.png" alt="MapIcon Tower of Oz"/> <strong>[Lv. 200] <a href="https://strategywiki.org/wiki/MapleStory/Tower_of_Oz" target="_blank" rel="noreferrer noopener">Tower of Oz</a></strong>: Accessible from the Dimensional Mirror. Tower of Oz consists of 50 floors of challenges with a set amount of time limit determined by using <img src="/images/items/stupid-pill.png" alt="Use Stupid Pill"/> [Stupid Pills] to extend the time limit
          <ul>
            <li>Based on how far you reach, you will gain "Oz Points" that can be exchanged for items</li>
            <li><strong>Main Rewards</strong>: <img src="/images/equipment/ryudes-sword.png" alt="Eqp Ryude's Sword"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1402224" target="_blank" rel="noreferrer noopener">[Ryude's Sword]</a>, <img src="/images/equipment/ocean-glow-earrings.png" alt="Eqp Ocean Glow Earrings"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1032232" target="_blank" rel="noreferrer noopener">[Ocean Glow Earrings]</a>, <img src="/images/equipment/lightseeker.png" alt="Eqp Lightseeker"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1452229" target="_blank" rel="noreferrer noopener">[Lightseeker Bow]</a>, <img src="/images/equipment/alicias-mutated-staff.png" alt="Eqp Alicia's Mutated Staff"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1382234" target="_blank" rel="noreferrer noopener">[Alicia's Mutated Staff]</a>, <img src="/images/equipment/aquarius-crown.png" alt="Eqp Aquarius Crown"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1004075" target="_blank" rel="noreferrer noopener">[Aquarius Crown]</a>, <img src="/images/items/alicias-damage-skin.png" alt="Use Alicia's Damage Skin"/> <img src="/images/items/dorothys-damage-skin.png" alt="Use Dorothy's Damage Skin"/><img src="/images/items/basic-damage-skin.png" alt="Use Basic Damage Skin"/> [Damage Skins]</li>
            <li>An in-depth guide to the Tower of Oz: <a href="https://dexless.com/guides/tower-of-oz-comprehensive-guide.145/" target="_blank" rel="noreferrer noopener">https://dexless.com/guides/tower-of-oz-comprehensive-guide.145/</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/haven.png" alt="MapIcon Haven"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/310070140" target="_blank" rel="noreferrer noopener">Scrapyard - Scrapyard Hill 4</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250003" target="_blank" rel="noreferrer noopener">Chaseroid Red</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8250005" target="_blank" rel="noreferrer noopener">Hunterizer Red</a></li>
        <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/450001014" target="_blank" rel="noreferrer noopener">[Arcane Power 30] Vanishing Journey - Weathered Land of Sorrow</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641002" target="_blank" rel="noreferrer noopener">Sad Erda</a></li>
        <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450001112" target="_blank" rel="noreferrer noopener">[Arcane Power 40] Vanishing Journey - Fire Zone</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641005" target="_blank" rel="noreferrer noopener">Blazing Erda</a></li>
        <li><img src="/images/map-icons/vanishing-journey.png" alt="MapIcon Vanishing Journey"/> <strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/450001210" target="_blank" rel="noreferrer noopener">[Arcane Power 60] Vanishing Journey - Forked Road 1</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/map/450001216" target="_blank" rel="noreferrer noopener">Below the Cave</a> </strong> : <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641007" target="_blank" rel="noreferrer noopener">Tranquil Erda</a> &amp; <a href="https://maplestory.wiki/GMS/210.1.1/mob/8641008" target="_blank" rel="noreferrer noopener">Lantern Erda</a></li>
        <li><img src="/images/map-icons/reverse-city.png" alt="MapIcon Reverse City"/> <strong><a href="https://maplestory.wiki/GMS/214/map/450014020" target="_blank" rel="noreferrer noopener">[Arcane Power 40] Reverse City - Subway Tunnel 1 - 6</a></strong>: <a href="https://maplestory.wiki/GMS/214/mob/8641051" target="_blank" rel="noreferrer noopener">Erda Rat</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641052" target="_blank" rel="noreferrer noopener">Monto</a></li>
        <li><img src="/images/map-icons/reverse-city.png" alt="MapIcon Reverse City"/> <strong><a href="https://maplestory.wiki/GMS/214/map/450014100" target="_blank" rel="noreferrer noopener">[Arcane Power 40] Reverse City - T-Boy's Research Train 1 - 3</a></strong>: <a href="https://maplestory.wiki/GMS/214/mob/8641053" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model A</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641054" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model B</a></li>
        <li><img src="/images/map-icons/reverse-city.png" alt="MapIcon Reverse City"/> <a href="https://maplestory.wiki/GMS/214/map/450014300" target="_blank" rel="noreferrer noopener"><strong>[Arcane Power 100] Reverse City - </strong><strong>Hidden Research Train</strong></a>: <a href="https://maplestory.wiki/GMS/214/mob/8641066" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model A</a> and <a href="https://maplestory.wiki/GMS/214/mob/8641067" target="_blank" rel="noreferrer noopener">Seeker T-Drone Model B</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level210(){
  return(
    <div>
      <ArticleHeaderTwo id="210">Level 210</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong>[Lv. 210] <a href="https://maplestorywiki.net/w/Category:Chu_Chu_Island" target="_blank" rel="noreferrer noopener">[Daily Quest / Area] Arcane River - Chu Chu Island</a></strong>: Completing the storyline here unlocks your second <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane  Symbol]
          <ul><li>Completing the storyline also unlocks a Weekly Activity and Daily Quests and reduces the requirements of prior Arcane River dailies & weeklies</li></ul>
        </li>
        <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong>[Lv. 210] <a href="https://maplestorywiki.net/w/Category:Hungry_Muto" target="_blank" rel="noreferrer noopener">[Weekly Party Quest] Hungry Muto</a></strong>: Unlocked after completing the Chu Chu Island storyline. Requires 1-4 party members to enter. The main objective is to gather ingredients from monsters to create dishes to feed Muto
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-chu-chu-island.png" alt="Eqp Arcane Symbol Chu Chu Island"/> [Arcane Symbol]</li></ul>
        </li>
        <li><img src="/images/map-icons/yum-yum-island.png" alt="MapIcon Yum Yum Island"/> <strong>[Lv. 215] <a href="https://maplestorywiki.net/w/Category:Yum_Yum_Island" target="_blank" rel="noreferrer noopener">[Area] Yum Yum Island</a></strong>: Accessible from Chu Chu Island
          <ul><li><strong>Main Reward</strong>: <img src="/images/items/arcane-symbol-selector.png" alt="Use Arcane Symbol Selector Coupon"/> <a href="https://maplestory.wiki/GMS/214/item/2437750" target="_blank" rel="noreferrer noopener">[Arcane Symbol Selector Coupon]</a></li></ul>
        </li>
        <li><img src="/images/map-icons/ramuramu.png" alt="MapIcon Ramuramu"/> <strong>[Lv. 210] <a href="https://maplestorywiki.net/w/Guardian_Angel_Slime" target="_blank" rel="noopener noreferrer"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Guardian Angel Slime</a></strong>: Accessible from the Boss Contents UI after completing questline starting from the Lightbulb Quest <a href="https://maplestorywiki.net/w/Quests/243/(Ramuramu)_Psych_Exam" target="_blank" rel="noreferrer noopener">"[Ramuramu] Psych Exam"</a>
          <ul>
              <li>
                <strong>Normal Mode and Above Rewards: </strong><img src="/images/equipment/guardian-angel-ring.png" alt="Guardian Angel Ring"/><a href="https://maplestorywiki.net/w/Guardian_Angel_Ring" target="_blank" rel="noreferrer noopener">[Guardian Angel Ring]</a>, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> <a href="https://maplestorywiki.net/w/Power_Elixir" target="_blank" rel="noreferrer noopener">[Power Elixir]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>
                , <img src="/images/items/sparkling-red-star-potion.png" alt="Use Sparkling Red Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noopener noreferrer">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> <a href="https://maplestorywiki.net/w/Rebirth_Flame_Lv._150" target="_blank" rel="noopener noreferrer">[Rebirth Flame Lv. 150]</a>, <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> <a href="https://maplestorywiki.net/w/Intense_Power_Crystal" target="_blank" rel="noreferrer noopener">[Intense Power Crystal]</a>, <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> <a href="https://maplestorywiki.net/w/Bonus_Mystical_Cube#Tradable" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Bonus Mystical Cube]</a>
              </li>
              <li><strong>Chaos Mode Only Rewards: </strong><img src="/images/items/black-rebirth-flame.png" alt="Use Black Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[Black Rebirth Flame]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002008" target="_blank" rel="noreferrer noopener">[Arcane Power 100] Chu Chu Island - Bitty-Bobble Forest 1</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642004" target="_blank" rel="noreferrer noopener">Flyon</a></li>
        <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002014" target="_blank" rel="noreferrer noopener">[Arcane Power 130] Chu Chu Island - Torrent Zone 3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642010" target="_blank" rel="noreferrer noopener">Rhyturtle</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642011" target="_blank" rel="noreferrer noopener">Boss Rhyturtle</a></li>
        <li><img src="/images/map-icons/chu-chu-island.png" alt="MapIcon Chu Chu Island"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450002016" target="_blank" rel="noreferrer noopener">[Arcane Power 160] Chu Chu Island - Mountain's Mouth</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8642012" target="_blank" rel="noreferrer noopener">Crilla</a></li>
        <li><img src="/images/map-icons/yum-yum-island.png" alt="MapIcon YumYum"/> <strong><a href="https://maplestory.wiki/GMS/215/map/450015050" target="_blank" rel="noreferrer noopener">[Arcane Power 130] Yum Yum Island - Mushbud Forest 3 - 6</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/8642051" target="_blank" rel="noreferrer noopener">Bunshroom</a> and <a href="https://maplestory.wiki/GMS/215/mob/8642050" target="_blank" rel="noreferrer noopener">Monkeyrog</a></li>
        <li><img src="/images/map-icons/yum-yum-island.png" alt="MapIcon YumYum"/> <strong><a href="https://maplestory.wiki/GMS/215/map/450015290" target="_blank" rel="noreferrer noopener">[Arcane Power 190] Yum Yum Island - Hidden Illiard Field</a></strong>: <a href="https://maplestory.wiki/GMS/215/mob/8642062" target="_blank" rel="noreferrer noopener">Potent Lytone</a> and <a href="https://maplestory.wiki/GMS/215/mob/8642063" target="_blank" rel="noreferrer noopener">Potent Stonepy</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level220(){
  return(
    <div>
      <ArticleHeaderTwo id="220">Level 220</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong>[Lv. 220] </strong> <a href="https://maplestorywiki.net/w/Category%3ALachelein" target="_blank" rel="noreferrer noopener"><strong>[Daily Quest / Area] Arcane River - Lachelein</strong></a>: Completing the storyline unlocks your third <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbol]
          <ul>
            <li>Completing the storyline also unlocks a Weekly Activity and Daily Quests and reduces the requirements of prior Arcane River dailies & weeklies</li>
            <li>Monsters in this area drop <img src="/images/items/arcane-river-droplet-stone.png" alt="Etc Arcane River Droplet Stone"/> <a href="https://maplestorywiki.net/w/Arcane_River_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Arcane River Droplet Stones]</a> that are used to create <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> <a href="https://maplestorywiki.net/w/Phantasma_Coin" target="_blank" rel="noreferrer noopener">[Phantasma Coins]</a> for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="/images/equipment/arcane-umbra-knight-gloves.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Gear]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong>[Lv. 225] <a href="https://maplestorywiki.net/w/Category:Arcana" target="_blank" rel="noreferrer noopener">[Daily Quest / Area] Arcane River - Arcana</a></strong>: Completing the storyline unlocks your fourth <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbol]
          <ul>
            <li>Completing the storyline also unlocks a Weekly Activity and Daily Quests and reduces the requirements of prior Arcane River dailies & weeklies</li>
            <li>Monsters in this area drop <img src="/images/items/arcane-river-droplet-stone.png" alt="Etc Arcane River Droplet Stone"/> <a href="https://maplestorywiki.net/w/Arcane_River_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Arcane River Droplet Stones]</a> that are used to create <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> <a href="https://maplestorywiki.net/w/Phantasma_Coin" target="_blank" rel="noreferrer noopener">[Phantasma Coins]</a> for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="/images/equipment/arcane-umbra-knight-gloves.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Gear]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong>[Lv. 220] <a href="https://maplestorywiki.net/w/Midnight_Chaser" target="_blank" rel="noreferrer noopener">[Weekly] Midnight Chaser</a></strong>: This activity can only be entered alone. The objective is to locate objects scattered around a series of maps
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/arcane-symbol-lachelein.png" alt="Eqp Arcane Symbol Lachelein"/> [Arcane Symbols]</li></ul>
        </li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong>[Lv. 225] <a href="https://maplestorywiki.net/w/Spirit_Savior" target="_blank" rel="noreferrer noopener">[Weekly] Spirit Savior</a></strong>: This activity can only be entered alone. The objective is to save Rock Spirits that have been kidnapped while avoiding an evil spirit that chases you
          <ul><li><strong>Main Rewards:</strong> <img src="/images/equipment/arcane-symbol-arcana.png" alt="Eqp Arcane Symbol Arcana"/> [Arcane Symbols]</li></ul>
        </li> 
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong>[Lv. 220] <a href="https://maplestorywiki.net/w/Lucid/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Lucid</a></strong>: Accessible from the Boss Contents UI after completing the <img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> Lachelein storyline
          <ul>
            <li>
              <strong>Easy Mode and Above Rewards:</strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal]
            </li>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/butterfly-droplet-stone.png"/> <a href="https://maplestorywiki.net/w/Butterfly_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Butterfly Droplet Stone]</a>, <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/lucidroid.png"/> <a href="https://maplestorywiki.net/w/Lucidroid" target="_blank" rel="noreferrer noopener">[Lucidroid]</a>, <img src="/images/equipment/dreamy-belt.png" alt="Eqp Dreamy Belt"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1132308" target="_blank" rel="noreferrer noopener">[Dreamy Belt]</a>, <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/lucids-canopy-bed.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Lucid's Canopy Bed]</a>, <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li>
              <img src="/images/items/butterfly-droplet-stone.png" alt="Etc Butterfly Droplet Stone"/> are used to combine with <img src="/images/items/arcane-river-droplet-stone.png" alt="Etc Arcane River Droplet Stone"/> [Arcane River Droplet Stones] to create <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> [Phantasma Coins] for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-shoes.png" alt="Eqp Arcane Umbra Knight Shoes"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="/images/equipment/arcane-umbra-knight-gloves.png"/> [<em>(Weapon/Shoe/Glove)</em> Arcane Umbra Gear]
            </li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003310">[Arcane Power 210] Lachelein - Chicken Festival 2</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643004">Gallus</a></li>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003420"> [Arcane Power 210] Lachelein - Revelation Place 3</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643008">Angry Masquerade Citizen</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643009">Insane Masquerade Citizen</a></li>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <a href="https://maplestory.wiki/GMS/210.1.1/map/450003440"><strong>[Arcane Power 210] Lachelein - Occupied Dance Floor 1</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643012">Weakened Dreamkeeper</a></li>
        <li><img src="/images/map-icons/lachelein.png" alt="MapIcon Lachelein"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450003500">[Arcane Power 240] Lachelein - Nightmare Clocktower 1F</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8643000">Dreamkeeper</a></li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005210">[Arcane Power 320] Arcana - Snow Cloud Clearing</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644003">Snow Cloud Spirit</a></li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005220">[Arcane Power 320] Arcana - Thunder Cloud Clearing</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644004">Thunder Cloud Spirit</a></li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005500">[Arcane Power 360] Arcana - Labyrinthine Cavern</a> and</strong> <a href="https://maplestory.wiki/GMS/210.1.1/map/450005412"><strong>Upper Path 2</strong></a>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644008">Anguished Spirit</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644009">Mournful Spirit</a></li>
        <li><img src="/images/map-icons/arcana.png" alt="MapIcon Arcana"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450005430">[Arcane Power 360] Arcana - Cavern Lower Path</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644007">Befuddled Spirit</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level230(){
  return(
    <div>
      <ArticleHeaderTwo id="230">Level 230</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <ul>
        <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230] <a href="https://maplestorywiki.net/w/Category%3AMorass" target="_blank" rel="noreferrer noopener">[Daily Quest / Area] Morass</a></strong>: Completing the storyline unlocks your fifth <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbol]
          <ul>
            <li>Completing the storyline also unlocks a Weekly Activity and Daily Quests and reduces the requirements of prior Arcane River dailies & weeklies</li>
            <li>Monsters in this area drop <img src="/images/items/arcane-river-droplet-stone.png" alt="Etc Arcane River Droplet Stone"/> <a href="https://maplestorywiki.net/w/Arcane_River_Droplet_Stone" target="_blank" rel="noreferrer noopener">[Arcane River Droplet Stones]</a> that are used to create <img src="/images/items/phantasma-coin.png" alt="Etc Phantasma Coin"/> <a href="https://maplestorywiki.net/w/Phantasma_Coin" target="_blank" rel="noreferrer noopener">[Phantasma Coins]</a> for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-gloves.png" alt="/images/equipment/arcane-umbra-knight-gloves.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Gear]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong>[Lv. 230] <a href="https://maplestorywiki.net/w/Ranheim_Defense" target="_blank" rel="noreferrer noopener">[Weekly] Ranheim Defense</a></strong>: This activity can only be entered alone. The objective is to defend a pillar on the middle of the map from invading enemies
          <ul><li><strong>Main Rewards: </strong> <img src="/images/equipment/arcane-symbol-morass.png" alt="Eqp Arcane Symbol Morass"/> [Arcane Symbols]</li></ul>
        </li>
        <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong>[Lv. 235] <a href="https://maplestorywiki.net/w/Category:Esfera" target="_blank" rel="noreferrer noopener">[Daily Quest / Area] Esfera</a></strong>: Completing the storyline unlocks your final <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbol]
          <ul>
            <li>Completing the storyline also unlocks a Weekly Activity and Daily Quests and reduces the requirements of prior Arcane River dailies & weeklies</li>
            <li>Monsters in this area drop <img src="/images/items/stone-origin-droplet.png" alt="Etc Stone Origin Droplet"/> <a href="https://maplestorywiki.net/w/Stone_Origin_Droplet" target="_blank" rel="noreferrer noopener">[Stone Origin Droplet]</a> which are used to create <img src="/images/items/arachno-coin.png" alt="Etc Arachno Coin"/> <a href="https://maplestorywiki.net/w/Arachno_Coin" target="_blank" rel="noreferrer noopener">[Arachno Coins]</a> for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-hat.png" alt="Eqp Arcane Umbra Knight Hat"/> <img src="/images/equipment/arcane-umbra-knight-suit.png" alt="Eqp Arcane Umbra Knight Suit"/> <img src="/images/equipment/arcane-umbra-knight-shoulder.png" alt="Eqp Arcane Umbra Knight Shoulder"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)">[<em>(Hat/Overall/Shoulder/Weapon)</em> Arcane Umbra Gear]</a></li>
          </ul>
        </li>
        <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong>[Lv. 235] <a href="https://maplestorywiki.net/w/Esfera_Guardian" target="_blank" rel="noreferrer noopener">[Weekly] Esfera Guardian</a></strong>: This activity can only be entered alone. The objective is to destroy dimensional gates using a turret to aim and shoot
          <ul><li><strong>Main Rewards</strong>: <img src="/images/equipment/arcane-symbol-esfera.png" alt="Eqp Arcane Symbol Esfera"/> [Arcane Symbols]</li></ul>
        </li>
        <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong> [Lv. 235+] <a href="https://maplestorywiki.net/w/Will" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Will</a></strong>: Acccessible from the Boss Contents UI after completing the <img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> Esfera storyline
          <ul>
            <li><strong>Easy Mode and Above Rewards: </strong> <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame]
              , <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
            </li>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/items/stone-cobweb-droplet.png"/> <a href="https://maplestorywiki.net/w/Stone_Cobweb_Droplet" target="_blank" rel="noreferrer noopener">[Stone Cobweb Droplet]</a>, <img src="/images/equipment/twilight-mark.png"/> <a href="https://maplestorywiki.net/w/Twilight_Mark" target="_blank" rel="noreferrer noopener">[Twilight Mark]</a>
            </li>
            <li><strong>Hard Mode Only Rewards: </strong> <img src="/images/items/wills-cursed-spellbook-selection-box.png"/> <a href="https://maplestorywiki.net/w/Will%27s_Cursed_Spellbook_Selection_Box" target="_blank" rel="noreferrer noopener">[Will's Cursed Spellbook Selection Box]</a>, <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>, <img src="/images/items/mirror-world-nodestone.png" alt="Use Mirror World Nodestone"/><a href="https://maplestorywiki.net/w/Mirror_World_Nodestone" target="_blank" rel="noreferrer noopener">[Mirror World Nodestone]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/wills-web-swing-chair.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Will's Web Swing Chair]</a>
              , <img src="/images/items/chaos-scroll.png"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60%:_Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png"/> <a href="https://maplestorywiki.net/w/Scroll_-_Accessory#Voucher" target="_blank" rel="noreferrer noopener">[(Interactive Worlds Only) Scroll - Accessory Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
            <li><img src="/images/items/stone-cobweb-droplet.png" alt="Etc Stone Cobweb Droplet"/> are used to combine with <img src="/images/items/stone-origin-droplet.png" alt="Etc Stone Origin Droplet"/> [Stone Origin Droplet] to create <img src="/images/items/arachno-coin.png" alt="Etc Arachno Coin"/> [Arachno Coin] for exchanging <img src="/images/equipment/arcane-umbra-saber.png" alt="Eqp Arcane Umbra Saber"/> <img src="/images/equipment/arcane-umbra-knight-hat.png" alt="Eqp Arcane Umbra Knight Hat"/> <img src="/images/equipment/arcane-umbra-knight-suit.png" alt="Eqp Arcane Umbra Knight Suit"/> <img src="/images/equipment/arcane-umbra-knight-shoulder.png" alt="Eqp Arcane Umbra Knight Shoulder"/> [(Hat/Overall/Shoulder/Weapon) Arcane Umbra Gear]</li>
         </ul> 
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450006210" target="_blank" rel="noreferrer noopener">[Arcane Power 480] Morass - Shadowdance Hall Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644405" target="_blank" rel="noreferrer noopener">Blue Shadow</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644405" target="_blank" rel="noreferrer noopener">Red Shadow</a></li>
        <li><img src="/images/map-icons/morass.png" alt="MapIcon Morass"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450006410" target="_blank" rel="noreferrer noopener">[Arcane Power 520] Morass - That Day in Trueffet Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644411" target="_blank" rel="noreferrer noopener">Thralled Wizard</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644412" target="_blank" rel="noreferrer noopener">Thralled Archer</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644410" target="_blank" rel="noreferrer noopener">Thralled Warhammer Knight</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644409" target="_blank" rel="noreferrer noopener">Thralled Guard</a></li>
        <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450007110" target="_blank" rel="noreferrer noopener">[Arcane Power 600] Esfera - Mirror-touched Sea Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644504" target="_blank" rel="noreferrer noopener">Aranya</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644505" target="_blank" rel="noreferrer noopener">Aranea</a></li>
        <li><img src="/images/map-icons/esfera.png" alt="MapIcon Esfera"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450007210" target="_blank" rel="noreferrer noopener">[Arcane Power 640] Esfera - Radiant Temple Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/map/450007210" target="_blank" rel="noreferrer noopener">Light Executor</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644509" target="_blank" rel="noreferrer noopener">Dark Executor</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level240(){
  return(
    <div>
      <ArticleHeaderTwo id="240">Level 240</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/sellas.png" alt="MapIcon Sellas"/> <strong>[Lv. 240] <a href="https://maplestorywiki.net/w/Category:Sellas" target="_blank" rel="noreferrer noopener">[Area] Sellas</a></strong>: Accessible from Esfera
          <ul><li><strong>Main Reward</strong>: <img src="/images/items/arcane-symbol-selector.png" alt="Arcane Symbol Selector Coupons"/><a href="https://maplestory.wiki/GMS/214/item/2437750" target="_blank" rel="noreferrer noopener">[Arcane Symbol Selector Coupon]</a>, <img src="/images/equipment/explorer-diving-helmet.png" alt="Eqp Explorer Diving Helmet"/> <a href="https://maplestory.wiki/GMS/219/item/1005599" target="_blank" rel="noreferrer noopener">[Explorer Diving Helmet]</a>, <img src="/images/equipment/astral-whale.png" alt="Eqp Astral Whale"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong>[Lv. 245] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Category%3AMoonbridge" target="_blank">[Area] Moonbridge</a></strong>: Completing the storyline here unlocks Daily Quests
          <ul>
            <li><strong>Main Reward</strong>: <img src="/images/equipment/void-vanquisher.png" alt="Eqp Void Vanquisher"/> [Medal]</li>
            <li>Daily quests reward <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination] that are used to create <img src="/images/items/fragment-of-destiny.png" alt="Etc Fragment of Destiny"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Fragment_of_Destiny" target="_blank">[Fragment of Destiny]</a> required to enter into the Black Mage</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong>[Lv. 245+] <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Giant_Monster_Gloom" target="_blank"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Gloom</a></strong>: Accessible from the Boss Contents UI after completing the Moonbridge storyline
          <ul>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Estella_Earrings" target="_blank">[Estella Earrings]</a>, <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Spark_of_Determination" target="_blank">[Spark of Determination]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace]
            </li>
            <li><strong>Chaos Mode Only Rewards:</strong> <img src="/images/equipment/endless-terror.png" alt="Eqp Endless Terror"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/218/item/1113306" target="_blank">[Endless Terror]</a>, <img src="/images/items/gloom-dark-bean-bag.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Gloom Dark Bean Bag]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
      </ul>
      <hr/>
      <p>Some notable training maps are:</p>
      <ul>
        <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450009110" target="_blank" rel="noreferrer noopener">[Arcane Power 670] Moonbridge - Last Horizon Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644615" target="_blank" rel="noreferrer noopener">Soot Talon</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644614" target="_blank" rel="noreferrer noopener">Soot Beast</a></li>
        <li><img src="/images/map-icons/moonbridge.png" alt="MapIcon Moonbridge"/> <strong><a href="https://maplestory.wiki/GMS/210.1.1/map/450009310" target="_blank" rel="noreferrer noopener">[Arcane Power 730] Moonbridge - Void Current Maps</a></strong>: <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644619" target="_blank" rel="noreferrer noopener">Burst Glare</a> and <a href="https://maplestory.wiki/GMS/210.1.1/mob/8644618" target="_blank" rel="noreferrer noopener">Crushing Glare</a></li>
      </ul>
      <hr/>
    </div>
  );
};

function Level250(){
  return(
    <div>
      <ArticleHeaderTwo id="250">Level 250+</ArticleHeaderTwo>
      <h3>Content Available:</h3>
      <hr/>
      <ul>
        <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon Labyrinth of Suffering"/> <strong>[Lv. 250] <a href="https://maplestorywiki.net/w/Category:Labyrinth_of_Suffering" target="_blank" rel="noreferrer noopener">[Area] Labyrinth of Suffering</a></strong>: Completing the storyline here unlocks Daily Quests
          <ul>
            <li><strong>Main Reward</strong>: <img src="/images/equipment/eternal-light.png" alt="Eqp Eternal Light"/> [Medal]</li>
            <li>Daily quests reward <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination] that are used to create <img src="/images/items/fragment-of-destiny.png" alt="Etc Fragment of Destiny"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Fragment_of_Destiny" target="_blank">[Fragment of Destiny]</a> required to enter into the Black Mage</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong>[Lv. 255] <a href="https://maplestorywiki.net/w/Category:Limina" target="_blank" rel="noreferrer noopener">[Area] Limina</a></strong>: Completing the storyline here unlocks Daily Quests
          <ul>
            <li><strong>Main Reward</strong>: <img src="/images/equipment/defying-destiny.png" alt="Eqp Defying Destiny"/> [Medal]</li>
            <li>Daily quests reward <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination] that are used to create <img src="/images/items/fragment-of-destiny.png" alt="Etc Fragment of Destiny"/> <a rel="noreferrer noopener" href="https://maplestorywiki.net/w/Fragment_of_Destiny" target="_blank">[Fragment of Destiny]</a> required to enter into the Black Mage</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <strong>[Lv. 260] <a href="https://maplestorywiki.net/w/Category:Cernium" target="_blank" rel="noreferrer noopener">[Area] Cernium</a></strong>: Completing the storyline here unlocks your first <img src="/images/equipment/sacred-symbol-cernium.png" alt="Eqp Sacred Power"/> Sacred Symbol
          <ul>
            <li><strong>Main Reward:</strong> <img src="/images/equipment/waiting-for-the-swords-owner.png" alt="Eqp Waiting for the Sword's Owner"/> [Medal]</li>
            <li>Completing the storyline also unlocks Daily Quests that reward <img src="/images/equipment/sacred-symbol-cernium.png" alt="Eqp Sacred Power"/> [Sacred Symbol]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <strong>[Lv. 260] <a href="https://maplestorywiki.net/w/Category:Burning_Cernium" target="_blank" rel="noreferrer noopener">[Area] Burning Cernium<br/></a></strong>
          <ul><li><strong>Main Reward:</strong> <img src="/images/equipment/salvation-in-your-own-hands.png" alt="Eqp Salvation in Your Own Hands"/> [Medal]</li></ul>
        </li>
        <li><img src="/images/map-icons/hotel-arcus.png"/> <strong>[Lv. 265] <a href="https://maplestorywiki.net/w/Category:Hotel_Arcus" target="_blank" rel="noreferrer noopener">[Area] Hotel Arcus</a></strong>: Completing the storyline here unlocks your second <img src="/images/equipment/sacred-symbol-arcus.png"/> Sacred Symbol
          <ul>
            <li><strong>Main Reward:</strong> <img src="/images/equipment/slow-and-steady.png" alt="Eqp Slow and Steady"/> [Medal]</li>
            <li>Completing the storyline also unlocks Daily Quests that reward <img src="/images/equipment/sacred-symbol-arcus.png"/> [Sacred Symbol]</li>
          </ul>
        </li>
        <li><img src="/images/map-icons/labyrinth-of-suffering.png" alt="MapIcon Labyrinth of Suffering"/> <strong> [Lv. 250+] <a href="https://maplestorywiki.net/w/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Verus Hilla</a></strong>: Accessible from the Boss Contents UI after completing the Labyrinth of Suffering storyline
          <ul>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Daybreak Pendant]</a>, <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
                , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>
            </li>
            <li>
              <strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/source-of-suffering.png" alt="Eqp Source of Suffering"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1122430" target="_blank" rel="noreferrer noopener">[Source of Suffering]</a>, <img src="/images/items/shadow-of-annihilation.png" alt="Etc Shadow of Annihilation"/> <a href="https://maplestorywiki.net/w/Shadow_of_Annihilation" target="_blank" rel="noreferrer noopener">[Shadow of Annihilation]</a>, <img src="/images/items/soul-candle.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Soul Candle]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>
              , <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
        <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong>[Lv. 255+] <a href="https://maplestorywiki.net/w/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener"><span style={{color: '#ff9900'}}>[Challenging Boss]</span> Darknell</a></strong>: Accessible from the Boss Contents UI after completing the storyline in Limina
          <ul>
            <li><strong>Normal Mode and Above Rewards:</strong> <img src="/images/equipment/estella-earrings.png" alt="Eqp Estella Earrings"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noreferrer noopener">[Estella Earrings]</a>, <img src="/images/items/spark-of-determination.png" alt="Etc Spark of Determination"/> [Spark of Determination], <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
                , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube]
            </li>
            <li><strong>Hard Mode Only Rewards:</strong> <img src="/images/equipment/commanding-force-earring.png" alt="Eqp Commanding Force Earrings"/> <a href="https://maplestory.wiki/GMS/218/item/1032316" target="_blank" rel="noreferrer noopener">[Commanding Force Earrings]</a>, <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>, <img src="/images/items/darknells-helmet-decoration.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Darknell's Helmet Decoration]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
        <li><img src="/images/map-icons/limina.png" alt="MapIcon Limen"/> <strong>[Lv. 255+] <a href="https://maplestorywiki.net/w/Black_Mage/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Black Mage</a></strong>: <img src="/images/items/fragment-of-destiny.png" alt="Etc Fragment of Destiny"/> [Fragment of Destiny] is required to enter and fight the Black Mage
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/sealed-genesis-weapon-box.png" alt="Use Sealed Genesis Weapon Box"/> <a href="https://maplestorywiki.net/w/Sealed_Genesis_Weapon_Box" target="_blank" rel="noreferrer noopener">[Sealed Genesis Weapon Box]</a>, <img src="/images/equipment/genesis-badge.png" alt="Eqp Genesis Badge"/> <a href="https://maplestory.wiki/GMS/210.1.1/item/1182285" target="_blank" rel="noreferrer noopener">[Genesis Badge]</a>, <img src="/images/items/arcane-umbra-box.png"/> <a href="https://maplestorywiki.net/w/Equipment_Set/Arcane_Umbra_Set_(Warrior)" target="_blank" rel="noreferrer noopener">[Arcane Umbra Armor/Weapon Box]</a>, <img src="/images/items/black-mages-mirror.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener noreferrer">[Black Mage's Mirror]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>
              , <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>, <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>
              , <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
        <li><img src="/images/map-icons/cernium.png" alt="MapIcon Cernium"/> <strong>[Lv. 260+] <a href="https://maplestorywiki.net/w/Seren/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Seren</a></strong>: Accessible from the Boss Contents UI after completing Burning Cernium storyline<br/>
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/mitras-rage-selection-box.png" alt="Use Mitra's Rage Selection Box"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Rage_Selection_Box" target="_blank" rel="noopener">[Mitra's Rage Selection Box]</a>, <img src="/images/items/mitras-nodestone.png"/> <a href="https://maplestorywiki.net/w/Mitra%27s_Nodestone" target="_blank" rel="noopener">[Mitra's Nodestone]</a>, <img src="/images/equipment/daybreak-pendant.png" alt="Eqp Daybreak Pendant"/> <a href="https://maplestorywiki.net/w/Daybreak_Pendant" target="_blank" rel="noopener">[Daybreak Pendant]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>
              , <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>, <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
        <li><img src="/images/map-icons/karote.png" alt="MapIcon Kalos"/> <strong>[Lv. 265+] <a href="https://maplestorywiki.net/w/Kalos/Monster" target="_blank" rel="noreferrer noopener"> <span style={{color: '#ff9900'}}>[Challenging Boss]</span> Kalos</a></strong>: Accessible from the Boss Contents UI after completing the <a href="https://maplestorywiki.net/w/Quests/241/(Karote)_Kalos_the_Guardian" target="_blank" rel="noopener noreferrer">[Karote] Kalos the Guardian</a> questline and defeating Story Mode Kalos
          <ul>
            <li><strong>Main Rewards:</strong> <img src="/images/items/kalos-residual-determination.png" alt="Use Kalos's Residual Determination"/> <a href="https://maplestorywiki.net/w/Kalos%27s_Residual_Determination" target="_blank" rel="noopener">[Kalos's Residual Determination]</a>, <img src="/images/items/kalos-ceiling-fan.png"/> <a href="https://maplestorywiki.net/w/Home#Trophy" target="_blank" rel="noopener">[Kalos Ceiling Fan]</a>, <img src="/images/items/primal-essence.png" alt="Etc Primal Essence"/> <a href="https://maplestorywiki.net/w/Primal_Essence" target="_blank" rel="noopener noreferrer">[Primal Essence]</a>, <img src="/images/items/sparkling-blue-star-potion.png" alt="Use Sparkling Blue Star Potion"/> <a href="https://maplestorywiki.net/w/Sparkling_Blue_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Blue Star Potion]</a>, <img src="/images/items/sparkling-red-star-potion.png"/> <a href="https://maplestorywiki.net/w/Sparkling_Red_Star_Potion" target="_blank" rel="noreferrer noopener">[Sparkling Red Star Potion]</a>, <img src="/images/items/small-exp-accumulation-potion.png" alt="Use Small EXP Accumulation Potion"/> <a href="https://maplestorywiki.net/w/Small_EXP_Accumulation_Potion" target="_blank" rel="noopener noreferrer">[Small EXP Accumulation Potion]</a>, <img src=" /images/items/power-elixir.png" alt="Use Power Elixir"/> [Power Elixir], <img src="/images/items/rebirth-flame-150.png" alt="Use Rebirth Flame Lv. 150"/> [Lv. 150 Rebirth Flame], <img src="/images/items/powerful-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Powerful_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Powerful Rebirth Flame]</a>, <img src="/images/items/eternal-rebirth-flame.png" alt="Use Powerful Rebirth Flame"/> <a href="https://maplestorywiki.net/w/Eternal_Rebirth_Flame#Tradable.2C_Time_Limited" target="_blank" rel="noreferrer noopener">[Eternal Rebirth Flame]</a>, <img src="/images/items/black-rebirth-flame.png"/> <a href="https://maplestorywiki.net/w/Black_Rebirth_Flame#Tradable,_Time_Limited" target="_blank" rel="noreferrer noopener">[Black Rebirth Flame]</a>
              , <img src="/images/items/soul-shard.png" alt="Use Soul Shard"/> [Soul Shard], <img src="/images/items/mystical-cube.png" alt="Use Mystical Cube"/> [Mystical Cube], <img src="/images/items/50-bonus-exp-coupon-voucher.png" alt="Use 50% Bonus EXP Coupon Voucher"/> <a href="https://maplestorywiki.net/w/Bonus_EXP_Coupon#Voucher" target="_blank" rel="noopener noreferrer">[50% EXP Coupon Voucher]</a>, <img src="/images/items/intense-power-crystal.png" alt="Etc Intense Power Crystal"/> [Intense Power Crystal], <img src="/images/items/spell-trace.png" alt="Etc Spell Trace"/> [Spell Trace], <img src="/images/items/bonus-mystical-cube.png" alt="Use Bonus Mystical Cube"/> [(Interactive Worlds Only) Bonus Mystical Cube], <img src="/images/items/premium-scroll-accessory-coupon.png" alt="Use Premium Scroll Accessory Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Accessory#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Accessory Coupon]</a>, <img src="/images/items/premium-scroll-pet-equipment-coupon.png" alt="Use Premium Scroll Pet Equipment Coupon"/> <a href="https://maplestorywiki.net/w/Premium_Scroll_-_Pet_Equipment#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Premium Scroll - Pet Equipment Coupon]</a>, <img src="/images/items/magical-scroll-weapon-coupon.png" alt="Use Magical Scroll - Weapon Coupon"/> <a href="https://maplestorywiki.net/w/Magical_Scroll#Voucher" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Magical Scroll - Weapon Coupon]</a>
              , <img src="/images/items/incredible-chaos-scroll-of-goodness.png" alt="Use Incredible Chaos Scroll of Goodness 60%"/> <a href="https://maplestorywiki.net/w/Incredible_Chaos_Scroll_of_Goodness#60.25:_Tradable.2C_Time_Limited" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Incredible Chaos Scroll of Goodness 60%]</a>, <img src="/images/items/unrelenting-flame.png" alt="Etc Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-flame.png" alt="Etc Forever Unrelenting Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Flame]</a>, <img src="/images/items/forever-unrelenting-black-flame.png" alt="Etc Forever Unrelenting Black Flame"/> <a href="https://maplestorywiki.net/w/Forever_Unrelenting_Black_Flame" target="_blank" rel="noopener noreferrer">[(Interactive Worlds Only) Forever Unrelenting Black Flame]</a>
            </li>
          </ul>
        </li>
      </ul>
      <hr/>
    </div>
  );
};

export default ContentGuide;
