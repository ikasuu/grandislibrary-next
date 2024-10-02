import React, { Component } from 'react';
// import Link from 'next/link';

import SkillInfo from './SkillInfo'

/*
    This file contains both SkillContainer and VSkillContainer (exclusively for 5th Job Skills), containers to hold a list of skills
*/

/*
    Skill container that will hold all our skills
    Responsible for getting all skill data in order such as retrieving from API and combining with offline data if needed
    Created by: Ikasuu, Fall 2020
*/

export class SkillContainer extends Component {

    constructor(props) {
        super(props);
    
        //SkillContainer holds all the required skills we need to render in skillData
        //Their data will be stored in retrievedData after it has been fetched
        //Loading is used to display loading image
        this.state = {
             retrievedData: [],
             skillData: props.skillData,
             loading: true,
             settings: props.settings
        };
    }

    componentDidMount(){
        this._isMounted = true;
    }

    // Re-renders component when settings change via UtilityButton (QuickJump)
    componentDidUpdate(prevProps){
        if(prevProps.settings !== this.props.settings){
            this.setState({settings: this.props.settings});
        };
    }

    // sets isMounted to false to cancel all remaining API calls
    componentWillUnmount(){
        this._isMounted = false;
    }

    //Map each skill as a SkillInfo component by passing the following info: Name of skill, Skill Description, Short Description, Skill Properties, and Skill Master Level
    render() {
        const { skillData, settings } = this.state;
        
        return (
            <div>
                {
                    skillData.map((skill, index) => 
                            <div key={index}>
                                <SkillInfo 
                                    skillData={skill}
                                    name={skill.name}
                                    properties={{}}
                                    shortDesc={skill.shortDesc}
                                    maxLevel={skill.maxLevel}
                                    animationSetting={settings.animations}/>
                            </div>
                    )
                }
                <a href="#skill"><span className="jump-button-tabs"/></a>
            </div>
        );
    }
}

/*
    Skill container for 5th job skills, retrieved info from JSON instead of API (offline skills)
    Created by: Ikasuu, Fall 2020
*/

export function VSkillContainer({skillData, settings}) {
    return (
        <div>
            {
                skillData.map( skill => 
                    <div key={skill.id}>
                        <SkillInfo 
                            skillData={skill}
                            name={skill.name}
                            properties={{}}
                            shortDesc={skill.shortDesc}
                            maxLevel={"25 + 5"}
                            animationSetting={settings.animations}/>
                    </div>)
            }
        </div>
    );
}

export function HexaSkillContainer({skillData, settings}){
    return(
        <div>
            {
                skillData.map( skill => 
                    <div key={skill.id}>
                        <SkillInfo 
                            skillData={skill}
                            name={skill.name}
                            properties={{}}
                            shortDesc={skill.shortDesc}
                            maxLevel={"30"}
                            animationSetting={settings.animations}/>
                    </div>)
            }
        </div>
    )
}

export default SkillContainer;
