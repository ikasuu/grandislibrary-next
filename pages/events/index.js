import React from 'react';
import Head from 'next/head';

import { HeaderImageUrl } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import { events } from '../../special/SiteContent';
import * as Page from '../../components/Page';
import AdNavigation from '../../components/Ads';

/*
    Events page
    Created by: Ikasuu, Fall 2020
*/

function Events() {
    return (
        <div>
            <Head>
                <title>Events | Grandis Library</title>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.fox}/>
            <Page.Title>Events</Page.Title>
            <Page.Subtitle>Training Related</Page.Subtitle>
            <Page.CardContainer content={events.training} type="events"/>
            <Page.Subtitle>Item Related</Page.Subtitle>
            <Page.CardContainer content={events.item} type="events"/>
            <Page.Subtitle>Update Related</Page.Subtitle>
            <Page.CardContainer content={events.update} type="events"/>
            {/* <AdNavigation/> */}
        </div>
    );
}

export default Events;
