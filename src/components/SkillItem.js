import React, { Component } from "react";

const skillStyle = {
  padding: "5px",
  font: "15px 'opensans-bold', sans- serif",
  textAlign: "Left",
  fontWeight: "700"
};
export class SkillItem extends Component {
  render() {
    return <li style={skillStyle}>{this.props.skill}</li>;
  }
}
