import React, { Component } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { HashLink as Link } from 'react-router-hash-link';
import { Image } from 'react-bootstrap';

import SkillInfo from './SkillInfo'
import { version, loadingImage } from '../../special/Values';

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
        const { skillData } = this.state
        this._isMounted = true;
        //Array to hold all our requests that we will execute in one call
        const request = [];
        //Array to hold all retrieved skill data
        const retrievedHolder = [];
        //Array to store offline skills temporarily to insert into retrievedHolder at the end
        const offlineHolder = [];

        axiosRetry(axios, { retries: 5 }); //Retries request up to 5 times if request fails
        //If skill has "offline" tag in JSON file, don't retrieve it from API and push it into the offlineHolder instead
        skillData.forEach( (skill, index) => {
            if(!skill.offline){
                request.push(axios.get(`https://maplestory.io/api/GMS/${version}/job/skill/${skill.id}`));
            }
            else{
                offlineHolder.push([skill, index]);
            }
        })
        //Execute all calls then store the response data in retrievedHolder
        axios.all(request)
            .then(response => {
                response.forEach(it => retrievedHolder.push(it.data));
                //Push all offline skills into their correct positions
                offlineHolder.forEach( skill => retrievedHolder.splice(skill[1], 0, skill[0]));
                if(this._isMounted){
                    this.setState({
                        retrievedData: retrievedHolder,
                        loading: false
                    });
                }
            })
            .catch(err => console.log(err));

    }

    // Re-renders component when settings change via UtilityButton (QuickJump)
    componentDidUpdate(prevProps, prevState){
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
        const { loading, retrievedData, settings } = this.state;
        
        return (
            <div>
                {
                    loading ? <div style={{margin: '2rem 0% 2rem 45%'}}><Image src={loadingImage}/><div style={{paddingLeft: '0.5rem'}}>Loading!</div></div> : 
                    <div>
                        {
                            retrievedData.map((skill, index) => 
                                skill.offline ?
                                    <div key={index}>
                                        <SkillInfo 
                                            skillData={skill}
                                            name={skill.name}
                                            properties={{}}
                                            shortDesc={skill.shortDesc}
                                            maxLevel={skill.maxLevel}
                                            animationSetting={settings.animations}/>
                                    </div>
                                :
                                //Offline skills require fetching all their info from json file instead
                                    <div key={index}>
                                        <SkillInfo 
                                            skillData={this.state.skillData[index]}
                                            name={skill.description.name}
                                            desc={skill.description.desc}
                                            shortDesc={skill.description.shortDesc}
                                            properties={skill.properties}
                                            levelProperties={skill.levelProperties}
                                            maxLevel={skill.properties.maxLevel}
                                            animationSetting={settings.animations}/>
                                    </div>
                            )
                        }
                        <Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}><span className="jump-button-tabs"/></Link>
                    </div>
                }
            </div>
        );
    }
}

//Used to scroll to anchor tags
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
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

export default SkillContainer;
