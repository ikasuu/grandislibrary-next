import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle, ArticleHeaderTwo } from '../../components/Page';
import BannerAdOne, { BannerAdThree, BannerAdTwo, VideoAd, StickyAd } from '../../components/Ads';

const StyledHeaderThree = styled.h3`
    margin-top: 2rem;
`;

const StatusTable = styled.table`
    margin-bottom: 2rem;
`;

const StyledTd = styled.td`
    padding: 0.75rem;
    border: 0.1rem groove black;
`;

const StatusTitle = styled(StyledTd)`
    background-color: #79ADDC;
    font-weight: bold;
    color: black;
`;

export default function AbnormalStatuses() {
  return (
    <ContentPage altAnchor={"#table"}>
        <Head>
            <title>Abnormal Statuses | MapleStory | Grandis Library</title>
            <meta content={"An explanation of what Abnormal Statuses are in MapleStory that describes what each status does, which monsters apply them, and how to clear the effect."} name="description"/>
        </Head>
        <ContentTitle>Abnormal Statuses</ContentTitle>
        <StickyAd/>
        <Introduction/>
        <TableOfContents/>
        <VideoAd/>
        <ArticleHeaderTwo>Debuffs</ArticleHeaderTwo>
        <StyledHeaderThree id="weakness">Weakness</StyledHeaderThree>
        <Weakness/>
        <StyledHeaderThree id="miss">Miss</StyledHeaderThree>
        <Miss/>
        <StyledHeaderThree id="seal">Seal / Silence</StyledHeaderThree>
        <Seal/>
        <BannerAdOne/>
        <StyledHeaderThree id="curse">Curse</StyledHeaderThree>
        <Curse/>
        <StyledHeaderThree id="poison">Poison</StyledHeaderThree>
        <Poison/>
        <StyledHeaderThree id="slow">Slow</StyledHeaderThree>
        <Slow/>
        <StyledHeaderThree id="stun">Stun</StyledHeaderThree>
        <Stun/>
        <StyledHeaderThree id="seduce">Seduce</StyledHeaderThree>
        <Seduce/>
        <StyledHeaderThree id="frozen">Frozen</StyledHeaderThree>
        <Frozen/>
        <StyledHeaderThree id="confusion">Confusion</StyledHeaderThree>
        <Confusion/>
        <StyledHeaderThree id="darkness">Darkness</StyledHeaderThree>
        <Darkness/>
        <StyledHeaderThree id="potion-lock">Potion Lock</StyledHeaderThree>
        <PotionLock/>
        <StyledHeaderThree id="boss-potion-lock">Boss Potion Lock</StyledHeaderThree>
        <BossPotionLock/>
        <StyledHeaderThree id="shadow-of-darkness">Shadow of Darkness</StyledHeaderThree>
        <ShadowOfDarkness/>
        <StyledHeaderThree id="undead">Undead</StyledHeaderThree>
        <Undead/>
        <StyledHeaderThree id="potential-seal">Potential Seal</StyledHeaderThree>
        <PotentialSeal/>
        <StyledHeaderThree id="banish">Banish</StyledHeaderThree>
        <Banish/>
        <StyledHeaderThree id="bomb-disperse">Bomb Disperse</StyledHeaderThree>
        <BombDisperse/>
        <StyledHeaderThree id="reverse-bomb">Reverse Bomb</StyledHeaderThree>
        <ReverseBomb/>
        <StyledHeaderThree id="transformation">Transformation</StyledHeaderThree>
        <Transformation/>
        <StyledHeaderThree id="damage-over-time">Damage Over Time</StyledHeaderThree>
        <DamageOverTime/>
        <StyledHeaderThree id="petrification">Petrification</StyledHeaderThree>
        <Petrification/>
        <StyledHeaderThree id="damage-amplification">Damage Amplification</StyledHeaderThree>
        <DamageAmplification/>
        <StyledHeaderThree id="movement-seal">Movement Seal</StyledHeaderThree>
        <MovementSeal/>
        <BannerAdTwo/>
        <ArticleHeaderTwo>Buffs</ArticleHeaderTwo>
        <StyledHeaderThree id="attack-ignore">Attack Ignore</StyledHeaderThree>
        <AttackIgnore/>
        <StyledHeaderThree id="damage-reflect">Damage Reflect</StyledHeaderThree>
        <DamageReflect/>
        <StyledHeaderThree id="hard-skin">Hard Skin</StyledHeaderThree>
        <HardSkin/>
        <ArticleHeaderTwo>Boss Mechanic Debuffs</ArticleHeaderTwo>
        <StyledHeaderThree id="damien">Damien - Brand</StyledHeaderThree>
        <DamienBrand/>
        <StyledHeaderThree id="akechi">Akechi Mitsuhide - Cruel Brand</StyledHeaderThree>
        <AkechiBrand/>
        <StyledHeaderThree id="black-mage">Black Mage - Curse</StyledHeaderThree>
        <BlackMageCurse/>
        <StyledHeaderThree id="seren">Seren - Curse of the Sun</StyledHeaderThree>
        <SerenCurse/>
        <BannerAdThree/>
    </ContentPage>
  )
}

function Introduction(){
    return(
        <div>
            <p>Translated and adapted from: <a href="https://namu.wiki/w/메이플스토리/시스템/상태이상" target="_blank" rel="noreferrer noopener">https://namu.wiki/w/메이플스토리/시스템/상태이상</a></p>
            <ArticleHeaderTwo>Introduction</ArticleHeaderTwo>
            <StyledHeaderThree>What Are Abnormal Statuses?</StyledHeaderThree>
            <p>Abnormal Statuses are status effects applied mainly by bosses, elite bosses, and elite monsters. Some classes can apply Abnormal Statuses to monsters such as <img src="/class-icons/explorers/paladin/divine-charge.png" alt="Skill Divine Charge"/> Divine Charge (Paladin) which applies the Silence status with the same effect as Seal</p>
            <p>After the V Update, the Abnormal Status Resistance character stat reduces the duration of Abnormal Statuses</p>
            <p>The first 5 Abnormal Statuses listed below can be cured using an <img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion. However, beware that some bosses have a potion cooldown when used</p>
            <StyledHeaderThree>Critical Abnormal Status</StyledHeaderThree>
            <p>The criteria for Critical Abnormal Status / debilitating status conditions are unclear. Thus, the assumption will be made that the following skills all function the same as "Critical Abnormal Status Barrier Skills"</p>
            <p><img src="/class-icons/explorers/bishop/divine-protection.png" alt="Skill Divine Protection"/> Divine Protection (Bishop), <img src="/class-icons/explorers/ice-lightning/elemental-adaptation.png" alt="Skill Elemental Adaptation"/> Elemental Adaptation (I/L), <img src="/class-icons/explorers/fire-poison/elemental-adaptation.png" alt="Skill Elemental Adaptation"/> Elemental Adaptation (F/P), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/>
            Shadow Shell (Luminous), <img src="/class-icons/cygnus-knights/blaze-wizard/flame-barrier.png" alt="Skill Flame Barrier"/> Flame Barrier (Blaze Wizard), <img src="/class-icons/cygnus-knights/mihile/shield-of-light.png" alt="Skill Shield of Light"/> Shield of Light (Mihile), <img src="/class-icons/resistance/blaster/gatling-punch.png" alt="Skill Gatling Punch"/>
            Gatling Punch (Blaster), <img src="/class-icons/anima/lara/mountain-embrace.png" alt="Skill Mountain Embrace"/> Mountain Embrace (Lara)</p>
            <p><strong>The following statuses cannot be blocked:</strong></p>
            <p>Boss Potion Lock, Bomb Disperse, Pierre's hat cap, Vellum's falling rocks, Papulatus' timer curse, Magnus' spider web and sleeping gas, Crimson Queen's seduce, Damien's Brand, Lucid's forced teleport, Gloom's Fear, Verus Hilla's bind, and Black Mage's Creation & Destruction Curses</p>
            <p><strong>The following statuses are known to be blocked:</strong></p>
            <p>Poison, Undead, Confusion, Stun, Petrification, Seduce, Seal, and Miss</p>
            <StyledHeaderThree>Where to Obtain <img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potions</StyledHeaderThree>
            <p><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potions are dropped by Elite Monsters and Elite Bosses. They are also sold by the following NPCs:</p>
            <ul>
                <li><a href="https://maplestorywiki.net/w/Alcaster#El_Nath" target="_blank" rel="noreferrer noopener">Alcaster</a> in <a href="https://maplestorywiki.net/w/El_Nath" target="_blank" rel="noreferrer noopener">El Nath</a> for 400 Mesos after completing a short questline</li>
                <li><a href="https://maplestorywiki.net/w/Johanna#Temple_of_Time" target="_blank" rel="noreferrer noopener">Johanna</a> in <a href="https://maplestorywiki.net/w/Three_Doors" target="_blank" rel="noreferrer noopener">Temple of Time</a> for 8500 Mesos</li>
                <li><a href="https://maplestorywiki.net/w/Gugu" target="_blank" rel="noreferrer noopener">Gogu</a> in <a href="https://maplestorywiki.net/w/Explorer_Base" target="_blank" rel="noreferrer noopener">Stone Colossus</a> for 8500 Mesos</li>
            </ul>
            <p>Check out this video for a guide to completing the <a href="https://www.youtube.com/watch?v=_lacmSy6ALE" target="_blank" rel="noreferrer noopener">Alcaster Questline</a></p>
        </div>
    )
}

function TableOfContents(){
    return(
        <div>
            <ArticleHeaderTwo id="table">Table of Contents</ArticleHeaderTwo>
            <StyledHeaderThree>Debuffs</StyledHeaderThree>
            <ul>
                <li><Link href="#weakness">Weakness</Link></li>
                <li><Link href="#miss">Miss</Link></li>
                <li><Link href="#seal">Seal</Link></li>
                <li><Link href="#curse">Curse</Link></li>
                <li><Link href="#poison">Poison</Link></li>
                <li><Link href="#slow">Slow</Link></li>
                <li><Link href="#stun">Stun</Link></li>
                <li><Link href="#seduce">Seduce</Link></li>
                <li><Link href="#frozen">Frozen</Link></li>
                <li><Link href="#confusion">Confusion</Link></li>
                <li><Link href="#darkness">Darkness</Link></li>
                <li><Link href="#potion-lock">Potion Lock</Link></li>
                <li><Link href="#boss-potion-lock">Boss Potion Lock</Link></li>
                <li><Link href="#shadow-of-darkness">Shadow of Darkness</Link></li>
                <li><Link href="#undead">Undead</Link></li>
                <li><Link href="#potential-seal">Potential Seal</Link></li>
                <li><Link href="#banish">Banish</Link></li>
                <li><Link href="#bomb-disperse">Bomb Disperse</Link></li>
                <li><Link href="#reverse-bomb">Reverse Bomb</Link></li>
                <li><Link href="#transformation">Transformation</Link></li>
                <li><Link href="#damage-over-time">Damage Over Time</Link></li>
                <li><Link href="#petrification">Petrification</Link></li>
                <li><Link href="#damage-amplification">Damage Amplification</Link></li>
                <li><Link href="#movement-seal">Movement Seal</Link></li>
            </ul>
            <StyledHeaderThree>Buffs</StyledHeaderThree>
            <ul>
                <li><Link href="#attack-ignore">Attack Ignore</Link></li>
                <li><Link href="#damage-reflect">Damage Reflect</Link></li>
                <li><Link href="#hard-skin">Hard Skin</Link></li>
            </ul>
            <StyledHeaderThree>Boss Mechanic Debuffs</StyledHeaderThree>
            <ul>
                <li><Link href="#damien">Damien - Brand</Link></li>
                <li><Link href="#akechi">Akechi Mitsuhide - Cruel Brand</Link></li>
                <li><Link href="#black-mage">Black Mage - Curse</Link></li>
                <li><Link href="#seren">Seren - Curse of the Sun</Link></li>
            </ul>
        </div>
    )
}

function Weakness() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/weakness.gif" alt="Sweat drops above the character's head"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Sweat drops above the character's head</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Character cannot jump for a certain period of time</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion, <img src="/images/items/tonic.png" alt="Use Tonic"/> Tonic, <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Vertical movement skills and Teleport-type skills can still be used. Double jump skills cannot be used as the Jump Key is disabled</p>
            <p>Skills that force the player airborne can still be used to activate airborne skills like Mercedes' <img src="/class-icons/heroes/mercedes/spikes-royale.png" alt="Skill Spikes Royale"/> Spikes Royale into <img src="/class-icons/heroes/mercedes/leap-tornado.png" alt="Skill Leap Tornado"/> Leap Tornado</p>
        </LazyLoad>
    )
};

function Miss() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/blind.gif" alt="Skull with a dark aura floats above the character's head"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A skull with a dark aura floats above the character's head</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Character accuracy is reduced resulting in MISS attacks</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion, <img src="/images/items/eyedrop.png" alt="Use Eyedrop"/> Eyedrop, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function Seal() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/silence.gif" alt="Padlock floats above the character's head"/> <img src="/images/abnormal-statuses/silence-2.gif" alt="Blue padlock floats above the character's head"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A padlock floats above the character's head</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Cannot use skills except <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop)</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion, <img src="/images/items/holy-water.png" alt="Use Eyedrop"/> Holy Water, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Classes with Basic Attack Modifiers will not be able to trigger the attack. Instead, a normal basic attack will appear.</p>
            <p>Attacks from Summons and Placeables will deal MISS attacks while the Abnormal Status is active</p>
            <p><img src="/class-icons/explorers/paladin/divine-charge.png" alt="Skill Divine Charge"/> Divine Charge (Paladin) applies a Silence status to monsters that has the same effect as the Seal status</p>
        </LazyLoad>
    )
};

function Curse() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/curse.gif" alt="Ghosts surround the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Ghosts surround the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Experience gained from hunting monsters is reduced by half</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion, <img src="/images/items/holy-water.png" alt="Use Eyedrop"/> Holy Water, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function Poison() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/poison.gif" alt="Green gas appears above the character"/> <img src="/images/abnormal-statuses/poison-2.gif" alt="Balls of poison strike the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Poison effect appears above or around the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>HP gradually decreases</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/images/items/all-cure-potion.png" alt="Use All-Cure"/> All-Cure Potion, <img src="/images/items/antidote.png" alt="Use Eyedrop"/> Antidote, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>The green gas poison deals small amounts of damage around 15 to 640</p>
            <p>The second poison is called "Deadly Poison" that has the purple striking orbs effect that deals greater damage and increases in damage based on Max HP. Deadly Poison is mainly used by Elite Monsters with the "Poisonous" prefix, Elite Bosses (like CQ57), and monsters such as the Crimson Queen</p>
        </LazyLoad>
    )
};

function Slow() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/slow.gif" alt="A snail floats above the character"/> <img src="/images/abnormal-statuses/slow-2.gif" alt="A web appears around the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A snail floats above the character</p><p>A web surrounds the character</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><p>Movement speed is fixed to 80% or less</p><p>In addition, the Spider Web Slow prevents the use of movement skills like double (triple) jumps, teleports, dashes, and forced airbornes</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>If Slow is applied, for classes with a Key-Down moving skill like <img src="/class-icons/explorers/bowmaster/hurricane.png" alt="Skill Hurricane"/> Hurricane (Bowmaster), the Movement Speed will be set to that of the Key Down skill while in use</p>
            <p>The Spider Web Slow is used by Magnus and Zakum, but be careful as this slow seals the use of many movement skills</p>
        </LazyLoad>
    )
};

function Stun() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/stun.gif" alt="A circle of mushrooms appear above the character"/> <img src="/images/abnormal-statuses/stun-2.gif" alt="A circle of blue stars appear above the character"/> <img src="/images/abnormal-statuses/stun-3.gif" alt="A dark aura surrounds the character"/> <img src="/images/abnormal-statuses/stun-4.gif" alt="A circle of orange stars appear above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A circling oval effect appears above the character</p><p>A dark aura surrounds the character</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Cannot perform any actions except use potions</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Party Member's Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Duration of stun depends on the monster however it is an especially threatening Abnormal Status as this syngerizes well with bosses' instant kill attacks</p>
            <p>Some classes can apply stuns to enemies or a bind which applies a 10 second stun. However, some monsters such as Elite Champions, Extreme Bigfoot, Gloom, and Black Mage are immune to binds</p>
        </LazyLoad>
    )
};

function Seduce() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/seduce.gif" alt="Puppet strings appear above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Puppet strings appear above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Cannot perform any actions and are forced to move in a specific pattern</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Party Member's Dispel (Bishop), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Horntail, Pink Bean Stone Statue (Munin), Pink Bean, Arkarium, Magnus, Crimson Queen, Romantic Slime (Guardian Angel Slime)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>While seduced, you cannot use potions in this state</p>
        </LazyLoad>
    )
};

function Frozen() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={1}>Effect</StatusTitle>
                        <StyledTd>Character turns blue</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Movement Speed and Attack Speed are reduced</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>None</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Von Bon</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Upon force teleportion by Von Bon, there is a chance to apply the Frozen status indicated by a <img src="/images/abnormal-statuses/forced-teleport-von-bon.gif" alt="Purple clock appear above the character"/> purple clock above the character's head</p>
            <p>Frozen is also the status applied by Arch Mage (I/L)'s skills</p>
        </LazyLoad>
    )
};

function Confusion() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/confusion.gif" alt="A skull with spinning eyes floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A skull with spinning eyes floats above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>All input directions are reversed</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Pink Bean Stone Statue (Rex), Pink Bean, Horntail, Crimson Queen, Chaos Pierre, Will, Gloom, Elite Monsters & Bosses with "Befuddling" prefix</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>In order to jump in this state, you must jump downwards by pressing the Down Arrow Key and Jump Key together</p>
        </LazyLoad>
    )
};

function Darkness() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/darkness.gif" alt="Character's eyes are covered by a veil"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Character's eyes are covered by a veil</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Vision is reduced and only the character is visible</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/aran/mahas-domain.png" alt="Skill Maha's Domain"/> Maha's Domain (Aran), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Luminous is immune to the Darkness status due to the Beginner Skill <img src="/class-icons/heroes/luminous/inner-light.png" alt="Skill Inner Light"/> Inner Light. However, the darkness from Chaos Von Bon and Gloom is a map effect thus, Luminous is not immune to those effects</p>
        </LazyLoad>
    )
};

function PotionLock() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/potion-lock.gif" alt="A potion with chains floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A potion with chains floats above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><strong>All consumable items</strong>, including potions cannot be used. (Except stars, bullets, arrows, and pet food)</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade)</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Flying monsters in areas above Lv. 200, Vicious Hunter, Chaos Horntail's arms, Chaos Pink Bean</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Although the status is called Potion Lock, all consumables cannot be used including Return Scrolls</p>
            <p>It should also be noted, most bosses have a potion cooldown mechanic (applied from 5 secs to maximum 30 secs). This includes elixirs, consumable buffs, All-Cure Potions, etc. It is recommended to use these items before entering a boss fight rather than during</p>
        </LazyLoad>
    )
};

function BossPotionLock() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/will-potion-lock.gif" alt="A potion with a dark aura floats above the character"/> <img src="/images/abnormal-statuses/potion-lock.gif" alt="A potion with chains floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A potion with a dark aura floats above the character</p><p>A potion with chains floats above the character</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><strong>All consumable items</strong>, including potions cannot be used and recovery effects cannot be received</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Status is removed by activating a specific pattern of the boss monster</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Will (Phase 2), Verus Hilla</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>During Will Phase 2, all consumable items and healing are blocked. Moonlight that is generated passively during the boss fight can be used to briefly remove the restriction</p>
            <p>In all phases of Verus Hilla, all consumable items and healing are blocked. Collecting souls from altars by repeatedly pressing the Harvest/Interact Key, a candle will be ignited in the background. Once all candles have been lit, the restrictions will be briefly removed</p>
        </LazyLoad>
    )
};

function ShadowOfDarkness() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/shadow-of-darkness.gif" alt="A controller appears above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A controller appears above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>If you do not move, you receive 330-350 damage</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Elite Monsters with the prefix "Unstoppable" will apply this status</p>
        </LazyLoad>
    )
};

function Undead() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/undead.gif" alt="3 skulls with a dark aura floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>3 skulls with a dark aura floats above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><p>Effect of potions are reduced by half</p><p>Take damage upon using a potion or receiving healing</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Elite Monsters, Pink Bean, Chaos Horntail, Cygnus, Magnus, Hilla, Mori Ranmaru, Gloom, Chaos Crimson Queen</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Undead will only damage if the skill used only heals. Skills such as <img src="/class-icons/explorers/bishop/angel-ray.png" alt="Skill Angel Ray"/> Angel Ray (Bishop) that damages and heals will not be affected</p>
            <p>As mentioned, potion effects are halved so <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> Power Elixirs will only recover 50% Max HP</p>
            <p>Elite Monsters with the "Shadowy" prefix will apply this status</p>
        </LazyLoad>
    )
};

function PotentialSeal() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/potential-seal.gif" alt="A chained scroll with a dark aura floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A chained scroll with a dark aura floats above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Potentials and Bonus Potentials of all equipped equipment are not applied</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Von Leon, Cygnus, Arkarium, Hilla</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function Banish() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle>Effect</StatusTitle>
                        <StyledTd>Visual effect depends on the monster</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Character is forcibly moved from the original map to another location</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Von Leon, Cygnus, Arkarium, Hilla, Pink Bean Stone Statue (Munin)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            Visual effect is only visible on Von Leon and Cygnus
        </LazyLoad>
    )
};

function BombDisperse() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/bomb-1.gif" alt="A dark aura floats above the character"/> <img src="/images/abnormal-statuses/bomb-2.gif" alt="A dark aura is applied to the character character"/> <img src="/images/abnormal-statuses/lucid-bomb.gif" alt="A caged butterfly floats above the character"/> <img src="/images/abnormal-statuses/papulatus-bomb.gif" alt="A clock floats above the character"/> <img src="/images/abnormal-statuses/ursus-bomb.gif" alt="A bomb floats above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A dark aura floats above the character</p><p>A caged butterfly floats above the character</p><p>A clock floats above the character</p><p>A bomb floats above the character</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Upon the timer reaching 0, the status is consumed and the user or nearby users are damaged</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills, Invincibility</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Normal Cygnus, Ursus, Papulatus, Lucid</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>If there are nearby users when the bomb detonates, the damage is divided by the number of characters nearby. In Papulatus and Lucid, the damage is reduced and won't be shared</p>
            <p>If you are alone, it is an instant KO. In Ursus, if you die alone, two or three bombs are transferred to other users</p>
            <p>The bomb is a %Max HP attack, thus can be guarded by skills like <img src="/class-icons/explorers/bishop/holy-magic-shell.png" alt="Skill Holy Magic Shell"/> Holy Magic Shell (Bishop) or invincibility</p>
        </LazyLoad>
    )
};

function ReverseBomb() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/bomb-3.gif" alt="A flame aura surrounds the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A flame aura surrounds the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><p>All input directions are reversed</p><p>After a short period, the status is consumed and the user is damaged and stunned</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>None</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Gollux</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Upon detonation, the bomb will deal 99% Max HP damage</p>
            <p>Using <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills before the status is applied will block it. However, once casted, it cannot be cured</p>
            <p><img src="/class-icons/sengoku/kanna/haku-reborn.png" alt="Skill Haku Reborn"/> Haku Reborn (Kanna) will apply <img src="/class-icons/sengoku/kanna/foxfire.png" alt="Skill Foxfire"/> Foxfire that also blocks the status</p>
            <p>If the status is applied, invincibility can be used to negate the damage or for thieves, <img src="/class-icons/common/dark-sight.png" alt="Skill Dark Sight"/> Dark Sight can also be used</p>
        </LazyLoad>
    )
};

function Transformation() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/transformation.gif" alt="A red chain X is drawn over the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A red chain X is drawn over the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><p>Transforms into a monster and receive poison damage</p><p>If you are hit by the poison gas emitted by the affected character, you will take a lot of damage</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills, Invincibility</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Cygnus, Arkarium, Pink Bean, Elite Monsters & Elite Bosses with "Transformative" prefix</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Cygnus will transform characters into Ribbon Pigs. Pink Bean will transform characters into Pink Bean</p>
            <p>For Arkarium, characters are transformed into black snakes that emit a poison gas that damages nearby characters</p>
        </LazyLoad>
    )
};

function DamageOverTime() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle>Effect</StatusTitle>
                        <StyledTd>Depends on monster</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Continously take damage per second</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>
                            <p><img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/resistance/battle-mage/draining-aura.png" alt="Skill Draining Aura"/> Draining Aura (Battle Mage), <img src="/class-icons/resistance/battle-mage/blue-aura.png" alt="Skill Blue Aura"/> Blue Aura (Battle Mage), <img src="/class-icons/heroes/aran/mahas-domain.png" alt="Skill Maha's Domain"/> Maha's Domain (Aran), <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills, Invincibility</p>
                            <p><strong>Magnus Only - </strong><img src="/class-icons/explorers/bishop/heal.png" alt="Skill Heal"/> Heal (Bishop), <img src="/class-icons/heroes/luminous/ray-of-redemption.png" alt="Skill Ray of Redemption"/> Ray of Redemption (Luminous), <img src="/class-icons/common/dark-sight.png" alt="Skill Dark Sight"/> Dark Sight</p>
                            <p><strong>Crimson Queen Only - </strong><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), Crimson Queen's Breath Attack</p>
                        </StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Cygnus, Magnus, Damien, Lucid, Will, Crimson Queen (Chaos)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function Petrification() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/petrification.gif" alt="A clown hat covers the entire character"/><img src="/images/abnormal-statuses/petrification-2.png" alt="Stone slowly covers the entire character"/><img src="/images/abnormal-statuses/petrification-3.png" alt="Webs slowly covers the entire character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A clown hat covers the entire character</p><p>Stone slowly covers the entire character</p><p>Webs slowly covers the entire character</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>You are unable to move and unless released, you will die</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Repeatedly pressing Left and Right Arrow Keys, <img src="/class-icons/heroes/shade/spirit-ward.png" alt="Skill Spirit Ward"/> Spirit Ward (Shade), <img src="/class-icons/common/dark-sight.png" alt="Skill Dark Sight"/> Dark Sight, <img src="/class-icons/heroes/luminous/shadow-shell.png" alt="Skill Shadow Shell"/> Critical Abnormal Status Barrier Skills, Invincibility</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Arkarium, Pierre, Damien, Gloom, Mad Mage, Elite Monsters & Bosses with "Petrifying" prefix</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function DamageAmplification() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/damage-amplification.gif" alt="1 Chained arrow float above the character"/><img src="/images/abnormal-statuses/damage-amplification-2.gif" alt="2 Chained arrows float above the character"/><img src="/images/abnormal-statuses/damage-amplification-3.gif" alt="3 Chained arrows float above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>Chained arrows float above the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Increases damage taken stacking up to 3 times</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Obtain <img src="/images/items/secret-medicine-of-the-otherverse.png" alt="Use Secret Medicine of the Otherverse"/> Secret Medicine of the Otherverse dropped from monsters summoned by Arkarium</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Arkarium</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
        </LazyLoad>
    )
};

function MovementSeal() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/consume-lock.gif" alt="A dark aura appears under the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A dark aura appears under the character</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>You are continously pulled towards a specific location</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Defeat the caster (Deadly Altar or Pink Bean Ariel Statue), <img src="/class-icons/common/heros-will.png" alt="Skill Hero's Will"/> Hero's Will Skills, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop)</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Deadly Altar summoned by Hilla, Ariel Statue from Chaos Pink Bean Phase 1</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Key-Down skills are cancelled when this status is applied</p>
        </LazyLoad>
    )
};

// function OneOne() {
//     return (
//         <LazyLoad height={200} offset={100}>
//             <StatusTable>
//                 <tbody>
//                     <tr>
//                         <StatusTitle>Effect</StatusTitle>
//                         <StyledTd>Different for each boss</StyledTd>
//                     </tr>
//                     <tr>
//                         <StatusTitle>Status</StatusTitle>
//                         <StyledTd>Reduces both HP and MP to 1</StyledTd>
//                     </tr>
//                     <tr>
//                         <StatusTitle>Cure</StatusTitle>
//                         <StyledTd>Invincibility, <img src="/images/items/power-elixir.png" alt="Use Power Elixir"/> Power Elixir, Rune of Recovery, etc</StyledTd>
//                     </tr>
//                     <tr>
//                         <StatusTitle>Used by</StatusTitle>
//                         <StyledTd>Horntail, Pink Bean, Pink Bean Statue (Rex, Solomon, Ariel)</StyledTd>
//                     </tr>
//                 </tbody>
//             </StatusTable>
//             <p>This psuedo instant kill is blocked by damage reduction and damage absorption. MP will still be reduced to 1 however</p>
//         </LazyLoad>
//     )
// };

function AttackIgnore() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={3}>Effect</StatusTitle>
                        <StyledTd><p>Each boss have varying effect icons. Below are two common ones for Physical and Magic Cancel</p></StyledTd>
                    </tr>
                    <tr>
                    <StyledTd colSpan={2}><img src="/images/abnormal-statuses/weapon-cancel.png" alt="A polearm and spear with a yellow aura appears above the monster"/><p>(Physical Cancel) A polearm and spear with a yellow aura appears above the monster</p></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><img src="/images/abnormal-statuses/magic-cancel.png" alt="Chains with a blue aura appears above the monster"/><p>(Magic Cancel) Chains with a blue aura appears above the monster</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Depending on type, all physical/magic attacks is fixed to deal 1 damage</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Attacks that ignore Attack Ignore, <img src="/class-icons/explorers/hero/magic-crash.png" alt="Skill Magic Crash"/> Magic Crash (Explorer Warrior / Mihile), <img src="/class-icons/heroes/phantom/vol-dame.png" alt="Skill Vol D'Ame"/> Vol D'Ame (Phantom), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/other/kinesis/ultimate-deep-impact.png" alt="Skill Deep Impact"/> Deep Impact (Kinesis)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p><img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop) will cancel physical attacks version but not magic attacks</p>
        </LazyLoad>
    )
};

function DamageReflect() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/damage-reflect.png" alt="A purple sword and shield appears above the monster"/><img src="/images/abnormal-statuses/damage-reflect-2.png" alt="A purple skull and shield surrounded by spikes appears above the monster"/><img src="/images/abnormal-statuses/damage-reflect-3.png" alt="A purple sword and shield surrounded by spikes appears above the monster"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}><p>A purple sword and shield appears above the monster</p><p>A purple skull and shield surrounded by spikes appears above the monster</p><p>A purple sword and shield surrounded by spikes appears above the monster</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd><p>Damage Reflect has two effects on the caster</p><p><strong>Attack Reflection</strong> - When attacked, the attacker is dealt a fixed amount of damage</p><p><strong>Attack Ignore</strong> - Damage taken is reduced to 1 damage</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Attacks that ignore Damage Reflect, <img src="/class-icons/explorers/hero/magic-crash.png" alt="Skill Magic Crash"/> Magic Crash (Explorer Warrior / Mihile), <img src="/class-icons/heroes/phantom/vol-dame.png" alt="Skill Vol D'Ame"/> Vol D'Ame (Phantom), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/other/kinesis/ultimate-deep-impact.png" alt="Skill Deep Impact"/> Deep Impact (Kinesis)</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Used by</StatusTitle>
                        <StyledTd>Chaos Zakum, Pink Bean Statue Hugin, Pink Bean Statue Ariel (Chaos), Pink Bean, Von Leon, Crimson Queen, Hilla, Arkarium, Cygnus, Tower of Oz: Giant Spider, Mori Ranmaru</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>When a monster casts Damage Reflect, Attack Ignore effect is active first but Attack Reflection does not trigger until after about 0.5 secs</p>
            <p>Attack Reflection fixed damage can vary from minimal damage on bosses like Akechi Mitsuhide to instant deaths like Crimson Queen</p>
            <p>Skills that indicate <strong>"Unaffected by attack reflection"</strong> will not trigger the reflection damage however the attack will still deal 1 damage. Skills that indicate <strong>"Unaffected by attack ignore and attack reflection"</strong> can deal damage through Damage Reflect without triggering the reflection damage</p>
            <p>For Cygnus, damage reflect will damage the party member with the lowest Max HP. If you are solo, the damage will be returned to you instead</p>
            <p>As a side note, some classes also reflect damage back like Hero, Aran, Demon Slayer, Mechanic, and Xenon</p>
        </LazyLoad>
    )
};

function HardSkin() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/hard-skin.png" alt="A purple armor appears above the monster"/></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd colSpan={2}>A purple armor appears above the monster</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Ignores all damage except for Critical Hits</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>100% Critical Rate, <img src="/class-icons/explorers/bishop/dispel.png" alt="Skill Dispel"/> Dispel (Bishop), <img src="/class-icons/explorers/hero/magic-crash.png" alt="Skill Magic Crash"/> Magic Crash (Explorer Warrior / Mihile), <img src="/class-icons/heroes/phantom/vol-dame.png" alt="Skill Vol D'Ame"/> Vol D'Ame (Phantom), <img src="/class-icons/other/zero/time-distortion.png" alt="Skill Time Distortion"/> Time Distortion (Zero), <img src="/class-icons/other/kinesis/ultimate-deep-impact.png" alt="Skill Deep Impact"/> Deep Impact (Kinesis)</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>The most common caster is <a href="https://maplestorywiki.net/w/Sinister_Steel_Mask" target="_blank" rel="noreferrer noopener">Sinister Steel Masks</a> from <a href="https://maplestorywiki.net/w/Twilight_Perion" target="_blank" rel="noreferrer noopener">Twilight Perion</a> thus can be an inconvenience to deal with</p>
        </LazyLoad>
    )
};

function DamienBrand() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/stigma-ui.png" alt="A UI indicating the number of stigma stacks"/><img src="/images/abnormal-statuses/stigma-character.gif" alt="A red mark floats above the character"/><img src="/images/abnormal-statuses/stigma-gain.gif" alt="A red mark flashes above the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Upon receiving 7 Brand stacks, the character dies and a sword is created</StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd>Holding the Harvest/Interact Key while near a World Tree Altar</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Brand stacks are given every 28 secs while Damien's HP is above 50% and every 18 secs afterwards. Brand stacks are given to a player based on the following messages:</p>
            <ul>
                <li><strong>#1 Aggro Meter on the left</strong> - "Damien is targeting the most threatening opponent for his Brand"</li>
                <li><strong>User with most Brands</strong> - "Damien is targeting the most-branded opponent for his Brand"</li>
                <li><strong>User with least Brands</strong> - "Damien is targeting the least-branded opponent for his Brand"</li>
                <li><strong>Random</strong> - "Damien is targeting a random opponent for his Brand"</li>
            </ul>
            <p>Brand stacks are also added from getting hit by Damien</p>
            <p>Dying cannot be prevented by any skills upon reaching 7 stacks. However, iFrame skills can delay the triggering of the effect</p>
        </LazyLoad>
    )
};

function AkechiBrand() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={2}>Effect & Status</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/cruel-brand.gif" alt="A flower with ink mark floats above the character"/><img src="/images/abnormal-statuses/cruel-brand-icon.png" alt="An icon with a red flower"/><p><strong>Cruel Brands</strong></p><p>Upon receiving 30 Cruel Brand stacks, all party members on the map will die</p></StyledTd>
                    </tr>
                    <tr>
                    <StyledTd><img src="/images/abnormal-statuses/provoke.gif" alt="A white wolf floats above the character"/><img src="/images/abnormal-statuses/overwhelm.gif" alt="A black wolf floats above the character"/><img src="/images/abnormal-statuses/provoke-icon.png" alt="An icon with a white wolf"/><img src="/images/abnormal-statuses/overwhelm-icon.png" alt="An icon with a black wolf"/><p><strong>Provoke, Overwhelm</strong></p><p>During Provoke, damage towards Akechi is increased by 10% and damage received from Akechi is increased by 15%</p><p>During Overwhelm, the effect is increased to 20% for both damage dealt and taken</p></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Cure</StatusTitle>
                        <StyledTd><p>Cruel Brand stacks are reduced by 1 every 5 secs</p><p>Dealing 20 billion damage during Provoke will prevent Overwhelm from being applied. During Overwhelm, after 30 seconds the status will disappear</p></StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Cruel Brand stacks are applied each time Akechi successfully lands an attack on a player</p>
            <p>During Overwhelm, Akechi will summon clones every second that apply Cruel Brands and a slow that prevents movement skills</p>
        </LazyLoad>
    )
};

function BlackMageCurse() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle rowSpan={3}>Effect & Status</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/creation-curse.gif" alt="A white and red aura with chains floats above the character"/><img src="/images/abnormal-statuses/creation-curse-icon.png" alt="An icon with a red and white aura"/><p><strong>Creation Curse</strong></p><p>For 6 secs, 4% HP/MP recovery per second, 10% Final Damage reduction, and creates red flames that explode after a delay that damages players</p></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd><img src="/images/abnormal-statuses/destruction-curse.gif" alt="A black and red aura with chains floats above the character"/><img src="/images/abnormal-statuses/destruction-curse-icon.gif" alt="An icon with a red and black aura"/><p><strong>Destruction Curse</strong></p><p>For 6 secs, increases damage taken (including %Max HP attacks) by 15%, 10% Final Damage increase, and consumable items cannot be used</p></StyledTd>
                    </tr>
                    <tr>
                        <StyledTd>Upon receiving both Curses, 1 Life Count is lost, the player receives 50% Max HP damage, and Seal status is applied for 5 secs</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Falling meteors and certain Aeonian Rise attacks will apply the Creation Curse for 6 secs</p>
            <p>Black chains and certain Tanadian Ruin attacks will apply the Destruction Curse for 6 secs</p>
        </LazyLoad>
    )
};

function SerenCurse() {
    return (
        <LazyLoad height={200} offset={100}>
            <StatusTable>
                <tbody>
                    <tr>
                        <StatusTitle>Effect</StatusTitle>
                        <StyledTd><img src="/images/abnormal-statuses/seren-p1-gauge.png" alt="A gauge that appears during the Seren boss fight"/><img src="/images/abnormal-statuses/seren-stun.gif" alt="A gold mark pulsates around the character"/></StyledTd>
                    </tr>
                    <tr>
                        <StatusTitle>Status</StatusTitle>
                        <StyledTd>Upon filling up the gauge, you are unable to perform any actions including recovery for 5 secs. This stun effect cannot be avoided</StyledTd>
                    </tr>
                </tbody>
            </StatusTable>
            <p>Each player's gauge is filled up slowly. Upon taking damage from certain Seren attacks and map patterns, the gauge will also fill up</p>
            <p>Note, this stun is different from the stun in Phase 2 that can be dispelled</p>
        </LazyLoad>
    )
};