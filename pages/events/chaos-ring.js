import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import Video from '../../components/repository/Video';
import BannerAdOne, { BannerAdThree, BannerAdTwo, StickyAd } from '../../components/Ads';

function ChaosRing() {
    return (
        <EventPage>
            <Head>
                <title>Chaos Ring | MapleStory | Grandis Library</title>
                <meta content={"An event ring that has allows you to reroll the ring’s stats and potential for free a fixed number of times each week up to Unique Potential. Rerolls function the same as using Hard Cubes."} name="description"/>
            </Head>
            <ContentTitle>Chaos Ring</ContentTitle>
            <StickyAd/>
            <p>Introduced during the ARK update, this new event ring allows the user to<strong> reset it's stats and potential up to 10 times per week (resets Mondays)</strong>. But, the ability to reset the ring lasts 180 days. After that, you will need to use<strong> Cubes to reset the potential</strong>. The ring can be cubed to LEGENDARY but the weekly free rerolls only go up to UNIQUE</p>
            <Video src="https://www.youtube.com/embed/JRqrDBQx4rY" title="Chaos Ring"/>
            <BannerAdOne/>
            <p><img className="repository-image" src="/images/info/chaos-ring-tooltip.png" alt="chaosring.png"/></p>
            <BannerAdTwo/>
            <h3>Details:</h3>
            <ul>
                <li>
                    Right click in inventory to pull up reset menu
                    <ul>
                        <li>You can still reset potential when ring is Unique.</li>
                        <li><strong>Ability to reset lasts 180 days. </strong>Must use cubes after that to reset pot</li>
                    </ul>
                </li>
            </ul>
            <p><img src="/images/info/chaos-ring-ui.png" alt="Chaos Ring UI"/></p>
            <ul>
                <li>
                    All stat +30, ATK, MATK +20 and HP / MP +3000
                    <ul>
                        <li>Stats can either go up or down when you reset.</li>
                        <li>Max +/- 5 ATK/MATK</li>
                    </ul>
                </li>
                <li><strong>The ring can only obtain Legendary Potential from Glowing Cubes, Bright Cubes and Solid Cubes. The reroll function only goes up to unique. The reroll works like Hard Cubes.</strong></li>
                <li>Untradable (Cannot be transferred within account). The ring itself is permanent but the Chaos Ring Coupon itself expires in 10 days if it is not used</li>
                <li>Costs 3500 coins to buy from Event Shop</li>
            </ul>
            <hr/>
            <h3>Credits:</h3>
            <p><strong>Item Image from:</strong></p>
            <p><a href="https://maplestory.wiki/GMS/251/item/1114305" target="_blank" rel="noopener noreferrer">https://maplestory.wiki/GMS/251/item/1114305</a></p>
            <BannerAdThree/>
        </EventPage>
    )
}

export default ChaosRing
