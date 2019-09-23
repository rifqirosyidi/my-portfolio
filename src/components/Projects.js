import React, { Component } from 'react';
import {Tab, Tabs, Grid, Cell} from 'react-mdl';
import '../App.css';
import ProjectComponent from './projects/ProjectComponent';
import PythonImage from '../image/python.jpg';
import DjangoImage from '../image/django.jpg';
import ReactImage from '../image/react.png';
import PhpImage from '../image/php.png';
import JavaImage from '../image/java.jpg';
import CodingImage from '../image/coding.jpg';

class Projects extends Component {

    state = {
        activeTab: 0,
        AllRes: [],
        PyRes: [],
        DjRes: [],
        JvRes: [],
        RcRes: []
    }


    componentDidMount() {
        let AllAPICall = fetch("https://api.github.com/users/rifqirosyidi/repos?sort=updated&per_page=100");
        let PythonAPICall = fetch("https://api.github.com/search/repositories?q=python+in:name+user:rifqirosyidi&sort=updated&per_page=100"); 
        let DjangoAPICall = fetch("https://api.github.com/search/repositories?q=django+in:name+user:rifqirosyidi&sort=updated&per_page=100");
        let JavaAPICall = fetch("https://api.github.com/search/repositories?q=language:java+user:rifqirosyidi&sort=updated&per_page=100")
        let ReactAPICall = fetch("https://api.github.com/search/repositories?q=react+in:name+user:rifqirosyidi&sort=updated&per_page=100");
        let PhpAPICall = fetch("https://api.github.com/search/repositories?q=language:php+user:rifqirosyidi&sort=updated&per_page=100");

        Promise.all([AllAPICall, PythonAPICall, DjangoAPICall, JavaAPICall, ReactAPICall, PhpAPICall])
          .then(values => Promise.all(values.map(value => value.json())))
          .then(finalVals => {
            const allAPIResp = finalVals[0];
            const pythonAPIResp = finalVals[1];
            const djangoAPIResp = finalVals[2];
            const javaAPIResp = finalVals[3]
            const reactAPIResp = finalVals[4];
            const phpAPIResp = finalVals[5];
            this.setState({
                AllRes: allAPIResp,
                PyRes: pythonAPIResp.items,
                DjRes: djangoAPIResp.items,
                JvRes: javaAPIResp.items,
                RcRes: reactAPIResp.items,
                PhpRes: phpAPIResp.items,
            })
            console.log(reactAPIResp.items)
          });
    }

    // componentDidMount(){
    //     const urlFetch = fetch('https://api.github.com/search/repositories?q=python+in:name+user:rifqirosyidi&per_page=100')
    //     urlFetch.then( res => {
    //        if(res.status === 200)
    //           return res.json()   
    //     }).then( resJson => {
    //        this.setState({
    //            myRepos: resJson.items
    //        })
    //     })
    // }
     

    handleChange = tabId => {
        tabId = parseInt(tabId)
        this.setState({
            activeTab: tabId
        })
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <ProjectComponent data={this.state.AllRes} sourceImage={CodingImage}/>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <ProjectComponent data={this.state.PyRes} sourceImage={PythonImage} />
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <ProjectComponent data={this.state.DjRes} sourceImage={DjangoImage} />
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <ProjectComponent data={this.state.JvRes} sourceImage={JavaImage} />
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div>
                    <ProjectComponent data={this.state.RcRes} sourceImage={ReactImage} />
                </div>
            )
        }else if (this.state.activeTab === 5) {
            return (
                <div>
                    <ProjectComponent data={this.state.PhpRes} sourceImage={PhpImage} />
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.handleChange(tabId)} ripple>
                    <Tab>All Projects</Tab>
                    <Tab>Python</Tab>
                    <Tab>Django</Tab>
                    <Tab>Java</Tab>
                    <Tab>React</Tab>
                    <Tab>PHP</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;