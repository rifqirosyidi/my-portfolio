import React, { Component } from 'react';
import { 
    Grid, Cell, 
    Card, CardTitle, CardActions, CardMenu, CardText,
    Button, IconButton 
} from 'react-mdl';
import Moment from 'react-moment';
import 'moment-timezone';

class ProjectComponent extends Component {

    render() {
        return (
            <div>
                <Grid>
                    {this.props.data.map(myRepo => (
                        <Cell key={myRepo.id} col={4} >
                        <Card shadow={0} style={{ fontFamily: 'Thasadith', width:'auto', margin: 'auto'}}>
                            <CardTitle 
                                style={{ background: `url(${this.props.sourceImage}) center / cover` }} className="card-title">{myRepo.name.toLowerCase()}</CardTitle>
                            <CardText>
                                Last Updated at : <Moment format="DD-MMMM-YYYY HH:mm">{myRepo.updated_at}</Moment>
                            </CardText>
                            <CardActions border>
                                <a href={myRepo.html_url}><Button colored>Github</Button></a>
                                {myRepo.homepage ? (
                                <a href={myRepo.homepage}><Button colored>Live Demo</Button></a>
                                ) : null}

                            </CardActions>
                            <CardMenu style={{color: '#666'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default ProjectComponent;