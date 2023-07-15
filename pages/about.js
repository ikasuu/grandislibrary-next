import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderImageUrl from '../special/SiteValues';
import HeaderImage from '../components/HeaderImage';
import { Subtitle, Title } from '../components/Page';

/*
    About page
    Created by: Ikasuu, Fall 2020
*/

const AboutTitle = styled(Title)`
    text-align: left;

    // 0 - 1199 px
    @media(max-width: 1199px){
        margin-left: 1rem;
    }
`;

const AboutSubtitle = styled(Subtitle)`
    text-align: left;
`;

const LeftWrapper = styled(Col)`
    max-width: 35rem;

    // 200+px
    @media(min-width: 200px){
        margin: 0 1rem 0 1rem;
    }
    // 1201+px
    @media(min-width: 1201px){
        margin: 0 5rem 0 0;
    }
    // 0 - 1199px
    @media(max-width: 1199px){
        max-width: 28rem;
    }
    // 0 - 992px
    @media(max-width: 992px){
        max-width: 40rem;
    }
`;

const RightWrapper = styled(Col)`
    max-width: 31rem;

    // 0 - 1199px
    @media(max-width: 1199px){
        max-width: 29rem;
    }
    // 0 - 992px
    @media(max-width: 992px){
        margin: 0 0.5rem 0 0.5rem;
        max-width: 40rem;
    }
`;

const CharacterImage = styled.img`
    margin: 2rem 0 1rem 0;
    max-width: 100%;
    height: auto;
`;

const BeraIcon = styled.img`
    max-width: 2rem;
`;

function About(){

    return (
        <div>
            <Head>
                <title>About | MapleStory | Grandis Library</title>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container>
                <AboutTitle>About</AboutTitle>  
                <Row>
                    <LeftWrapper md="auto">
                        <AboutSubtitle>Who am I?</AboutSubtitle>
                        <p>I am Ikasuu, a Hayato in Bera. I used to play on KMS from 2011-2018 before my KMS account went into Protection Mode. Prior to that, I played GMS from 2005 - 2011. If you want to find me in game, I am usually training or chilling at Arcana and Morass</p>
                        <AboutSubtitle>What is Grandis Library?</AboutSubtitle>
                        <p>Grandis Library is a passion project of mine. What I noticed during my time playing was that information on MapleStory can be hard to find and you need to be continuously playing in order to keep up to date. Additionally, most information is buried within Patch Notes to be lost and forgotten. I wanted to unify and organize the information so that content can be easily found and navigated through for both new and returning players</p>
                        <p>As you will notice from the site, I’ve designed it in a way that the content is comprehensive and easy to maintain so that it does not become outdated. Numbers and values are scarce to remove any complexity and as a part of the maintainability aspect. Links are abundant to help redirect users to other useful resources and information. Overall, I wanted the navigation of the site to be simple and not overwhelming. As a downside, some pages may be very long but, I’ve added Quick Jumps to help navigate through them</p>
                        <p>Information on the site is also catered to GMS players but a lot of the content can also be applied to other servers as well</p>
                        <p>I hope that you find this site to be useful! 8)</p>
                        <p>-Ikasuu</p>
                    </LeftWrapper>
                    <RightWrapper md="auto">
                        <CharacterImage src="/images/info/ikasuu-character.png" alt="Ikasuu"/>
                        <p>IGN - Ikasuu <BeraIcon src="/images/info/bera.png" alt="Bera Icon"/></p>
                    </RightWrapper>
                </Row>
            </Container>
        </div>
    );
}

export default About;