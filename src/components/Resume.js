import React, { Component } from "react";
import { Button } from 'react-mdl';

class Resume extends Component {
  render() {
    return (
        <div style={{ textAlign: "center" }}>
            <a href="https://rifqirosyidi.github.io/file/CV%20Resume%20RIFQI%20ROSYIDI.pdf">
                <Button raised ripple style={{ margin: "20px", background: "white", color: "#fc6a00" }}>
                    Download Resume
                </Button>
            </a>
        </div>
    );
  }
}

export default Resume;
