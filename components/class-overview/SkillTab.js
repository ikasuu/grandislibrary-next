import React, { useState, useEffect } from 'react';
import { Card, Container, Tab, Tabs} from 'react-bootstrap';
import styled from 'styled-components';
import LazyLoad, { forceCheck } from 'react-lazyload';
import storage from 'local-storage-fallback';

import { SkillContainer, VSkillContainer, HexaSkillContainer } from './SkillContainer';
import { commonFifth } from '../../special/SiteValues';
import { QuickJump } from '../UtilityButtons';
import { SkillCard } from './SkillInfo';

/*
    Tab component in our class overviews, used to hold all the skill containers and switch between them
    Created by: Ikasuu, Fall 2020
*/

// Retrieves settings from storage, if it does not exist, use default value (false & true)
function getInitialClassSettings(){
  const savedSettings = storage.getItem('classSettings');
  return savedSettings ?  JSON.parse(savedSettings) : { offline: false, animations: true };
}

//Renders the pre-5th job tabs
function createSkillTabs(primary, settings){
  return primary.map((skilltree, index) => 
    <Tab eventKey={skilltree[0]} title={skilltree[0]} key={index}>
      <LazyLoad height={2000} offset={100}>
        <SkillContainer skillData={skilltree[1]} settings={settings}/>
      </LazyLoad>
    </Tab>);
}

//Converts common 5th job skills data from Values.js and returns it as an array
function convertCommonVToArray(fifth){
  const skills = [];
  fifth.fifthCommon.forEach( it => skills.push(commonFifth[it]));
  return skills;
}

// Adjusting margins for h2 and h3
const StyledHeaderTwo = styled.h2`
    margin: 2rem 0 1.5rem 0;
`;

const StyledHeaderThree = styled.h3`
    margin: 2rem 0 1.25rem 0;
`;

export function SkillTab({primary, fifth, sixth, hyper, slug}) {
  // Hook to store setting info used by UtilityButton (QuickJump), this is also where the button is stored
  // When changes are made to settings, we have a useEffect hook that auto-updates our storage version of setting
  const [settings, setSettings] = useState(getInitialClassSettings);
  useEffect(() => {
      storage.setItem('classSettings', JSON.stringify(settings));
  },[settings]);

  return (
    <div>
      <LazyLoad height={2000} offset={100}>
        <Container>
          <StyledHeaderTwo>Skill Information</StyledHeaderTwo>
          <SkillTabView primary={primary} fifth={fifth} sixth={sixth} hyper={hyper} settings={settings}/>
        </Container>
      </LazyLoad>
      <QuickJump settings={settings} setSettings={setSettings} slug={slug}/> 
    </div>
  );
}

//Component to display skills in a Tabs view
function SkillTabView({primary, fifth, sixth, hyper, settings}){
  return(
    <div>
      <Tabs onSelect={() => setTimeout(forceCheck, 0)}>
        {createSkillTabs(primary, settings)}
        <Tab eventKey="fifth" title="5th Job"><FifthJobTab fifth={fifth} settings={settings}/></Tab>
        <Tab eventKey="sixth" title="6th Job"><SixthJobTab sixth={sixth} settings={settings}/></Tab>
        {hyper && <Tab eventKey="hyper" title="Hyper Skills"><HyperSkillsTab hyper={hyper} settings={settings}/></Tab>}
      </Tabs>
    </div>
  )
}

//Component to display Hyper Skills info
function HyperSkillsTab({hyper, settings}){
  return(
    <div>
      <LazyLoad height={2000} offset={100}>
        <StyledHeaderThree>Passive Skills</StyledHeaderThree>
        <SkillContainer skillData={hyper.hyperPassive} settings={settings}/>
        <StyledHeaderThree>Active Skills</StyledHeaderThree>
        <SkillContainer skillData={hyper.hyperActive} settings={settings}/>
      </LazyLoad>
    </div>
  )
}

//Component to display 5th Job skills info
function FifthJobTab({fifth, settings}){
  return(
    <div>
      <LazyLoad height={2000} offset={100}>
        <StyledHeaderThree>Class Specific V Skills</StyledHeaderThree>
        <VSkillContainer skillData={fifth.fifthMain} settings={settings} level={25} matrixP={5}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Common V Skills</StyledHeaderThree>
        <VSkillContainer skillData={convertCommonVToArray(fifth)} settings={settings} level={25} matrixP={5}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Boost Node Skills</StyledHeaderThree>
        <BoostNodeSkillNote/>
        <VSkillContainer skillData={fifth.fifthBoost} settings={settings} level={50} matrixP={10}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
      </LazyLoad>
    </div>
  )
}

//Component to display 6th Job skills info
function SixthJobTab({sixth, settings}){
  return(
    <div>
      <LazyLoad height={2000} offset={100}>
        <StyledHeaderThree>Mastery Nodes</StyledHeaderThree>
        <MasterySkillNote/>
        <HexaSkillContainer skillData={sixth.masteryCore} settings={settings}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Origin Skills</StyledHeaderThree>
        <OriginSkillNote/>
        <HexaSkillContainer skillData={sixth.originSkill} settings={settings}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
      </LazyLoad>
    </div>
  )
}

//Components for notes that are displayed in the 5th Job skill component
function BoostNodeSkillNote(){
  return(
    <SkillCard>
      <Card.Body>
        <Card.Text>
            <p>Boost Nodes provide a %Final Damage increase to 4th job and lower skills. Each Node contains 3 Boosts and can be enhanced up to Rank 25 (30 w/ Matrix Points)</p>
            <p>Each Boost can be upgraded to Master Level 60 by equipping multiple Nodes. However, Nodes with the same Main Skill (skill at the top) cannot be equipped at the same time</p>
            <p>Boosts gain extra bonuses upon reaching Lv. 20 & 40. Some Boosts may enhance multiple skills</p>
        </Card.Text>
      </Card.Body>
    </SkillCard>
  );
}

//Components for notes that are displayed in the 6th Job skill component
function MasterySkillNote(){
  return(
    <SkillCard>
      <Card.Body>
        <Card.Text>
            Mastery Nodes upgrade existing 4th job and lower skills. Mastery Nodes can be activated once all given skills are enhanced with V Matrix at least Lv. 40 (before Matrix Points)
        </Card.Text>
      </Card.Body>
    </SkillCard>
  );
}

function OriginSkillNote(){
  return(
    <SkillCard>
      <Card.Body>
        <Card.Text>
            <p>Origin Skills bind all enemies hit for 10 secs (including enemies immune to binds). Origin Skill binds have a separate cooldown from regular bind skills</p>
            <p>While casting, Origin Skills grant absolute invincibility that can defend against instant deaths like Kaling P3, Will P3, Guardian Angel Slime, Kalos P2-4</p>
            <p>Origin Skills receive bonus stats when they reach Lv. 10/20/30:</p>
            <p><strong>[Lv. 10]</strong> 20% Ignore DEF</p>
            <p><strong>[Lv. 20]</strong> 20% Boss Damage</p>
            <p><strong>[Lv. 30]</strong> 30% Ignore DEF & Boss Damage</p>
        </Card.Text>
      </Card.Body>
    </SkillCard>
  );
}

export default SkillTab;
