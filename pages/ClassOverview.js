import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import ClassIntro, { ClassCreation, ClassExtraContent } from '../components/class-overview/ClassIntro';
import ClassOutro from '../components/class-overview/ClassOutro';
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import SkillTab from '../components/class-overview/SkillTab';

/*
    Repsonsible for rendering whole Class Overview page
    Created by: Ikasuu, Fall 2020
*/

export class ClassOverview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: true,
            fail: false
        };
    }

    //Fetch the class with the corresponding url id
    componentDidMount(){
        fetch(`./data/${this.props.classGroup}/${this.props.match.params.id}.json`)
        .then(res => res.json())
        .then(fetchedData => this.setState({data: fetchedData, loading: false, fail: false}))
        .catch(err => this.setState({fail: true}));
    }

    //If url id changes, fetch and render the new class
    //When page updates, jump to anchor tag in url if there is one
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.setState({loading: true});
            fetch(`./data/${this.props.classGroup}/${this.props.match.params.id}.json`)
            .then(res => res.json())
            .then(fetchedData => this.setState({data: fetchedData, loading: false, fail: false}))
            .catch(err => this.setState({fail: true}));
        };
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "").split("#");
            const element = document.getElementById(id[1]);
            if(element){element.scrollIntoView();}
        };
    }

    render() {
        const { loading, fail, data } = this.state ;
        return (
            <div>
                <HeaderImage imageUrl={HeaderImageUrl.library}/>
                {
                    loading ? <Container>{fail ? <h3>Looks like there was an error in the URL you entered,
                        the page you are looking for may be moved or deleted.</h3> : ""}</Container> :
                    <div>
                      <Helmet>
                        <title>{`${data.class} | Grandis Library`}</title>
                        <meta content={data.meta} name="description"/>
                      </Helmet>
                      <Container>
                        <ClassIntro data={data}/>
                        {data.content.howToCreate && <ClassCreation classTitle={data.class} howToCreate={data.content.howToCreate}/>}
                        {data.content.extraContent && <ClassExtraContent title={data.content.extraContent.title} content={data.content.extraContent.content}/>}
                        <div id="skill"/>
                        <SkillTab
                          primary={data.skill.primary}
                          fifth={data.skill.fifth} hyper={data.skill.hyper}
                          hyperSkillBuild={data.content.hyperBuild}
                          nodeInfo={data.content.nodeInfo}/>
                        <hr/>
                        <ClassOutro classGroup={data.content.classGroup} classTitle={data.class} moreInfo={data.content.moreInfo} credits={data.content.credits}/>
                      </Container>
                    </div>
                }
            </div>
        );
    }
}

export default ClassOverview;