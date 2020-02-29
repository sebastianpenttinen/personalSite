import React, { Component } from "react";

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
  render() {
    return (
      <div style={{ position: "absolute" }}>
        <div style={this.props.hover ? rotatedInner : inner}>
          <div
            style={
              this.props.hover ? { display: "none" } : { display: "block" }
            }
          >
            <h1 style={subHeading}>{this.props.title}</h1>
            <p style={paragraphStyle}>{this.props.content}</p>
          </div>
          <div
            style={
              this.props.hover
                ? { transform: "rotateY(180deg)" }
                : {
                    transform: "rotateY(180deg)",
                    display: "none"
                  }
            }
          >
            <h1 style={subHeading}> Tech Stack</h1>
            <p style={paragraphStyle}>{this.props.backside}</p>
          </div>
        </div>
      </div>
    );
  }
}
