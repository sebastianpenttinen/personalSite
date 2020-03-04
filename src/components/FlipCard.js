import React, { Component } from "react";
import { SocialIcon } from "./SocialIcon";
import { Button } from "react-bootstrap";
const subHeading = {
  color: "#fff"
};

const paragraphStyle = {
  lineHeight: "30px",
  color: "#7a7a7a"
};
const inner = {
  textAlign: "center",
  transition: "transform 0.8s"
};

const rotatedInner = {
  transform: "rotateY(180deg)",
  transition: "transform 0.8s",
  textAlign: "center"
};

export class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false
    };
  }
  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div style={{ position: "absolute" }}>
        <div style={this.state.clicked ? rotatedInner : inner}>
          <div
            style={
              this.state.clicked ? { display: "none" } : { display: "block" }
            }
          >
            <h1 style={subHeading}>{this.props.title}</h1>
            <p style={paragraphStyle}>{this.props.content}</p>
            <Button onClick={this.handleClick} variant="dark">
              Learn More
            </Button>
          </div>
          <div
            style={
              this.state.clicked
                ? { transform: "rotateY(180deg)" }
                : {
                    transform: "rotateY(180deg)",
                    display: "none"
                  }
            }
          >
            <h1 style={subHeading}> Tech Stack</h1>
            <p style={paragraphStyle}>{this.props.backside}</p>
            <div style={{ fontSize: "50px" }}>
              <SocialIcon
                className="fa fa-github"
                url={this.props.url}
                aria="github"
              />
              <div>
                <Button onClick={this.handleClick} variant="dark">
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
