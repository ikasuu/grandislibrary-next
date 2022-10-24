import React from 'react';
import { Container } from 'react-bootstrap';

import data from '../special/home-content.json';

import FeaturedSwiper, { ContentSwiper } from '../components/ContentSwipers';
import { TopClassSwipe } from '../components/ClassSwipers';
import GridContainer from '../components/homepage/GridContainer';
import { BannerAdOne, BannerAdTwo, StickyAd } from '../components/Ads';
import Head from 'next/head';

/*
    Homepage
    Created by: Ikasuu, Fall 2020
*/

function Home(){
  return(
    <div style={{marginTop: '-1rem'}}>
      <Head>
        <meta name="description" property="og:description" content="A collection of MapleStory guides, resources and information."/>
      </Head>
      <GridContainer/>
      <Container>
        <FeaturedSwiper content={data.featured}/>
        <BannerAdOne/>
        <h3>Recent News in Global MapleStory</h3>
        <ContentSwiper content={data.recent} launch={true}/>
        <h3>Upcoming Updates</h3>
        <ContentSwiper content={data.upcoming} launch={true}/>
        <h3>Popular Content</h3>
        <ContentSwiper content={data.popularContent} launch={false}/>
        <h3>Last Month's Most Viewed Classes</h3>
        <TopClassSwipe classes={data.popularClasses}/>
        <BannerAdTwo/>
      </Container>
      <StickyAd/>
    </div>
  );
}

export default Home;


