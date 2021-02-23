import React, { lazy } from 'react'
import {Route, Switch } from "react-router-dom";

/*
    File that contains our different routes on the site
    Created by: Ikasuu, Fall 2020
*/

//Import all pages component here
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Content = lazy(() => import('../pages/Content'));
const Classes = lazy(() => import('../pages/Classes'));
const ContentRepository = lazy(() => import('../pages/content/ContentRepository'));
const EventRepository = lazy(() => import('../pages/events/EventRepository'));
const ClassOverview = lazy(() => import('../pages/ClassOverview'));
const Events = lazy(() => import('../pages/Events'));
const Resources = lazy(() => import('../pages/Resources'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/content/:id" component={ContentRepository}/>
            <Route path="/content" component={Content}/>
            <Route path="/classes/explorers/:id" render={(props) => <ClassOverview {...props} classGroup="explorers"/> }/>
            <Route path="/classes/cygnus-knights/:id" render={(props) => <ClassOverview {...props} classGroup="cygnus-knights"/> }/>
            <Route path="/classes/heroes/:id" render={(props) => <ClassOverview {...props} classGroup="heroes"/> }/>
            <Route path="/classes/resistance/:id" render={(props) => <ClassOverview {...props} classGroup="resistance"/> }/>
            <Route path="/classes/nova/:id" render={(props) => <ClassOverview {...props} classGroup="nova"/> }/>
            <Route path="/classes/sengoku/:id" render={(props) => <ClassOverview {...props} classGroup="sengoku"/> }/>
            <Route path="/classes/flora/:id" render={(props) => <ClassOverview {...props} classGroup="flora"/> }/>
            <Route path="/classes/other/:id" render={(props) => <ClassOverview {...props} classGroup="other"/> }/>
            <Route path="/classes" component={Classes}/>
            <Route path="/events/:id" component={EventRepository}/>
            <Route path="/events" component={Events}/>
            <Route path="/resources" component={Resources}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
