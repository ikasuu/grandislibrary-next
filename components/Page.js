import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

/*
   Component with common stylized components for pages like Content, Classes, and Events
   Additionally contains common components as well
    Created by: Ikasuu, Fall 2020
*/

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3.5rem;
`;

export const ContentTitle = styled.h1`
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
`;

export const Caption = styled.p`
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.08rem;
`;

// An overlay to go over images
export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const DarkOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: inherit;
    top: 0;
    left: 0;
    background-color: #2a2829;
    opacity: 0.2;
`;

export const GradientOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0;
    left: 0;
    background: rgb(0,0,0);
    background: linear-gradient(145deg, rgba(0,0,0,1) 3%, rgba(107,107,107,0) 100%); 
    opacity: 0.8;
`;

export const ContentContainer = styled.div`
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;

    @media(min-width: 200px){
        max-width: 100%;
    }
    @media(min-width: 500px){
        padding: 0 0 0 0.5rem;
        max-width: 90%;
    }
    @media(min-width: 800px){
        padding: 0 0 0 2.5rem;
        max-width: 80%;
    }
`;

const ContentCard = styled(Card)`
    min-width: 8rem;
    margin: 0.5rem;

    @media(min-width: 200px){
        max-width: 100%;
    }
    @media(min-width: 400px){
        max-width: 45%;
    }
    @media(min-width: 800px){
        max-width: 30%;
    }
    @media(min-width: 1100px){
        max-width: 23%;
    }
    @media(min-width: 1500px){
        max-width: 23.5%;
    }
`;

const ContentCardTitle = styled(Card.Title)`
    font-size: 1.15rem;
`;

const ContentCardText = styled(Card.Text)`
    font-size: 0.9rem;
    line-height: 1.25rem;

    @media(min-width: 200px){
        font-size: 0.8rem;
    }
    @media(min-width: 430px){
        font-size: 0.85rem;
    }
    @media(min-width: 800px){
        font-size: 0.9rem;
    }
`;

export function CardContainer({content, type}) {
    return (
        <ContentContainer>
        {
            content.map((el, index) => 
                <ContentCard key={index}>
                    <Link href={`${type}/${el[0]}`}><Card.Img variant="top" src={`/thumbnail/${el[0]}.png`} alt={el[1]}/></Link>
                    <Card.Body>
                        <Link href={`${type}/${el[0]}`}><ContentCardTitle>{el[1]}</ContentCardTitle></Link>
                        <ContentCardText>{el[2]}</ContentCardText>
                    </Card.Body>
                </ContentCard>
            )
        }
    </ContentContainer>
    );
}

export const KofiButton = styled.span`
    background: url("https://i.imgur.com/2JUenYl.png");
    background-size: 10rem 2.5rem;
    width: 10rem;
    height: 2.5rem;
    display:block;
`;

export function TabLink({url}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    );
}

export default CardContainer;
