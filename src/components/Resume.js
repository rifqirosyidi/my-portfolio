import React, { Component } from "react";
import { Button } from 'react-mdl';

class Resume extends Component {
  render() {
    return (
        <div style={{ textAlign: "center" }}>
            <a href="https://rifqirosyidi.github.io/file/CV%20Resume%20RIFQI%20ROSYIDI.pdf">
                <Button raised colored ripple style={{ margin: "20px" }}>
                    Download Resume
                </Button>
            </a>
        </div>
    );
  }
}

export default Resume;
