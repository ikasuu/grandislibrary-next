import React, { useState } from 'react';
import { Badge, Card, Image, Modal } from 'react-bootstrap';
import { Parser } from 'expr-eval';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import styled from 'styled-components';

/*
    Skill component that creates a component to hold and render our skill info like name, desc, and properties 
    Created by: Ikasuu, Fall 2020
*/

// Main container/card
const SkillCard = styled(Card)`
    max-width: 40rem;
    margin: 1.5rem 0 1.5rem 0;
`;

// Skill Icon
const Icon = styled.img`
    margin-right: 0.25rem;
`;

// Skill Name
const SkillName = styled.strong`
    margin-left: 0.25rem;
    font-family: muli, sans-serif !important;
    font-weight: 700 !important;
    font-style: normal !important;
`;

// The elements beside the skill name
const SkillBadge = styled(Badge)`
    margin-left: 0.25rem;
    font-family: acumin-pro, sans-serif !important;
`;

// Styling for the Master Level subtitle
const MasterLevel = styled(Card.Subtitle)`
    margin-bottom: 0.7rem;
    font-size: 0.95rem;
    font-weight: 300 !important;
`;

// /* The details / bullet points below the description */
const SkillDetails = styled.div`
    margin-top: -0.5rem;
`;

function SkillInfo({skillData, name, shortDesc, properties, maxLevel, animationSetting }) {
        //Get the proper values using the properties and calculating with maxLevel
        const valProperties = getValsFromProperties(properties, maxLevel);
        
        /*
            Starting from top to bottom, Card.Body contains all the contents of our skill info
            The first tag is our skill animations, the && (short-circuit eval) only displays animations if animations exists (or is not null/undefined)
            We add a white background via background-image in styles since some skills have a transparent background

            Within Card.Title we have the icons, skill name, and any badges such as skill type and for hyper skills a lv requirement

            Card.Subtitle contains only Master Level info

            In the Card.Text we parse HTML string and sanitize it before injecting into DOM. Certain skills will not have descriptions if the skill's short desc explains already
            If there are any details to accompany the description we include it below - it is also parsed and sanitized

            The last component, Card.Subtitle contains our skill's short desc provided by an API

        */
        return (
            <SkillCard>
                <Card.Body>
                    {skillData.animations && animationSetting && skillData.animations.map((animation, index) => <SkillAnimation key={index} animation={animation} name={name}/>
                    )}
                    <Card.Title>
                        {skillData.icons.map((icon, index) => <Icon key={index} src={icon} alt=""/>)}<SkillName>{name}</SkillName>
                        <SkillBadge variant="secondary">{skillData.type}</SkillBadge>
                        {skillData.reqLev && <SkillBadge variant="secondary">Lv. {skillData.reqLev}</SkillBadge>}
                    </Card.Title>
                    <MasterLevel><em>Master Level: {maxLevel}</em></MasterLevel>
                    {skillData.desc && <Card.Text>{parse(DOMPurify.sanitize(skillData.desc))}</Card.Text>}
                    {skillData.details && <SkillDetails><ul>{skillData.details.map((detail, index) => <li key={index}>{parse(DOMPurify.sanitize(detail))}</li>)}</ul></SkillDetails>}
                    {/* Uses regex to replace temp values in string with the proper values from valProperties. As well, does string formatting like we did with desc*/}
                    {/* Lastly, we split the string into multiple parts where new lines are needed */}
                    <div>{
                        shortDesc ? shortDesc.replace(/#(\w+)/g, (match,key) => valProperties[key]||match).replace(/#c/g, '').replace(/#z/g, '0').replace(/#/g, '').replace(/mpCon/g, '0').replace(/\\r/g, '').replace(/\\N/g, '\\n').replace(/\\c/g, '').split('\\n').map((str, index) =>
                            <Card.Subtitle key={index} as="p" className="mb-2 text-muted short-desc">{str}</Card.Subtitle>) : null
                    }</div>
                </Card.Body>
            </SkillCard>
        );
}

//Function call evaluates the expressions from the properties state into values using the Master Level of the Skill
//Used so that we have the proper values for things like Damage, Mana Cost, etc.
function getValsFromProperties(properties, maxLevel){
    //Store object entries as array of key/values for use
    const arrayProperties = Object.entries(properties);
    //Create a new object to store the new values
    const valProperties = {};
    //For each property have the key in valProperties the same as arrayProperties and the value our evaluated expression
    arrayProperties.forEach(it =>{
        //If statement to omit non expressions
        if(!it[1].includes(']') && it[0] !== 'action' && it[0] !== 'memo_PL' && !it[1].includes('Image<Rgba32>:')){
            valProperties[it[0]] = (Parser.evaluate(it[1], { x: maxLevel, d: Math.floor, u: Math.ceil, y: 1}));
        }
    });
    //Required to convert any milliseconds cooldowns into seconds cooldowns else we will have wrong cooldowns (like 500 secs instead of 0.5 secs)  
    if(valProperties.cooltimeMS) { valProperties.cooltimeMS = valProperties.cooltimeMS * 0.001;}
    return valProperties;
}

/*
    Component used in SkillInfo to show animations of skill, handles logic for displaying it's own animation in a modal
    Created by: Ikasuu, Fall 2020
*/

const Animation = styled(Card.Img)`
    margin-bottom: 1rem;
    cursor: pointer;
`;

const ModalAnimation = styled(Image)`
    width: 100%;
    height: auto;
`;

function SkillAnimation({animation, name}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <span>
            <Animation variant="top" src={animation} onClick={handleShow}/>
                <Modal centered  show={show} onHide={handleClose} aria-labelledby="notable-skill" size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="notable-skill">
                            {name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalAnimation fluid src={animation}/>
                    </Modal.Body>
                </Modal>
        </span>
    );
}

export default SkillInfo;