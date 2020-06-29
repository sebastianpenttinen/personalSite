import React, { Component } from "react";

const aboutStyle = {
  background: "#2b2b2b",
  paddingTop: "100px",
  paddingBottom: "66px",
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  marginBottom: "12px",
};

const paragraphStyle = {
  lineHeight: "30px",
  color: "#7a7a7a",
  textAlign: "justify",
};

const alternativeParagraph = {
  lineHeight: "30px",
  color: "#7a7a7a",
  textAlign: "center",
};

const aboutMeStyle = {
  paddingLeft: "25%",
  paddingRight: "25%",
};

const downloadStyle = {
  paddingTop: "6px",
  textAlign: "center",
};

const downloadButtonStyle = {
  marginTop: "6px",
  color: "#fff",
};

const hoverDownloadButtonStyle = {
  marginTop: "6px",
  color: "OrangeRed",
};

const downloadIconStyle = {
  marginRight: "15px",
  fontSize: "20px",
};

const phone = {
  paddingLeft: "5%",
  paddingRight: "5%",
};
export class About extends Component {
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      hover: false,
    };
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    return (
      <section style={aboutStyle}>
        <div style={this.props.isMobile ? phone : aboutMeStyle}>
          <h2 style={headerStyle}>About Me</h2>
          <p style={paragraphStyle}>
            I am a recent MSc in Computer Science graduate from Åbo Akademi
            University. Currently I am working as a Java developer at BeanBakers
            Ltd. Mainly focusing on projects with Spring, Quarkus and Vue.js. I
            have practical experience in the IT-field from working alongside my
            studies as a software developer and systems administrator. I also
            have experience teaching programming.
          </p>
          <p style={alternativeParagraph}>
            I am always looking for opportunities so contact me if you are
            interested.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={headerStyle}>Contact Me</h2>
          <p style={alternativeParagraph}>
            <span>sebastian.penttinen(at)gmail.com</span>
          </p>
        </div>
        <div style={downloadStyle}>
          <p>
            <a
              style={
                this.state.hover
                  ? hoverDownloadButtonStyle
                  : downloadButtonStyle
              }
              href="cv"
              className="button"
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              <i style={downloadIconStyle} className="fa fa-download"></i>
              Download Resume
            </a>
          </p>
        </div>
      </section>
    );
  }
}
