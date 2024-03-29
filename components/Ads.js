import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

/*
This file contains the Adsense ad elements
In this file you will find:
-BannerAdOne/Two/Three - horizontal banner ads containing both desktop & mobile ads (728x90) / (320x50)
-StickyAd - horizontal banner ads containing both desktop & mobile ads that are stickied to the bottom of the screen
-VideoAd - video ad that stickies to the bottom left of the screen
*/

/*
    Created by: Ikasuu, Spring 2022
      ~Fall 2022 updated ad format
*/

//AdWrapper - component to wrap around Ad unit to add margin spacing
const AdWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 1rem 0;
`;

const AdRowWrapper = styled(Row)`
  margin: 1rem 0 1rem 0;
`

export function BannerAdOne(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <AdWrapper>
      <div id="nn_lb1"></div>
      <div id="nn_mobile_lb1"></div>
    </AdWrapper>
  )
}

export function BannerAdTwo(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <AdWrapper>
      <div id="nn_lb3"></div>
      <div id="nn_mobile_lb3"></div>
    </AdWrapper>
  )
}

export function BannerAdThree(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <AdWrapper>
      <div id="nn_lb4"></div>
    </AdWrapper>
  )
}

export function StickyAd(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <div>
      <div id="nn_lb2"></div>
      <div id="nn_mobile_lb2"></div>
    </div>
    
  )
}

export function VideoAdClassOverview(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <div id="nn_player"></div>
  )
}

export function VideoAd(){
  useEffect(() => {
    try {
      (window.reloadAdSlots());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return(
    <Container>
      <AdRowWrapper md={2}>
        <Col>
          <div id="nn_player"></div>
        </Col>
      </AdRowWrapper>
    </Container>
    
  )
}

export default BannerAdOne;