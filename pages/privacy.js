import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import HeaderImageUrl from '../special/SiteValues';
import HeaderImage from '../components/HeaderImage';
import { Subtitle, Title } from '../components/Page';

/*
    Privacy Policy page
    Created by: Ikasuu, Spring 2021
*/

const PrivacyTitle = styled(Title)`
    text-align: left;

    // 0 - 1199 px
    @media(max-width: 1199px){
        margin-left: 1rem;
    }
`;

const PrivacySubtitle = styled(Subtitle)`
    text-align: left;
    font-style: italic;
    font-size: 1.25rem;
`;

const PrivacySubject = styled.h3`
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    font-size: 2rem;
`;

function Privacy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy | Grandis Library</title>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container>
                <PrivacyTitle>Privacy Policy</PrivacyTitle>
                <PrivacySubtitle>Last Revised April 14th, 2021</PrivacySubtitle>
                <p>This page informs you of how Grandis Library ("us", "we", or "our") collects, uses, and shares information about you when you use our site grandislibrary.com.</p>
                <p>By using our site, you agree to the collection and use of information in accordance with this policy.</p> 
                <PrivacySubject>Cloudflare Analytics</PrivacySubject>
                <p>To monitor and analyze user's use of our site, we use a third party service called Cloudflare Analytics. We use this service to determine the popularity of content and better understand online activity and user behavior. By accessing our site, you consent to the collection and use of your information by Cloudflare Analytics. You are encouraged to review their privacy policy and contact them for repsonses to your questions.</p>
                <PrivacySubject>Local Storage</PrivacySubject>
                <p>There are at most two local storage values stored by your browser for our site in your device's storage. Local storage is solely used to determine the theme of the site (dark mode or light mode) and whether to hide skill animations on Class Overviews.</p>
                <p>Local storage values do not contain any personal data and are only used to provide a more personalized and persistant experience between each page session.</p>
                <PrivacySubject>Changes to this Policy</PrivacySubject>
                <p>We may change this Privacy Policy from time to time to reflect changes to our practices, or for legal, technical, or operational reasons. If we do, we will let you know by revising the date at the top of the policy. By continuing to use our site after Privacy Policy changes go into effect, you agree to be bound by the revised policy.</p>
                <PrivacySubject>Contact</PrivacySubject>
                <p>If you have any questions about this Privacy Policy, please contact us <a href="mailto:mapleshinnie@gmail.com" target="_blank" rel="noreferrer noopener">mapleshinnie@gmail.com</a>.</p>
            </Container>
        </div>
    )
}

export default Privacy;
