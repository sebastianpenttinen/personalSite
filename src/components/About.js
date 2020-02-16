import React, { Component } from "react";

const aboutStyle = {
  background: "#2b2b2b",
  paddingTop: "100px",
  paddingBottom: "66px",
  overflow: "hidden"
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  marginBottom: "12px"
};

const paragraphStyle = {
  lineHeight: "30px",
  color: "#7a7a7a"
};

const aboutMeStyle = {
  paddingLeft: "10%",
  paddingRight: "10%"
};

const downloadStyle = {
  paddingTop: "6px",
  textAlign: "center"
};

const dowloadButtonStyle = {
  marginTop: "6px",
  color: "#fff"
};

const howerdowloadButtonStyle = {
  marginTop: "6px",
  color: "OrangeRed"
};

const downloadIconStyle = {
  marginRight: "15px",
  fontSize: "20px"
};
export class About extends Component {
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      hover: false
    };
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    return (
      <section style={aboutStyle}>
        <div style={aboutMeStyle}>
          <h2 style={headerStyle}>About Me</h2>
          <p style={paragraphStyle}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam. "
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={headerStyle}>Contact Me</h2>
          <p style={paragraphStyle}>
            <span>sebastian.penttinen@gmail.com</span>
          </p>
        </div>
        <div style={downloadStyle}>
          <p>
            <a
              style={
                this.state.hover ? howerdowloadButtonStyle : dowloadButtonStyle
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
