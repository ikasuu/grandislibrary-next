import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import LazyLoad, { forceCheck } from 'react-lazyload';
import storage from 'local-storage-fallback';

import { SkillContainer, VSkillContainer } from './SkillContainer';
import { commonFifth } from '../../special/Values';
import { QuickJump } from '../UtilityButtons';

/*
    Tab component in our class overviews, used to hold all the skill containers and switch between them
    Created by: Ikasuu, Fall 2020
*/

//Used to create the pre-5th job tabs
function createSkillTabs(primary, settings){
  return primary.map((skilltree, index) => 
    <Tab eventKey={skilltree[0]} title={skilltree[0]} key={index}>
      <LazyLoad height={2000} offset={100}>
        <SkillContainer skillData={skilltree[1]} settings={settings}/>
      </LazyLoad>
    </Tab>);
}

//Retrieves the common 5th job skills defined in our Values.js and returns it as an array
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

export function SkillTab({primary, fifth, hyper}) {

  // Hook to store setting info to be used by UtilityButton (QuickJump), this is also where the button is stored
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
          <Tabs onSelect={() => setTimeout(forceCheck, 0)}>
            {createSkillTabs(primary, settings)}
            <Tab eventKey="fifth" title="5th Job">
              <LazyLoad height={2000} offset={100}>
                <StyledHeaderThree>Common V Skills</StyledHeaderThree>
                <VSkillContainer skillData={convertCommonVToArray(fifth)} settings={settings}/>
                <Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}><span className="jump-button-tabs"/></Link>
                <StyledHeaderThree>Class Specific V Skills</StyledHeaderThree>
                <VSkillContainer skillData={fifth.fifthMain} settings={settings}/>
                <Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}><span className="jump-button-tabs"/></Link>
              </LazyLoad>
            </Tab>
            {hyper && <Tab eventKey="hyper" title="Hyper Skills">
              <LazyLoad height={2000} offset={100}>
                <StyledHeaderThree>Passive Skills</StyledHeaderThree>
                <SkillContainer skillData={hyper.hyperPassive} settings={settings}/>
                <StyledHeaderThree>Active Skills</StyledHeaderThree>
                <SkillContainer skillData={hyper.hyperActive} settings={settings}/>
              </LazyLoad>
            </Tab>}
          </Tabs>
        </Container>
      </LazyLoad>
      <QuickJump settings={settings} setSettings={setSettings}/> 
    </div>
  );
}

// Used to scroll to anchor tags
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// Retrieves settings from storage, if it does not exist, use default value (false & true)
function getInitialClassSettings(){
  const savedSettings = storage.getItem('classSettings');
  return savedSettings ?  JSON.parse(savedSettings) : { offline: false, animations: true };
}

export default SkillTab;
