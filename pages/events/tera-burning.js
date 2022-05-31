import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import { AdOutArticle } from '../../components/Ads';

function TeraBurning() {
    return (
        <EventPage>
            <Head>
                <title>Tera Burning | Grandis Library</title>
                <meta content={"An event where NEWLY created characters after level 10 gain 2 extra levels for every level up until level 200"} name="description"/>
            </Head>
            <ContentTitle>Tera Burning</ContentTitle>
            <h2>What is Tera Burning</h2>
            <p>Tera Burning is an event where <span style={{color: '#ff0000'}}><strong>NEWLY </strong></span>created characters after level 10 <strong>gain 2 extra levels for every level up until level 200.</strong> That means you will get 3 levels for every level up! This event is open to servers, both Reboot and non-Reboot worlds. Certain characters cannot be burned which includes Zero and any newly released classes if stated</p>
            <h3>Notes</h3>
            <hr/>
            <p>If you create an Illium character and select it as "Burning", you will need to complete your Illium questline first before teleporting out of the area. Otherwise you won't be able to get your 2nd job advancement properly</p>
            <p>Rewards such as the Timed Root Abyss set can be obtained again if you recreate a Burning Character. However, additional rewards for reaching Lv. 200 to 220 can only be claimed once per account</p>
            <p>“Tera Burning” effect stops when you have reached level 200 or when the event is over. It is not a permanent effect</p>
            <p>All unopened rewards (Mysterious Cryptic Gift Box, Lv. 30 Equipment Box, Legendary Cryptic Chest, etc) expire after the burning event is over. Opened items will be kept, the boxes themselves expire!</p>
            <hr/>
            <p>Need help choosing a class? Check out these resources:</p>
            <p><a href="https://www.reddit.com/r/Maplestory/comments/gxbffr/ultimate_who_should_i_tera_burn_guide/" target="_blank" rel="noopener noreferrer" data-preserve-html-node="true">https://www.reddit.com/r/Maplestory/comments/gxbffr/ultimate_who_should_i_tera_burn_guide/</a></p>
            <p><a href="https://maplestory.fandom.com/wiki/Characters_and_Skills" target="_blank" rel="noopener noreferrer" data-preserve-html-node="true">https://maplestory.fandom.com/wiki/Characters_and_Skills</a></p>
            <p><a href="https://www.reddit.com/r/Maplestory/comments/cf3re2/gms_dpm_chart_v205/" target="_blank" rel="noopener noreferrer" data-preserve-html-node="true">https://www.reddit.com/r/Maplestory/comments/ftxlhe/dpm_chart_gms_v212_and_kms_12332//</a></p>
            <p><strong>Note: DPM Charts are really bad indicators of if a class is good or not! These tests are performed under PERFECT CONDITIONS so does not translate directly to how much damage a class really does. As well, DPM ≠ Fun nor best class!! There are classes with better mobbing or better mobility or better bossing BUT no class has everything</strong></p>
            <hr/>
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
                        <li>Pet comes with <img src="/class-icons/common/item-pouch-skill.png" alt="Skill Item Pouch Skill"/> Meso Magnet and Item Pouch</li>
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
                            Contains Lv. 100 <a href="https://maplestory.fandom.com/wiki/Equipment_Set/Frozen_Set" target="_blank" rel="noreferrer noopener">Frozen Set</a> <img src="/images/equipment/frozen-hat.png" alt="Eqp Onyx Maple Hat" width="33" height="24"/>
                            <img src="/images/equipment/frozen-suit.png" alt="Eqp Onyx Maple Suit" width="28" height="29"/>
                            <img src="/images/equipment/frozen-cape.png" alt="Eqp Onyx Maple Cape"/> and <strong></strong>
                            <a href="https://maplestory.fandom.com/wiki/Mastery_Box" target="_blank" rel="noreferrer noopener">Mastery Boxes (x8)</a>
                            <ul>
                                <li>Consists of Hat, Overall, Cape, Weapon, and Secondary Weapon</li>
                            </ul>
                        </li>
                        <li>Box expires after a set date if unopened, items inside are permanent</li>
                    </ul>
                </li>
            </ul>
            <h3>Level 150: Temporary Root Abyss Set, 70% Scrolled + 12 Stars + Epic Potential (90 Days)</h3>
            <img className="repository-image" src="/images/info/fafnir-set.png" alt="CRA Gear"/>
            <ul>
                <li>
                    <img src="/images/items/root-abyss-set-box.png" alt="Use Root Abyss Set Box"/><strong> <a href="https://maplestory.wiki/GMS/214/item/2439179">[Use] Root Abyss Set Box (Time-Restricted)</a></strong>
                    <ul>
                        <li>
                            Contains Lv. 150 70% Spell Traced, Epic Potential Root Abyss Gear <img width="36" height="28" src=" /images/equipment/royal-warrior-helm.png" alt="Eqp Royal Warrior Helm"/><img width="29" height="24" src="/images/equipment/eagle-eye-warrior-armor.png" alt="Eqp Eagle Eye Warrior Armor"/><img width="23" height="28" src="/images/equipment/trixter-warrior-pants.png" alt="Eqp Trixter Warrior Pants"/>
                            <ul>
                                <li>Consists of Hat, Top, Bottom, and Weapon</li>
                            </ul>
                        </li>
                        <li>Box expires after a set date if unopened</li>
                    </ul>
                </li>
            </ul>
            <h3>Level 200 + 5th Job:</h3>
            <p><strong>[Note]</strong>: The title can only be used after completing 5th Job Advancement and the "A Greater Power, Arcane Power" quest <strong>Note: </strong>The title is permanent but the stats expire <span style={{color: '#ff0000'}}>(30 days)</span>, you receive this instead of the Mega Burning "Keep on Burning" title</p>
            <ul>
                <li>
                    <img src="/images/equipment/eternal-flame.png" alt="Use Eternal Flame Title Coupon"/><strong> <a href="https://maplestory.wiki/GMS/214/item/2439181" target="_blank" rel="noreferrer noopener">[Use] Eternal Flame Title Coupon</a></strong>
                    <ul>
                        <li>Contains the Keep on Burning Title listed below</li>
                        <li>Coupon expires after a set date if unredeemed</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/equipment/eternal-flame.png" alt="Setup Eternal Flame"/><strong> <a href="https://maplestory.wiki/GMS/214/item/3700530" target="_blank" rel="noreferrer noopener">[Set-up] Eternal Flame</a></strong>
                    <ul>
                        <li>Stats last 30 days</li>
                        <li>+15 All Stats</li>
                        <li>+750 Max HP/MP</li>
                        <li>+15 Attack/Magic Attack</li>
                        <li>+10% EXP</li>
                        <li>+10% Boss Damage</li>
                        <li>+10% Ignore DEF</li>
                        <li>+50 Arcane Power</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h3>Credits:</h3>
            <p>Image Credits:</p> 
            <p><a href="http://maplestory.nexon.net/">http://maplestory.nexon.net/</a></p>
            <p><a href="https://maplestory.fandom.com/wiki/">https://maplestory.fandom.com/wiki/</a></p>
            <p>More info at:</p>
            <p><a href="http://maplestory.nexon.net/news/54153/tera-burning-and-extreme-breakthrough-events" target="_blank" rel="noopener noreferrer">http://maplestory.nexon.net/news/54153/tera-burning-and-extreme-breakthrough-events</a></p>
            <AdOutArticle/>
        </EventPage>
    )
}

export default TeraBurning
