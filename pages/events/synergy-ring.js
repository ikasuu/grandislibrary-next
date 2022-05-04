import React from 'react';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import Video from '../../components/repository/Video';
import { AdOutArticle } from '../../components/Ads';

function SynergyRing() {
    return (
        <EventPage>
            <Head>
                <title>Synergy Ring | Grandis Library</title>
                <meta content={"An event ring that gains increased stats depending on how many characters you have the ring equipped on the same world"} name="description"/>
            </Head>
            <ContentTitle>Synergy Ring</ContentTitle>
            <p>The Synergy Ring is an <strong>event ring</strong> that costs <strong>800 coins </strong>during major events with a coin shop. The special feature of this ring is that you gain a "Bonus Set Effect" based on how many characters of your characters (in the same world) have the ring equipped. That means the total cost will be <strong>4000 coins </strong>to have the full benefits of the ring. The ring can also obtain a potential <strong>(there are special Craftsman's Cube for the ring itself at a discounted price)</strong></p>
            <Video /images/info/starforce-sucess.pngs://www.youtube.com/embed/t-s2u7ANvUI" title="Synergy Ring"/>
            <p><img className="repository-image" src="/images/info/synergy-ring-tooltip.png" alt="Synergy Ring Item"/></p>
            <h3>Details:</h3>
            <ul>
                <li>
                    The ring will initially give you +10 ALL STATS, +1000 HP &amp; MP and +12 ATK &amp; MATK.
                    <ul>
                        <li>This is because you will gain the benefit of one character equipping the ring.</li>
                    </ul>
                </li>
                <li>If you have the complete set bonus, you will gain +30 ALL STATS, +3000 HP &amp; MP and +20 ATK &amp; MATK.</li>
                <li>Synergy Ring Only Cubes costs 30 coins each. <strong>5 PER DAY</strong></li>
            </ul>
            <hr/>
            <h3>Credits:</h3>
            <p><strong>Item Image from:</strong></p>
            <p><a href="https://maplestory.wiki/GMS/210.1.1/item/1114302" target="_blank" rel="noopener noreferrer">https://maplestory.wiki/GMS/210.1.1/item/1114302</a></p>
            <AdOutArticle/>
        </EventPage>
    )
}

export default SynergyRing
