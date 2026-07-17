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
                <title>Privacy Policy | MapleStory | Grandis Library</title>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container>
                <PrivacyTitle>Privacy Policy</PrivacyTitle>
                <PrivacySubtitle>Last Revised July 16th, 2026</PrivacySubtitle>
                <p>This page informs you of how Grandis Library ("us", "we", "our", or "Website") collects, uses, and shares information about you when you use our site grandislibrary.com.</p>
                <p>By using our site, you agree to the collection and use of information in accordance with this policy.</p> 
                <PrivacySubject>Advertising and Analytics</PrivacySubject>
                <p>We use Google Analytics and Cloudflare Analytics to analyse the use of our website. Google Analytics gathers information about website use by means of cookies however, Cloudflare Analytics do not use cookies. The information gathered relating to our website is used to create reports about the use of our website.</p>
                <p>Google's privacy policy is available at: <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noreferrer noopener">https://www.google.com/policies/privacy/</a>.</p>
                <p>Cloudflare's privacy policy is available at: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer noopener">https://www.cloudflare.com/privacypolicy/</a>.</p>
                <PrivacySubject>Mediavine Programmatic Advertising (Ver 1.1)</PrivacySubject>
                <p>The Website works with Mediavine to manage third-party interest-based advertising appearing on the Website. Mediavine serves content and advertisements when you visit the Website, which may use first and third-party cookies. A cookie is a small text file which is sent to your computer or mobile device (referred to in this policy as a “device”) by the web server so that a website can remember some information about your browsing activity on the Website.</p>
                <p>First party cookies are created by the website that you are visiting. A third-party cookie is frequently used in behavioral advertising and analytics and is created by a domain other than the website you are visiting. Third-party cookies, tags, pixels, beacons and other similar technologies (collectively, “Tags”) may be placed on the Website to monitor interaction with advertising content and to target and optimize advertising. Each internet browser has functionality so that you can block both first and third-party cookies and clear your browser’s cache. The "help" feature of the menu bar on most browsers will tell you how to stop accepting new cookies, how to receive notification of new cookies, how to disable existing cookies and how to clear your browser’s cache. For more information about cookies and how to disable them, you can consult the information at <a href="https://www.allaboutcookies.org/manage-cookies/" target="_blank" rel="noreferrer noopener nofollow">All About Cookies</a>.</p>
                <p>Without cookies you may not be able to take full advantage of the Website content and features. Please note that rejecting cookies does not mean that you will no longer see ads when you visit our Site. In the event you opt-out, you will still see non-personalized advertisements on the Website.</p>
                <p>The Website collects the following data using a cookie when serving personalized ads:</p>
                <ul><li>IP Address</li><li>Operating System type</li><li>Operating System version</li><li>Device Type</li><li>Language of the website</li><li>Web browser type</li><li>Email (in hashed form)</li></ul>
                <p>Mediavine Partners (companies listed below with whom Mediavine shares data) may also use this data to link to other end user information the partner has independently collected to deliver targeted advertisements. Mediavine Partners may also separately collect data about end users from other sources, such as advertising IDs or pixels, and link that data to data collected from Mediavine publishers in order to provide interest-based advertising across your online experience, including devices, browsers and apps. This data includes usage data, cookie information, device information, information about interactions between users and advertisements and websites, geolocation data, traffic data, and information about a visitor’s referral source to a particular website. Mediavine Partners may also create unique IDs to create audience segments, which are used to provide targeted advertising.</p>
                <p>If you would like more information about this practice and to know your choices to opt-in or opt-out of this data collection, please visit <a href="https://thenai.org/opt-out/" target="_blank" rel="noreferrer noopener nofollow">National Advertising Initiative opt out page</a>. You may also visit <a href="http://optout.aboutads.info/#/" target="_blank" rel="noreferrer noopener nofollow">Digital Advertising Alliance website</a> and <a href="http://optout.networkadvertising.org/#" target="_blank" rel="noreferrer noopener nofollow">Network Advertising Initiative website</a> to learn more information about interest-based advertising. You may download the AppChoices app at <a href="https://youradchoices.com/appchoices" target="_blank" rel="noreferrer noopener nofollow">Digital Advertising Alliance’s AppChoices app</a> to opt out in connection with mobile apps, or use the platform controls on your mobile device to opt out.</p>
                <p>For specific information about Mediavine Partners, the data each collects and their data collection and privacy policies, please visit <a href="https://www.mediavine.com/ad-partners/" target="_blank" rel="noreferrer noopener nofollow">Mediavine Partners</a>.</p>
                <PrivacySubject>Cookies</PrivacySubject>
                <p>Grandis Library does not directly use cookies however third party advertisers and analytics use cookies for services such as serving and rendering ads, and user statistics. By accessing Grandis Library, you consent to the collection and use of your information by these third party vendors.</p>
                <p>Google Analytics uses cookies however Cloudflare Analytics does not use any cookies. Google Analytics uses cookies to collect information and report site usage statistics without personally identifying individual users.</p>
                <p>To learn more about how Google Analytics uses cookies, please visit <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/cookies</a></p>
                <p>To learn more about Cloudflare Analytics, please visit <a href="https://www.cloudflare.com/en-ca/web-analytics/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/en-ca/web-analytics/</a></p>
                <PrivacySubject>Local Storage</PrivacySubject>
                <p>Local storage is used and stored by your browser for our site in your device's storage. Local storage is used for settings such as determining the theme of the site (dark mode or light mode) and whether to hide skill animations on Class Overviews.</p>
                <p>Grandis Library does not collect any personal data. Local storage values do not contain any personal information and are only used to provide a more personalized and persistent experience between each page session.</p>
                <PrivacySubject>Changes to this Policy</PrivacySubject>
                <p>We may change this Privacy Policy from time to time to reflect changes to our practices, or for legal, technical, or operational reasons. If we do, we will let you know by revising the date at the top of the policy. By continuing to use our site after Privacy Policy changes go into effect, you agree to be bound by the revised policy.</p>
                <PrivacySubject>Contact</PrivacySubject>
                <p>If you have any questions about this Privacy Policy, please contact us <a href="mailto:mapleshinnie@gmail.com" target="_blank" rel="noreferrer noopener">mapleshinnie@gmail.com</a>.</p>
            </Container>
        </div>
    )
}

export default Privacy;
