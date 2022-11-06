import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdThree, BannerAdTwo, StickyAd } from '../../components/Ads';

function MegaBurning() {
    return (
        <EventPage>
            <Head>
                <title>Mega Burning | Grandis Library</title>
                <meta content={"An event where created characters after level 10 gain 2 extra levels for every level up until level 150"} name="description"/>
            </Head>
            <ContentTitle>Mega Burning</ContentTitle>
            <StickyAd/>
            <h2>What is Mega Burning?</h2>
            <p>Mega Burning Project is an event where <span style={{color: '#ff0000'}}><strong>NEWLY </strong></span>created characters after level 10 <strong>gain 2 extra levels for every level up until level 150. </strong>That means you will get 3 levels for every level up! This event is open to <strong>ALL</strong> servers, both Reboot and non-Reboot worlds. Certain characters cannot be burned which includes <strong>Zero and any newly released classes if stated</strong></p>
            <h3>Notes</h3>
            <hr/>
            <p>If you create an Illium character and select it as "Burning", you will need to complete your Illium questline first before teleporting out of the area. Otherwise you won't be able to get your 2nd job advancement properly</p>
            <p>Rewards such as the Frozen Set can be obtained again if you recreate a Burning Character</p>
            <p>"Burning" effect stops when you have reached level 150 or when the event is over. It is not a permanent effect</p>
            <p><img src="/images/items/mega-character-burninator.png" alt="Use Mega Character Burninator"/> Mega Burninator item can be used on any character to apply the Mega Burning effect</p>
            <p>All unopened rewards (Mysterious Cryptic Gift Box, Lv. 30 Equipment Box and Legendary Cryptic Chest) expire after the burning event is over. Opened items will be kept, the boxes themselves expire!</p>
            <hr/>
            <BannerAdOne/>
            <h2>Rewards:</h2>
            <p>Rewards are given through a quest in the <strong>Star (Events) tab </strong>on the left side of the screen. All rewards are given at level 10 but some items require you to be a certain level to open them</p>
            <p><img src="/images/info/frozen-set.png" alt="Frozen Gear"/></p>
            <h3>Level 10: Pet with Auto Loot</h3>
            <ul>
                <li>
                    <img src="/images/items/mysterious-cryptic-gift-box.png" alt="Use Mysterious Cryptic Gift Box"/><strong> <a href="https://maplestory.wiki/GMS/214/item/2433442" target="_blank" rel="noreferrer noopener">[Use] Mysterious Cryptic Gift Box</a></strong> Contains a pet
                    <strong></strong> Snail that lasts 5 hours of active play time
                    <ul>
                        <li>Box expires in 7-days if unopened</li>
                        <li>Pet comes with <img src="/class-icons/common/item-pouch-skill.png" alt="Item Pouch Skill"/> Meso Magnet and Item Pouch</li>
                        <li>Pet Cannot be moved to Cash Inventory and cannot be revived with <img src="/images/items/premium-water-of-life.png" alt="Cash Premium Water of Life"/> Water of Life</li>
                    </ul>
                </li>
            </ul>
            <h3>Level 30:</h3>
            <ul>
                <li>
                    <img src="/images/items/equipment-box-30.png" alt="Use Equipment Box 30"/> <a href="https://maplestory.wiki/GMS/214/item/2435742" target="_blank" rel="noreferrer noopener"><strong>[Use] Lv. 30 Equipment Box</strong></a>
                    <ul>
                        <li>Box containing Lv. 30 equipment for your class</li>
                        <li>Box expires after a set date if unopened, items inside are permanent</li>
                    </ul>
                </li>
            </ul>
            <h3>Level 100: Permanent Frozen Equipment</h3>
            <ul>
                <li>
                    <img src="/images/items/legendary-cryptic-chest.png" alt="Use Legendary Cryptic Chest"/> <a href="https://maplestory.wiki/GMS/214/item/2433444" target="_blank" rel="noreferrer noopener"><strong>[Use] Legendary Cryptic Chest</strong></a>
                    <ul>
                        <li>
                            Contains Lv. 100 <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Frozen_Set" target="_blank" rel="noreferrer noopener">Frozen Set</a> <img src="/images/equipment/frozen-hat.png" alt="Eqp Onyx Maple Hat"/>
                            <img src="/images/equipment/frozen-suit.png" alt="Eqp Onyx Maple Suit"/>
                            <img src="/images/equipment/frozen-cape.png" alt="Eqp Onyx Maple Cape"/> and <strong></strong>
                            <ul>
                                <li>Consists of Hat, Overall, Cape, Weapon, and Secondary Weapon</li>
                            </ul>
                        </li>
                        <li>Box expires after a set date if unopened, items inside are permanent</li>
                    </ul>
                </li>
            </ul>
            <BannerAdTwo/>
            <h3>Level 130:</h3>
            <ul>
                <li>
                    <img src="/images/equipment/keep-on-burning.png" alt="Use Keep on Burning Coupon"/><strong> <a href="https://maplestory.wiki/GMS/214/item/2435743" target="_blank" rel="noreferrer noopener">[Use] Keep on Burning Title Coupon</a></strong>
                    <ul>
                        <li>Contains the Keep on Burning Title listed below</li>
                        <li>Coupon expires after a set date if unredeemed</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/equipment/keep-on-burning.png" alt="Setup Keep on Burning"/> <strong><a href="https://maplestory.wiki/GMS/214/item/3700385">[Set-up] Keep on Burning</a></strong>
                    <ul>
                        <li>Stats last 14 days</li>
                        <li>+10 All Stats</li>
                        <li>+400 Max HP/MP</li>
                        <li>+10 Attack/Magic Attack</li>
                        <li>+10% Boss Damage</li>
                        <li>+10% Ignore DEF</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h3>Credits:</h3>
            <p>Image Credits:</p> 
            <p><a href="http://maplestory.nexon.net/">http://maplestory.nexon.net/</a></p>
            <p><a href="https://maplestory.fandom.com/wiki/">https://maplestory.fandom.com/wiki/</a></p>
            <p>More info at:</p>
            <p><a href="http://maplestory.nexon.net/news/51725/level-up-with-the-double-mega-burning-project" target="_blank" rel="noopener noreferrer">http://maplestory.nexon.net/news/51725/level-up-with-the-double-mega-burning-project</a></p>
            <BannerAdThree/>
        </EventPage>
    )
}

export default MegaBurning
