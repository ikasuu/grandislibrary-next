import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, BannerAdThree, VideoAd, StickyAd } from '../../components/Ads';

function KeyboardShortcuts() {
    return (
        <ContentPage>
            <Head>
                <title>Keyboard Shortcuts | MapleStory | Grandis Library</title>
                <meta content={"An explanation of all the different UIs accessible from the Keyboard Shortcuts and how to access each one such as Quests, Skills, Inventory, Equipment, and more."} name="description"/>
            </Head>
            <ContentTitle>Keyboard Shortcuts</ContentTitle>
            <StickyAd/>
            <h3 id="top">Quick Jumps</h3>
            <ul>
                <li><Link smooth href="#quickslots" scroll>Change Quickslots</Link></li>
                <li><Link smooth href="#quest-log" scroll>Quest Log</Link></li>
                <li><Link smooth href="#world-map" scroll>World Map</Link></li>
                <li><Link smooth href="#equipment" scroll>Equipment</Link></li>
                <li><Link smooth href="#user-list" scroll>Friends, Party, Boss Party</Link></li>
                <li><Link smooth href="#item-pot" scroll>Item Pot</Link></li>
                <li><Link smooth href="#maple-guide" scroll>Maple Guide</Link></li>
                <li><Link smooth href="#maple-planner" scroll>Maple Planner</Link></li>
                <li><Link smooth href="#inventory" scroll>Item Inventory</Link></li>
                <li><Link smooth href="#char-info" scroll>Character Info</Link></li>
                <li><Link smooth href="#guild" scroll>Guild</Link></li>
                <li><Link smooth href="#whisper" scroll>Whisper</Link></li>
                <li><Link smooth href="#skill" scroll>Skill</Link></li>
                <li><Link smooth href="#notifier" scroll>Notifier</Link></li>
                <li><Link smooth href="#medals" scroll>Medals</Link></li>
                <li><Link smooth href="#maple-chat" scroll>Maple Chat</Link></li>
                <li><Link smooth href="#events" scroll>Events</Link></li>
                <li><Link smooth href="#professions" scroll>Professions</Link></li>
                <li><Link smooth href="#minimap" scroll>Minimap</Link></li>
                <li><Link smooth href="#soul-weapon" scroll>Soul Weapon</Link></li>
                <li><Link smooth href="#battle-analysis" scroll>Battle Analysis</Link></li>
                <li><Link smooth href="#enhance" scroll>Enhance Equipment</Link></li>
                <li><Link smooth href="#monster-collection" scroll>Monster Collection</Link></li>
                <li><Link smooth href="#legion" scroll>Manage Legion</Link></li>
                <li><Link smooth href="#maple-news" scroll>Maple News</Link></li>
                <li><Link smooth href="#picture-mode" scroll>Picture Mode</Link></li>
                <li><Link smooth href="#mute" scroll>Mute</Link></li>
                <li><Link smooth href="#maple-relay" scroll>Maple Relay</Link></li>
                <li><Link smooth href="#maple-achievement" scroll>Maple Achievement</Link></li>
                <li><Link smooth href="#familiar" scroll>Familiar</Link></li>
                <li><Link smooth href="#emoticon" scroll>Emoticons</Link></li>
            </ul>
            <VideoAd/>
            <IntroKeyboardShortcuts/>
            <ChangeQuickslots/>
            <QuestLog/>
            <WorldMap/>
            <Equipment/>
            <BannerAdOne/>
            <FriendsPartyBoss/>
            <ItemPot/>
            <MapleGuide/>
            <MaplePlanner/>
            <Items/>
            <CharInfo/>
            <BannerAdTwo/>
            <Guild/>
            <Whisper/>
            <Skill/>
            <Notifier/>
            <Medals/>
            <MapleChat/>
            <BannerAdThree/>
            <Events/>
            <Professions/>
            <Minimap/>
            <SoulWeapon/>
            <BattleAnalysis/>
            <EnhanceEquipment/>
            <MonsterCollection/>
            <Legion/>
            <MapleNews/>
            <PictureMode/>
            <Mute/>
            <MapleRelay/>
            <MapleAchievement/>
            <Familiar/>
            <Emoticon/>
        </ContentPage>
    )
}

function IntroKeyboardShortcuts(){
    return(
        <div>
            <img className="repository-image" src="/images/info/keyboard-shortcuts.png" alt="Keyboard Shortcuts"/>
            <p>By pressing 'F11' by default will bring up the Keyboard Shortcuts. It can also be accessed by pressing 'ESC' by default and navigating to "Key Bindings". Here you can move around and place your Skills and usable items into any of the open slots. You can also Right-Click Key Slots to remove an item from a Key Slot</p>
            <p>Up to 3 keyboard presets can be created and applied by pressing the buttons located in the top right corner</p>
        </div>
    )
}

function ChangeQuickslots(){
    return(
        <div>
            <h3 id="quickslots">Change Quickslots</h3>
            <img className="repository-image" src="/images/info/quickslots.png" alt="Quickslots"/>
            <p>Pressing the "Change Quickslots" button on the bottom left, you can change the position of each Key Slot in the bottom right Quickslots</p>
            <p>First, click on the desired Key Slot and then pressing any Key to change what the Key Slot displays</p>
        </div>
    )
}

function QuestLog(){
    return(
        <div>
            <h3 id="quest-log">Q - Quest Log</h3>
            <img className="repository-image" src="/images/info/quest-log.png" alt="Quest Log"/>
            <p>In the Quest Log, all types of quests from Available, In Progress, and Completed quests can be viewed</p>
            <p>When viewing quests in the Available tab, there are two buttons, one to show quests for your current location and another to filter and display only quests within your level range. You can also search for quests at the top using a quest's name</p>
        </div>
    )
}

function WorldMap(){
    return(
        <div>
            <h3 id="world-map">W - World Map</h3>
            <img className="repository-image" src="/images/info/world-map-ui.png" alt="World Map"/>
            <p>Here you can view all areas in the game that have world maps</p>
            <p>At the top left corner, you can view the 3 major collections of areas, Maple World, Grandis, and Arcane River. Maple World and Grandis are the two dimensions and Arcane River is an Lv. 200 area. Right beside it, you can select a specific region within that area</p>
            <p>You can Left-Click into specific areas in the World Map and also Right-Click to expand and go backward</p>
            <p>On the right-hand side, you have a "Begin Navigation" button where clicking on one of the dots on the World Map and then clicking the button, an arrow will appear above your head that guides you to that map. You can also double-click to start a navigation or if you have a <img src="/images/items/hyper-teleport-rock.png" alt="Cash Hyper Teleport Rock"/> <a href="https://maplestorywiki.net/w/Hyper_Teleport_Rock" target="_blank" rel="noopener noreferrer">Hyper Teleport Rock</a>, you will instantly teleport to that map. On certain maps, you will also see an "Auto Pilot" button. Auto Pilot is a novelty feature where if you are in an area that supports it, you can click on one of the dots and you will slowly fly to that area. However, you need to buy a permit for certain areas. Lastly, there is also an "Open Search Window" button that toggles a search bar on the right. The search bar allows you to search for an NPC, Monster or Map and direct you to the map the item is located in</p>
        </div>
    )
}

function Equipment(){
    return(
        <div>
            <h3 id="equipment">E - Equipment</h3>
            <img className="repository-image" src="/images/info/equipment-ui.png" alt="Equipment UI"/>
            <p>Here you can view and access the equipment you have equipped. As well, you can visually show/hide your Medal and Title that you have equipped by clicking the boxes at the bottom</p>
            <p><img className="repository-image" src="/images/info/equipment-visual-effect.png" alt="Effect"/><img className="repository-image" src="/images/info/beauty-salon.png" alt="Beauty Salon"/></p>
            <p>On the bottom left corner, there is a button labelled "Effect", here you can right-click equipment that has visual effects to toggle them ON/OFF. Beside the "Effect" button is the "Salon" button where you can manage all of your Hairstyles and Facestyles. In the Beauty Salon, you can save hair or face and change back to them later. To gain more slots you will need to buy <img src="/images/items/beauty-salon-hair-slot-coupon.png" alt="Cash Beauty Salon Hair Slot Coupon"/><img src="/images/items/beauty-salon-face-slot-coupon.png" alt="Cash Beauty Salon Face Slot Coupon"/> Beauty Salon Slot Coupons from the Rewards Point Shop (in the Cash Shop). In the Damage Skin window, damage skins can be saved and applied from here</p>
            <p>Additionally, up to 3 equipment presets can be applied to efficiently swap between equipment</p>
            <h4>Equip Tab</h4>
            <p><img className="repository-image" src="/images/info/arcane-force-ui.png" alt="Arcane Power"/><img className="repository-image" src="/images/info/commerci-vessel-ui.png" alt="Vessel"/></p>
            <p>In the Equip Tab, you can see all the gear that provides stats to your character</p>
            <p>The "Arcane Equipment" window will appear once you have reached Lv. 200 and obtained your first Arcane Symbol. At the bottom right, there will be a "Vessel" button if you have gained access to Commerci Trade Voyages</p>
            <h4>Cash Tab</h4>
            <img className="repository-image" src="/images/info/equipment-cash-tab.png" alt="Cash Tab"/>
            <p>In the Cash Tab, you can see all Cash Item gear that covers over your character's regular equipment. Cash clothing are cosmetic items and do not alter the stats of your main equipment</p>
            <p>If you have a Cash Weapon equipped, you can change visually how the weapon is held at the bottom of the UI</p>
            <p>Additionally, certain Cash equipment can provide stats however they may not match your style. Outfit Presets can be apply up to 3 outfits which override the appearance however keeps the stats of the Cash equipment currently equipped</p>
            <h4>Pet Tab</h4>
            <img className="repository-image" src="/images/info/equipment-pet-tab.png" alt="Pet Tab"/>
            <p>In the Pet Tab, you can manage all of your active pets. Here you can also manage your pet skills if your pet has any</p>
            <h4>Android Tab</h4>
            <img className="repository-image" src="/images/info/equipment-android-tab.png" alt="Android Tab"/>
            <p>In the Android Tab, if you have an Android active, you can dress it up with some Cash clothing. You will also see on the top right, there is a "Shop" button. For Androids with the Shop function, you can access them as NPC Vendors</p>
            <h4>Other Tabs</h4>
            <img className="repository-image" src="/images/info/equipment-other-tab.png" alt="Other Equipment Tab"/>
            <p>Some classes have an additional tab such as Evan or Mechanic have extra equipment that they can equip</p>
        </div>
    )
}

function FriendsPartyBoss(){
    return(
        <div>
            <h3 id="user-list">R - Friends, P - Party, T - Boss Party</h3>
            <img className="repository-image" src="/images/info/friend-list-ui.png" alt="Friend Tab"/>
            <p>Pressing 'R', 'P', and 'T' will bring up the Maple User List UI where you can access your Friends List, Party, Boss Matchmaking System, and your Blacklist</p>
        </div>

    )
}

function ItemPot(){
    return(
        <div>
            <h3 id="item-pot">Y - Item Pot</h3>
            <img className="repository-image" src="/images/info/item-pot-ui.png" alt="Item Pot"/>
            <p>The <a href="https://strategywiki.org/wiki/MapleStory/Item_Pot" target="_blank" rel="noopener noreferrer">Item Pot</a> is a feature from the <a href="https://maplestorywiki.net/w/MapleStory:_Chaos" target="_blank" rel="noopener noreferrer">Chaos Update</a> where you place a special item <img src="/images/items/gemstone-imp.png" alt="Use Gemstone Imp"/> <img src="/images/items/orange-imp.png" alt="Use Orange Imp"/> <img src="/images/items/alarm-clock.png" alt="Use Alarm Clock"/> <img src="/images/items/jukebox.png" alt="Use Jukebox"/> <img src="/images/items/pounding-heart.png" alt="Use Pounding Heart"/> <img src="/images/items/triangular-rice-ball.png" alt="Use Triangular Rice Ball"/> and let it grow and harvest for some rewards</p>
        </div>
    )
}

function MapleGuide(){
    return(
        <div>
            <h3 id="maple-guide">U - Maple Guide</h3>
            <p><img className="repository-image" src="/images/info/maple-guide-expanded.png" alt="Maple Guide Expanded"/><img className="repository-image" src="/images/info/maple-guide-ui.png" alt="Maple Guide"/></p>
            <p>Unlocked at Lv. 30, the Maple Guide lists Recommended Quests, Content and Hunting Zones for your level range. Pressing the Maple Guide Key while the Maple Guide is open will expand it into a larger window</p>
            <p>In the expanded window, all the available content for all levels are displayed. Upon reaching the level required or higher, the content listed can be teleported to directly. Note, the "Main Rewards" listed when clicking into content are not guaranteed but instead show possible rewards</p>
            <p>In the "Boss Content" tab, major bosses are displayed. In the "Special Content" tab, content for Story-type content, Progression-type content, Competitive-type content and Arcane River are displayed</p>
        </div>
    )
}

function MaplePlanner(){
    return(
        <div>
            <h3 id="maple-planner">Maple Guide</h3>
            <img className="repository-image" src="/images/info/maple-planner-ui.png" alt="Maple Planner"/>
            <p>The Maple Planner provides a convenient way to organize your daily and weekly content. By pressing on the Gear icon beside each category, content can be added to the Maple Planner. Content that is added like bosses can be directly teleported. Content that is added like daily or weekly quests can be accepted and completed directly</p>
            <p>The Maple Planner can be accessed by clicking the Book icon on the left-side of the screen or by assigning a Key Slot</p>
        </div>
    )
}

function Items(){
    return(
        <div>
            <h3 id="inventory">I - Item Inventory</h3>
            <img className="repository-image" src="/images/info/inventory-expanded-ui.png" alt="Expanded Inventory"/>
            <p>Here you will see all the items you have obtained and as well as how much Mesos and Maple Points you have. Note, Maple Points are shared within your whole account.</p>
            <img className="repository-image" src="/images/info/inventory-buttons.png" alt="Inventory bottom"/>
            <p>At the bottom, there are buttons for organizing your inventory and expanding the view</p>
            <p>Additionally, there are other buttons, the first three icons except for the Magnifying Glass are related to Professions. The gear icon is for extracting your equipment into crafting items like <img src="/images/items/basic-item-crystal.png" alt="Etc Basic Item Crystal"/><img src="/images/items/intermediate-item-crystal.png" alt="Etc Intermediate Item Crystal"/><img src="/images/items/advanced-item-crystal.png" alt="Etc Advanced Item Crystal"/> Item Crystals. The flask icon is for fusing two of the same equipment together to form a new one with different stats. The heart icon is for your Item Pot. The magnifying glass icon is for revealing an equipment's Potential. You will notice that certain equipment will have a pink box around them, this means that they have a Hidden Potential that needs to be revealed. The blue hammer icon is for Transfer Hammer and the red hammer is for Spell Tracing and Star Forcing gear</p>

        </div>
    )
}

function Guild(){
    return(
        <div>
            <h3 id="guild">G - Guild</h3>
            <img className="repository-image" src="/images/info/guild-ui.png" alt="Guild UI"/>
            <p>Here you can access and manage Guild features</p>
            <p>Pressing the "Join Guild" button will bring up a list of guilds that are currently recruiting. You can also manage your Guild requests here. At the bottom, there is also a search button that brings up a search window</p>
        </div>
    )
}

function Whisper(){
    return(
        <div>
            <h3 id="whisper">H - Whisper</h3>
            <img className="repository-image" src="/images/info/whisper-ui.png" alt="Whisper"/>
            <p>This will bring up a window where you can type in the name of a Character you would like to whisper. Whispering a player will privately message them</p>
        </div>
    )
}

function Skill(){
    return(
        <div>
            <h3 id="skill">K - Skill</h3>
            <img className="repository-image" src="/images/info/skill-expanded-ui.png" alt="Skill UI"/>
            <p>Here you can manage all of your class' Skills. You can also drag Active Skills into an empty Key Slot in the Keyboard Shortcuts</p>
            <p>On the bottom left, there is a button that opens up your Hyper Skills window but can only be used Lv. 140+. On the right-hand side, you will see a "Guild Skill" button which will bring up your Guild UI. There is also a "Mount" button that opens up your mount collection. Lastly, there is the "Macro" button which opens up the Macro window. Here you can assign up to 3 skills to a Marco to be used consecutively. You can also name your Macro and make your character shout the Macro name</p>
        </div>
    )
}

function Notifier(){
    return(
        <div>
            <h3 id="notifier">L - Notifier</h3>
            <img className="repository-image" src="/images/info/quest-helper.png" alt="Notifier"/>
            <p>Pressing this Key will toggle a window on screen that provides information on some currently active quests</p>
        </div>
    )
}

function Medals(){
    return(
        <div>
            <h3 id="medals">; Medals</h3>
            <img className="repository-image" src="/images/info/medals-ui.png" alt="Medals"/>
            <p>Pressing this Key will open a UI to manage all of the Medals that you have obtained on your character. There are a few special Medals that do not get registered to the Medal UI but most are rare and unobtainable</p>
            <p>At the bottom, you can sort your medals by name or by time. On the bottom right, there is a "Reissue" button that allows you to reobtain any selected Medal but consumes some Mesos. You can also double-click a Medal to reissue</p>
        </div>
    )
}

function MapleChat(){
    return(
        <div>
            <h3 id="maple-chat">C - Maple Chat</h3>
            <img className="repository-image" src="/images/info/maple-chat-ui.png" alt="Maple Chat"/>
            <p>Here you can invite players to chat with. There are also emotes available at the bottom left on the chat bar. For more info, you can press the '?' button on the top right. As well, you can minimize and expand the window by pressing the '+' and '-' buttons on the top right</p>
        </div>
    )
}

function Events(){
    return(
        <div>
            <h3 id="events">V - Events</h3>
            <img className="repository-image" src="/images/info/event-list-ui.png" alt="Events"/>
            <p>Pressing the Key will open a UI that displays all current and upcoming events and their start and end date times</p>
        </div>
    )
}

function Professions(){
    return(
        <div>
            <h3 id="professions">B - Professions</h3>
            <img className="repository-image" src="/images/info/professions-ui.png" alt="Professions"/>
            <p>Pressing the Key will open the Profressions UI where you can view your Traits stats and any Professions you have. On the top right, you will also see a button called "Ardentmill" which will teleport you to the Professions town, Ardentmill. The skill can only be used Lv. 35+ and has a 30 min cooldown</p>
            <p>In the "My Professions" tab, you can see your Traits, current Fatigue, Mastery EXP &amp; Level, and enemies required to defeat to enter the harvesting area</p>
        </div>
    )
}

function Minimap(){
    return(
        <div>
            <h3 id="minimap">M - Minimap</h3>
            <img className="repository-image" src="/images/info/minimap.png" alt="Minimap"/>
            <p>Pressing this Key will adjust the size of your minimap</p>
        </div>
    )
}

function CharInfo(){
    return(
        <div>
            <h3 id="char-info">S - Character Info</h3>
            <img className="repository-image" src="/images/info/character-info-ui.png" alt="Char Info"/>
            <p>Upon opening the UI and pressing the "Detail" button displays a window to view and manage your character's stats, allocate points for your Hyper Stats, and manage your Inner Ability. Below "Combat Power" is an arrow button on the right-side that opens the Auto Assign AP window</p>
            <p>Additionally, you can double-click a character to view their Character Info. When viewing other people's characters, information about their stat, equipment, skills, and cosmetics will be displayed</p>
        </div>
    )
}

function SoulWeapon(){
    return(
        <div>
            <h3 id="soul-weapon">Soul Weapon</h3>
            <img className="repository-image" src="/images/info/soul-weapon-ui.png" alt="Soul Weapon"/>
            <p>If you have a Soul Weapon equipped, this Key will toggle the Soul Weapon UI where you can manage Soul Weapon features</p>
        </div>
    )
}

function BattleAnalysis(){
    return(
        <div>
            <h3 id="battle-analysis">Battle Analysis</h3>
            <p><img className="repository-image" src="/images/info/battle-analysis-expanded-ui.png" alt="Battle Analysis Expanded"/><img className="repository-image" src="/images/info/battle-analysis-ui.png" alt="Battle Analysis"/></p>
            <p>Pressing the Key will display a small window where you can record battle information such as total damage dealt, EXP acquired, and other valuable details. Pressing the '+' button will expand the UI to display more detailed information</p>
        </div>
    )
}

function EnhanceEquipment(){
    return(
        <div>
            <h3 id="enhance">Enhance Equipment</h3>
            <img className="repository-image" src="/images/info/equipment-enchant-ui.png" alt="Enhance Equipment"/>
            <p>Pressing the Key will open the UI for upgrading your equipment with Spell Traces (in Interactive Worlds) and for Star Forcing</p>
            <p>For more info on enhancing and upgrading your equipment, check out: <a href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a></p>
        </div>
    )
}

function MonsterCollection(){
    return(
        <div>
            <h3 id="monster-collection">Monster Collection</h3>
            <img className="repository-image" src="/images/info/monster-collection-ui.png" alt="Monster Collection"/>
            <p>Pressing the Key will open the Monster Collection window. Here you can see all the monsters you've registered so far. Defeating monsters have a very small chance of registering into your Monster Collection. Note, Monster Collection is different from Familiars</p>
        </div>
    )
}

function Legion(){
    return(
        <div>
            <h3 id="legion">Manage Legion</h3>
            <img className="repository-image" src="/images/info/legion-ui.png" alt="Legion"/>
            <p>Pressing the Key will open a UI where you can manage your Legion System. To learn more about the Legion System, check out: <a href="https://maplestorywiki.net/w/Legion_System" target="_blank" rel="noopener noreferrer">https://maplestorywiki.net/w/Legion_System</a></p>
        </div>
    )
}

function MapleNews(){
    return(
        <div>
            <h3 id="maple-news">Maple News</h3>
            <img className="repository-image" src="/images/info/maple-news-ui.png" alt="Maple News"/>
            <p>Pressing this Key will open a window that displays recent news. This window will also open whenever you log on to a character</p>
        </div>
    )
}

function PictureMode(){
    return(
        <div>
            <h3 id="picture-mode">Picture Mode</h3>
            <p>Pressing this Key will hide your UI. To make your UI appear again, you can press the ESC Key, Picture Mode Key, or by moving to another map</p>
        </div>
    )
}

function Mute(){
    return(
        <div>
            <h3 id="mute">Mute</h3>
            <p>Pressing this Key will mute your game. Press the Key again to unmute</p>
        </div>
    )
}

function MapleRelay(){
    return(
        <div>
            <h3 id="maple-relay">Maple Relay</h3>
            <img className="repository-image" src="/images/info/maple-relay-ui.png" alt="Maple Relay"/>
            <p>This Key is related to an event and can only be opened when the event is available. To learn more about Maple Relay, check out: <a href="https://www.grandislibrary.com/event/maple-relay" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/event/maple-relay</a></p>
        </div>
    )
}

function MapleAchievement(){
    return(
        <div>
            <h3 id="maple-achievement">Maple Achievement</h3>
            <img className="repository-image" src="/images/info/achievements-ui.png" alt="Maple Achievement"/>
            <p>Pressing this Key will open a UI to check out all your achievements you've made on your account</p>
        </div>
    )
}

function Familiar(){
    return(
        <div>
            <h3 id="familiar">Familiar</h3>
            <img className="repository-image" src="/images/info/familiar-ui.png" alt="Familiar"/>
            <p>Pressing this Key will open a UI to manage your <img src="/images/items/snail-familiar.png" alt="Use Snail Familiar"/><img src="/images/items/red-snail-familiar.png" alt="Use Red Snail Familiar"/> familiars that you've registered. Familiars are different from Monster Collection and instead can be summoned and provides bonus stats</p>
        </div>
    )
}

function Emoticon(){
    return(
        <div>
            <h3 id="emoticon">Emoticon</h3>
            <img className="repository-image" src="/images/info/emoticon-ui.png" alt="Emoticon"/>
            <p>Pressing the Key opens a window where you can view and use Emoticons. Emoticons are emotes that are displayed in speech bubbles above your character. Clicking into any of the icons on the top will show you all the possible Emoticons. You can also assign these Emoticons to a Key Slot</p>
        </div>
    )
}

export default KeyboardShortcuts
