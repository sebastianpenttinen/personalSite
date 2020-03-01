import React, { Component } from "react";
import { SkillItem } from "./SkillItem";
import { Row, Container, Col } from "react-bootstrap";
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

const skillsStyle = {
  padding: "30px",
  fontSize: "larger",
  font: "15px 'opensans-bold', sans- serif",
  textAlign: "center",
  fontWeight: "700"
};

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
  }
  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);
  render() {
    return (
      <section ref={this.Ref} style={skillStyle}>
        <div style={colStyle}>
          <h1 style={headingStyle}>
            <span style={headingSpanStyle}>Skills</span>
          </h1>
        </div>

        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <div style={skillsStyle}>
            <Container>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>C#</Col>
                <Col>SQL</Col>
                <Col>Scrum</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>Git</Col>
                <Col>HTML</Col>
                <Col>Javascript</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>CSS</Col>
                <Col>Docker</Col>
                <Col>Open Ai Gym</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>Java</Col>
                <Col>Ranorex</Col>
                <Col>Data Analysis</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>Latex</Col>
                <Col>Test Automation</Col>
                <Col>Software Testing</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>React</Col>
                <Col>Machine Learning</Col>
                <Col>Technical Support</Col>
              </Row>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>Django</Col>
                <Col>Agile Development</Col>
                <Col>Reinforcement Learning</Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    );
  }
}
