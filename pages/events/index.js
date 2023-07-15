import React from 'react';
import Head from 'next/head';

import { HeaderImageUrl } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import { events } from '../../special/SiteContent';
import * as Page from '../../components/Page';
import BannerAdOne, { BannerAdTwo, StickyAd } from '../../components/Ads';
import { Container } from 'react-bootstrap';

/*
    Events page
    Created by: Ikasuu, Fall 2020
*/

function Events() {
    return (
        <div>
            <Head>
                <title>Events | MapleStory | Grandis Library</title>
                <meta content={"A collection of information related to events in MapleStory such as Burning Worlds, Mega Burning, Tera Burning, Maplehood Watch, Maple Relay, and more."} name="description"/>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.fox}/>
            <Page.Title>Events</Page.Title>
            <Page.Subtitle>Training Related</Page.Subtitle>
            <Page.CardContainer content={events.training} type="events"/>
            <Container>
                <BannerAdOne/>
            </Container>
            <Page.Subtitle>Item Related</Page.Subtitle>
            <Page.CardContainer content={events.item} type="events"/>
            <Page.Subtitle>Update Related</Page.Subtitle>
            <Page.CardContainer content={events.update} type="events"/>
            <Container>
                <BannerAdTwo/>
            </Container>
            <StickyAd/>
        </div>
    );
}

export default Events;
