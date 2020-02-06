import React, { Component } from "react";
import { SkillItem } from "./SkillItem";

const skillStyle = {
  background: "#fff",
  paddingTop: "50px",
  overflow: "hidden"
};

const colStyle = {
  paddingLeft: "10%",
  paddingRight: "10%"
};

const headingStyle = {
  color: "Black",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "2.0em"
};

const headingSpanStyle = {
  borderBottom: "3px solid #11abb0",
  paddingBottom: "6px"
};

const ulStyle = {
  display: "inline-block",
  marginTop: "10px",
  listStyleType: "none",
  marginLeft: "5.5%"
};
export class Skills extends Component {
  render() {
    return (
      <section style={skillStyle}>
        <div style={colStyle}>
          <h1 style={headingStyle}>
            <span style={headingSpanStyle}>Skills</span>
          </h1>
        </div>

        <div>
          <div>
            <ul style={ulStyle}>
              <SkillItem skill="JavaScript" />
              <SkillItem skill="Java" />
              <SkillItem skill="React" />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
