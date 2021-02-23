import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

import { DarkOverlay } from './Page';

/*
    Header image component that appears on the top of certain pages
    Created by: Ikasuu, Fall 2020
*/

// Most outer container for margins
const OuterBox = styled.div`
    margin-bottom: 4rem;
`;

// Box container for our header
const HeaderBox = styled.div`
    height: 20rem;
`;

// Header Image
const Header = styled(Image)`
    width: 100%;
    height: 100%;
    object-position: 50% 75%;
    object-fit: cover;
    box-sizing: border-box;
`;

function HeaderImage(props) {
    return (
        <OuterBox>
            <HeaderBox>
                <Header fluid src={props.imageUrl}/>
                <DarkOverlay/>
            </HeaderBox>
        </OuterBox>
    );
}

export default HeaderImage;
