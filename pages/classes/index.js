import Head from 'next/head';

import { HeaderImageUrl, classes } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import { ClassGroupContainer } from '../../components/ClassSwipers';
import * as Page from '../../components/Page';
import BannerAdOne, { BannerAdTwo, BannerAdThree, StickyAd } from '../../components/Ads';
import { Container, Image } from 'react-bootstrap';
import Link from 'next/link';

/*
    Classes page for navigating into each Class Overview
    Created by: Ikasuu, Fall 2020
*/

function Classes() {
    return (
        <div>
            <Head>
                <title>Class Overviews | MapleStory | Grandis Library</title>
                <meta content={"A collection of MapleStory class overviews that provide a basic preview to a class' animations, stats, skills, boost nodes, hyper skills, and more."} name="description"/>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.verdel}/>
            <div>
                <Container style={{marginBottom: '2rem'}}>
                    <figure>
                        <Link href="/demon/lethe"><Image fluid rounded src="/home-thumbnail/lethe-banner.jpg" alt="Check out the new Lethe Class Overview!"/></Link>
                        <figcaption><strong>Check out the new <Link href="/demon/lethe">Lethe Class Overview!</Link></strong></figcaption>
                    </figure>
                </Container>
                <Page.Title>Classes</Page.Title>
                <Page.Subtitle>Explorers</Page.Subtitle>
                <ClassGroupContainer classes={classes.explorers} classGroup="explorers"/>
                <Container>
                    <BannerAdOne/>
                </Container>
                <Page.Subtitle>Cygnus Knights</Page.Subtitle>
                <ClassGroupContainer classes={classes.cygnusKnights} classGroup="cygnus-knights"/>
                <Page.Subtitle>Heroes</Page.Subtitle>
                <ClassGroupContainer classes={classes.heroes} classGroup="heroes"/>
                <Page.Subtitle>Resistance</Page.Subtitle>
                <ClassGroupContainer classes={classes.resistance} classGroup="resistance"/>
                <Page.Subtitle>Nova</Page.Subtitle>
                <ClassGroupContainer classes={classes.nova} classGroup="nova"/>
                <Container>
                    <BannerAdTwo/>
                </Container>
                <Page.Subtitle>Sengoku</Page.Subtitle>
                <ClassGroupContainer classes={classes.sengoku} classGroup="sengoku"/>
                <Page.Subtitle>Flora</Page.Subtitle>
                <ClassGroupContainer classes={classes.flora} classGroup="flora"/>
                <Page.Subtitle>Anima</Page.Subtitle>
                <ClassGroupContainer classes={classes.anima} classGroup="anima"/>
                <Page.Subtitle>Demon</Page.Subtitle>
                <ClassGroupContainer classes={classes.demon} classGroup="demon"/>
                <Page.Subtitle>Jianghu</Page.Subtitle>
                <ClassGroupContainer classes={classes.jianghu} classGroup="jianghu"/>
                <Page.Subtitle>Shine</Page.Subtitle>
                <ClassGroupContainer classes={classes.shine} classGroup="shine"/>
                <Page.Subtitle>Other</Page.Subtitle>
                <Page.Caption>Classes here only share Cash Shop Inventories with their own class - they do not share with each other</Page.Caption>
                <ClassGroupContainer classes={classes.other} classGroup="other"/>
                <Container>
                    <BannerAdThree/>
                </Container>
            </div>
            <StickyAd/>
        </div>
    );
}

export default Classes;
