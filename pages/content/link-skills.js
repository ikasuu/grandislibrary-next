import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { linkSkills } from '../../special/SiteValues';
import { SingleSkill } from '../../components/class-overview/SingleSkill';
import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';
import BannerAdOne, { BannerAdThree, BannerAdTwo, VideoAd, StickyAd } from '../../components/Ads';

function LinkSkills() {
    return (
      <ContentPage className="repository-md-container">
        <Head>
            <title>Link Skills | MapleStory | Grandis Library</title>
            <meta content={"An explanation of what Link Skills are, a list and explanation of how each classes' Link Skill functions, and several example of possible Link Skill builds for training, bossing, or both."} name="description"/>
        </Head>
        <ContentTitle>Link Skills</ContentTitle>
        <StickyAd/>
        <p><img className="repository-image" src="/images/info/link-skill-ui.png" alt="Link Manager UI"/></p>
        <p>Link Skills are unique to each class and can be given to your other characters on the same World. Link Skills mostly come as passives but there are a few Active Link Skills too</p>
        <p>Once a character reaches Level 70, they can share their Link Skill with another character. When you Share your Link Skill, both characters will gain the effect of the Link Skill. Sometimes Link Skills may have different effects for the character with the linked version. Link Skills grow stronger at Level 120 (Skill Level 2) and most grow stronger again at Level 210 (Skill Level 3). Some Link Skills can stack increasing the strength of the Link Skill by linking the same Link Skill multiple times from different characters of the same class group</p>
        <p>A character can have up to 3 Presets which they can assign 12 Link Skills (13 if considering themselves) at one time and each Link Skill can only be linked to one character at a time. Each Link Skill can be linked to a different character up to 10 times per day. The first 4 times are free however and will cost Mesos afterwards</p>
        <p>For Link Skills that stack, linking them will automatically stack them together. Although, the class must be unique for the Link Skills to stack (ex. cannot be two Dark Knights, must be a Dark Knight and a Paladin or Hero)</p>
        <p>Some advice in choosing Link Skills, choose ones that provide stats you need. For example, I am trying to reach 100% Crit Chance, I try to get as many %Crit Chance Link Skills to help me reach that goal. There are also other essential stats that are useful for all classes such as %Damage, %Boss Damage or %Ignore DEF. Other important Link Skills include ones that increase the amount of EXP gained</p>
        <p><img className="repository-image" src="/images/info/link-manager.png" alt="Link Manager Skill"/></p>
        <p>To manage your Link Skills, open up your Skills Tab UI, and click into your Beginner skills. There you will find a skill called Link Manager</p>
        <strong>Note:</strong> If you do not see your Link Skill in the Link Manager, you may have to accept a quest in the Lightbulb tab on the left-hand side of the screen. If you still do not see it, try relogging
        <h3 id="top">Quick Jumps</h3>
        <ul>
          <li><Link smooth href="#explorers" scroll>Explorers</Link></li>
          <li><Link smooth href="#cygnusknights" scroll>Cygnus Knights</Link></li>
          <li><Link smooth href="#heroes" scroll>Heroes</Link></li>
          <li><Link smooth href="#resistance" scroll>Resistance</Link></li>
          <li><Link smooth href="#nova" scroll>Nova</Link></li>
          <li><Link smooth href="#sengoku" scroll>Sengoku</Link></li>
          <li><Link smooth href="#flora" scroll>Flora</Link></li>
          <li><Link smooth href="#anima" scroll>Anima</Link></li>
          <li><Link smooth href="#shine" scroll>Shine</Link></li>
          <li><Link smooth href="#jianghu" scroll>Jianghu</Link></li>
          <li><Link smooth href="#other" scroll>Other</Link></li>
          <li><Link smooth href="#notable" scroll>Notable Link Skills</Link></li>
          <li><Link smooth href="#builds" scroll>Examples of Link Skill Builds</Link></li>
        </ul>
        <VideoAd/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="explorers">Explorers</h2>
        <hr/>
        <p><strong>[Hero, Paladin and Dark Knight]</strong></p>
        <SingleSkill skillData={linkSkills.expWarrior}/>
        <hr/>
        <p><strong>[Bishop, Arch Mage (Ice, Lightning) and Arch Mage (Fire, Poision)]</strong></p>
        <SingleSkill skillData={linkSkills.expMage}/>
        <hr/>
        <p><strong>[Bow Master, Marksman and Pathfinder]</strong></p>
        <SingleSkill skillData={linkSkills.expArcher}/>
        <hr/>
        <p><strong>[Shadower, Night Lord, and Dual Blade]</strong></p>
        <SingleSkill skillData={linkSkills.expThief}/>
        <hr/>
        <p><strong>[Corsair, Buccaneer, and Cannoneer]</strong></p>
        <SingleSkill skillData={linkSkills.expPirate}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="cygnusknights">Cygnus Knights</h2>
        <hr/>
        <p><strong>[Dawn Warrior, Wind Archer, Thunder Breaker, Night Walker, and Blaze Wizard]</strong></p>
        <SingleSkill skillData={linkSkills.cygnusKnights}/>
        <hr/>
        <p><strong>[Mihile]</strong></p>
        <SingleSkill skillData={linkSkills.mihile}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="heroes">Heroes</h2>
        <hr/>
        <p><strong>[Mercedes]</strong></p>
        <SingleSkill skillData={linkSkills.mercedes}/>
        <hr/>
        <p><strong>[Aran]</strong></p>
        <SingleSkill skillData={linkSkills.aran}/>
        <hr/>
        <p><strong>[Phantom]</strong></p>
        <SingleSkill skillData={linkSkills.phantom}/>
        <hr/>
        <p><strong>[Luminous]</strong></p>
        <SingleSkill skillData={linkSkills.luminous}/>
        <hr/>
        <p><strong>[Evan] </strong></p>
        <SingleSkill skillData={linkSkills.evan}/>
        <hr/>
        <p><strong>[Shade] </strong></p>
        <SingleSkill skillData={linkSkills.shade}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="resistance">Resistance</h2>
        <hr/>
        <p><strong>[Wild Hunter, Battle Mage, Mechanic, and Blaster]</strong></p>
        <SingleSkill skillData={linkSkills.resistance}/>
        <hr/>
        <p><strong>[Demon Avenger]</strong></p>
        <SingleSkill skillData={linkSkills.demonAvenger}/>
        <hr/>
        <p><strong>[Demon Slayer]</strong></p>
        <SingleSkill skillData={linkSkills.demonSlayer}/>
        <hr/>
        <p><strong>[Xenon]</strong></p>
        <SingleSkill skillData={linkSkills.xenon}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="nova">Nova</h2>
        <hr/>
        <p><strong>[Angelic Buster]</strong></p>
        <SingleSkill skillData={linkSkills.angelicBuster}/>
        <hr/>
        <p><strong>[Cadena] </strong></p>
        <SingleSkill skillData={linkSkills.cadena}/>
        <hr/>
        <p><strong>[Kaiser] </strong></p>
        <SingleSkill skillData={linkSkills.kaiser}/>
        <p><strong>[Kain] </strong></p>
        <SingleSkill skillData={linkSkills.kain}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="sengoku">Sengoku</h2>
        <hr/>
        <p><strong>[Hayato] </strong></p>
        <SingleSkill skillData={linkSkills.hayato}/>
        <hr/>
        <p><strong>[Kanna] </strong></p>
        <SingleSkill skillData={linkSkills.kanna}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="flora">Flora</h2>
        <hr/>
        <p><strong>[Ark] </strong></p>
        <SingleSkill skillData={linkSkills.ark}/>
        <hr/>
        <p><strong>[Illium] </strong></p>
        <SingleSkill skillData={linkSkills.illium}/>
        <hr/>
        <p><strong>[Adele] </strong></p>
        <SingleSkill skillData={linkSkills.adele}/>
        <hr/>
        <p><strong>[Khali] </strong></p>
        <SingleSkill skillData={linkSkills.khali}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="anima">Anima</h2>
        <hr/>
        <p><strong>[Hoyoung]</strong></p>
        <SingleSkill skillData={linkSkills.hoyoung}/>
        <hr/>
        <p><strong>[Lara]</strong></p>
        <SingleSkill skillData={linkSkills.lara}/>
        <hr/>
        <h2 id="shine">Shine</h2>
        <hr/>
        <p><strong>[Sia Astelle] </strong></p>
        <SingleSkill skillData={linkSkills.siaAstelle}/>
        <hr/>
        <h2 id="jianghu">Jianghu</h2>
        <hr/>
        <p><strong>[Lynn] </strong></p>
        <SingleSkill skillData={linkSkills.lynn}/>
        <hr/>
        <p><strong>[Mo Xuan]</strong></p>
        <SingleSkill skillData={linkSkills.moxuan}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <h2 id="other">Other</h2>
        <hr/>
        <p><strong>[Kinesis]</strong></p>
        <SingleSkill skillData={linkSkills.kinesis}/>
        <hr/>
        <p><strong>[Zero] </strong></p>
        <SingleSkill skillData={linkSkills.zero}/>
        <hr/>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <BannerAdOne/>
        <h2 id="notable">Notable Link Skills:</h2>
        <p>Some Link Skills may fit multiple roles, for example, Lynn's Link Skill <img src="/class-icons/link-skills/spirit-guide-blessing.png" alt="Skill Spirit Guide Blessing"/> provides %Boss Damage, %Crit Rate and %Max HP/MP</p>
        <h3>For Damage:</h3>
        <ul>
          <li><img src="/class-icons/link-skills/solus.png" alt="Skill Solus"/> <strong>[Ark] </strong>- %Damage</li>
          <li><img src="/class-icons/link-skills/wild-rage.png" alt="Skill Wild Rage"/> <strong>[Demon Avenger] </strong>- %Damage</li>
          <li>
              <img src="/class-icons/link-skills/thiefs-cunning.png" alt="Skill Thief's Cunning"/> <strong>[Explorer Thieves] </strong>- %Damage
              (for classes with debuffs)
          </li>
          <li>
              <img src="/class-icons/link-skills/pirate-blessing.png" alt="Skill Pirate Blessing"/> <strong>[Explorer Pirates] </strong>- All Stats
              (affected by %Stat)
          </li>
          <li><img src="/class-icons/link-skills/tide-of-battle.png" alt="Skill Tide of Battle"/> <strong>[Illium] </strong>- %Damage</li>
          <li><img src="/class-icons/link-skills/elementalism.png" alt="Skill Elementalism"/> <strong>[Kanna] </strong>- %Damage</li>
          <li>
              <img src="/class-icons/link-skills/judgment.png" alt="Skill Judgment (Kinesis)"/> <strong>[Kinesis] </strong>- %Crit
              Damage
          </li>
          <li><img src="/class-icons/link-skills/hybrid-logic.png" alt="Skill Hybrid Logic"/> <strong>[Xenon] </strong>- %All Stat</li>
        </ul>
        <h3>For Bossing + Ignore DEF:</h3>
        <ul>
          <li>
              <img src="/class-icons/link-skills/terms-and-conditions.png" alt="Skill Terms and Conditions"/>
              <strong>[Angelic Buster] </strong>- For Burst skills
          </li>
          <li>
            <img src="/class-icons/link-skills/noble-fire.png" alt="Skill Noble Fire"/>
            <strong>[Adele] </strong>- %Boss Damage
          </li>
          <li>
              <img src="/class-icons/link-skills/spirit-guide-blessing.png" alt="Skill Spirit Guide Blessing"/> <strong>[Lynn] </strong>- %Boss Damage, %Crit
              Rate and %Max HP/MP
          </li>
          <li>
              <img src="/class-icons/link-skills/qi-cultivation.png" alt="Skill Qi Cultivation"/> <strong>[Mo Xuan] </strong>- %Boss Damage
          </li>
          <li>
              <img src="/class-icons/link-skills/cygnus-blessing.png" alt="Skill Cygnus Blessing"/> <strong>[Cygnus Knights] </strong>- Useful for
              Abnormal Status Resistance and slight damage boost
          </li>
          <li>
              <img src="/class-icons/link-skills/fury-unleashed.png" alt="Skill Fury Unleashed"/> <strong>[Demon Slayer] </strong>- %Boss Damage
          </li>
          <li>
              <img src="/class-icons/link-skills/empirical-knowledge.png" alt="Skill Empirical Knowledge"/> <strong>[Explorer Mages] </strong>-
              %Ignore DEF
          </li>
          <li><img src="/class-icons/link-skills/light-wash.png" alt="Skill Light Wash"/> <strong>[Luminous] </strong>- %Ignore DEF</li>
          <li>
              <img src="/class-icons/link-skills/knights-watch.png" alt="Skill Knight's Watch"/><strong> [Mihile] </strong>- Useful for Abnormal Status Resistance

          </li>
          <li>
              <img src="/class-icons/link-skills/spirit-of-freedom.png" alt="Skill Spirit of Freedom"/> <strong>[Resistance] </strong>- iFrames
              after reviving
          </li>
          <li>
              <img src="/class-icons/link-skills/close-call.png" alt="Skill Close Call"/> <strong>[Shade] </strong>- Survivability, chance to not die from
              fatal attacks
          </li>
          <li><img src="/class-icons/link-skills/rhinnes-blessing.png" alt="Skill Rhinne's Blessing"/> <strong>[Zero] </strong>- %Ignore DEF</li>
        </ul>
        <h3>For Training:</h3>
        <ul>
          <li>
              <img src="/class-icons/link-skills/combo-kill-blessing.png" alt="Skill Combo Kill Blessing"/> <strong>[Aran] </strong>- Useful for
              pre-200
          </li>
          <li>
              <img src="/class-icons/link-skills/unfair-advantage.png" alt="Skill Unfair Advantage"/> <strong>[Cadena] </strong>- Increased %Damage
              to lower level enemies + enemies with Abnormal Statuses
          </li>
          <li>
              <img src="/class-icons/link-skills/rune-persistence.png" alt="Skill Rune Persistence"/> <strong>[Evan] </strong>- Useful all levels
              especially pre-200
          </li>
          <li>
              <img src="/class-icons/link-skills/bravado.png" alt="Skill Bravado"/> <strong>[Hoyoung] </strong>- Useful if you need a small boost to
              one-shot enemies
          </li>
          <li>
              <img src="/class-icons/link-skills/iron-will.png" alt="Skill Iron Will (Kaiser)"/> <strong>[Kaiser] </strong>- For
              pre-200 if you die a lot
          </li>
          <li>
              <img src="/class-icons/link-skills/elven-blessing.png" alt="Skill Elven Blessing (Linked)"/>
              <strong>[Mercedes] </strong>- Best results for training Lv. 200+
          </li>
        </ul>
        <h3>For Low Crit Rate:</h3>
        <ul>
          <li>
              <img src="/class-icons/link-skills/adventurers-curiosity.png" alt="Skill Adventurer's Curiosity"/>
              <strong>[Explorer Archers] - </strong>Up to 10%
          </li>
          <li><img src="/class-icons/link-skills/spirit-guide-blessing.png" alt="Skill Spirit Guide Blessing"/> <strong>[Lynn] </strong>- Up to 10%</li>
          <li><img src="/class-icons/link-skills/phantom-instinct.png" alt="Skill Phantom Instinct"/> <strong>[Phantom] </strong>- Up to 20%</li>
        </ul>
        {/*<div><Link smooth href="#top" scroll>Go to top</Link></div> */}
        <BannerAdTwo/>
        <h2 id="builds">Examples of Link Skill Builds:</h2>
        <h3>Training:</h3>
        <p><img src="/class-icons/link-skills/combo-kill-blessing.png" alt="Skill Combo Kill Blessing"/> <img src="/class-icons/link-skills/solus.png" alt="Skill Solus"/> <img src="/class-icons/link-skills/unfair-advantage.png" alt="Skill Unfair Advantage"/> <img src="/class-icons/link-skills/wild-rage.png" alt="Skill Wild Rage"/> <img src="/class-icons/link-skills/rune-persistence.png" alt="Skill Rune Persistence"/> <img src="/class-icons/link-skills/adventurers-curiosity.png" alt="Skill Adventurer's Curiosity"/> <img src="/class-icons/link-skills/thiefs-cunning.png" alt="Skill Thief's Cunning"/> <img src="/class-icons/link-skills/pirate-blessing.png" alt="Skill Pirate Blessing"/> <img src="/class-icons/link-skills/bravado.png" alt="Skill Bravado"/> <img src="/class-icons/link-skills/rhinnes-blessing.png" alt="Skill Rhinne's Blessing"/> <img src="/class-icons/link-skills/elementalism.png" alt="Skill Elementalism"/> <img src="/class-icons/link-skills/elven-blessing.png" alt="Skill Elven Blessing (Linked)"/></p>
        <p>(Aran, Ark, Cadena, Demon Avenger, Evan, Explorer Archer, Explorer Thief, Explorer Pirate, Hoyoung, Zero, Kanna, Mercedes)</p>
        <p>Rationale: Increased EXP Gain, Damage, and Damage Reduction if required. If you feel that you do not need extra survivability, you can swap out some Link Skills for more damage or other stats like %Crit Rate</p>
        <p>Other options: <img src="/class-icons/link-skills/spirit-guide-blessing.png" alt="Skill Spirit Guide Blessing"/> (Crit Rate, Max HP/MP), <img src="/class-icons/link-skills/cygnus-blessing.png" alt="Skill Cygnus Blessing"/> (Damage), <img src="/class-icons/link-skills/keen-edge.png" alt="Skill Keen Edge"/> (Damage), <img src="/class-icons/link-skills/tide-of-battle.png" alt="Skill Tide of Battle"/> (Damage), <img src="/class-icons/link-skills/iron-will.png" alt="Skill Iron Will (Kaiser)"/> (Max HP), <img src="/class-icons/link-skills/phantom-instinct.png" alt="Skill Phantom Instinct"/> (Crit Rate), <img src="/class-icons/link-skills/hybrid-logic.png" alt="Skill Hybrid Logic"/> (Damage) (Lynn, Cygnus Knights, Hayato, Illium, Kaiser, Phantom, and Xenon)</p>
        <h3>Bossing:</h3>
        <p><img src="/class-icons/link-skills/terms-and-conditions.png" alt="Skill Terms and Conditions"/> <img src="/class-icons/link-skills/qi-cultivation.png" alt="Skill Qi Cultivation"/> <img src="/class-icons/link-skills/spirit-guide-blessing.png" alt="Skill Spirit Guide Blessing"/> <img src="/class-icons/link-skills/close-call.png" alt="Skill Close Call"/> <img src="/class-icons/link-skills/fury-unleashed.png" alt="Skill Fury Unleashed"/> <img src="/class-icons/link-skills/pirate-blessing.png" alt="Skill Pirate Blessing"/> <img src="/class-icons/link-skills/empirical-knowledge.png" alt="Skill Empirical Knowledge"/> <img src="/class-icons/link-skills/thiefs-cunning.png" alt="Skill Thief's Cunning"/> <img src="/class-icons/link-skills/spirit-of-freedom.png" alt="Skill Spirit of Freedom"/> <img src="/class-icons/link-skills/judgment.png" alt="Skill Judgment (Kinesis)"/> <img src="/class-icons/link-skills/light-wash.png" alt="Skill Light Wash"/> <img src="/class-icons/link-skills/phantom-instinct.png" alt="Skill Phantom Instinct"/></p>
        <p>(Angelic Buster, Mo Xuan, Lynn, Shade, Demon Slayer, Explorer Pirate, Explorer Mage, Explorer Thief, Resistance, Kinesis, Luminous, Phantom)</p>
        <p>Rationale: Increased damage, %Crit Rate (to get 100% if needed), and %Ignore DEF. Other Link Skills are used for survivability</p>
        <p>Other options: <img src="/class-icons/link-skills/adventurers-curiosity.png" alt="Skill Adventurer's Curiosity"/> (Crit Rate), <img src="/class-icons/link-skills/solus.png" alt="Skill Solus"/> (Damage), <img src="/class-icons/link-skills/wild-rage.png" alt="Skill Wild Rage"/> (Damage), <img src="/class-icons/link-skills/invincible-belief.png" alt="Skill Invincible Belief"/> (Damage), <img src="/class-icons/link-skills/tide-of-battle.png" alt="Skill Tide of Battle"/> (Damage), <img src="/class-icons/link-skills/knights-watch.png" alt="Skill Knight's Watch"/> (Abnormal Status Resistance), <img src="/class-icons/link-skills/hybrid-logic.png" alt="Skill Hybrid Logic"/> (Damage), <img src="/class-icons/link-skills/cygnus-blessing.png" alt="Skill Cygnus Blessing"/> (Damage), <img src="/class-icons/link-skills/rhinnes-blessing.png" alt="Skill Rhinne's Blessing"/> (%Ignore DEF) (Explorer Archer, Ark, Demon Avenger, Explorer Warrior, Illium, Mihile, Xenon, Cygnus Knights, and Zero)</p>
        <BannerAdThree/>
        <hr/>
        <p>For more info on Link Skills check out:</p>
        <p><a href="https://maplestorywiki.net/w/Link_Skill">https://maplestorywiki.net/w/Link_Skill</a></p>
        <p>For help optimizing your Link Skills check out:</p>
        <p><a href="https://www.youtube.com/watch?v=zT1jX_tnQjM">https://www.youtube.com/watch?v=zT1jX_tnQjM</a></p>
        <h4>Credits:</h4>
        <p><strong>Skill Icons + Info</strong>: MapleWiki</p>
      </ContentPage>
    )
}

export default LinkSkills
