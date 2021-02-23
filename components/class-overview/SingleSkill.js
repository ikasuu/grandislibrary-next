import React, { Component, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import axios from 'axios';
import axiosRetry from 'axios-retry';

import { version, loadingImage } from '../../special/Values';
import SkillInfo from './SkillInfo'

/*
    This file contains Link Skills and Notable Skills, any skills that need to be rendered on its own
*/

/*
    Renders a single skill, makes API call and renders a SkillInfo component
    Created by: Ikasuu, Fall 2020
*/

export class SingleSkill extends Component {
    constructor(props) {
        super(props);
    
        //SkillContainer holds all the required skills we need to render in skillData
        //Their data will be stored in retrievedData after it has been fetched
        this.state = {
             retrievedData: [],
             skillData: props.skillData,
             loading: true
        };
    }

    componentDidMount(){
        const { skillData } = this.state
        this._isMounted = true;
        axiosRetry(axios, { retries: 5 }); //Retries request up to 5 times if request fails
        //Execute call then store it in the state
        axios.get(`https://maplestory.io/api/GMS/${version}/job/skill/${skillData.id}`)
            .then(response => {
                if(this._isMounted){
                    const skillData = [];
                    skillData.push(response.data);
                    this.setState({
                        retrievedData: skillData,
                        loading: false
                    });
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount(){
        // Need to control isMounted value so we cancel the API call when component is unmounted
        this._isMounted = false;
    }

    render() {
        const { loading, retrievedData } = this.state
        return (
            <div>
            {
                loading ? <div style={{margin: '2rem 40% 2rem 40%'}}><Image src={loadingImage}/><div style={{paddingLeft: '0.5rem'}}>Loading!</div></div> : 
                <div>
                {
                    retrievedData.map((skill, index) => 
                        <div key={skill.description.id}>
                            <SkillInfo 
                                skillData={this.state.skillData}
                                name={skill.description.name}
                                desc={skill.description.desc}
                                shortDesc={skill.description.shortDesc}
                                properties={skill.properties} 
                                maxLevel={skill.properties.maxLevel}/>
                        </div>)
                }
                </div>
            }
            </div>
        );
    }
}

/*
    Component to hold link skill
    Created by: Ikasuu, Fall 2020
*/

export function LinkSkill({linkSkill}) {
    return (
        <div>
            <h2>Link Skill</h2>
            <SingleSkill skillData={linkSkill}/> 
        </div>
    );
}

/*
    Displays the notable skills in the class properties section and handles modal logic
    Created by: Ikasuu, Fall 2020
*/

export function NotableSkill({ skill }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <span>
            <Image src={skill.icons[0]} className="hvr-grow" style={{margin: '0 0.25rem 0.5rem 0.25rem', cursor: 'pointer'}} onClick={handleShow}/>
            <Modal centered  show={show} onHide={handleClose} aria-labelledby="notable-skill" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="notable-skill">
                            {skill.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={skill.animations[0]} style={{width: '100%', backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)'}}/>
                </Modal.Body>
            </Modal>
        </span>
    );
}

export default LinkSkill;
