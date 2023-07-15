import React from 'react';
import Head from 'next/head';

import { HeaderImageUrl } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import { content } from '../../special/SiteContent';
import * as Page from '../../components/Page';
import BannerAdOne, { BannerAdTwo, StickyAd } from '../../components/Ads';
import { Container } from 'react-bootstrap';

/*
    Content page
    Created by: Ikasuu, Fall 2020
*/

function Content() {
    return (
        <div>
            <Head>
                <title>Content | MapleStory | Grandis Library</title>
                <meta content={"A collection of information related to content in MapleStory such as boss pre-quests, attack speed, abnormal statuses, cash shop inventories, progression, and more."} name="description"/>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.ristonia}/>
            <Page.Title>Content</Page.Title>
            <StickyAd/>
            <Page.Subtitle>Gameplay Related</Page.Subtitle>
            <Page.CardContainer content={content.gameplay} type="content"/>
            <Container>
                <BannerAdOne/>
            </Container>
            <Page.Subtitle>Class Related</Page.Subtitle>
            <Page.CardContainer content={content.class} type="content"/>
            <Page.Subtitle>Equipment Related</Page.Subtitle>
            <Page.CardContainer content={content.equipment} type="content"/>
            <Container>
                <BannerAdTwo/>
            </Container>
        </div>
    );
}

export default Content;
