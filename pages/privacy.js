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
                <PrivacySubtitle>Last Revised October 3rd, 2022</PrivacySubtitle>
                <p>This page informs you of how Grandis Library ("us", "we", or "our") collects, uses, and shares information about you when you use our site grandislibrary.com.</p>
                <p>By using our site, you agree to the collection and use of information in accordance with this policy.</p> 
                <PrivacySubject>Advertising and Analytics</PrivacySubject>
                <p>We use third party services such as AdSense, Google Analytics, and Cloudflare Analytics to monitor and analyze user's use of our site. We use this service to determine the popularity of content and better understand online activity and user behavior. By accessing our site, you consent to the collection and use of your information by these third party services. You are encouraged to review their privacy policy and contact them for repsonses to your questions.</p>
                <PrivacySubject>Cookies</PrivacySubject>
                <p>Grandis Library does not directly use cookies however third party services such as AdSense use cookies for advertising, including serving and rendering ads, and personalizing ads (depending on your ad settings). AdSense also uses cookies for limiting the number of times an ad is shown to the user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads. By accessing Grandis Library, you consent to the collection and use of your information by these third party vendors. To opt out of personalized ads, please visit <a href="https://adssettings.google.com" target="_blank" rel="noreferrer noopener">https://adssettings.google.com</a>.</p>
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
