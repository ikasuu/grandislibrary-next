import React from 'react';

import Video from '../../components/repository/Video';

function ChaosRing() {
    return (
        <div>
            <p>Introduced during the ARK update, this new event ring allows the user to<strong> reset it's stats and potential up to 10 times per week (resets Mondays)</strong>. But, the ability to reset the ring lasts 180 days. After that, you will need to use<strong> Cubes to reset the potential</strong>. The ring can be cubed to LEGENDARY but the weekly free rerolls only go up to UNIQUE</p>
            <Video src="https://www.youtube.com/embed/JRqrDBQx4rY" title="Chaos Ring"/>
            <p><img className="repository-image" src="https://i.imgur.com/DzWzjVV.png" alt="chaosring.png"/></p>
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
            <p><img src="https://i.imgur.com/vgZSBqw.png" alt="Chaos Ring UI"/></p>
            <ul>
                <li>
                    All stat +30, ATK, MATK +20 and HP / MP +3000
                    <ul>
                        <li>Stats can either go up or down when you reset.</li>
                        <li>Max +/- 5 ATK/MATK</li>
                    </ul>
                </li>
                <li><strong>The ring can only obtain Legendary Potential from Red Cubes, Black Cubes and Meister Cubes. The reroll function only goes up to unique. The reroll works like Master Craftsman's Cubes.</strong></li>
                <li>Untradable (Cannot be transferred within account). The ring itself is permanent but the Chaos Ring Coupon itself expires in 10 days if it is not used</li>
                <li>Costs 3500 coins to buy from Event Shop</li>
            </ul>
            <hr/>
            <h3>Credits:</h3>
            <p><strong>Item Image from:</strong></p>
            <p><a href="https://maplestory.wiki/GMS/210.1.1/item/1114305" target="_blank" rel="noopener noreferrer">https://maplestory.wiki/GMS/210.1.1/item/1114305</a></p>
        </div>
    )
}

export default ChaosRing
