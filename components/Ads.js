import React, { useEffect } from "react";

/*
This file contains the Adsense ad elements
In this file you will find:
-AdNavigation - ad for the navigation pages like homepage, content, events, resources
-AdClassOverview - ad used in the class overviews
-AdInArticle - ad used within articles such as Content and Events articles
*/

/*
    Created by: Ikasuu, Spring 2022
*/

const AdNavigation = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{display: "block"}}
      data-ad-client="0"
      data-ad-slot="0"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

const AdClassOverview = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
    style={{display: 'block'}}
    data-ad-client="0"
    data-ad-slot="0"
    data-ad-format="auto"
    data-full-width-responsive="true"/>
  );
};

const AdInArticle = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
    style={{display: 'block', textAlign: 'center'}}
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-client="0"
    data-ad-slot="0"/>
  );
};

export default AdSquare;