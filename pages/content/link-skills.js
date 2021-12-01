import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { linkSkills } from '../../special/SiteValues';
import { SingleSkill } from '../../components/class-overview/SingleSkill';
import { ContentPage } from '../../components/repository/RepositoryPage';
import { ContentTitle } from '../../components/Page';

function LinkSkills() {
    return (
      <ContentPage className="repository-md-container">
        <Head>
            <title>Link Skill | Grandis Library</title>
            <meta content={"An explanation of Link Skills and a list of all Link Skills and their effects"} name="description"/>
        </Head>
        <ContentTitle>Link Skills</ContentTitle>
        <p><img className="repository-image" src="https://i.imgur.com/MuIiQA4.png" alt="Link Manager UI"/></p>
        <p>Link Skills are unique to each class and can be given to your other characters on the same world. Link Skills mostly come as passives but there are a few Active Link Skills too</p>
        <p>Once a character reaches Level 70, they can share their Link Skill with another character. When you Share your Link Skill, both characters will gain the effect of the Link Skill. Sometimes Link Skills may have different effects for the character with the linked version. Link Skills grow stronger at Level 120 (Skill Level 2) and most grow stronger again at Level 210 (Skill Level 3). Some Link Skills can stack increasing the strength of the Link Skill by linking the same Link Skill multiple times from different characters of the same class group</p>
        <p>A character can have up to 12 Link Skills (13 if considering themselves) linked to them at one time and each Link Skill can only be linked to one character at a time. Each Link Skill can be linked to a different character up to 10 times per day. The first 4 times are free however and will cost Mesos afterwards</p>
        <p>For Link Skills that stack, linking them will automatically stack them together. Although, the class must be unique for the Link Skills to stack (ex. cannot be two Dark Knights, must be a Dark Knight and a Paladin or Hero)</p>
        <p>Some advice in choosing Link Skills, choose ones that provide stats you need. For example, I am trying to reach 100% Crit Chance, I try to get as many %Crit Chance Link Skills to help me reach that goal. There are also other essential stats that are useful for all classes such as %Damage, %Boss Damage or %Ignore DEF. Other important Link Skills include ones that increase the amount of EXP gained</p>
        <p><img className="repository-image" src="https://i.imgur.com/waEl3bv.png" alt="Link Manager Skill"/></p>
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
          <li><Link smooth href="#other" scroll>Other</Link></li>
          <li><Link smooth href="#notable" scroll>Notable Link Skills</Link></li>
          <li><Link smooth href="#builds" scroll>Examples of Link Skill Builds</Link></li>
        </ul>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="explorers">Explorers</h2>
        <hr />
        <p><strong>[Hero, Paladin and Dark Knight]</strong></p>
        <SingleSkill skillData={linkSkills.expWarrior}/>
        <hr />
        <p><strong>[Bishop, Arch Mage (Ice, Lightning) and Arch Mage (Fire, Poision)]</strong></p>
        <SingleSkill skillData={linkSkills.expMage}/>
        <hr />
        <p><strong>[Bow Master, Marksman and Pathfinder]</strong></p>
        <SingleSkill skillData={linkSkills.expArcher}/>
        <hr />
        <p><strong>[Shadower, Night Lord, and Dual Blade]</strong></p>
        <SingleSkill skillData={linkSkills.expThief}/>
        <hr />
        <p><strong>[Corsair, Buccaneer, and Cannoneer]</strong></p>
        <SingleSkill skillData={linkSkills.expPirate}/>
        <hr />
        <p><strong>[Jett]</strong></p>
        <SingleSkill skillData={linkSkills.jett}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="cygnusknights">Cygnus Knights</h2>
        <hr />
        <p><strong>[Dawn Warrior, Wind Archer, Thunder Breaker, Night Walker, and Blaze Wizard]</strong></p>
        <SingleSkill skillData={linkSkills.cygnusKnights}/>
        <hr />
        <p><strong>[Mihile]</strong></p>
        <SingleSkill skillData={linkSkills.mihile}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="heroes">Heroes</h2>
        <hr />
        <p><strong>[Mercedes]</strong></p>
        <SingleSkill skillData={linkSkills.mercedes}/>
        <hr />
        <p><strong>[Aran]</strong></p>
        <SingleSkill skillData={linkSkills.aran}/>
        <hr />
        <p><strong>[Phantom]</strong></p>
        <SingleSkill skillData={linkSkills.phantom}/>
        <hr />
        <p><strong>[Luminous]</strong></p>
        <SingleSkill skillData={linkSkills.luminous}/>
        <hr />
        <p><strong>[Evan] </strong></p>
        <SingleSkill skillData={linkSkills.evan}/>
        <hr />
        <p><strong>[Shade] </strong></p>
        <SingleSkill skillData={linkSkills.shade}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="resistance">Resistance</h2>
        <hr />
        <p><strong>[Wild Hunter, Battle Mage, Mechanic, and Blaster]</strong></p>
        <SingleSkill skillData={linkSkills.resistance}/>
        <hr />
        <p><strong>[Demon Avenger]</strong></p>
        <SingleSkill skillData={linkSkills.demonAvenger}/>
        <hr />
        <p><strong>[Demon Slayer]</strong></p>
        <SingleSkill skillData={linkSkills.demonSlayer}/>
        <hr />
        <p><strong>[Xenon]</strong></p>
        <SingleSkill skillData={linkSkills.xenon}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="nova">Nova</h2>
        <hr />
        <p><strong>[Angelic Buster]</strong></p>
        <SingleSkill skillData={linkSkills.angelicBuster}/>
        <hr />
        <p><strong>[Cadena] </strong></p>
        <SingleSkill skillData={linkSkills.cadena}/>
        <hr />
        <p><strong>[Kaiser] </strong></p>
        <SingleSkill skillData={linkSkills.kaiser}/>
        <p><strong>[Kain] </strong></p>
        <SingleSkill skillData={linkSkills.kain}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="sengoku">Sengoku</h2>
        <hr />
        <p><strong>[Hayato] </strong></p>
        <SingleSkill skillData={linkSkills.hayato}/>
        <hr />
        <p><strong>[Kanna] </strong></p>
        <SingleSkill skillData={linkSkills.kanna}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="flora">Flora</h2>
        <hr />
        <p><strong>[Ark] </strong></p>
        <SingleSkill skillData={linkSkills.ark}/>
        <hr />
        <p><strong>[Illium] </strong></p>
        <SingleSkill skillData={linkSkills.illium}/>
        <hr />
        <p><strong>[Adele] </strong></p>
        <SingleSkill skillData={linkSkills.adele}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="other">Other</h2>
        <hr />
        <p><strong>[Beast Tamer] </strong></p>
        <SingleSkill skillData={linkSkills.beastTamer}/>
        <hr />
        <p><strong>[Hoyoung]</strong></p>
        <SingleSkill skillData={linkSkills.hoyoung}/>
        <hr />
        <p><strong>[Kinesis]</strong></p>
        <SingleSkill skillData={linkSkills.kinesis}/>
        <hr />
        <p><strong>[Zero] </strong></p>
        <SingleSkill skillData={linkSkills.zero}/>
        <hr />
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="notable">Notable Link Skills:</h2>
        <p>Some Link Skills may fit multiple roles, for example, Beast Tamer's Link Skill <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit"/> provides %Boss Damage, %Crit Rate and %Max HP/MP</p>
        <h3>For Damage:</h3>
        <ul>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" width="32" height="32" /> <strong>[Ark] </strong>- %Damage</li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" width="32" height="32" /> <strong>[Demon Avenger] </strong>- %Damage</li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" width="32" height="32" /> <strong>[Explorer Thieves] </strong>- %Damage
              (for classes with debuffs)
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" width="32" height="32" /> <strong>[Explorer Pirates] </strong>- All Stats
              (affected by %Stat)
          </li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle" width="32" height="32" /> <strong>[Illium] </strong>- %Damage</li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" width="32" height="32" /> <strong>[Kanna] </strong>- %Damage</li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" width="32" height="32" /> <strong>[Kinesis] </strong>- %Crit
              Damage
          </li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic" width="32" height="32" /> <strong>[Xenon] </strong>- %All Stat</li>
        </ul>
        <h3>For Bossing + Ignore DEF:</h3>
        <ul>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421" alt="Skill Terms and Conditions" width="32" height="32" />
              <strong>[Angelic Buster] </strong>- For Burst skills
          </li>
          <li><strong>[Adele] </strong>- %Boss Damage</li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" width="32" height="32" /> <strong>[Beast Tamer] </strong>- %Boss Damage, %Crit
              Rate and %Max HP/MP
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" width="32" height="32" /> <strong>[Cygnus Knights] </strong>- Useful for
              Abnormal Status Resistance and slight damage boost
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" width="32" height="32" /> <strong>[Demon Slayer] </strong>- %Boss Damage
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" width="32" height="32" /> <strong>[Explorer Mages] </strong>-
              %Ignore DEF
          </li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" width="32" height="32" /> <strong>[Luminous] </strong>- %Ignore DEF</li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" alt="Skill Knight's Watch" width="32" height="32" /><strong> [Mihile] </strong>- 100% Knockback
              Resistance buff for classes with &lt; 100% resistance
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" width="32" height="32" /> <strong>[Resistance] </strong>- iFrames
              after reviving
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" width="32" height="32" /> <strong>[Shade] </strong>- Utility, chance to not die from
              fatal attacks
          </li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" width="32" height="32" /> <strong>[Zero] </strong>- %Ignore DEF</li>
        </ul>
        <h3>For Training:</h3>
        <ul>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748" alt="Skill Combo Kill Blessing" width="32" height="32" /> <strong>[Aran] </strong>- Useful for
              pre-200
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" alt="Skill Unfair Advantage" width="32" height="32" /> <strong>[Cadena] </strong>- Increased %Damage
              to lower level enemies + enemies with Abnormal Statuses
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" width="32" height="32" /> <strong>[Evan] </strong>- Useful all levels
              especially pre-200
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" alt="Skill Bravado" width="32" height="32" /> <strong>[Hoyoung] </strong>- Useful if you need a small boost to
              one-shot enemies
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" alt="Skill Iron Will (Kaiser)" width="32" height="32" /> <strong>[Kaiser] </strong>- For
              pre-200 if you die a lot
          </li>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" width="32" height="32" />
              <strong>[Mercedes] </strong>- Best results for training Lv. 200+
          </li>
        </ul>
        <h3>For Low Crit Rate:</h3>
        <ul>
          <li>
              <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" width="32" height="32" />
              <strong>[Explorer Archers] - </strong>Up to 10%
          </li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" width="32" height="32" /> <strong>[Beast Tamer] </strong>- Up to 10%</li>
          <li><img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" width="32" height="32" /> <strong>[Phantom] </strong>- Up to 20%</li>
        </ul>
        <div><Link smooth href="#top" scroll>Go to top</Link></div>
        <h2 id="builds">Examples of Link Skill Builds:</h2>
        <h3>Training:</h3>
        <p><img src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748" alt="Skill Combo Kill Blessing" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" alt="Skill Unfair Advantage" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" alt="Skill Bravado" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" width="32" height="32"/></p>
        <p>(Aran, Ark, Cadena, Demon Avenger, Evan, Explorer Archer, Explorer Thief, Explorer Pirate, Hoyoung, Zero, Kanna, Mercedes)</p>
        <p>Rationale: Increased EXP Gain, Damage, and Damage Reduction if required. If you feel that you do not need extra survivability, you can swap out some Link Skills for more damage or other stats like %Crit Rate</p>
        <p>Other options: <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit"/> (Crit Rate, Max HP/MP), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Skill_Keen_Edge.png/revision/latest?cb=20180520131734" alt="Skill Keen Edge"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" alt="Skill Iron Will (Kaiser)"/> (Max HP), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct"/> (Crit Rate), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic"/> (Damage) (Beast Tamer, Cygnus Knights, Hayato, Illium, Kaiser, Phantom, and Xenon)</p>
        <h3>Bossing:</h3>
        <p><img src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" width="32" height="32"/> <img src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" width="32" height="32"/></p>
        <p>(Cygnus Knights, Beast Tamer, Shade, Demon Slayer, Explorer Pirate, Explorer Mage, Explorer Archer, Explorer Thief, Resistance, Kinesis, Luminous, Phantom)</p>
        <p>Rationale: Increased damage, %Crit Rate (to get 100% if needed), and %Ignore DEF. Other Link Skills are used for utility and survivability</p>
        <p>Other options: <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421" alt="Skill Terms and Conditions"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Skill_Invincible_Belief.png/revision/latest?cb=20191124005023" alt="Skill Invincible Belief"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" alt="Skill Knight's Watch"/> (Knockback Resistance), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing"/> (%Ignore DEF) (Angelic Buster, Ark, Demon Avenger, Explorer Warrior, Illium, Mihile, Xenon, and Zero)</p>
        <h3>Third Example:</h3>
        <p><img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call"/> <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism"/></p>
        <p>(Ark, Beast Tamer, Explorer Archer, Explorer Thief, Kinesis, Luminous, Mercedes, Phantom, Explorer Pirate, Zero, Shade, Kanna)</p>
        <p>Rational: A sort of what I'd use normally for both bossing and training without having to switch. I try to incorporate as much damage as possible but also include important stats I need such as %Crit Rate, %Crit Damage and %Ignore DEF</p>
        <p>Other options: <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing"/> (Damage, Abnormal Status Resistance), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage"/> (Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed"/> (Boss Damage), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence"/> (EXP Gain), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge"/> (Damage, %Ignore DEF), <img width="32" height="32" src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom"/> (Invincibility after reviving) (Cygnus Knights, Demon Avenger, Demon Slayer, Evan, Explorer Mage, and Resistance</p>
        <hr/>
        <p>For more info on Link Skills check out:</p>
        <p><a href="https://maplestory.fandom.com/wiki/Link_Skill">https://maplestory.fandom.com/wiki/Link_Skill</a></p>
        <p><a href="https://maplestory.aldu.tv/link-skills/">https://maplestory.aldu.tv/link-skills/</a></p>
        <p>For help optimizing your Link Skills check out:</p>
        <p><a href="https://www.youtube.com/watch?v=zT1jX_tnQjM">https://www.youtube.com/watch?v=zT1jX_tnQjM</a></p>
        <h4>Credits:</h4>
        <p><strong>Skill Icons + Info</strong>: MapleWiki</p>
      </ContentPage>
    )
}

export default LinkSkills
