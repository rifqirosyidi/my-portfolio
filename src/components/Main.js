import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Contact from './Contact';


function Main() {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='/contact' component={Contact} />
        </Switch>
    );
}

export default Main;