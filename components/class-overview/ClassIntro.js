import React, { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { Col, Container, Image, Table, Row, Card, Modal } from 'react-bootstrap';

import { weapons, secondaryWeapons, weaponConsumable } from '../../special/SiteValues';
import { LinkSkill, NotableSkill } from './SingleSkill';
import { ContentTitle } from '../../components/Page';
import InfoButton from '../UtilityButtons';
import BannerAdOne, { BannerAdTwo, StickyAd, VideoAdClassOverview } from '../Ads';
import { Chip } from '@material-ui/core';

/*
This file contains the intro contents of a Class Overview
In this file you will find:
-ClassIntro - Holds ClassProperties, PropertyBox, and ClassProsCons
-ClassProperties
-PropertyBox - This is the section below ClassProperties that has notable skills and class type
-ClassProsCons
-ClassDetail - Holds the base stats, buffs, build path rendering
-ClassCreation - For classes that have a "How to Create" section
-ClassExtraContent - Any extra content like explanation of Dark Sight is rendered here
*/

/*
    Renders the upper components of the Class Overview (Class Properties, Notable Skills + Class Type, and Pros and Cons)
    Created by: Ikasuu, Fall 2020
*/

// Adjusting margins for h2, h3, and h5
const StyledHeaderTwo = styled.h2`
    margin: 1rem 0 1rem 0;
`;

const StyledHeaderThree = styled.h3`
    margin: 1.5rem 0 1rem 0;
`;

const StyledHeaderFive = styled.h5`
    margin: 1.5rem 0 1rem 0;
`;

// Container to hold ClassProperties and PropertyBox
const PropertyContainer = styled(Col)`
    max-width: 33rem;

  /* For iPad so that the elements do not display as blocks */
  @media (max-width: 1199px){
      max-width: 21rem;
  }

  /* Revert the changes made above for mobile users,
   above scruntches the class properties component a bit too much for mobile */
  @media (max-width: 991px){
      max-width: none;
  }
`;

// Container to hold ClassBuff
const BuffContainer = styled(Col)`
  max-width: 34rem;

  /* For iPad so that the elements do not display as blocks */
  @media (max-width: 1199px){
      max-width: 33rem;
  }
`;

export function ClassIntro({data}) {
    return (
        <div>
            <Container>
                <StickyAd/>
                <ContentTitle>{data.class}</ContentTitle>
                <div id="property"/>
                <Row>
                    <PropertyContainer md="auto">
                        <ClassProperties content={data.content}/>
                        <PropertyBox skills={data.skill.notable} infographics={data.content.infographics}/>
                        <LinkSkill linkSkill={data.content.linkSkill}/>
                        <VideoAdClassOverview/>
                    </PropertyContainer>
                    <BuffContainer md="auto">
                        <ClassBuffs content={data.content}/>
                    </BuffContainer>
                </Row>
            </Container>
            <hr/>
            <div id="stat"/>
            <ClassDetail content={data.content} skill={data.skill}/>
        </div>
    );
}

/*
    Properties component in our Class Overviews
    Created by: Ikasuu, Fall 2020
*/

// Wrapper to hold info for Class Properties
const ClassPropertyWrapper = styled.div`
    max-width: 26rem;
`;

function ClassProperties({content}) {
  return (
      <ClassPropertyWrapper>
          <StyledHeaderTwo>Class Properties</StyledHeaderTwo>
          <Container>
          <Table borderless>
              <tbody>
              <tr>
                  <th><strong>Class Group</strong></th>
                  <td>{content.classGroup}</td>
              </tr>
              <tr>
                  <th><strong>Job Group</strong></th>
                  <td>{content.jobGroup}</td>
              </tr>
              <tr>
                  <th><strong>Primary Stat</strong></th>
                  <td>{content.mainStat} <InfoButton tooltip="Classes primarily benefit from this stat. It is recommended to always use Auto Assign to assign your AP"/></td>
              </tr>
              <tr>
                  <th><strong>Secondary Stat</strong></th>
                  <td>{content.secondaryStat}</td>
              </tr>
              <tr>
                  <th><strong>Legion Bonus</strong></th>
                  <td>
                    <Row><Col>{content.legion}</Col></Row>
                    <Row><Col style={{display: 'inline-block', wordBreak: 'break-word'}}>(+{content.legionValue})</Col></Row>
                  </td>
              </tr>
              <tr>
                  <th><strong>Primary Weapon</strong></th>
                  <td>
                      {content.equipment[0].weapon.map(it => <Row key={it} style={{marginBottom: '0.2rem'}}><Col><Image src={weapons[it][0]} style={{verticalAlign: 'middle'}}/> {weapons[it][1]}</Col></Row>)}
                  </td>
              </tr>
              <tr>
                  <th><strong>Secondary Weapon</strong></th>
                  <td>
                      {content.equipment[1].secondary.map(it => <Row key={it} style={{marginBottom: '0.2rem'}}><Col><Image src={secondaryWeapons[it][0]} style={{verticalAlign: 'middle'}}/> {secondaryWeapons[it][1]}</Col></Row>)}
                  </td>
              </tr>
              {
                  content.equipment[2] &&
                  <tr>
                      <th><strong>Ammo</strong></th>
                      <td><div><Image src={weaponConsumable[content.equipment[2].ammo][0]} style={{verticalAlign: 'middle'}}/> {weaponConsumable[content.equipment[2].ammo][1]}</div></td>
                  </tr>
              }
              </tbody>
          </Table>
          </Container>
      </ClassPropertyWrapper>
  );
}

/*
    Box component to accompany the Property table in Class Overviews
    Created by: Ikasuu, Fall 2020
*/

function PropertyBox({skills, infographics}) {
  return (
      <div style={{paddingLeft: '0.5rem'}}>
          <StyledHeaderFive>Skill Preview<InfoButton tooltip="Click the skill icon to view skill animation"/></StyledHeaderFive>
          { skills.map( skill => 
              <NotableSkill key={skill.name} skill={skill}/>
          )}
          {
            infographics ? 
            <div>
                <StyledHeaderFive>Class Infographics<InfoButton tooltip="Click the chip to view image. Clicking the image inside will open it in a new tab"/></StyledHeaderFive>
                {
                    infographics.map( image => 
                    <ClassInfographic infographic={image.src} title={image.title}/>
                )}
            </div>
            : <></>
          }
      </div>
  );
}

/*
    Displays the class infographics in the class properties section and handles modal logic
    Created by: Ikasuu, Spring 2024
*/

export function ClassInfographic({ infographic, title }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <span>
            <Chip label={title} className="hvr-grow" onClick={handleShow} clickable size="large"/>
            <Modal centered show={show} onHide={handleClose} aria-labelledby="infographic-image" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="infographic-image">
                            {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href={`/class-infographic/${infographic}`} target="_blank" rel="noreferrer noopener">
                        <Image src={`/class-infographic/${infographic}`} style={{width: '100%', backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)'}}/>
                    </a>
                </Modal.Body>
            </Modal>
        </span>
    );
}

/*
    Buff component in our Class Overviews
    Created by: Ikasuu, Fall 2020
*/

// Wrapper for to Buffs and Other Actives container
const BuffAndActivesWrapper = styled(Col)`
  max-width: 37rem;
`;

function ClassBuffs({content}) {
  return (
      <div>
        <BuffAndActivesWrapper md="auto">
            <StyledHeaderTwo>All Actives<InfoButton tooltip="Skills are not listed in any particular order. Durations and cooldowns are based on their base value at Max Level. Does not include 6th Job."/></StyledHeaderTwo>
            <Table size="sm">
            <tbody>
                <tr><th><strong>Active Buffs</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.active))}</StatTableData></tr>
                {content.buffInfo.toggles ? <tr><th><strong>Toggles</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.toggles))}</StatTableData></tr>:<></>}
                {content.buffInfo.summons ? <tr><th><strong>Summons &amp; Placables</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.summons))}</StatTableData></tr>:<tr><th><strong>Summons &amp; Placables</strong>:</th><td>None</td></tr>}
                <tr><th><strong>Buffs with Cooldowns</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.buffCd))}</StatTableData></tr>
                {content.buffInfo.binds ? <tr><th><strong>Binds</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.binds))}</StatTableData></tr>:<tr><th><strong>Binds</strong>:</th><td>None</td></tr>}
                {content.buffInfo.iFrame ? <tr><th><strong>iFrames</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.iFrame))}</StatTableData></tr>:<tr><th><strong>iFrames</strong>:</th><td>None</td></tr>}
                {content.buffInfo.damageReduce ? <tr><th><strong>Damage Reduction (%Max HP)</strong>:</th><StatTableData>{parse(DOMPurify.sanitize(content.buffInfo.damageReduce))}</StatTableData></tr>:<tr><th><strong>Damage Reduction (%Max HP)</strong>:</th><td>None</td></tr>}
            </tbody>
            </Table>
        </BuffAndActivesWrapper>
      </div>
  );
}

/*
    Rendering base stats and buffs + actives in Class Overviews
    Created by: Ikasuu, Fall 2020
*/

// Wrapper for Base Stats table
const BaseStatsWrapper = styled(Col)`
  max-width: 32rem;
`;

const BaseStatTitle = styled(StyledHeaderTwo)`
  @media (max-width: 991px){
    font-size: 1.8rem;
  }
`;

// Adding padding for td in Base Stats table
const StatTableData = styled.td`
  padding: 0.3rem !important;
`;

function ClassDetail({content}) {
    return (
        <Container>
           {content.specialThanks && <p><em>{content.specialThanks}</em></p>}
           {content.discord && <p><em>For more in-depth info, visit the Class Discord at <a href={content.discord} target='_blank' rel='noreferrer'>{content.discord}</a></em></p>}
            <BaseStatsWrapper md="auto">
                <BaseStatTitle>Base Stats (From Skills)<InfoButton tooltip={parse(DOMPurify.sanitize(content.baseStats[0]))}/></BaseStatTitle>
                <Table borderless>
                    <tbody>
                        {content.baseStats[1].map((stat, index) => <tr key={index}><StatTableData>{parse(DOMPurify.sanitize(stat))}</StatTableData></tr>)}
                    </tbody>
                </Table>
            </BaseStatsWrapper>
            <BannerAdOne/>
            <StyledHeaderTwo>Example Skill Build Path</StyledHeaderTwo>
            <Table borderless>
            <tbody>
                {content.buildPath.build.map((build,index) => 
                <tr key={index}>
                    <th>{build[0]}:</th>
                    <StatTableData>{parse(DOMPurify.sanitize(build[1]))}</StatTableData>
                </tr>)}
            </tbody>
            </Table>
            <ul>
                {content.buildPath.details.map((detail,index) => <li key={index}>{parse(DOMPurify.sanitize(detail))}</li>)}
            </ul>
            <StyledHeaderFive>Hyper Skill Passive Build</StyledHeaderFive>
            {parse(DOMPurify.sanitize(content.hyperBuild.recommended))}
            <StyledHeaderFive>Recommended Skills for Trio Boost Nodes</StyledHeaderFive>
            <Container>{parse(DOMPurify.sanitize(content.nodeInfo.recommended))}</Container>
            <StyledHeaderFive>All Possible Skills Obtainable for Boost Nodes</StyledHeaderFive>
            <Container>{parse(DOMPurify.sanitize(content.nodeInfo.possible))}</Container>
            <StyledHeaderFive>Recommended Inner Ability</StyledHeaderFive>
            <ul>
            {
                content.innerAbility.map((ability, index) => 
                    <li key={index}>{ability}</li>    
                )
            }
            </ul>
            <BannerAdTwo/>
      </Container>
    );
}

/*
    Rendering How to create {Class Name} component of Class Overview
    Created by: Ikasuu, Fall 2020
*/

const CreationTitle = styled(StyledHeaderTwo)`
  margin-bottom: 2rem;
`;

// Specific image styling for images in How to Create component
const CreationImage = styled(Image)`
  max-width: 100%;
  height: auto;
  margin: 0 0.5rem 0 0.5rem;
`;

// Card to display info on how to create a certain character
const HowToCreateCard = styled(Card)`
  max-width: 50rem;
  margin-top: 1rem;
`; 

export function ClassCreation({classTitle, howToCreate}) {
    return (
        <Container>
            <CreationTitle>How to create a {classTitle}</CreationTitle>
            <CreationImage thumbnail
                src={howToCreate.image[0]}
                width={howToCreate.image[1][0]}
                height={howToCreate.image[1][1]}
          />
            {howToCreate.npc.map(npc => <Image key={npc} src={npc[0]} width={npc[1][0]} height={npc[1][1]}/>)}
            <HowToCreateCard>
                <Card.Body>{howToCreate.info.map(info => <p key={info}>{parse(DOMPurify.sanitize(info, { ADD_ATTR: ['target'] }))}</p>)}</Card.Body>
            </HowToCreateCard>
        </Container>
    );
}

/*
    Component responisble for rendering any extra content provided from Class Overview
    Created by: Ikasuu, Fall 2020
*/

// Card to display any extra content provided in Class Overview
const ExtraContentCard = styled(Card)`
  max-width: 50rem;
`;

export function ClassExtraContent({title, content}){
    return(
        <Container>
            <StyledHeaderTwo>{title}</StyledHeaderTwo>
            <ExtraContentCard>
                <Card.Body>{parse(DOMPurify.sanitize(content, { ADD_ATTR: ['target'] }))}</Card.Body>
            </ExtraContentCard>
        </Container>
    );
}

export default ClassIntro;
