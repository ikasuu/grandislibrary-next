import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';
import styled from 'styled-components';

//Formatting helper functions for class overviews
//Created by Ikasuu Spring 2025

//Component for a skill icon with a hoverable tooltip
const StyledTooltip = styled(Tooltip)`
    transition: none;
    font-size: 1.05rem;
`;

function SkillTooltip({image, tooltip}){
    const overlay = <StyledTooltip style={{ zIndex: '1' }}>{tooltip}</StyledTooltip>;

    return(
        <OverlayTrigger delay={0} placement="top" overlay={overlay}>
            <img src={image} alt={tooltip}/>
        </OverlayTrigger>
    );
};

//Bold text (of all things within [...] square brackets)
export function formatBoldText(content){
    return reactStringReplace(content, /(?=\[)(.*?)(?<=\])/g, (text, i) => (<strong key={i}>{text}</strong>));
};

function formatActiveBoldText(content){
    return reactStringReplace(content, /(?=<bold)(.*?)(?<=>)/g, (item, i) => {
        let text = item.match(/(?<=text={)(.*?)(?=})/g);
        return(
            <strong key={i}>{text}</strong>
        );
    });
};

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatSkillTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let img = text.match(/(?<=src={)(.*?)(?=})/g);
        let tip = text.match(/(?<=tip={)(.*?)(?=})/g);
        return(
            <SkillTooltip key={i} image={img} tooltip={tip}/>
        );
    });
};

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatActivesTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let img = text.match(/(?<=src={)(.*?)(?=})/g);
        let tip = text.match(/(?<=tip={)(.*?)(?=})/g);
        let duration = text.match(/(?<=dur={)(.*?)(?=})/g);

        const Wrapper = duration ? "div" : "span"; //Special case for toggles to display on same line

        return (
            <Wrapper key={i}>
                <SkillTooltip image={img} tooltip={tip}/>
                {duration && duration}
            </Wrapper>
        );
    });
};

export function formatTextBreak(content){
    return reactStringReplace(content, /(?=<br)(.*?)(?<=>)/g, (item, i) => <br key={i}/>);
}

//Links
//Format: <link href={...} title={...}> 
export function formatLinkText(content){
    return reactStringReplace(content, /(?=<link)(.*?)(?<=>)/g, (text, i) => {
        let url = text.match(/(?<=href={)(.*?)(?=})/g);
        let title = text.match(/(?<=title={)(.*?)(?=})/g);
        return(<a key={i} href={url} target="_blank" rel="noreferrer noopener">{title}</a>);
    });
};

export function formatBulletPoint(content){
    //Bullet points
    //Format: <bp_..._..._>, separated by '_'
    return reactStringReplace(content, /(?=<bp)(.*?)(?<=_>)/g, (text, i) => {
        let points = text.split("_");
        //Remove first and last element from array (<bp & >)
        points.pop();
        points.shift();
        return(
            <ul key={i}>
                {points.map((item, j) => {
                    let formatText = formatSkillTooltip(item);
                    formatText = formatBoldText(formatText);
                    formatText = formatLinkText(formatText);
                    return(<li key={j}>{formatText}</li>)
                })}
            </ul>
        );
    });
};

export function formatEmText(content){
    return reactStringReplace(content, /(?=<em)(.*?)(?<=>)/g, (item, i) => {
        let text = item.match(/(?<=text={)(.*?)(?=})/g);
        let breakFlag = item.match(/(?<=brFlag={)(.*?)(?=})/g);

        const Wrapper = breakFlag == "true" ? "div" : "span";

        return(
            <Wrapper><em key={i}>{text}</em></Wrapper>
        );
    });
};

function formatExtraContentImage(content){
    return reactStringReplace(content, /(?=<img)(.*?)(?<=>)/g, (text, i) => {
        let image = text.match(/(?<=src={)(.*?)(?=})/g);
        let altText = text.match(/(?<=alt={)(.*?)(?=})/g);
        return(
            <img key={i} className="extra-content-image" src={image} alt={altText}/>
        );
    });
};

function formatDarkSightTable(content){
    return reactStringReplace(content, /(?=dsTable)/g, (text, i) => {
        return(
            <div className={"ds-table"}>
                <table>
                    <thead><tr><th>Boss</th><th>Avoidable Attack</th></tr></thead>
                    <tbody>
                        <tr><td>All Enemies</td><td>Touch Damage</td></tr> <tr><td>Hilla</td><td>Lightning Bolt, Flame Breath</td></tr> <tr><td>Cygnus</td><td>All minions (including instructors) touch damage + attacks</td></tr> <tr><td>Ursus</td><td>Falling Debris</td></tr> <tr><td>Princess No</td><td>(Miroku/4F - All attacks except Infinite Flame), Butterfly Throw (except Black Butterfly Seduce), Sakura Shower</td></tr> <tr><td>Magnus</td><td>Immobilizing Gas, Falling Debris, Dash</td></tr> <tr><td>Papulatus</td><td>Hand Smash, Floor Rift, Timed Cursed/Seal (both cast + seal), Falling Debris</td></tr> <tr><td>Gollux</td><td>Reverse/99% Bomb</td></tr> <tr><td>Crimson Queen</td><td>Burn DoT (gain stacks but no damage taken)</td></tr> <tr><td>Pierre</td><td>Falling Hats, Fire Spin (Blue Form)</td></tr> <tr><td>Von Bon</td><td>Falling Debris</td></tr> <tr><td>Vellum</td><td>Falling Stun Rocks</td></tr> <tr><td>Pink Bean (Statuses)</td><td>All attacks except Laser, Poison Clouds, Mini Pink Beans</td></tr> <tr><td>Pink Bean</td><td>Blue ground attack, Big Bang, Mini Pink Beans</td></tr> <tr><td>Lotus</td><td>P2 Stun Debris</td></tr> <tr><td>Damien</td><td>Yellow(p1)/Red(p2) Falling Fireballs, Dash(p2), Thorn Bind (Can be done reactively when he disappears w/ Monster Silhouettes enabled in settings)</td></tr> <tr><td>Will</td><td>P1 (Segment Test) Red Meteors, P2 Web, P2 Dash</td></tr> <tr><td>Guardian Angel Slime</td><td>Slime Pool DoT, Slime minion touch damage (not their attacks, i.e. Pink Slime's seduce), Magma Slime touch + landing on head</td></tr> <tr><td>Verus Hilla</td><td>Corpse DoT</td></tr> <tr><td>Gloom</td><td>Falling Debris</td></tr> <tr><td>Darknell</td><td>Debris (Both Vertical + Horizontal), Small Minion touch damage (except sword swing)</td></tr> <tr><td>Black Mage</td><td>P1 Knights' Dash (still applies curse), P1 Red Lightning, Falling Debris (Vertical), Diagonal/Rolling Debris (only while midair), P3 Down FMA</td></tr> <tr><td>Seren</td><td>Dash, Falling Debris (P1, P2 Sunset); still adds sun gauge</td></tr>
                    </tbody>
                </table>
            </div>
        );
    });
}

//Component from the skill blocks that are used in the base stats section
const SkillBlock = styled.span`
    /* Adjust the background from the properties */
    background-image: ${props => props.color};
    line-height: ${props => props.lineHeight};

    padding: .25em .4em;
    margin: .25rem 0;
    font-size: 75%;
    font-weight: 700;
    border-radius: .25rem;
    display: inline-block;
    vertical-align: bottom;
    color: #fff;
    white-space: nowrap;
`;

//Helper function to convert skill type to corresponding color
function skillBlockTypeToColor(color){
    switch(color){
        case "debuff":
            return "#5C9A3A";
        case "toggle":
            return "#C65895";
        case "temp":
            return "#2E94B6";
        case "opt":
            return "#CC6A2A";
        case "alpha":
            return "#176BCB";
        case "beta":
            return "#D53F3F";
        default:
            return "#6C757D";
    };
};

//Helper function to format given colors into use in SkillBlock
function skillBlockColor(colorOne, colorTwo){
    return `linear-gradient(120deg, ${colorOne} 50%, ${colorTwo} 50%)`;
};

//Skill Blocks
//Format: <link type={...} subType={...} src={...} tip={...} val={...}>
//type and subType are optional for color coding a skill block, default: gray
//src and tip is optional for displaying a skill icon
//val is the text description
export function formatSkillBadge(content){
    return reactStringReplace(content, /(?=<bg)(.*?)(?<=>)/g, (badge, i) => {
        let type = badge.match(/(?<=type={)(.*?)(?=})/g);
        let subType = badge.match(/(?<=sub={)(.*?)(?=})/g);
        let img = badge.match(/(?<=src={)(.*?)(?=})/g);
        let tip = badge.match(/(?<=tip={)(.*?)(?=})/g);
        let text = badge.match(/(?<=val={)(.*?)(?=})/g);

        const height = img ? "1rem" : "2rem";

        let colorOne = skillBlockTypeToColor(type ? type[0] : "default");
        let colorTwo = skillBlockTypeToColor(subType ? subType[0] : "default");
        let gradient = skillBlockColor(colorOne, subType ? colorTwo : colorOne);

        return (
            <SkillBlock color={gradient} key={i} lineHeight={height}>
                {img ? img.map((item, index) => <SkillTooltip key={index} image={item} tooltip={tip[index]}/>) : <></>} <div style={{display: 'inline-block'}}>{text.map((item, index) => <div key={index}>{item}</div>)}</div> {subType ? <SubBadge content={badge}/> : <></>}
            </SkillBlock>
        );
    });
};

function SubBadge({content}){
    let img = content.match(/(?<=subSrc={)(.*?)(?=})/g);
    let tip = content.match(/(?<=subTip={)(.*?)(?=})/g);
    let text = content.match(/(?<=subVal={)(.*?)(?=})/g);

    return(
        img ? <span><SkillTooltip image={img} tooltip={tip}/> ({text})</span> : <></>
    );
};

export function formatActivesSection(content){
    let returnString;

    returnString = formatActivesTooltip(content);
    returnString = formatEmText(returnString);
    returnString = formatActiveBoldText(returnString)

    return returnString;
};

export function formatBuildSection(content){
    let returnString;
    returnString = formatSkillTooltip(content);
    returnString = formatBoldText(returnString);
    returnString = formatTextBreak(returnString);

    return returnString;
};

export function formatExtraContent(content){
    let returnString;

    returnString = formatBulletPoint(content);
    returnString = formatSkillTooltip(returnString);
    returnString = formatExtraContentImage(returnString);
    returnString = formatBoldText(returnString);
    returnString = formatEmText(returnString);
    returnString = formatLinkText(returnString);
    returnString = formatDarkSightTable(returnString);

    return returnString;
}

// Stylizes the given text using the mark up within the text
export default function formatSkillText(content){
    let returnString;
    returnString = formatBulletPoint(content);
    returnString = formatSkillTooltip(returnString);
    returnString = formatEmText(returnString);
    returnString = formatBoldText(returnString);
    returnString = formatLinkText(returnString);

    return returnString;
};