import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardActions, List, ListItem, ListItemContent, ListItemAction, Icon } from "react-mdl";
import AvatarImage from "../image/avatar.jpeg";

class Contact extends Component {
  render() {
    return (
      <div>
        <p className="title-header-custom">Contact Page</p>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid>
            <Cell col={6}>
              <Card
                shadow={0}
                style={{
                  width: "256px",
                  height: "256px",
                  background: `url(${AvatarImage}) center / cover`,
                  margin: "auto"
                }}
              >
                <CardTitle expand />
                <CardActions
                  style={{
                    height: "52px",
                    padding: "16px",
                    background: "rgba(0,0,0,0.2)"
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                  >
                    Profile
                  </span>
                </CardActions>
              </Card>
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                <strong>Rifqi Rosyidi</strong>
                <br />
                Junior Web Developer
                <br />
                Student at STMIK PPKIA Pradnya Paramita Malang
              </p>
            </Cell>
            <Cell col={6}>
              <p className="title-content">Contact</p>
              <List style={{ width: "100%" }}>
                <ListItem twoLine>
                  <ListItemContent avatar="phone" subtitle="Phone Number">
                    +6281 - 3219 - 5119
                  </ListItemContent>
                  <ListItemAction>
                      <Icon name="phone" className="color-orange" />
                  </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                  <ListItemContent avatar="mail" subtitle="Email - Primary">
                    rief.rosyidi@gmail.com
                  </ListItemContent>
                  <ListItemAction>
                      <Icon name="mail" className="color-orange" />
                  </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                  <ListItemContent avatar="email" subtitle="Email - Secondary">
                    rifqi.rosyidi@gmail.com
                  </ListItemContent>
                  <ListItemAction>
                      <Icon name="mail" className="color-orange" />
                  </ListItemAction>
                </ListItem>
              </List>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
