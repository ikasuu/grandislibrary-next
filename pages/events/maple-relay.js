import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdTwo, VideoAd } from '../../components/Ads';

function MapleRelay() {
    return (
        <EventPage>
            <Head>
                <title>Maple Relay | Grandis Library</title>
                <meta content={"Maple Relay is an event where you receive rewards for simply staying online. Obtain gifts daily and at each milestone"} name="description"/>
            </Head>
            <ContentTitle>Maple Relay</ContentTitle>
            <h2>What is Maple Relay?</h2>
            <p>Maple Relay is an event where you receive rewards for simply staying online. During the event, you will receive a reward daily for staying on 30 mins, 60 mins, 90 mins, and 180 mins. Each time you claim the daily reward, you will add a point to the "Total Claimed" counter. As you reach 12, 32, 56, and 80 reward claims, you will receive a special reward. This means that each day you can obtain a total of 4 reward claims</p>
            <p><img className="repository-image" src="/images/info/maple-relay-ui.png" alt="Maple Relay UI"/></p>
            <VideoAd/>
            <h2>How do I participate?</h2>
            <p>To participate, your account must meet at least 1 of the following requirements:</p>
            <ul>
                <li>Completed <a href="https://maplestory.fandom.com/wiki/Blockbuster/Black_Heaven" target="_blank" rel="noreferrer noopener">Black Heaven</a> for Lotus Boss Entry</li>
                <li>Have at least <a href="http://forums.maplestory.nexon.net/discussion/comment/36177" target="_blank" rel="noreferrer noopener">MVP Bronze</a></li>
                <li>
                    Have at least 150 total <a href="https://strategywiki.org/wiki/MapleStory/Spell_Trace_and_Star_Force#Star_Force_Enhancement" target="_blank" rel="noreferrer noopener">Star Force</a>
                    <ul>
                        <li>Star Force is the quickest method if you fill up all your Equip Slots and Star Force each one to 10 stars</li>
                    </ul>
                </li>
            </ul>
            <p>Once you meet 1 of the following requirements, you can accept the quest <strong>‘[Maple Relay] Play with Popoh and Get Login Rewards!’</strong> quest from the Maple Relay icon within the star event notifier on the left side of the screen. Upon accepting the quest, Maple Relay UI will pop up and login time will start to accumulate</p>
            <p>During the event, once you've accepted the quest on one character, you do not need to accept the quest again on another character. As well, there is no level requirement, all you need to do is stay logged on</p>
            <p>There is also a Keyboard Shortcut to open the Maple Relay UI that you can assign. Another way to open the UI is by accessing it from the star event notifier on the left side of the screen</p>
            <h2>Rewards</h2>
            <p>Rewards may vary between each Maple Relay event but primarily you will get <img src="/images/items/reward-points.png" alt="Reward Points"/> <a rel="noreferrer noopener" href="https://support-maplestory.nexon.net/hc/en-us/articles/204088489-What-is-the-Maple-Rewards-System-" target="_blank">Reward Points</a> which can be used in the Maple Rewards Shop. Occasionally, <img src="/images/items/maple-point-gift-certificate.png" alt="Use Maple Point Gift Certificate"/> <a rel="noreferrer noopener" href="http://maplestory.nexon.net/game/beginners-guide/shop" target="_blank">Maple Points</a> are also rewarded which function just like NX and do not expire</p>
            <p>The "Total Claimed" rewards differ each Maple Relay but normally the 80 total claims reward is a <img src="/images/items/relay-master-box.png" alt="Use Relay Master Box"/> Relay Master Box which you can choose to either obtain an <img src="/images/equipment/absolab-saber.png" alt="Eqp Absolab Saber"/><a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/2436283" target="_blank">Absolab Weapon</a> for your class or <img src="/images/equipment/dominator-pendant.png" alt="Eqp Dominator Pendant"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/2630705" target="_blank">Dominator Pendant</a>. Both items are special in which they have fixed stats that cannot be changed except for their Bonus Stats which can be Rebirth Flamed</p>
            <BannerAdOne/>
            <h3>Notes</h3>
            <hr/>
            <p>The Absolab weapon from Maple Relay cannot be exchanged by Zero classes</p>
            <p>The item coupons expire quickly if unopened! A majority of the items inside the coupons are permanent</p>
            <p>You can keep receiving the daily rewards even after obtaining all the "Total Claimed" rewards</p>
            <p>Rewards can only be claimed once per account. Daily rewards are reset daily</p>
            <hr/>
            <p><strong>Rewards From July 22, 2020 Maple Relay:</strong></p>
            <p>Daily Rewards:</p>
            <ul>
                <li><img src="/images/items/reward-points.png" alt="Use Reward Points"/> 100 &amp; 500 Maple Reward Points</li>
                <li><img src="/images/items/maple-point-gift-certificate.png" alt="Use Maple Points Gift Certificate"/> Maple Points</li>
                <li><img src="/images/items/rise-coin.png" alt="Etc Rise Coin"/> Rise Event Coins</li>
            </ul>
            <p>Total Claimed Rewards:</p>
            <ul>
                <li>
                    <img src="/images/equipment/navy-kindergarten-back-to-school-hat.png" alt="Cash Navy Kidergarten Back-to-School Hat"/><img src="/images/equipment/yellow-kindergarten-back-to-school-hat.png" alt="Cash Yellow Kindergarten Back-to-School Hat"/> <img src="/images/equipment/yellow-kindergarten-back-to-school-outfit.png" alt="Cash Yellow Kindergarten Back-to-School Outfit"/><img src="/images/equipment/navy-kindergarten-back-to-school-outfit.png" alt="Cash Navy Kindergarten Back-to-School Outfit"/> Kindergarten Back-to-School outfit (Cash Item)
                    <ul>
                        <li>Can be transferred to <a href="https://www.grandislibrary.com/contents/shared-cash-shop-inventories" target="_blank" rel="noreferrer noopener">Cash Shop Inventory</a></li>
                    </ul>
                </li>
                <li><img src="/images/items/red-cube.png" alt="Cash Red Cube Twelve Pack"/> Red Cube Twelve Pack</li>
                <li><img src="/images/items/maple-point-gift-certificate.png" alt="Use 10k Maple Points"/> 10k Maple Points</li>
                <li><img src="/images/items/relay-master-box.png" alt="Use Relay Master Box"/> Relay Master Box (Choice of Absolab Weapon or Dominator Pendant)</li>
            </ul>
            <p><img src="/images/info/kindergarten-back-to-school-outfit.png" alt="Kindergarten Back-to-School Outfit"/></p>
            <hr/>
            <h3>Credits:</h3>
            <p>For more info, check out:</p> 
            <p><a href="http://maplestory.nexon.net/news/59255/v-215-rise-surge-of-power-patch-notes#relay">http://maplestory.nexon.net/news/59255/v-215-rise-surge-of-power-patch-notes#relay</a></p>
            <p><strong>Information from</strong>: MapleStory Official Website</p>
            <BannerAdTwo/>
        </EventPage>
    )
}

export default MapleRelay
