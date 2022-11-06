import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, VideoAd, StickyAd, BannerAdThree } from '../../components/Ads';

function MaplehoodWatch() {
    return (
        <EventPage>
            <Head>
                <title>Maplehood Watch | Grandis Library</title>
                <meta content={"An event where players can earn free cash items. The event lasts for two weeks and each week has 3 special days with free gifts"} name="description"/>
            </Head>
            <ContentTitle>Maplehood Watch</ContentTitle>
            <StickyAd/>
            <img className="repository-image" src="/images/info/maplehood-preview.png" alt="Maplehood Watch Event"/>
            <p>Maplehood Watch is an event where players can earn <span style={{color: '#ff0000'}}><strong>free cash items</strong></span>. The event lasts for <strong>two weeks</strong> and each week consists of a <strong>Beauty Day</strong>, <strong>Enhancement Day</strong> and <strong>Gachapon Day.</strong> Thus, you can earn the same rewards twice per event!</p>
            <p>To begin, accept the quest <strong>'[Maplehood Watch] Not in My Neighborhood'</strong> from the <strong>Star (Events) tab</strong> on the left side of the screen. This event is available to <strong>all characters Lv. 33 or higher</strong>, and to <strong>Zero characters who've completed Story Quest Chapter 2</strong></p>
            <p>An example of a schedule from August 2019 Maplehood Watch:</p>
            <p><img src="/images/info/maplehood-watch-schedule.png" alt="Maplehood Watch Schedule 2019"/></p>
            <p><strong>[Note]</strong>: Daily reset occurs at 12:00am GMT so you need to complete the quests for that day before then!! You will not be able to complete the quests for that day anymore once reset happens!</p>
            <VideoAd/>
            <h2>Beauty Day</h2>
            <p><strong>[Note]</strong>: Hairstyles and Facestyles are completely random! Save your current hairstyle/face in your salon and any hairs you get as well!</p>
            <p><strong>[Note]</strong>: The coupons do not work after the day has ended and once the event is over</p>
            <ul>
                <li><strong>This can be completed 3 times per character per day</strong>.</li>
                <li>Accept the quest <strong>‘[Maplehood Watch] Beautification Bonanza'</strong> in the <strong>Star (Events) tab</strong> on the left side of your screen</li>
                <li>
                    <strong>Hunt monsters within your level range</strong> (20 levels below and 20 levels above) and collect <img src="/images/items/maplehood-watch-coupon-fragment.png" alt="Etc Maplehood Watch Coupon Fragment"/> [Maplehood Watch Coupon Fragments] to
                    receive rewards!
                </li>
            </ul>
            <p>Upon completion, you will receive a <img src="/images/items/maplehood-watch-hair-coupon.png" alt="Cash Maplehood Watch Hair Coupon"/> [Maplehood Watch Hair Coupon] and <img src="/images/items/maplehood-watch-face-coupon.png" alt="Cash Maplehood Watch Face Coupon"/> [Maplehood Watch Face Coupon]. To change your hair take it to <strong>B</strong><strong>ig Headward in Henesys Hair Salon</strong>. To change your face take it to <strong>Nurse Pretty in Henesys Plastic Surgery</strong>. You can also do this in any town by pressing the "Quick Move" button on the top left</p>
            <p>Some example hairstyles and face styles from August 2019 Maplehood:</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-male-hairs.png" alt="Maplehood Watch Male Hairstyles"/></p>
            <p>Male: Cute Boy Hair, Let-it-be Hair, Lucky Charms, Ponytail Hair, Sprout Shiny Hair, and Windblown Wave Hair</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-female-hairs.png" alt="Maplehood Watch Female Hairstyles"/></p>
            <p>Female: Ballroom Classic, Cute Tied Bun Hair, Eve Hair, Lively Braided Hair, Spiral Curl Hair, and Wild Child Tied Hair</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-male-faces.png" alt="Maplehood Watch Male Facestyles"/></p>
            <p>Male: Arrogant Face, Clear Face, Dewy-Eyed Face, Friendly Friend Face, Overjoyed Smile, and Piercing Gaze</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-female-faces.png" alt="Maplehood Watch Female Facestyles"/></p>
            <p>Female: Bling Bling Face, Eyelash Perm Face, Piercing Gaze, Spica Face, Tender Love, and Wounded Look</p>
            <BannerAdOne/>
            <h2>Enhancement Day</h2>
            <ul>
                <li>
                    <strong>This can be completed 2 times per character per day.</strong> Log in and accept the quest <strong>‘[Maplehood Watch] New and Enhanced'</strong> in the <strong>Star (Events)</strong> <strong>tab</strong> on the left side of
                    your screen
                </li>
                <li><strong>Hunt 200 monsters within your level range</strong> (20 levels below and 20 levels above) to receive rewards!</li>
            </ul>
            <h3>Upon completion:</h3>
            <p>Receive one <img src="/images/items/platinum-scissors.png" alt="Cash Platinum Scissors of Karma"/> [Platinum Scissors of Karma] and one <img src="/images/items/miracle-circulator.png" alt="Cash Miracle Circulator"/> [Miracle Circulator] (on non-Reboot worlds)</p>
            <p><img src="/images/info/reboot.png" alt="WorldIcon Reboot"/> Receive one <img src="/images/items/red-cube.png" alt="Cash Red Cube"/> [Red Cube] and one <img src="/images/items/miracle-circulator.png" alt="Cash Miracle Circulator"/> [Miracle Circulator] (on Reboot world only)</p>
            
            <h2>Gachapon Day</h2>
            <ul>
                <li><strong>This can be completed 3 times per character per day</strong>. Log in and accept the quest <strong>‘[Maplehood Watch] Gachapon Giveaway’</strong> in the <strong>Star (Events) tab</strong> on the left side of your screen</li>
                <li><strong>Hunt 200 monsters within your level range</strong> (20 levels below and 20 levels above) to receive rewards!</li>
            </ul>
            <p>Upon completion, receive 5 <img src="/images/items/maplehood-watch-gachapon.png" alt="Use Maplehood Watch Gachapon"/> [Maplehood Watch Gachapon] and 3 <img src="/images/items/maplehood-watch-avatar-box.png" alt="Cash Maplehood Watch Avatar Box"/> [Maplehood Watch Avatar Boxes]</p>
            <h3>Maplehood Watch Gachapon</h3>
            <p><strong>[Note]</strong>: Remember, equipment in Reboot cannot be transferred through the bank! This applies to items that even say "Transferable Within Account" or "Can be traded once within account"</p>
            <p>Located in your <strong>USE tab</strong>, Double-click each one to receive one random item. Some examples of items included from August 2019 Maplehood Watch:</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-gacha-items-1.png" alt="Maplehood Gacha Items"/></p>
            <p>Dominator Pendant, Legendary Potential Scroll 50%, M-day Heart, X Weapon/Accessory/Pet Equipment Scrolls, and Gold and Silver Potential Stamps, not included in image but also Metamorph Potions, Trait Items, Restorative Potions, and 3 and 4 Star Enhancement Scrolls</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-gacha-items-2.png" alt="Maplehood Gacha Items p2"/></p>
            <p>Lv. 150 Fafnir set equips/weapons and Lv. 140 Empress set equips/weapons</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-gacha-chairs.png" alt="Maplehood Gacha Chairs"/></p>
            <p>Sparkling Maple Chair, Underneath the Maple Tree Chair..., Imperial Cygnus Feast Chair, Fat Lucky Cat, Monkeying Around Chair, and School Bus Chair</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-gacha-android.png" alt="Maplehood Gacha Androids"/></p>
            <p>Deluxe and Fantastical Androids (male and female available for both)</p>
            <BannerAdTwo/>
            <h3>Maplehood Watch Avatar Boxes</h3>
            <p><strong>[Note]</strong>: These cash items are untradeable but can be transferred between characters through the cash shop. Characters must share the same inventory! (Ex. Explorers, Resistance, Flora)</p>
            <p>The Maplehood Watch Avatar Box (located in your Cash Shop) contains random permanent cash covers. Double-click a box to receive one equip. Some example of equipment included from August 2019 Maplehood</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-avatar-box-1.png" alt="Maplehood Avatar Items"/></p>
            <p>Tea Party Ribbon, Mint Kitty Tea Party (M), Mint Kitty Slippers, Mint Kitty Tea Time, Wonder Kitty, Antagonist Face; Mint Kitty Tea Party (F); Blue Flame Phoenix Plume, Blue Phoenix Toga, Blue Phoenix Weapon; Red Flame Phoenix Plume, Red Phoenix Toga, and Red Phoenix Weapon</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-avatar-box-2.png" alt="Maplehood Avatar Items p2"/></p>
            <p>Pop Star Hat (M), Pop Star Long Coat (M), Pop Star Shoes (M), Pop Star Mic Skin; Pop Star Hat (F), Pop Star Long Coat (F), Pop Star Shoes (F); Green Beret (F), Formal Brown Skirt, Owl Balloon; Red Beret (M), Formal Brown Shorts, Owl Spellbook; Arctic Narwhal Pillow, Arctic Hood, Arctic Mittens, Arctic Suit, and Arctic Snow Shoes</p>
            <p><img className="repository-image" src="/images/info/maplehood-watch-avatar-box-3.png" alt="Maplehood Avatar Items p3"/></p>
            <hr/>
            <h3>Credits:</h3>
            <p><strong>Information from</strong>: MapleStory Official Website</p>
            <BannerAdThree/>
        </EventPage>
    )
}

export default MaplehoodWatch
