import React from 'react';
import { Image, Figure } from 'react-bootstrap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { classes } from '../special/SiteValues';
import { Overlay } from './Page';

SwiperCore.use([Scrollbar]);

/*
This file contains the swiping elements that use the class portraits
In this file you will find:
-ClassGroupContainer - container class element on the Classes page
-TopClassSwipe - most viewed classes swiper element on the Homepage page
-ClassSwipe - swipable class element at the bottom of Class Overview
*/

/*
    Responsible for the class container element on the Classes page
    Created by: Ikasuu, Winter 2020
*/

// Container which holds all the classes for a specfic class group
const ClassContainer = styled.div`
    width: 62%;
    padding-left: 2.5rem;
    margin: auto;

    /* Adjustments to container and figures for mobile/tablet */
    @media(max-width: 1199px){
        width: 90%;
    }

    @media(max-width: 521px){
        width: 95%;
    }

    @media(max-width: 473px){
        padding-left: 1rem;
    }
`;

const ClassFigure = styled(Figure.Image)`
    margin: 0.5rem;
    @media(max-width: 473px){
        margin: 0.25rem;
    }
    @media(max-width: 422px){
        margin: 0;
    }
`;

// Styling for the title + black bar on swiper images
const FilterTitle = styled.p`
    opacity: 0;
    font-size: 1px;
    display: inline;
    position: absolute;
`;

export function ClassGroupContainer({classes, classGroup}){
    return(
        <ClassContainer>
            {classes.map(job => <FilterTitle>{job[1]}</FilterTitle>)}
            <LazyLoad height={200} offset={100}>
                {classes.map(job => 
                    <Link href={`/${classGroup}/${job[0]}`} key={job}>
                        <a className="hvr-float">
                            <Figure>
                                <ClassFigure
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`/class-portrait/${job[0]}.png`}/>
                                <Overlay/>
                            </Figure>
                        </a>
                    </Link>
                )}
            </LazyLoad>
        </ClassContainer>
    )
}

/*
    Responsible for the most viewed classes swiper element on the Homepage page
    Created by: Ikasuu, Fall 2020
*/

export function TopClassSwipe({classes}){
    return(
        <LazyLoad height={200} offset={100}>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                // when window width is >= 360px
                360: {
                    slidesPerView: 3.5,
                    },
                // when window width is >= 490px
                490: {
                    slidesPerView: 4.5,
                    },
                // when window width is >= 770px
                770: {
                    slidesPerView: 5.5,
                    },
                // when window width is >= 991px
                991: {
                    slidesPerView: 8.5,
                },
                // when window width is >= 1199px
                1199: {
                    slidesPerView: 9.5,
                    }
                }}
            >
                {
                    classes.map((content, index) => 
                    <SwiperSlide key={index}>
                        <Link href={`/${content.path}`}>
                            <a className="hvr-float">
                                <Image src={`/class-portrait/${content.class}.png`} alt={content.alt} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <div className="class-overlay"/>
                            </a>
                        </Link>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </LazyLoad>
    );
}

/*
    Responsible for the swipable class element at the bottom of Class Overview
    Created by: Ikasuu, Fall 2020
*/

function ClassSwipe({classTitle, classGroup}) {
    let name = classGroup
    
    // Removes words like (Xenon) or (Beast Tamer) for Resistance and Other type classes when displaying <h5>
    if(classGroup.includes("Resistance")){
        name = "Resistance";
    }else if(classGroup.includes("Other")){
        name = "Other";
    }

    return (
        <LazyLoad height={200} offset={100}>
            <h5>Check out some more {name} classes below:</h5>
            <Swiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    // when window width is >= 360px
                    360: {
                        slidesPerView: 3.5
                    },
                    // when window width is >= 490px
                    490: {
                        slidesPerView: 4.5
                    },
                    // when window width is >= 770px
                    770: {
                        slidesPerView: 5.5
                    },
                    // when window width is >= 991px
                    991: {
                    slidesPerView: 8.5
                    },
                    // when window width is >= 1199px
                    1199: {
                        slidesPerView: 9.5
                    }
                }}
            >
                {renderSwitch(name, classTitle)}
            </Swiper>
        </LazyLoad>
    );
}

//Renders the proper class groups based on current class group
function renderSwitch(classGroup, classTitle){
    switch (classGroup) {
        case "Explorers":
            var classArr = classes.explorers.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/explorers/[slug]" as={`/explorers/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Cygnus Knights":
            var classArr = classes.cygnusKnights.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/cygnus-knights/[slug]" as={`/cygnus-knights/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 0 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Heroes":
            var classArr = classes.heroes.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/heroes/[slug]" as={`/heroes/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Resistance":
            var classArr = classes.resistance.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/resistance/[slug]" as={`/resistance/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Nova":
            var classArr = classes.nova.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/nova/[slug]" as={`/nova/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Sengoku":
            var classArr = classes.sengoku.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/sengoku/[slug]" as={`/sengoku/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Flora":
            var classArr = classes.flora.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/flora/[slug]" as={`/flora/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Anima":
            var classArr = classes.anima.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/anima/[slug]" as={`/anima/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other":
            var classArr = classes.other.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href="/other/[slug]" as={`/other/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );

        default:
            var classArr = classes.explorers.filter(job => job[1] != classTitle);
            return(
                classArr.map((job, index) => 
                    <SwiperSlide key={index}>
                        <Link href={`/explorers/${job[0]}`}>
                            <a className="hvr-float" target="_blank" rel="noreferrer noopener">
                                <Image src={`/class-portrait/${job[0]}.png`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                                <Overlay/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )
            );
    }
}

export default ClassSwipe;
