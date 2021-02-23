import React from 'react'
import styled from 'styled-components';

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
        <div>
            <img src="https://i.imgur.com/r9iQ8pR.png" alt="Cash Shop Inventory"/>
            <StyledP>Below is a list of classes that share Cash Shop inventories. Each different color group shares Cash Shop inventories</StyledP>
            <TableContainer>
            <table>
                <thead>
                <tr>
                    <th />
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
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Dark Knight</StyledTd>
                    <StyledTd style={{color: 'black'}}>Fire / Poison Mage</StyledTd>
                    <StyledTd style={{color: 'black'}}>Bowmaster</StyledTd>
                    <StyledTd style={{color: 'black'}}>Shadower</StyledTd>
                    <StyledTd style={{color: 'black'}}>Buccaneer</StyledTd>
                </ClassBlock>
                <ClassBlock color="#79ADDC">
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Hero</StyledTd>
                    <StyledTd style={{color: 'black'}}>Bishop</StyledTd>
                    <StyledTd style={{color: 'black'}}>Pathfinder</StyledTd>
                    <StyledTd style={{color: 'black'}}>Dual Blade</StyledTd>
                    <StyledTd style={{color: 'black'}}>Corsair</StyledTd>
                </ClassBlock>
                <ClassBlock color="#79ADDC">
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Jett / Zen</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
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
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Mihile</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#FFEE93">
                    <StyledTd style={{color: 'black'}}><strong>Heroes</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Aran</StyledTd>
                    <StyledTd style={{color: 'black'}}>Luminous</StyledTd>
                    <StyledTd style={{color: 'black'}}>Mercedes</StyledTd>
                    <StyledTd style={{color: 'black'}}>Phantom</StyledTd>
                    <StyledTd style={{color: 'black'}}>Shade</StyledTd>
                </ClassBlock>
                <ClassBlock color="#FFEE93">
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Evan</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
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
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Demon Slayer</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#ADF7B6">
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Demon Avenger</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#93B7BE">
                    <StyledTd style={{color: 'black'}}><strong>Nova</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Kaiser</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Cadena</StyledTd>
                    <StyledTd style={{color: 'black'}}>Angelic Buster</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#B5D99C">
                    <StyledTd style={{color: 'black'}}><strong>Sengoku</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Hayato</StyledTd>
                    <StyledTd style={{color: 'black'}}>Kanna</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#E65F5C">
                    <StyledTd style={{color: 'black'}}><strong>Flora</strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Adele</StyledTd>
                    <StyledTd style={{color: 'black'}}>Illium</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Ark</StyledTd>
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#B2F7EF">
                    <StyledTd style={{color: 'black'}}><strong>FriendStory</strong></StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Kinesis</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#F7D6E0">
                    <StyledTd style={{color: 'black'}}><strong>Child of God<strong /></strong></StyledTd>
                    <StyledTd style={{color: 'black'}}>Zero</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#2EC4B6">
                    <StyledTd style={{color: 'black'}}><strong>Anima</strong></StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Hoyoung</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                <ClassBlock color="#8B95C9">
                    <StyledTd style={{color: 'black'}}><strong>Beast Tamer</strong></StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}}>Beast Tamer</StyledTd>
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                    <StyledTd style={{color: 'black'}} />
                </ClassBlock>
                </tbody>
            </table>
        </TableContainer>
        <StyledP>For an image version of this check out: </StyledP>
        <a href="https://cdn.discordapp.com/attachments/312354082356592641/678635478618210324/unknown.png" target="_blank" rel="noopener noreferrer">https://cdn.discordapp.com/attachments/312354082356592641/678635478618210324/unknown.png</a>
        <ul>
        <li>Credits to Kradian South #4949 for the image version</li>
        </ul>
      </div>
    );
}

export default SharedCashShopInventory;
