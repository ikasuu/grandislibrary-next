import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import { SingleSkill } from '../../components/class-overview/SingleSkill';
import BannerAdOne, { BannerAdTwo, BannerAdThree, VideoAd, StickyAd } from '../../components/Ads';

const BurningSkill = {
        "id": 80000545,
        "icons": ["/class-icons/common/burning.png"],
        "type": "Passive"
};

function BurningWorld() {
    return (
        <EventPage>
            <Head>
                <title>Burning World | Grandis Library</title>
                <meta content={"Burning World is a temporary world that has special benefits for all characters in this world"} name="description"/>
            </Head>
            <ContentTitle>Burning World</ContentTitle>
            <StickyAd/>
            <h2><img src="/images/info/burning-world.png" alt="WorldIcon Burning World"/> What is Burning World?</h2>
            <p>Burning World is a temporary world that has special benefits for all characters in this world. Additionally, you are able to create multiple Mega Burning characters within this world. The main benefit is that at the end of the event, you are able to transfer your characters out of Burning World and into a Regular World (Non-Reboot World)</p>
            <p>Burning World characters can be transferred into any Regular World. Burning World characters cannot be transferred into Reboot worlds. This may be because Burning World functions almost the same as a regular world and does not have any Reboot functionalities</p>
            <VideoAd/>
            <h3>Notes</h3>
            <hr/>
            <p>Link Skills are unavailable in Burning World. You will have access to Link Skills once you've transferred your characters out of the Burning World</p>
            <p>At the end of Burning World, during the transferring period, you will be automatically moved to the transferring map and cannot leave</p>
            <p>Any characters that are not moved during the transferring period will be deleted along with their items and Cash Items. To keep Cash Items, make sure to move them onto your characters before transferring them out of Burning World</p>
            <p>Characters must be at least Lv. 150 to transfer out of Burning World</p>
            <p>Zero characters, when available, can be created however, they cannot be burned</p>
            <hr/>
            <BannerAdOne/>
            <h2>Benefits of Burning World</h2>
            <p>All characters in the Burning World gain the passive skill below while in this world, the passive does not transfer into other worlds</p>
            <SingleSkill skillData={BurningSkill}/>
            <p>Burning Characters will receive the following rewards:</p>
            <ul>
                <li>
                    2 extra levels per level, up to Lv. 150
                    <ul>
                        <li>Regular Mega Burning effect</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/items/snail-pet.png" alt="Cash Snail"/> <a href="https://maplestory.wiki/GMS/214/item/5002121" target="_blank" rel="noreferrer noopener">[Pet] Snail</a>
                    <ul>
                        <li>Lasts 24 hours (of active playtime)</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/items/equipment-box-30.png" alt="Use Lv. 30 Equipment Box"/> <a href="https://maplestory.wiki/GMS/214/item/2435742" target="_blank" rel="noreferrer noopener">[Use] Lv. 30 Equipment Box</a>
                    <ul>
                        <li>Box containing Lv. 30 equipment for your class</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/items/legendary-cryptic-chest.png" alt="Use Legendary Cryptic Chest"/> <a href="https://maplestory.wiki/GMS/214/item/2433444" target="_blank" rel="noreferrer noopener">[Use] Legendary Cryptic Chest</a>
                    <ul>
                        <li>
                            Contains Lv. 100 Frozen Gear <img src="/images/equipment/frozen-hat.png" alt="Eqp Onyx Maple Hat"/>
                            <img src="/images/equipment/frozen-suit.png" alt="Eqp Onyx Maple Suit"/>
                            <img src="/images/equipment/frozen-cape.png" alt="Eqp Onyx Maple Cape"/>
                            <ul>
                                <li>Consists of Hat, Overall, Cape, Weapon, and Secondary Weapon</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="/images/equipment/keep-on-burning.png" alt="Setup Keep on Burning"/> <a href="https://maplestory.wiki/GMS/214/item/3700385" target="_blank" rel="noreferrer noopener">[Title] Keep on Burning</a>
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
            <p><strong>Burning Character rewards exclusive to Burning World:</strong></p>
            <ul>
                <li>
                    <img src="/images/equipment/flameborn.png" alt="Eqp Flameborn"/> <a href="https://maplestory.wiki/GMS/214/item/1143135" target="_blank" rel="noreferrer noopener">[Medal] BURNING</a>
                    <ul>
                        <li>+5 All Stats</li>
                        <li>+250 Max HP/MP</li>
                        <li>+1 Attack/Magic Attack</li>
                    </ul>
                </li>
                <li>
                    <img src="/images/items/anniversary-white-armor-box.png" alt="Use 9th Anniversary White Armor Box"/> <a href="https://maplestory.wiki/GMS/214/item/2028209" target="_blank" rel="noreferrer noopener">[Use] 9th Anniversary White Armor Box</a>
                    <ul>
                        <li>
                            Contains Lv. 30 Pearl Maple Gear <img src="/images/equipment/pearl-maple-hat.png" alt="Eqp Pearl Maple Hat"/><img src="/images/equipment/pearl-maple-suit.png" alt="Eqp Pearl Maple Suit"/>
                            <img src="/images/equipment/pearl-maple-cape.png" alt="Eqp Pearl Maple Cape"/>
                            <ul>
                                <li>Consists of Hat, Overall, and Cape</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="/images/items/hyper-teleport-rock.png" alt="Cash Hyper Teleport Rock"/> <a href="https://maplestory.wiki/GMS/214/item/5040004" target="_blank" rel="noreferrer noopener">[Cash] Hyper Teleport Rock (30 Day)</a>
                    <ul>
                        <li>Allows you to teleport anywhere from the World Map</li>
                    </ul>
                </li>
                <li>Equip/Use/Etc./Set-up inventories expanded to 56 slots</li>
            </ul>
            <p>For more information on Mega Burning characters, check out: <a href="https://www.grandislibrary.com/event/mega-burning" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/event/mega-burning</a></p>
            <p>Need help choosing a character to burn? Check out: <a href="https://www.grandislibrary.com/event/who-to-tera-burn" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/event/who-to-tera-burn</a></p>
            <BannerAdTwo/>
            <h2>Transferring from Burning World</h2>
            <p><strong>To transfer first, your character must be at least Lv. 150</strong></p>
            <p>Once the Burning World event ends, you can transfer your character to a Regular World (Non-Reboot world). You will not be able to train your characters in the Burning World during this period</p>
            <p>During the GMS Rise Burning World, transferring period will be available from September 17th, 2020 to October 7th, 2020. Some things to note, only a maximum of 6 characters can be transferred out of Burning World. You do not need an empty character slot on the destination world for your new character. Lastly, characters must leave or disband their Guild in order to transfer worlds</p>
            <p>Any characters that are not moved during the transferring period will be deleted along with their items and Cash Items. To keep Cash Items, make sure move them onto your characters before transferring them out of Burning World</p>
            <h2>Burning World Restrictions</h2>
            <p>In Burning World, you cannot purchase the following items from the Cash Shop:</p>
            <ul>
                <li><img src="/images/items/character-slot-expansion-coupon.png" alt="Use Character Slot Expansion Coupon"/> <a href="https://maplestory.wiki/GMS/214/item/2350000" target="_blank" rel="noreferrer noopener">Character Slot Expansion Coupon</a></li>
                <li><img src="/images/items/storage-room-slot-expansion.png" alt="Use Storage Room Slot Expansion"/> <a href="https://maplestory.wiki/GMS/214/item/3801190" target="_blank" rel="noreferrer noopener">4/8 Slot Storage Room Expansion Coupon</a></li>
                <li><img src="/images/items/house-wedding-ticket-coupon.png" alt="Use House Wedding Ticket Coupon"/> <a href="https://maplestory.wiki/GMS/214/item/2435846" target="_blank" rel="noreferrer noopener">House Wedding Ticket</a></li>
                <li><img src="/images/items/commitment-of-love-ticket.png" alt="Cash Commitment of Love Ticket"/> <a href="https://maplestory.wiki/GMS/214/item/5251017" target="_blank" rel="noreferrer noopener">Commitment of Love Ticket</a></li>
                <li><img src="/images/items/custom-title-coupon.png" alt="Use Custom Title Coupon"/> <a href="https://maplestory.wiki/GMS/214/item/2631864" target="_blank" rel="noreferrer noopener">Custom Title Package</a></li>
                <li><img src="/images/equipment/promise-ring.png" alt="Cash Promise Ring"/> <a href="https://maplestory.wiki/GMS/214/item/1112001" target="_blank" rel="noreferrer noopener">Promise Ring</a></li>
                <li><img src="/images/equipment/cupid-ring.png" alt="Cash Cupid Ring"/> <a href="https://maplestory.wiki/GMS/214/item/1112003" target="_blank" rel="noreferrer noopener">Cupid Ring</a></li>
                <li><img src="/images/equipment/cloud-promise-ring.png" alt="Cash Cloud Promise Ring"/> <a href="https://maplestory.wiki/GMS/214/item/1112002" target="_blank" rel="noreferrer noopener">Cloud Promise Ring</a></li>
                <li><img src="/images/equipment/venus-fireworks.png" alt="Cash Venus Fireworks"/> <a href="https://maplestory.wiki/GMS/214/item/1112005" target="_blank" rel="noreferrer noopener">Venus Fireworks</a></li>
                <li><img src="/images/equipment/crossed-hearts.png" alt="Cash Crossed Hearts"/> <a href="https://maplestory.wiki/GMS/214/item/1112006" target="_blank" rel="noreferrer noopener">Crossed Hearts</a></li>
                <li><img src="/images/equipment/illumination-couples-ring.png" alt="Cash Illumination Couples Ring"/> <a href="https://maplestory.wiki/GMS/214/item/1112015" target="_blank" rel="noreferrer noopener">Illumination Couples Ring</a></li>
                <li><img src="/images/equipment/friendship-ring-clover.png" alt="Cash Friendship Ring: Clover"/><img src="/images/equipment/friendship-ring-flower-petal.png" alt="Cash Friendship Ring: Flower Petal"/><img src="/images/equipment/friendship-ring-star.png" alt="Cash Friendship Ring: Star"/><img src="/images/equipment/snow-dome-friendship-ring.png" alt="Cash Snow Dome Friendship Ring"/> Friendship Rings (Clover, Flower Petal, Star, Snow Dome)</li>
            </ul>
            <p>In Burning World, the following features are not available:</p>
            <ul>
                <li>Meso Market</li>
                <li>Transferring Link Skills</li>
                <li>Legion System</li>
                <li>Monster Collection</li>
                <li>Maple Tour</li>
            </ul>
            <br/><hr/>
            <h3>EXTRAS:</h3>
            <p>For more info, check out: <a rel="noreferrer noopener" href="http://maplestory.nexon.net/news/59147/burning-world-event" target="_blank">http://maplestory.nexon.net/news/59147/burning-world-event</a></p>
            <h3>Credits:</h3>
            <p><strong>Information from</strong>: OrangeMushroom and MapleStory Official Website</p>
            <BannerAdThree/>
        </EventPage>
    )
}

export default BurningWorld
