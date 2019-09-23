import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-gradient-color" >
                    <Cell col={12} >
                        <img className="image-avatar-rounded" src={require("../image/avatar.jpeg")}  alt="" />
                        <div className="banner-text">
                            <p>Hello, This is</p>
                            <p className="banner-name">Rifqi Rosyidi</p>
                            <p className="small-text">I'm a Web Developer | Designer</p>
                            <small>HTML | CSS | Javascript | PHP | Python | Django | NodeJS | React | Laravel</small>
                        </div>
                        <div className="social-links">
                            <a class="social-item" href="https://github.com/rifqirosyidi" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a class="social-item" href="https://www.linkedin.com/in/rifqi-rosyidi-125804169/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a class="social-item" href="https://www.facebook.com/rifqi.n.rifqi.9" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a class="social-item" href="https://www.instagram.com/rief_01/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;