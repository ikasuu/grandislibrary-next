import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

import { EventPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import Video from '../../components/repository/Video';
import { TabLink } from '../../components/Page';

function UpdateTimelineOverview() {
    return (
        <EventPage>
            <Head>
                <title>Update Timeline Overview | Grandis Library</title>
                <meta content={"Looking to catch up? Take a look at an overview of every update so far from Big Bang to the current update"} name="description"/>
            </Head>
            <ContentTitle>Update Timeline Overview</ContentTitle>
            <ul>
                <li><Link href="#bang">Big Bang</Link></li>
                <li><Link href="#chaos">Chaos</Link></li>
                <li><Link href="#ascension">Ascension</Link></li>
                <li><Link href="#fellowship">Rise of Fellowship</Link></li>
                <li><Link href="#legends">Legends</Link></li>
                <li><Link href="#rising">Alliance Rising</Link></li>
                <li><Link href="#unbound">Alliance Unbound</Link></li>
                <li><Link href="#eternal">Alliance Eternal</Link></li>
                <li><Link href="#renegades">Renegades</Link></li>
                <li><Link href="#mutiny">Mutiny</Link></li>
                <li><Link href="#dawn">New Dawn</Link></li>
                <li><Link href="#champions">Champions</Link></li>
                <li><Link href="#tempest">Tempest</Link></li>
                <li><Link href="#snake">Year of the Snake</Link></li>
                <li><Link href="#honor">Mark of Honor</Link></li>
                <li><Link href="#hyper">Hyper Evolution</Link></li>
                <li><Link href="#unleashed">Unleashed</Link></li>
                <li><Link href="#reforged">Cygnus Knights Awakening</Link></li>
                <li><Link href="#dawnveil">Dawnveil Demons of Tynerum</Link></li>
                <li><Link href="#red">RED</Link></li>
                <li><Link href="#returnmasteria">Return to Masteria</Link></li>
                <li><Link href="#athenaeum">Grand Athenaeum</Link></li>
                <li><Link href="#legacynine">Legacy of Nine</Link></li>
                <li><Link href="#risingheroes">Rising Heroes: Elite</Link></li>
                <li><Link href="#hieizan">Mark of Honor: Hieizan</Link></li>
                <li><Link href="#sao">Sword Art Online</Link></li>
                <li><Link href="#awakening">Cygnus Awakening: Night Walker</Link></li>
                <li><Link href="#shiningstar">Shining Star</Link></li>
                <li><Link href="#titan">MapleStory x Attack On Titan</Link></li>
                <li><Link href="#blackheaven">Black Heaven</Link></li>
                <li><Link href="#springsummer">Spring Into Summer</Link></li>
                <li><Link href="#firepower">FIREPOWER</Link></li>
                <li><Link href="#superstar">Pink Bean: Superstar</Link></li>
                <li><Link href="#asylum">Asylum</Link></li>
                <li><Link href="#alishan">Welcome to Alishan</Link></li>
                <li><Link href="#reboot">Reboot</Link></li>
                <li><Link href="#masteriatime">Masteria Through Time</Link></li>
                <li><Link href="#eleven">Maple's Eleven</Link></li>
                <li><Link href="#detectives">Detectives</Link></li>
                <li><Link href="#heroesmaple">Heroes of Maple</Link></li>
                <li><Link href="#mushroomshrine">Mushroom Shrine Tales</Link></li>
                <li><Link href="#strangestories">Strange Stories</Link></li>
                <li><Link href="#v">V Update</Link></li>
                <li><Link href="#kerningcity">Kerning City Superstars</Link></li>
                <li><Link href="#rezero">MapleStory x Re:Zero</Link></li>
                <li><Link href="#override">Override: Evolve</Link></li>
                <li><Link href="#tuneup">Tune Up</Link></li>
                <li><Link href="#nova">Nova</Link></li>
                <li><Link href="#newyear">New Year Showdown</Link></li>
                <li><Link href="#evangelion">MapleStory x Evangelion</Link></li>
                <li><Link href="#pinkbeany">Lifestyle of the Pink Beany</Link></li>
                <li><Link href="#ark">Ark</Link></li>
                <li><Link href="#cardcaptor">MapleStory x Cardcaptor</Link></li>
                <li><Link href="#darknesslooms">Darkness Looms</Link></li>
                <li><Link href="#blackmage">Black Mage</Link></li>
                <li><Link href="#arcade">Arcade Adventures</Link></li>
                <li><Link href="#line">LINE FRIENDS x MapleStory</Link></li>
                <li><Link href="#pathfinder">Pathfinder</Link></li>
                <li><Link href="#worldsunite">Worlds Unite</Link></li>
                <li><Link href="#melody">Fabled Melody</Link></li>
                <li><Link href="#glory">Glory</Link></li>
                <li><Link href="#utopia">Mechanical Utopia</Link></li>
                <li><Link href="#isekai">MapleStory X ISEKAI QUARTET</Link></li>
                <li><Link href="#pixelparty">Pixel Party</Link></li>
                <li><Link href="#rise">Rise</Link></li>
                <li><Link href="#astral">Astral Blessings</Link></li>
                <li><Link href="#asura">Sengoku Returns: Asura War</Link></li>
                <li><Link href="#awake">Awake</Link></li>
                <li><Link href="#moonlight-magic">Moonlight Magic</Link></li>
                <li><Link href="#hotel-maple">Hotel Maple</Link></li>
                <li><Link href="#neo">Neo</Link></li>
                <li><Link href="#goo-island">Goo Island Getaway</Link></li>
                <li><Link href="#bugcat-capoo">Bugcat Capoo</Link></li>
                <li><Link href="#on-air">On Air</Link></li>
            </ul>
            <h2 id="bang">Big Bang Update - Dec 2010</h2>
            <BigBang/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="chaos">Chaos Update - July 2011</h2>
            <Chaos/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="ascension">Ascension Update - Oct 2011</h2>
            <Ascension/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="fellowship">Rise of Fellowship Update - Nov 2011</h2>
            <RiseOfFellowship/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="legends">Legends Update - Dec 2011</h2>
            <Legends/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="rising">Alliance Rising Update - Jan 2012</h2>
            <AllianceRising/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="unbound">Alliance Unbound Update - Mar 2012</h2>
            <AllianceUnbound/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="eternal">Alliance Eternal Update - Apr 2012</h2>
            <AllianceEternal/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="renegades">Renegades Update - June 2012</h2>
            <Renegades/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="mutiny">Mutiny Update - Aug 2012</h2>
            <Mutiny/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="dawn">New Dawn Update - Sept 2012</h2>
            <NewDawn/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="champions">Champions Update - Sept 2012</h2>
            <Champions/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="tempest">Tempest Update - Sept 2012</h2>
            <Tempest/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="snake">Year of the Snake Update - Feb 2013</h2>
            <YearOfTheSnake/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="honor">Mark Of Honor Update - Feb 2013</h2>
            <MarkOfHonor/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="hyper">Hyper Evolution Update - Apr 2013</h2>
            <HyperEvolution/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="unleashed">Unleashed Update - May 2013</h2>
            <Unleashed/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="reforged">Cygnus Knights Awakening Update - Sept 2013</h2>
            <CyngusKnightsAwakening/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="dawnveil">Dawnveil Demons of Tynerum Update (RED) - Oct 2013</h2>
            <Dawnveil/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="red">RED Update - Dec 2013</h2>
            <Red/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="returnmasteria">Return to Masteria Update - Feb 2014</h2>
            <ReturnToMasteria/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="athenaeum">Grand Athenaeum Update - Mar 2014</h2>
            <GrandAthenaeum/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="legacynine">Legacy of Nine Update - May 2014</h2>
            <LegacyOfNine/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="risingheroes">Rising Heroes: Elite Update - Jun 2014</h2>
            <RisingHeroesElite/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="hieizan">Mark of Honor Hieizan Temple Update - Aug 2014</h2>
            <HieizanTemple/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="sao">Sword Art Online Update - Sept 2014</h2>
            <SwordArtOnline/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="awakening">Cygnus Awakening: Night Walker Update - Oct 2014</h2>
            <CygnusAwakeningNW/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="shiningstar">Shining Star Update - Dec 2014</h2>
            <ShiningStar/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="titan">MapleStory X Attack on Titan Update - Jan 2015</h2>
            <AttackOnTitan/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="blackheaven">Black Heaven Update - Mar 2015</h2>
            <BlackHeaven/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="springsummer">Spring into Summer Update - May 2015</h2>
            <SpringIntoSummer/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="firepower">FIREPOWER Update - Jul 2015</h2>
            <Firepower/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="superstar">Pink Bean: Superstar Update - Aug 2015</h2>
            <PinkBeanSuperstar/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="asylum">Asylum Update - Oct 2015</h2>
            <Asylum/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="alishan">Welcome to Alishan Update - Oct 2015</h2>
            <Alishan/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="reboot">Reboot Update - Dec 2015</h2>
            <Reboot/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="masteriatime">Masteria Through Time Update - Mar 2016</h2>
            <MasteriaThroughTime/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="eleven">Maple's Eleven Update - Apr 2016</h2>
            <MapleEleven/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="detectives">Detectives Update - May 2016</h2>
            <Detectives/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="heroesmaple">Heroes of Maple Update - Jun 2016</h2>
            <HeroesOfMaple/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="mushroomshrine">Mushroom Shrine Tales Update - Sept 2016</h2>
            <MushroomShrineTales/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="strangestories">Strange Stories Update - Oct 2016</h2>
            <StrangeStories/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="v">V Update - Dec 2016</h2>
            <VUpate/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="kerningcity">Kerning City Superstars Update - Feb 2017</h2>
            <KerningCitySuperstars/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="rezero">MapleStory X Re:Zero Update - May 2017</h2>
            <ReZero/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="override">Override Update - Jun 2017</h2>
            <Override/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="tuneup">Tune Up Update - Aug 2017</h2>
            <TuneUp/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="nova">NOVA Update - Nov 2017</h2>
            <Nova/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="newyear">New Year Showdown Update - Jan 2018</h2>
            <NewYearShowdown/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="evangelion">MapleStory X Evangelion Update - Feb 2018</h2>
            <Evangelion/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="pinkbeany">Lifestyle of the Pink Beany - May 2018</h2>
            <LifestylePinkBeany/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="ark">Ark Update - Jun 2018</h2>
            <Ark/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="cardcaptor">MapleStory x Cardcaptor Update - Aug 2018</h2>
            <Cardcaptor/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="darknesslooms">Darkness Looms Update - Oct 2018</h2>
            <DarknessLooms/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="blackmage">Black Mage Update - Nov 2018</h2>
            <BlackMage/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="arcade">Arcade Adventures Update - Mar 2019</h2>
            <ArcadeAdventures/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="line">LINE FRIENDS x MapleStory Update - Apr 2019</h2>
            <LineFriends/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="pathfinder">Pathfinder Update - Jun 2019</h2>
            <Pathfinder/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="worldsunite">Worlds Unite Update - Aug 2019</h2>
            <WorldsUnite/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="melody">Fabled Melody Update - Sept 2019</h2>
            <FabledMelody/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="glory">Glory Update - Nov 2019</h2>
            <Glory/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="utopia">Mechanical Utopia Update - Jan 2020</h2>
            <MechanicalUtopia/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="isekai">MapleStory X ISEKAI QUARTET Update - Mar 2020</h2>
            <IsekaiQuartet/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="pixelparty">Pixel Party Update - Apr 2020</h2>
            <PixelParty/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="rise">Rise Update - Jun 2020</h2>
            <Rise/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="astral">Astral Blessings Update - Aug 2020</h2>
            <AstralBlessing/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="asura">Sengoku Returns: Asura War Update - Oct 2020</h2>
            <AsuraWar/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="awake">Awake Update - Nov 2020</h2>
            <Awake/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="moonlight-magic">Moonlight Magic Update - Feb 2021</h2>
            <MoonlightMagic/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="hotel-maple">Hotel Maple Update - Apr 2021</h2>
            <HotelMaple/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="neo">Neo Update - June 2021</h2>
            <Neo/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="goo-island">Goo Island Getaway Update - Aug 2021</h2>
            <GooIsland/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="bugcat-capoo">Bugcat Capoo Update - Oct 2021</h2>
            <BugcatCapoo/>
            <div><Link smooth href="#top" scroll>Go to top</Link></div>
            <h2 id="on-air">On Air Update - Dec 2021</h2>
            <OnAir/>
        </EventPage>
    )
}

function Alishan() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/3176/151030_1100x225_v167alishan.jpg" alt="Welcome to Alishan"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/4620/v-167--welcome-to-alishan-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New area, <a href="https://maplestory.fandom.com/wiki/Category%3AAlishan" target="_blank" rel="noreferrer noopener">Alishan</a></li>
                <li><strong>World Leap Event!!</strong></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul><li>HackShield removed</li></ul>
        </LazyLoad>
    )
};

function AllianceEternal() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/QjSrkuUg_14" alt="Alliance Eternal"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120513110931/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00Dor&pageIndex=1"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul><li><img src="https://maplestory.io/api/GMS/214/item/2022719/icon" alt=""/> Lion King’s Castle revamp - Changed to a Theme Dungeon</li></ul>
        </LazyLoad>
    )
};

function AllianceRising() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/OGPde7JHkjY" title="Alliance Rising"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120329131432/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00DZh&pageIndex=1"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New quest, <a href="https://maplestory.fandom.com/wiki/Quests/60/The_Birth_of_an_Alliance" target="_blank" rel="noreferrer noopener">Birth of an Alliance</a>
                    <ul>
                        <li>
                            <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/Skill_Will_of_the_Alliance.png/revision/latest?cb=20120205163527" alt="Skill Will of the Alliance" width="32" height="32" />
                            <a href="https://maplestory.fandom.com/wiki/Will_of_the_Alliance" target="_blank" rel="noreferrer noopener">Will of Alliance</a> passive skill introduced
                        </li>
                    </ul>
                </li>
                <li>
                    Silent Crusade Revamp
                    <ul>
                        <li>Located at <a href="https://maplestory.wiki/GMS/210.1.1/map/310000001" target="_blank" rel="noreferrer noopener">Edelstein City Hall</a> now</li>
                        <li><a href="https://maplestory.fandom.com/wiki/Mystic_Gate" target="_blank" rel="noreferrer noopener">Mystic Gates</a> introduced (15 times a day entry)</li>
                        <li>Level 45 or above requirement</li>
                        <li>
                            New rewards such as <img src="https://maplestory.io/api/GMS/210.1.1/item/1112607/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/1112608/icon" alt=""/>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/1112609/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/1112611/icon" alt=""/> rings and <img src="https://maplestory.io/api/GMS/210.1.1/item/4310018/icon" alt=""/>
                            <a href="https://maplestory.fandom.com/wiki/Crusader_Coins" target="_blank" rel="noreferrer noopener">Crusader Coins</a>
                        </li>
                    </ul>
                </li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e9/MapIcon_Akairum.png/revision/latest?cb=20141001075303" alt="MapIcon Akairum" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Arkarium" target="_blank" rel="noreferrer noopener">Arkarium</a>
                </li>
            </ul>
            <h3>New Cash Items</h3>
            <ul><li><img src="https://maplestory.io/api/GMS/214/item/5450008/icon" alt=""/> Portable Storage</li></ul>
        </LazyLoad>
    )
};

function AllianceUnbound() {
    return (
        <LazyLoad height={200} offset={100}>

            <Video src="https://www.youtube.com/embed/-Kdq-rEjPt0" alt="Alliance Unbound"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120327225533/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00Dif&pageIndex=1"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>Nebulites System introduced</strong></li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/1112683/icon" alt=""/> <a href="https://maplestory.fandom.com/wiki/Category%3AEllin_Forest" target="_blank" rel="noreferrer noopener">Ellin Forest</a> Revamp (Ephenia boss update, current
                    iteration)
                </li>
                <li>New Leaf City + Masteria Revamp (Aliens invasion)</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul><li>Graphic quality of skills can now be modified</li></ul>
        </LazyLoad>
    )
};

function ArcadeAdventures() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/LwjU2SH31SA" title="Arcade Adventures"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/44870/updated-april-11-v-203-arcade-adventures-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New Theme Dungeon, Detective Raves’ Case Notes</li></ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>End Game Confirmation Window added to show unclaimed rewards and other information</li>
                <li>
                    <strong>New level restrictions for Meso Market, Auction House and gifting in Cash Shop</strong>
                    <ul>
                        <li><strong>You must be Lv.61+ and account is more than 3 days old</strong></li>
                    </ul>
                </li>
                <li>Fairy Bros Daily Gift Calendar increased to 28 days</li>
            </ul>
        </LazyLoad>
    )
};

function Ark() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/VVO-nQ_o_8g" title="Ark"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/31834/updated-august-1-v-196-ark-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/32876/updated-september-4-v-197-ark-monad-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>Star Force Revamp, 25 Stars introduced</strong></li>
                <li>
                    <strong><a href="http://forums.maplestory.nexon.net/discussion/20199/guide-to-bonus-stats" target="_blank" rel="noreferrer noopener">Bonus Stats and Rebirth Flames added</a></strong>
                </li>
                <li><strong>Nebulite Removal</strong></li>
                <li><strong>New World, Reboot (EU)</strong></li>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Ark" target="_blank" rel="noreferrer noopener">Ark</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b0/MapIcon_verdel.png/revision/latest?cb=20191204082823" alt="MapIcon verdel" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AVerdel" target="_blank" rel="noreferrer noopener">Verdel</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png/revision/latest?cb=20191204082805" alt="MapIcon esfera" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AEsfera" target="_blank" rel="noreferrer noopener">Esfera: Origin Sea</a>
                </li>
                <li>New boss, <a href="https://maplestory.fandom.com/wiki/Will" target="_blank" rel="noreferrer noopener">Will</a></li>
                <li>
                    New equipment, Pocket item, <img src="https://maplestory.io/api/GMS/214/item/1162080/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1162081/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1162082/icon" alt=""/>
                    <img src="https://maplestory.io/api/GMS/214/item/1162083/icon" alt=""/> Cursed Spellbook
                </li>
                <li>
                    New item, <img src="https://maplestory.io/api/GMS/214/item/2438411/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/2438411" target="_blank" rel="noreferrer noopener">Mirror World Nodestone</a> - provides new 5th job skill <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2a/Skill_True_Arachnid_Reflection.png/revision/latest?cb=20180621200313" alt="Skill True Arachnid Reflection" width="32" height="32" /> ‘
                    <a href="https://maplestory.fandom.com/wiki/True_Arachnid_Reflection" target="_blank" rel="noreferrer noopener">True Arachnid Reflection</a>’, <img src="https://maplestory.io/api/GMS/214/item/4001890/icon" alt=""/>
                    <a href="https://maplestory.wiki/GMS/214/item/4001890" target="_blank" rel="noreferrer noopener">Stone Cobweb Droplet</a> to obtain <img src="https://maplestory.io/api/GMS/214/item/4310249/icon" alt=""/>
                    <a href="https://maplestory.fandom.com/wiki/Arachno_Coin" target="_blank" rel="noreferrer noopener">Arachno Coins</a> to purchase Arcane Umbra equipment
                </li>
                <li>
                    Grand Athenaeum: <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/MapIcon_Library.png/revision/latest?cb=20140614011213" alt="MapIcon Library" width="38" height="38" />
                    <a href="https://www.youtube.com/watch?v=f4bzrRnN2Uk" target="_blank" rel="noreferrer noopener">Shadow Alchemist</a> story added
                </li>
                <li>New storyline, <a href="https://maplestory.fandom.com/wiki/Category:Captain_Vaga" target="_blank" rel="noreferrer noopener">Captain Vaga</a> (Stellar Detectives prequel)</li>
                <li>New blockbuster: <a href="https://maplestory.fandom.com/wiki/Blockbuster/Monad" target="_blank" rel="noreferrer noopener">Monad</a></li>
                <li>
                    <strong>New item <a href="https://maplestory.wiki/GMS/214/item/2535000" target="_blank" rel="noreferrer noopener">Arcane Catalyst</a>, you will be able to transfer Arcane Symbols to other characters within the same world</strong>
                </li>
                <li><strong>Ark Innocence Scroll - New scroll found in the Equipment Enhancement UI that resets all stats except for Potential, Star Force and Bonus Stats</strong></li>
                <li>Monster Park Vanishing Journey added</li>
                <li>New event, <a href="http://maplestory.nexon.net/news/34318/lab-server-here-for-a-limited-time" target="_blank" rel="noreferrer noopener">Lab Server</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>V Care - Improvements to Arcane River dailies based on the number of areas cleared in the Arcane River</strong></li>
                <li><strong>New Morass daily quests added</strong></li>
                <li>Kritias dailies reduced from 5 to 3</li>
                <li>Scrapyard dailies reduced from 5 to 3, amount of Diffusion-Line Energy Core (Grade A) still the same</li>
                <li>Dark World Tree dailies have become easier, level range reduced to Lv.210-219</li>
                <li>Rate of Golden Wyverns in Legion battle is increased</li>
                <li>
                    <strong>
                        V Matrix improvements, when you level up after 5th Job, you can Matrix Points you can use to enhance Node slots (up to 5 per slot), a Node’s skill level can go beyond the maximum meaning actives up to Lv.30 and Boost Nodes up to
                        Lv.60
                    </strong>
                </li>
                <li><strong>You can use Mesos to open up to two Node slots in advance</strong></li>
                <li><strong>5th Job Advancement conditions changed, there is no more wait type for the Arcane Stones before you can activate them to fill up with EXP. Star Force requirement added (100 Star Force stars)</strong></li>
                <li>Elite Boss, Pollo &amp; Fritto Improvements - HP and EXP from these mobs are based on the monsters in the field they appeared in, new Catch the Stormwing mission added.</li>
                <li>Easy mode Hungry Muto added</li>
                <li>Bonus coins given from the 1st place per Dream Defender results increased based on number of floors cleared</li>
                <li>Entering Spirit Savior 3 times per day grants additional coins</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1712000/icon" alt=""/><strong> You can combine multiple Arcane Symbols at once</strong></li>
                <li>Players can see Runes &amp; Lures on the mini-map</li>
            </ul>
        </LazyLoad>
    )
};

function Ascension() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/nC3jzRcKv8E" title="Ascension"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120117210629/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00Cz8&pageIndex=1"/></p>
                <p><TabLink url="https://spadow.wordpress.com/2011/03/31/kms-ver-1-2-129-counterattack-of-the-blade/"/></p>
                <p><TabLink url="https://spadow.wordpress.com/2011/04/21/kms-ver-1-2-131-spell-of-awakening/"/></p>
                <p><TabLink url="https://spadow.wordpress.com/2011/05/26/kms-ver-1-2-133-the-arrow-of-speed/"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c2/MapIcon_MonsterPark.png/revision/latest?cb=20100619154742" alt="MapIcon MonsterPark" width="38" height="38" /> <a href="https://www.youtube.com/watch?v=aUWjaRDBLTM" target="_blank" rel="noreferrer noopener">Monster Park introduced</a>, a new party play area with parties of 2-6
                    <ul>
                        <li>Different from the one we have today</li>
                    </ul>
                </li>
                <li>New Party Quest, <a href="https://www.youtube.com/watch?v=qu6gRfiJ1cI" target="_blank" rel="noreferrer noopener">The Ice Knight’s Curse</a></li>
                <li>
                    New Party Quest, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/39/MapIcon_kentaInDanger.png/revision/latest?cb=20130613065851" alt="MapIcon kentaInDanger" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AKenta_in_Danger" target="_blank" rel="noreferrer noopener">Kenta in Danger</a>
                </li>
                <li>
                    New Party Quest, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8c/MapIcon_prisonBreak.png/revision/latest?cb=20130613065657" alt="MapIcon prisonBreak" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AEscape" target="_blank" rel="noreferrer noopener">Escape</a>
                </li>
                <li><a href="https://www.youtube.com/watch?v=olT4o6NPDqk" target="_blank" rel="noreferrer noopener">Airplane Mount</a> skills (can be used for traveling between regions)</li>
                <li><a href="https://www.youtube.com/watch?v=BDJZf6IsJ2c" target="_blank" rel="noreferrer noopener">Treasure Monsters</a> rare monsters with the same appearance and stats as regular monsters but drop valuable items</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Re-buy button for items you’ve recently sold to NPC Vendors</li>
                <li>Dedicated Mount skills tab and Guild skill tab in your Character Info UI</li>
                <li>NPCs now have distinct icons depending on their function</li>
                <li>Quest notifications that appear above your character’s head have been moved to the left side of the screen <img src="https://i.imgur.com/OWuAwNY.png" alt="MapleStory_qjjMOLZewp" width="48" height="45" /></li>
                <li>Different icons will be shown for different notification types (Lightbulb, star, etc)</li>
                <li>New Medal UI where most medals can now be reissued with a fee</li>
                <li>Unused AP/SP after leveling-up, a notification will be displayed at the bottom of the screen</li>
                <li>Amoria has been redesigned to be smaller</li>
            </ul>

        </LazyLoad>
    )
};

function AstralBlessing() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2020/q3/2050/1100x225-maplestory-astral-blessings-mmorpg.jpg" alt="Astral Blessing"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/60439/v-216-astral-blessings-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Web-based Maple Guide added and integrated into in-game Maple Guide UI</li>
                <li>New Familiars will be added to Moonbridge, Labyrinth of Suffering, and Limina</li>
                <li>Includes new Badge sets for each area</li>
                <li>New event, <a href="https://maplestory.nexon.net/news/60439/v-216-astral-blessings-patch-notes#celestial" target="_blank" rel="noreferrer noopener">Celestial Festival</a></li>
                <li>Returning event, <a href="https://maplestory.nexon.net/news/60439/v-216-astral-blessings-patch-notes#giveaway" target="_blank" rel="noreferrer noopener">Fairy Bros' Golden Giveaway</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Damage-capped Princess No monsters (Mikagami excluded) will now receive 100 damage from all damage sources</li>
                <li>Master Craftsman’s Cube and Meister’s Cube drops have been adjusted</li>
                <li>Drop rate has been adjusted for bosses based on their difficulty for all worlds</li>
                <li>Cube Fragments will no longer drop</li>
                <li>Hoyoung's Iron Fan Gale and Consuming Flames skills' attack speed cannot be increased beyond 2 and the skill descriptions have been updated to reflect this change</li>
            </ul>
        </LazyLoad>
    )
};

function AsuraWar() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/8B_TCNuRFD8" title="Asura War"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/62184/v-217-sengoku-returns-asura-war-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New Sengoku event, The Asura Crisis</li></ul>
            <h3>New Features + Changes</h3>
            <ul><li>Fishing System removed</li></ul>
        </LazyLoad>
    )
};

function Asylum() {
    return (
        <LazyLoad height={200} offset={100}>

            <Video src="https://www.youtube.com/embed/WwEAazHF0jM" title="Asylum"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/4369/v-166-asylum-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    Class revamp: Kanna &amp; Hayato ( <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/67/Skill_Normal_Stance_Bonus.png/revision/latest?cb=20180505150714" alt="Skill Normal Stance Bonus" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/Skill_Quick_Draw.png/revision/latest?cb=20180520132001" alt="Skill Quick Draw" width="32" height="32" /> Sword Energy system)
                </li>
                <li>Feedback Survey system added when exiting game</li>
            </ul>
            <h3>New Cash Items</h3>
            <ul><li><img src="https://maplestory.io/api/GMS/215/item/2436402/icon" alt="Name Change Coupon"/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/215/item/2436402" target="_blank">[Character Name Change Coupon Voucher]</a>: Allows users to change the name of their character</li></ul>
        </LazyLoad>
    )
};

function AttackOnTitan() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/spotlight/286/00ES3-516e3e87-2858-4091-a9d4-4d0f085b036b.jpg" alt="Attack on Titan"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20150225200154/http://maplestory.nexon.net/news/updates/update-notes/00IHg/updated-v-159-maplestory-x-attack-on-titan-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New event, <a href="https://www.youtube.com/watch?v=Ctd470aMqIs" target="_blank" rel="noreferrer noopener">Attack on Titan Crossover</a></li>
                <li>New dungeon, Beasts of Fury</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul><li>Multi Pet Quests change (<img src="https://maplestory.io/api/GMS/214/item/5460000/icon" alt=""/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/5460000" target="_blank">Pet Snack</a> for multiple pets)</li></ul>
        </LazyLoad>
    )
};

function Awake() {
    return (
        <LazyLoad height={200} offset={100}>

            <Video src="https://www.youtube.com/embed/B4zEuRextk8" title="Awake"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/63065/updated-november-18-v-218-awake-ascend-to-mastery-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><img src="https://i.imgur.com/SoXcDFJ.png" alt=""/> <img src="https://i.imgur.com/txps9oi.png" alt=""/> <img src="https://i.imgur.com/jkUHsGT.png" alt=""/> <img src="https://i.imgur.com/4WkRzjK.png" alt=""/> New 5th job skills for all classes</li>
                <li>
                    New skills for Warriors, Buccaneer, Mihile, and Mechanic
                    <ul>
                        <li>
                            [Warriors] <img src="https://static.wikia.nocookie.net/maplestory/images/4/49/Skill_Leap_Attack.png" alt="Skill Leap Attack.png" width="32" height="32" /> Leap Attack and
                            <img src="https://orangemushroom.files.wordpress.com/2020/03/upper-charge-1.png?w=600" alt="Upper Charge (1)" />
                            <img src="https://orangemushroom.files.wordpress.com/2020/03/upper-charge-2.png?w=600" alt="Upper Charge (2)" />
                            <img src="https://orangemushroom.files.wordpress.com/2020/03/upper-charge-3.png?w=600" alt="Upper Charge (3)" /> Upward Charge
                        </li>
                        <li>[Buccaneer] <img src="https://orangemushroom.files.wordpress.com/2020/03/advanced-dash.png?w=600" alt="Advanced Dash" /> Advanced Dash</li>
                        <li>[Mihile] <img src="https://orangemushroom.files.wordpress.com/2020/03/vertical-shining-chase.png?w=600" alt="Vertical Shining Chase" /> Vertical Radiant Driver</li>
                        <li>[Mechanic] <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b1/Skill_Mechanic_Dash.png/revision/latest?cb=20151018042126" alt="Skill Mechanic Dash" width="32" height="32" /> Jet Booster</li>
                    </ul>
                </li>
                <li>Grand Athenaeum: <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/MapIcon_Library.png/revision/latest?cb=20140614011213" alt="MapIcon Library" width="38" height="38" /> Sharenian Knights story added</li>
                <li>New Event, <img src="https://maplestory.io/api/KMS/339/map/993184000/icon" alt=""/> Awake</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Major Job Balances,</strong> reduced action delays, increased number of lines per attack, and other logic changes to majority of classes</li>
                <li>
                    <strong>Certain skills changed from server-side to client-side</strong>
                    <ul>
                        <li>
                            Such as, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/Skill_Meso_Explosion.png/revision/latest?cb=20160107234010" alt="Skill Meso Explosion" width="32" height="32" />,
                            <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3b/Skill_Homing_Beacon.png/revision/latest?cb=20141109015901" alt="Skill Homing Beacon" width="32" height="32" /> and
                            <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/88/Skill_Royal_Guard.png/revision/latest?cb=20150701221932" alt="Skill Royal Guard" width="32" height="32" />
                        </li>
                    </ul>
                </li>
                <li><strong>When 2 copies of the same item are equipped, only 1 item will be applied to the set effect</strong></li>
                <li>Removed area, Malaysia</li>
                <li>Deia's G-Potion quest now available throughout the week</li>
                <li>Food materials obtained in Hungry Muto will appear bigger above your character</li>
                <li>The number of Rock Spirits rescued will show above your character in Spirit Savior</li>
                <li>Certain buff potions now have different icons for easier differentiation</li>
                <li>When you attempt to enter Legion while you have unclaimed coins, the name of the character that is currently in the Legion Raid exit map will be displayed</li>
                <li>
                    Auction House changes
                    <ul>
                        <li><img src="https://maplestory.io/api/GMS/217/item/2434503/icon" alt=""/> Spell Traces can now only be bought or sold in units of 1,000</li>
                        <li>Job search filters added to search options for armor</li>
                        <li>When registering an item to sell, the item will be searchable after 5 minutes</li>
                    </ul>
                </li>
                <li>
                    Legion Placement Mode changes
                    <ul>
                        <li>Clicking on Character Cards will activate blocks on the Synergy Grid</li>
                        <li>New OK button in Edit Blocks menu that, when clicked, deselects the block and places it on the grid</li>
                        <li>New button to remove assigned units in Edit Blocks menu</li>
                        <li>New button to reset assigned units</li>
                    </ul>
                </li>
                <li>
                    Inventory changes
                    <ul>
                        <li>New Decoration tab in inventory for all cash equipments</li>
                        <li>Adjusted inventory spacing to be wider</li>
                    </ul>
                </li>
                <li>
                    <strong>MVP System changes</strong>
                    <ul>
                        <li>
                            New rank added, <img src="https://maplestory.io/api/KMS/339/item/3014037/icon" alt=""/> MVP Red, a tier above Diamond
                            <ul>
                                <li>
                                    Includes a <img src="https://maplestory.io/api/KMS/339/item/2631756/icon" alt=""/> MVP Red Royal Pack that can be claimed once per month per character (all items except Maple Points)
                                    <ul>
                                        <li>
                                            Contains Maple Points, <img src="https://maplestory.io/api/KMS/339/item/1115095/icon" alt=""/> Label and Chat Rings, <img src="https://maplestory.io/api/KMS/339/item/3130001/icon" alt=""/> Togglable Damage Skin (Set-up
                                            item), <img src="https://maplestory.io/api/KMS/339/item/1143203/icon" alt=""/> Title, <img src="https://maplestory.io/api/KMS/339/item/3700625/icon" alt=""/> Medal, and other special rewards
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Gift Packs replace Daily Packs
                            <ul>
                                <li>Can be claimed 3 times a month per account</li>
                                <li>Claim period is divided into, Days 1 - 10, Days 11 - 20, and Days 21 - last day of the month</li>
                            </ul>
                        </li>
                        <li><img src="https://maplestory.io/api/KMS/339/item/3700341/icon" alt=""/> MVP Bronze title stats will be adjusted from 90-day duration to permanent and will be tradable within account</li>
                    </ul>
                </li>
                <li>
                    Maroon in Pantheon sells <img src="https://maplestory.io/api/GMS/217/item/2350004/icon" alt=""/><img src="https://maplestory.io/api/GMS/217/item/2350005/icon" alt=""/> Final Form Main/Sub Color Change Coupons and
                    <img src="https://maplestory.io/api/GMS/217/item/2350007/icon" alt=""/> Color Reset Coupons
                </li>
                <li>
                    <strong>Map Improvements, maps have more monsters</strong>
                    <ul>
                        <li>Majority of Arcane River maps improved</li>
                    </ul>
                </li>
                <li>
                    Elite Champions adjusted, attack pattern changes
                    <ul>
                        <li>Timer Shade also removed</li>
                        <li>When an Elite Champion is defeated, an Elite Champion Orb will be created similar to Combo Orbs</li>
                    </ul>
                </li>
                <li>Reboot Gift Box adjustments, last gift box changed from 72 mil mesos to <img src="https://maplestory.io/api/GMS/217/item/2439306/icon" alt=""/> Reboot Meso Pouch (x3)</li>
                <li><strong>Meso Piggy Bank soon to be removed (January 26)</strong></li>
                <li>More maps can be accessible for Magnus (Normal, Hard) boss battle</li>
                <li><strong>Maximum number of damage skins that can be saved on the Damage Skin slots have been changed to 36</strong></li>
                <li>Flag Race level requirement increased to Lv. 101 or higher</li>
                <li><strong>Characters created less than 3 days ago cannot trade cash items and characters created less than 7 days ago cannot use the Gift feature in the Cash Shop</strong></li>
            </ul>
        </LazyLoad>
    )
};

function BigBang() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/vjgzacr7Na4" title="Big Bang"/>
            <div className="repository-md-container">
                <p><a href="https://web.archive.org/web/20101221101326/http://maplestory.nexon.net/News/News.aspx?boardNo=103&amp;contentNo=00AMI&amp;pageIndex=1" target="_blank" rel="noopener noreferrer">https://web.archive.org/web/20101221101326/http://maplestory.nexon.net/News/News.aspx?boardNo=103&amp;contentNo=00AMI&amp;pageIndex=1</a></p>
                <p><a href="https://spadow.wordpress.com/2010/07/01/maplestory-big-bang-update/" target="_blank" rel="noopener noreferrer">https://spadow.wordpress.com/2010/07/01/maplestory-big-bang-update/</a></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New classes, <a href="https://maplestory.fandom.com/wiki/Battle_Mage" target="_blank" rel="noreferrer noopener">Battle Mage</a>, <a href="https://maplestory.fandom.com/wiki/Wild_Hunter" target="_blank" rel="noreferrer noopener">Wild Hunter</a>, and <a href="https://maplestory.fandom.com/wiki/Mechanic" target="_blank" rel="noreferrer noopener">Mechanic</a>
                </li>
                <li>
                    New town, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/59/MapIcon_Edelstein.png/revision/latest?cb=20100625011154" alt="MapIcon Edelstein" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Category:Edelstein" target="_blank" rel="noreferrer noopener">Edelstein</a>
                </li>
                <li>
                    New <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0f/MapIcon_SixPath.png/revision/latest?cb=20150823044951" alt="MapIcon SixPath" width="38" height="38" /> <a href="https://maplestory.wiki/GMS/214/map/104020000" target="_blank" rel="noreferrer noopener">Six Path Crossway</a> hub to access all towns of Victoria Island
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>EXP required from Lv. 10 - 200 has been reduced</li>
                <li>Formulas for damage, defense, accuracy, and avoidability has been overhauled</li>
                <li>
                    Many monster maps have been removed or replaced
                    <ul>
                        <li>Several changes to map layouts including the rearrangement of Victoria Island</li>
                    </ul>
                </li>
                <li>Drop rates of many Use and some Etc. items have been increased</li>
                <li>Starting level for some party quests have been changed and upper-level restrictions have been removed</li>
                <li>Quest requirements have been lowered to make them easier</li>
                <li>
                    Adjustments made to monsters throughout Maple World
                    <ul>
                        <li>Adjustments include stats, EXP rewarded, Mesos dropped and equipment dropped</li>
                    </ul>
                </li>
                <li>Some monster maps are now restricted by level to help prevent players from wandering into areas beyond their level range</li>
                <li>Skills for all jobs have been “streamlined and consolidated” into the most useful ones</li>
                <li>Support for 1024 x 768 resolution</li>
                <li>User interface has been reworked</li>
                <li>New simple minimap mode added</li>
            </ul>
            <h3>New Cash Items</h3>
            <ul>
                <li>
                    <img src="https://maplestory.io/api/GMS/210.1.1/item/5660000/icon" alt=""/> <a href="https://maplestory.wiki/GMS/210.1.1/item/5660000" target="_blank" rel="noreferrer noopener">Quest Deliverer Thomas</a>: allows to remotely accept an
                    available quest from anywhere
                </li>
                <li>
                    <img src="https://maplestory.io/api/GMS/210.1.1/item/5660001/icon" alt=""/> <a href="https://maplestory.wiki/GMS/210.1.1/item/5660001" target="_blank" rel="noreferrer noopener">Quest Completer Alice</a>: allows you to complete quests to
                    NPCs from anywhere
                </li>
            </ul>
        </LazyLoad>
    )
};

function BlackHeaven() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/L6Lr1O2A-LI" title="Black Heaven"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2724/v-160-black-heaven-first-chapter-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/2727/v-161-black-heaven-final-chapter-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Class revamps, Battle Mage, Wild Hunter, Mechanic (Current iteration)</li>
                <li>New blockbuster, <a href="https://maplestory.fandom.com/wiki/Blockbuster/Black_Heaven" target="_blank" rel="noreferrer noopener">Black Heaven</a></li>
                <li>
                    New boss: <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/MapIcon_BlockBuster.png/revision/latest?cb=20191204082759" alt="MapIcon BlockBuster" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Lotus" target="_blank" rel="noreferrer noopener">Lotus</a>
                </li>
                <li>New equipment, <img src="https://maplestory.io/api/GMS/214/item/4310156/icon" alt=""/> Absolab set</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Maple Talk System Revamp</li>
                <li>
                    Cube Rate changes drop rate increased for Master Craftsman’s and Meister’s Cubes
                    <ul>
                        <li>Rank-up rates also increased for all craftable and purchasable Cubes</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2433103/icon" alt=""/> Medals of Honor dropped by bosses have been updated</li>
                <li><strong>Zeros can now use Damage Skins!</strong></li>
                <li>Maple Rewards earning limits increased by 50% for both Daily and Monthly limits</li>
                <li>Indicator for unused SP will no longer appear on 4th Job even if there is SP left</li>
                <li>Some images and effects have been compressed for lower client and memory size</li>
                <li>New Loading Process added</li>
                <li>Party Quest EXP increased</li>
                <li>More Channels added to Dimension Invasion and Evolution System</li>
            </ul>
        </LazyLoad>
    )
};

function BlackMage() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/0-BdmjHFJYs" title="Black Mage"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/40437/v-201-black-mage-labyrinth-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/42616/updated-february-15-v-202-black-mage-new-beginnings-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New areas, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7a/MapIcon_moonBridge.png/revision/latest?cb=20191204082819" alt="MapIcon moonBridge" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AMoonbridge" target="_blank" rel="noreferrer noopener">Moonbridge</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7e/MapIcon_TheLabyrinthOfSuffering.png/revision/latest?cb=20180831061919" alt="MapIcon TheLabyrinthOfSuffering" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Labyrinth_of_Suffering" target="_blank" rel="noreferrer noopener">Labyrinth of Suffering</a>, and <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/MapIcon_Limen.png/revision/latest?cb=20191204082817" alt="MapIcon Limen" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ALimina" target="_blank" rel="noreferrer noopener">Limina</a>
                </li>
                <li>
                    New boss: <a href="https://maplestory.fandom.com/wiki/Giant_Monster_Gloom" target="_blank" rel="noreferrer noopener">Gloom</a>,
                    <a href="https://maplestory.fandom.com/wiki/Hilla/Monster_(Reborn)" target="_blank" rel="noreferrer noopener">Verus Hilla</a>,
                    <a href="https://maplestory.fandom.com/wiki/Guard_Captain_Darknell" target="_blank" rel="noreferrer noopener">Guard Captain Darknell</a>,
                    <a href="https://maplestory.fandom.com/wiki/Black_Mage" target="_blank" rel="noreferrer noopener">Black Mage</a>
                </li>
                <li>
                    <strong>New equipment, </strong><img src="https://maplestory.io/api/GMS/214/item/2439614/icon" alt=""/><strong> Genesis weapons and </strong><img src="https://maplestory.io/api/GMS/214/item/1182285/icon" alt=""/>
                    <a href="https://maplestory.wiki/GMS/214/item/1182285" target="_blank" rel="noreferrer noopener"><strong>Genesis Badge</strong></a>
                </li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bf/Skill_Sonic_Blow.png/revision/latest?cb=20181115065338" alt="Skill Sonic Blow" width="32" height="32" />
                    <img
                        src="https://vignette.wikia.nocookie.net/maplestory/images/c/cf/Skill_Battoujutsu_Ultimate_Will_-_God_of_Blades.png/revision/latest?cb=20181115065212"
                        alt="Skill Battoujutsu Ultimate Will - God of Blades"
                        width="32"
                        height="32"
                    />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/61/Skill_Instinctual_Combo.png/revision/latest?cb=20181115065213" alt="Skill Instinctual Combo" width="32" height="32" /> New 5th job skills for all classes
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Level cap increased to 275</strong></li>
                <li><strong>Upon 5th job advancements, all characters will receive the 3 Skill Nodes specific to job</strong></li>
                <li><strong>Esfera Daily Quests added</strong></li>
                <li>Messenger of Darkness appear every 5th, 10th and 15th Elite monster defeated on a map</li>
                <li><strong>Hyper skill points gained at Lv.140, 150, 160, 165, 180, 190</strong></li>
                <li><strong>Drop rate of Nodestones in Vanishing Journey reduced by 20%</strong></li>
                <li><strong>All three inner abilities now unlock when the quest is completed at Lv.50</strong></li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2431174/icon" alt=""/> Monsters below Lv.50 no longer drop Medor of Honor</li>
                <li><strong>Total amount of EXP required to level from 200 to 220 reduced by 25%</strong></li>
                <li>New Maple Guides added for multiple areas</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2435719/icon" alt=""/> <strong>Weekly quest added for Vanishing Journey where completing Vanishing Journey dailies twice during a week will reward the player with 3 Nodestones</strong></li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2030000/icon" alt=""/> Characters are given return scrolls upon making their 1st job advancement</li>
                <li>Skill UI enlarged</li>
                <li>Damage Skin UI updated</li>
                <li><strong>Exclusive notifier for daily and weekly quests added</strong></li>
                <li>New 1280 x 720 and 1920 x 1080 resolutions added</li>
                <li>Boss Map Death EXP penalty removed from Ranmaru and Princess No</li>
                <li>New Guild Skill <img src="https://orangemushroom.files.wordpress.com/2019/12/mileage-encounter.png?w=600" alt="Mileage Encounter" /> Point Accrual, periodic gain of Reward Points for being online</li>
                <li>Commerci Dungeon + Merchant Union Voyages bosses now drop equipment in Reboot world based on your class</li>
                <li>Chu Chu Island Monster Park added</li>
            </ul>
        </LazyLoad>
    )
};

function BugcatCapoo(){
    return(
        <LazyLoad height={200} offset={100}>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/68219/v-227-maplestory-x-bugcat-capoo-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Job Balances
                    <ul>
                        <li>Many classes receive value changes to skills and quality of life changes</li>
                        <li>5th Job Skill Blink when pressed with Down Arrow Key allows you to float briefly in the air</li>
                        <li>Pet Auto Buff can now be registered with skills with cooldowns</li>
                        <li>
                            <img src="https://grandislibrary.com/class-icons/explorers/bowmaster/bow-acceleration.png" /><img src="https://grandislibrary.com/class-icons/heroes/phantom/cane-acceleration.png" /> Several classes gain additional +1 attack
                            speed and some Booster-type skills have been changed to passives
                        </li>
                        <li>
                            <img src="https://grandislibrary.com/class-icons/cygnus-knights/cygnus-knights-will.png" /><img src="https://grandislibrary.com/class-icons/resistance/the-demons-will.png" /> New Hero's Will for classes that did not have one
                            previously
                        </li>
                        <li>
                            <img src="https://grandislibrary.com/class-icons/heroes/phantom/bad-luck-ward.png" /> Phantom's Bad Luck Ward Hyper Passives changed to <img src="https://grandislibrary.com/class-icons/heroes/phantom/impeccable-memory-iv.png" /> Impeccable Memory IV Hyper Passives
                        </li>
                        <li><img src="https://grandislibrary.com/class-icons/heroes/luminous/the-crossroads-of-destiny.png" /> The Crossroads of Destiny new skill added to Luminous to swap between Light and Dark Affinity</li>
                        <li>
                            <img src="https://grandislibrary.com/class-icons/explorers/dark-knight/accept-final-pact.png" /><img src="https://grandislibrary.com/class-icons/heroes/aran/adrenaline-rush-activate.png" /> New activation skills for Dark
                            Knight and Aran
                        </li>
                    </ul>
                </li>
                <li>
                    Tower of Oz Improvements
                    <ul>
                        <li>Certain floors have been updated or given explanations</li>
                        <li><strong>New Ring Activation Skill that will activate the effect of the currently equipped Oz rings</strong></li>
                    </ul>
                </li>
                <li>
                    Monster Life Improvements
                    <ul>
                        <li>The probability of special category monsters appearing upon combination has been modified according to the grade</li>
                    </ul>
                </li>
                <li>
                    Auction House Improvements
                    <ul>
                        <li>Added search options for additional options, upgrade count, and Scissors use count</li>
                    </ul>
                </li>
                <li>
                    Boss Improvements
                    <ul>
                        <li>Exit portals have been replaced with NPCs that must be clicked to exit</li>
                        <li>Practice mode limit has been increased from 5 to 20 times per day</li>
                        <li><strong>Reward Points collection has all been combined into one and can receive all at once</strong></li>
                    </ul>
                </li>
                <li><strong>Inner Ability rank will no longer have a chance to decrease on a reroll</strong></li>
                <li>Fairy Bros' Daily Gift rewards have been updated and can be claimed on any character upon defeating 300 monsters</li>
                <li><strong>Pathfinder Open Advancement is now available</strong></li>
            </ul>
        </LazyLoad>
    )
}

function Cardcaptor() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2018/3847/ftg834ss1.jpg" alt="Cardcaptor"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/32919/updated-august-28-v-198-maplestory-x-cardcaptor-sakura-clear-card-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul><li><strong>Mr. Lee Airlines permanently closed</strong></li></ul>
        </LazyLoad>
    )
};

function Champions() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/9zq9NY2V9xQ" title="Champions"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20121027005125/http://maplestory.nexon.net/news/updates/update-notes/00FHC/v-118-champions-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Grand Battle (PVP revamp)</li>
                <li><strong>Bonus Potentials introduced</strong></li>
                <li>Orbis Tower Revamp (Floors 9 through 15 destroyed)</li>
            </ul>
        </LazyLoad>
    )
};

function Chaos() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/R7cqRdVsDI4" title="Chaos"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20110902035958/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00CMS&pageIndex=1"/></p>
                <p><TabLink url="https://web.archive.org/web/20110925142217/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00CXB&pageIndex=1"/></p>
                <p><TabLink url="https://web.archive.org/web/20111006150630/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00CfP&pageIndex=1"/></p>
                <p><TabLink url="https://spadow.wordpress.com/2010/12/09/maplestory-chaos-coming-soon/"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><a href="https://strategywiki.org/wiki/MapleStory/Professions" target="_blank" rel="noreferrer noopener">Profession system introduced</a></li>
                <li><a href="https://maplestory.fandom.com/wiki/Traits" target="_blank" rel="noreferrer noopener">Traits system introduced</a></li>
                <li>New equipment slot, Pocket Item</li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4f/MapIcon_destructionTown.png/revision/latest?cb=20101224163328" alt="MapIcon destructionTown" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener">Gate to the Future</a>
                </li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Signus.png/revision/latest?cb=20141218024114" alt="MapIcon Signus" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Cygnus/Monster" target="_blank" rel="noreferrer noopener">Empress Cygnus</a>
                </li>
                <li><img src="https://maplestory.io/api/GMS/210.1.1/item/2430144/icon" alt=""/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2430144" target="_blank" rel="noreferrer noopener">Secret Mystery Books</a> - receive a random mastery book</li>
                <li>
                    <a href="https://maplestory.fandom.com/wiki/Category:Battle_Square" target="_blank" rel="noreferrer noopener">Battle Mode</a> (PVP)
                    <ul>
                        <li>Included Free-For-All, Team Match and Capture the Flag</li>
                    </ul>
                </li>
                <li>New event, Premium Dungeons (Golden Temple), monsters drop rare loot</li>
                <li>
                    Silent Crusade storyline introduced
                    <ul>
                        <li>Different from the one we have today</li>
                    </ul>
                </li>
                <li><strong>Crusader Codex introduced, Familiars not yet introduced</strong></li>
            </ul>
        </LazyLoad>
    )
};

function CygnusAwakeningNW() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/S31e6Ccsis0" title="Cygnus Awakening Night Walker"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2719/v-156-cygnus-awakening-night-walker-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Class revamp, Night Walker</li>
                <li>
                    New Story Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0b/MapIcon_spinOff1.png/revision/latest?cb=20160809185044" alt="MapIcon spinOff1" width="38" height="38" />
                    <a href="https://www.youtube.com/watch?v=nExzATZoQHI" target="_blank" rel="noreferrer noopener">FriendStory</a>
                </li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/41/MapIcon_flowervioleta.png/revision/latest?cb=20141030034330" alt="MapIcon flowervioleta" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AMushroom_Castle" target="_blank" rel="noreferrer noopener">Mushroom Castle</a> (revamp)
                </li>
                <li>New Dungeon, <a href="https://maplestory.fandom.com/wiki/Category:Mr._Lee_Airlines" target="_blank" rel="noreferrer noopener">Mr. Lee Airlines</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Cash Item Delete function added</li>
                <li>Cash Shop Inventory expanded from 799 to 999 slots</li>
                <li>Character Deletion function, cooldown added</li>
                <li>Buff duration counter added to active buffs</li>
            </ul>
        </LazyLoad>
    )
};

function CyngusKnightsAwakening() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/6lcjb23wF38" title="Cygnus Knights Awakening"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20131031020907/http://maplestory.nexon.net/news/updates/update-notes/00H6x/v-141-cygnus-awakening-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Class revamps, Thunder Breaker, Wind Archer, Dawn Warrior</li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3e/MapIcon_Crimsonwood.png/revision/latest?cb=20191204083038" alt="MapIcon Crimsonwood" width="38" height="38" />
                    <a href="https://strategywiki.org/wiki/MapleStory/Crimsonheart_Castle" target="_blank" rel="noreferrer noopener">Crimsonheart Castle</a>
                    <ul>
                        <li>New Party Quest, Crimsonwood Altar PQ</li>
                    </ul>
                </li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/MapIcon_fairyAcademy.png/revision/latest?cb=20130628060623" alt="MapIcon fairyAcademy" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Ellinel" target="_blank" rel="noreferrer noopener">Ellinel Fairy Academy</a>
                </li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/MapIcon_glacierExplorer.png/revision/latest?cb=20130619034108" alt="MapIcon glacierExplorer" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ARiena_Strait" target="_blank" rel="noreferrer noopener">Riena Strait</a>
                </li>
                <li>Maple Chat revamped (Current iteration)</li>
                <li>Monster Park Revamp, new areas added</li>
                <li>
                    Party Quest Revamp, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e6/MapIcon_Event.png/revision/latest?cb=20100619155022" alt="MapIcon Event" width="38" height="38" />
                    <a href="https://maplestory.wiki/GMS/214/map/910002000" target="_blank" rel="noreferrer noopener">Spiegelmann's Guest House</a> added
                </li>
                <li>
                    New equipment, <img src="https://maplestory.io/api/GMS/214/item/1022175/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1022175" target="_blank" rel="noreferrer noopener">Kenta's New Goggles</a>, <img src="https://maplestory.io/api/GMS/214/item/1032186/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1032186" target="_blank" rel="noreferrer noopener">Bright Altaire Earrings</a>, <img src="https://maplestory.io/api/GMS/214/item/1152127/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1152127" target="_blank" rel="noreferrer noopener">Ice Knight's Shoulder Accessory</a>, <img src="https://maplestory.io/api/GMS/214/item/1002571/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1002571" target="_blank" rel="noreferrer noopener">Pirate Hats</a>, <img src="https://maplestory.io/api/GMS/214/item/1072819/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1072819" target="_blank" rel="noreferrer noopener">Ice Knight's Seeker Chain Crampons</a>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Cygnus Knights level cap increased to 250</li>
                <li>Sengoku Fafnir weapons added</li>
                <li>
                    EXP Penalty removed for hunting monsters lower level than you
                    <ul>
                        <li>No Party EXP rewarded with a 41+ level difference between its lowest and highest level members</li>
                    </ul>
                </li>
                <li>1366 x 768 resolution added</li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/54/Skill_Link_Manager.png/revision/latest?cb=20130517132540" alt="Skill Link Manager" width="32" height="32" /> <a href="https://maplestory.fandom.com/wiki/Link_Manager" target="_blank" rel="noreferrer noopener">Link Manager</a> added
                </li>
            </ul>
        </LazyLoad>
    )
};

function DarknessLooms() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2018/4315/1810041100vyy5.jpg" alt="Darkness Looms"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/36727/updated-november-7-v-199-darkness-looms-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li><strong>Fairy Bros Daily Gift System introduced</strong></li></ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Will Normal Mode difficulty introduced</li>
                <li>Captain Vaga questline permanently closed</li>
                <li><strong>Singapore permanently closed</strong></li>
                <li>Maple Guide info updated</li>
                <li>Temple of Time, Gate to the Future and Crimsonheart Castle quest requirements changed</li>
                <li>Monster Collection for Savage Terminal, Verdel, Sanctuary, and Fox Valley added</li>
                <li>V-Sync setting added to Graphics option</li>
            </ul>
        </LazyLoad>
    )
};

function Dawnveil() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/pbG3apVEy3w" title="Dawnveil Demons of Tynerum"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20131110000720/http://maplestory.nexon.net/news/updates/update-notes/00HDW/v-142-dawnveil-demons-of-tynerum-update-notes"/></p>
                <p><TabLink url="https://web.archive.org/web/20140227231922/http://maplestory.nexon.net/news/updates/update-notes/00HMP/v-143-red-first-impact-update-notes-part-2"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/3e/MapIcon_Crimsonwood.png/revision/latest?cb=20191204083038" alt="MapIcon Crimsonwood" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ATynerum" target="_blank" rel="noreferrer noopener">Tynerum</a>
                </li>
                <li>New boss, <a href="https://maplestory.fandom.com/wiki/Gollux" target="_blank" rel="noreferrer noopener">Gollux</a> (Original iteration)</li>
                <li>New equipment, <img src="https://maplestory.io/api/GMS/214/item/1032220/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1113075/icon" alt=""/> Gollux accessories</li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f6/Use_Occult_Cube.png/revision/latest?cb=20160830185430" alt="Use Occult Cube" width="29" height="29" />
                    <a href="https://maplestory.fandom.com/wiki/Occult_Cube" target="_blank" rel="noreferrer noopener">Occult Cubes</a> introduced
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul><li>Von Leon, Zakum, Arkarium and Magnus Easy Mode difficult introduced</li></ul>
        </LazyLoad>
    )
};

function Detectives() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/40K_VKJ8c6Y" title="Detectives"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/10726/v-173-detectives-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New Theme Dungeon: <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Stellar_Detectives" target="_blank">Stellar Detectives</a></li></ul>
        </LazyLoad>
    )
};

function Evangelion() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2017/3079/1ndrtiev2.jpg" alt="Evangelion"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/28382/updated-v-193-maplestory-x-evangelion-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Achievement update, ‘Refresh” function added, new achievements added</li>
                <li>Professions update, Fuse Equipment and Extraction option available to all professions</li>
                <li>New Enhancement skills added after reaching ‘Craftsman” rank or higher for Smithing and Accessory crafting</li>
                <li>Chat updates, new option for ‘External Chat’, new features for adding tabs and adjusting chat filter</li>
                <li><strong>Free Market removal</strong></li>
                <li>Auction House updates, new ‘Market Price’ and “Wish List’ tabs, 5% transaction fee</li>
                <li>Showa Town Revamp - Level range increased to Lv. 160, Ninja Castle starting level increased to Lv.170, NPC Perry added to transport you between areas</li>
                <li>Groups in Buddy List can be edited or deleted by right-clicking on the group name</li>
                <li>Guild Invitation function improved by allowing character invites from other channels</li>
                <li>Blacklist limit increased to 100 characters, conversations from blacklisted characters are now blocked, blacklisted guild invitations are automatically rejected.</li>
                <li><strong>/find command removed</strong></li>
                <li>Teleport Rocks can only be used by players that grant permission to use them</li>
                <li>MapleStory icon updated</li>
                <li>Kaiser can now climb ladders and use double jump and use <img src="https://orangemushroom.files.wordpress.com/2012/07/sword-strike.png?w=600" alt="Sword Strike" /> Blade Burst in the air</li>
            </ul>
        </LazyLoad>
    )
};

function FabledMelody() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/xDZijf0Ey7U" title="Fabled Melody"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/52972/updated-october-8-v-208-fabled-melody-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Cash Shop Revamp</strong></li>
                <li>Stellar Detectives starting level increased to Lv.90</li>
                <li>Monad starting level increased to Lv.110</li>
                <li>Hieizan &amp; Momijigaoka removed from Dimensional Mirror and added to Maple Guide instead</li>
                <li>New content added to Maple Guide</li>
                <li>New tutorial quests added to replace Tot’s Know-How</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2720000/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/2720000" target="_blank" rel="noreferrer noopener">Silver Scissors of Karma</a> can be purchased for Mesos</li>
                <li>Character deletion will take 24hrs regardless of level</li>
                <li><strong>5 sec cooldown added to Auction House search</strong></li>
                <li>
                    Alien Visitor PQ improvements
                    <ul>
                        <li>Daily entry limit increased to 5</li>
                        <li>Increased EXP</li>
                        <li>Increased chance for Hidden Boss</li>
                        <li>Increased monster spawn rate</li>
                    </ul>
                </li>
                <li>Astaroth quests have been removed</li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/2023128/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2023125/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2023127/icon" alt=""/> Max HP and MP bonus from Extreme
                    Gold Potion moved to the Extreme Red &amp; Blue Potions
                </li>
            </ul>
        </LazyLoad>
    )
};

function Firepower() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/tXh4LZNypHI" title="FIREPOWER"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/3618/v-163-firepower-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New area, <a href="https://maplestory.fandom.com/wiki/Category%3ABlackgate_City" target="_blank" rel="noreferrer noopener">Blackgate City</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/MapIcon_Haven.png/revision/latest?cb=20150118085415" alt="MapIcon Haven" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AScrapyard" target="_blank" rel="noreferrer noopener">Scrapyard</a>
                </li>
                <li>New dungeon, <a href="https://www.youtube.com/watch?v=4CoS9Nkt-zc" target="_blank" rel="noreferrer noopener">FriendStory: Rock &amp; Roll</a></li>
                <li><strong>Maple Rewards UI added</strong></li>
                <li>New event, first Burning Character event!</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Damage Skin storage system introduced</li>
                <li><a href="https://maplestory.fandom.com/wiki/Matilda" target="_blank" rel="noreferrer noopener">Matilida</a> - Convinient Item Store NPC added</li>
                <li>Change Location button added to Character Selection screen</li>
                <li>15-minute restriction added for connecting from different IP</li>
                <li>New Blade Effects and Mini Blade Effect damage effect added</li>
                <li>Animation skip functionality added to cutscenes</li>
                <li>Up to 5 revivals are now allowed per person for Cygnus boss</li>
            </ul>
        </LazyLoad>
    )
};

function Glory() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/NCvb1fBPrfE" title="Glory"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/53901/updated-december-3-v-209-glory-strengthened-alliances-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/54621/updated-january-24-v-210-glory-savior-of-hope-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Hoyoung" target="_blank" rel="noreferrer noopener">Hoyoung</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/00/MapIcon_CheongUn.png/revision/latest?cb=20191105050715" alt="MapIcon CheongUn" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Cheong-woon_Valley" target="_blank" rel="noreferrer noopener">Cheong-woon Valley</a>
                </li>
                <li>Class revamp, Jett</li>
                <li>
                    Masteria &amp; New Leaf City Revamp
                    <ul>
                        <li>New Phantom Forest and storylines</li>
                    </ul>
                </li>
                <li>
                    New equipment, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/18/Eqp_Numenal%27s_Willpower.png/revision/latest?cb=20200102153019" alt="Eqp Numenal's Willpower" width="32" height="32" />
                    <a href="https://maplestory.wiki/GMS/214/item/1032314" target="_blank" rel="noreferrer noopener">Numenal's Willpower</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Eqp_Glona%27s_Heart.png/revision/latest?cb=20200116033305" alt="Eqp Glona's Heart" width="30" height="30" />
                    <a href="https://maplestory.wiki/GMS/214/item/1113305" target="_blank" rel="noreferrer noopener">Glona's Heart</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b5/Eqp_Legacy_of_Light.png/revision/latest?cb=20200103144348" alt="Eqp Legacy of Light" width="32" height="32" />
                    <a href="https://maplestory.wiki/GMS/214/item/1122438" target="_blank" rel="noreferrer noopener">Legacy of Light</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d7/Eqp_Legacy_of_Darkness.png/revision/latest?cb=20200103144509" alt="Eqp Legacy of Darkness" width="34" height="34" />
                    <a href="https://maplestory.wiki/GMS/214/item/1122439" target="_blank" rel="noreferrer noopener">Legacy of Darkness</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bb/Eqp_Delgrund%27s_Honor.png/revision/latest?cb=20200116035209" alt="Eqp Delgrund's Honor" width="31" height="31" />
                    <a href="https://maplestory.wiki/GMS/214/item/1132313" target="_blank" rel="noreferrer noopener">Delgrund's Honor</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Eqp_Lireni%27s_Wish.png/revision/latest?cb=20200116035346" alt="Eqp Lireni's Wish" width="33" height="31" />
                    <a href="https://maplestory.wiki/GMS/214/item/1202281" target="_blank" rel="noreferrer noopener">Lireni's Wish</a>
                </li>
                <li>
                    New 5th Job skills (<img src="/class-icons/5th-job/grandis-goddess-blessing.png" alt="Skill Grandis Goddess's Blessing" width="32" height="32" />
                    <img src="/class-icons/5th-job/maple-world-goddess-blessing.png" alt="Skill Maple World Goddess's Blessing" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ea/Skill_Transcendent_Cygnus%27s_Blessing.png/revision/latest?cb=20191122065038" alt="Skill Transcendent Cygnus's Blessing" width="32" height="32" /> enhanced Maple
                    Warrior)
                </li>
                <li>Arcane River Express Pass added - use Maple Points to automatically complete Arcane River dailies</li>
                <li>
                    <img src="/class-icons/link-skills/invincible-belief.png" alt="Skill Invincible Belief" width="32" height="32" />
                    <img src="/class-icons/link-skills/empirical-knowledge.png" alt="Skill Empirical Knowledge" width="32" height="32" />
                    <img src="/class-icons/link-skills/adventurers-curiousity.png" alt="Skill Adventurer's Curiosity" width="32" height="32" />
                    <img src="/class-icons/link-skills/thiefs-cunning.png" alt="Skill Thief's Cunning" width="32" height="32" /><strong> Explorer Link Skills added</strong>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>All skills can now be maxed for all classes</strong></li>
                <li>Blackgate Theme Dungeon removed</li>
                <li>Alien Base Theme Dungeon removed</li>
                <li>Alishan has been removed</li>
                <li>Twisted Aquarium has been removed</li>
                <li>Comparing damage with multiple rings and pendants can be done by clicking the mouse wheel</li>
                <li>Number of available upgrades that can be restored will be displayed in equipment tooltip</li>
                <li>Hotkeys can be removed with right-click</li>
                <li><strong>PIC is required to open V Matrix UI</strong></li>
                <li>Safeguard box will remain checked even after your enhancement ends</li>
                <li>You can now move from Dream Defender entry map using return scrolls</li>
                <li>Lures in Torrent Zone replaced with Runes</li>
                <li>EXP requirement for Lv.220 to 234 reduced by 25%</li>
                <li>Additional Daily Quests for Chu Chu Island, Lachelein and Arcana added</li>
                <li>Daily transfer count limit for Link Skills increased from 1 to 2 per day</li>
                <li>Skill Level requirements for Mastery Book usage removed</li>
                <li>Loading screen removed</li>
            </ul>
        </LazyLoad>
    )
};

function GooIsland() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="https://nxcache.nexon.net/cms/2021/q3/1667/1100x225-maplestory-goo-island-getaway-mmorpg-pn.jpg" alt="Goo Island Getaway"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/68486/v-225-goo-island-getaway-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/224/mob/8144008/icon" alt="Ganapati"/> <img src="https://maplestory.io/api/GMS/225/mob/8144008/icon" alt="Stone Goblin Guardian" />Ganapati has been replaced with Stone Goblin Guardian</li>
            </ul>
        </LazyLoad>
    )
};

function GrandAthenaeum() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/lF5z65PX9Oo" title="Grand Athenaeum"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2696/v-148-grand-athenaeum-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New Story Theme Dungeon, <img class="" src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/MapIcon_Library.png/revision/latest?cb=20140614011213" alt="MapIcon Library" width="38" height="38" />
                    <a href="https://strategywiki.org/wiki/MapleStory/Grand_Athenaeum" target="_blank" rel="noreferrer noopener">Grand Athenaeum</a>
                </li>
                <li>New content, <a href="https://www.youtube.com/watch?v=DL-0-XgM2x4" target="_blank" rel="noreferrer noopener">Boss Arena</a></li>
                <li>Cross World Party Quests introduced</li>
                <li><strong>Damage Skins introduced</strong></li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/77/Skill_Blade_Ascension.png/revision/latest?cb=20140509212744" alt="Skill Blade Ascension" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/33/Skill_Blade_Fury.png/revision/latest?cb=20140414050921" alt="Skill Blade Fury" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/de/Skill_Phantom_Blow.png/revision/latest?cb=20140414050926" alt="Skill Phantom Blow" width="32" height="32" /> Cannoneer &amp; Dual Blade Revamp
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>UI reverted to KMS Version</li>
                <li>Equipment and storage inventory redesigned</li>
                <li>Character stats reorganized</li>
            </ul>
        </LazyLoad>
    )
};

function HeroesOfMaple() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/iZRf6fiiZRE" title="Heroes of Maple"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/11751/updated-v-174-heroes-of-maple-reborn-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/14999/updated-v-175-heroes-of-maple-blaster-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Blaster" target="_blank" rel="noreferrer noopener">Blaster</a></li>
                <li>Class revamps, Evan and Aran (Current iteration)</li>
                <li>New blockbuster, <a href="https://maplestory.fandom.com/wiki/Blockbuster/Heroes_of_Maple" target="_blank" rel="noreferrer noopener">Heroes of Maple</a></li>
                <li>New boss, <a href="https://maplestory.fandom.com/wiki/Damien" target="_blank" rel="noreferrer noopener">Damien</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5c/MapIcon_fallenWorldTree.png/revision/latest?cb=20191204082811" alt="MapIcon fallenWorldTree" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ADark_World_Tree" target="_blank" rel="noreferrer noopener">Dark World Tree</a>
                </li>
                <li>Monster Park Reborn (revamp)</li>
                <li><a href="https://maplestory.fandom.com/wiki/Monster_Collection" target="_blank" rel="noreferrer noopener">Monster Collection</a> System introduced</li>
                <li>Flame Wolf’s Portals added</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Dawnveil continent removed</li>
                <li>
                    "Some skills will now state their damage increase as "%p or % points". This is being introduced in order to distinguish between skills that increase damage additively compared to multiplicatively. The term "%p or % points" is used
                    to denote addition of the value increases in order to calculate the damage increase. Whereas "%" damage increase is used when multiplying the values to calculate the damage increase"
                    <ul>
                        <li>
                            For example:
                            <ul>
                                <li>If a skill deals "500% damage" and Skill A increases that skills damage by "50% points", then the resulting damage calculation will be "550% damage"</li>
                                <li>If a skill deals "500% damage" and Skill B increases that skills damage by "50%", then the resulting damage calculation will be "750% damage"</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Summon damage is now character-based, Soul Weapons are unaffected</li>
                <li>Several active buffs are now passives</li>
            </ul>
        </LazyLoad>
    )
};

function HieizanTemple() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/2290/150721_1100x225_mark_of_honor.jpg?width=500&height=102.27272727272727" alt="Hieizan Temple"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2716/v-152--mark-of-honor-hieizan-temple-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New content, <a href="https://www.youtube.com/watch?v=aYzLXsCQG64" target="_blank" rel="noreferrer noopener">Hieizan Temple</a></li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_JP_Nohime.png/revision/latest?cb=20150225220019" alt="MapIcon JP Nohime" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Princess_No" target="_blank" rel="noreferrer noopener">Princess No</a>
                </li>
                <li>
                    New equipment, <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Eqp_Princess_No%27s_Accursed_Arrow.png/revision/latest?cb=20170904025120" alt="Eqp Princess No's Accursed Arrow" width="37" height="36" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cd/Eqp_Princess_No%27s_Feather.png/revision/latest?cb=20170902232433" alt="Eqp Princess No's Feather" width="36" height="36" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/Eqp_Princess_No_Path.png/revision/latest?cb=20180701141900" alt="Eqp Princess No Path" width="35" height="35" />
                    <a href="https://maplestory.fandom.com/wiki/Captivating_Fragment" target="_blank" rel="noreferrer noopener">P. No Secondaries</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/ba/MapIcon_critias.png/revision/latest?cb=20140817020313" alt="MapIcon critias" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Kritias" target="_blank" rel="noreferrer noopener">Kritias</a>
                </li>
                <li>
                    New equipment, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/20/Eqp_Inverse_Jewel_Earring.png/revision/latest?cb=20181021195822" alt="Eqp Inverse Jewel Earring" width="31" height="32" />
                    <a href="https://maplestory.wiki/GMS/214/item/1032217" target="_blank" rel="noreferrer noopener">Inverse Jewel Earring</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7c/Eqp_Inverse_Metal_Shoulder.png/revision/latest?cb=20140922033416" alt="Eqp Inverse Metal Shoulder" width="33" height="32" />
                    <a href="https://maplestory.wiki/GMS/214/item/1152156" target="_blank" rel="noreferrer noopener">Inverse Metal Shoulder</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/93/Eqp_Inverse_Codex.png/revision/latest?cb=20181021195822" alt="Eqp Inverse Codex" width="31" height="28" />
                    <a href="https://maplestory.wiki/GMS/214/item/1162018" target="_blank" rel="noreferrer noopener">Inverse Codex</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/Eqp_Tyrant_Hyades_Gloves.png/revision/latest?cb=20150209052456" alt="Eqp Tyrant Hyades Gloves" width="32" height="30" /> Tyrant Gloves, <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cf/Use_Empress_Reset_Ticket.png/revision/latest?cb=20171210191631" alt="Use Empress Reset Ticket" width="33" height="26" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/21/Use_Hard_Magnus_Reset_Ticket.png/revision/latest?cb=20171210191646" alt="Use Hard Magnus Reset Ticket" width="33" height="26" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f2/Use_Chaos_Vellum_Reset_Ticket.png/revision/latest?cb=20171210191906" alt="Use Chaos Vellum Reset Ticket" width="33" height="26" /> Boss Reset Tickets
                </li>
                <li>
                    Jett revamp ( <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0d/Skill_Starline_One.png/revision/latest?cb=20140816044638" alt="Skill Starline One" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/68/Skill_Starline_Two.png/revision/latest?cb=20140817001536" alt="Skill Starline Two" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Starline_Three.png/revision/latest?cb=20140828054558" alt="Skill Starline Three" width="32" height="32" />Starline skill update)
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Mori Ranmaru now drops Japanese Myth equipment</li>
                <li>Javaert, the Commerci Denaro vendor, will now restock his items daily</li>
                <li>Gender restrictions have been removed for trading cash cover equipment</li>
            </ul>
        </LazyLoad>
    )
};

function HotelMaple() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/h640p96ZhBY" title="Hotel Maple"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Android Shop now sells additional items and can recharge Throwing Stars and Arrows</li>
                <li>Character Clean-up - Characters that have not logged on since December 15, 2016 will be deactivated and be deleted on June 9, 2021</li>
            </ul>
        </LazyLoad>
    )
};

function HyperEvolution() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/bPw4k_3S1QA" title="Hyper Evolution"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20130507041415/http://maplestory.nexon.net/news/updates/update-notes/00FuU/v-132-hyper-evolution-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New Hyper Skills (Explorers, Resistance, Dual Blade, Cannoneer, Demon Slayer and Mihile)</li>
                <li>New equipment slot, <a href="https://maplestory.fandom.com/wiki/Category:Secondary_Weapons" target="_blank" rel="noreferrer noopener">Secondary Equipment</a> (Secondary Weapon)</li>
                <li>
                    New content, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/MapIcon_EvolvingSystem.png/revision/latest?cb=20120916034519" alt="MapIcon EvolvingSystem" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Category%3AEvolution_System" target="_blank" rel="noreferrer noopener">Evolution System</a> (Original iteration)
                </li>
                <li>
                    New content, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/MapIcon_Pantheon.png/revision/latest?cb=20120720131338" alt="MapIcon Pantheon" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Category:Dimension_Invasion" target="_blank" rel="noreferrer noopener">Dimension Invasion</a>
                </li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/37/MapIcon_GoldBeach.png/revision/latest?cb=20121109150254" alt="MapIcon GoldBeach" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Category%3AGold_Beach" target="_blank" rel="noreferrer noopener">Gold Beach</a>
                </li>
                <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=493605944" target="_blank" rel="noreferrer noopener">Monster Park Extreme</a> introduced</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1032167/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1142546/icon" alt=""/> Kerning Square Revamp</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Bonus Potential Revamp, equipment can have up to 3 bonus potential lines</li>
                <li>Minimum party size for Normal Zakum, Normal Hilla and Von Leon changed to 1 player</li>
                <li>Kaiser, Angelic Buster, and Demon Slayer wings no longer visible with capes from Cash Shop equipped</li>
            </ul>
        </LazyLoad>
    )
};

function IsekaiQuartet() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2020/q1/1264/new-iqssb-1-maplestory-march-11-cash-shop-update.png" alt="Isekai Quartet"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/55630/updated-march-19-v212-maplestory-x-isekai-quartet-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    <strong>New content, </strong><img src="https://maplestory.io/api/GMS/214/item/4310286/icon" alt=""/> <a href="https://www.youtube.com/watch?v=WcyrPtS_ulU" target="_blank" rel="noreferrer noopener"><strong>Maple Tour</strong></a>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>
                    Mu Lung Dojo Expansion + Revamp
                    <ul>
                        <li>Expanded from 63 to 80 floors</li>
                        <li>Point distribution adjusted</li>
                    </ul>
                </li>
                <li>Ghost Park Ranked Mode introduced</li>
                <li>
                    Malaysia maps revamped
                    <ul>
                        <li><strong>Bye Bye Station removed</strong></li>
                        <li>Monsters Max HP and EXP adjusted to match monsters of same level</li>
                        <li>Quest reward EXP and Mesos increased</li>
                        <li>Scarlion and Targa bosses removed</li>
                    </ul>
                </li>
                <li>
                    Gate to the Future Revamp, quest adjustments
                    <ul>
                        <li>Minimum level requirement for Normal Cygnus reduced from Lv. 170 to 165</li>
                    </ul>
                </li>
                <li>New chat commands have been added, some old ones also removed</li>
            </ul>
            <h3>New Cash Items</h3>
            <ul>
                <li><img src="https://maplestory.io/api/GMS/214/item/2433392/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/2433392" target="_blank" rel="noreferrer noopener">Hair Choice Coupon</a> - Replaces REG and VIP coupons</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2433393/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/2433393" target="_blank" rel="noreferrer noopener">Face Choice Coupon</a> - Replaces REG and VIP coupons</li>
            </ul>
        </LazyLoad>
    )
};

function KerningCitySuperstars() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/10158/170217kcs1100x22531inpst.jpg" alt="Kerning City Superstars"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/20967/v-183-kerning-city-superstars-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New Theme Dungeon, <img class="" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/MapIcon_KerningTower.png/revision/latest?cb=20161101184542" alt="MapIcon KerningTower" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AKerning_Tower" target="_blank" rel="noreferrer noopener">Kerning Tower</a> (Kerning Square Revamp)
                </li>
                <li>
                    <strong><a href="http://maplestory.nexon.net/news/21036/updated-introducing-the-maple-value-points-mvp-service" target="_blank" rel="noreferrer noopener">MVP System</a> introduced</strong>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Monsters drop potions proportional to monster’s level</li>
                <li>Pets follow character more quickly and pick up items</li>
                <li>Potential Stamps, Bonus Potential Stamps, and Golden Hammers now function similar to cubes, where you double-click the item, and then click on the piece of equipment you want to modify</li>
                <li>If you receive a completion stamp for content using the Maple Guide, you can move there permanently regardless of level</li>
                <li>Maximum down jump height increased for all jobs, except Mechanics</li>
                <li><strong>Spell Traces added to shop in Silent Crusade UI</strong></li>
                <li>Buffs and debuff icons display concurrently on monsters</li>
            </ul>
        </LazyLoad>
    )
};

function LegacyOfNine() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/-dlLS2xqLzs" title="Legacy of Nine"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2703/v-149-legacy-of-nine-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><a href="https://maplestory.fandom.com/wiki/Soul_Weapon" target="_blank" rel="noreferrer noopener">Soul Weapons</a> introduced</li>
                <li>
                    <strong>Guild Revamp + <a href="https://www.youtube.com/watch?v=_i0rJWNjc4I" target="_blank" rel="noreferrer noopener">Flag Races</a> (Guild Skills + Noblesse Skills)</strong>
                </li>
                <li>Lion King’s Castle update (<a href="https://www.youtube.com/watch?v=m47o41SmkyI" target="_blank" rel="noreferrer noopener">Rose Garden</a> expansion)</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Master Craftsman’s Cubes + Meister’s Cube drop rate adjusted, small drop rate increase for most bosses</li>
                <li>
                    Cube Rank Up Rate Adjusted (<img src="https://maplestory.io/api/GMS/214/item/2432083/icon" alt=""/> Master Craftsman’s, <img src="https://maplestory.io/api/GMS/214/item/2432163/icon" alt=""/> Meister’s,
                    <img src="https://maplestory.io/api/GMS/214/item/2432268/icon" alt=""/> Red, <img src="https://maplestory.io/api/GMS/214/item/2433623/icon" alt=""/> Black, <img src="https://maplestory.io/api/GMS/214/item/5062500/icon" alt=""/> Bonus Pot Cubes)
                </li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2435648/icon" alt=""/> Golden Hammer Boss Drop added</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2310000/icon" alt=""/> <img src="https://maplestory.io/api/GMS/214/item/1672035/icon" alt=""/> Owl of Minerva + Electronic Hearts sold for money instead of in Cash Shop</li>
                <li>Pet System Revamp (Pets come with Pet Quote, Pet Label, Item Pick Up and Meso Pick Up skills)</li>
                <li>Family System removed</li>
                <li>
                    New Shortcut Keys
                    <ul>
                        <li>Players have the option to use to A, W, E, R, S, D, F as default shortcut keys</li>
                        <li>Option to choose between Shortcut Keys or Secondary Keys (shown during character creation)</li>
                    </ul>
                </li>
                <li>Event Notifier UI Update</li>
            </ul>
        </LazyLoad>
    )
};

function Legends() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/Mt67pbFdrBY" title="Legends"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120108041639/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00DPk&pageIndex=1"/></p>
                <p><TabLink url="https://shakar96.wordpress.com/2011/06/29/maplestory-legend-update/"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New class, <a href="https://maplestory.fandom.com/wiki/Mercedes" target="_blank" rel="noreferrer noopener">Mercedes</a>, <a href="https://maplestory.fandom.com/wiki/Cannoneer" target="_blank" rel="noreferrer noopener">Cannoneer</a>, <a href="https://maplestory.fandom.com/wiki/Demon" target="_blank" rel="noreferrer noopener">Demon Slayer</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Eurel.png/revision/latest?cb=20110702041902" alt="MapIcon Eurel" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Elluel" target="_blank" rel="noreferrer noopener">Elluel</a>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Quick Move button to towns added</li>
                <li>NPC button added to minimap to display a list of NPCs located in the current map</li>
                <li>
                    Stackable Items changes
                    <ul>
                        <li>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2000000/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2000001/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2000002/icon" alt=""/>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2000003/icon" alt=""/> Normal potions: 300 per slot
                        </li>
                        <li>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2003000/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2003003/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2003021/icon" alt=""/>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2003024/icon" alt=""/> Alchemy potions: 400 per slot
                        </li>
                        <li>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2000007/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2000008/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2000009/icon" alt=""/>
                            <img src="https://maplestory.io/api/GMS/210.1.1/item/2000010/icon" alt=""/> Pill: 600 per slot
                        </li>
                        <li><img src="https://maplestory.io/api/GMS/210.1.1/item/2003010/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2003031/icon" alt=""/> Alchemy pill: 800 per slot</li>
                    </ul>
                </li>
                <li>
                    Professions Rework:
                    <ul>
                        <li>Can choose how many of the current item to make based on materials currently available</li>
                        <li>Max fatigue doubled and hourly fatigue recovery rate increased significantly</li>
                        <li>Required mastery EXP decreased</li>
                        <li>Mastery EXP gained by crafting increased</li>
                        <li>
                            New crafting items and crafting materials added such as <img src="https://maplestory.io/api/GMS/210.1.1/item/4021022/icon" alt=""/>
                            <a href="https://maplestory.wiki/GMS/210.1.1/item/4021022" target="_blank" rel="noreferrer noopener">Primal Essence</a>, <img src="https://maplestory.io/api/GMS/210.1.1/item/4021021/icon" alt=""/>
                            <a href="https://maplestory.wiki/GMS/210.1.1/item/4021021" target="_blank" rel="noreferrer noopener">Philosopher’s Stone</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function LifestylePinkBeany() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/NW4mC61xl0I" title="Lifestyle of Pink Beany"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/30735/updated-v-195-lifestyle-of-the-pink-and-beany-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New Theme Dungeon: <img width="38" height="38" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/MapIcon_foxvillage.png/revision/latest?cb=20141217120807" alt="MapIcon foxvillage"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Category%3AFox_Valley" target="_blank">Fox Valley</a></li></ul>
            <h3>New Features + Changes</h3>
            <ul><li>Frozen gear reverted to match the red art style used in KMS</li></ul>
        </LazyLoad>
    )
};

function LineFriends() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/cms/2019/Q2/1370/tertw4ert.png" alt="LINE Friends"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/43521/updated-may-16-v-204-line-friends-x-maplestory-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    Gachapon Ticket Revamp - Tickets purchasable in both Reboot and Non-Reboot worlds
                    <ul>
                        <li>No longer have to talk to an NPC for Gachapon</li>
                        <li>Remote Gachapon Tickets removed</li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function MapleEleven() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/BehQdtpPIPo" title="Maple Eleven"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/7667/v-171-masteria-through-time-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Boss revamp, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/82/MapIcon_Zakum.png/revision/latest?cb=20141119172744" alt="MapIcon Zakum" width="38" height="38" /> Zakum</li>
                <li>Pollo &amp; Frito missions added</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2434813/icon" alt=""/> Mu Lung Dojo AFK Zone added</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/2434584/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2434586/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2434585/icon" alt=""/>
                    <img src="https://maplestory.io/api/GMS/214/item/2434587/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2434589/icon" alt=""/> Chaos Root Abyss and Empress Cygnus now drop Pieces instead of equipment
                </li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1142902/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1142904/icon" alt=""/> New Chaos Root Abyss quests + medals</li>
                <li>Easy mode Empress Cygnus introduced</li>
                <li>
                    New runes introduced (Rune of Hordes, Skill and Barrage)
                    <ul>
                        <li>Rune of Decay removed</li>
                        <li>Rune of Hordes increased the number of monsters summoning within the map!</li>
                    </ul>
                </li>
                <li>Dimensional Mirror removed from Ellinia, Perion, Kerning City and Lith Harbour</li>
                <li>Increased EXP rewarded from Combo Kills and Suprise Missions</li>
                <li>Stats from Final Damage have been removed from the calculation of the Damage stat</li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Final_Form.png/revision/latest?cb=20120711072949" alt="Skill Final Form" width="32" height="32" /> Kaiser can now jump while in Final Form and a Teleport
                    skill is also added for Final Form
                </li>
            </ul>
        </LazyLoad>
    )
};

function MarkOfHonor() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/xXcsA0GC7c0" title="Tempest"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20130303011549/http://maplestory.nexon.net/news/updates/update-notes/00FmM/v-129-mark-of-honor-kanna-update-notes"/></p>
                <p><TabLink url="https://web.archive.org/web/20130517193751/http://maplestory.nexon.net/news/updates/update-notes/00Fos/v-131-mark-of-honor-hayato-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Kanna" target="_blank" rel="noreferrer noopener">Kanna</a>, <a href="https://maplestory.fandom.com/wiki/Hayato" target="_blank" rel="noreferrer noopener">Hayato</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fb/MapIcon_Momijigaoka.png/revision/latest?cb=20120711142651" alt="MapIcon Momijigaoka" width="38" height="38" />
                    <a href="https://maplestory.wiki/GMS/210.1.1/map/807000000">Momijigaoka</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ARoot_Abyss" target="_blank" rel="noreferrer noopener">Root Abyss</a>
                </li>
                <li>
                    New equipment, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Eqp_Royal_Warrior_Helm.png/revision/latest?cb=20150112211030" alt="Eqp Royal Warrior Helm" width="36" height="28" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/5e/Eqp_Eagle_Eye_Warrior_Armor.png/revision/latest?cb=20160501235236" alt="Eqp Eagle Eye Warrior Armor" width="29" height="24" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/09/Eqp_Trixter_Warrior_Pants.png/revision/latest?cb=20160502025844" alt="Eqp Trixter Warrior Pants" width="23" height="28" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f7/Eqp_Fafnir_Mistilteinn.png/revision/latest?cb=20151107043901" alt="Eqp Fafnir Mistilteinn" width="35" height="35" /> Lv.150 Root Abyss set, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bf/Eqp_Amaterasu%27s_Helm.png/revision/latest?cb=20161116022415" alt="Eqp Amaterasu's Helm" width="38" height="40" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/eb/Eqp_Amaterasu%27s_Epaulet.png/revision/latest?cb=20190806072327" alt="Eqp Amaterasu's Epaulet" width="27" height="26" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/85/Eqp_Tsukuyomi%27s_Execution_Sword.png/revision/latest?cb=20190808082454" alt="Eqp Tsukuyomi's Execution Sword" width="36" height="29" /> Lv. 150 Japanese
                    Myth Armor
                </li>
                <li>New equipment slot, <a href="https://maplestory.fandom.com/wiki/Totem" target="_blank" rel="noreferrer noopener">Totems</a></li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/94/MapIcon_Ranmaru.png/revision/latest?cb=20150105042228" alt="MapIcon Ranmaru" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Mori_Ranmaru" target="_blank" rel="noreferrer noopener">Mori Ranmaru</a>
                </li>
            </ul>
        </LazyLoad>
    )
};

function MasteriaThroughTime() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/_zd2Cpau0z8" title="Masteria Through Time"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/7667/v-171-masteria-through-time-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New blockbuster, <a href="https://maplestory.fandom.com/wiki/Blockbuster/Masteria_Through_Time" target="_blank" rel="noreferrer noopener">Masteria Through Time</a></li>
                <li>Masteria revamp, quest adjustments</li>
                <li>New dungeon, Beasts of Fury 2, Shaolin Temple</li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/MapIcon_YuYuanCN.png/revision/latest?cb=20100619154137" alt="MapIcon YuYuanCN" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:The_Far_East" target="_blank" rel="noreferrer noopener">The Far East</a>
                </li>
            </ul>
        </LazyLoad>
    )
};

function MechanicalUtopia() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/0rI6Ve9DatI" title="Mechanical Utopia"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/55632/updated-february-6-v-211-mechanical-utopia-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New event, Mechanical Hearts: The Great Escape Season 3</li></ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Phantom Forest Sanity effect adjusted</li>
                <li>Daily character creation limit now set to 10 characters</li>
            </ul>
        </LazyLoad>
    )
};

function MoonlightMagic() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="https://nxcache.nexon.net/cms/2021/q1/1275/1100x225-maplestory-moonlight-magic-mmorpg.png" alt="Moonlight Magic"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/64760/v-220-moonlight-magic-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Job Balances - Adjusted hits per attack and number of attacks for many classes</strong></li>
                <li>Marksmen New 4th Job Skill: <img src="https://orangemushroom.files.wordpress.com/2020/09/judging-distance.png" alt="Skill Judging Distance" width="32" height="32" /> Judging Distance that allows you to tell the distance from enemies</li>
                <li>
                    Ursus adjusted
                    <ul>
                        <li>Daily entries have been changed to 3 times per account</li>
                        <li>Meso distribution adjusted for characters below Lv. 200</li>
                    </ul>
                </li>
                <li>Getting hit and taking damage while sitting in a chair will now cancel the chair</li>
                <li><strong>Kritias Invasion removed (Kritias content remains)</strong></li>
                <li>
                    <strong>Maple Tour adjusted</strong>
                    <ul>
                        <li>The amount of mesos obtainable reduced</li>
                        <li><img src="https://maplestory.io/api/GMS/219/item/2631635/icon" alt="Item Meso Piggy Bank"/> Meso Piggy Bank removed from Maple Tour shop</li>
                    </ul>
                </li>
                <li>
                    Beast Tamer quest ‘A Guardian's Blessing’ removed
                    <ul>
                        <li>Up to six AP Potions will be given through the new ‘A Guardian's Blessings’ quest within the lightbulb icon on the left side of the screen for Lv. 140 and above Beast Tamer characters</li>
                    </ul>
                </li>
                <li>Fredrick the Store Bank NPC at the Free Market entrance removed</li>
                <li>
                    World Selection, Character Selection, and Character Creation screen resolutions will be changed to 1024x768
                    <ul>
                        <li>Updated the images for certain classes on the Character Creation screen</li>
                        <li>Updated the background images for each class when creating new characters</li>
                        <li>Updated the image on the Region Selection Screen</li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function MushroomShrineTales() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/7344/msinpst3254n534.jpg" alt="Mushroom Shrine Tales"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/16847/v-176-mushroom-shrine-tales-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li><img width="38" height="38" src="https://vignette.wikia.nocookie.net/maplestory/images/6/65/MapIcon_jipangu.png/revision/latest?cb=20171129032623" alt="MapIcon jipangu"/> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Category:Mushroom_Shrine" target="_blank">Mushroom Shrine</a> Revamped</li></ul>
        </LazyLoad>
    )
};

function Mutiny() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/Ly8cEkca1VU" title="Mutiny"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120902200035/http://maplestory.nexon.net/news/updates/update-notes/00F5s/v-115-mutiny-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New boss, <img width="38" height="38" src="https://vignette.wikia.nocookie.net/maplestory/images/9/9f/MapIcon_Hilla.png/revision/latest?cb=20140928235713" alt="MapIcon Hilla" /> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Hilla" target="_blank">Hilla</a>
                </li>
                <li>
                    New items, <img width="41" height="36" src="https://vignette.wikia.nocookie.net/maplestory/images/1/15/Eqp_Necro_Polearm.png/revision/latest?cb=20171005050946" alt="Eqp Necro Polearm" /> Necro set,
                    <img src="https://maplestory.io/api/GMS/214/item/2430690/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/5000217/icon" alt=""/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/5000217" target="_blank">Blackheart pet</a>,
                    <img width="32" height="30" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Eqp_Will_o%27_the_Wisps.png/revision/latest?cb=20160106061212" alt="Eqp Will o' the Wisps" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/1032136" target="_blank">Will o' the Wisps</a>,
                    <img width="30" height="28" src="https://vignette.wikia.nocookie.net/maplestory/images/d/d9/Eqp_Stone_of_Eternal_Life.png/revision/latest?cb=20151122223004" alt="Eqp Stone of Eternal Life" /> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/214/item/1162009" target="_blank">Stone of Eternal Life</a>
                </li>
                <li>New content, <a rel="noreferrer noopener" href="https://gamerbewbs.wordpress.com/2012/08/11/gms-mutiny-spiegelmanns-gonzo-gallery-guide/" target="_blank">Spiegelmann’s Gonzo Gallery</a></li>
                <li>
                    <a rel="noreferrer noopener" href="https://web.archive.org/web/20120909074311/http://maplestory.nexon.net/news/updates/update-notes/00F5y/v-115-mutiny-update-notes-appendix" target="_blank">Pirate + Dual Blade Revamps</a>
                    <ul>
                        <li>New hairstyles and faces for Dual Blades</li>
                        <li>Goodbye Corsair battleship and Bucc transform</li>
                    </ul>
                </li>
                <li>
                    <img width="38" height="38" src="https://vignette.wikia.nocookie.net/maplestory/images/4/45/MapIcon_GoldTempleTH.png/revision/latest?cb=20100619154244" alt="MapIcon GoldTempleTH" /> <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Category:Golden_Temple" target="_blank">Golden Temple</a> revamped into Theme Dungeon (current iteration)
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Silent Crusade changes (new Titles added)</li>
                <li>Mu Lung Dojo revamp, new modes: Normal, Hard and Ranked</li>
                <li>Equipment shops on Victoria Island now sell equips through Lv.40</li>
                <li>Ossyria now sells equips Lv.45-60 or Lv.55-70 depending on shop</li>
            </ul>
        </LazyLoad>
    )
};

function Neo(){
    return(
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/EaSiggfQ2lM" title="NEO"/>
            <div className="repository-md-container">
                <p><TabLink url="https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes"/></p>
                <p><TabLink url="https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>New class, <a href="https://maplestory.fandom.com/wiki/Kain" target="_blank" rel="noopener">Kain</a></strong></li>
                <li><strong><img src="https://maplestory.io/api/GMS/225/item/2881192/icon" data-v-e6b15fb6 /> Morass and <img src="https://maplestory.io/api/GMS/225/item/2881182/icon" data-v-e6b15fb6 /> Esfera Familiar and Badges have been added</strong></li>
                <li>New area, <img src="https://maplestory.io/api/KMS/348/map/410000401/icon" alt="MapIcon Toolen City" /> <a href="https://maplestory.fandom.com/wiki/Category:Toolen_City" target="_blank" rel="noopener">Toolen City</a></li>
                <li><strong>New area, <img src="https://maplestory.io/api/KMS/348/map/410000500/icon" alt="MapIcon Cernium" /> <a href="https://maplestory.fandom.com/wiki/Category:Cernium" target="_blank" rel="noopener">Cernium + Burning Cernium</a></strong></li>
                <li><strong>New area, <img src="https://maplestory.io/api/GMS/225/map/410003000/icon" data-v-e6b15fb6="true" /> <a href="https://maplestory.fandom.com/wiki/Category:Hotel_Arcus" target="_blank" rel="noopener">Hotel Arcus</a></strong></li>
                <li><strong>New Symbol Force, <img src="https://maplestory.io/api/KMST/1119/item/1713000/icon" alt="Eqp Sacred Force" /><img src="https://maplestory.io/api/GMS/225/item/1713001/icon" data-v-e6b15fb6="true" /> <a href="https://maplestory.fandom.com/wiki/Category:Sacred_Symbols" target="_blank" rel="noopener">Sacred Force</a></strong></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Characters below Lv. 35 that have not logged on since December 15, 2016 have been deleted</strong></li>
                <li><strong>Level cap increases to 300</strong></li>
                <li><strong>Damage cap increases to 150 billion</strong></li>
                <li><strong>Meso cap increased to 100 billion</strong></li>
                <li><strong>Required EXP from Lv. 210 to 249 has been reduced</strong></li>
                <li><strong>PIC System has been removed</strong></li>
                <li><strong>Legion Coin Shop has been modified</strong>
                <ul>
                    <li>The following items have been removed:
                    <ul>
                        <li><img src="https://maplestory.io/api/GMS/225/item/2049701/icon" data-v-e6b15fb6 /> [Epic Potential Scroll 50%], <img src="https://maplestory.io/api/GMS/225/item/2432083/icon" data-v-e6b15fb6 /> [Master Craftsman's Cube], <img src="https://maplestory.io/api/GMS/225/item/2048308/icon" data-v-e6b15fb6 /> [Bonus Potential Scroll 50%]</li>
                    </ul>
                    </li>
                    <li>The following items have been added:
                    <ul>
                        <li><img src="https://maplestory.io/api/GMS/225/item/2049700/icon" data-v-e6b15fb6 /> [Epic Potential Scroll 100%], <img src="https://maplestory.io/api/GMS/225/item/2711023/icon" data-v-e6b15fb6 /> [Karma Master Craftsman's Cube], <img src="https://maplestory.io/api/GMS/225/item/2048759/icon" data-v-e6b15fb6 /> [Karma Rejuvenating Flame], <img src="https://maplestory.io/api/GMS/225/item/2048757/icon" data-v-e6b15fb6 /> [Karma Eternal Rebirth Flame], <img src="https://maplestory.io/api/GMS/225/item/2048766/icon" data-v-e6b15fb6 /> [Karma Black Rebirth Flame], <img src="https://maplestory.io/api/GMS/225/item/2048338/icon" data-v-e6b15fb6 /> [Bonus Potential Scroll 100%]</li>
                        <li>Karma items can only be used on untradable items</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><strong>Starforce Enhancement and Spell Tracing animation times have been shortened</strong></li>
                <li>Tradeability of Secondary Weapons for Mechanic, Demon Avenger, Demon Slayer, and Mihile have been updated</li>
                <li>Explorer classes now receive their Emblems when they reach Lv. 60 and Lv. 100 via a quest called "Explorer's Token"</li>
                <li><strong>Reboot World Improvements</strong>
                <ul>
                    <li><img src="https://maplestory.io/api/GMS/225/item/4001878/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/225/item/4001889/icon" data-v-e6b15fb6 /> Droplet Stones can now be traded and be exchanged for one another</li>
                </ul>
                </li>
                <li><strong>Arcane River Quest improvements</strong>
                <ul>
                    <li>The amount of Arcane Symbols obtained upon completing Vanishing Journey and Chu Chu Island daily quests has been increased</li>
                    <li>Upon completing the Reverse City questline, the amount of Arcane Symbols rewarded for Vanishing Journey daily quests will be doubled</li>
                    <li>Upon completing the Yum Yum Island questline, the amount of Arcane Symbols rewarded for Chu Chu Island daily quests will be doubled</li>
                    <li>New daily quests have been added for Reverse City and Yum Yum Island for Vanishing Journey and Chu Chu Island once the questlines have been completed</li>
                </ul>
                </li>
                <li>Gloom (Chaos), Darknell (Hard), Verus Hilla, and Black Mage now drop Arcane Umbra equipment when defeated</li>
                <li>Death Penalty changes
                <ul>
                    <li>EXP is no longer lost when dying</li>
                    <li>Upon dying, characters will now receive a debuff that reduced EXP obtained and drop rate</li>
                    <li>Safety Charms now immediately remove the debuff</li>
                </ul>
                </li>
                <li>Monster Park improvements
                <ul>
                    <li>EXP for Vanishing Journey has been increased</li>
                    <li>Chu Chu Island Skywhale maps have been simplified</li>
                    <li>Lachelein stage has been added for characters that have completed the Lachelein questline</li>
                </ul>
                </li>
                <li>Boss Matchmaking changes
                <ul>
                    <li><strong>Players can now directly teleport to a boss without needing to be matched successfully with another player</strong></li>
                    <li>Form Party buff has been removed</li>
                </ul>
                </li>
                <li><strong>During weekly and monthly bosses, pets now only pick up items rewarded to individual players</strong></li>
                <li>NPC Collector can now be accessed through the Quick Move UI</li>
                <li>Meso Market changes
                <ul>
                    <li><strong>Trades are now shared between characters within the same world</strong></li>
                    <li>Listing, Cancelling, and Collecting has been changed to "per world"</li>
                    <li>Meso Market daily list count has been increased from 5 to 20</li>
                    <li>Trade fee discount and additional meso/Maple Point distribution upon successful trade has been removed</li>
                </ul>
                </li>
                <li>Mu Gong's Soul Shard has been added to the Mu Lung Dojo Point Shop</li>
                <li>Pets that are expired will display as red in the inventory</li>
                <li>A pop-up will now appear when Safeguard is automatically disabled during Star Force Enhancement</li>
                <li>Party members' boss death count will be displayed on the party UI</li>
                <li>Players can now move to Cash Shop or different channels during boss entry waiting lobbies for Lucid, Verus Hilla, and Darknell</li>
                <li>Character skin information can now be checked in the Cash tab of the Equipment Inventory UI</li>
                <li>Clean Slate Scroll will be replaced with Pure Clean Slate Scroll (for consistent naming conventions)</li>
                <li><strong>V Matrix QoL changes</strong>
                <ul>
                    <li>The color and effect of a selected node is now distinguished from newly obtained nodes</li>
                    <li>Node lock function has been added</li>
                    <li>Select All feature has been added for node disassembling</li>
                </ul>
                </li>
            </ul>
        </LazyLoad>
    );
}

function NewDawn() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/Gidaa5KrMfQ" title="New Dawn"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120903231957/http://maplestory.nexon.net/news/updates/update-notes/00FCK/v-117-new-dawn-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New class, <a rel="noreferrer noopener" href="https://maplestory.fandom.com/wiki/Mihile" target="_blank">Mihile</a></li></ul>
        </LazyLoad>
    )
};

function NewYearShowdown() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/vdcT2KNHwfE" title="New Year Showdown"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/27799/updated-v-192-new-year-showdown-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>New event, Mechanical Hearts Season 2</li></ul>
        </LazyLoad>
    )
};

function Nova() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/9hFV2xuzMcs" title="NOVA"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/26707/v-190-nova-liberation-of-cadena-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/27153/v-191-nova-winter-bard-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Cadena" target="_blank" rel="noreferrer noopener">Cadena</a>, <a href="https://maplestory.fandom.com/wiki/Illium" target="_blank" rel="noreferrer noopener">Illium</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a6/MapIcon_SavageTerminal.png/revision/latest?cb=20171115151523" alt="MapIcon SavageTerminal" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ASavage_Terminal" target="_blank" rel="noreferrer noopener">Savage Terminal</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/MapIcon_Asylum.png/revision/latest?cb=20171115151551" alt="MapIcon Asylum" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Sanctuary" target="_blank" rel="noreferrer noopener">Sanctuary</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png/revision/latest?cb=20171021043007" alt="MapIcon Morass" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AMorass" target="_blank" rel="noreferrer noopener">Morass</a>
                </li>
                <li>
                    New daily, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Spirit_Savior" target="_blank" rel="noreferrer noopener">Spirit Savior</a>
                </li>
                <li>
                    Boss revamp, <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6d/MapIcon_Papulatus_Clock.png/revision/latest?cb=20180109012602" alt="MapIcon Papulatus Clock" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Papulatus" target="_blank" rel="noreferrer noopener">Papulatus</a>
                </li>
                <li>
                    Grand Athenaeum: <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/27/MapIcon_Library.png/revision/latest?cb=20140614011213" alt="MapIcon Library" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Ryude" target="_blank" rel="noreferrer noopener">Winter Bard</a> story added
                </li>
                <li>
                    New 5th job skills (<img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e6/Skill_Erda_Shower.png/revision/latest?cb=20171203092117" alt="Skill Erda Shower" width="32" height="32" /> Erda Shower, common class skills)
                </li>
                <li>Maple Achievements system introduced</li>
                <li>
                    New Dark Boss equipment, <img src="https://maplestory.io/api/GMS/214/item/1022278/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1022278" target="_blank" rel="noreferrer noopener">Magic Eyepatch</a>,
                    <img src="https://maplestory.io/api/GMS/214/item/1012632/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1012632" target="_blank" rel="noreferrer noopener">Berserked</a>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Mesos drops in Reboot world have been increased while hunting monsters within your level range</li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/2001530/icon" alt=""/> <img src="https://maplestory.io/api/GMS/214/item/2000037/icon" alt=""/> <img src="https://maplestory.io/api/GMS/214/item/2020015/icon" alt=""/> Boss Reward Changes (
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2f/Etc_Intense_Power_Crystal.png/revision/latest?cb=20171201210059" alt="Etc Intense Power Crystal" width="32" height="38" /> Intense Power Crystal)
                </li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/2000004/icon" alt=""/> Potion rewards and mesos removed from boss rewards.
                    <ul>
                        <li>Elixir drop rate adjusted</li>
                    </ul>
                </li>
                <li>Absolab, Arcane Umbra can now be dropped by corresponding bosses (in Hard Mode)</li>
                <li>Boss entry/clear limits changed for certain bosses</li>
                <li>Maple News added as ingame browser</li>
                <li>5-minute time limit added to obtain rewards before leaving</li>
                <li>Players can no longer change equipment while sitting on a chair</li>
                <li>New Skill Effect Transparency Option for pet opacity introduced</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1712000/icon" alt=""/> Arcane Symbol drop will only be shown to the player who dealt the most damage</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1242103/icon" alt=""/> Von Leon Pirate Set now has an Energy Chain weapon</li>
                <li>New Character Creation illustrations for Aran, Evan, Mercedes, Phantom, Luminous and Shade</li>
            </ul>
        </LazyLoad>
    )
};

function OnAir() {
    return(
        <LazyLoad>
            <div className="repository-md-container">
                <img className="repository-image" src="https://nxcache.nexon.net/cms/2021/q4/1542/1100x225-maplestory-on-air-glimpse-of-joy-pn-mmorpg.jpg" alt="On Air"/>
                <p><TabLink url="https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes"/></p>
                <p><TabLink url="https://maplestory.nexon.net/news/70691/v-229-on-air-an-absolute-unit-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>New Mage Class, Lara</strong></li>
                <li>New Starting Area, <img src="/images/map-icons/narin.png" alt="MapIcon Narin"/> Narin</li>
                <li><strong>New Boss, Guardian Angel Slime</strong></li>
                <li>New Morass daily activity, Ranheim Defense</li>
                <li>New Esfera daily activity, Esfera Guardian</li>
                <li>Weekly Guild Missions Added
                <ul>
                    <li><strong>Noblesse Skill Points can be earned according to the total combined Weekly Mission Points earned by the guild</strong></li>
                </ul>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Pets can now use 2 buff skill slots</strong></li>
                <li>Added new Hyper Stat for %Damage Against Normal Monsters</li>
                <li>Added 3 preset slots for Hyper Stats</li>
                <li>Allowed use for up to 5 Chair Bags and Title Holders respectively</li>
                <li>Added feature to lock an item from being rearranged when sorted in inventory</li>
                <li>Added feature to sort by item type</li>
                <li>Added feature to add favourite maps on the World Map by right-clicking</li>
                <li><strong><img src="/images/items/dream-key.png" alt="Etc Dream Key"/> Dream Key has been removed from the Cygnus (Normal Mode) boss requirements</strong></li>
                <li><strong>After defeating a boss, press the Up Arrow key to use the exit portal</strong></li>
                <li>Flag Race Revamp
                <ul>
                    <li>Entry is now available for about 2 minutes at the 30-minute mark of every hour</li>
                    <li>During entry times, players can enter via the button in the ‘Guild Contents’ tab of the Guild UI</li>
                </ul>
                </li>
                <li>Sharenian Culvert Revamp
                <ul>
                    <li>Players can go to the Culvert Entrance via the button in the ‘Guild Contents’ tab of the Guild UI or by talking to NPC Daedal at the Orbis Guild Base &lt;Hall of Heroes&gt;</li>
                    <li>Sharenian Culvert can only be entered alone and there is no limit to how many times it can be attempted</li>
                </ul>
                </li>
                <li>Reboot World Changes
                <ul>
                    <li><strong>%Damage Increase effect has now been changed to %Final Damage Increase</strong></li>
                    <li>Alicia's Ring Box will no longer provide unusable rings for each job</li>
                </ul>
                </li>
                <li><strong>Character Stats - Detailed Stats UI provides more detailed information</strong></li>
                <li>Potential Improvements
                <ul>
                    <li><strong>The two Critical Damage +% stats in the set rates for each stat were combined into one.</strong></li>
                    <li>The following stats will no longer appear when using the Red Cube, Black Cube, Master Craftsman's Cube, Meister's Cube, Violet Cube, or the Cube of Equality:
                    <ul>
                        <li>(Unique) Boss Damage: +20%</li>
                        <li><strong>(Unique) All Skill Levels +1 (Excludes 5th Job skills and certain other skills, only increases up to the skill's Master Level)</strong></li>
                        <li><strong>(Unique, Legendary) All Skill Levels +2 (Excludes 5th Job skills and certain other skills, only increases up to the skill's Master Level)</strong></li>
                        <li><strong>(Legendary) All Skill Levels +3 (Excludes 5th Job skills and certain other skills, only increases up to the skill's Master Level)</strong></li>
                        <li>(Legendary) All Elemental Resistance: +10% (Based on Lv. 120+ equipment)</li>
                        <li>(Legendary) Status Resistance +10 (Based on Lv. 120+ equipment)</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><strong>The transfer count for link skills will be increased to 4, and players can now pay an additional cost to perform additional transfers up to 10 times</strong></li>
                <li><strong>EXP rewards will now be given when players complete Arcane River area daily quests</strong></li>
                <li><strong>The Morass daily quest completion NPCs have been consolidated to Jean at Trueffet Square</strong></li>
                <li><strong>Added new Limina area maps with monsters that have more HP but give more EXP:</strong>
                <ul>
                    <li>World's Sorrow Midpoint 4</li>
                    <li>End of the World 1-7</li>
                    <li>End of the World 2-6</li>
                </ul>
                </li>
                <li>Added button to check current price of Intense Power Crystals for bosses when selling at Collector NPC</li>
                <li><strong>Maple Reward Point Improvements</strong>
                <ul>
                    <li>Daily Bosses: 30 Maple Reward Points</li>
                    <li>Weekly Bosses: 200 Maple Reward Points</li>
                    <li>Monthly Bosses: 1,000 Maple Reward Points</li>
                </ul>
                </li>
            </ul>
        </LazyLoad>
    )
}

function Override() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/7Z8jy-J6iX8" title="Override"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/23433/v-186-override-evolve-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/24100/v-187-override-venture-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New daily, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Dream_Defender" target="_blank" rel="noreferrer noopener">Dream Defender</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png/revision/latest?cb=20170203025705" alt="MapIcon Arcana" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AArcana" target="_blank" rel="noreferrer noopener">Arcana</a>
                </li>
                <li>New common 5th job skills for each class (ex. Explorers, Cygnus Knights, Mages, Warriors, Thieves)</li>
                <li>
                    <strong><a href="https://maplestory.fandom.com/wiki/Legion_System" target="_blank" rel="noreferrer noopener">Legion System</a> introduced</strong>
                </li>
                <li>
                    Theme dungeon revamp, <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c1/MapIcon_OmegaSector.png/revision/latest?cb=20100619153514" alt="MapIcon OmegaSector" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Omega_Sector" target="_blank" rel="noreferrer noopener">Omega Sector</a>
                </li>
                <li>Jett ‘revamp’</li>
                <li>New event, <a href="https://www.youtube.com/watch?v=vbyU_HMEn2Q" target="_blank" rel="noreferrer noopener">Eluna</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>You can now move to Cash Shop even if you are attacked by a monster while out of combat</strong></li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2630987/icon" alt=""/> Occult Cubes no longer rank down your equipment</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1082719/icon" alt=""/> New storyline for <a href="https://maplestory.fandom.com/wiki/Category%3AFantasy_Theme_World" target="_blank" rel="noreferrer noopener">Fantasy Theme World</a></li>
                <li>V Matrix Update, new skill slot every 5 levels instead of 6, maximum number of skill slots increased</li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d1/Skill_Holy_Symbol.png/revision/latest?cb=20151207054159" alt="Skill Holy Symbol" width="32" height="32" /> <a href="https://maplestory.fandom.com/wiki/Decent_Holy_Symbol" target="_blank" rel="noreferrer noopener">Decent Holy Symbol</a> added (5th job)
                </li>
                <li>Lucid Hard Mode difficulty introduced</li>
                <li>Leafre Revamp (areas reorganized / restructured)</li>
                <li>More Star Force maps</li>
            </ul>
        </LazyLoad>
    )
};

function Pathfinder() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/yRBEbEs9zDI" title="Pathfinder"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/49946/updated-august-21-v-205-pathfinder-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/51627/v-206-pathfinder-squadron-of-heroes-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Pathfinder" target="_blank" rel="noreferrer noopener">Pathfinder</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8f/MapIcon_Partem.png/revision/latest?cb=20191204082821" alt="MapIcon Partem" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3APartem" target="_blank" rel="noreferrer noopener">Partem</a>
                </li>
                <li>
                    New Theme Dungeon, <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/MapIcon_Elodin.png/revision/latest?cb=20190207224724" alt="MapIcon Elodin" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AElodin" target="_blank" rel="noreferrer noopener">Secret Forest of Elodin</a>
                </li>
                <li>New Theme Dungeon, <a href="https://maplestory.fandom.com/wiki/Category%3APartem" target="_blank" rel="noreferrer noopener">Partem Ruins</a></li>
                <li>
                    <strong>Class revamp: Kanna &amp; Hayato, Jett, Beast Tamer ( </strong>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/Skill_Ghost_Yaksha_Boss.png/revision/latest?cb=20190612235111" alt="Skill Ghost Yaksha Boss" width="32" height="32" /><strong> Current Kanna iteration)</strong>
                </li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/1202267/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2630793/icon" alt=""/>
                    <strong> <a href="https://maplestory.wiki/GMS/214/item/1202267" target="_blank" rel="noreferrer noopener">Fury Totem</a> added</strong>
                </li>
                <li>New Party Quest, <a href="https://maplestory.fandom.com/wiki/Category%3AErda_Spectrum" target="_blank" rel="noreferrer noopener">Erda Spectrum</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>5th Job Advancement can now be done without Temple of Time quest completion and without accumulating EXP on Arcane Stones</strong></li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4e/MapIcon_fairyAcademy.png/revision/latest?cb=20130628060623" alt="MapIcon fairyAcademy" width="38" height="38" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/3/37/MapIcon_GoldBeach.png/revision/latest?cb=20121109150254" alt="MapIcon GoldBeach" width="38" height="38" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/89/MapIcon_glacierExplorer.png/revision/latest?cb=20130619034108" alt="MapIcon glacierExplorer" width="38" height="38" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/43/MapIcon_Elodin.png/revision/latest?cb=20190207224724" alt="MapIcon Elodin" width="38" height="38" />
                    <strong> Lv. 30 - 59 Theme Dungeons revamped, areas are now proportional to your level up to Lv.59, monsters are instanced</strong>
                </li>
                <li>Revamps and adjustments to Lv. 140 - 200 Quests and Fields</li>
                <li><strong>Kritias, Dark World Tree and Haven daily quests have been changed to weekly quests (Resets every Sunday)</strong></li>
                <li><strong>Practice mode added for Weekly bosses</strong></li>
                <li>Hard Hilla and Chaos Pink Bean changed to weekly bosses</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/4001886/icon" alt=""/> Weekly bosses Power Crystals’ price increased</li>
                <li>Pink Bean’s battle pattern changed</li>
                <li>Ranmaru is now a daily boss</li>
                <li>Princess No is now a weekly boss, Lv.140 Secondary can be exchanged with <img src="https://maplestory.io/api/GMS/214/item/2630594/icon" alt=""/> Captivating Fragments dropped by P. No</li>
                <li>Increased Meso drop rates in Reboot world to 6x non-Reboot worlds</li>
                <li>Enhancement level will not decrease when failing Star Force below 10-Star</li>
                <li>10-13 Star success chance has been increased</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1712001/icon" alt=""/> Vanishing Journey Arcane Symbol upgrade cost reduced</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2432336/icon" alt=""/> <img src="https://maplestory.io/api/GMS/214/item/4021042/icon" alt=""/> Increased Cubic Blade and Cubic Chaos Blade drop rate from Elite monsters + boss monsters</li>
                <li>
                    Hyper Stats revamp - you can earn points after Lv.250
                    <ul>
                        <li>STAT increase per level has been doubled</li>
                        <li>Speed, Jump, Elemental Resistance stat removed</li>
                        <li>ATT/MATK, EXP obtain and Arcane Power stats added</li>
                    </ul>
                </li>
                <li>
                    Legion System changes, you can use Legion when one of the following two conditions are met: 3 characters that are Lv.60 and have Legion Lv. 500+ or 1 character at least has completed 5th Job Advancement
                    <ul>
                        <li>Overlapping blocks will be displayed</li>
                        <li>Legion coins will be merged and used per world</li>
                    </ul>
                </li>
                <li><strong>New loading screen added</strong></li>
                <li>Changed loading structure on client start up, to try and improve loading times</li>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Sylvidia%27s_Flight.png/revision/latest?cb=20170609033219" alt="Skill Sylvidia's Flight" width="32" height="32" />
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Irkalla%27s_Wrath.png/revision/latest?cb=20181115065415" alt="Skill Irkalla's Wrath" width="32" height="32" /> If Sylvidia is canceled or ends while Mercedes
                    is mounted on Sylvidia and using Irkalla's Wrath, Irkalla's Wrath will end as well
                </li>
                <li>
                    The bulb quest notifier has been improved:
                    <ul>
                        <li>Added a button where you can see only the quests for your level range</li>
                        <li>Added starting levels to some of the quests shown in the bulb quest notifier</li>
                        <li>Sorted the quest list by level in a descending order</li>
                    </ul>
                </li>
                <li>Death count added to Von Leon and Horntail</li>
                <li>Multiple boss fights have been changed so that when you die, you will be automatically revived after 30 secs</li>
            </ul>
        </LazyLoad>
    )
};

function PinkBeanSuperstar() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/ZvgN6ubXg-A" title="Pink Bean Superstar"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/3741/v-165--pink-bean-superstar-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New event class, <a href="https://maplestory.fandom.com/wiki/Pink_Bean/Skills" target="_blank" rel="noreferrer noopener">Pink Bean</a></li>
                <li>
                    New Party Quest, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/0e/MapIcon_Krease.png/revision/latest?cb=20191204082813" alt="MapIcon Krease" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Xerxes_in_Chryse" target="_blank" rel="noreferrer noopener">Xerxes in Chryse</a> (Chryse Theme Dungeon returns)
                </li>
                <li>Burning Fields introduced</li>
                <li>Sudden Mission system introduced</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>
                    Maple Guide (updated once again)
                    <ul>
                        <li>Maple Content Map</li>
                    </ul>
                </li>
                <li>
                    Mu Lung Dojo Ranking Revamp
                    <ul>
                        <li>Ranking resets weekly (Mondays)</li>
                        <li>Timer stops for 10 secs when a boss is defeated</li>
                        <li>Resting maps removed</li>
                        <li>Job Rankings introduced</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2433834/icon" alt=""/> Elite Boss Revamp - Rare Treasure Chest item added</li>
                <li>ON/OFF button added to Soul Weapon UI</li>
                <li>Intro Videos are now skippable</li>
            </ul>
        </LazyLoad>
    )
};

function PixelParty() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/hSWWFSooivw" title="Pixel Party"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/57261/updated-june-9-v-213-15th-anniversary-pixel-party-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7f/Eqp_Roro_the_Familiar_Manager.png/revision/latest?cb=20200424053026" alt="Eqp Roro the Familiar Manager" width="30" height="36" />
                    <strong><a href="https://maplestory.fandom.com/wiki/Familiars" target="_blank" rel="noreferrer noopener">Familiar System</a> Revamp - was disabled until Rise: Surge of Power update after being heavily broken on release</strong>
                </li>
                <li><strong>Gollux Revamp (Current iteration)</strong></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Gollux shop now restocks weekly</li>
                <li>PIC Input System UI updated</li>
                <li><strong>PIC required to access storage</strong></li>
                <li>7-day trade restriction for newly created accounts</li>
            </ul>
        </LazyLoad>
    )
};

function Reboot() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/M6h_4kDaMDc" title="Reboot"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/5183/v-168--reboot-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/5793/v-170--ursus-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Kinesis" target="_blank" rel="noreferrer noopener">Kinesis</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/MapIcon_KinesisCity.png/revision/latest?cb=20180818045108" alt="MapIcon KinesisCity" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Kinesis%27s_City" target="_blank" rel="noreferrer noopener">Seoul</a> (Kinesis' City)
                </li>
                <li><strong>New world, Reboot</strong></li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/91/Mobicon_Ursus.png/revision/latest?cb=20160205050520" alt="Mobicon Ursus" width="24" height="25" />
                    <a href="https://maplestory.fandom.com/wiki/Ursus" target="_blank" rel="noreferrer noopener">Ursus</a>
                </li>
                <li>Area revamp, <a href="https://maplestory.fandom.com/wiki/Category:Korean_Folk_Town" target="_blank" rel="noreferrer noopener">Korean Folk Town</a></li>
                <li>
                    New content, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/98/MapIcon_GhostPark.png/revision/latest?cb=20151203035624" alt="MapIcon GhostPark" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Ghost_Park" target="_blank" rel="noreferrer noopener">Spiegelmann’s Ghost Park</a>
                </li>
                <li><strong>Hyper Stat System introduced</strong></li>
                <li><a href="https://strategywiki.org/wiki/MapleStory/Transfer_Hammer" target="_blank" rel="noreferrer noopener">Transfer Hammer</a> System introduced</li>
                <li>Battle Analysis System introduced</li>
                <li>
                    New equipment, <img src="https://maplestory.io/api/GMS/214/item/1022254icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1022254" target="_blank" rel="noreferrer noopener">Fairy Mark</a>,
                    <img src="https://maplestory.io/api/GMS/214/item/1032254icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1032254" target="_blank" rel="noreferrer noopener">Octopus Earrings</a>,
                    <img src="https://maplestory.io/api/GMS/214/item/1132292icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1132292" target="_blank" rel="noreferrer noopener">Sailor Belt</a>,
                    <img src="https://maplestory.io/api/GMS/214/item/1122321icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/1122321" target="_blank" rel="noreferrer noopener">Shackles of Love</a>
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>MapleTV removed</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2310000/icon" alt=""/> Owl of Minerva can now search for tradeable cash items</li>
                <li>More Star Force maps added</li>
                <li>Mastery Books can now be rewarded from ingame content</li>
                <li>Summoned skills' monster kills will no longer give you Souls for Soul Weapon</li>
            </ul>
        </LazyLoad>
    )
};

function Red() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/ioFMArZGKvU" title="RED"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20140227231922/http://maplestory.nexon.net/news/updates/update-notes/00HMP/v-143-red-first-impact-update-notes-part-2"/></p>
                <p><TabLink url="https://web.archive.org/web/20140317055620/http://maplestory.nexon.net/news/updates/update-notes/00HPX/v-144-red-zero-update-notes"/></p>
                <p><TabLink url="https://web.archive.org/web/20140314123046/http://maplestory.nexon.net/news/updates/update-notes/00HYj/v-145-beast-tamer-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Zero" target="_blank" rel="noreferrer noopener">Zero</a>, <a href="https://maplestory.fandom.com/wiki/Beast_Tamer" target="_blank" rel="noreferrer noopener">Beast Tamer</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/d/d4/MapIcon_ArbrenBT.png/revision/latest?cb=20140629053654" alt="MapIcon ArbrenBT" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Arboren" target="_blank" rel="noreferrer noopener">Arboren</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/18/MapIcon_ZeroTemple.png/revision/latest?cb=20150328043106" alt="MapIcon ZeroTemple" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Mirror_World" target="_blank" rel="noreferrer noopener">Mirror World</a>
                </li>
                <li>
                    <strong>New area + Theme Dungeon, </strong><img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/MapIcon_CommerzBT.png/revision/latest?cb=20140328223105" alt="MapIcon CommerzBT" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ACommerci_Republic" target="_blank" rel="noreferrer noopener"><strong>Commerci Republic</strong></a>
                </li>
                <li>
                    New equipment, <img src="https://maplestory.io/api/GMS/214/item/1012438/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1022211/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1052669/icon" alt=""/> Sweetwater set,
                    Commerci set
                </li>
                <li>
                    <strong>New feature, <a href="https://www.youtube.com/watch?v=IkaV9AZTGQk" target="_blank" rel="noreferrer noopener">Transposing</a> equipment</strong>
                </li>
                <li>New content, <a href="https://www.youtube.com/watch?v=UtW6Lldv7K8&amp;t" target="_blank" rel="noreferrer noopener">Trade Voyages</a></li>
                <li>New continent, <a href="http://maplestory.nexon.net/micro-site/dawnveil" target="_blank" rel="noreferrer noopener">Dawnveil</a></li>
                <li>Explorers Revamp (Current iteration)</li>
                <li><a href="https://maplestory.fandom.com/wiki/Open_Advancement" target="_blank" rel="noreferrer noopener">Open Job Advancement</a> system introduced</li>
                <li>
                    <img src="https://maplestory.io/api/GMS/210.1.1/item/2432083/icon" alt=""/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2711005" target="_blank" rel="noreferrer noopener">Master Craftsman Cubes</a> +
                    <img src="https://maplestory.io/api/GMS/214/item/2432163/icon" alt=""/> <a href="https://maplestory.wiki/GMS/210.1.1/item/2711004" target="_blank" rel="noreferrer noopener">Meister Cubes</a> introduced
                </li>
                <li><a href="https://maplestory.wiki/GMS/214/map/820000000" target="_blank" rel="noreferrer noopener">Event Hall</a> added</li>
                <li><a href="https://youtu.be/3y_k7X4D31k" target="_blank" rel="noreferrer noopener">Smart Mounts</a> introduced (Autopilot mode)</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1113048/icon" alt=""/> Ariant Coliseum returns</li>
                <li>Ninja Castle Revamped</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>UI Changes to Quest, Mount Skill, and Equipment UI</li>
                <li>Profession Revamp (Meister and Master Craftsman)</li>
                <li><img src="https://maplestory.io/api/GMS/210.1.1/item/2431789/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2431790/icon" alt=""/> Mastery Book Revamp (MB 20 + 30)</li>
                <li>
                    New level potential tier added for all equipment Lv. 151+
                    <ul>
                        <li>
                            Different equipment level potential tiers are now:
                            <ul>
                                <li>1 - 30</li>
                                <li>31 - 70</li>
                                <li>71 - 150</li>
                                <li>151+</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function Renegades() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/YMkEuWv4DtA" title="Renegades"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20120630222940/http://maplestory.nexon.net/News/update-notes.aspx?boardNo=121&contentNo=00Eu1&pageIndex=1"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Jett" target="_blank" rel="noreferrer noopener">Jett</a>, <a href="https://maplestory.fandom.com/wiki/Phantom" target="_blank" rel="noreferrer noopener">Phantom</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/MapIcon_Aswan.png/revision/latest?cb=20120217094531" alt="MapIcon Aswan" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AAzwan" target="_blank" rel="noreferrer noopener">Azwan</a>
                </li>
                <li>
                    <img src="https://maplestory.io/api/GMS/210.1.1/item/2434564/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2700000/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/2700300/icon" alt=""/> Honor EXP introduced (
                    <a href="https://strategywiki.org/wiki/MapleStory/Inner_Ability" target="_blank" rel="noreferrer noopener">Inner Abilities</a>)
                </li>
                <li>
                    <a href="https://davtan4433.wordpress.com/2012/10/26/maplestory-part-time-job-system/" target="_blank" rel="noreferrer noopener">Part-Time Job</a> system and
                    <a href="https://strategywiki.org/wiki/MapleStory/Character_Cards" target="_blank" rel="noreferrer noopener">Character Card</a> system introduced
                </li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Navigation System (arrow directing you where to go)</li>
                <li>Level-Up Guide system introduced</li>
                <li>Normal Zakum, Horntail and Von Leon have become instance dungeons (multiple groups can enter difference instances at once)</li>
                <li>Default Attack Speed has been increased</li>
                <li>Character Select screen has been updated</li>
                <li><a href="http://www.southperry.net/showthread.php?t=58378" target="_blank" rel="noreferrer noopener">Maple BigWigs</a> (MVPs before MVPs?)</li>
            </ul>
        </LazyLoad>
    )
};

function ReturnToMasteria() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/ZOGgWiYxyBA" title="Return to Masteria"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20140301134906/http://maplestory.nexon.net/news/updates/update-notes/00Hc7/v-146-return-to-masteria-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>Masteria reverted to pre-alien invasion</li></ul>
        </LazyLoad>
    )
};

function ReZero() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/11025/47ryf6456.jpg" alt="ReZero"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/22516/updated-v-185-maplestory-x-re-zero-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=QMgBdbZyvIU" target="_blank" rel="noreferrer noopener">Meso Market</a> System introduced</li>
                <li>New event, <a href="https://www.youtube.com/watch?v=z-Ai8fFAyok" target="_blank" rel="noreferrer noopener">Mechanical Hearts</a></li>
            </ul>
        </LazyLoad>
    )
};

function Rise() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/0j_yBYNRex0" title="Rise"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/58015/updated-july-9-v-214-rise-promise-of-the-guardian-patch-notes"/></p>
                <p><TabLink url="https://maplestory.nexon.net/news/59255/v-215-rise-surge-of-power-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Adele" target="_blank" rel="noreferrer noopener">Adele</a></li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/16/MapIcon_Ristonia.png/revision/latest?cb=20200615074030" alt="MapIcon Ristonia" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ARistonia" target="_blank" rel="noreferrer noopener">Ristonia</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/MapIcon_Reverse_City.png/revision/latest?cb=20200611024631" alt="MapIcon Reverse City" width="32" height="34" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AReverse_City" target="_blank" rel="noreferrer noopener">Reverse City</a>
                </li>
                <li>
                    New area, <img src="https://maplestory.io/api/GMS/214/map/icon/YumYum" alt="https://maplestory.io/api/GMS/214/map/icon/YumYum" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Yum_Yum_Island" target="_blank" rel="noreferrer noopener">Yum Yum Island</a>
                </li>
                <li>
                    Beast Tamer Revamp, new Lv. 190 Hyper Skill <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/8f/Skill_All_Together%21_Critter_Crossing%21.png/revision/latest?cb=20200613000257" alt="Skill All Together! Critter Crossing!" width="32" height="32" /> <a href="https://maplestory.fandom.com/wiki/All_Together!_Critter_Crossing!" target="_blank" rel="noreferrer noopener">All Together! Critter Crossing!</a>
                </li>
                <li><strong>Kanna Skill Revamp, Kishin Shoukan effectiveness reduced</strong></li>
                <li>
                    Map Activities Revamp
                    <ul>
                        <li>New Elite Champions replace Messenger of Darkness</li>
                        <li>New runes added</li>
                        <li>New Pollo and Fritto mission added</li>
                    </ul>
                </li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2631697/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2631698/icon" alt=""/> Chat Emoticons introduced</li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/1202286/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/5680823/icon" alt=""/> <strong><a href="https://maplestory.wiki/GMS/214/item/1202286" target="_blank" rel="noreferrer noopener">Wild Totem</a> introduced</strong>
                </li>
                <li>New event, <a href="https://www.grandislibrary.com/event/burning-world" target="_blank" rel="noreferrer noopener">Burning World</a></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Guild Revamp, UI updated</strong></li>
                <li>Maple Guide Revamp, UI updated</li>
                <li>
                    <strong>Boss Practice mode no longer consumes </strong><img src="https://maplestory.io/api/GMS/214/item/2435767/icon" alt=""/>
                    <a href="https://maplestory.wiki/GMS/214/item/5133001" target="_blank" rel="noreferrer noopener"><strong>Buff Freezers</strong></a>
                </li>
                <li>Vanishing Journey and Chu Chu Island quest difficulty adjusted</li>
                <li>Reduced the price of Arcane Umbra Armor from 16 coins to 12</li>
                <li>Reduced the number of Arcane River Droplet Stone/Stone Origin Drop items required to exchange for Phantasma Coin/Arachno Coin from 10 to 9</li>
                <li>Slightly increased drop rates for Aracne River Droplet Stone and Stone Origin Droplet</li>
                <li>Improved certain Vanishing Journey and Chu Chu Island maps</li>
                <li>Mystic Gate daily limit reduced to 15 entries</li>
                <li><strong>Reduced the EXP required for Lv. 170 - 200 by 19%</strong></li>
                <li>You can no longer harvest or mine in maps that are 20 levels above your character's level</li>
                <li>Extended the length of the search window so that you can check the desired item's name in more detail when searching on the Auction House</li>
                <li>When using an Atmospheric effect that is not a Cash item, such as Blessing of the Guild, you can now use another Atmospheric effect after 2 seconds</li>
                <li>Owl of Minerva item has been replaced with a Buff Freezer Coupon as a reward for Beast Tamer's 'Guardian's Blessing' quest</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/4310289/icon" alt=""/> Gollux Coins are now instanced, they are no longer shared between party members</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2615000/icon" alt=""/> Basic Gollux Accessory Scrolls will now be sold in Randolf's NPC Shop for 40 Gollux Pennies</li>
                <li>Familiar System is now re-enabled</li>
            </ul>
        </LazyLoad>
    )
};

function RiseOfFellowship() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/2J9WqmA8U8c" title="Rise of Fellowship"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20111229204539/http://maplestory.nexon.net/News/News.aspx?boardNo=103&contentNo=00D9E&pageIndex=1"/></p>
                <p><TabLink url="https://shakar96.wordpress.com/2011/10/29/gms-v-1-02-rise-of-fellowship/"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>Monster Familiar System introduced</strong></li>
                <li>
                    New event, Sidekick
                    <ul>
                        <li>Provided temporary stat and level increase effect based on the higher level player’s level</li>
                        <li>Both receive bonus EXP like party bonus EXP system</li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function RisingHeroesElite() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/SrjCkviN1yg" title="Rising Heroes"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2713/v-150-rising-heroes-elite-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/2714/v-151-rising-heroes-echoes-of-darkness-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Shade" target="_blank" rel="noreferrer noopener">Shade</a></li>
                <li>
                    New area, <img class="" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c8/MapIcon_foxvillage.png/revision/latest?cb=20141217120807" alt="MapIcon foxvillage" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Vulpes" target="_blank" rel="noreferrer noopener">Fox Point Village</a> (Vulpes)
                </li>
                <li>New dungeon, <a href="https://strategywiki.org/wiki/MapleStory/Tower_of_Oz" target="_blank" rel="noreferrer noopener">Tower of Oz</a></li>
                <li>Elite Monsters and Elite Bosses introduced</li>
                <li>
                    <img src="https://maplestory.io/api/GMS/214/item/2433943/icon" alt=""/><strong> <a href="https://maplestory.fandom.com/wiki/Spell_Trace" target="_blank" rel="noreferrer noopener">Spell Trace</a> System introduced</strong>
                </li>
                <li>Rune system introduced</li>
                <li>Combo EXP system introduced (Combo Kill + Multi Kill)</li>
                <li>Maple Guide introduced</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Party Matching system (when entering a map with another character in the similar level range, a party invite will appear)</li>
                <li>Ability Points (AP) limit increased from 999</li>
                <li>New Damage Effects available (Blade and Cascading)</li>
                <li>Inner Abilities revamped, honor levels deleted, honor exp to reset added</li>
                <li>Buddy List + Maple User List update, account buddies, nicknames</li>
                <li>Monster levels, HP, and EXP adjusted for Lv. 140 and lower</li>
                <li>Maps for Grandis, Golden Beach, and Fantasy Theme World added</li>
                <li>Regular Cabs on Victoria Island can now be used for free</li>
                <li>Silent Crusader starting level changed to Lv.90</li>
                <li>Set bonuses for some equipment below Lv. 100 added</li>
                <li>Graphical effect added to dropped equipment to display Potential rank</li>
                <li>Potential rank is shown on equipment tooltip before the potential is revealed</li>
                <li>Appraisal fees have been lowered for equipment Lv. 120 and lower</li>
                <li>Bonus Potential ranks now carry over during Transposition</li>
                <li>Entry limits and Entry Passes for harvesting areas have been removed</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/4021032/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/4021033/icon" alt=""/> Mana Crystals and Spell Essences now drop from monsters Lv. 70+</li>
                <li>
                    Multiple maps and Theme Dungeons closed for renovations
                    <ul>
                        <li>Korean Folk Town</li>
                        <li>The Cursed Forest (Lupin's Nest and the Forest of Evil Energy)</li>
                        <li>Nautilus Beach</li>
                        <li>Florina Beach</li>
                        <li>Omega Sector</li>
                        <li>Kerning Square</li>
                        <li>Mushroom Castle</li>
                        <li>Tera Forest and Neo City</li>
                        <li>Chryse</li>
                        <li>Ariant Coliseum</li>
                        <li>Spiegelmann’s Gonzo Gallery</li>
                        <li>Several field mini dungeons</li>
                        <li>Sakura Castle</li>
                        <li>Fight for Azwan - Hilla will remain accessible</li>
                    </ul>
                </li>
            </ul>
            <h3>New Cash Items</h3>
            <ul><li><img src="https://maplestory.io/api/GMS/210.1.1/item/5190009/icon" alt=""/> <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/5190009" target="_blank">Auto All Cure Skill</a></li></ul>
        </LazyLoad>
    )
};

function ShiningStar() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/9mtNLO5_544" title="Shining Star"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2720/v-157--shining-star-part-i-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/2723/v-158-shining-star-part-ii-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>Star Force System introduced</strong></li>
                <li>New Star Force maps added</li>
                <li>New area, <a href="https://maplestory.fandom.com/wiki/Category%3AStar_Planet" target="_blank" rel="noreferrer noopener">Star Planet</a></li>
                <li>
                    New equipment, <img src="https://maplestory.io/api/GMS/214/item/1462222/icon" alt=""/> Poisonic, <img src="https://maplestory.io/api/GMS/214/item/1462223/icon" alt=""/> Briser,
                    <img src="https://maplestory.io/api/GMS/214/item/1462224/icon" alt=""/> Jaihin, <img src="https://maplestory.io/api/GMS/214/item/1462226/icon" alt=""/> Royal Von Leon, and <img src="https://maplestory.io/api/GMS/214/item/1462225/icon" alt=""/> Utgard
                </li>
                <li>New boss equipment, <img src="https://maplestory.io/api/GMS/214/item/1022231/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1113149/icon" alt=""/></li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2048912/icon" alt=""/> Zero exclusive lucky item scrolls introduced (Necromancer and Royal Von Leon)</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2432946/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2433835/icon" alt=""/> Mix Hair Dyes added</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Easy mode Horntail introduced</li>
                <li>Certain items will no longer be dropped by Pink Bean (Old equipment and <img src="https://maplestory.io/api/GMS/214/item/1022144/icon" alt=""/>Chaos Pink Bean Mark)</li>
                <li>Evolution System Revamp (Current iteration)</li>
                <li>Maple Guide improved</li>
                <li>Blacklist system improved</li>
                <li>Offline status added</li>
                <li>New UI in Skill UI for allocating SP</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2431789/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/2431790/icon" alt=""/> Prices for Mastery Book 20 + 30 lowered and can be stacked now</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2434503/icon" alt=""/> Wence's Silent Crusade coin shop now sells Spell Traces</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2431872/icon" alt=""/> Maple Reward system introduced</li>
            </ul>
        </LazyLoad>
    )
};

function SpringIntoSummer() {
    return (
        <LazyLoad height={200} offset={100}>

            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/2285/150721_1100x225_springintosummer.jpg?width=500&height=102.27272727272727" alt="Spring Into Summer"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/2728/v-162-spring-into-summer-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>2x EXP Coupon Level Limit removed</strong></li>
                <li>Buff Event Notifier added for EXP &amp; Drop rate increase events</li>
            </ul>
        </LazyLoad>
    )
};

function StrangeStories() {
    return (
        <LazyLoad height={200} offset={100}>

            <Video src="https://www.youtube.com/embed/Ow0kqQI5v50" title="Strange Stories"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/17292/v-177-strange-stories-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/MapIcon_PL_AfterLand.png/revision/latest?cb=20181005120902" alt="MapIcon PL AfterLand" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:The_Afterlands" target="_blank" rel="noreferrer noopener">The Afterlands</a>
                </li>
                <li>Fishing System introduced</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>
                    <img src="/class-icons/common/maple-warrior.png" alt="Skill Maple Warrior" width="32" height="32" /> Maple Warrior type skill no longer has a cast delay
                </li>
                <li>Changed projectile skill logic, will search for new target if initial is gone, if no new enemies, projectile will disappear</li>
                <li>Majority of Return skills have cooldown set to 600 secs</li>
                <li>Added option to prevent item destruction during Star Force Enchantment</li>
                <li>Removed Star Planet</li>
                <li>Removed Arrow and Key drops from mobs</li>
                <li>Added timer to skill icons for skill cooldowns</li>
                <li>Added option to sell items to NPC shops via right-clicking</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/1190513/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1190550/icon" alt=""/><strong> Emblems for all classes</strong></li>
                <li>Added party-play zones</li>
                <li>Wedding system revamped</li>
                <li>Revamped Maple Rewards items</li>
            </ul>
        </LazyLoad>
    )
};

function SwordArtOnline() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="https://nxcache.nexon.net/spotlight/286/00ES3-287def68-87c4-480b-9a7d-e8f0ceb0c6f7.jpg" alt="Sword Art Online"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20141020150440/http://maplestory.nexon.net/news/updates/update-notes/00I2J/v-154-sword-art-online-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>Event Dungeon, Sword Art Online</li>
                <li>Class revamp, <a href="https://maplestory.fandom.com/wiki/Blaze_Wizard" target="_blank" rel="noreferrer noopener">Blaze Wizard</a></li>
                <li><a href="https://www.youtube.com/watch?v=SlOeKzH4GQ0" target="_blank" rel="noreferrer noopener">Beauty Salon</a> system introduced</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Party Search menu merged into Maple User List menu (Friends List)</li>
                <li>Boss Tab added to Maple User List menu</li>
                <li>Boss Entry level changed slightly (for Horntail, Von Leon, Arkarium, Pink Bean, Magnus)</li>
                <li>World Selection screen UI updated</li>
                <li><strong>Skill Voice Volume option added</strong></li>
            </ul>
        </LazyLoad>
    )
};

function Tempest() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/xXcsA0GC7c0" title="Tempest"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20130112002429/http://maplestory.nexon.net/news/updates/update-notes/00Fcq/v-126-tempest-angelic-buster-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>
                    New class, <a href="https://maplestory.fandom.com/wiki/Luminous" target="_blank" rel="noreferrer noopener">Luminous</a>, <a href="https://maplestory.fandom.com/wiki/Kaiser" target="_blank" rel="noreferrer noopener">Kaiser</a>, <a href="https://maplestory.fandom.com/wiki/Angelic_Buster" target="_blank" rel="noreferrer noopener">Angelic Buster</a>
                </li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/MapIcon_Pantheon.png/revision/latest?cb=20120720131338" alt="MapIcon Pantheon" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Pantheon" target="_blank" rel="noreferrer noopener">Pantheon</a>,
                    <img class="" src="https://vignette.wikia.nocookie.net/maplestory/images/3/3a/MapIcon_helisium.png/revision/latest?cb=20120801081548" alt="MapIcon helisium" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Category%3AHeliseum" target="_blank" rel="noreferrer noopener">Heliseum</a>
                </li>
                <li>
                    New boss, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fc/MapIcon_Magnus.png/revision/latest?cb=20141124064756" alt="MapIcon Magnus" width="38" height="38" /> <a href="https://maplestory.fandom.com/wiki/Magnus" target="_blank" rel="noreferrer noopener">Magnus</a>
                </li>
                <li>
                    New items, <img src="https://maplestory.io/api/GMS/214/item/1102481/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1072743/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/1132174/icon" alt=""/> Tyrant capes, shoes and
                    belts
                </li>
                <li><strong>Hyper Skills introduced (Aran, Evan, Mercedes, Phantom, Luminous, Kaiser)</strong></li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>3rd job changed from Lv. 70 to 60</strong></li>
                <li><strong>4th job changed from Lv. 120 to 100</strong></li>
            </ul>
        </LazyLoad>
    )
};

function TuneUp() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="http://nxcache.nexon.net/umbraco/12433/170822ip1100tu.jpg" alt="Tune Up"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/24928/v-188-tune-up-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li>Auction House, “List Again” feature added</li>
                <li>Certain UI screens become semi-transparent when your character goes into battle</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/3080014/icon" alt=""/> You can use two chair bags instead of just one</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2435719/icon" alt=""/> You can disassemble multiple nodes at once</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2435719/icon" alt=""/> You can cancel Nodestone animation by pressing the ESC key</li>
                <li>You can change pages in V Matrix UI with the mouse wheel</li>
                <li>Tot’s Know-How removed and replaced with a different system</li>
                <li>Many consumable items have their max stack count increased to 3,000</li>
                <li><img src="https://maplestory.io/api/GMS/214/item/2434559/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/2310000" target="_blank" rel="noreferrer noopener">Owl of Minerva</a> is now permanent instead of durational</li>
                <li>Two new skin colors added (Elf tone and Clay tone) to character creation</li>
                <li>Damage Skin storage system can now store up to 35 damage skins, you can also preview them by hovering over the damage skin icon</li>
                <li>Monster Life revamped (new monsters added, other quality of life changes)</li>
                <li>Cross World Party Quest Revamp (QoL changes)</li>
                <li>Surprise Missions requirements changed slightly</li>
                <li>HP &amp; EXP rates of Elite Bosses Lv.100 and below reduced, for Lv.200 and above, they are increased</li>
                <li>
                    Max Combo increased to 9,999
                    <ul>
                        <li>Combos remain after fighting Elite Bosses, Pollo Frito, and Inferno Wolf</li>
                    </ul>
                </li>
                <li>
                    More options for screenshots available
                    <ul>
                        <li>Burst, Auto</li>
                    </ul>
                </li>
                <li>Picture Mode added</li>
                <li>For Root Abyss, if the party leader attempts to enter, all party members will enter at the same time</li>
                <li>Change Region button added to switch regions</li>
                <li>Special Royal Hair and Face coupons can be used on your Androids</li>
                <li>Hard Mode Hilla can be fought in a party of 1</li>
                <li>
                    Changes to Item Drop Rate formula
                    <ul>
                        <li>Item drop effect will only be partially applied to certain items, quest items, and event items</li>
                        <li>Nodestone drop rate has been increased</li>
                        <li>Legion's Luck and Wealth Acquisition Potion effects have been increased</li>
                        <li>Adjusted how Item Drop Rate increase was only being applied in a certain order but now will be applied at the same time</li>
                    </ul>
                </li>
            </ul>
        </LazyLoad>
    )
};

function Unleashed() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/I-6SA3pTFY8" title="Unleashed"/>
            <div className="repository-md-container">
                <p><TabLink url="http://www.southperry.net/showthread.php?t=67316"/></p>
                <p><TabLink url="https://web.archive.org/web/20130629070505/http://maplestory.nexon.net/news/updates/update-notes/00G39/v-135-monster-life-update-notes"/></p>
                <p><TabLink url="https://web.archive.org/web/20130812143302/http://maplestory.nexon.net/news/updates/update-notes/00GyZ/v-139-unleashed-demon-avenger-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li>New class, <a href="https://maplestory.fandom.com/wiki/Xenon" target="_blank" rel="noreferrer noopener">Xenon</a>, <a href="https://maplestory.fandom.com/wiki/Demon" target="_blank" rel="noreferrer noopener">Demon Avenger</a></li>
                <li>New equipment, Terminus, Sovereign, Fairy, Snowstorm</li>
                <li><a href="https://maplestory.fandom.com/wiki/Monster_Life" target="_blank" rel="noreferrer noopener">Monster Life</a> System introduced</li>
                <li>
                    New area, <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/28/MapIcon_destructionPerion.png/revision/latest?cb=20130216143600" alt="MapIcon destructionPerion" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category:Gate_to_the_Future" target="_blank" rel="noreferrer noopener">Twilight Perion</a>
                </li>
                <li>
                    New training ground, <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/53/MapIcon_rootabyss.png/revision/latest?cb=20130112090645" alt="MapIcon rootabyss" width="38" height="38" />
                    <a href="https://maplestory.wiki/GMS/214/map/105200900" target="_blank" rel="noreferrer noopener">Neglected Garden</a> within Root Abyss
                </li>
                <li>
                    New Party Quest, <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/MapIcon_Tangyoon.png/revision/latest?cb=20130613064824" alt="MapIcon Tangyoon" width="34" height="34" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ACooking_with_Tangyoon" target="_blank" rel="noreferrer noopener">Cooking with Tangyoon</a>
                </li>
                <li>
                    New Party Quest, <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/fe/MapIcon_VisitorOSSS.png/revision/latest?cb=20101108092036" alt="MapIcon VisitorOSSS" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AAlien_Visitor" target="_blank" rel="noreferrer noopener">Alien Visitor</a>
                </li>
                <li>New Theme Dungeon, <a href="https://maplestory.fandom.com/wiki/Category%3AFantasy_Theme_World" target="_blank" rel="noreferrer noopener">Fantasy Theme World</a></li>
                <li>New Theme Dungeon, <a href="https://maplestory.fandom.com/wiki/Category%3ATwisted_Aqua_Road" target="_blank" rel="noreferrer noopener">Twisted Aqua Road</a></li>
                <li><img src="https://maplestory.io/api/GMS/214/item/3090000/icon" alt=""/> <a href="https://maplestory.fandom.com/wiki/Bits" target="_blank" rel="noreferrer noopener">Bits</a> System introduced</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>Level cap increased to 250</strong></li>
                <li>Damage cap increased from 999,999 to 50,000,000</li>
                <li>HP cap increased from 99,999 to 999,999</li>
                <li><strong>Link Skills Level 3 introduced</strong></li>
                <li>Meso cap increased</li>
                <li>Avoidability cap has been lowered from 100% to 90%</li>
                <li>Cash Shop EXP Coupons cannot be purchased by players above Lv.200</li>
                <li>Skill Inventory UI redesigned</li>
                <li>Equipment + Item Inventory UI combined and redesigned</li>
                <li>Character stat UI redesigned</li>
                <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/2/25/Skill_Legendary_Spirit.png/revision/latest?cb=20100111124341" alt="Skill Legendary Spirit" width="32" height="32" /> Legendary Spirit skill removed</li>
                <li>Hammer icon added to inventory to open Strengthen menu for scrolling and enhancing your equipment</li>
                <li>Revealing Hidden Potential changed to be accessible through inventory</li>
                <li>World Map UI redesigned</li>
            </ul>
        </LazyLoad>
    )
};

function VUpate() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/Fn6pi8AbdHM" tile="V"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/19553/v-179-v-5th-job-patch-notes"/></p>
                <p><TabLink url="http://maplestory.nexon.net/news/20186/updated-v-180-v-champions-patch-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul>
                <li><strong>5th Job Advancement introduced</strong></li>
                <li><strong>Auction House System introduced</strong></li>
                <li>
                    New area, Arcane River (<img src="https://vignette.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png/revision/latest?cb=20160819012324" alt="MapIcon Road of Vanishing" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AVanishing_Journey" target="_blank" rel="noreferrer noopener">Vanishing Journey</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png/revision/latest?cb=20160819012317" alt="MapIcon ChewChew" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3AChu_Chu_Island">Chu Chu Island</a>, <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png/revision/latest?cb=20160819012310" alt="MapIcon Lacheln" width="38" height="38" />
                    <a href="https://maplestory.fandom.com/wiki/Category%3ALachelein" target="_blank" rel="noreferrer noopener">Lachelein</a>)
                </li>
                <li>New boss, <a href="https://maplestory.fandom.com/wiki/Lucid" target="_blank" rel="noreferrer noopener">Lucid</a></li>
                <li>New equipment, <img src="https://maplestory.io/api/GMS/214/item/4310218/icon" alt=""/> Arcane Umbra set</li>
            </ul>
            <h3>New Features + Changes</h3>
            <ul>
                <li><strong>UI redesigned</strong></li>
                <li><strong>EXP required to level up for certain levels of 200 have decreased</strong></li>
                <li>Monster Collection for Arcane River added</li>
                <li><strong>Damage cap will now go up to 99,999,999 (Damage cap removed)</strong></li>
                <li>Stats UI reorganized</li>
                <li>Character Name Change system added</li>
                <li>Critical Damage, Status Resistance and DEF stat formula reorganized</li>
                <li>Hit-rate logic reorganized</li>
                <li>Monster EXP rates reorganized, amount gained changes based on current level and monster level differences</li>
                <li>Monster bind related skills logic changed</li>
                <li>Dimensional Mirror UI redesigned</li>
                <li>World Map UI adjusted</li>
                <li>Lapis/Lazuli 8 added</li>
                <li>Certain maps monster regen rate increased</li>
                <li>Burning Fields stage increase speed increased</li>
                <li>CRA bosses can now be fought in channel 13,14,15</li>
            </ul>
        </LazyLoad>
    )
};

function WorldsUnite() {
    return (
        <LazyLoad height={200} offset={100}>
            <Video src="https://www.youtube.com/embed/d8nxPRPwJgs" title="Worlds Unite"/>
            <div className="repository-md-container">
                <p><TabLink url="http://maplestory.nexon.net/news/52421/updated-august-28-v-207-worlds-unite-patch-notes"/></p>
            </div>
            <h3>New Features + Changes</h3>
            <ul>
                <li>New world: <strong>Elysium</strong> (Broa, Khaini, Galicia, Renegades, Arcania, Zenith, El Nido and Demethos combined)</li>
                <li>New world: <strong>Aurora</strong> (Windia, Mardia, Yellonde, Bellocan, Chaos, Kradia and Nova combined)</li>
                <li>Maximum character slots increased to 50</li>
            </ul>
        </LazyLoad>
    )
};

function YearOfTheSnake() {
    return (
        <LazyLoad height={200} offset={100}>
            <img className="repository-image" src="https://mapleglobalnews.files.wordpress.com/2013/02/v-128-background.png" alt="Year of the Snake"/>
            <div className="repository-md-container">
                <p><TabLink url="https://web.archive.org/web/20130301225734/http://maplestory.nexon.net/news/updates/update-notes/00FiB/v-128-year-of-the-snake-update-notes"/></p>
            </div>
            <h3>New Content</h3>
            <ul><li>Tot’s Know-How System introduced</li></ul>
            <h3>New Cash Items</h3>
            <ul>
                <li>
                    <img src="https://maplestory.io/api/GMS/210.1.1/item/5820000/icon" alt=""/><img src="https://maplestory.io/api/GMS/210.1.1/item/5500010/icon" alt=""/>
                    <a rel="noreferrer noopener" href="https://maplestory.wiki/GMS/210.1.1/item/5820000" target="_blank">Potion Pot</a> introduced
                </li>
            </ul>
        </LazyLoad>
    )
};

export default UpdateTimelineOverview
