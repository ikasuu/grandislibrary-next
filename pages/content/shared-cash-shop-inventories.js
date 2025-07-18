import React from 'react'
import styled from 'styled-components';
import Head from 'next/head';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { StickyAd } from '../../components/Ads';

const TableContainer = styled.div`
    overflow-x: auto;
    margin: 3rem 0 3rem 0;
`;

const StyledTd = styled.td`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.25rem;
`;

const StyledP = styled.p`
    margin: 2rem 0 2rem 0;
`;

const ClassBlock = styled.tr`
    background-color: ${props => props.color};
`;

function SharedCashShopInventory() {
    return (
        <ContentPage>
            <Head>
                <title>Shared Cash Shop Inventories | MapleStory | Grandis Library</title>
                <meta content={"A table chart of all classes and class groups that share Cash Shop inventories with each other."} name="description"/>
            </Head>
            <ContentTitle>Shared Cash Shop Inventories</ContentTitle>
            <StickyAd/>
            <img src="/images/info/cash-shop-inventory.png" alt="Cash Shop Inventory"/>
            <StyledP>Below is a list of classes that share Cash Shop inventories. Each different color group shares Cash Shop inventories</StyledP>
            <TableContainer>
            <table>
                <thead>
                <tr>
                    <th/>
                    <th>Warrior</th>
                    <th>Magician</th>
                    <th>Archer</th>
                    <th>Thief</th>
                    <th>Pirate</th>
                </tr>
                </thead>
                <tbody>
                <ClassBlock color="#79ADDC">
                    <StyledTd style={{color: 'black'}}><strong>Explorers</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Paladin</StyledTd>
                    <StyledTd style={{color: 'black'}}>Ice / Lightning Mage</StyledTd>
                    <StyledTd style={{color: 'black'}}>Marksman</StyledTd>
                    <StyledTd style={{color: 'black'}}>Night Lord</StyledTd>
                    <StyledTd style={{color: 'black'}}>Cannoneer</StyledTd>
                </ClassBlock>
                <ClassBlock color="#79ADDC">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Dark Knight</StyledTd>
                    <StyledTd style={{color: 'black'}}>Fire / Poison Mage</StyledTd>
                    <StyledTd style={{color: 'black'}}>Bowmaster</StyledTd>
                    <StyledTd style={{color: 'black'}}>Shadower</StyledTd>
                    <StyledTd style={{color: 'black'}}>Buccaneer</StyledTd>
                </ClassBlock>
                <ClassBlock color="#79ADDC">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Hero</StyledTd>
                    <StyledTd style={{color: 'black'}}>Bishop</StyledTd>
                    <StyledTd style={{color: 'black'}}>Pathfinder</StyledTd>
                    <StyledTd style={{color: 'black'}}>Dual Blade</StyledTd>
                    <StyledTd style={{color: 'black'}}>Corsair</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#FFC09F">
                    <StyledTd style={{color: 'black'}}><strong>Cygnus Knights</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Dawn Warrior</StyledTd>
                    <StyledTd style={{color: 'black'}}>Blaze Wizard</StyledTd>
                    <StyledTd style={{color: 'black'}}>Wind Archer</StyledTd>
                    <StyledTd style={{color: 'black'}}>Night Walker</StyledTd>
                    <StyledTd style={{color: 'black'}}>Thunder Breaker</StyledTd>
                </ClassBlock>
                <ClassBlock color="#FFC09F">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Mihile</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#01DCF8">
                    <StyledTd style={{color: 'black'}}><strong>Heroes</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Aran</StyledTd>
                    <StyledTd style={{color: 'black'}}>Luminous</StyledTd>
                    <StyledTd style={{color: 'black'}}>Mercedes</StyledTd>
                    <StyledTd style={{color: 'black'}}>Phantom</StyledTd>
                    <StyledTd style={{color: 'black'}}>Shade</StyledTd>
                </ClassBlock>
                <ClassBlock color="#01DCF8">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Evan</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#ADF7B6">
                    <StyledTd style={{color: 'black'}}><strong>Resistance</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Blaster</StyledTd>
                    <StyledTd style={{color: 'black'}}>Battle Mage</StyledTd>
                    <StyledTd style={{color: 'black'}}>Wild Hunter</StyledTd>
                    <StyledTd style={{color: 'black'}}>Xenon</StyledTd>
                    <StyledTd style={{color: 'black'}}>Mechanic</StyledTd>
                </ClassBlock>
                <ClassBlock color="#ADF7B6">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Demon Slayer</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#ADF7B6">
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Demon Avenger</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#93B7BE">
                    <StyledTd style={{color: 'black'}}><strong>Nova</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Kaiser</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Kain</StyledTd>
                    <StyledTd style={{color: 'black'}}>Cadena</StyledTd>
                    <StyledTd style={{color: 'black'}}>Angelic Buster</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#FEBDDF">
                    <StyledTd style={{color: 'black'}}><strong>Sengoku</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Hayato</StyledTd>
                    <StyledTd style={{color: 'black'}}>Kanna</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#E65F5C">
                    <StyledTd style={{color: 'black'}}><strong>Flora</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Adele</StyledTd>
                    <StyledTd style={{color: 'black'}}>Illium</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Khali</StyledTd>
                    <StyledTd style={{color: 'black'}}>Ark</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#2EC4B6">
                    <StyledTd style={{color: 'black'}}><strong>Anima</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Lara</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Hoyoung</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#D2FCCC">
                    <StyledTd style={{color: 'black'}}><strong>Jianghu</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Lynn</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Mo Xuan</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#7767EA">
                    <StyledTd style={{color: 'black'}}><strong>Shine</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Sia Astelle</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#C7CFDA">
                    <StyledTd style={{color: 'black'}}><strong>FriendStory</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}>Kinesis</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                <ClassBlock color="#FADE8C">
                    <StyledTd style={{color: 'black'}}><strong>Child of God<strong/></strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Zero</StyledTd>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                    <StyledTd style={{color: 'black'}}/>
                </ClassBlock>
                </tbody>
            </table>
        </TableContainer>
        <BannerAdOne/>
      </ContentPage>
    );
}

export default SharedCashShopInventory;
