import React from 'react';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import styled from 'styled-components';

import { Overlay, GradientOverlay } from './Page';

SwiperCore.use([Pagination, Autoplay, Navigation]);

/*
This file contains the swiping elements used on the homepage
In this file you will find:
-FeaturedSwiper - swiper to display featured banners
-ContentSwiper - swiper used to display banners
*/

/*
    Responsible for the big main banner for featured banners on the homepage
    Created by: Ikasuu, Winter 2020
*/

// Round the corners of swiper images
const ContentImage = styled(Image)`
    border-radius: 1rem;
`;

function FeaturedSwiper({content}) {
    return (
        <Swiper
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            navigation
        >
            {
                content.map((content, index) => 
                <SwiperSlide key={index} className="content-slide">
                    <a href={content.link} target="_blank" rel="noreferrer noopener">
                    <ContentImage src={content.image} alt={content.alt} fluid/>
                    <Overlay/>
                    </a>
                </SwiperSlide>
                )
            }
        </Swiper>
    );
}

/*
    Responsible for the smaller banners on the homepage
    Created by: Ikasuu, Fall 2020
*/

// Launch button stylization
const ContentLaunch = styled.span`
    background: url("${process.env.PUBLIC_URL}/icons/launch-white-18dp.svg");
    background-size: 1.5rem 1.5rem !important;
    -webkit-filter: drop-shadow( 3px 3px 1px rgba(0, 0, 0, .8));
    filter: drop-shadow( 3px 3px 1px rgba(0, 0, 0, .8));
    height: 1.5rem;
    width: 1.5rem;
    display:block;
    position: absolute;
    margin: 1rem 1rem 0 0;
    top: 0;
    right: 0;
`;

// Styling for the title + black bar on swiper images
const ContentTitle = styled.p`
    font-family: acumin-pro, sans-serif !important;
    font-size: 1.25rem;
    background-color: black;
    color: white;
    display: inline;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    position: absolute;
    margin: 0 0 2rem 0;
    bottom: 0;
    left: 0;
`;

// Styling for text w/o black bar such as date
const ContentSubtitle = styled.p`
    font-family: acumin-pro, sans-serif !important;
    font-size: 1.1rem;
    text-shadow: 1px 1px black;
    color: white;
    display: inline;
    position: absolute;
    margin: 0.5rem;
    top: 0;
    left: 0;
`;

export function ContentSwiper({content, launch}){
    return(
        <Swiper
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            centeredSlides
            loop
            breakpoints={{
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
                },
            // when window width is >= 991px
            991: {
                slidesPerView: 2,
            }
        }}
        >
        {
            content.map((content, index) => 
            <SwiperSlide key={index} className="content-slide">
                <a href={content.link} target="_blank" rel="noreferrer noopener">
                <ContentImage src={content.image} alt={content.alt} fluid/>
                <GradientOverlay/>
                { launch && <ContentLaunch/>}
                <ContentTitle>{content.title}</ContentTitle>
                <ContentSubtitle>{content.subtitle}</ContentSubtitle>
                </a>
            </SwiperSlide>
            )
        }
        </Swiper>
    );
}

export default FeaturedSwiper;
