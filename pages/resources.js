import React from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import styled from 'styled-components';
import { Card, Container, Tab, Table, Tabs } from 'react-bootstrap';
import Fuse from 'fuse.js';

import data from '../special/resource-content.json';

import HeaderImageUrl from '../special/SiteValues';
import HeaderImage from '../components/HeaderImage';
import { Title, TabLink } from '../components/Page';
import { BannerAdOne, StickyAd } from '../components/Ads';

SwiperCore.use([Scrollbar, Mousewheel]);

/*
    Resources page
    Created by: Ikasuu, Fall 2020
*/

const ResourceSubtitle = styled.h2`
    margin: 2.5rem 0 -2rem 0;

    //When additional faq class is added, use this margin instead
    &.faq{
        margin: 2.5rem 0 2rem 0;
    }
`;

// Swiper element used for the FAQ
const FaqSwiper = styled(Swiper)`
    width: 90%;
    max-height: 50rem;
    min-height: 50rem;
    overflow: hidden;
`;

// Filter search bar for FAQ
const FaqSearch = styled.input`
    margin: 0 0 1.5rem 0;
    padding-left: 1rem;
    width: 95%;
    height: 3rem;
    border: none;
    -webkit-filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
    filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
`;

// Used to center search bar fror FAQ
const FaqSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

// Styling for FAQ question title on each card
const FaqQuestion = styled(Card.Title)`
    margin: 1rem 1rem -0.5rem 1rem;
`;

// Container for the table at the top, used so we don't extend the screen for mobile
const TableContainer = styled.div`
    overflow-x: auto;
    margin: 3rem 0 3rem 0;
`;

// Create search query object that searches our data by looking at the question and tags
const fuse = new Fuse(data.faq, {keys: ["question", "tags"]});

// Custom filtering function, return original if search query returns nothing (len = 0)
const searchQuery = (term) => {
    const results = fuse.search(term);
    if(results.length){
        return results;
    }
    return data.faq;
}

function Resources() {
    // Used to store what's typed into search bar
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
        <div>
            <Head>
                <title>Resources | Grandis Library</title>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.grandis}/>
            <Title>Resources</Title>
            <Container>
                <Tabs>
                    <Tab eventKey="links" title="Useful Links">
                        <ResourceSubtitle>Useful Links</ResourceSubtitle>
                        <TableContainer>
                            <Table borderless>
                                <tbody>
                                    {data.links.map((link, index) => 
                                        <tr key={index}><td><img src={link.icon} style={{width: '32px', height: '32px'}}/></td><td>{link.title}</td><td><TabLink url={link.url}>{link.url}</TabLink></td></tr>
                                    )}
                                </tbody>
                            </Table>
                        </TableContainer>
                    </Tab>
                    <Tab eventKey="creators" title="Maple Content Creators">
                    <ResourceSubtitle>Maple Content Creators</ResourceSubtitle>
                        <TableContainer>
                            <Table borderless>
                                <tbody>
                                    {data.creators.map((link, index) => 
                                        <tr key={index}><td><img src={link.icon} style={{width: '32px', height: '32px'}}/></td><td>{link.title}</td><td><TabLink url={link.url}>{link.url}</TabLink></td></tr>
                                    )}
                                </tbody>
                            </Table>
                        </TableContainer>
                    </Tab>
                </Tabs>
                <ResourceSubtitle className="faq">Frequently Asked Questions</ResourceSubtitle>
                <FaqSearchWrapper><FaqSearch className="faq-search" type="text" placeholder="Search" onChange={event => setSearchTerm((event.target.value))}></FaqSearch></FaqSearchWrapper>
                <FaqSwiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView="auto"
                direction="vertical"
                freeMode
                mousewheel
                >
                    {
                        // Since fuse returns a slightly different object, we need to use a ternary to adjust based on if the original is returned or the filtered is returned
                        searchQuery(searchTerm).map( (question, index) => 
                        <SwiperSlide key={index}>
                            <Card>
                                <FaqQuestion>{question.question ? question.question : question.item.question}</FaqQuestion>
                                <Card.Body>
                                    {question.answer ? question.answer.map((answer, index) => <Card.Text key={index}>{answer}</Card.Text>) : question.item.answer.map((answer, index) => <Card.Text key={index}>{answer}</Card.Text>)}
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        )
                    }
                </FaqSwiper>
                <BannerAdOne/>
            </Container>
            <StickyAd/>
        </div>
    );
}

export default Resources;
