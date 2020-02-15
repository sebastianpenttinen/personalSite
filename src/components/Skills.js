import React, { Component } from "react";
import { SkillItem } from "./SkillItem";

const skillStyle = {
  background: "#fff",
  paddingTop: "50px",
  overflow: "hidden",
  textAlign: "center"
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
  columnCount: "4",
  paddingLeft: "0"
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

        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <div style={{ padding: "20px" }}>
            <ul style={ulStyle}>
              <SkillItem skill="Python" />
              <SkillItem skill="Django" />
              <SkillItem skill="JavaScript" />
              <SkillItem skill="Java" />
              <SkillItem skill="Git" />
              <SkillItem skill="React" />
              <SkillItem skill="HTML" />
              <SkillItem skill="CSS" />
              <SkillItem skill="C#" />
              <SkillItem skill="SQL" />
              <SkillItem skill="Latex" />
              <SkillItem skill="Ranorex" />
              <SkillItem skill="Software Testing" />
              <SkillItem skill="Test Automation" />
              <SkillItem skill="Reinforcement Learning" />
              <SkillItem skill="Data Analysis" />
              <SkillItem skill="Machine Learning" />
              <SkillItem skill="Technical Support" />
              <SkillItem skill="Agile Development" />
              <SkillItem skill="Scrum" />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
