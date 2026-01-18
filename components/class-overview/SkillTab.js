import { useState, useEffect } from 'react';
import { Card, Container, Tab, Tabs} from 'react-bootstrap';
import styled from 'styled-components';
import LazyLoad, { forceCheck } from 'react-lazyload';
import storage from 'local-storage-fallback';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { SkillContainer, VSkillContainer, HexaSkillContainer } from './SkillContainer';
import { commonFifth, commonSixth } from '../../special/SiteValues';
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
  const sharedVSkills = ["dAdvancedBlessing", "dSpeedInfusion", "dHolySymbol", "dSharpEyes", "dCombatOrders", "blink", "ropeLift", "erdaNova", "willOfErda", "erdaShower", "trueArachnidReflection", "solarCrest", "dHolyFountain", "dMysticDoor", "dHyperBody"];
  fifth.fifthCommon.forEach( it => skills.push(commonFifth[it]));
  sharedVSkills.forEach( it => skills.push(commonFifth[it]));
  return skills;
}

//Converts common 6th job skills data from Values.js and returns it as an array
function convertCommonHEXAToArray(){
  const skills = [];
  const sharedHEXASkills = ["solJanus", "solJanusDusk", "solJanusDawn"];
  sharedHEXASkills.forEach( it => skills.push(commonSixth[it]));
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
        <HexaJobInfo/>
        <StyledHeaderThree>Mastery Nodes</StyledHeaderThree>
        <HexaSkillContainer skillData={sixth.masteryCore} settings={settings}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Skill Nodes</StyledHeaderThree>
        <HexaSkillContainer skillData={sixth.skillCore} settings={settings}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Boost Nodes</StyledHeaderThree>
        <HexaSkillContainer skillData={sixth.boostCore} settings={settings}/>
        <a href="#skill"><span className="jump-button-tabs"/></a>
        <StyledHeaderThree>Common Skills</StyledHeaderThree>
        <HexaSkillContainer skillData={convertCommonHEXAToArray()} settings={settings}/>
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
const HexaInfoAccordion = styled(Accordion)`
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
  max-width: 40rem;
`;

const HexaInfoContainer = styled(Container)`
  padding: 1rem;
`;

function HexaJobInfo(){
  return(
    <HexaInfoAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}><strong>6th Job Info</strong></AccordionSummary>
      <AccordionDetails>
        <Container>
          <Tabs onSelect={() => setTimeout(forceCheck, 0)}>
            <Tab eventKey="mastery" title="Mastery Nodes">
              <MasterySkillNote/>
            </Tab>
            <Tab eventKey="skill" title="Skill Nodes">
              <HexaBoostSkillNote/>
            </Tab>
            <Tab eventKey="origin" title="Origin Skill">
              <OriginSkillNote/>
            </Tab>
            <Tab eventKey="ascent" title="Ascent Skill">
              <AscentSkillNote/>
            </Tab>
          </Tabs>
        </Container>
      </AccordionDetails>
    </HexaInfoAccordion>
  );
}

function OriginSkillNote(){
  return(
    <HexaInfoContainer>
      <p>Origin Skills bind all enemies hit for 10 secs (including enemies immune to binds). Origin Skill binds have a separate cooldown from regular bind skills</p>
      <p>While casting, Origin Skills grant absolute invincibility that can defend against instant deaths like Kaling P3, Will P3, Guardian Angel Slime, Kalos P2-4</p>
      <p>Origin Skills receive bonus stats when they reach Lv. 10/20/30 (additive):</p>
      <p><strong>[Lv. 10]</strong> 20% Ignore DEF</p>
      <p><strong>[Lv. 20]</strong> 20% Boss Damage</p>
      <p><strong>[Lv. 30]</strong> 30% Ignore DEF & Boss Damage</p>
    </HexaInfoContainer>
  );
}

function AscentSkillNote(){
  return(
    <HexaInfoContainer>
      <p>Ascent Skills are powerful attacks that behave differently in and outside of boss battles. During boss battles, they can be used up to 3 times without cooldowns and only activates when a boss monster is targettable. Otherwise, they have a 240s cooldown and can always be activated</p>
      <p>The attack is unaffected by damage reflect and damage ignore</p>
      <p>The damage of Ascent Skills are unaffected by stat changes from the following sources:</p>
      <ul>
        <li>Equipment: Hat & Ring</li>
        <li>Conditional passive skill effects</li>
        <li>Effects from active skills</li>
        <li>Enemy attributes</li>
        <li>Enemy attack patterns and debuffs</li>
        <li>Usable and Cash items with less than 30 min. duration</li>
      </ul>
      <p>Ascent Skills receive bonus stats when they reach Lv. 10/20/30 (additive):</p>
      <p><strong>[Lv. 10]</strong> 10% Ignore DEF & Boss Damage</p>
      <p><strong>[Lv. 20]</strong> 10% Ignore DEF & Boss Damage</p>
      <p><strong>[Lv. 30]</strong> 20% Ignore DEF</p>
    </HexaInfoContainer>
  );
}

function MasterySkillNote(){
  return(
    <HexaInfoContainer>
      <p>Mastery Nodes upgrade existing 4th job and lower skills. Mastery Nodes can be activated once all given skills are enhanced with V Matrix at least Lv. 40 (before Matrix Points)</p>
    </HexaInfoContainer>
  );
}

function HexaBoostSkillNote(){
  return(
    <HexaInfoContainer>
      <p>Boost Nodes provide a %Final Damage increase to 5th Job Skills. Boost Nodes can be activated once the given skill is enhanced with V Matrix at least Lv. 25 (before Matrix Points)</p>
    </HexaInfoContainer>
  );
}

export default SkillTab;
