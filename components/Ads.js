import React, { useEffect } from "react";
import styled from 'styled-components';

/*
This file contains the Adsense ad elements
In this file you will find:
-AdNavigation - ad for the navigation pages like homepage, content, events, resources
-AdClassOverview - ad used in the class overviews
-AdOutArticle - ad used at the top & bottom of articles
-AdInArticle - ad used within articles such as Content and Events articles
*/

/*
    Created by: Ikasuu, Spring 2022
*/

//AdWrapper - component to wrap around Ad unit to add margin spacing
const AdWrapper = styled.div`
    margin: 1.5rem 0 1.5rem 0;
`;

//AdNavigation - ad for the navigation pages like homepage, content, events, resources
export const AdNavigation = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AdWrapper>
      <ins
        className="adsbygoogle"
        style={{display: "block"}}
        data-ad-client="0"
        data-ad-slot="0"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </AdWrapper>
  );
};

//AdClassOverview - ad used in the class overviews
export const AdClassOverview = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AdWrapper>
      <ins className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="0"
      data-ad-slot="0"
      data-ad-format="auto"
      data-full-width-responsive="true"/>
    </AdWrapper>
  );
};

//AdOuterTitle - ad used at the top & bottom of articles
export const AdOutArticle = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AdWrapper>
      <ins className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="0"
      data-ad-slot="0"
      data-ad-format="auto"
      data-full-width-responsive="true"/>
    </AdWrapper>
  );
};

//AdInArticle - ad used within articles such as Content and Events articles
export const AdInArticle = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AdWrapper>
      <ins className="adsbygoogle"
      style={{display: 'block', textAlign: 'center'}}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="0"
      data-ad-slot="0"/>
    </AdWrapper>
  );
};

export default AdNavigation;